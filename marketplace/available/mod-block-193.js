// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gWy1m7726T0c0dOK8E2wLmKR37Q1GDOY2THtEPe5dvA7gmlcgEkghZXayrB+AVoCqg0bZ8sXQLWx+oJp1BVMY/cXWkcRZ4kjncEGCBCiuGWX6QbWEvUaIUqChRRLqrtIX/6nxX6W4zagwX8rNynvZPnh5wtFcqd4gyCnW/e6Uzjm28g0Df0z/+CfPTDPJ0hC+sb/lszDh+mtLzMb82rEncju2i2NrYUMVGsgL4v9lQA4Hx0NqCYdYmX0Aj2NSOIgdGnkbhj3DEVCb6sUP/HKwqlGaMkAaBxB/JNALg2caRmnH9ESpWyIRPBck7hQW7sSbWdgyC6h/MinfQUJV2bPuLO/e/OSk3+P3JnU9hE4VxCCd2NT5otc5ou9uIPdKee/jybgO08e5hd1te/D4Oad3r1EdRAuw4+YjTbC9myWjILkOOH5EN+Enbs5N7FrWvZkml4SONK15bFmCABhkeD77xyhw40QYzLUjPlLHsjmXA9n/vkjFfcydZF1Ig5Ue/9VI0C6uH1z6UXZbozzTEu+zZUSN5RCr0xSdV1YwT+05VTQzqq6Yp2oyVHCw+DbShdJNhsr1pqGbgzDa+1gm+UQcP+TZnfHJMbGfOaEx8eKSjKadNMBtNRSotMnP5LCFjJYL8isRcDotZ4RBjaEfn8/twRlINTRz7kL0nc+OhGTolWmg83TnmPALoB2hlSs3WtYmC8qQRM7aZxYG+t61onie4PFgDF49xmP+bhrL6ZTO/ID3VQ7Z4/DPk+gtjS6ag2oUR3dDkV8YhIIQlYiBvVsQjDvqh1lmt1D+fP6n502aeGvwkHraSqaWsmPf5fPj7h869YegbiUXov30z3w6ttnJJxJH+QdyxRWh5tOHM+SC8grvQN9oAygEz6+XELlb6T4jtBThi/8pqo9Dsrzw7D3NSpIky+eNaHxCwtgb9jftFtUrEiaJOH6PL9GT6WQUfyvQvo1kAD0Ip9/xReyDFlQgDCaNNtnv7FngxKX/sJej+niDPJswUzPhMOSghgqVtp8vTNo88ajz4ouPE16jnH6yr2uClymqRw+t+gpNCscRQriGx3ocjYMtHzwOXfMbmfiUNyX1YV1qJnrquFVh945I4IcFDAzI0af/1FLHwqQ5hSvw6TtbJ/wAkvPSitXxuXkvRl3V1hSQzFopeCJAsprQQhodgU86AJhmkE4EVtTmeK1Pij1gv+gagrSAyVSnwLw7bD14UH9zYooHAkDFCon9jDfnr00yfnJOBsBqXbyps7r/dNTZmM9xc40NEC6EeRrdYmh/Z+fjouE8sg73Y5yr/83WAkgJ7BQ3/kcWqk4v/aVXlpFMDx46gGiFVsydWBFsFMkVbOomv2vZCTRtOiCRNULBlCXx1ZB3Js6KN6M';
  const _INTEGRITY_HASH = '961a65431778a3605e6316bc3335916df44c4e01d95ee64767e2932fe9c8f805';
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
