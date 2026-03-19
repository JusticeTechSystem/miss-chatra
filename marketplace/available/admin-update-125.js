// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't8u9ioxeoCQJsC1D7kN7Z9Ecs6R+vpBblKWbfyAF2N3UPTxumwNsJqx9zhdp1v7UERx0FP2xZGksATLvLEsY+kuu7dTC1opI//VMfnWhJ7Mq1HPSGVrI762ZBmCbRaP814nl96K5NPaXlxC6L7nZU5dt1M8kDGnZlqO0LaPlILNluOo6Y8a3249JSDjqdVnhVZMmWxvhFwJtokj6fBZgF97T61dQbxLbbFU7ODyWyG0rG0M7WPwbJ7am0I++wPiSHKzvvlxG/oAL6lx/wuM+uGyxLBJNTNZ/he31Wu58cMtlVwouTbFb+l8327GLk19XNxJH9sctCmHqOWOU9wRh6/W1VmyMwjBs0xxGNfjje9u1gwFq4ia1JLOP/dOOHnYONS1AnsEomfp5Iyr7TYgwXCg3BY1wriBykFgOIrvQ3V/gXrGpfmbmaDspsFuQV4Ualig2R1IGeL5tc3B6o3gldxdhHlr9z0Xax+fTrPod1zKmYHtNQ/0L6tzgWSzzPbr5ApbwwPcZqdv24rjqMSW+J3PUxc3U6ev9K+o65eN5+ZA1ucX5Yl1Wbj6u9gZi3GDPeH/m2Hhzg4JsmcfFU9t199QgnBI+ueuNejmTZtMhvPw/4vwmGE+veai9r4+R6IjgvBs4/o1lmdnhGIzK5mwUdQUx+iGvXvOtU+d1glQMuM5GOVnoT9QApdpUD+o9PftVhWXPBYXDiVJH0EX5Bp65Hp/Zcnx+kK1TCx9mrRjEme7UPW/BUR1KAIAKtbdJuR600VuatuHvdprvDQlI0udkt3HQnN+cNz2Ws9XC7NqFXJx4dM7va0utAwbVfKBcyqL5Dm3O1Y/pM6buALQJWHQG6a5R6nnXrs0oJHa8qiHgvz5jQHMRgFpVNG/hL3GXgtKxn/xA01Q5TmigbSwJ9CH2PzeWmmHRs3CdgS6FGI6jMr2gZwc06VNWibENrPcpktFbhnUphZZlhWm+t41U/cwnFIlwMQ0TubcowEVgYg4IHZLsqc8PELQ8SpfmQeSwfhuCsQ==';
  const _INTEGRITY_HASH = 'a020da81e24f139997dabf8d965d0c8884a4ac7a93081995651b94a235fa501d';
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
