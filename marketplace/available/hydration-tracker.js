// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EjJ7HUEjf0MjvUUtttIxGmIRQPiZybvAz7Fdi+BlgbLg9BebFNtXm9wHAJ4d/EKzh4Hr4PmZ31dNjrkacCSgnUjrv7KMey/HvVXrZfBy1vcVn3bUE0hd8iyeeBkweOkEeV0kugTjd9+SAwHD1+9V2nQrbJHXJ+xZS5gOhZQUBTirZ6T1QuPKZYmHrVZ40QrmNMkU83RvfnqqvVifFhweYElQWUC0+IXn/Zw6RPBPriSovOKrv7lg9fk9ghaPV/l3zD2TRLg6hihz/g37eEl783b6l3WpwZvEaWE10CEU1Jy6d8Jy/JC+Dzok1gPV6wjtQ08c9ChdLpyXRoqq+hxeurXo8eMUS1t0097Wz3vf3dpLsLbhTTPPsRnEpBGZnGrEPUtboLICpV8FdKaQcRQt/RaeKIBwtDhAUeIMr9uCcXxQW6KA+Cq/JOJu7SOkkuh5PBnyTBaKlFVUqmywpB8vJcs+2M1tDSJhmisRTN5g2nHscoM8EJe/BHmFc1M+37kWZtvam+T9HkZaq0D8D8uUHISjDaaFbnRE/oysPBwtv7I2ALe2n6A8qeKTUo/r1lpzN8QJTD/z1c7UlwK535ZRaxPcm8HUaO9/8PzgI8tKhmtJg9YsFfqqLtttvwxVVp87a6kLfNFEBY7gatY9naqRxFViYJlWFiK40J8BuwINqp0gRPs2fUniQv+6dIIVbWO6kmxkBguwQa2Sq3B3QonZJGbD3KZT4UQT7ep4KjcQph4uhXelpYUpkbnbjrnIQ7CRi9TZVJ4WunHYbCARTQ/nXWwVAKJVWfyNjxrYO7161qNrpWZNOMdin0fZfPDB34QK88iOZkX9GupTPLCbO0Gl9Mc0m8ahg4O4VkN+PvO80s5g4fr4ScKC3q2isXzTGBvxOE9yd2SkzrEwgIVfcF0FPaoiG9nUTVIcMovEnmu7Tz1rzDlSvI7XPDZyHS2/vegliRSnMQcdkVfFn3Qqpi03IqPtlC5G8y7MxiJ91CsFI02phwl3S8Z60JP0+Y1ykrN+XIax65trKXVmxs3sZgjxPfE2eIand+tFPMTEgSXmc5y4AgTUy78vk7wDSU/HtpNmZFcHm2x1t8QzbY3/QpGl0qIuURhumNV9w/NcpVEDHsKkj7N0ocimk2XqbDGmnglLFc+BmWSG4GmKnuWk68bAlqjbB3hpuDBgFzEVQ6lGCHI5H6vn/JfLzr97rJF5Zbe/KmFKYwytxiCqJNCWgppIKjT5TkCpxmckRgSs06T7SZ+NRCaAGgqaDie/vnpKBjv/71yE3Y4kytk/hG6gT7/dRCqf+PKsBCSNT4cmTAL0MQKCWB3iJ2LOkJyMTbKNqkRAUQA79YyFFel91MHLH2PgKTqK2nir7dXe7FD8yYWQW0E08OorV7ILZXsiSmH34o1hjKKX9CUDGJVMeVAjRWXQt3PzpX7Lsfi6NYBQAvJ6pCUauwaayzOmN5X2j+iq15TR51P6TFQECte5lzban5rUbvQ2nmOnfnJLQxiaSHMEERUc+g/UgKvU1WiacV49skVCwOfyBk+RxBoqCciLKcdHi0wW/OP9hnFmAn/dFHoPWX99IjiQiTQEXgVlt/xGxOQ2dkt1AiRZBk4Ij6nVS9AfpQYxCIvD4bwxLbvqXEnGprRFNcUlQhwzNTvcLC+bgbcIJEk1VNZclCZvAlFj1/XKD+XvLr0vaQYaWti6B93MaNWu4Rg=';
  const _INTEGRITY_HASH = '790c075b2dc06fcc0c8248c49191aac418656c522acd48cc2b5f5bc6efd2752a';
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
