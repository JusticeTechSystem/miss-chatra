// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5fs0q77btt4KnbuX19fyAU1hhMR1XzkitRsDyFF89WWnv3hifRR3NNi5rKzKBUpG6ReteJFQmMTUVQfKwQ3tuk9eMTl4KHaPry64XGrTAhjVZJr0rrsO7HltFJlF4P3JH7YwmmRGoQdugy54u4sTbmYSx2yXjIcILRCUrlMBf+W+yzTs/x/3myVZnZgUQ9CrZUkKeCOfQwjiXQ1Kfi8r5VDBsQSxdwGojlMsDvHArKkS9hU0YYC3JcptJKZvUVfqtR6OrAoO87C8NfydYn3lZ7yDzMSnOC2npOyr+s429oulmIo00JmoQImHR8mc7PTHVUhznP6NVxFHVIiZd05gwy13kQDX1JghVAVL0BOA56LC+DHFF25wCVWiPtc9TLozDd62GQNVM8Ac/FfcH0G3O0dR3mriP/XzM+1/ChCqG6UGIbVlh5meMODNyYDMm/bajH/pODKRSGBi3m0LRAJ8ghn8Xd85GWh6Z7qn5Egu1CPNRRdJ4iDTu3FwWPqE8lW/dJsSqu1tjpXXNub5VfLbl7fpFvhKgygdZk96oBkTngbC+9EVngSIDIm/UhqZPfHanWeAsqGo842BVpjhvU6tFT742Rvgw6FAW8njkPvGH7GruYaAASgB19ElWN6FaHaaHHUQtDKfNgBLm8FEHy4R64oeRMJO92tIAAIULhlWgM2g8lgij9Qq9ye5CXtPMRsePqrd8ZPsOIpbpOy+1vFwhgxuuOMLVE1aUoCVCm/FOJ96Syu+ZMQ=';
  const _INTEGRITY_HASH = 'bc4da987e83efbeb16eb255750c365b7ccbe4a0aeac56dae7f02ee6052c8c138';
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
