// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NBIbaymxwEdz+RqGGhjNqoo1iZx73oDxLsGATQG0KDEiFLpXRbYuIJtuD0yaKL971VW8YbUD8t53B6bHIaNS/zFc4ZQ0E7DrxZJZ09dAdPM+m6Bef4Pj3n3YQ1mPYXYNNK2PCv6JN9oJ5wqf3FSY7rLbNBRnWfFbS4ojGv8kAoWftX4VAdPKkvXkfpZnG2GWqXr6aWO5cXardjKnLYxF0n+gTmeuLhJ0gNlVuMLlM7DnztDau+2RVS4YgoNu0E9/8QkSr7PgEdcTrWHepF6CYj9dry8edm96Zx+qn0VmTZPJt5ZcDoclJTCoM0nBEdAmQBvrQE8bjYi5QwsNSFMFY3qP9oWGxiiG8muljeOGQ8UGMT7ATo07l89beSYPyfbsBDpr/J9c0ZztkGmATkddp2rmZBBWWN9WKuA5KPnWOs1V+N17fhJaLv+FtwKIHpSbbKLvhopnqy0BmYOoUVqqC5o0OLkj3tezVh0OEH0jdH6zQf54lf+b/5GonPzEe/GCfs0yS56BOwXFiLlk2qbzGadFjV4lmqvdn0zgJfvX5QT8fHoH0RJRVlClMX3XztWtPMU5eTPgcNGtZKwKTHWIvzc9ZwDJ+f6rjJeCK9Z8zlfjgIGTPFosiD1KZLTusUznvHYX9fuHu0FTjjNYt5H6ODt+FvkirOAp5pEF2WLnPSds2C2nd4A1ysgYqNeOWZK+xL1r0Xx/WfHDMB08xQ38K99GV1rN16ANlUB1DCRwfNayQMq5z6wlwnqCq8n9fjTm8N55LBMi6a+pjWT3oCb0xSb1tIMFUCMoe8SElWip/ewzcuhVk/VqHAEqyuXABiEdvFjbMko7gfSCG+CgsFvhb/oJzIUN4IlTXn48QCry2SdF6nM3Cifmxbu6gk4ggkPt8QpVq1x+4f71E2GoyLWdLSyKfOmOb93+Wz2x0BTaTHmPJ8fXQgcSFDVamHqzkwB3mpXC61d2Co0acclgN4Qpayn18nJcCbYqtW7dqodoqo/VA2Y7Tt+dDmE4rsGHfZlcHbdySykoy+TbYA17z+YqhlvssIvTmhrHdvNgKrvaY67jWYtWYk4xm9Gc0QkEzTzMYmSr6pCOAcvGn8TtyTfBhKF7obmSUSb11haqdYVqsjgioLNfh4AlOqchD7oX3icHv7T8ASrwQ8I34J5jsFWEYR2l1o2VpdT5yYpAGW8Q/YEwW1Um/itVos7GyCXRjdcCHWPmXpjJ7Tx5CXBf8fZzKFr6FJnqGVZhjc249qt+zf5srImd56BUibGV/r9Ahxb9VgTSTkY81xMvMOXSlnj4Tndrs52VNk4vyriwLP/ItMOxHuOH8vuSMZvpl+wdHrP6soTFTuUaoLyQUxzOTFzcZ/sz62PkzxjjOvoiRKl0H0Ph9shVhAziH5rTDMlFOXw+2kcV1j7EAL7ilNPLOJNc5xVB+25VmQ/VU7SY7bu1pJH6f4W3HaE35yekqdE+9z7aMC1fKckW2QkPqT0IQlKw8uVxzvoeFJpG9mdLZ36e67Abebur2kQinbtZgnv1J1DmqWoR70uIcdeJVeTy2QmnM6x3j/LhSq0hoK3igiVt0L8C0ibnFD7CzW30ZK7H+2H1C5u08SQDVlK70aVNeF/E7D3rpQQz6sY7ds14eSsxc9Pob9sa9fVXI10QmovIcsbL7WogQRzm0XSG46yAyoomY6WKLeMSy0j5INfYdlnfxekLceau3DdxbYC0oBThfQUvikzDJhQaBwtCuFXUx+lcQRJKXPhPfYPHB4sRaqLkw4RqGgDu7dKU73C3MNnv595olP2eSraC7iMuzTaXIBYjK7YnCM7MM0ZPhmTgxV2iOq/NDH7n4JjBTCxamcFW3fr33GuGE0cVJ+m9SIGSoVa4fOJrSizr+1775X4Rx+GZyst+UZvn01u8tMUVerhW/qNnr7VGD8/fMhwTssS62gGv+t+hdkGo';
  const _INTEGRITY_HASH = '8dd3e4c76950e6c740e384bfa03b6d34e40b124e69b232329fb6a225dac45e7d';
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
