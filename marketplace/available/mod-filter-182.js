// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zjUyNydpszup8Ci71oBXaUyMp/t0M2Ua870uM8uSdZwcr4iYQRq/pCV7EcKs/LtDn/D1B3k709HrrB6CNUVCJXo5g6+tHjfl795YwUV2K4IhhaATc0v5QbI5eg2mAJZje7qHXjBMvxwzNO1v8ydmKfKTEdMfTr6sjB7iu/RWy4V7U0+YOy4QzVHTkuW4Nh1CDmEm7SoXi93aHwKNQ4Yh8bjQ8I5ymwNekJja/Z0gj7x3kSk5n+uvb5ID+XlwOuXohFkl+sLs3XOknOJcCGuZYj4vAsDHfGQ7f9yhdl/7FoR5W8u2utjTngVqvZcSTv3VJYs3bD/7NtdOoqPee9ENx/iKxMB1VLeL/ezdzKndNHiVdWeTnqyKIW4TPUv6dz6jE5EMgmd6ohS8lhNpf9eIa1sJl3tY3pDBe7RBKpdSpLyn9IloKQrClY9WpmS5n9g3a19/FbOwsiMvKlPabllx4kpjbgOixDfOFZdBFIu7E2HlK6AGsmYgRiMMZa9Ai1cGsP0QEq6RXdjjqALKCbJaF+p+3YKjGJBGCHbfCctM+rnh4tXBhdibWfH/kj32RTR6CxOZuQBNVsDKZ2WSMeD92/dvMJ5zIZh8Z9uFw4/NlYbk78Lb4yiyUOTRj2Ler13ljCVK6QW4I7ngOVdZkFc4c4Ave/0V0qqy8zBkJobM5NrDPHWM6LC9WKcP401H6VMF+B4VvvDOM3Um+QsrFaeOjf4rSnfvGJp1rIaohzlFIo3O0Ch/Mpg596oaIB277eI+Fk4idVx1GW6YEylJdYceHP1yBUK4n4mH5Ao4MmwdHLgHvNCpDdkMnXlZVrv9OPhxPMqRe+9zKwUzeWq9OXP4HQGoHy27Qm78TwKMzhGjrDQacb2awWuOzlrttwJ8/1aXzIeVCoxAZbSQE1WCtMuBIUi8VIhdAj0cGjbrcqKX+8nTalEuTcZTuCOGY20L2m8WojTxV5axfLlhj45b/9g/HPb1Y3cJcitkwkuLDeEatHT2vM9cYqzIhz3kbJnepmwhh5wY+SPnVSJDTmwOi5v6hbjaJqI34EXLq6bHWth5iQQR/MfV1YFObDfGRsfnHzNaWH6fgF6MN+BHCQyPAGy3iumjh4QPNDKHNPt+fVZvi4uW22mGWYQMmrGFuckfEjdny8Lo/ixtrKm1KoP/R79sTWyWfeiHxaE5p5ctiWT50GbpW8kr23he71RK/Vo1ouSV4FeODa4D6238BKOH6bTBFqn7bcgzDiN8Gs1eRNDK4G6+1HFr1Q4VSMNGg/4qtCDSYFpbdJ8kUghMvOVPHUnlFPh54kpkGpYhluUxOJyspVEFXRS4pKFZN9ih6Enq+Xkvpkrghg+NdliwPwUSjUIIDqrFAkZFlBE2gPBQBWeW2be2GDiB1oIleA==';
  const _INTEGRITY_HASH = '83e6f719c1115db216844f1b8fc7576da242e4e36ab4dfe806bc7c91c9ee75df';
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
