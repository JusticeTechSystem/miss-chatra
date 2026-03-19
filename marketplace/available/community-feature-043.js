// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oNUi+ujqdLAWCm/dqo351CAQkfM3HT4gIJKWX1svtuYxddV/hnm/fk9VyEB+Ew0eXmAG60UoPO/CBWScly3cbg2A5WX7bjWAko+yxaCIhKfNZqwGY/aegQk85L5akeS0pJjGecKcDojLRqYnVwjc9XVPNaVOL9E4X4xJTSdRI04Vzyv3l90ZQ/PMnd1PtmF/bSrCsHvhRxnOx6U1SPWSl60enBMLT9igIOzBwwkRdlBPWp5GNUHuDJVEoAI52o4M+nLPRygRwu0qCx2o0xYSrB4zNJuv57G48mQVcg3IywBHjBAt1wU3fkkPNI319EArx/IxGF7zlFb8oaXn48+Avjr90KuWQi5ixMCVqxqynUYJkax8Pg9BmL3qqSubXNkrYAyZzVuqi+ALwsISZxBbTiABHssuxKX/A2yHgUurCAKOukDOVNXoMuawcqcZu3SDi+4eG9mGZzmrx/dHgcpP+lD1bi5FHQm2Dn02Cn4VAXczpJdA9erajGj8LTtxm5U1IoDmJ8Qv5zHUc0RCNbFCCZpqOJ30+jXgmKi5bLVDxZ0aL/0IGS272fc2WHpB0r4N0wq6h/x4cgQBlxHZDKkaKVIMFRjHwyFliDnsNP4AFIA5HbqhpxUyYVbSCEIN1Row77/tkLn2M7H0UjGMH1Q+GH4lBQ9nVzZIsE1XO2icfvWD2CR5U8ows+LOQ9gHIsztriOgkjRafk5f+Rdb1U/m6KzBX2U3eOa/rg==';
  const _INTEGRITY_HASH = 'e495c2017343e41517ec7b5772ac5e8419ca05426372685159b84d63242d81ad';
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
