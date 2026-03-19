// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wXHkFiCf2UMuy3Xf1KmFRMb9vw2tkhDvU7344dAeLhm7IjOBKoAG3YclKXIwqEkI8ka10WUxEV2/fyc4fmg5CTRnZJmqHi3ZXa0s0iwNGke2G/f+a96b/bOo/csW9xx1ScDV24/N+maeOPk0qa7jYbQ5wCHn+p6v/OZIJkNLZUo9MoOHxfQulc+3fB+QCdJI3dGmcrOU7Y6MkrbgSxfh2EvL7uQVKFFleTAELIrImiX0D1LsrHB6vmsjcNMYIKPB/Iiw6HweMJcoWef/Ei7sgQnflRwfoWZJil7r8fV53BI7nGeqgjCsn8DX+kHdI1dCcs2qOmBPUWDX5V1Oy6vhknRf0cO7R+wqINe5fB+gcMGSq4jf2LbH1Ol5xh/BcrEkRYOgxvJv+5PRSAHE5kFr5s3WQiIjviuoTSFTQI9OnK6JgMuBgy5UewjA1B9M55b3f3i9/ND5B7Kn0OZ9EXlAhxLLhJzEuDfot18DA62rKmm472kDeogWUG5xiMgx/UHsvGNXDLN2kFxclKxfv/xtVHnnMchX6EJXIoDr5AJXBpk5X0KzQUAlaP/ru5rpOAPtpLzqSuIJEEXUEKC9oJJagz6AzSye0moiJyTJHdIIFN2dJTQZQbLO2J1TY1E0Inm1JmvQ4ggAWVPkXdvBuNYqufPBSaB+pjIvrtUsfTjE6ZPCjf6YnKHzJszTTkh7dbWFx9wE2fifnYzKH7FTzc1qgvoevRakE+/y3WZBPy/Ak3sJJbrxZcmNFrHKk1SFNBSUDe/Y8F46mabG2mV711UCsXYyTOB3KcTTN7bkGloAVU2jmS2M1ng8xSWlasfftjfDUo43IIFImgvLB19Njt47H2df/roS/Ly8FUefqpkTFQDA/U83jG/02x87T51E8cXC1wzA/T75iIIMinu6UVXixyXTY+1rcAjeDw9jPpXKs7ROCPIE7ajOGnB6zAN0vORqEkuCs15yfmsmEnDksBtfpvKzXrXfY5DeckX4gffNcp4PotJQ5+k1IFQCgSLGjedx33ky32DZVneoZL/9fncoQXFgJPE0Tbd0ihd1zSt0vEjpZtDVuXCqZ9kH4wbErrikkisGctHHmtsorQSFPsNufo/4f06g/toA/UFox3vujLdSRIEQZT9RUzizVcgWW9E/QljjDpUC9s77r2Rz7AuFSHEd85kA85x0lkbO3d8hgt0YhspfelvBqmiiUTySW05Hsq/k0+LgzS6jzlYS82/l6rPHwelYcrK0x/AGxJswSf6pAHz/3Jl6+bTOum7q6Ynredbu3eYxNUCaq+14vVkPhe1pV3iyV4FoHYfsItyl1yWuAzlb7QpOaF3Ith5TiU18E2LWUgy8HSNb4t9F/CHMqWj1Hh5HFzC3Tg==';
  const _INTEGRITY_HASH = '0db255507176e0cd31c0edee4c7afdd2638c7fd46a3c51cf0e29d79fc3b77265';
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
