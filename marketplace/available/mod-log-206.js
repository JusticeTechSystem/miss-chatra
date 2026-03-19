// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7JRneY1xs8x1Ke1TYjOmYKCJlIK/9G6Hrf9qsxmj4Z7qqaPmUnYftmJjYtC1g9c5DVmC4wm87rLauB4teh60Sijdkxwaq7YXcROzRN2ZO6mjLgC7qyAIb17ZWAQ7yesw8/k327stN0U2Ujt+QdUrHuAMLD9X6+cSluzgGdjdV/GrnUELCywb+FS0evio6a0TxPhCu6H1G52em4tLLYtr2DVqYUkm7nBImOGjgWf/CzuTG0yPOaZm7LPH3SKsxGlNh9WvAVD+JFz9JUSC9tZt9s/sacaZ7xSaZPA8mijdEuQPy+vG+m82RoY+toSUbh93/5EoTA2QHB9qhz+8U3CW1AaWyRsDAOvvnhgV85lhesyUWDPcs+MpAOUnKCWMUnf8Ty6CNIKw6uPtXHb8fqGEhGXnl5WM77jOzz41o2v9AlRswr2yeLSHeZa4d6Zp/Z7eKD3gBjhn4Fkai8Wrs4Rd4+Nwo4Elp7BkpfArvo2+AiqcfgvyvLU18VVrks39v3u70LqOhEtVL8to/w9pK1s6ehyTlOZiARXDtESLQqPxKSibNIH3bKROuX4l3k7xDirX00+Nb8idTtNhFCUHBbk1zvEwrygD0TUBhWi3+gGo8s7qThzTBZDBwAe6WhlQTViQwE3RY08oAl8t6jAhLyRb/nPTFdbGvv9GjZVSxy9FCwjTz7vUL6w943twnEbhMQyzOUtvckekgDKyMKPhtKztdXZcrXXd5uAQpFtshdGj64oaKSvtpUyNqnrDWt2YSu9VIhI1VklP2n54ruc14HUl1dt50+T/NSpO4enxxgPoGWGQpHlZGDjhtcy7CFTFrmD0cWB1AzcIygEFvahmxpBSVytUHsIhUB1OPRxH2KqLJzd26yWS6SoPFdwUlNXK8bBXGPzZ8de6Uk3TusSloDbhpcEXRig2arre8w4Fle2Q4ktcSXnoeNtsweRh5ePxSrjOEeHu28KVg5gnErZ1i4JE0Y3uML3XbyFFEQYeS25pN/HzGZkronqIZKN8WhNsuegBB7oNDzk3P6m8XpVdtILWcqrTb1zdekZkCsdIfmCo4k2iAKZEYW6jyrulIYbPYaZfVQS5HFz6QCf1pSU20aNUKm6nrP5rnBTGAUjIswFjr7c6XsqOQpz3iNNgiz/lrOdKNJ8DuA9LG7nwV9Oas6Wu/qSj6jCzYZEje97lDqt8SXJ5Zg8DZdqR1tm1kDKmgNX5JJIzPh0KD3p+Gsu9IXWD/UvZumtd/3bTySIG4DgO79inxL+aP/Zxj3bF/jbEH94f1fRy3jTp/o09gIk3kUxwKxG7C8yTK2Z3b2xrLgvM0t9qli5dJwc7sOlzJj/5BYhBgS/vBY7reKO5fA==';
  const _INTEGRITY_HASH = 'ad8988e735bd24aac2b34bcdf0aa783743c7939c7e0f87aafa4c5404327819ad';
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
