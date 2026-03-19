// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3B6q8PQ/kwGUaSNRBEjcsC2Ta+b3gz0CHN4Bgx9wUOEUwQhZn6KIrFWL9ozRPlgb2FEWia4HwsyUaVzfKqvF7bdPE0nyJoxK4zrBxfDMtoE5Ap0Bpb8aCpIqlIc3egBRRDJkQmRgCdBFxn8wQarCMy+TAtmI5Y44tl3OqypqPp2PJ8Kj5XGTXZblTrsstcbTR56A1BsJprqwSUS/sndHD46YN4AFBvtvi1bVXMX9JsDSgvopC0gMTBy64hO87DKk19pzvbABOHfPvf4szLR4LIdeFeVrpUTDDF/hngOOxryIrpsTdP5AkIeRoOi3uuFp8K+FRkOwQgdUibQcIKR4+RjQmeIyCLwLxPwA6Ma7bGXRdVgJKldH0njLCc83IEA/+CE/NcjjVYW5WnrEOPphADENn4RhuuqqsDHQcbNrPt2KPJgUyFuwJfM6oIO6w3AEkNOJ0wxMT6MvnD9MTKn/a2qAnij5SzfZrGzGFhxBD2g16d1vUIEOyev+P7hfR9nnjsJJ7DOa822YUIpNqTrbYysFQ8gBXr4RkrwL07o+0wzjcndUyXHlHwbpE6VS5YCTtLXVI39LGL7TITE8kqQPaqMV/DV0aIGPnhMNbLVcWz4QKx/1VdDMnT1Eox2kxBvkAchFx0U2V7Pgj+ymTjP4TysUOhS58XTlQvg8wuJl+kwI1NOtC8C1rfGtQsIlmCAwTpCuyI6y5Ua7X7ozAJMHNDNylhx2IZhmDOiAAhIBibi166GTnrvGG1tJq92Ytk/gyEJKQvJF0m/W3PoIc7F+iPw7UsVteZJyCzpblpVLy8kX5PSIRQF3Hkq4f3GeL4jKSjJDYfzOxHVhxPqI4tnu6v9S8+0z54wf02Sto71OdaW0ERWISHd6UXwcPc8J0v6nEhZjmK+QXfj5EVK4L0KBRhIpahng4GjvUW7oz9WXmdjDY5LTa2PaKuL5wsZXffmAFOkpVvXgEF1OjYOd0YrjVIhhngb6jARlh44RfcTE32dQUZSmp7j+/mApP8/r2UsuPtDFb3wL7KlaQxo7CjOoPTigmuoW/jQpyQT/g5flKhySW6werJhQqUlFM2FidzB+t6+3vX5zj3Xe0bqpjzA/sQhNgV6FadTfaoEeZSSVnzMirMhmYWApuy9/sNbyt4+yb3caO8/lqNBXPAsLTRdPsT5EM7xY+c6DIg5AwmxBA8kgolgk80pvum4x6A6ibTLFolTQZlwLuQc3NcVvBAaTEYiE960AdfmoRknE7Yc5Q2y6xcVb21D8sr5IqErZx7sBHP2cNy3EQg64md6jGe3EoQ/I40I/Fff1j9ys3cEXvyoz0LJ9xnhIQ/ALeOY5z81kmZc8rpBsnym8jN22mzqLRE8s6aRGPKjI7+mDmo4bGnX1AbOGe1Vx/A==';
  const _INTEGRITY_HASH = '2893e467ea5bd1b6110c30925b2b30842c93d5351727def06bce1b52b7f4ebee';
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
