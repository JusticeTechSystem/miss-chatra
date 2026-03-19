// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iL4LkvQSGWsiy8Ur1J8fzkfYULpJDTsbbuYQ8Pj2RYXQrwFb/xuKd6j2Zma85jW6l8DvJrY0EIueUnEfOd3Tp7K57+yUzGEsMdgqLV2IJaJYQ2kt7apJPz23Dg3XkEPCl8s26yulRIPBeSHjAlLf+GpasqxwIiEavBrHfXrSKlv0YIfjhXKFnAOgIa9x0hLHGsYIsGC+7nVjfiXK45nbrz6cCf6aQKONg5ppfqXvw5YFd/P4d1SVVRE2KaBLfG132l1uM/lc0PXdcIKjLHoL0lqJulgc85RYjDlGO3E4/MJdjW5XT3VQWUbY4pHsxUi0JIt2tEuWXaqwpm3fQ7TUATP705rIrFOEmAWfxU5QXoz9tjx2Ac/3W0Bd5sY0bCtwm9tpOQkg0X7CG/1CFFO1tL8824ednUmkiIdQ8Txo59rUEtvOFdJ28r/Tr5Gxy61C2SnSM3wFGpbZtoI2nYJ7dwdMTQRWXvHjT1WSg2F10xa/Mq5ivXjDn8deuiEoikkZnAAiJL7VcFqWWpcNZqVQdTMw7V73Z3I2qF+lGsilO6bhTV845XVqZgjSTB+AP3g0NTm2ht3p7pcqoiqyvRdVHHqK4MDj7I4aNheZDLejYVGZub0ocY4tbChf/uWvNnwOqfq55ZQgM4A6wLlBY/PN7Q/YeHM8+yyK+X7zk7mlit6eFuJHYc+ykwGE6bizgy1T9r1tqLFb/nHcZU9tgsEn7CRryrzvJspanZFWjt3gkHjuKx8cpKMfeMJa/Z3I56ZY/HaWBCW2DVwp4tYarjOZpEiRCOBkFNOHXcAZJ1sIN1ePxpoRGIMdJOAxVr6sLratZeMmagdGn9mkZvFCAEFSV7aAE5qBWblnGUi2xf4yM7SWy2ClfAo428uqPJxVPkeNOQ1IBE1e3x/302qLOvQQZY53bHKPT6C2WWh52urVR9ukLv0w4pirzljyHVLk3O4Q7zcN4fRqJaQB5Fph1yTWteWZmSe21ruQO/QHNTvEbZbkbAicAA97qn4aCtpM082y/UISclSES1AoQiMPmjK04WUbXi/xbk9tL68g8Guw92ljFb1cuHLblZaPMzksVcMIh9pYjbLVp5Q9EvvXaOanI/k14zG95/zoJVpIKQgTnN3B+D+v40rhWfGVOOpAe0fk7t/qYGBy2RazC7Fj/2RVktyBBAgAQGKCD6SAOcVKrZqx7V3a27Owag6GsLBopAMPfImRe1viLy2I6OHCvim5yaa6gkF+3NBjeXh0RUEOn8IjpdO0SWhj/RQkjfVjl7gOdKjyBVJ3AXBFkLgpUEzqf3uqQe8mlTocAm0SyEE0mOU01tQ1G1+CYGROHvX4DrDJg/vxvtFTxL7TDz7BEOERalt3XmZwUKXd10NTdiXwWES1NJAl15XgspomSOuvcWJM1sCP8lbUtbycDw8JNmFX6h+iFecUb9Q=';
  const _INTEGRITY_HASH = 'e7f947ea96178d2c03489e26152480a2007d9cf3defd21b6fcc8f8a34e283394';
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
