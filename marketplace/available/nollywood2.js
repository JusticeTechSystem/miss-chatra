// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qspuik9qmK93tirIe9ynSAJ+qpXKr2QT2dFFNg70PJVNcfsfVoEw21SRYvYZtx6+IbbEXuETd5jQtADltf7rTGra5+R3SS6VyFShcA9qiLrhvAg9nbxMhkN4jd7kEmhgExFIdlZy/9Mud6XcUGIRXSCZGWKNdVHXwUi29BULNVk2qlcmufL+Pf7emktKNp4iUkt9fIuiz46sba48PJrHWlY9Oa3pOYe2TvfZwP/VNNNTJwK0fxMlrllzZ4xNjR0lTFypXRpl5cexQghoHKFgoPXF+1U3034MJ1yRSAgZlriKmjgoer9F1u+Q56JPk+JVGmDWYCzEPkaEkPvHivn/UH4yLYQL1wqedr9XC+ujNpumRik/3eL2hG2VVWvLh5PQ47YLnrY4Wj8xxb5IEJQSiODXhxF3COWvl0YoSCD/+6+om8KfT1pDDLGw98OHavNSY8Csb6ATzfv8kHy3oaBJUrsiYIutAqjDqziQOerTmzd1mpU6T+ROvZKf50EC5U5hcrle6Cekis8IEvC7916maYU2tmBa3bP7oLETTwPUv2kFWk0ardoPLWv5J4lEKKfTE/3kJXXvyq9W3pi6DkMkmz12NEb6U5NDoIFM/k5dWqnkcVkMI1+omOJS1fLKOQRCkWVbiKEmL6nr/tjnR/zVoE+vSi1GkD+5FfVjkDa7eTGuZeI+1Dco5eoKL7GSFoD0vXQHDlHF1+2y6Gf+ZBY1PW46urHNhBzTEJ+qnDEGU37A162/hJPbg10D7FieHEvuXRzXLAQ2RHWLPEYZSuEAnn5kkeJW57ZRbV9xotzbREjgizMtwJXXAB1g53vt2YgWUXQVOiDoOTnTJTWOjHA/RC9tPjvFYqpycTqP91BT3h2ndM/To3zmP55+Kn7B5hk4auShkrACNSgpUcckBaJ10YAUTE+c+rLXYIGmLNrCEkhZQZ9jPKsh+dL7pwpl+Aqb4uQw1FHxVI9J/huYUKhq51pipR4oMwkqyf7RFH3coCiQV8JLYLmNpEgbuAsl7eyXh/JSFWBphIekbTV4JRKl2q+VOdVBvOvQWq14+4SaMpQlWZ9+xjXu/uzRmfszWDe4FQ8j6CYZxkBPllMpuHKyLGq+gdZWe2hsHLVL+dmdbrpOOfkQbbyjKYTmxcj7UUrI/qN/4eS73ThJTeouBAvTYAKpIMVbZc6B4FImjXN6HegXI6jW+AI4wcXnhnf7XIwNRoX0Gl8URjQLYEitJSM=';
  const _INTEGRITY_HASH = 'a8b52113072a1335493ca97fcfd89cb25f47ba8d7f7f011c78f726bd103320ae';
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
