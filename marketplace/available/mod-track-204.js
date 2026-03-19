// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WNR+De3gsre4XvoQrFsZv6Iq8oxAjTWf8c/zwdfSi+VCadixt6cDKSJi3csPvGDFd7JLLnDaWBA08j0pajj0EaTTXYXSXsIvKvdtZAO5ZG6XblhFv5LxOR4rkbCdwYbjtR9IgUS5pqNZEQG3dbpCQ4C6EFDLmTRjh2u98+jFlmR4aRkoaKWNEx3GCow0GlPWpXL90jaTKhslWkxb5QwPQQnqTFQCIN2NCxacvnFMxUe+RT7+aARBIvAlvw2xHVZTh2hc5rRqdoMu51+R/ne7Pie0rlbsSYG8F/ZwMhDVRbKItUUokR6xtdAcAh15Gt/FvAINnm139YGaV/ST+FRsm6sQZ1xX5YbwwRua9lK7ZfAZsntB37VQ56zTYIdI+RGnnBSkfePxCK9/sdxYmtjdWdJJVgH1lpIvdQhFNYpZmlRyrHhv7am9HI+SJHMRzVPvpdvYEkrCCKDrXdPkrkN7m+K0iIAFqM/pU89ej/3U73HqCP0W+nABeHtBVDfLfib8kTzKmgdaKLDnyDJzQPHLbiSp7tsrOkayLchTQATcxpvw4GOBs/drxXNI16AZy/D25ai82jmx6R3xIXKMf52/RvJIUnj9rkpQOFZToRnPlT9e+PlvH/VcTdCVFJ5xUvgUAfbYYccPjtxOqojsPgREFxWKNMiW21iEpipNIOIQHSs+vJe9gPvYo3K7mMeb3xtM0f4sibQQr7ugihgPnGuwZJeb95HNkfqa1MiRNakK2YxPVOkfj4f7dtpNmDl0IlIWxjRafo0EGhskiyGpG2MRKgUBf7b8ND9J3dhrS+dAPIVymzpbZViSD1x9WEUajVgd9/FQys8hJ6edzw24sqE+8KWW3eOfLHM67dsDcx8cWNzrILiOtMKEx6rD2S1o93Chr5WYKkdU/hsdTtp4RvEIg+XiTV82fmuni/EHNGC9ZWG/FDJIwUAxpMTnNncsmbKiK5XCgLg50t6ApxsxK7BH3TV3AFCPWyBAWzFmN41o9/LMCuQBKeOCgA5UDm2xaCL6faGpHzzzATtz511eXaOUwtUlguDTaeet13MPDP0oCXp2QU5mkqGcCn/4SPuGdeJSX52MUIHqfTspeOmOvi5oSwVOxa+gz7ZMoPl0N1hq3xFSzA4tdjGGDkI5B06bL5jFhkSdeZ1BO/lzcGojuPknkqQNVYffUObJSTVc8ZgszGvY/AOCBvQBMFDKiyue7ey877VU8rHMxr0v3DFYiJnQIPz900rhAmXj/GyWey639Njqr1VLSkh32c88WZWA4AvuJT7ICE8h7VYwiImnMJoi49cN1VmX8GfysFB16F5uQcJzeK0Rxw6Zpqj6PWeMydtRsK1nFwS1oIJ1P8Mstjl24Lgs2Qup2JKqhWFY51yv';
  const _INTEGRITY_HASH = 'cb553753dc56b08fe3421f4a3a6867b1b0979d546c935875acd0e6b203d6deaf';
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
