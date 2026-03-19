// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cbrxYHd1a6Yr3yzGZSfsM3tcETUUC1+w08ELxISua4POKOeb+sGxsoq0ZQrlIGhFsYgPmeV9aVQ1zdiNUmr+r1572rzyP5YtdWfVJrNf6R+eL/fQBe1MF3AKl+tQOU+xNK6UEGPVjggXzHUqhDxmiHUjuzWg9Z0BMlVEPXO0R9ic57FtDVRHbhYc7Y9FjDESnBXT1rx05RkFolIsyBpEASk91a6gAgWTHL7zu//qhBaqxpTX+PFsyl6TA1sKn8yGQkVs33pHA4+183uhSe579VkMBpBiuArGp2NTaqusjQ9wAXMrWMKFbuYqsFnwBDknlrYqdG0t9DpksurC5kn1w/Kfv9aU9r+NKGWG6lQsG/j/MxRMYaqL0DzV/nxZqntulpfOzlyxR8lwn+WsKHbziDuiNfMHMINqpJ0qGKIj37oxKsDMH3MVptf0aswT/94MQTApv9CuxaTEV2qlJ3BeDwLIpTVGIjhJUsKl/oFBHwP9CSntE8KIEz5uLM6FkR3KWVxlfliaW3N7aiBwPu8pXSNxgDYWCGPvAnaat41OYpMhDr2ndzUtB1aN9EFcm33RKMSCH1zHK6suH3uBJtIaU5KuGR0ZhvvioEN/MCg349mNA9aL2rMmgIDNSsggVkLIriaftX1X8SV4dzYsboJqiuc4a7BzEXuqp+g7k8i8KhjBDzrlVl+lLbXGNM6/+JyjzgnTFQepwbEWwOc+EljjEYdoqbY9PnCnmLQWqetdpiPhFhiROmql15McYGrBa2+zV1OHYNL82ENwDts1cmCicUwVKiuLXBu6rsVju2y9/E1g/MlniZdMPOGQNKYnzOw7GdJjvKnB4oHnB2rmeVIaRhaY/RRbqBtwwKMZrOGcGNYRUx7mgPw5HlRxfexq/MGOJzJWrfOJ+GSoekanatKfLd2MOYNzwk263pNZRk/F4cHNT5MEIf8TT33MyUivW0TC79rOhXyyuLczK9oKFMvfzuUpamk5AqqPom2+ugpCY0gEO0smIg72TjWWtUth8OK8qAF8PoCLi96oCcpnUh5o0e5z78IYr+uybAn+lUfth+/6ODroo03jc9mPdn6kbQN0RGBN22vOutwrcVihY0m/OnrQCOIY12+EwxM+mYrI8Aqb+EMyHWw2zWNziwbxra9nCw9IoG9vLxsmlvKRf6GRxnMC1Py++v2ezFClgXnj86VWRwpbqufOGfnvya8QgzAnJg65+5LTylu9llZc858JdcPpxLBX+wVlpKqxW0Y7MzQo55SjudPHV/Ajwp1kXnuVRWL4iGfIxxwm3U9vtCwlFB0lWfJA3N/7q+5oyVkEdmgBLeUww5jjlXTxD9fI4yE4yYuYA80=';
  const _INTEGRITY_HASH = '220141b06cd5ea5c3bee43d2e80165cd49bad5f4ceb3b49a5072d7d50621849a';
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
