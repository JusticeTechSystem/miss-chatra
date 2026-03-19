// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9bShwZYX/FxUazY3Ep1TequfTBnBAFOGMqdExrAGs6xgJLuD9rHzygMSvG2p0MxYfWV8f154/4gJcJkGnS882IZmds7ZXuiiXBpQ8wT7Ggl6zztBiNTjobQS9+dlhDEu2hhIzZHDqtjP+4T2YPn287/6323Ks5sj57bYQlltPLhbpRBpW/SL9N22jUUiPsTo3F3GUu2JAHzf+jfqms8bnkExoJ/LwJi5WIqnMZhwpRPJ5UVm4c+izOZ2bFgyeopGCJVOvu4fd+szeo/LnLfDmKosgZyh3821BsOAQaWV6TB76MLyUhwAPkpuNDvrIcHh9lQmyoO9zml6Z97WyeiXsn/JowP0RoLx8BXIszgN/sfhRu3e2rPpkuQCcFVDJj+qJa7V4Iafy7J2V6Y1T26W98jWpoPSvAEd6nKQGILpfKHfmJv7jrH+YQHUFYKsYuqHSRyMEFvbplNP6Pw7ezS4sCrSiJmvFsN8dbDt4eQtcbmM90A70tby8nz/Xu5TMtyWFrTqfwAlBanRG/7vcVYOBQzodCIsEvw5TOOgwtOl051IrVEfEcEzPuoxLKlnIfs0g4sHw3sZlqNC30f+FJ5YLIXBTGwPspUnuyl+fTBvcrUa9WmepNmlWBl+So66BP5A4LCgmoK26vIBgUrxljRP9wxJL/ZaOy4eK1Tis9U3q1V/KkqTUuEudzQV+cEsFAOEpDBqmdX6koh9NvbmN7QhSBoh1uPzGYjLncRi03tReVx6BvLewlqe9nyvcZ8Qw3csOHOBQIjqlWSmehNvKQ+Zt7SUd6T7/HCqjFPtak96hwV9Zf7lq8jxFwry8PdbyWRRQmiaWRb0sYBT58NzCen9Chs87+ZmIlziE4OEbQVFSUzF/L0zzCrotUzSkQ6BTML5LS/x8AIhq1YUm34kMyhyIamqI190uzzzaMLc5lYpLzEwS/Pu3VKRbmhqTNS0iIJc3Ixp3KOAydsbMNCpAViPzZutU5yXRvoh8nn35I1v7w11QlthRpSZ9z5rrvge9Y7BJVuZiT7oitnEfiLEaZTnUxFk9xKNEXkpsfbXTSA+VrHR/xIpAU5YNf9dbb/MbTGI6urAWYkcAFLZZ2Kq/2yOnbdS8Je5USAmRiazcICKavmHR5LD5vYNvL9boatuEEAyHLhqf7YR4WAykkVg2I8tLMQDp3XFRO5UURWeHaf+9qnf3omx93UXZ8GHAzD9ZTlfeqo6tgVCE0a5jOk6ThL2eABjzcqmL40GUXkMFFAoytxE0aD9gDw+JOt033NFD74Vw+H010dSku2uoEYTLYY9o/5MyxKyzw/8IfQZEOWsgoYF6XnenkYpp2bEHCZwLoL1VFdjzsPxcMxxO4rkGDVMfmxaCrS7n28K/CX8gcuPD634Y03bp7ucAKvHWfcB';
  const _INTEGRITY_HASH = 'd0548739b8bb4b1b4752945492259506f32d3bca3ddc883442116606566ab361';
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
