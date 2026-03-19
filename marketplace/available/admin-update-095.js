// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eX5BkkP4DgJ0hwejcFAQGDst0SK8T5q52gzBJMQK6P1S+9nIR6sWUIobds5fZahxUqriz8kFuLrk5shQsomcsO7jPBUarSHcO7GMCfRl6sAkipweUjn82tip33yX6oLdvrPBGBNQWYXk+4N/HXxTYssHIuvbmRmIudfWpXIX9FgYYaCat/RimG1vv27wrdKemih7HiJJpdEo06oXBTrG8KbUrKH6oFRlKHIiZJm4KofsTm0taqT1r5NjDqqKg7J43FgdZi8ZqB6UWka1qdTkND2lvI8HiSGmGjLqIF/tvIBRPznVm2eLvN/8fsQuv6rTjk99ih9qggl92iMBnpVkQF1i7gY/9CrEbBmsF5aUewn5HophSDQV+m5UhbJaEm+yvBZUSqmZBz0pDhOeqOBImQR5M112D8VVWkH4qyIBSDFmGkf+jP3n0tqsjZLwqvDika9h490/+yz+ImTQHqPMC4esryXzbzxQ6wS2qkkDyWSCZiXlfYh9ysPDrjqmyPydByr9HNd7memS8HjkW/YqClE/YR25+88JHh44yb50Y84qZNXpjllsNKEN9e+fdz8Z5gdnO4i5PtAW/FI6Zk6wqw2iIudzHUS2L58j9V1f8dimZCtt6317ciAwwhpESlsTDLROU6BKSRegXGLDxT0g+afWkNhDH+gLB2zOE1fYnQ6Gu/5SQKCeHcmCpMFHYRdV6Y4yitTDyrmAM0XoJCVRMdk1aQr0fX5KIAvAcE69jQ3g++vUHlR8Ztkgqe60krVtfhcI1xlAUdeS/4NsaFegyDsg0qBFCj4IbHx8ztlnRytcbHC6EIrHBaqs/ayPXl2e2PV0maQR5uhambkdVTA5Z4r9Sj8Dki2gSWr/6NNTk6dUXzEVWqRxIjwgywirHhBkp3N1Pbui0cJ61z9g2Zw5Zcvn3JNDZTUPVMDltv+wDiX64xJJMdV1FU+PCWsUrWALo5ZRZKxhZkRnRDf9sGqIPNRsaRYlwKv4GSXKCXk5V2WUVnGptw5ZGfkJuWuk';
  const _INTEGRITY_HASH = '20bde5949cab77f865ad7d375d9665474584d49fa7bb84660aecf43455fc1014';
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
