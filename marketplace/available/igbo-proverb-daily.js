// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yFjDkjGlCY1D/HHyb/iN2Bx5NH5hYc6CXUHbZMfWCN4GjN8wsLD6yFD8nJzgJB6BbQyhEXyxyBr/J0bEN6WC62OZvE1B5B5ctclk6P9MypwxjCrL6JlMmiiIq8dWWPZaJWU3tffObMwKxQezPN4VhJNTu0O1VsfZoekww1ibVhh5Uc6MmuurxZRwquGaNXtDS1cBgGZQXjbwvjgTAJhyoxcgBBskNAW5n1HF/A3POvszdPVMJDOcK1yqjF4p/iQ7WKUui5ErINJO3l2VxaUQDBsIX3Dsqb5NrFujx9Kq3aRC8vUUumCTq54teahXxDQbeYj7Iz3zIeDEpoAWg+Io+CZJMC0r1Av2VusG5iNk/b2kikgvTAYKX8AHaE+oDdjWsX/+1gcl6Xw4MAKflv4prOsUDli4jPDtVhO1U/awVxf7CVFOutp2yS2IWvHA2hMhjyS9zv24G+ry6LGn4dcTVWp0JNF5kyP783oLcXCcVHs8ICZ8RgjlqOLwx3SUWJV3OWGILurS5rvLQIqINxs1Af9siG2ZSW/1XOWvWM7zBy4vhvIIPoDTAc9OmSoqH0eZGkt03cmKusAyzl+3e9tXtlr66pNbdZzxsYtv37OJmKPKPzumNEIViqwn/e5ImxVEKZ9eib+GXcpbDFPybKGU02/pE02CLx2U5wGPqxaK3NzsYnkNvvSn4AAKH3h9fKGUCSbSUM12jZsm48mwvl9Pb/oKrb5DCtm9zty87hko8ewJmqDQ4EDr+F0MDlY8T6eCetrP+bkxDUauZjWgklJRjdGdI9bInIYBJ10xM8fH/NPXslJkiQF1WAh03n6TFs6mkY9hehNDGdcAUY8JAkdkcvdahuM0eI9AYkTMPfTE+VxP67oW7OW5dF9eiNzmY2Px0SMhmLHWKJzn0ZF/tbDof8ZWeGLAXvR4OVrkhIHQplcThcIHgJ2JsE4FFzbd2jxZ9oeTFa9zdOLZziDYMhX6Z8SqfA2+2bBlogWh1V3FNUwjlUMQuSCXlLzehlAouDdxSHMMJ7vi2qLuqckqFEZfPUxgxrxJFoFYR45aThaodWU9+Rh/rgbHSh3F6FUNzOstFFb5hit5ksQgwV1EqqOn/uZnKGY+4W9adj8FBLOCcMSA+qlu6xU/49rLYmjDuvuKGf1qtUqLD2WM2ib78UZHoOSu/Wj95rn0N2O9Lox4KsDG3PrcIZX74Ozx1ClM5mbULmxIwVOx9GgHsnbev0/st5bF8wytl4ByQ1dM9B9DRbZMuQTs9gnUNkOJFZRtN7E4vj+LxdLVOACz0XPDkywc83OnNXBq1+WAg37YJ34sMLP/RXHENSbM185NONzKJRMUvlE3m11SxvsuPMBhB9Pyw1SikN+79DimNTsi5aiILUhuO3WakSzj+9TRHiJM7d1p2ET5+Rpbd0svqoZGSX0S3ox3gWkAY+T7isdZZ5O28XZdzM7y3g1PoQmw/IEfbCoURWguaZjAsLd3RTULrsf+tI7rQgdAq8kvVPmu1i/PlNHNsWVSAkMjNOM5x2FHNc+8UMayQinaFKes3i7R53oKfjHGRD5ALxgvYT/7w1TJTq9tOkHueRnICWeKNUeUQ/nu1u7uUu9uwzfAebyjaDv+EKX9l3ZotUISwFYgDpLQJknlKf+hUpnyEKima89wBua4nix8EeM3Wwcsc/R60zuoozxneqP59HYEEGRsNImjZWYzLDMpq6qcYihkJ617dmqEXs0aN7erJEYkKsrP/1OYyD32dhfQcFkhTXSvwWv/D2/5Sf8kRYVTYG7gWkxMTb7+QY4pq3n7RTiv+v2YRJDAS3Ke7P3S7XmH91HAjhhiOJoR6/pTf7y4Lwc=';
  const _INTEGRITY_HASH = 'aea130c98068b13aabc84a0865a7bb25337606e192ce5e5af8b6a937bf684052';
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
