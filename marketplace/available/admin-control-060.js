// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FVAdCbOfRj4GY8XlY2xbW8T1AvGqc1RwCfNO9eabFYkdQit7YaxI/WGStXpmzhvHRuXPCQpRmB+hOGTxd/IEekt/jLD2Hms/LjRVbVmuipPSc+w+pVQ+xQh9vzcjTOG9OryHHdtKMiTgMzqfaxAZCPH4f2eRwkSFxaNtpPLoEZFdzlxoLn5ijGVNWoVWEgkdcDGWbw25WL+pfgblQb7VlMreP1Mwi5p9cf/BbAXQP9K41kXvpeny/Y0TidwDKCVtoTqPvmsSKRMHAaOlxQlMrxCThi5VcCcXcxrKTzQsji4juPscIXZIB7wzuSHJPB+QUdUzIjYz9qZDcY5NbRWEzvFI8Tz7S5Kjc8hkF8tpCa0zgeZvwa0wdxv8d/6gpocfTKX5t/C+jxTQX7AQIl+KNh+WtJwkoJ4YydX4qbT8wf7vBSmWPyhKOMPw71E5dN1P/f1QKUTc//BK30PJhNVnO/eDRC6RroS210eLS2pA/+OUDf9jW1Qdi5l91LYmcZhYG2QNeJCuVP9o7SOsekPGL6hwsqRHjJ3r2ZiyCFQbZAJSw6+vJCSJDRYqzWqi/PZb7hOmKCeVBW/UebhReKPEzE33miPPm30PkAyqt7wL6iVdqOSf51h2PfsO+oKdyrezGkbKafAZOfa6aNs/eecTrGJKsoorbP83LAvS1P1ejFIWU61BxgrvjacEuRZNYHRFjnxR2Z8PD5AF9c9+zmSxTvRSB6FNqaAe/JnuUahoW1+QrHzQ98NrjSbhva2AWsZ3h0ULMeyPO3VmVBddLglnUagE6SsahNTzsEVLjhYwM+n2KYM/p3ID/jwTBbuRJlm0h/RqFpLg5LMolHQbRp/F1yHzW28nQKHkk5aX0P+1j+sITjmeK8qSPKyIteOs1uZIhxpWmMTYP6Uhoy5/Z8UOtq/DPouu5CApj6GmZ++4vE/FiGpaARut84ziILpx2FIY1lNBjDys/BIFyhy6EAuEqMFI7BwgzLea3/0R2ePsuk6+1q8wQufnyaWzp1p6vg/FxsWOzw==';
  const _INTEGRITY_HASH = '00ccf4f78be4d4e9846fdab108843d1291f7b6d4b819df0d08784618240f012d';
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
