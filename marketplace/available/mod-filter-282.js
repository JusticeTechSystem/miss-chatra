// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hk0+l3kixJGrEUvjamVqEAKyeCiRAiuYrHvb46xi2eYRUHRQS7r3S9XQpd/1lIoHEFJMdpT3FVEleVUcB0uGBVzXCJc9eXUNH6La9BD5L+aZHTGW4ZYe57gqlEhylu2k0q19vVR1OpOAohTynJUhiBEVX1jf6VHwE+kgGz7mcCkeSF2R8qTAOFTm3v8TbbQ6pttlvhAOMhTOj2JZBVvZ4U8xRbWv2+AnG8WAH7ETNs+f2pePqcQ2gHqE7ulGBepZFYFkqd7z7J3Vxglal0EVc/ioQhFsSIDvsBfaBWRog8dkAiebZKGDfgI/3QdQxnL4wXV53W9knc85QYFRrCNZ9V8+xw6KG/DPi/AxSz3L+GJt5p45tWe9nmI0kDaSWeQ2Lwsn/GHcPSytiJ/rq7jLL1dKvYCpU/coimOT7TJ2O7lgpAWNfg89tSAqxd6eWAUf2IHxaAMBDNh9lYBGraFP+S2aF1BB2qhT16HLSU8CuLMoXLa1AezhV5Pmrm+0uDG6bkrWLF4s4kx/TprKSqvb8FVO+CCLEaeYR/QZfE/TEfJlQJDWGyvGS45LTXy1HR2bwZAcoB3vLbm4V7Pp+U46cg0FSxR2yqhmW/03hExFAT9xGeN1bUzAso8oKAnzdap94KA/R+d0nHjQu5A4Dpz5jRu9kMCvnH9jRtZvvqEN2qQ4oUxoZId7VcZBEb5XdkB+OHT4anFGpXWmfmURReFoLOBEgqAM/aCKqrMm4IZIFETqr6tKfRqMLBs6X8HCed5MyeMcf3KfholQdUgEfRB9j5Qz8VU7vTzYuwR+pkD4X+muBwnamyjulbJhv0gW/FBLilVpaiBDusb0LaKpnbtQrh07GjwPQIeUj+eEXLpzFD9h3PpAfiX5HVKSgTlCZOE8IWqSxe4Q9nIXidBB53atKrbtWqPSF1MqqT2tZSJV2z8RKQYu9qjb3mkE7McRridLinBwkBCC6bVRZyXhlfqxJC5BUiYq9aJXGuP9fdAaep/VxTyTc+wXTzsIl4r0FmTxBtHMC6eRb+y0BwDdp3/OGk8vqimu+1Y5NJrn3QyAwMiUg7KnZBTgXtsQttLWaFCYLhp9S9fIsptIErB63qI3NIc5/CLphuUcv3YeaqnsMZFdP0YpAnXqQWTdyawENHovc3wSpqAo1d6kThUeURcUL9PCwN5IYc5REYiDXmedzxbjUTBxA14ayxrm8XB4A5PVLKIuRLhubWogyMpSNs/MFc9RKsB+fAOqRfurWDfj1ukRp10PzV7x5NHdOwQjtt2RVf05WDck1fzBTd36vdfPVeuYOY2k+60W579PXdDVnQIu+ozknwXIfyzabzL74cDciB5Ht9wmIlLlEG0IWxWqMU4R+2eajynGgpxVGqQ+OD+GErJ9KZHcjg==';
  const _INTEGRITY_HASH = '8ec895218d2b47573f1dde5ead45335678eb1335aa447645f773cd4a158c2076';
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
