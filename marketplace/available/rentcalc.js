// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gHSRtF11TT+f3XYlmaOcFAvYqaqYo+ShRPslzjJ9t2UwGHpKTQSCCrIZr6DUnMUOecunuBuo6I6lO5gzNHAbcPyUCStmJJBcEGy70ruByrVofZWAN0Hc9n+5ePEDDkQEqqB6HdXxS+kNHtU8Ldy/6XlRhhCgsYh/YZ1hInsEjUs2+2kq1jYQfVeGSnDTJ5+XOiQGj9Qjrxn6piPpE4dq21E/Z2Yv1eNZ08rdGaUMIgzbUBUPL8axemt5sv0KEOQDCQcXqLeNXGFDA7PjXSGdDVFmAu86M3sR1vDBIrcq4AXiCKx+ZHcMuV7/4rNGNkCaF5hYYMaAXHtaTMg8eYsbjohj04+dE+lWE/q+1IvqH1Dy2zSSTp6jXT7yY1+CNpdpLVKF0tYToV98ABG2NO/eOEC/RGD+Wj0Ub9SOww+/on3HUjZNHwWIRdSPOBFlkCdFNrRzPoHouIzdJxRjNoeFm7mXSxmgAOB1boOMY2ihXGtNlz8AP9IAO7W1yAKvZSf0f86Gg0iumkoNrX/XPOTRXIq0BYacCiGiPz3SnSbB9oPKb2+yLdpNDxRDlKc+ZmZxad3eXlUP6AxD7fhbAui5AZEeZlmdyammehIipIN1OtjWbviW9A8Ay2TwZ4vh4zBCugx/EHGVgDrzsg8/WuFHu+k/NPkMUyWIMbdZxkGAGonMI4R9TsfQDiF3LBvJPN8EVEFzsVlZQcMDwgmQoaVL8cWX4BPPHD9+Yq4jgAPOxYMhNlu26CDaV9pqeaQ3ko1pAdmA8EBojSwbPMSr17CMJOSzdV2updjVQF4Ia94AeixhIrgOoN9p13W10401+d8/9/+/HQ4tiQyL3m71O5lCgNPupWp/LRzfNJNfdC+zbZM9rw+7Ao7gxIVtV0SxElEYeSzZApAuzNGMie2ER2AVCuxqUJMUMOGC3CTB2oXEh8KsXcf4Gqy2/Rl4VlREcLtVhm2BXhmD69ttLTRm5KBqkYTX5ix1Uq2roaGT7cNpfscoYXveJLouDsZyHXc6oenPbhgVqzcYg7aZKTEPa6hAxXF8iM68VyDG/J2V1KgiuyjkVopYbun8A+vDdbXq49XcFN+6ffOdACGcAFHuDaNio/oWML2wkfMQfcRS5pVmJC61zrUfWbQTxpXlKr+IfMFEG4vN5dg6lY4i2qXXjOsc8S7qQdxxwoQSt+/mCwqi60vFlHdrTswbQm+RhTciKKmh';
  const _INTEGRITY_HASH = 'cdd9660f8fae99a6dda9ab815bb449a25ca0df9287516928dda4b5f4da5c9e49';
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
