console.log('Starting app.js initialization'); // Debug: Confirm script runs

import { getCountryByEANPrefix } from './countries.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired'); // Debug: Confirm DOM is ready

  // Check if Html5QrcodeScanner is available
  if (typeof Html5QrcodeScanner === 'undefined') {
    document.getElementById('scanner-error').textContent = 'Error: Barcode scanner library failed to load. Please try refreshing the page.';
    console.error('Html5QrcodeScanner not loaded'); // Debug
    return;
  }
  console.log('Html5QrcodeScanner loaded successfully'); // Debug

  // Initialize map and scanner
  let map = null;
  let scanner = null;

  // Select camera and initialize scanner
  Html5Qrcode.getCameras().then(devices => {
    console.log('Cameras detected:', devices); // Debug
    if (!devices || !devices.length) {
      document.getElementById('scanner-error').textContent = 'No cameras found. Please connect a camera.';
      console.error('No cameras found'); // Debug
      return;
    }

    // Prefer back camera
    const backCamera = devices.find(device => device.label.toLowerCase().includes('back')) || devices[0];
    console.log('Selected camera:', backCamera); // Debug

    scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 20,
        qrbox: { width: 300, height: 300 },
        disableFlip: true,
        formatsToSupport: [
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.UPC_A,
          Html5QrcodeSupportedFormats.CODE_128,
          Html5QrcodeSupportedFormats.QR_CODE
        ],
        videoConstraints: { deviceId: backCamera.id }
      },
      false
    );

    // Success callback
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Raw barcode: "${decodedText}"`, { decodedResult }); // Debug raw input
      const cleanBarcode = decodedText.trim().replace(/\D/g, ''); // Remove non-digits
      if (cleanBarcode.length < 8 || cleanBarcode.length > 13) {
        document.getElementById('scanner-error').textContent = 'Invalid barcode length. Must be 8-13 digits.';
        document.getElementById('retry-scan').style.display = 'block';
        console.warn('Invalid barcode length:', cleanBarcode); // Debug
        return;
      }
      const prefix = cleanBarcode.slice(0, 3).padStart(3, '0'); // Ensure 3 digits
      console.log(`Extracted prefix: "${prefix}"`); // Debug prefix
      const country = getCountryByEANPrefix(prefix);
      console.log(`Country match:`, country); // Debug match result
      
      document.getElementById('country-name').textContent = `${country.flag} ${country.name}`;
      document.getElementById('scanner-error').textContent = '';
      document.getElementById('retry-scan').style.display = 'none';
      showMapLocation(country.name);
      
      scanner.clear();
    }

    // Failure callback
    function onScanFailure(error) {
      document.getElementById('scanner-error').textContent = `Scan failed: ${error}. Try adjusting lighting or barcode position.`;
      document.getElementById('retry-scan').style.display = 'block';
      console.warn(`Barcode scan failed: ${error}`, { error }); // Debug
    }

    // Render scanner
    try {
      console.log('Rendering scanner'); // Debug
      scanner.render(onScanSuccess, onScanFailure);
    } catch (error) {
      document.getElementById('scanner-error').textContent = `Failed to start scanner: ${error.message}`;
      document.getElementById('retry-scan').style.display = 'block';
      console.error('Scanner render failed:', error); // Debug
    }

    // Retry scan
    document.getElementById('retry-scan').addEventListener('click', () => {
      console.log('Retry scan clicked'); // Debug
      document.getElementById('scanner-error').textContent = '';
      document.getElementById('retry-scan').style.display = 'none';
      scanner.clear();
      scanner.render(onScanSuccess, onScanFailure);
    });
  }).catch(err => {
    document.getElementById('scanner-error').textContent = `Camera access failed: ${err}`;
    console.error('Camera access failed:', err); // Debug
  });

  // Show map location with Nominatim
  async function showMapLocation(country) {
    console.log('Showing map for country:', country); // Debug
    if (!map) {
      map = L.map('map').setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }

    map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    const countryCoords = await getCountryCoordinates(country);
    if (countryCoords) {
      L.marker(countryCoords).addTo(map).bindPopup(`${country}`).openPopup();
      map.setView(countryCoords, 5);
      console.log('Map updated with coords:', countryCoords); // Debug
    } else {
      map.setView([0, 0], 2);
      console.log('No coords found, using global view'); // Debug
    }
  }

  // Get coordinates using Nominatim
  async function getCountryCoordinates(country) {
    try {
      console.log('Fetching coords for:', country); // Debug
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(country)}&format=json&limit=1`, {
        headers: { 'User-Agent': 'BarcodeCountryChecker/1.0' }
      });
      const data = await response.json();
      if (data[0]) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
      console.warn('No coords found for:', country); // Debug
    } catch (error) {
      console.warn(`Failed to fetch coordinates for ${country}: ${error}`); // Debug
    }
    return null;
  }

  // Manual input handling
  function checkBarcodeManually() {
    console.log('Checking manual input'); // Debug
    const barcode = document.getElementById('manual-input').value.trim();
    if (!barcode) {
      document.getElementById('manual-input-error').textContent = 'Please enter a barcode.';
      console.warn('Empty manual input'); // Debug
      return;
    }
    const cleanBarcode = barcode.replace(/\D/g, ''); // Remove non-digits
    if (!/^\d{8,13}$/.test(cleanBarcode)) {
      document.getElementById('manual-input-error').textContent = 'Enter a valid 8-13 digit barcode.';
      console.warn('Invalid manual barcode:', cleanBarcode); // Debug
      return;
    }
    const prefix = cleanBarcode.slice(0, 3).padStart(3, '0'); // Ensure 3 digits
    console.log(`Manual input barcode: "${cleanBarcode}", prefix: "${prefix}"`); // Debug
    const country = getCountryByEANPrefix(prefix);
    console.log(`Manual country match:`, country); // Debug
    document.getElementById('country-name').textContent = `${country.flag} ${country.name}`;
    document.getElementById('manual-input-error').textContent = '';
    showMapLocation(country.name);
  }

  // Toggle dark mode
  function toggleDarkMode() {
    console.log('Toggling dark mode'); // Debug
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }

  // Initialize dark mode
  if (localStorage.getItem('darkMode') === 'true') {
    console.log('Applying saved dark mode'); // Debug
    toggleDarkMode();
  }

  // Report suspicious product
  function reportSuspiciousProduct() {
    console.log('Reporting suspicious product'); // Debug
    const barcode = document.getElementById('manual-input').value || 'Unknown';
    alert(`Thank you for reporting! Barcode: ${barcode} will be investigated.`);
  }

  // Event listeners
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  document.getElementById('check-manual').addEventListener('click', checkBarcodeManually);
  document.getElementById('report-suspicious').addEventListener('click', reportSuspiciousProduct);

  // Cleanup
  window.addEventListener('beforeunload', () => {
    console.log('Cleaning up scanner'); // Debug
    if (scanner) {
      scanner.clear();
    }
  });
});

// Catch any top-level errors
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Global error:', { message, source, lineno, colno, error }); // Debug
};
