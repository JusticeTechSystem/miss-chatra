// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4n5ehTUCy8HAByzCYV5rV3WdKVlx8ZiuErJ+9eyoM1JWPgcx4jxxoH5hNIiK/XaPNIhNk6GFelxsBp90Kj4piBO83ZKUQ4vdJ7xPIVHcAVKyft05yfPG+vL18wDJpz4GCZ8Ebs68iP2jrTmFeaVrLhGLvj9aUmP6m3h2JByGyqk/VDitWaMlljj27xeCsfjvwIubCUZ16UaAmVgMoNLHSKAZGy3mhNLxZn9EKN9D1d/VyU7WeJjimF+iyKCWSf7AeQrBFlgIcS2FvdmOzYaXNsBRS/tULEdRQlAhme8wJgVHZcFe6WWgj+J1GfTgzIaIUgS/JE9nc98ajbm6wiTtXRtQ+tjze7T93X8RFFYmy1m2HHkthf/UDOUiYMndbuqJX0ulxaBuuHndnkf15k4gTQg8PPx6xuubDU8l8z9StmyHfQ/56AdGYDKzpwr/vZh0TZ4XCRK8axF47eFgYGUctuotG5UjRbsq7P4kVZ8b2rv4hfl63SG4bsUrzstl6M3zz2i73Ke2hjwHs0rM087R4s0DR6u1kUrG9CNu6fcDnM0vUX4mdDGIMcN6dWNurqQLbF3QXcQR6udLbmGmVc9WUlhhAYssYbzcEpys9R+EIlWY0z/MxoR/SqlqmeWHq6yjENlkTgk498aAWdvyeQrrNmBx5sbnlaIg1Z2gYO/yLb4jXe3ZYOPiRaBvhAWFWlq4ARIZgBpNFrxxcm1IFLb7E2kQwo3i5WeBdtNxohhTRiw5VNWM4a0XIS0XW2XjADk+iuSJ7SkMcmwSWtBdH+0N6XccLMeZnNp4NCrLvOzP4uBlLrWYrR/qry7/k1uC23d6jpPG8yhbNrZQdykxXPWyQI7T5B/tyD+J3RnGxXpCKevm02p5sPh7wkWAnfQM8NUzO4wtRomyzgCE/hn9FK5OJ1A1v2uEW2hFsIRebH3K+TSNEoDMUUEyJGRpfTRVtw7J7qK6bw66SBim4tlpR7sc/mRL5+xdXiuQ6wx7yAiAExVBu3/DI24AmZ3fETxmlyhetWsLuNBx/nakkT2Hbn67EESZzG1BKQTaB5kk4a4V0B9LNh1ukbvrfrJHKxTJsEYe/Up4Von4DNiE7SG61z1l+33r59ik5crwoAtLM8VQdYjCMIiWahkKZ4J4qVL3Ac3I59eOGBvYRkIXkG2jaE8iAZQD2LHCWnyqT8X4Xc2WufWvX4+wxGAx9uKXKzHbtLmFiwreShqu6VG8vja+GYjG0dpDjHJETVKsk0Apu1AGkMZJL9X4vTrcbaTMeHZRBqyFy3Mn3ATtZwN2rgAHbTflAVzQUrAF5d9DZsVdlXuL13qkhY6v3oGhrDfEYR4jQKEK9ZfWJnVxhQ+hSIQ9q/dc4foHdqkOljwfn4RZgZ0otThEbdXhhxS6C3hxIvpTFCp/pXCswF7ykFVIRBQxAJg70Qh1fj7M';
  const _INTEGRITY_HASH = '0379740a11b4506bc7e368324fdc0647e2338ee6dcbcc422423a560a42eaeef4';
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
