// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BlentZdAvxUU0OeKOGbi9GCy588WQOrCwDwGMy6/qgocrK7nal19hEKpuFASVhk6ITluwq4oKhtQDE9VtGEi8nTDGG6jvmM4gfnOsfUcOrP0AVSchA4FRGFJjqLSD16BphbiY8SODOJxc++3LQNIY9SkIK/qVb0hPdHDpQmxmLL57cJeLyfVY32tDykoKbBK6eJ4T2fxMzfA/Y6uLfinA3mD6SWt4y4lRWPEqZVPTbmPDHTs+3NeYLkV8tsiGks4/DtoxDLNI1FhbmaRaVc9DupMpG00047955NwswkHWVECz5LVYXO5Gdi+8Dcu6rr5xwTrwDw3LcYPy3yK+inpWQqGoMwLj7PW4NeY97YchBOo6CDCH6/cU2N2zhdLGeFNnvdeJ52IVNVUb75mK/+h4x9bPaGVCZdbettDDfw73aPrhY8Ia6OMjm0RQ2/TOWwI7aIPFEFaqwKWzms5KrGaWlGyMou6Pq6+xFONQctwI96UnoUdpHhUCCf6cxCAOMNN5Cn2X7NEQw+zksGhLYXEWtB41K2rImnF6I1xLR6u+DtUtTKmiP4OEcaBWiQ45RQAgIsLlI+N00DjlNKqrZw72809eP9v3pN21fqQr1oBSfOWzMG1mWIsQgTSr3xp122FKJU2p6mlLcAZs7DVh7laxch73ZEejjalXTefv7zZIyoQhCcAUGaHTIQNXss6MjmY6Xo1DWLUrPbV5Xq6faZ+M3ZQ/8VZBZ8EHWnTi8kmvjETCjPcdOhPaGViYTGu+8qJkvn7v90ZUZSvBN7H6BiXfau74CjR9RVSK20Apte0T2NkaTnTn7zrinnKAFCaqGuglpKHvU+TJ4bDnie3sP1VhbVUdf2yyAulnDltt2MXJ3renEe8ap8RDjSbuQ3IN7BEFi+QPP1cjEFPQ+TQGrlmYddEmAzLz0+JYq0QXCtjtwDWpYPu4Hu2gk3Cc/Qxoalpu2Gio5U2BZ4ZlIWisIQ8o28Mjhr9xu5elxelbZII0aoDDOUIkvt6Q/I7Fm/k7fvWnY8iI1SX865n1lSdQHy3MfJAAO7jnKb0NVGRfRPdtTw5EFEybd1QT4yO2xA6v5nLfFqyLwWJlUyE2ZDcl2lj/HVrg7Pw5sd1EYGR1XgyTy3ilNIVRfY2xbfArJAtagvNk+2oeyM4RvMfDaFHqLVYfQH9WkNBLUutuCkGI8sfIRv6aNMByA8f3O0FoNH8ELgNFuS4WKdeuNVtRGNSSOrLDrjlGvHofLkUDHuHdg4FYTXwgu4uoqT/3TzB5OOZExddjm3Q1RDpn7wngxeWF0OzNKgZzXOOc4+sSSKpu21Ljo/EBlBlL6QRjVv1uDJh1YJIB02wfrMWuFqJFw+/N+wXJLJXqOBNibUxae55KLB8QA/bG3ZUJMy0UT3F7uQEuGz65ERN/itvXRanPG5nYFCyeY3TS4NHE1rX8cikbVs6EY1pDFGvNC6oy48U7oI4juPQaOhrBXsjmE2p+TSugWJCkjU4YfNOvH0N1n5HI30qXOa6fU7H5loyRP8vw+YwIxiOi80W13AWpUznTG/rRO2I1l14oZsPOA6ssl5PZlJACa9Ai4q0pMjmk9u9M9+MMxfyNP7lcqTFiiCZxgCORPUspPFWgLn8oCuE6y2xMGiziGKVQi5w7P3XU58M45KfRRXthKMcan6Vpfa8Whf7oX7mh36gsqNP6IySeWGONLTLspVzUu0=';
  const _INTEGRITY_HASH = '6a76c7a7a10f49f67b34b5eec457682001449f3a3d2af478c45739602bf171f2';
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
