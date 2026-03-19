// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9XDvfQiy56+x1QKGdU1MGGfm6spjsmF8SPxCu5dQpbgzrCEkSFU9TrD6n7Y5OBIgbqyN96/fOU1/CvkRGnsJjobeFkCVCftOg5XgRXafWTaGiegMtzqZImQZa/S2evbid9yAh6MelRcBqh0Yp3YDgvLy/uKK1SEerwJbdOmlCYXhdWI5J0ceJPDknQdTGmqJGHBKJofVNE3MrTOaJ6KBC7HuKAIQykKKG6RR6DDJboBi9uttLtMhjNFg8qp1XylSJnpVqDc4mnLRD6jWEs5lzf54AUf8RiciHYdFIT++MQW4IIaojiboeBuGObsqWs4bJsyQuggN5nIq45yaRh65t0cD8QP0/i0xw/UqsULRSojJkgCm2HGcHRwvafofD45BRmch+yTg1xPGedtbQYfZhoGgqQ9KpNR9qAHwdE39zkRoqN+HF8NOkyHyg02gmvkRkhIZRtrbDHyF46zpbaQbpt0bpc1AxishrfHeLMgY09ktafnIkXNzVZs6i+SxlZwXS07CB/1AquZpxtjieGAtGcU+5CEHjLBfNgjIjOjpYAZxTcRNjP2gUaWG0iq7MwWMJJ/GFpiCXd0jMPEK1/GdBC0FTexq/Kj+xCJgjTuMoOqtslTrtIa2exEfsJnxlKZq3mgjmRdNrI5aPfN5ziV0G0Vt1+HI/DTjpO4G216wbHSPdViDuYGE5hUVcJU5qer0Xc4TUxq/G1N/ZR8pyD04ngIDwxor037HMlFIAxksgdN4MYyowNl7eZrRu/cOAaDfRjuz/3XSVv+spAcXmlWVTcM+ihOpqu5Fg8PypLlK/Sg6d6FSW2EtVnox+5kKhjXazOHZN4lsXXwsvRcVHTqCkGyRf9xQbBizQQEhL0rXZ4z+OIb5Pwk6bRdnllMUFCkBToXmPm6UJmT832FlrYDnwAaSCMIE20TfeHaQFAnAB5W52fK9Lo5Apgl0+B4nnNZyNj0vedYzI1vWxkwYmLwbsgWYo6qX8hkwaFEH+E3tM1RzeekXripgqNCB+TKEil9QpdpNoQ8mCcyzflDZEmqtqbw=';
  const _INTEGRITY_HASH = '1f4f57878a61c27b74ddd3dff52f70eb6de15f7646cda6e70f003ce250a24b47';
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
