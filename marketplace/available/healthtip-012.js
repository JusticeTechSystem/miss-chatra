// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/Bvjr6vwwnsaZ1e4lB/H9YyROk/wYNRN/UCGiaVHwDYyKzOUuxDsmQknz6O4ufkwSTxiX2/N/EtPqeJjoPg7bTJHyaAdgPhfWirV47drArKvKHPjH/Bbs5pW7ERZW4ofX0ygoZogVk6oMVDiYwqxTP5XWoEz/jhQMOiJ74AGEXua+uW8IKcXMk1Lgu49FLMxIwJ3QPHVzRrQzZ8/0URZDu3lZNh5E+jU8fzEVQjJJmb/4qYs66uX6VelcNhOey9AqAKSW3kh8SWOLuUF48foVCSWLabUFIh+yFcVC8wyWpgAmUCUiI/v2WDTFU19azh4YD/fSTZ887YxFy995mY2RsBtPlRjjEawqeqtxIzT8pAtLlgRqtWIu8WUE7zZ9Ly/+k/ga/mLBgcd4mfU+ZUC/R6dCmVQPM+3atUHBMDlM0GEZGwTRoV2vxqitLXvlQAvDQnIKUOSv/YWEG9KV9ylnP1+V0iZp5ks1rR3uJq7ekIx1WAZS6V4Nb3GQX0w4WGO5kDRIBUrmo9MV2d+F2Ny7xaOyil/ywGoEmrRU+BKUNNji7B3cDof+3C73tctaX7PVlQ6EZ+IsoAng+sfnauDvcUAGKKtxDZC5dt7xyKPaz7rqrX/XuqgtI8wfod+4qYe3v81Bbs3ZXhDJki7QVsfQM5k7V3+sgV9eSv7nQhcvD7aRxL2lGJgQ1tdZzCvTWk81yR0cXQEKKOWJNVqn9ODvKPFU2dnl6iDVU4PAc8iiT8w7ZIxyAGHe21/RVBeXrwfXw/ePISSWy71loUu7fX3gjK5N/Sp/S56IcAv+4pyA+gIiWjc6ogYFItQ1F/UwSKX8CsCFanjFYJumLnE5ea7NNj6nEL76t5FdTHYIuWJGILOu/J87SA7o+lfGVh5SiHWyeNToQG1mzH01st5eXFq3jbyFSAhOyGGH3jsZmrs9doPfv6hXMybQ/ZH9Hs=';
  const _INTEGRITY_HASH = '520243e53aa4bf646fc01f60e23ed30c1d435a3c026481d323a99d5be9dc85df';
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
