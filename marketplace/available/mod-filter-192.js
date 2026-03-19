// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MCQax0CSf/4apqcPMGLzDeYL0bFzXZU4ChF3Jo3MgxO2BGmshyP68yjaIVAvyILQe53yKK90MoYzIcVWNS1BOxMWxuXq24PyvI2O+4yNiOE+EWBmPPeHlIGsTmwL5SJmhC3KciYvs8KlZsN5gvUt5rG8+LdvmuRLbj+edXIKABMsum93kHhMDNhWJbUPPn4Pl3sJi3VWmiF1T7eVX91VzWIOdNciDx0fGSWSczpry/NHtpf+dgj2GzqN0RgfDiPJT+k0l5JKxZgayZela1tMbS/0YOTwAyf56FvLntQGr9wHcTbHhbWCHb34Ml1PapCaFjH5gACvOfr57jjs/SRc8a/7JOY52+20jSmpD0FfGSXIDvw030YPMR7eJ5y5GNirC9tUz6+Qxyc1naBKLcFLI7AWSjC/01GQuPtflBlFxfeu+xMndE1NNieBbH6iVCiqmOql3ALWJidSq4H53FYp4UUQKco8jpdKClTQmGT5NVTdpeis9b/CcGkDZ5A1/zr2ZOrZH1tgkQuEIAEBjneZtRM9XVCGsxbCe0E80jexIno8qzy9Aq9cnknk2xxXjizSwi27prVr7Fm/TiNqvBmKDsQ6jJYYU+cHsXJWSJLYaMzO0s2DwSOuwmfIWJuYvFyiN5ZXR2el6rsCJUgNFkkueJL9B+GbRJ2XisQcZ1mQuEzfNl1bdKQXo3KbCmb0hH4iwSY9HDk/PoVRvNbj9K+5K4/mps/Hs0ErADUQZVkss6HCnuvrIZ739yVtSbkJ9WRPz+b8gs+xJjBINFtnwcyeP1a2CT987AKbeuZAo4d8OyxrvLrzxUt3YFp0eAQKW1P7r+qzFb9405nNx1nK/prcrNQ75nnWUzvueFD77pbR6OjeqPTCDgRBL4xz0EpfGrJ0llJAfdhs+dCoEp2cT0NyOgN0dF167pUAN3H0dlgAlQMoC+R3dcGy/B3UWHdcb1+4s/eAGW0ioxoXEN3ZT27Y6ZzQtWblYik7Yvz2W66Dh+GPKnpC7bKwxwJo5mrmC+cEGZfwuWm2tlk0k38m8rbEUVQjKY6Zwuvpg7yw3GCNG44zK7wC4hi4Io5UvBULmoM8cTL69fpSBsq/Oqvev+Ox3fFiaq5VQppi01fNfLOO/aIfwe63np5G1vUr3aOyxvf0O267dWqMIwUc32+FDb+0GIQbo9KWD79KT/2g5IFaiYS3Ybvs+dAiyXbFwd97y3Wkx3c0xc9x2Q94tmPTCB878sjuLmQTnb5zD5vQwdEnbQB+toccR3lTu3iHUWh/ZOHF0osfhH9hXCkWWag1oZXHrVLAO4ESNXLKp7WzrzHuT2nC0WnzkRmOtZLrWLL8bfsIzlCKN7Qc+cZWPBIyNOUKC+dTse9s2pD+5NpcJUZFpmG5ibyQATsOrg==';
  const _INTEGRITY_HASH = '4d30baf7b1971b62e04ce0c6ccbe61dedb5a4d1aa0f12bd71e04a5e15c000804';
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
