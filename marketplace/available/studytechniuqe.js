// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AY6K7HQl/aFBi3Nc0BbiZWM+SriqSAmDe+PBuwnmNiEkAD+p433YSAtfyX7KD8PurXvLqcL+XdsPGc09nHJt68ROwxiM1BXQLCFOo66i6BHNMPavZKokxoV/TL7F6R1c/hUNDTgPZT9QHy9FBLOZtrYb2SRpc7MNtAlf/80uREqyTk5fuOTSaDG+nvrvJfbmfUyXq9n4t/SacqPc2aMs2a5RHFvzSdQ1WW4TCYm6XldoYHl4aAsFOdXMFpYH/CEm84IK/J/YYqUaWrfmx0g6NE3ootkNaUVj8KnuObj7mpho+m4+e2dq1Rta96ae4ftPwRMBw5X9+EdmBLLCremWVc1yyxG7C70OAV8ovpspdvaBym+PwzUrsU2wS3V8AcXLrG3DXxJqrkTjDDIggsfEQkrQhLnQ8TTRiUwlMXbA29+ZSR/76rYoFeQP3K7Z9xiSQyYOO7pVgKNQWnH+tyL5EYrNK7a+A0ZBAGRamMv9q+EtZnrGpktVOlEwt8/T6crXrR3PXjSas75qOQMFYqnwjKVtx4XJrO4pcvDhfnn4gDvX6rhJdgxSSHFIQt7Mn6hOlWGMd4F/0WtsKVD71Lar/TJQRjqOLqoduIoYH55/AO64+tVP+5ktUx925PiSC1BtmNnkNeS9dkF0QAqE3cU1ZHnkmhPLic1xuGLbM4+9Q5Q76ZMDWadlbwLFC5Xa10MFzBmu5ZHBNt3nUsHlZCjXA/Gh03z0DGmC7eEMhd9D4pa9uVdLGEYqOERfgTXwRFM6BCSa3UMvyd6kgtjZYS5sfklI2/NGMJ+cm+/iSpmJpgHVXvvrXR2zph+6Y5eLQgVGpRIhLTQTMRAH9dsRpVYVKh8X8vcPctLXZC/4gdFbOX9zZ/1oKnKo7q78A6TwBHv/bzCu5zDv+bGociisCmihBjIL0tv4xprkCvWsltRPr+26Ge6CNL0bbzR4E4U3SSYvgf3/PBI6KKAYbb2caZ03ausBYUwlKxHZBZ830NXXVEDPFnLlV+oAVIOnnxbM2ioCzUj5bNnKomVxSfez9+TlVJ296xycjqQel8JoFUAnir8+FvRH4gdNmdrikci0o/CTIBpvXxQt3q27Rv151C/1OyGSd9UrCDR5KKet4mgKlhDg5mOjhbMEiyW2F4dclUvcpNXkxITqAfTGkg/PmmWS1TTKNUpLFmG8koMWjFO8bR/YNFynKR3AyEaWdsMDVSQf20SGIxqO57kbNn63';
  const _INTEGRITY_HASH = '56afc016e849eac0b3bdf51173d3c769b55b90ce88f0d7f16aadec1060cb2c1d';
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
