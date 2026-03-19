// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y4FAqzstjfCCyLzYgQnbgaevIm3M1BjIDafregzg58QlrvQWjDl/5vpHNu3nxE3Hu8rnXNDSv5gm4U0a+leRi8MABClHaKrZTspsY/iWWfms0ay8hk65s9btCwQQ7n4XmzZ9fAqiro25Va86CA4RqwDJbLHed3+HzOSY99HIB1Z1+LDSXO6W4xBCE14gQaUFslgFgFD9ZHLP2C9sP8AJcO5ytE+iaLTCdrSdSl74lbgY8FX/+8LWLfyAz4veNUQN5Oz3YhOeQfbdIC/dlHj6lXmlCQAUxMo0heDpdFohQg2UgOxV4RCtEkXc6ov1nFG45fo9Eo6Bssydwag2kAVrlg7yDgtqEo3w0uZuxv5r32xT+TmdRjiLY24R4VoWU1iHho+Qxl+aGG3q31XoBOHgMWCcEJyZ9A0FywPUmA9qYztla8Mnar0r1C8r2LXjGTCDfGBaPzUw2+KYDLUicu0di3eB4AAwK19JKkc6aq3EsbSUdAyCvdBw2wL9KK+AKrZ201nb5yNFL69be4iE/J0voJWGi7TCtJX0b+ki/S+qxSV9M+5UFrJt2qvwBkpGhuq3wXWU3z1F+xpBZrxwHjlPMJIZqKgHn9CKultzQGSWDllPu3OEJa/CsUinUvN3+NsdbxU1HeByKWzAEaY2zVB8aB3x54zl3cd/gvpyOJdKcrb71rdUDoG0z2VKhs3BkHj7WJNhMjM0iP58O1O7Xc2SKB4FdDhhaVdtxVSQUSeAcAXMF8B6eVMpZSmSlKfVGPOOeE1jq1+szI7aXEiHKVEEjA+zP5+ncUIfLmDJnFq7jwyAcU8cca6KTO6iWQTSSwJxn6FqARbT4i5VtVJpxeiLoFAMmbRhyeDuPrVV02O3SuBcMpuGrUf59fPNmJi90RRDiq+uCvAjEcBpmiRQdPsiwfigJa9/l6rBIXyq2IlPn9vDc+6PiFJOP/g2jZfI3agl1jZv3Ag+4Z5b4sRmiK/pNrnsioN66oDX3jVfVvdqkUTsoAfNoRA=';
  const _INTEGRITY_HASH = '1a975ae61c2da118734b7685dae4c8a0bca8532254d44bea115204aa8d1cd7be';
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
