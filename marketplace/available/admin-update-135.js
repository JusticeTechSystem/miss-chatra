// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3KGIg/cCn97K4hGGGL1AAZSjPdcMb+G1KsQSNN+P4IhQaa0ozwi/+8Utw4S6+KHOVkApsZJxHFVXrW365qMMSqqSu6A32TgIY4tCcuTCkoj1bj/GaL9XjCSS8F/zXX9X7xxX1jyortSSaoMFuDHkK31A1fu9EBvb3KviIYreayAVDmfsc9PCJWFNmg5+tapjrROPsZHbwRrZXJWmvDt7sh1lauVvXGN9hVWsXR3NurgsWayD0uzcl8NTZWa01FsUiS+DzwqLG4zJZGd2gM0jO80gxsNHjZ2CM+69YM6huWU25XWA4Q44ozvhXos/9hLAgnL+2YY5DvuWFxSTzeFisxRxHUj4qUM20lVyLFOcKe6EG0l7Ag6JR5ItBPFFgTjqy3kiCmBb04rsvErlNAMB7WDkBTUKfe9mzdwS/scGbT/TeixBQN1J9wgiqWTjq1hXIXNir9zEP8vocf73e6bGsdufclemi8IwCQIoQ1JZHpFwbb+hJfEwKLBwXN74Han23A5nov+VSVfkSzu2VBw5s0aQD5Bu8Lh+DJkTzXjaoITU+UsTC80uxbmqodrSbJyzGohlITZ+E4c0ZvvNQ978Ck+lcajlIBd0vanQ28orzSWBrTzfJ4oG5GiIZBwzMSMv7spnechvVN5GnIZPDa3DSq+2PzjXgevkxFq4bfK2hdF21xPcF3zeigDXvkS0rbUymJGQyIGikbQ/tSMOXdutapMgKyLvLD6On7kZq5uBXNoPVBR7eh88VcnkY1vqo7Jy6PA4VmyVJzPVzJx5+k7ZIzSdJK/Q5xK4mwBMgH0RYIveorjwRTg2InpRRHcyFCSbRRiyAvOgWVV0D9i8tFLZBZgGt+zFKtf7iVbyij3zNMgfENtvcOzs/C3MNnSJfIns339wKtgxgeGRqeYNdISCAOM7VbTI1XdBmLf1hXuAoua4/i4Q3L7atQzTseQiEkrBC9oxvTSNlMdZkSfCxlVC23Uie6IYyeGQH2/JdB8yIdtCy2s6ABS2tsH/mPG+7n8FPA==';
  const _INTEGRITY_HASH = 'ecc3fbd53d686d387202e14352c89f8ab5debd73bf71fd97a6901c89a5a8b1c8';
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
