// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lxNXQomR+gagDcytO91Q2TB9ApOvjbUZ0xbrRRTop0jgW505OlGKfPY9tBElQEj94D0r7FJ9xvgpzAyxxYCGXkfo0EoWICbIX0GDqPc/gsRUywJ2x/sVDXDoKOiorjQguxjJ31KfZuvq03wofa9VLg3MvTSacdMLEp8TxiRSOKclWOS62Z3ajEJYT58zTqBQt0oBL9U+6MHs7fgcqbzH36zCPr1pj0/RfsRyCO2VXaWtrKKLRA8xAlQtHBwNQhqQV2dNW93RnC241aYgF4UBWRnqaJ8hKnzTHvqTTnVTXxeu4YH8okjhfP9Y1qQTb0+OgUGqneQoBaNbdReooYeyYduXcAfKSxTXfA3Km+ea9YRB9Ke/I/V0W61pH33Qfsr0h69VZi/oSe1LAey+xQjYKEgFhfdtkubQoDR5v4ohqamRCfTwddRETanlmjXS2rkPaG2ibKMlgdbDV38ZTeu/es3Zwrw868AuhT9dY9JHp1Itf0FjwEp7fRMszmOl2v4kx0coZ/t9UEc3xu6u3UMY7ddu/QyawDTQx78sQsuEHS5t4f10HGDY29NjIYdJd1Ic/QA3BwjGpAyf7ugGaZJjHSwgTODyQP92eX7c0+cQXcN5CrpCxy8txzdhOnQHfyHa+I+1/7u1I0Q+8Cdb0Dyha5y1bbG17JhcaHydwg58xNovV6ikXFnM8coJa/brS0PPV7DK76FnUVasSjsrg9DZQ8Cfpthgy6zCnwc33nbMzp0+5OaseW4+87J/184M8TRsNwSCEdYQ9KXywN15nQTCSgFWM5FPBxm8TRT0bGeW/4+K5uS5X2BKi4FiMy5ri2KZCV8tGlsQHGdjYKoKnXblg2BxEljh/H7XQ43Ktuk0V9W0ucox2iiFA3dONL5oUYy/xD5SHyETZFzacfo5XiBxGd/U21fHUxHvCLQQN3CKqxTsQ059tQJkQm0MNANgKgcn13y8UQwPIidxDLHUD8HRtpiwk0mLhmmymnbli6QVJa62FTM3UDCGxaSMaL6er4KXfnD23MSQr6BDd+Awu2rdG+p6JJQCcmDyJlr9xiV726ZQmA==';
  const _INTEGRITY_HASH = '7c3b2a85dd8ade5c59397eb4df4a4721d4ff212b3c0b8f2cf6a78628f4bc7427';
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
