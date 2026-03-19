// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kCTz2HH7d5rFR3lolb++wTne2nDG0+BE3jSeY8e+HfgZFWY2yk6OW4e4aWuJ/hkJ/1YnPZY852ajL7uW4qo0ywq7tgfz6KGuBNgNlOMshAQ9LssYnBQ61NNVqUb0pMwvQBbdS3gat5s+cxqDqrD7nDG4h4azYA1FDMV8s6KyMbmRfl25v5XUcbYRQ1nPcAI1rrKLqmwmv0q29zBdKVan5j7qV74gG+tean88LsmSnQJnixWPsUO0FMq+FhAYb8yK6jpVpAhb4FZNQTzRiVjmn8PPaKKaky+XZ1UljNHd2Z5Qn1rjvERsDSDgnY0zz1W5Fv5fha90BsQa/xLeEd4H35D81T4vBnNr7/UHpjQvkwanR/UhpgF3DcV9JFydueI0NYN65o2YGqcioItHbDSw/gsI5EcKzcpbvLbN4eZfco8/6EX04aF5CCXRuW43urqIdN4RdBMBDBqXLTcB1+ghDJzoKe2fGlPvkeWGOnlR9bGTqfkd6tqFkqnqOECtUenqnRAxFDd6rI22y8y9PCR37nF7X6oV5Uk1a4eB+LTGjvkwB6xc4HxlMCzRnGyMxOYQFrKrnQ73W6ThC2KX93Fl6I7bOaqZFGMHb0bn/Vlb4W7veO9gSUvqncxvD/Mro71SxlcnFa2oUiI5ppnbNXyHxQ0Fg2PR/0TWiz2/TS/VD8WbblYbp/Ndi3dqQQJOoWVBuMAPbYz0Z5EM7aj1wqKBIzaQsZxhsNw0iI6sQhZCvL53pfXDFqL0UMCUScKORsEiAcHBPSzLHW9MS3V8ds2kccz9zH5YWhAhG3GuX5YREysDq7RKwSSVY+yjLM030HyKLBzTwlUz6IHFjPDXZnFg9dkcmDQ3v0U1cBKel5lqUE8nun/HydZy44gIR7dpzl3CdkEUHQ7aD/r8raMn2+B08L/VYwHXlRWr3Xr7EePbQTphON9ZI90HONpKUnK5JzGfL7WL4UzTjULpvaknUutCWF1aHrp/o73678Wh5wtNvasfpal1fnGZSX5HlX3EMO4Z3YSf9p4TckFFhgJxw4JdI/GPV+I2MfxRTmAL4zGwZsa15yBbTPzkuGUnixdLfxu2gFsfnrnGe+KWGvqZHWg41VH0H9J6HjhkA7ISnvPfeug45YrMkvmHKMN8GK1tdPI1xpq4opjYLSCFw/wRUuFRsLTI3PwLClehNOShSvZFbPh3MGJ+1hkaB9XgLJorYK7zpxm17+VG+AO2w/Y5w6n4yVxWKtDDCGziMNNS2+rN0nJH/vX8gMmIj0I2y4y5layJiURNmndVGE3wmlfSAhDyexiZ43AFWyiM4kVhEPKrF4xhPQfyG1xUQrHrWTxxQ1XKjnbksBEt5PaxSQ0RfedQKG8PfuAm2ulEWRSKdNJSJHH5yCCaIO8DennNUaCVqsIm910/SnwetN6f99v5RVo2MI61r1PnFGt8OStVX5D+P31l5AhqF//rKr2yMEseA0fkFKlzpZA9gqpf1l8NHOyScEoniYH9bv29zjNWgL+6Uy9wrUKTMJJa2VmYeJK4aJzz11USf6uiqp6/nyCkyz+VqJNdoCTZRp6olCZGbtsPFXAm3/qc23ydweT8eLIl1DkFzS2M4Fi0ghVaBhUVqbzRtEv3NqxC8qUagL+hE5KgeokS3a1+LcZuIO7+Nhvote9Hqnif6sFIlhiAsmz0gXNGZKFQwpQpg4/dCcYt+xONLSqsqVVPrOrTwV/gtO3nq904uPYAy/sm4PzJG/y/vzSJ8E0te6PW0SzAHG5PNaR1ErmVa9YOIhKer7qGKlbqUUKA5RGW1h3UUIc9C6znp5c6gd2ZGoQ8dmd0kXQybUHEog==';
  const _INTEGRITY_HASH = '19743699b3f771285ccb6b021ecb779f2019be231224e1f247b1870d96566631';
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
