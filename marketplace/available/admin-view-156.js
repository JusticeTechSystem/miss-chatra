// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XwQS4PKs3ohT5k6Ia+eqsZNLAuoUnwX9dadJ8iW9JJ0t8cqMzgE6KCMDhPhTPbQ0GtWBNlaZxih376v6ddQ8tbx+H2anIpahjxJRjsYwF9HDEaomiOv7I21fA1EemnDFFI/FytZ+gGpARjZ2Jvew2Ec5BzRYJ1yykpwvL86tFmtMTTV6N4UyXRqpzaWoFfd2+Rw74wWCDuApTHcriio8RNut6GeXON5dLtxtjyGWD2bZqz7sYBJmZAsHR742TCOUonVWIlF+6cw7Sxov8PF/XPefSeUywHj2XTYBEuPYYPxJ49YHCbZWyTs5kHj2FYvAfV1Nu+g5qsNAN/g3NpMRsOO+hxuFMzWrVjxZAFbD0VhxORbh4z4t4lM/ucgxWYtR626S6H1fOYtT3rCIawzP7IuWLh7Cy7uNqUwPorndmBwRXh0dh2p3wxi55cgbIq/r21mQlC9qZB1Iyp5uelq5M/EZsjOwbpY0Ah7hU/IplBDawMyzrQoQG8kboRQup21zz9uTIWseuvUfOQ7HOW9LgS/5WovpZniNo1OoqgJPR9vI9hIG0+Fmar9ZpPHFRZDX73KZ5pkJ2j7vlxrR++DB0V+8+MN5jqs5Wtjs2Dor0NtLlSMtPOo0b3hZlfL32Yg1Coee7DR5RBulwNT+O4AfjNGMgdVIUm7USuIOjjvUDiUkExFEUEkc1CG62yk2cVl+PtPot4Q4YY/73wrAGb8JcSmPGj0sWjg1c9tUCXQQGW+FPI6Hg08Fy7g7d75HV2hdzRQHFie0wqbPipDnIA++S8m2p/u9UCm/mbkJG2qGZ7jQUzk2NtkyPar36C7zGiubJot2Y3EZrXWbigjQdLN2xSx6aj1LucLifnJOO4JqCegYKug3aqE0rrTIl6rH8K7JFLVkjAQj0Ml2MGlxZydoW4XZ6Cqs+106k0+H+Le2uQvsoLnEWWWoJXufoDlSAOlMKcwDZSeNooxe8TU6ZKG8/VXi1SiWRAPJCdHv+n6I2M11t04=';
  const _INTEGRITY_HASH = '186f8518c3710a2ea9f3e9dbe5380872257c7a820b31dae2ce1434bf1c5c116b';
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
