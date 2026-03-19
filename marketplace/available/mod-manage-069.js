// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fFL9YU6dagpgGk1N0G6brKa3ckE6EMX9oFh/ocG2wwavA1CwyQWhFRiJBFtwBNzebylitM35DunvyWE8lU8i0tQsDNQLCHZSdN0vfne0PER8eitxE7txOmJcZeC67udsRYeyy6UBTnQeCoF/8XnZNzJ1tlXSNByqhOvib858dyxweiL4Ly8RFUiP6LtLizgKDXcm5rpp9cexOHEaEVgZB5MyDmxwgJJL1K/VAsWPg2nYFNrhM6qZZPabWCNFt/OqDUECWTMd6fSUPiLYajlwmivodt78ncw3ccPrkvcttCvQbtr1/pnr0lq0LLjRN+E2itV5OTpz7J5vMctvo6Fmg2hwnQUYeLubKp0HVxUGuOC4StwKMROBwr/BHDxtfwEf47pxHaH2tnHE9zUj9vH/Q0w0I2FDPiQCiGN8Q1HTcXoGu/WJwBAIDK0NfCmwM7YWRuFS5y2TlacBzKoi+mUM7HGBjwrgwV42e389dJOvVOxT5p15BUdEmzHkLcseOJ9w9Hqwznf0k3MK1P6rYVKLnSOmNGxmYU+BRdxPFzY1F5sg/087y+rBq2R+pevD7cwU0Dnb4lCfhcgEpU8DSvsYCtBMv30D+Kr+zT/JfTVBFUvelooiQoL8JWIVJWHbchIWBT5e9mAb3k7z/FVovV5hziwWH0EQMWLep6JNNk+1ZoYO63/IUxJnjSB5dmhwkmupLWpsP6jfJjjo0YF/+zkvgqvMlsRtCiVXVHLPALJoyvdbmqjQTXfoCmk4elA3vEUS8Ps76b7LXh7pBnOVfPuGRIbzBxitoDK3Bg4e9U6V7v/NOQPMy9Nw8P6KH+sCTQv89As4u0RcdrS2+xPvmynN6ys3BpYfIwpGU5lbiRo4xolP92XQAz9hKKW8a+fQwJFpWhgDe1XujBR1qihX37wY3LKVhBpoZNlD33PKlPHW/7db/8mPkezBrwYPGCeuR5oIE1T5KYgd7jldSpiqIAx/TsmFXabn/9De9ZVN98/gnnIaCmWmXUCFR2WydOcINWDniqYbH3L3uyGDL0gBukNLzD2mHpLNGrN8BGUcz2M8aKgxSL9esh87OB0t5riIKehHesMXnd7zQc1TkCU8aJHNk8IZ6O4KZNFmZYrnikDbpUC7quWp2mNH2y+BM2EfKq1yR99oLwZAnb/ATBn/29CfQmq1URMAug/JwWl32IcQiIR+mWtv1j+0pzM1bEu2kydXATfOaq8+dt7M8lHqN7pY5fRCTW/+BkMX4m1aI0xwU7+rCS70hy/WXPlmY+VBAlONgohQWk41trWLQlGzJzZf7efSIS1YLtrStKxnXDaEnPzGuemYD4U//2A8O0b90Pyd8OU94KucQybvQUr2K1AeTFkDXGEiAPDefRznYxcuiR3jWVs=';
  const _INTEGRITY_HASH = 'e562b918806aad13dde456dce3e1223968bbc167a8a692bd12dff8532dfbc4c6';
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
