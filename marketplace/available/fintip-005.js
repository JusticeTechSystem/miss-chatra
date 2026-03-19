// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nf4Y0juNJX1Sx5zl6j0zq5sp4fYW62QJww2aoKpieLcsNYSw+ZpZwHSP0RkDlj9jj3ZFPPDOlwwbNZ9HpCpTlL4nkNnmu1AOm6sdhomXPq+6NCZy974KTBcCS0Ifii1xgB7JQQ3KFf5UPVQszJ8fQnXax3ZWfShykYUvOTGRhDAWoT69fiMvFPY2NJM1DxV/3TaJ4qEymGfHPLEuiQ5YbZAnSKQPs3SMeQlOCERmPSLT3aOK97iIvgr4TmnWLpu389FRc6S1pKwPTOKMda0jNkyAsEBZkVQumU2hr5SaXcTCc+nG8zfR8qq5yXArKGJ0a0X0y8OaFy4H6VToslMuKfDVMGtBaxnxnINYG4YBf+Oc+ru7mZDLVCX5iwiFZdQInMyzwWJ7v4SGZWVlYEYdZV5nv9dSLGJYjhEQrA/YrGYbLWnHDZiWwfST79+/GhkRfbZZzu3KWTiLNZWGOTzi/kFZaikf8Nik6pK9P27aWJVqHN7R2BezcLmDxwXGenmn8kX+ILT3EFkNKn22Ntm1iZxVjO1RWmBDaya0iIVTl8UUwq7Z29nlAzQ8Zv8vb/ywBEPktPBLawe653jwYAbQzOzajkdncigkt5uHZD/LbWU6cY0Tp9tHcblNlAE1m/UefbhQUMFIEnmWjpwhL+iqk4G15npm6DTBcQVVmTeLxDVaxkFU1Ultlp36RwDpIricFEZ9qzymmmIjBEZqjNIa71qKY+cAmdqJ9z+Bhp0z98OjAbAXNuPCOv3G5Ai8S7XL77rPfVwxhFxibZO5N/jqallPXfeQ2+VokMJI7kaleqKZC20ZKJd68ZB5HUkiUc2TRX4qrw/g4+3OAuBDdh2vw7gATNLOMukrmQFg3nTGV/Y6978DsuuPQMcNRqBjeZb0jMEpx//kxYzuhaF0VoLNl2zwBVdpLFMD7TGw7/0D/12skO56GF2JLL34T5gf7Vaf456Fvdq7WfT94jt5kNZxJykpVc2mz/TTfFMqEDNNZ6OvMywgSaNzMa8ZP++enbHVG1qG5AAD+zDDmLmr2NKOZC9Ua73rM0Na91qEpwHW';
  const _INTEGRITY_HASH = '0ec90ee1e1ad3da2b01e1cc67a2f08dc9423959e9bfb03f151c10361cfbae728';
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
