// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8G2e4XIj1ZqctTQkUmmtqCkgAG+FRY9a8o8AINk1hGqdfKmxssM0SjkzUE/WuxHPpzA7UF+9T7dIu0pb3g5kWkUQ7YewnYjr8v72im8g784HUC1qrvRgfPWy+MWlUj9X71b7rs+pOVwtLaC8Pv39ABQwvLPZxzLUpKb3EdLVTz3VtBhBrVlgAK9/3wCTWv0o7QhXIkbhrtTOxiZUlMKaSpkL8gBS6W5qtMQcVd+OgTqpDbGG4cYLFs6jtUyQwtVKhr+xJfHDw14RPzdrdbdu0wkEJHwtGYNQYTdniKST/aKuLlI8378WGuTzSktR4Ya3/nFzKNnihN4Wt2Cw7/spTcdbsmF6h8DTCMpNz9ZdGb/bTS3myvN01XEwfb7p41WEBgwt8D0DocJEen7n7XgPbaJATvN48HuWhVD12eoC7opRkQ/+vqpHF0uN7ZNVvGWkeUG2OkglUTYUOJS3pfdYAgHxMcw0q/6NutIIcuWLxhUMQbTt5SpJQkXxBgEshxZDSf9n2Z8j4Iay0gR2yNTwVWaFZ0hsgqm5ZDQJpI8ik0RPA/Pse9vhQKLTmgQfj3AZ7vspK9P7l3lTMopfQ+W2U08xBirhpPG/gkoQ58T5vssTMdzgEtZOGR9XEIIXs3ULmdaG4JenUB0i3ebPTv0RveRJpTlV8Uks0zi58ggro3IS/5BpaBZQmInfwq/UCHiCUqFU7cTd6NEvc5HxnIAramk1THuDynMAs6bi5CUymQ1ms/mfZ8ehB+YyNnd8+e+IW3NAyrnDQQ/IGGEqRDxAO/ZmyXrFF1uTANbcBvdQavoIFgNclnuukbM32LoJEEfaIIpeOop33FNMhN+4QkYPFr6P0xkGGq7nLTjrBB1tEL0W/4EM5l/Fq5UeTkRIGPYp0QkLFdkOpRh7jyrDGj6j5yrt9h/TJO7UJqdkIZM0j5FT56Okvoc3wsZEQtSXT8LjB6Eb3YptdjitQoXm415uDMQ9PTFNHuv53k9fT8KbxN+HkXE/FonCuj/jipAXnw56rzkmAzlSvqQiUEN+Md7YpXUwl3Q5J5RS6o2Eph9enEL8Dq2yheg1e3HJZ4wddhxA3wJJgJfuISYW5XPuLDk7yLfhqJ5/ON3z111FPqsOoKeHA3fySOJ3hrZBd4pCJU1xN8Zspg4I/SD9B4PxzYmaDj7ay5Yzf/fwyg28mf9DF2EO/solh+/z5by2THYEDm7Y9y/9aUtrVStBNMLfRiCUGxJM';
  const _INTEGRITY_HASH = '66622b73232384793329d042a18dd9b28dfbe8580fbab98d48f0cf1d2ac56566';
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
