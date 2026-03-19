// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SYHmIwsZPcXQguJLGbm+oYBUge/cEJuIelRK+8t6+n6BhnMYRkVMovlaCErOXMzkJiet34PcZbsyu+CDjrijTZKs2Eq3zSMpr4p4imSSX4qjDaf7juV3bHyamQ9edIKD4UgTDie0Uy4kBzBtX8/4GcYkULF/Xs5rlcXoxkHIP5kxPWeLRoH+m4PLPRAUOPvkEUNbVPnyA/PhXCl0JxkLIkSb/a9w1u6PheKp7b9PPF6ZbgVSAQ70JutV8TJmbS54wHz2Jglz7sPx3kKx8e0a4YAA+RhFWPuJtu8UqjIUs3wVoVnnv4Z6mZyzcWyOJUH42MPUng+k8RvhhFAnrq2zjFbYBcfCgVgLP/VXF75mQn11ajj4a+HyMeyE1vtQN7aBskSa+43s5AodlzXf8XuiwXSq1iBnsfI0pf7SNA46A2JWFvyixO1bxAvhMOgtf7aXjOttAX3cL2uqkSKgIJpmBnQE23zn1VIxcZ0AgAOLtwWz4FJ2xB24aAOuBFXKe6tn8oHPGaN9VLS5dX3c4m2wqz7xM4vcbe+5qIeIbZXI/hfT9QcIk/jJpd0hIDckOCEtxuTqhOY5sswL6UkuYEuML0/3zVXqnQnCiR8YTdsvLZJighsRiDFfQJBkcX0SfnAJ/+Eq6hbgDnwYb+BVWG8RRxt991HHqY6/6c1hQYh0HNpf+CFh76zdTso7u01XdxoizrJbgrYVoZCzkTCnKDOZGdRUVV19066Un6NDpBaGCHOcippZJjrUNTYUVYVYLvg/tMxyqKfDtvmCsRLu7UxYvKlG1of4pkIozOsWIozuXSVuLfN7OQ4PFbxFCpf10DoAoEBH2+Tq53pytf5vsuoI38E14UQsBFH2i+VxITu+mCNZIztGhKB5fwkQSl23bWe5+xbAL6zxxbWvEqUzAydRXrDsIBv3bwjjj6UBY5Q8Qn8uymPG7r/Qm8DBim7cUv3KhMuChyfBANIIf18j/I2otxJXuu3L92ClSXSwn/gPMpY5Z5Wa0lueXuKvidgLJsS3YNbSAxZscBhQsH+RSyjDXNbn7NKbXvnnuU1XONWBSNJTDjfxfPl9Dqm62fLBaQx/5ru3yifjkxAxbL43RjgYP1Eq5idBbE17KCHbIMqnqk4/oGsKjPJIvK27IW+281WH8TAzo9y+qSXM6euXf/07Z40/bYMr2fn1x13qPyE0DCRvfRkyWvnt+NVqM/UI7+MEACZzKgfVuI0X616xO5elzM437CTAfd+7oZ2p6cvsGWyO2tVd0yt84NZAVR3Wo8e2Xt0E28iIE+nypPIdnFEA36V6Z4J5lD8EA/B+U5VWsxI4drStut/FeplG2kxxDBDx5lvIKBtXhy3XJZ9hyag7LuYsdGnl2XmPAZINZ5NHMBAPsJe/c/YEOntGzZx47ltGAP6X9I7hLqOkT4DAq556YwQ370wsU3KjmIzXniv+zdOzbcRnUKe5Pr28nnw7h/MqrQkZIrEw6Xom+ReV7UE4ZVzLi+VvjPUywd12Y6P6Jy4gziwweyvusnm35yBHF6T1QpgdOmJ+lhoD98L1';
  const _INTEGRITY_HASH = 'a8d3ca155b56e9c1885446625c2f31834853bed17c50c8b06a27989bdc56be42';
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
