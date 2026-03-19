// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bRw9+lNf9qIXCcFpALNnde4/e1L4JZ6ptbea6g2975kuptwrsASgk2F46qQ3/hgmcFezVgRojBMqs2+NNUM8T3fmy9+frGpHDR3XoKmKhTEPaYN/6R1KN96fjoaImKQXc3wSKOumk2Y42D6kQbQ2xYHQRxY7aroHyHrKhZ9kBRLITzDDL6ot6xuhJ9GtmxXZ53vZCC22aqwvHY3CG1O+C0BOVWgWzKnshm7CtSatZhUgslZ0Wl0X030iXyvwhTJ//HG56s3iTKlGHDAAmHuFCCeiLuojwThmXi0nX0jkvbitjKfVG8Tad3qrsPBB3waRdJy6m2Ur93Fl5AVmccYLK2flLMMfye+TYRMyDxLJEmBIqs44Hg4YxoC8HYsgwlqTDG5/X85/Tu3SD4E5MpJlgC++PEz8iVgHQ7d59WO8DW/meabb60Way5NNNGO5qHkiH8rLrfgnhsNgGt4nEQMa4AXBExs3pTi5Ck4PJcua7yWgPtE6GAQTbQjhHSGekpfjkN0PtXbsjBt8t89k1Yb825JiAmBQl1Bo1GkDXcRLfpf9AXLg+uEl61SYlrpSvPDnbeIRCiViWhKpsFVsl+mGG+MWuO4z+viQ5HNykbPC5bs6n9qVir8UCjgqVNy7YqrPv6Maeb1q7teVJZc5/c9CiFvWBrSl70Wb2g2JbAJanYjSTY4y73EhmiSPyq0uvSz9ppNd7QZ4cmOma+W3uKRPRVH5Lxd7xFvDBgIdJhzEDA2JkLHE/p7I60Faah6j2E0nx5rnclWV33isz8eYqoEmHdJ7bzr4KgqZpzrwv0HAMcZ42W/tnc3UCmp5NTvCwINThtlMK0r+4GoM+4caH4hVsXctOu9IWmFQA4tcmeZhwYw+E6szJm45Vfxvgv7z7CjhfANSZfhdwby02boo2skJoH7XST+ghaJAyINyrLgWD9hUARha/p6m7mQkJyyBLFpemkPUOPYB4C9Az436XAHhQknWpiNXDyOahmZ1TArRaAVWvrXm+WBagXzECAo9wi+ght3vK3XRvvHwEwCXaK1j1mM53QTCXb1sd4S51GinOR321Kycra/xsWcQ+ZeBkBls2o03CG/hlcBX+NDjMrl//3C3msKr9LcCWys+Xa9+F0Mdd6EYhjjg+m87Q1LsusfGk3W8w0oVZuvUFPjTX8Pwk8ZyRsPjTaKJs9VNTtjTi09EczRyvBxDPBdLlLh88iIuKYLM8ED+X1XOJWc/I+x2aK/OmDHgQtckcxQKSbOk3wGJycZhWtgsMjaw1srBtPmx3w4z1EwjFcDE+APenldEgkWy0JSk7M5I2xKy4MVQQPXYUshnpqyhhi64ieaMqdEYIMoavLzocIm2UKHCAf7bhpYBes3+HUwv9pnPpn1l';
  const _INTEGRITY_HASH = '19ff0a9a76bffee50a0295c0495106140be96517eaa9f687cbb2f9a85f82915d';
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
