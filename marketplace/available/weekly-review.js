// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cJckDlrrdNHzrrlaIMbCMQuZw9UbDG2nesL62mw0svwjWbaTUuNADXyU6BkwYFhY8B34wzNyX3b+kBkt8PvHAxd2yXqPy1Rvx+Du0VnHdZFCgm9+5nUFVRycqZ5MkSk9TlzWfo5OAnBxjnPOFRqO20D7FWWMclo3TIMOMVL4jSbNX7IcqzJUnfrzCpT/4dgjdWS0+Y038Mjty6qcgnJ3TBwwpDQTQM5HkVDtLVhYouhP7LT63wBJNHuzueMmXH6P6E5yAig60ALquWcsc10vcnexKtsehVRzqvUmZ4gUr3dSGzA73TmZ7f6zKYiAHHIlj9a9VVOfdRMnojYBA3Fx/65d0Z324t41fHm3EdYXGg1z9G+75tYX6AS8fwNcUe3jdFLLTFGV+CbdCAfdXn+nDzSFTpP5sRr+0xR/d6b2hTSFRQ5oOW6NQjUbMB19YfilohYHP6KC+j0v+iDvkrQ51xz0oAU1EXT75mIjPUPVJg2oBE8hAwfrreSsCkoni10v2fQJH1mTAqgQNvP8fksX52S12Jf+MfAr6Bchu/4xYlfoQdF31/zMJXkgFmdAQ+DbmQ44BgfAz8WfBexDvGMQBa4tyIOa/jhJ6qa02DKeOpcElhFxCNu6VySFD3uSbQgsF5lbfb9ICJ4vcIn+MdGbhAJ3uenp2JhSoY4H58aiBADqZ0yu7tPIqHmRX/BBaqexsfMfIig/hllgzBBycjDmawi8oXo40Os4KB2wyrCBG6t4Vi/Vrhfgx4zcs7YW8LeReDJ6jAsTGR609UCMWVNNBthVlRp+25E+ORfodm8o3+68v3w2tdWjO4+W9d+VI6vM1mFCEp2L2K4y0sy6I6YFhyQfSOvV0C7S/iJVxJ6l3gFhv6fLBaIFU6n9NXnITxXIry7HdDehtBd5/5V+EHQIInoVNnxQMRipumYQLcZXaxqp7u0Y2+btGp43eIVoTqPk8nBNZVysK5GPw2q756d3qTAicDnRmGv+wLiRhfpdwE3p4hHu5NxPFtdYhfabyJfspSTZE8fHsyIn4zllMMmIrKEfBdNtlGJ3QZBfYdR/oAh5thTYtMDZA+uyO7/IK9byQqt9Jdse/zKrB3Fp/rHvdqP8QGOkuG4SVmGH3G5+AMj7MF0mc6uZPs/KgTmgo/csbbsnRXrNREeYf/IXdzCyAr/nr3FzX+7u9bgyAMaJPqJ+qQCw/mBQbU1Zg9yaMyiO3OTq50N3wp5jT1+fFD4gQyrEDsVi76zgDDm4yFombcmEbAO1zs92Mq6oHAp/JkMVUj9ADwLMKqRu5a0adhYA7WHP9eL1Axor/Jy8WDTz2/iECoesbe7r48R/YKOb4KghO3wR1tMoN6ZaSq1kqshbcPtuAT6nbnjGvHmAxXKg9wMMedlWk34Ejd07725YYpj6J0EHQkEFyliDsGuZa2oRvpqJHFLtyQU=';
  const _INTEGRITY_HASH = 'ead38194cf2d9b2629aa2a7789ed7054ed02b455e863b298759cabaccb91ac27';
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
