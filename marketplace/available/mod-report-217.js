// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Yv/3rjOxNFKHjxKM+Whg2JR2+zsx9Bkf98IinxtLz1x9lOo43/3VPziu6ITZDNKQWRBG5qaL+A2Za6Z7+Ml6gzH/YFLagDGZy/Ab981JIobjGSQVCnEfUmr2g0ZZp+FRgAzc0fHzDN6tUKpo5RAGKf4Jjgrg4OrRQ8fljI/kX3yZdpLlCFTN9PsGKyopAKn1A0B9CCG+eXiAsvJQWnPt6Q02xn6e5zKi6ovoFj9zWroKSq5TmUTWXrk9XGcpf2pAUpIbqe6jo2SqRNZ+ekw8Q1OAwnEcfZCMTntRVcQgJ/JSohyzXBiFDNuR/kDD8NhiymVznfLdZlxeuoIo2dYnmvgGmknX6DquGTCnMSC8+ePD11VwCYICNAizCOsrxpG35gjadPYQ23M8Ex8rwwo9tNdq8wyNvHrx0GCUj4grxFAETQXc0oD2dW0aKW29gCJ11uJJ/YsgjmXD7otMd6bSml/nWmhl2FUKpubNdqq+K9/XswWxuoufokq+Pvp19lV4zVT9w7kdjyzVeKGOjshA3bPUEU7AQa0RY2b/TkojmOIkB6H26lqvT0oNBCneG531ZALNmpKbwn82Zl03gFD3FOdqans8dqc9mUA8dNDBZQ83WCme2hve6dwIB6JVhy6Akb7p8cZsHXLhYG0jzHHrPzlpDzBhvjTmiuWtMXAjqCFK5ChbwiKisMitTQSekSMCOwKz1BRQRzGl/yvyv2Fpc+ICCKUnkscJ6vyEfvt4t9XQ8JgfltSEdSE10I+zPwgZa4kwz5IZT/FomfE6t7LINl02f8zAfJXZWIhV2ImFqqUhJ9jg5eI6IZRlv5yHreCs/5Ol6r6bNOY8QTcTSpmT6cbjptVdjB5T7JHKj76oQ81UJnRfd7+MTjtB7Zz4NnOMuoVlh+BdIrGie4uWjaefkWMJdAL+aNSqBoqLhM+ZaMjTaw9ZYb+XH+eKv7MHS1m42usr8LStA6zt7hXGJP9mWLgPnauAG2OQowIAbLEgSafy6JArGkoxNQKu1rNygC2/PqZivuC7Gj7cKuhX+NtM1g5xTCvBtcFzrzCSWz6Uz7jcbcd7ZwZFXTxx5GndPOfMIr86RgkI3be15Iu1cFBDIXvs2JV3gPu9rDsqDcAGX9u+il9lWTk/KlaNDe/uJH0lyuvfXUJNTQ06bo0yk+0hFqJEtdwlFAZitnAjv2Qu73Lqb02uJg6vCiOQoFXI4orP4ueXgWC+TpMrNaGOMv7Pgzk6s7j6n5JPUVImDfvqypBeLE9ComxpIlC//N9K2bEfBEP+2uE/XRk5Cb0dSWwJdOW/fgcVh+Bcmn5x0Es2V8y7T5s0CFUO/EenGeYTxcazSAnKZoI3DkFIE/ZledSfbabHrg8TvTcksdpsrPuo5E7tUqa8MarH4A==';
  const _INTEGRITY_HASH = 'f310aee236f43d2b4d681d2a7ba121e0311671f88411cc8b03f07f0caa78e450';
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
