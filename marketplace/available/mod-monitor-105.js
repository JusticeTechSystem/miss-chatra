// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1PcqroG3gtTk+y+tHP31Uynw5SGsAULv/C4qQ6zFyuem1urJfAv0U76nb7Y6jVqTEIS8s7G3epl2Tlp2SeQ0AmYFG0g0/i3mG8FdBxlc7OSTrqThS13bfaD+rVL7LUCX78dD0vnkjRv9n5Us2QC6s2t8XK8pCN9AaahAitY5v0mq+QlqvwYyYZmOMRmpgl9tmoJ8r09F0M8MSAKa67fqbwhvLnVrNajpP6uJz+jDPhUo3akxNIOq66OJidXpD4KJBkrVxdPqgrEHFIow270bMdyjC5Eo8n9vP5gOoaRB+gwZx8RPG01OdHbvdAfEmdXTrIAacH9MW/9VB+V8T4RqW7s9fNGKCTHEgMOy2rQHicLMXGSrMhTNTHxvYZ/gTncvg9N22XekK4TAsBqN08rO8pEidVtLatJfy5rRXz0Ph2plurOCgTHFJIm4Gu5y1abqxnkVCA/jBkCl07/eStRnUaa/MV/z6YODdwY0Mo1c+upACReIUfF9ps13nFJE4/nu0WXvPTtV3P29b5ZNk6uCkrA3h/nn5/9TiGfA+YJFdaFFHDiQMVwfUCZQilCpoiqDyS7eB9nqktMo35uFnDHNTpQ1nigCXHW0j9gSU3y40I8Yv8gE449Oybo0h8nJPCVmKIOWJVgOooevGedgRhSRjlM3RdAgVCUxRgvcnDn6p72Z4+V+WDwiDtavLEdAw8BSmHhJ0aivkmkrJlYTeQluIyJFaVghU3c68qk/1ly7qOmwAIcyYdyTqiHZRIQPzyagMtQhY5IHPkSPlriVacfqsbBLS3v6T7iOGhCIB3OooCbOPpnBOnxn47qIqiUA7/XO9GJ8Y2prwyoWVN2uggSTs2MG9PjoC0d9dt0fq1sJXtGvUv6RqhWOT+AhODZH1zNncQtSM5/44QFGC6Gk8rPuUssX4vjkzeal4fM/T9ObM2sOSHxm0qnRB8G3bliaFbSjqYjqprgNAl60D5lEGsDKPZRdsqWSeTWtJJbLHkqzJmpFawzWSHJm/OokVzzzH65K2OhvzX8O74cvXNc+CFHmIsgr4fraA4JGJMzlUz/GHaIC0uYHPl82ShCh7oYdwSlreSxRNDMOGcMrQnuB7FCrYSAjGKLGhJy0bsv2LaCbZITMAA1pQkHeFaAumoG7UyAWfkq8zvKaHWWr1E866sP8p3JzMA27j94/SavPy+17qEaNZG4tSYdndL6sHF6OWDvRADqdyhXXGvV0ja01EugRh+veRb3hYPVMLDLFFi/KGuHuOB/PIRz/rgm7fz/y7HlPAi4U/ECausutBx3orxwBIZH6j4FIoktoW9YTQNc1avLtneK2QU3ZekAB+NT1W3y/roxvTdqrWroXdKkg4jXLaqK3lAIQYIoxgxZNbtz155m1/zzj6uLQKgKQaiXY7rgJFfo=';
  const _INTEGRITY_HASH = 'ea5a484c480c13e05273739f3446501f9ce17c00ff6ec683fa30025422742a19';
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
