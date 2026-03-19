// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+qpCpBEY9WRPCmfOwqSiUcXDfEUfpteq9w+csmgg40XiVD1gsXbvkbOLlsodhSNZ7PpBt5uts3KJV54k3PlFQu+bYHWrahnvYyD/gyGN9G1R9tLdPwYUuhyw9ptOmjmuXUyldJao4WG1l8/BG7DS5bLjSx5umRyy2MuOc2BL2upn3kwgIn2O4HfwwV3rsFxHQ1g5PXHGM71D7W3ic+zHoP+sUeBJg7SaTC12f0pONv/HInrKvncHkgoxYNyu4a0/h6FRStPrBwJzpyi0NizXd488IqdOchxFyuk/wWgJqArNpGsii4vGAUkYUisL4wBVRBzptnq0OERD+Vg2OHLdOPzsZZaGotGb3Glz97xfFp6O3UJ3xC8+tGiFfXlx6+SS6wfVbNDPvLLLUhYGd10CuICnkHLOkc1w78swjRSlQ5nDswGJqlUcTa9P6aWSXMac2+2GMZevNjrEU2Y/3NJuCbNxAd/SC5eJObwMadYjfPtrjyWy6m/W/LJbbIxFsKYT+clRzAkLXb3Bc5WwhzhFakbsnqsbtdE1wTTHEXRo0iy0qHBcXVe4KOM2LigAR0irRqiWhWwbw0yXhyQbBeBG+3MxG7FAs7kOwZu+Nj/Uv7SywjHe2GWcYswELTlP1vcZWgE5fzYQSV//HUMeVoBB/pAbfg9ZrpdtB931Rcz+EGEmSaGRUspJNiV7Ndx//hRdd72ahmQrTHpQUnUkgfk/Qvu27j+aGGRLECveJyv39kIqg7kMvcF8/jhVfExtnDsLpbc8vh+5Lc8wMf+3yPywEJdDrwmBpm2c/eeBQzM+5omzsDh0WxMUhgtVlmjOUvn8zbmsvpF4hvLwF5k6o5qRSJVPVROS3RvzcXay+ELufggVS1aEmet2MS1OAeOTHx/Ei/HwCrfEmkIqRe65jw3Klvy48d1Euf42EJof3s++Q+p5s6Xgnji+AFrjge6ybKHoFNLULNX8YcOZpKebxcHIUh6V/Ku01PrmGfb7lQ2fvAI6lEgo8pbrSNRNztqJSlzPZWt0AuixS9eEZrM7bU9/7NwYFGtEsS/6U40+3DNIsDUTJrljDRj+AxYzdg9l07mgRF7W3r3WzFtrHJI2Woh++gn4OB2CDnQje1lBIjk5yvsFPPYh7mnUMzR47ECKwVBgQo3RqMsh0u/r2bzfKnBt6DCsXxFE5zYtsbto38oi6F3eLbHldOADg7gBsD5PG58HcJZf9dIk86dPkI+9p9HptfPjsXLe4srquD8xhzXz4cKcQJ+vXSkhGCPvz2URcBSnpZAZFdoX7EkEZVkVV/YWcqFRuKjqUJAixP8MYviecjY8VVqI0JX1+mg7w17WIdp6Bl6u0fVeB+GUQxKOpU6hzrpoaxm8yh+eGRFnfKgEfm5RaXw=';
  const _INTEGRITY_HASH = '49331f2c1f65cc724a03e81a1e06a953faec5160ab2122f790ba450ade7fc1a7';
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
