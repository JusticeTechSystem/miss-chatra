// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dpIMiAt9oriXsvLVUhYQQpPwi1uUzdsqeLSHnE+6OrKvhu5PWL/sIeDCWGDbEiCb6vFe+PDQlq1QYEyqlLcGmH5L/suJZHVJcdgTlT3VQeBnxxDKtr71tPozM7bVpaMLqr1crb0NbNFEbXA+Nu3AcP/udYbeo0zpLvp97OVdjCWps4Mnyh3wAByCtKvylb2Y7mJBYzdqn/ygAu6Y69+FDm97Ujka6Jk+cShieSpps9wUsPpwqxEG1rSBVWWt/4SGMa5iT3AbvEeUkJhY6N+13cnO/AZctr+H6zBny4EMmiqoGWYeeKhun3gwmVu4aV1jcw7zQOtdqgy9bEbjFj3PsTeRSUz4VcVoCrxkDV90J5lgq4o/oidpnd+XSAgFhSmEIN0acJRQChMZtVk+pg4/tL1nzuJCXNYI7OnhPX9Qi/18vaGmTia6eLX81kS664iK9ykfpraClYx9JfZy7+OFe9UNXEaN49isyz+6Vvez5mgWOQYNwguT7NuHxkFqlNd52JY57C/LGCw40v7/t/Twe0N43zZwZG3nWh/Lym0GUKX+JRrgXUMm+NBBifysK3rAZ+QWRnM052KezQjgicmov0w3kD3YxyBUzDmWCHa03DKbJPBPg63zImaLbOyfFysrip20VDdKw5YNymHE70e92uriqU+zluCqsJIOrdwH5XDvqvUn1XQNFWJQj79sv7joS8hXjKeG78fInmYAdc8QtP+D2t5p/Gw6gbM4u/KqXSlb0b1s6vo+hkqIge4iTZc3mboH99qhL+tB6OSelF8N0N72Z22VJuHFAdZUXuzflrM55VlP2g4WFli6rUJbY2Zpcr34uOqIIRGyCmU3uq9GsfXrBVUD2dZsNi/gLljNkTQShMAPbZZ5TZk2uEZhrmFogy2m6Y/G3ErCuHn6K256TlVdVEZ1PUa4Q+ku5GShulqnw6ihs3CLV8Jxt6oHqL8qoOLYfrq7Q+ACSuk2iD9qYVd2MtwemTkVaSCv4GLmq5JjLVnEYsryoJjXGyb5VJe89tMCzLIfFhLp7VFC95p/T5W6Jno2usrF2+wqmRS7c1K2y7E40MY8Box7hw8TrbN8IqKadaSpmZ+dhVIIspupzd4fi5fk2JfjQ+6aAEFWtocS/6rnvPi9TLsm+yilqQQ+ZNqRgSjoPS6HnZIMQYHv2iyzxV9cWC6F5St379zr6jCT/S9hbateWBK7eNhvJpVfE4NvlfRcI3FlCZoRjBQpS60UsG6aytkKGcGtLaV9JGKlV/er+DMtmfyhlHly8XVAAIDZ22hT0xbtzBV90Vvv0EHlySrzc/FfYoRwn3LGU5e9oidFWED2rBdFjRfDQnqDOX1raCNKE36KkNQ0/qKDVAVEr5sJ9/Zd36OHIkCFANMRsNfBThZsbo4OPqslIv/z2HV1OvQuFfRMVGsFo9sgVjaA0v0mwDRUEVeIxXtyBhmE0L9M2GJ+kZDqNo3W975UJaXmJtZ3BVtjkbrGlCwxvakep78HeTszmq3Rga+ao5Z+STONifS5fCkO9SXGW3KYGf+njcZv7dcsJVrTCeppL05DjN+1Cuy92ZRib7hyRTyv8SpDWi+wxlVvczM/2UFShL/dibojj9txUru/ePe39yLiHaX5ZX4MMjNaaWdsbjdT3LoxAE/JmBzGM+i2K+O8i7JvUAAzioE3OioR9EDf6FDaZQ8I6khHDC+V0ArP4trJRpD7NWsSq5PXA/navdLK3pyiwNTRK1LcBIdYurEcdtb2wCEp25S/Jxeq1r2RCgK76Is929H1iHomUJGOb8+42hjGsFpDB7h/yBER0VrdK2ts8jEWHIrzDtCMJilEqz1u/4kxfb9WjypRlmd91lzQgdR80cRFE6oMzAK1yM6kUQYv2jnJ/4GJ1Mwn8rOG0YBtF5KY7TSH2CKA0pI0HxkSQAF6UAlwlTFvsQ==';
  const _INTEGRITY_HASH = '1564ce9dbaa43f7ffeb1f3d001608fbc85fb462b482f29fd61c71b011c72d03c';
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
