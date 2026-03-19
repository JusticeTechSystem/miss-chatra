// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GDudA8sTZ8azYWfPTlDkICKJZIQzs+F4aELGg4QgWaQHatORz1xspfOQ9H3Mis8XgyYMTguTntAujM3jSP6HmV3mKrE4Y/PuSqFcvKTPLTUcJXMwUFvLwowqPgKIOjSdBgS7M+Pxj0XyZlYbYMkMNWMBJDDEQ/z0kk2KFbANVRZIwmYQ6v6vDvkDZ634TcAIHfDQvzoj4zdSXC/cc8MtMbpjtRpqyLa0zZepLfWv7qGVrz4tgA8Njx+DYbTX4Y26NPeXwfPoT/aEtxDhSCfnDbqYHXTp8XSuatE/feCb163cebtYohyuioP409mD0bRPaLXXBgiSl0r3uRdxnwiiFZ8TclMqLqQKecKpF1ilJroW+8uI/GQcL0r1NWeZuas2FuZDDSISsUfU0bKqG0Kafnd0PqtHzd5Q763x/BzehVh1arp3XkMWfF45pC6/CqBJfNfksZ9AotMkLRG/JFfnK2yO+/v1ktMI3NL5D0So0eVMIn9U8WXfbBkS9vzGL8lyESrujHbMEcrXcjB7SwJ3+TFT86DBLBT3tZkqUZ3jW+053mZGyDQ2jP949JYvCBHCLSEXiMiEV/kAn85mYMl9Pi99uNaWWcu6ykL8JfrzQm0dGa62IlJyjjxoJdp9dcfWPkTwOPdCvszM9vM8Mq67orEEtD3wntFGDmO6vv+iH4wyutkDgYgOwzrBHI0eXy50ahuxZRh0KEiBBPNqrlapjwgWNvr0LywXPxEp/8XRE7XdfwO0CnE+XsyBdGuU1Miun1XJERQ0sCB1kX1fgrhord42wwdVM4AS8c5RQmnwkXNNnYc9JxhDQXxfVq8ndtjeL1zDFmJTd7tIzFSXr1iaeEWdo9ceHPke5Hiw3kXAmDad0lsqKkox199yxUsNsUZyuFrA5dN9gvlFF/D6iab+Grep2cbfzEfKt7S0Tzd6lxuwKSV1fxPMMnjOLJV8tJoIcwsN9eoe5DGXma7JpDX3EO2jwbUx/8l7Wnzrhvn+mzx+J62wfhCUuejPZpQDEclgmbKfisXlBYOkhV/bBYDw7S81k9gP3HCDjacDyfe0cI8nPjAs265Fn2DHrzNKkPRRjiUDE3JjrYitGS3X9LBS0VeixwdpONTFrDsBMDHuuxmFrXzqpzHeApZxySzAl8aokqTVz0Ii39BFo75QCSa+vYLLutJjU/j/ovaTfasLj+LEclSKfKfQZYYAMeiQpxWahzVK+tG9CotwKVyVzHjeJLvNB1jx/DL4QKoZHR0uI8z0uaZe+EDgHYTwgZZGH0l6aP7xgk6Ub4CvJmMnh4wvq5nbacprTG7oIKG/tsqiR0NoDhKRGet+nbB8HOwhIqYlqSm25dv0jXFngEd8hDFw7y74QTGkBiMFa703dGUg0w==';
  const _INTEGRITY_HASH = '094e4c23d4f32f0a925fb5773da69bbe410189164befa68f2df4388ee8eaa177';
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
