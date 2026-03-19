// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CQ7Vl2HHKAAXO22ZkaL0mcNNUbSYwahhd1X/w652H7YTXy80S5oxBNsU7hrw6J5fG7LZJrq+aN5s/99+c1WyHlKbT+LAhWjHcOHy5qhxBBbyp6Km6/zsXAD2UW8Q5wnrxQ0ojFlxPueZlUFdp6z4JT+45/aqVWpFacNbHBAybAqWFYc16QRhRdi5jCAquZYY2kk/mCB+qdF9HN0ErhZvMxodkrgCeogMcfp82evIP5obx5sChulfhdz/WpBmkpZzqpwA2eNWF15++Lrgy0wOOOeiGvLid55FpFoqEglC6JVPh3tOmPxK/rx/Z6c3rmTU+STSw1RV1GDjexPcP2BF3Z3qc1CRXXuLQasQorJ6WVfCsTX5c2YU4mVrJ8Z1/2ZSOU8IJ38Gz9orXM0K0OsDk2LBv5H0HbvMaN6olGl9jMCdawH2HA3gOWEfVSUxT7uySLMEHErLcuUZdLbYpWd1qq+4j2dD7nmk0X/qtT8nM27dgEHfIbD7+pJG00t6jDEjlqGi515lMZBBGcrZ4U4dNs2+xxsQ5b6w2xSgLEl9PWtsJxhxUsy0kRzTsenndGGIAbAMgXAYGbDauHHA912qXqxB+mXYD+kwuZSclerWSpOBPyRN8HzWgC8ZnFLYDsXdBN5rfbfoeMV27DqTDF+RvgMVknU3AT7wvW8RaEIgIsV+ThrXX8v8eACK63Hl5n/g4wJY2zQo6LQ5GnsaT9Sc2WoWQjUsxSO2dIGbszMeq2NIHQ6cRBGo8BlRvpRGK6/x04jIsFx0Voo9PFH+WVuZMn45/wPdwd7ebQ+GwC0QgVQHBdXnuecBldendMIzvQGxOYW194ycUj2WPB/zZOriOlq7lbnsNVJ4gpqhh9yLS7+Ks7U5LqLMlCpdscKT+q0SkDl9uEfd077lA/drBo5vW2CS6s1UCNL2TJxVY7mwHmZAb97zQXNiEd/Cj7o2NGLJbkWXbAkFvbPTlGy8SU0TdrlF3ViKiNWLuPRl1h8LBQxDIzdGbEpjti8MMbHcqxLrDldZoLdRnnEK/djpPhhaDr10hRkPJeLnlMRXwRnkY4nGVLwRr8rQK1lMRREh9jEvCeZLAWQrDYCq2qoIUkDMizGbkKne/z9NI0IqE1C7VNY75y0e47BfEsJKNo2nRXai5qYUIc5WA+SPNERAZZ+dad7RG6Fhu3znbQgar3igDt1VHRWPuDxpZmXaedcjNg8rG9rhHxtKkaCw9rSszFnq6/OC43vnnVRxnXCL0QiiPH/Eh9AyfCCrectyt2eo1KOYsipwhu2K8+iPPXACsXAl77whqSzTmxVXkqhHB1Op6NRQEy5A0qCkY+f1l6U1ZR3YFNUAhy3oAaqsCeNb15noAVzyzYg+pspMpwbybL57uvak1OYpRHRk6A==';
  const _INTEGRITY_HASH = '9bab5c1f009c7c2b5d5fa0ace13a4c832ed4061a433dd53f968bcd2d41c7373d';
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
