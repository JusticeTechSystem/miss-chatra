// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lJ2UH/U4U+75aqEi/ieBDFbq0o4C0a9z7F40CtCczvpPxwrV4jUmLM6jW5/PZ5Dcc+6qjKBj6g/UCeEaD+aO0+t7huiK1cNfjo5GSO5Sa71Tcv9Eqpqmmon2R/3OO98TG2SHNyj7tWce3I4XAmCUvn/onTy5JSXVuyyuxhYPDYQfrnT3w/K4h6a23XR9METlaMRjmYvovpHpfVT6YOt9RKAQ8DmzErhdGX4XfJfTrawp3+ZC/cP+u35L+p1wZUp/VLxkrV/IyC9YJsii7sissV4IeXrkfodeeBbv7QQoHFqL9/BJ3a9WscGjBnDDjunfnXwBLwFN/KmMT34q6V0IFL/HG1oRuA93rapf7t6K+ZT1O9moCr5ZUgDFlPmtG7m3wSNlvu7gQrjvzPamI4mkTnmZaDl6Z5XLekbZoS9FM8YsX2gJRUp3OPQ3z+pwKyDmuWTWIp0f4IAQaBr3x3cQWnWOYMbhMm/F+QFZasOR8nt7KV1/F4UMai7tMexJnthsnaAugPldJhtFz57ZPEEyYd2l8WOP7u0c7RMNcz5G4RfKkGRAWETpDHVNJg9UOnfQClPH1jfUZx2dU4MYupUDPkdTXKkAw/pILRLLkYGPMmbIoGD6FesF3IsrGQbElaTvEuZHiYh69H5d3zv2oLSuqe27CcK3W9K6ht1U78NlHBASo+zszzJ5BXlaUQVVoC6i8AkDzm5+w+k98l4Nbaf8h8c+QvWVB6gVUuKLQepBtw/QwMQITmZpheySCWZKq2AB3K6QEieru2u7ktPx/hpo3i06SyCNFNAbYT1IVsFSXg2NfBphekmDJxdrQuRbgmaa7T57DPUSLTpPzWHySZOsaRTwFiFaqI3vgXWclIHTb66o28N/zJP/so/kZq2MaVN/7hnHRrHbSOrt8Pq3KxmFrYMCeUnOmKWlzcwAIH9I0wnHjxENYfb+nj+TDbmiUxYJ7RVopXSwsEawNZLoXSJcs+P3X7WVGpuWMHHwYtYNcd0E/GY2O2XPCsvDvIrpx9DFnu4hoSEvOAkGlcTrpH6s7KJatIYaHQ+4JLrrw5ZbnGYSFDLVYPs3AIIPdZzvd+H+ws/DxOOxtwPrr//hPa8zZHg0XjZ59racnBlr4L9JGVQ1lpUMMNmT/NZJ2gTE4NnT3Hbglr9ECeEa8bFLZj3N4QCK2BEAOMid5vqT4OoueyLzIWVWN7GmU90vUMCyEKOdv4Msw0Y=';
  const _INTEGRITY_HASH = 'd59f4635de60d34a4e4365a37448fbbd7661c9d79f8cc6fe55fdade6870a3d4d';
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
