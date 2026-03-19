// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nfOGPAzwcTpgePDPLClZv3nX9Xc+ijTj/EnFodG6ZCotXu9JajL/KXveu/bpLPHrPg8oAGwENOmbONp3LaRtDEkGWA/SsoI88Md2GgcQGwqgvmBZxza/kKEZdqlr7nFiSUY6NBnEWDjUij0AWUsQy2YXNHxxbTcq5OfFVP6yQ8K1wmnwyWDSxZylUHdi2YsRcRk2kfSvozcRppyqbP9xhaPNCcAtvQ+uVU1UKwpYxRyISOLIebbfjzHtI+bOg8OMc4c3hmgvGmoiOUJepebk+vDZK2QCmz7IMqyDJ8Xdh8JYcYghDqQ8mKe7BbihGBiwZcJ/nsGzll42iX+cdTp6ZMLi3h4pu8B+yMUpnXRMcnoeWPmci0kF1e3eAohfC6TKzwS/9djSkasM2HbFA6mPuocfkLkbbcuW8ns7UBHaMRKagJyodij6OTkg3+g7+wNmJKqqKZWp8t2MMrMKjEnQEjSaQ5QiEZEwwdcZ1K1fMECT8tNPIS3MMXmqedJ/NzeM6xi9DjlBI71C3NAkujEtW1F3BL+Y8cAInNTW2xR72g7eowhFwQv+2yrl8SgcPDRKpZb93AhYOORyQPoQvswb/xqy9vIGdIckqO7QtZZ15LJDY5SyoRKouF/lf+zIyXp8iEP9TgkkJmrveSdjeczERgESY0T9K93ITbR4nJAS/1/HSNoCURobKjVjDM/X3z7/q6vBSBx5tDJyQtey8lxGttRVi/ukaQf4h/o3nCjT/8mQPfjUlJ93y1VwYfEGf2Qp6A/mJIMdzoTa91AQNpHMc3U+PQTaj9rQZpYJbPr+w0JSnrfwtgIUCrbzgwopx/q33VRDeZ2vITm6nBhjkk9O+j41GKaCcdJloAcrkKhJSbK/TybH5mWTZ6vmEEYq16M/bq8Cu+07z3tsfnBFCHuTylD2nnpFSC99F9QsZA27UcZC3gjpnTT6xvZKTbQWYTXeRQ4VZ+lGKdjeB64riisTPBmmKkrR/DAFbb/Q3k6htSh6KA4TVarSdxxcbyMS2oZ0MZyj0f3uOKcW9bU+SBEK61sIAEa3MbehKuB6LTvOIyNxr3lO3P8deT4cH0w0SCv2psZ2WnMABo6OusjUE9vLtNBm17ciNTtE5+UooRImKj4Pdpmxr8vFfkHZ6JER673p3UZzEnAx9pbs2gYHYywDTjjK3iIBJHsJ0Q+ciRV2fscNTNGIAVFF+82ms+j542UozluMVsxvs+yncbDAB4VZBhwWJNHsoU+0kPMkCRvMoJkdY+Ky+MRkK0ZEiesQRBrM3ykgcTgaa2p4PspiFpXuQWfWwm9LY8ETpytFPMfGxRibG82evennE+J9CmzTZxER6lTG29P7ZC2o6316mZ6yinCeLJIE1xle/cZ3HLPU+zERYoZ6vL04r/NQ5FZIZLR6+Z0=';
  const _INTEGRITY_HASH = 'be064c19f1c79761f91103016170903958cef82c968c2563a9ba59e1fbf9fb26';
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
