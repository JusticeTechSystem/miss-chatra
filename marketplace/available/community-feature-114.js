// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3aJmdIsRTbbeSBG6uJFfzvgyHXvd/6lrD+APhPyBvtl1x/t5Z93l0BF5LqxtvN6kstgUUmiTBaE9pDNHdHOn72/gyawnW6Ta1SdcpJmYf1Uz7wFggxKW9v9nqlgobu0JKEaYu5fUnKjb9u2JM4vCXZfTyELJO96e5JXdB/Sta0qf4dVJreSRSfOd4Xu8/TZz1vIgjUJt3YSR0rUCoAXvhowF/dh+Nt1hO7Wl7uuoKxF+eT2eq3IeiICb0TmmQsI8VxwRnT12JkhES1DwCzkWVfIPSivnwMC6WPaXvYa7+ZpB32qThQlrM+zKdYkBf4M+5bjExHwbtWvs29jT38DwskcXEKkMwBj/+FH7ROqk+aLsN7skYHShAny0oK5VhQAn/jYQ1OfordxatvS+dnoUqGShDsiVs1D0KAnptlWgFolfcl4MhHDhwDPF6MM/bTV+04ptJuIjwflrqGRXvpc/+K3vRfUFympITdNrTFgJlWj9xnfA0EHuXY4v6ZxWr48BB+0x3WLAtFjVKpCGwKycULLwzRXGp2N/O+yJdKGnhadMGTGUnnpeWzsjIAEjpQI12M17EUCiTK8WJ4d/vUnxy9lMKY307jBODaSJKeRIF/KIiZ2tHLXqgQKV5rZnlifGAOZzetBH+StuVOG9d/iBg3/5EGfdk/yCSdG7GnPghl2PstNWmBVmZLm/x4Ei+q8tcIFferQZmRAuM65QvHed28SCNWMQltPigiDlOtSmf0gcD5Xshzk=';
  const _INTEGRITY_HASH = '5c42ae3cd38f25b01cfbcf8f5da63950a11cd620f578d48030c3fe082b4913c3';
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
