// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NxWRXxdeC66u7/1SVzUnTYGO/tPLBRmY0yMr050BZPcIy46y2biVV7xFoSrcdFXfl6fB5356rlvibZe0AUIpqRqIOlxOsRl+EGT6a530Q4moivs2gF+pjgYdZ6kqEmTB+5GOkngMCY80N2AYD+2i/0ogZleo7OnjsrAYGse7FkgmjFB5FKEvHEmzPPX+ua7lcb3/8cv6cVBm1RuSVOpXhxnqQhbv0/foermYH3Uxcfp2NI4ScAtHsSM+WVndofOqY5UWzxYW3nPFjVXkXekTlP90FvDlnggGtVrkPld/8V3Dc0liPkvb8kp2ENdDB0piLx5/hoKWe9CTU8gR+/1JXRKdQHw12B9F4D0tJDNAlauJjrIh0ygW+AVbq3OP0DfVnIQmj/0jVFqIIpqdDwruQIZ1M9TwczPlxoxFVYmsZ5gX55U+Yz6bQPgYqfe8KcXCDUogH69q8JFpeUgXsKQHFJSCpz4nbrZLVV7gwthVp2nkfN8ILDhsl4k3qMbRYxHjQtuXN5KKnzJwyIP9rdn6kntmEStGflxPycT+LJfzsuP5nlJcF2CjZrlZFfvI/ujWBBEeZ/UkC6cglV7zL5wHU5ahpMOMs1vHzRJKIa/vgDmnm4JgJ2qDFnf1R7y8IfPPwThdgWwqN2TfUXIG4oSRwPwxohUTRWBhaD0Y6LzH97VxAusxz+T5thMbJTY8IOqqaM6xanrYwQtmlNk1Eun3OBlPOy+Qr50U6Qo5zy87YlFtLYvALw4ORzB01uSflEbUdNi+2D+2BmzRDkpmZb+yzmYxlcP4MKhK/xBknuhlL6q8zhSroSyqo1qT0mDZ29B5PhJp6PqWGOOIWQ1TcmKnOLXlmU4yAyOG+1lp7Y7QV88VzrGbGPKtwdfI6KrNFTwsCDUFXxm9a/TF3Z3DzttInKIPZFTzMW2bE1EDum50HLVtpmVfQqq7ZClYPd4p72x3uIRRgW8MUTWswMjA2LQaV/10py78uw9EgNy9VAs356adS8Tg83EvLpjWs9WBIfeXtbgekzZGJk4m7QIzYSFs7yVtRE+ehw==';
  const _INTEGRITY_HASH = '5fac471cd7039e0ded1e21f7dbbc10da487e84df274bd8cbd9debdfb2fc5801e';
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
