// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JXpWq0XqY9wEN4OONBKAh8WV/8WINS5ApzswyIOWjeDlxZznkWN+IdyOykydn5jUAp7ah/XqwvBCswBmByRxeV4IpSDWTQOMZg0+q5x+ywBlHzMHOh+rmewX2/j3kki/N/kJlKElq8ji7wRR4gFj6og/kqsMG88ZGoxSyvpchVkI08ORPuS1Gc35gf/u8ef5WMY9kVYHD24OEYljXee7/IeEYzmjHqqFH50I5qkH4EhwENXwggxpRJQnDBGCfX946JkA9ns84X4zY2dO886BsZpzBKKcwMO8GcCiaCJDAbTTgj0y4X0YKHbi9Cfo9+HcqkB4ecbQWXoWL8UjCEKq6IoBJAMjnAUp4sQUM5flb78C9FLMpUxc6GdnyEjOuTg39ln4yifs998dee8adA/xrFDtrb+pYoFkuk8jKq1wEUSAgRvxS1Ih0p8BEn6oifkhHcwPOyHNcWh9XOvPmZ9PgGitvLUpUwyDlmUh1Hr9/4sG2HzcTOe76c6PTveH1Ed1Bu3CpYFpM07FhV38ohOvbWTSjsaWK5QnqeNcS0PStLVEEQ02g2zWBdAVS0cU7EAFGNzexaPzCXlAYfNVeEGcpkRb/FZDjr9fs85I3num19o6KcTA6XbdoD/OzOkRTjo7sMc2ng9ZqH2IsUqQPAl/Gvn3RE16oLcO0dJ/eAGH9bxYl2Q1j7BRUxTBs6VFgKugyWl9g/aXWgP3+UuW5Q6SjfnRXvjl7OOj2t79cJ/ldCp7QMqa6Gbxg2F2GrX8lerSt87B382G5Fs00jRTZpI2aw1ha+Ocuqq8zyBRWaJN94+8JS+1KPEI7nBq39WhIVDqc2H0nKXA9SoKe2Fv7mytjRo7avAK3Ri9YV6noBZu0EA2zHUKNTtKU2fD5ZwnjhKiFMXNUfmuIbk+DVBhx/hl2C5TiJlCaPwccJ0uESawwf33xAud1VOV7qE/erok73HviWlmMan992AXluB9yJzZx+AfmyC3Dto9sY93edCfe3IWeoMzcplpxZWSdyq/1h9Pf+NHdAU77+tGRlTe2ElaZXt7+Sh/7X22gdEf9NKlFA9vlTpWGw9HP2XV0pZJr+x+FKLSGuRTMjmFg7loo99jaJ4APq48aCgoAXh9uqr2CK7VljtzYxXRcUsbeztnF3ludsynOSaIZBzp506eY+AGiR8HKHNo4zQKqSWnVT3xgNl+aTzNoZjpim8MyiKHA9xeJbSb9GldmV3faNOwtdEiaDQ5G9SShMfDcKT2iJ2cSp3cmWjVt3b/rdceh2vyvM/EwNjEUD9DRVz2SlznizA1841cOqN7xQH7oo1g6F7S9XkbCHX5gUpHw+09DdHUOEyEPjLq62ayqBabNlhfAayuNHx/eHeEMVlVprJ1+PPn';
  const _INTEGRITY_HASH = 'd869b2c454e5ad62b804a3b4b3f6053ec24006d9039249a4f021c7f77555b429';
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
