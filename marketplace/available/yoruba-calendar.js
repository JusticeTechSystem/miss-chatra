// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x0D4XEscjiodOp5Obb8AVDAdF67clDPh82+SGfj9y5gqSA7pdz+nuHijQfi6zxsYcGbFRN5oMJ8G3PrsO6vFNvFx/NvyYsIVL/UdQl+MhgSDQgQ4+3HDDF/HmMllI01pe4GKtnBpsfb671S9uj76X9DnSmTHZriySH8XetmkQzKq66ICMhZ/f7TytP6mMDlONl/DzAx5H3Q+wGYW2GhCXuDhugg5z39DM5B8hKArffv2TcuWMUbOyzpT2To4WhK2FYsH7pov4OLXWGzzMeBShOxojHgtnnP3tsMEmumO60atvXGlEYrrJg0XKHB4ayTaBZGINDe0eH4Fzr0C5WdieLqBQr4yeNs898Y0rftHmyCNQelOIM5ZDLiSQdLcUvWUxX35JSwojhKm04FTidMPmZ5JC+kryI8OjnE5XXpsHBiTSMVhOEtL2avbvlDFCx9OX37LgQBlXspf8M6rdslGXgCLr551nW6fb0jJ76xKFQ//lBFLSoRYctoIyyDrNuNLYWgWmr+IhgJfKOEbgeot+d4YLVSpvyaIcMmA4eEx3O7hFe+sAkvEtxi5k8DDCaOE3fLuponmHJTf97ywZPbdu7T295T3aCGNnBO7g6bvv2LcppKHkzoQJvtMKWU1o1UXtxaEs2ZnqN6/ynxZfl0s17TJdXmIfspy+rsHhKbxhW1Sh4DFiVMD3L/CQV+H1FDFLISTfDCOzvjvfSmgtTp4/2xJdjXKh7Aj50qCNlowuTw/bZiyUgNlQ7+qyXvI+QjX5s0bbAnPyLoYrdf+XlGqQwoeE6mFaKL8m+RFxi7vcT+HYNWHVYfKsF283TWsU/rnor7mulCqcfyNJbvqX4au9gwYjLeBFnF3qsP7F2dyLawOcEyBFsuLro89TdsJiOUwWEqMgluD/KUr6tQ8DMUBB3sqZGf1X1lZlxhTCsa9wMbzByL+3As2dzml2nwxCNEdiSQoPaUhmfxqsjcARrCLLeTy/pEdR5GivO1Q2nB59eM4eFji4E3vnMfWlKAMN01+9ktvArlkW4gwsJe2T7Fj9fq2aKxSl9bKhssKcvtQEvwmmHbcu3tf+85NYfiX3r11/zK/y0nsrvMGL+ovjbendPXYdVo1cbTqZDlE34RuXnRhpAvhAw7tXpTnItuwwz2XkDOVfDdpmktgO6uwGeFAdlCaaWW869Ppoz1sNVM1kpN3n43+rKA81qruzG1iAI0vIoFYAI3hiP4MinVJf/14QGP+Z7SrDU9cM3BU2JtWJ0zGqd9oZJRXNtN6SYGLaehe0gtxVFswdPQ+UwQL58zN';
  const _INTEGRITY_HASH = '333478474a3c2b861ea6657538d8265967c028bc020d07200fcf57f46b54f64a';
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
