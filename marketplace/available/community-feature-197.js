// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '371yatVhibQDohFL+/br0DkeFHOdOHR5ZoK0rx1LlFx7YI29y3xRsweBZUGnB1ZRWEtrUsEaM44lvGUzl8BlOvUBT2+1DSSEWpeFtjf564vMsz0+V6tchnRuu6RTdIKxemHBrKle5fnlD+Yj3DSRbtnG+TORoIdZul1s+Kviu7RcpidOsFfAuLH6U6G7AwIOa32uRX4yCGWo3qUYEXrA29XmYJ0AOexOJU8WW6TZmukKubpfwZjikWzS3173M7SWwf7HodFptHvw8r26yD6RA5jiwdEyadu1+L1ABq2ggNTtE8jbgi0gk6GrwmJNKZc7t2ROJ9usdEwCU4qnVuil+BcZjYfNZTBvb8FWjYd0JE/Tlem8fjEbO/DWydzLcoANTpd7HsTwWrZjSirG7PE+vef51/DZArYpJryMXc+hKdTnGqV5D4qwkhAo4x1hmAPgwSDhtaKVkPxturj757EutN1rr2bWKY0YTYsnp49f6UPbXh/ukUX65jMXnNKRBwqws3mgwTk1YOiQQdWx8o3Q1YFRvo7+/NBONklVuaB8s1cYh9GC2dPf5yps6E3Odkvbdb2lUMGooXKMq4tEoboQqMP3XUXjJhmLFEnDlK3isPTnLr83RD0K5oFl6qxVOcaaDhsndu2R7W5Fs3QVeWat6ibBbb7XeFBhf0yWZMwnjuGTI/fmy7c+8nxewZAKnlwrZKLFmA5aM27IV2681VTQT3Ok6LynnL3elxdK+SYd+Z6sKLY=';
  const _INTEGRITY_HASH = '1b4e1c16bfbf8571d86bea5af05e88f37a6062bc4f73597ec20071abf2e5ca60';
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
