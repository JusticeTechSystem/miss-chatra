// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'anLTI5KVSXUyW95cdG8M8RCW0Vq/8/mu4Gv0FDV/SsX3HyBqywOYUb8JusZPNqc9ejlJqrqg0XHyKsm2KJp2f/7uhqWSDIl1Z/sKlT7Quyy0znkXBJFW8MPOWtDxjsEyqOgp5rXIY3pg2QTnuGs8qjspFyN83B1ZVymBlEIC5GClX9MprpEd/w9N7EGS6ZReZXGl5XY/iRBDj8UkRkBBdp6EhycJQWmpG4YvXF0lYigv5aIBtSNwzjG5VNunA1f0+zxWJ6VLFnUJbxzeX5/ci+uoilEJvdld/vAgX4KFTfnuLj20MRYcKEtCv11kknnMc7WlRplMMt6EsDJ8TPxcGOyCHnvPK5SZR+/ag/N2t7wUNgAWot2pylVGSH7k2S8AuIYVj5cTt25qQgItBwssa6t7mX9BhIHGRXnm2nbZl3TCKQK723PvaaUytjs5/Fxa/E1cdlGXhCAtuzGVKfe3oxPo+MunsnNcXjekGBH7nFkLTriQWEdytoYGBqZK0DuT2KHtK+yzBldxHVpElkqbm5NJY3Vd2F2K9MlkY3qEX28sK7WtnYBRvBha6caiABvegYDH7zqWxVrKniymQ41P4slqIISdfnxBsKEcIwha2ux0HN3aZinNermcEZMeztHN5oPFaHrcnDtG9ypZfuQHgOdzGJkhpHyLGiRD5NXiacJWNvc4mSxA4sNNO/oK8b61Wb5PXDff783LFGyb2rurCN7a/PHQdNvrXtC56Rc5iBjH8X9kgg5drIHzxYob8hLPUPTI+bCB2tXQ+b1pwJ4ZlQm+nQ/RI6dVMgu28ac5GPgXqd3wsC0Jn8HN9ZNokpj7zlwf1sSKewqEmRwihFff1mULsXbbqAdyvQBOlgH9HfVmgg3AUruORKJzNRiDmJGWYlxGkONX8ONGgrF3mqdTC00inNOjUjj+Um/tcv5Fnu/RXgkjOkxE9KjIC3au9bSE70sQh28ASWDCYvBmDTb94zwmmm5uTigasnr59iZzxwy+bl203qTZr3shmwyk7aqTG/6mrA==';
  const _INTEGRITY_HASH = '57fb4d3c6bd1433963073118ef7daa14fac5309d9464257f73b6556856ef5245';
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
