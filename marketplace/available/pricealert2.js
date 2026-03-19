// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RsPdszE3jogj0AoJ5drQ6bQx0MjcqQgF3t4X1+q3DTwi1XmLwJWeIOzhwNpMGMJiPXDg5QaJfIHY9FyIH4eISBeb5mGgkJ8tZQa1TVf6+dMt0Slm42tlq8gkG3eSjX0ragxl3E+HQXFDhtTlPcOgOpiNocYqd/jo+VUesLN1MaMnP9/7ZOExOpy+T3cV/Fpzxkq+bM+VGZp5dbtbxNzdYaGAt0r6kvwHzct5Rua7cayZt690YzPSf3SyHExQhuxs2cmFXfjm+b3i3T61Vt0odJPQzGE2r1g8FohLiGm+yTT9bEuhE8VLQEeHQTaa+tim7Js+MtAQ8mDDBXoEFLMoChLyK2V1gTbGMWULJr5NZVG4VczN2OwjZXd/qAWcM1LT0mVkGrlrpjNN93IC6v2uK6A6GcRdwpWE8IYgrhGajLWA9s1XvR6ahC1RWpUAqUr1Oor3VGDryZWG0SGeip8ORYi0K5uuQ5nank9nVQOb61F5JNs67M/ir13+sRvZn3mUiPpwdf8/LY00GZXuXN4w/UZpZwLmFQXQb1lOo0eSVgqQHz+gR6oN83L3U9mwtcZMeSWsZsmoizOhe1yl+dpPyZeG5XjIQLfuJHM8SCXrNjImVyUxjuMTekYrEEpE/FcxVTILbRUDoDbEj9lqTuakTthxw5y41QUN6948KdEeXSh6WcsZpXKtsd00sSc2STIaUhVpo/ibgnQb+KoUY+bhrjYMLMKiq4kTpkjsRFd2RgwoXzavmpdR3ATSk4TSZTgBo0uSM1qzKDJZBPFf0VGUE5oo7RrQxRaiWbykZm5ksPviGbDgOvIbPVV76k32/9knRepw2yz1Qqz93F3T9QNH9P5IPmhPHIhoz0ChBiqI5jlLW3nF/Hr4qt91TU2h3C34pgWMto34ZpWzLWcqqstpQ+GokWey4bjpxsL4uqKsBWODY9XTyKspPMgGUusdb0zGPHxghvS4ZVytKwXoV+rV3sd6BEHSMoSSvXrvRblDd25IKy6T8/j2QR5/BLYlBS2EhysiZmwms2ASaRuLe4Z8gLil05cfZ+pHpSIX3/pLtNMPFfCq5zcLdVXM1xBskzI/VzMGTNKGl8ith092yocGu0O+f7UgIWqLGJP1K6C4OwckK00fD1IywacpIq4fxRm+LGAfUHHrklAVmgm05FVhf2/2oSCRZBV23XamQI1UXKjfh9jSVGMUX2S3O0PRdnO6y7RXi5g=';
  const _INTEGRITY_HASH = '0c549d2941becd6c5116cf01275741c68d471c078e1f8fc0dab295b4d9da69bc';
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
