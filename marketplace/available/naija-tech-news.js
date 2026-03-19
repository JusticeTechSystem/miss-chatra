// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9zZDbhxa/n5QYsUZw52pNynH2b+UPDGyG17Cr1fjdwlfYQ5jwJWNazuEk6hJYWU/aWw/nKDvYLXHRId+pJ1JmC7Awg85UDnJwUJVdlL+doawEBtYfSSbUErY0OpfOFz4f1V/1XMSGOfBap6WmPvLGMM7UdwxKmq50rYyIW8W4Zf6ktj5vnsDA+zBk98SoRoQZ73o9uifsLM4DOtnCg6zVQZy11LM3JE0RjlcCeHnaEXFnSQPUFKQMatjpg3vxmU/mipOulSqg+EXAWGISo+2vfE0kTCM2kds0Cm0STrl6zXy1M8dwqcDAlg/sPi3BA8GUs9ilYKf3DYP8cHh8gkgVqSypvJUFPZ2QAvJjOZl/XqG+UVh86LMhui99oKwbC1VH2+lxMCsZS30whLYGlKiGl8kNznk8IbnyrkXs4iqLOsgKY63vgSPZGqtS2vZlKkFx3f+lENZAf2tmNRH8uC/VbRiYpiu3wXfqDDVuGRVzHc40/lE17eCPjR+oH0K3+mDnDlYqQt0hAn0A39MXOr0yXGVeGiN2MxoAWefHmGQ5cBm49Wwp3WEI9OY+0cXAMcE+NWwvbJr7j8bDSILEwl/Na4YXKwrAVO7w2vkMfnvLlvIj0EpKk6z3GQPZnz6OL1LphnPHcJ82RXoBH0vfBdBdOy3d8elnOIjgkvJ7auBWUhorloUOh5fzSpBuOs/U4+RX/L/omVCv70JPf5dmFm0492Sk912NgP44rrd+FtM5Bb2xnWGlHTJPieJoR9RAHrxX00qHT9Bs2YHdst3Rk0iC19tW1/TGLFHZfDZLyf6oCYmv6/Ld7fsxZUpzvBWPZxaC04Gq6W4NxoBPdRyzy/uX2fWzCoC9o5r9/FRhJTE2GZ+5KyjKu3pfc5cI5tueCHi8bXTqNkzQzHkKofXVop0XMeu1vUzeZQLgBWm9CVj5fdB3N7r2Cuvx6rODkae90nF59nNi2MzzGnJwv0mREdvOD/8AaRNDisF8QtNoR7FxztvK3GR7kzYswWWqIqE0cTK+frJhVleniWdL8LnhP4c+uBxRkJybLnLTi+vGisHpHWGl+SwjCNAfCerGK7Coag3nBeZ8LFYD+vea14vbOlJ6kgxCxFq7WrMJhCgPGm7NVobudjs6rq3z3zvG16Y8n2A/NXtq6vhxWznlOUrj01wDnMbkgonlABRjBS8YTgW573UsZgPrK17bIwIA4lvIIr3hjvhveG69I0=';
  const _INTEGRITY_HASH = '716ea6427efdb4683bf0b9c598ff19d31bef8319577e7f50aa7bdf3a3e04165a';
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
