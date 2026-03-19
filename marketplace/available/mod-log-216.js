// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kvGip+j2tOoVxl+FNsKR66X/DStyagY+1WZpSm44BNLupAK7/iIz5C7AHeL4PqM9x50N7Q3VUDVFYwRoLb95n2L255/PjrELZBGRr3fl6T425NgC26NDRP8bd7PMiF/QG1sartUYqtrwjkhn+ggiK/+PsH4pn4KGOiI2y0eYfQBlBn5ZoYDzWmDPoTNurHBXQq+Q9wlOjN7CmyfHfvYe28Nnzk35seaLxeH7pikS+7xZ+WXZTVaxIjfyjyQ7DcqDk9bcUAZVa1MwyLTOkwSyzpFNH7cQ//COiAa+57cSTN7uTKvrozSKARYb5cIRW+YYk9ZN28i1nOH0tPUYU7NMjISLRAEQMPMVjeQqDPid8ILyRmooyyfbKa8pqvFfy2AznQFPzHtpU5HQalN0RyUxXxewQkMRea16VTZiqr/1Q8MgH63b31O8dMsx01o76wvOJGpHDa+42l6kUINeoCXnCQ3FCVwT3NBQjdwd46PFgWyjRbowUhx+Cv6P3Rod9o1TC+s1YALplu2RMPCCG4A86HuIB7FYqYLrV1Kos8YBe9Y8jfFa7nh2kIkZ8k8uBwkTD4RQvsf8nrVkHhcWfp/MGZ6lz2OPliWs26PAzghOVL395BUoRN0Dab9eSZvcnXdZ4VXoRS1+/ZhZ1Caik3aTWK05Q4/5B5FrTA8F5x8sPVwjr0Vb+24iSpqZZRX3aAEBPXrwYIEBiziIpRFiKMPx9seoT2CUay9RQLynmNUkm+RHyzEwaRYxbCkSS37YEGWp4n1c23JJY4jI5zbxdbm2wiH4nEvV68/FJIt2tzSyPSZugOd6ennwtNZ/2ifuG2XULpSiNJ3Cqp3ECOJzPlhtqReHksCRwlZeyBzraliJLWfqgW0MsGbENaPtyGTBYgGoSihyKZQvrjHyLKsaXZ11nJ5KkDqQZqwNWhdra6r/EoxfxCuNnhbHDPVGa+3VSZQi6D5E6F3yc/HuKa0UC+fYqNvgii4C4rgYIRXyD/gVliMCnl/5pNktNVyUGoQtPrdE7NK0Ww6dCf+P9Xjt6GZAPWMvlb0SDfVZnGEuiK08XE3sYzZnQyU/xJ8ifu+Vodc3MxXpMnJi5Z3aJ3l/aaZKoYCrNcUDk4gFw3qVcesgeNWm1CjRFptP4rPFQEYzucrmVrD1+3XZmMtsAKnwEwA+joBwVHtEOigNk6IB5f+zQhGYNBam6UIjWyRHst+5lqzeycJCHy1xn4GaEYP9rLloP7JFXvuWRg7p/AfEy32nID+WK38nG8pZteQXGbGK+GS8YePrumwv0P5whagD0VZu4CKAVmeoDxpFPCfZPSsVExFyPBvOGAtR8sQxOT+6b02svUjNJdVNxtNKWw==';
  const _INTEGRITY_HASH = '4919726698fa09c652c9eeca15dba6d0a6cbd556938bf9e84cf92ee8b01c8a41';
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
