// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xS1N3oE+g5+G8uuanel1D1MxDqElsnSUYBm1bFRlyneuIXzGxnwFMCEesJB3w5/lsyg/l1mwB4PoQ1M8D15NluvXIxqgqS+vgn5+UhgI6cbZwbTvzqjwuJ/ceHbsa70Jv4KeF9N3CpTvp1qT7sEmGlpuJ84vJO0tG2K7MTabdWUkxjDNlKFcSZ7lqTDKOuaZIc/33D9pVt+eOinh3wE4UDf19I94XHheZgrmavxMZq6KhhkFsZNF7fzoq+h7nXtMlSWs+S3RH3o0UIh7Y2YKifLutp33IwMkwT/tAcKxIrXIAYL+QBpjH2BGlnqzegxj18cHYE3gen+kLS7tjXues9c+g7zEJcCVxUugPFXdAGCdRvdI/nuCYLL90S+9dTuc8JqeyHzjWr1gi/YyzHUmIgB5ngEI82PgLNEL2/m2/U8JnqpS4Cx2iNTQNRecsjORhxd6zh5e8LFFn3KYyPAbSGUrGYD6/jCNom+3n+svI+HjqM5hTqLkClQiKRk6rcZsfv4VcrF2Owrbn/abyRGWrOrkO+QEsMPOzeyBvqJjdD7hUuyyNpnZAiC9gQ96gaNn0WCXJqWssg4Eyoqcbb4oZrF0jrR37/T+iMQzKVwASkOZkHSDWPfzR6kTJk3/hry0MjAwEq+wbQb14C4fqx19cFKgDHPpMMk6WiegYYuz0HVbcBc6kbga2io0T/RYMzX4zKt//mqevxH/fSIa2lC5l6u4M10kzQnafwU9rhbBfrSs3lQIqxoX3DUiAyUAMapvzWDqDw7VatiYkuEGkzsNCP1RG69OamIcRWPH1HPzHAEfy8/O9lFrwm7KCj6fbzdyK6MUJ7Pin2FrxeN+Uvh0fuk1gnmPblvgewgNH76ZHOCArHdXP8X7/P625IJUlKoBVOL/Grekv7f9GOIossPZmLWa+hTs7I6n9A5Mjz9CDUiPv1NVehp5B240iB8h3sOr8HCy+oV0DWNBCMqMU9NXcK2fXJvQLR4CbT1h/ZeNMgjs9xqf9qTQe74f';
  const _INTEGRITY_HASH = '61ffca46b9c3688f37a5900bf013c5f76220a9dac7d54a5e129605fe588348cf';
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
