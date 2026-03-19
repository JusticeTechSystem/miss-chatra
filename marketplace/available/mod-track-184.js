// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AJ0YnwCT7WeHza+4/96U26pTSkcOG90Wg2urrdEWaUvS+bzL4E6hp1c3WVw42KdDd0oc4UcezAwO8e4q873VsWwXpH67wVyFBaH27VaRJC9PI6wxtfwapl4Trf8hRLQnU6/jBs6Sz5h3IPGxMQZ9d6eaVyIRouqteqF+svRG5C5MDKuNiJFRtVnGSqtKj03SQkuBEneKr3VuYbuueh+N4pl6sAXJBjY3LGSQlfwInpS0j3ki7daLpcOHcR84Y8Y6oQuRVjMl1PedeTmT1ZcVoV7eRC3m0nyW4j/pMOSMqjqpRINU77rXMR2uczynVoSogW50eLyZwMIyCMxLnDXUcKNPbjXltr+roh2Bv1fD5ZLHlG3yIXlKXZmMGsxZeVpAOG0nlyzMDpey3VUC1zqx+UcNZjc19DRoNJWmPXNMVzivE/UHr+n5g51O9nXiHXVKvKNS1jHkXbU0BNWaZvDyIWaT19Ii+wO9vDYaZRzh6vtH+PVpHcPfUiBErNTiZWzCf8X2uPVodwZScW/CM3o4R6cZo5m4u/nSXhDUvtbr8FQbxFLh2w8+i50/XUDz2A7SwBUwnPtvZw79mUzqad9dUCdxqRo52OcgHYxklgbtTzUAj00sHXsymqxl5ZTDOqu0GZz1oEtRXv/ud350YVvt06vOLP6+suA83sFhGV85e4EVZBxW9hCpseRNIeb41StP7mF0qzXMlymCtRWpn6DPUFra/CF5cUGehUXj3r0FmVSLunrtqcy+pNnLhR+oB0HtJOpseBB2umbugclUnYgto5bCTCyeEwR4GpEh1wH1WnliVVSxzxhubW4uhTyesh4yIq7Tgkwpmo+HbBjMr0BYgHGlKnZYb7Qnq8JRa5ZZI9Cf50egAbi5kxRrR2stjbvqCBYrtqmJyPeyFMmDUeTn6fmk1f1n1QN0UHzhY9WwiCiaDxO/MuQgrex6DUFokD1t3xYfdFdyJvvIZOQ4sJax6fPuHIiVYBL/sFdHig31LYcd15wOafs+4nKMJ1JNlL7MfBxE248RR7WZ44FC/DIS+w9YlqVopJRIGsrs/WGZXi9wsSHCsne4aNZ6w8tKz32HU/Z/RwThKyNwHz8/YPJMwvE9pnL450pILz41ZiPZTnmeJ2hVvjlbgfnVNXo/5Ix76xcuwseDrrImChocmSfKEueWM0+xKtnnZ9EQNrZTEVy7SVUocmuuQBF3hlB2UWRJlf8fsQK1Ji8c47x1Sa4KB9oWa2jmDOFjNAolgPm/iaiqslUy4d8H/xRBfGJx9GudAll0laZsLYeVkUv1ihBR3edLKGaKoYihDCAAnrYyOe3IAoZ3dzhGvYDR34bpdYaeFeqpmqxaKDwqiAqmk91gJOswK7Am6GtlfHXXjAiu';
  const _INTEGRITY_HASH = '674d6dbe12852163ad9336ad4144f743ea604f8a37f3eb835b8dbbfa7bb95df9';
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
