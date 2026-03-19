// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aLUEq2WnYfE2T6sO5JpsZmtKW9BketVRqH4CnIp55l4C6FN1xJOSkjPy42EPu9TBtS9HcS9xPNztv8T+j7Fv/sR4hwo6aX5XOCEnt3KPuRPTT+caC5P6WLN5CSOo4MiB3879eq13a6hBqqSjnGZ52QGyEtXBmJXkWLYeG+wTXMKirs34yH/627usAZdIzEUNk3XhsI1M82+4GGdfnGbH98XEQI4gGlUhq9XyUI8TlllS2iz/jGfskQeHOYkJ6vKXrAggjXW9RaYdrmIOC8yJbh7c/TwRbZBk3k1wnLyZdZXMMHcMdzonC8zF6w4GDznBhOhufI70Qzx0R9z5g+FdpZKgVw+NI3TtLWCUe9qXZlJ45tWDahlNiNnTlyhM2l6Cmw6+IqM553EBrwu4rMSxTi2dq27S50y0JgnYRmuw2b9SR4c4vZDX838fmw6blI535GuT+6vmVIazR9TxDhhzfke1uKUzyQIkwT1LH1LcbMt5pi0DZFfpiyJcJg/IHXq+QDtjAIoD2Dg9cP3duKfREbkoNBXxdqbzNSnveQgPLS7K05JQv4UBaoeY+eA99mFQ3oJT4hp5NP5JwxmWnbMdVJtJS8HcmSefu+TaSm0x4wE4G8H13WHhZjUalpd6efXTbgf6eULSjye9B+NZWSubUITl/Gl1+o3JVtyIoQdvMkqCvTGe+NtWr71mE93YSC5ba37q5ccxBTJl+R39IXV0Tzzaa+AJw+jdUpnExEK31bVFAZkE0jJ/u6ZmysxYN+2uwtp4kFgZy3TcYeEpB+ZYFK993oqDF3BjLIz6AsG7r8EbC+5wmnMZUkfvdcCa8I92BmuyD8tReJFbALhRmeSdmamwPnd24kJIRohxIxQ1q7fvjoqjtpH/oD7PdGPg+tV4FtpaaU7eqjRf+hWHPM//esWJXDplmri9DOWzDgJEsnuc5vsGcI1auQ1skcvDUNHolyjzowZaiJBc51vNkd7pk+jstHy8+KWFOK8A6k1puJlfBe2Xvkc=';
  const _INTEGRITY_HASH = '0c58480fc50cda000f2c2ee5a91f2b653095ea561a55585df421dfaba131d659';
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
