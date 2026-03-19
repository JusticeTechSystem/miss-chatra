// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'R9ZsIr4+tIto9zCk/3bNsuKthMXVVozzdmiRL2OXjGmKUsIvhvIEhERiGiGVlFLUFpjobK1IhdMKMFJ4YKZvQW9vCt8oNQR3JjUSXzxJOB6VF7/t7jJ0g4GZKSgcpxY+oCRWpF3IOEO9cJqZu4hrMYrHjZRy7r0dm3kSsjOIEG3piSL+LmiIEuz29KSMwTHhcUmuWeZwXQToowGG+yeULa3G/sEoSh/YXSUmqAi2oQFMoquvrMIsUgPhzHJ13BXBIYtgRt6y5H5ZpPU60+iPdbic2A1n15abdt+Wc6HoAzZAtjFD0q1R4+6KeLwUPNhArQKi2MtFyx3+WMTzfTxyfGCOCmmaBsOUXUp7pWRB340OeJ6UWrjtp6lvUh8a8vQ+YTZb9MOnzb5+i8fIu36QJgNZ8Vaz/iLvmLP19zkb+LbjwNxFAobbOI8WuI8K6k3ReECZWDh+tAMEfW3dA7MJPlxOdLH51YWjdVf+hjhP8AvtxrFfORUXupTTLaQWvxvwyPyBtTnD1UVI5wP4mq+X4OunE1L6KaqrYre+iWukSF8B0FlFR0Fn2TzCqQtnDpgvOGNoF7g5TilMgGJXtCmC/KvZK0Ag+3uhnkK81m+mq1m5RLxKBPjEzX5UZsKk7GA/A/Sqvhjt3E8sNpusPO3y18ViPRn14sgUoqfE1Qg7vEFzfGB50FkYSZYMJmEp6stAQIxVj12Vluy+yXaCoSI06u1pVNKQfGYHm8479cqhNie11bqE+vE=';
  const _INTEGRITY_HASH = '26739387e231e589579174e936dccea128debdec15be72f77ad5a5cb275dea84';
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
