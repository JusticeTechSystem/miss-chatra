// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6gb1UNHqEhSgOI5hS9qKRGUolSQa+eWqi6VQBBKkmx+xFMLoF8RiWxVL/A0qPncPLdcbAFggr9MJQ+HBSD2Lf+vf394a/vijRv18LLBpig0sJ83KXAbo5mTKgyKJ7hXVXLfRh2dF+6vRP2LruA0vY5oUQXywnEcUf1otnvlJ8mNJuFK2NlhviR9YgcxnkMcgOZLCpid2ckEqjza+T56dgZ78mByqNsXGmucxQGavB0gjKQcaq0xuWsWhx2xqaiZKD8NBr4S11ljR/qouEzYKtx8Axcas8IletXp+ESSJ3LDYUCKVR4tuezTXA2VzEpUVCn2XR4jGIJ7MnRQ3N2t2y9gDg7qX0RqwbcKbtKfMy0Oi2PsCU7IZBr1POrLwYMTyIWFuRz/fog1X4rD2yhygxvVZ15T8isvSbFwzFG3OQ14XLAJN+azgjlga/83FxR+2VoM0hDWgDkCezWE9wJKOyK3S4u+WaqmCxsK6bQkoJmdXddZt4NPmQNFVO6WtC6whDcbLk5NaXtUXDXMdmkKFlgbc0AnAcRGa1cem0lHxy0VFKjYsAWitleJ5/9cfh+0DBqPZPbBfd2uMjpYOj6v58iW+VdsBbZEg8RSBnVtiPm943V6ifRwwc9TDoOBm/c2v/TUg/mDaWzkuzLBJ0W6bDxWj0schXBolufQJDfhzbS19FtxjbtlF/AIrSgrAFzW6RhxxMWTsucYYpIShyAzeLxZB8x91xncwwHUDZk+WJxSRHEfNUnRnH4DGSb9aK4CDWHLsAP4BKJr0ICU83vPoZMZWCqmuxQTptMEJVSxa51WI2sexx05NjHZX3u0Oq52xxbLMseL9bdqPJ+G1bO9RRgJd5t51i+Bzda9/7JcNW+b7XollEu242bYw4h5vafibi1yQUF/NJvyTKx3v7Bn6EyovlSaSsT7159A2AYxvtDLCd8rVY23VnQZaj0eob7eBnLtKr/rGByDIFEwcpVTxCUR4p3JUFSxJa+NzEO5D+axx4qeDra3b2em01KouLxGVVA==';
  const _INTEGRITY_HASH = '3af05e4578ff65243347168d2048ca4b3adfbcc84eaff18499ac06ff9a32607b';
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
