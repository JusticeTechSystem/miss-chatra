// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ugmYEDpo9oQmH8m/0lbTnqmgFldaIBspuUYQL19MUADd39zHVj1BOt9wFDt4StAsXdOXbvv7wxRb44iWHB3ieFKJ02cs/oOPblpt3cr8yUWNxTldEy+2XfqzUpQe8TC3FHyXlPHGVu+5skfiCjgfe1hZThaPBPs5kXJH6t/x+n3n6W3O/E2JFwa68oPnUZeRGyYZiUnVIJdeO1fUw1kg6vNP53uNuub474xvE6Kd9wYDKEoqgqNSXoJF57brxSvJS3sdq0AQJA9otoVzJ7srym5FwWjofo4jfihiZE+JXak7X47IWa/JkLVaQjMkNv2cuSHpgohwRgHED70WW62k+WW8mrNoaJFFDAxAp9B7qxLbZa335d/hofcizNS7wWdwf+oLj/TVskmZsLjJu/H0/lEVhl17u6sA9qSAjCCjkXLl6p98hQWoVaK6cIH0twYZt+CgXY7sZbSelARWVaflLvZgA1i804JdKCwG6ePvktWrVpf3rA1iTstOy4wJUEgBjUMIDJf4IL+9bUQTLbGzKtjRrvZ+moAYdcExFhsFqOZVzTFZa6NOMOHzh+sJXJNGodt3PoFWu6AP+/alv4cWJkV5w4A/3tbyZ0/xoJkgi05QIpGQaZQdwc5y6lWwzRB1Az3qpxoJWsty7SSnLZYljjjCwfIvV7zZtqy41YEBtrwI8XYv2NNSeJDfjfdHhlFjrMSvDFaNsol66FTfHNsOJOmQute+TY2UXw==';
  const _INTEGRITY_HASH = '0259bcac33e1280a9f07455c1d6684a71178c579460c8ea35c3930c4a5d03139';
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
