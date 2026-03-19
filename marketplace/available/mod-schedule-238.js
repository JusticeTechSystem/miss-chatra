// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DeF/XRqomXpuXzMgAjpF3l/aUjkijNljYnOpFnMolp0WQeOckw25sKWBPuVXK09tcJCxw8HcyYqNbb+xCALtqEmuYj2ac30P9kbV9tzB45INsHSdb95nq3QABJDdsFt/+xGN+OhoekCc6sKkqipMsE1c98pNvP3XnaIFt/Vp5lCtbPW5OQa8WvX2WJljw4v6yLFaXETnWCiWg/sa522FJ58t0nOHEezMnOLZq1DP/siqdQSDmMFMS+aKE3lZBX8ek888ihT9RSihd+dxUv67AjgqgUQUj5Rj3l4m8NJjwogiFiDLERq8u9KZ6KFYdwt2VU2mYSl/NbRh5NY8aAYnjPmALc6CbSHXx2N7+LiEU8BbK7nJ4IA6BdiUcjBoyO7pKUUxWHiBaf1iQJ8xGWrwrnEj0ewQhTHbe4cURh+zsogrgv8R+cuFH2lg2WNbAe0eHLTimMz9yd95OsD22mncHvc4DCCBnEuSTCpLyaEAl8u9N+vqKdyFOZ3mwlpUvpwmsocolw+8XXovC9oDF+qU0v8ACmSUi/Z1Ezs25XHq3Sil6S5ZtFFv+utu24aombIx4JGeFdd610fQxZ4+cyiCBzcpbm9QHKCpOfTP32u+r4CPIksoVs3WqKKXnHCGmux7ZvgSWbNOuY8HzQmCZeEVvs7+gwI15YRxnSNQB8qKors7wjK4T2wfLVUsnXuE9wTnbWmtmRS78xHlwQbkzUokuXZ3SLC2CA218e8DlK1ry6+zmbwLGJ5d7FEO8KQ7qSlkg1YgmfB3HPOu140WLob2GM6G0ELljs/lXzWMaAk5WtfImDE58G55SDe3DCw52JKDl8zhqEbnQT3xnRPu+Ls0bAJccUmezHuezTuUjCnl7sQKaJUvXr1it9ceQnE3dtNzwZxY/CpUZq9kr2pkbDQmNNoZx1XhXcR/ooqoJVfSV6a9e+sJ5/f7b4g7YIvOwJM1mOFog66DIhywn7Wj1vayhpV4DEXLrfws0XwA0BB71QEsaoINEcRmEw4MlfbC6+fgZ94zGKwjzGdBoq0c6nZW//l2Rd26pskjk02jpJGJofhUUFRyPQWpeA3BBkdu6D+J/vzMvGKwlC2hoHrOIPeg3S1BMg7EHuGoFk5OgoTL2FxNf+YwfD65PMuCRQKmUpwtv1v5P7fPTSIZJE1KdL6onk8s4K2OzStcv+htGbARmJEvRp/KkT5XUu/gjN3jKWx150jVloee3GGG8lAJUJiPoOU4Y3caFUoDoM1hMRQceRDW71hIx3ZQSBChW00JxBWxArlCvT7m2Hik24EtUdBIlAoiCslXjCSOCRCpDc/S6E+mBIMJM02+hQzlgyqmJSOr1tMNmZx6D8Re/xBYtVy7pjblveVEg2iA/6nhj4ozBK7Ps8A4vS/2caHdMyAaxXem5HjEHCYjiz+WI/Mw';
  const _INTEGRITY_HASH = 'e5a285db207b23a59acebaddf8bd6a9ac6df5de1f4a27ac5a9993ee92d6b9e12';
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
