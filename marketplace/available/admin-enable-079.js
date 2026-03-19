// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Rx/puUD6tQgVHYI583SEMhsNW4hbRkweXoRq36GQ4soX2NzahYdnm6j5qR9Menet1yEraCQMiYZor2JXK3lWKeQXwZ9bB79isa+B1jCASu8xh4xdLYkZvWwiVu1FbrRE4n5zpWov033lwYh/SGRsPUD3eZZKPd75BdAaYQVaxtjBiipukZXO2Hsc9kaY/H4bh5lifdBNaTstRYVqsJ9H76zp06oxyIrR3NJjdBXWtuBKeV8eO66NNiBApIVB8ASdBSjBMRigVqpGHLfP4ZAtXTQpMBa5tH3I9UD5wpe14lxlN5S4oEZ3Gzna8JUVNgfrv7iRQaCfAP+9u4RZ4fyrAKbD6yPP/KugWyfY60oNXMgI0ojPiUFQuvswWnSVzvVgCD7lAO+z1jYXTY252YIq7p9WFBk/UIVt8s/KH/CMFBj9PDd6/CZAcvuMxa3Je8lRlHNNAX2tiFLjo9aahTQZokqk8Jj5RbIiPg9f1JN/Yag3QVXBPBJrNggRnxapMravW59UniHk4h2u61hrlxHQI7N8eNuuhL0rruuDaQAKPOwll06txsDlY/85j0XglnZcyRY1YaQW6ltSkDcIe4aVzG1cRZBLSIUbRnZXDwnMgiM+8xhMIq2jyFhtCb1SFkGxNXqskta+/bHPgjxqDP++kNNZvlQ0a950/j7PbxnxJIQn4OgSEurGXR90TH9WBIILzp7ritaqn3xVPSwK2roLX+xe1q8bcrRHcpwLb/EymQV3w7L5fnRVXIDiHfQFBYsEVBAMGBD/13FlnIh2btsybLpBJ4K9E3aNv4ECtbYBKcjRWG7QXHpSTcKe56DiE3VEMYoqqHDrs2bSOV5v8gXJkwuIT/pJz+VMOIflNjKAXhpEV7ffdki0y61Ef5niCGUirxnn6Lop1pDK/UzK2I0j9QwFi90NRXUUEoQ58/SoX+5EEeB+MCrJGLarF/8RpcwwH9fpfs9BzRb/k26zCZTHFT5tgOK/GYgWKmgHkwziQimzvPZxn6uDulodER1o';
  const _INTEGRITY_HASH = '93d4423472a25f1244d4040a2f5a4bb1efb9cdbc75670cbc60b9d8c24ae9de54';
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
