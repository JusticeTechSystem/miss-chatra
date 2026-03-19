// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DkhV0uUt35osgVPR2MExmpebMgZvnvUWOMHGf0YzCLd6yzDq8k0MBqsn2prZb4icScdCOPTWJ+jWX37aGvgNOYf7Izlj9aiAm0fSyPwoYEbL80Ch0onS5qkYqIkSIJlcBnMok9TcVEGZKJbH+3n6nLWtov4RrDvBt1l6QTroDYjf0iNNPuvJ7YA8pavOJ5AUk69an5A+9VXWcVjuT3jkXNpQ3MqxnP+Q/uv/x851OUwFaOck37pr/ASx2Vl8bouLgSIfxab2ojS7i3b2rD2idLqWegGVXeZSjStSRezTh9786EiOUrZuqttTk0O2l5HagwweL0tO+ZtWFHuPquzzvc72gb5MnqLJsrI0lLNe6q6Y8VyXY1E4wcyo34vWpFX4ywdAFbK980eBSJcjPdra/58A70dvHUzwnWLuBZioWe10qIda/7TU+wpP2oLSNK2o6CRsXwdERS2iaGBO7R9MEnVRSxIe81xQyhoaxnZPL7dqnJq/HZV3MzKYLR9hvYsgmY+LvjpsUCEZFNOo9Dbpng1rggFaQeNCKHamQHJBY8OzwylgD085avKa9FXE3I4XCDm7mZyYYIYXRJcTnh7XxkDwXMnbuhcjbM+i+mydpEPWvxD20R4S2EtHbrfQaU73yF6+DlNTh7hU6PA1EYvPs/B9r1rGSUEUmI+P4ShwStLlrX6e4wV6qalkrznni5/af+qXsEOfngGi+J/VX/0n8QkSp/h6jOOvKiIHbBOh5tIj6CiuE1Mm9EhX60lgT7K5qUwpNHpbp9820SBj6ffUUFMIozKdQFXR/ROCPonkcmn5VsgarhBCUqMQ7V5s9s7uUkCbO3+oS4rPaIrzVxETvSgmjDcALKA7BdBDT3cBWq6oLMeYgmgR7HhheUD/pgqS2q2Cl0QlyL3FuEymwbLHol41ZoBf93qFVBjsCaH0PpJIgcZOXgyKHnfI5eo=';
  const _INTEGRITY_HASH = '697ed1152414219a62969c95eb0eddf979a93f236352eb6dd857c360e94c3a0d';
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
