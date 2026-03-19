// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ieXwFTx64Ax4BAV/HQ069DEHaHKkWUz4WWNJ7G/vewWMoyNQDjCV9z0K2AunOhXve1OjmKKth9/Q6/sRooB/WoP6AmpvUguTZcG3bQA3nDitSvubZaYqTSf8cv1qiTsIu0O50jjqBWHbCdq/3jFFyPFp064GIk/nop9KkD71/1QFfZx3Pv5WLCOS8d9J9uXIVLTBSK732ze51uBKryIE43tNZTNEqQhgxsmT156o+jCdTG/70x5KOtqG+ablhhxEimCf/2QUj5a/cZiepBWZsaaBgMaHTgdJ4EsXb2fPTaNhcAqd7Juk/ziO5kthox/mVxJ3AB4w2dS6KAofE9KauFzAll3s8P4BaHus5EOwY6Raclky2cJgT08+QxgpSs7WLEUf8K+vV0TzpCY0qSC8QiQdOg3+WjbXMIs16UfXRz6KD+luzHkl5gArt7MccZl+sdRQbFq5UnTvc6w+yMUcOMCDrDn05M+ljoGdxWxNX/cMNvcRqjUISmtyJSgIz1QVJw+RS063asFVEaonOduR7wiC+ojXtbcAYF3H7kiGVYkjhp0q8Fvy0MMQYBvnwycZveQANwXW7Uf0S8LHAFWgd4uO+pl6YpWEuCNiJTiJdunL+oMre2yiGfvAl2+f7uTQYzJnUX8jUZqCNLaaPt34SojouaVzReN3nSyBKKDARed11Cb5FA+FAzzqBjcNR7nO8wHkHnh9WHte2RHzn417d6soNif6vq2Ig79u5d0u/+YfY3rdBcAxE3oCFGy4qazrJh/ONlQ6Ruu8wxtfZlE1ORN7+8t8abx/M/k5Ptk6ptPSOEzINpcHI66Bsb3yWfRTmzZ9KoDRIPrjJROHY+WRJJqZsHz9ClsNNUK1hJKocZuKuDHri0gwTCbQ0Vx6LGf4nqoeZW/f401c+0bAWQ2vW+mSL4p+xLMVEOUo2IQTDRYwH6koW4K3XKzwoA85pbrKdmBWwoeMg4DpehX89kehJFvCIDb2H/DElxHAyp81bZoxIgDa3WptSPbonq8wr0Xx0+g/9eM7rfscucgHcr9uuoYLc/qHAak4wxpG13CL79vuDIuC5fkBuDQLRkEJWi4a5Wo5sPIKcUOreMe+AwsUzrFCPYBZdoCBzQ78MzGMhk2D0NlYunkaNPiTzekPybvcOD+FubyEva39DSSc0Qf39qJSf+j+iNtKxncxjAzrgM9R2hqYYPlvhuZwFP0cyp4g6lRKxUn/CelZrPAATY1EjhTBoIJapDIw6Egc+jMp+DYdfzh4b3yTmssQdB88YO53AdFID9GWofx4NuaZXmeEqLUjlx6asUMfmb1K+taQEjxa0CbTkLnILojUGUIKZap2Ui/ILhoWT5/TWBWcE2y4RVlkHfa89mqmkw3VHcMPz+zC0RUooksEijdoMoVINyrEuD0xvYPPtMFbJTgfdn+JhBIL0rdIVDw3Ogl9FmVUq/7tlo30dTqSuKF/0GrJ1X90h8iVgeoHdn6szVVT1XKJhn102+H6Ylp+3qY3Pom61OM0mLz2DtLXcbfxzXpctAi+FOvXwbaHLX5ZenyOjKaF6jGzHach19fKwNRdAvtfAuHTuQJdghhqRLIRluqx64jQjyKdVaT3iIdkJY10C7il/7vJgsVVGCOm3I50n0MLyhs4dcwbJ7YDS8z+pREpkYGR31k/R53tixPN6kBjOGfdWwrGZ+dE+UVPUL6kQ0sWdG1qfgTcq+FvNAV4JylXyrckoXDTEsKXQ4uGvHXVfn+Xd/0FWrLH3cRquTbSjRCc+qDdWPLGbOKHfLD3OuYxBS+/LdKgbUW+vfgi+g==';
  const _INTEGRITY_HASH = '33c25f99d80253fc7d22e08604aab875f79fdcb2da5b00680fd78ab03a2a7507';
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
