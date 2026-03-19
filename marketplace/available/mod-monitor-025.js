// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mBH6sRSqG0g4hZ1Sf3KU267sZLwE8fKtalXTLmvSgiZQRRl4Vd0xu1bm0C/qf1y5YDbeHBYbc4R+Z+CVAN+E4kMWRO/EQln9A66oWiBR/T0FevL60kXEg9sxrhYAAlZifGsICxGQfzaXykEnkTQNXlM13TbGjETGxcp3wNFRKYEDmLfhSXakCLTmP/ORHolJJXM31OrW+g5rnpmJFUg0L7CkVgts7cpFNOdPIbfgwfYpFXx/53Pq224iF8q/5d6bYNDYZYqQuqB+EPKgs11PB4EIzM0i4bn3PMIQpWu8fwyIUFpeh7fP+zQmdXgYqZ01ir6tAS/Y48kFLa8yORVsUn4/rpimmG1e8iwW9KykMpH8yE3G0kHhRaou2l/WHS500iACLkhhlDD+0KlSTQJPGRkR0z+SEInWyKeJTMqnzdLumZd38HDtQiO0O1xT01I/CKzAzCOVon2KOkSCVLsALFQ59RzMAT2C2a/pWbw0rMq7s8/ozw3lK39mJ5f0JSLOrYsEylzNQk4s+7WFYS+ZYy4xdohpPeLvShdQaoihobMJyuaEWOsDpODgp2hIWuCiJT+HPXDSStS6uUlfAb8ZzYR9/q2FKOPRYTmOAt1AMAgWskeMhNN+pF0ZtwZ2zJs9GHeURsYms3nBjCh9LLqkQ5FJmBAuTLKAK2OwF2nU5wA22CdkJjMwu2S7Zs67ySB4Yn+mbeo2w6nBXAVw/gjQ/EhzFfIWg6AHM8YSP1+aSsX13xgU5xVbZmQRN+DbTfmsPY5TbNccUd3fxCx34NVIIavyJ60egkxpb9FUjKtgzUSWiuQ4mPmwvXRj5H6QQakR3OxRNyFkk1GBltwbqRzS9IRNHu0ZkDagxPbJWephFVeSS8SfVbdgsYKmt5FgrGDEHcpHEdq8sFYqOzfh+cx9LTm0D0YJSKeYlHDUtvrMwktonkWwzQIxb0mTre3sUU6kHVsbWZpJp0kqhn+gKhNa5WMUpmL0lKjr++XvkziQb6qyfnUSKtbSSiosek54QrvgEJ3TDqrul/0ZbzFY0ANByRIi7e/V+Hef57Zp/TVlvcR/kGAUiBEY1Pu1ZkXxn9vNZGV+6GEJ6m8XSvMQhVjD7qBuuyFq8udNBiMGKtFO7g+LZFQnw4THZBriixQAk9w+YSv2LbWVS3GQ4FWP1LjIbQ0ZNY2+1mFXyR7onXIhdmt9jW/7YDaVkP6cCSP+Npm0RRaNkMmqECnoUQdmjbiMs7ZRVv3ETMvmggE1E/2+gCJ1PYCnFAXAC7I5DQmcBgWIgTwpX2/SVYk3WscH0clxkf5lEejpUJi5f4LzZycL7j2TW+jLInv9j73jTFFvZC6Hnsxv9SEUSHEPHfxdR8RpALYwwFLTnFxB/WlepfGdCL3VMEAgXWXVpTfn/JF1';
  const _INTEGRITY_HASH = '30b08c184d935f374fbbed1c9a86b702b58cdfcc00062917b2d4a13be27582c3';
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
