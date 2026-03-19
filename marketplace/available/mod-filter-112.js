// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l6l6JgALgWnbaz2/G+fOCGmg+tHVTAC7pMbFh6X8M8yiug3FDdnzvYqId7F096sZKWCbbzHXlT9DcFwsRfW/nDxwUWiL2SKjafiapYeYIjGpqQS+6TRYsrQWOhaJ5fq8HScKLGq/XYb/nB3stFbqU40FFme29EuhOnJ8S8KCgCDg9gmd5BcTcmOtZY6CdV4kl1hyXpS7g3M1gKBToiJPrfmchtCW7DePuukHE0GQCXkbitTXAW8dWNo07rXaufZ96wWGolSC8p5mrJU3VR14iuze5loY1ReCZPTsGFc92OMhwyugVsRz3ldvMjfdCE7I/t4rIidTE/n2Yr2UgV9tycL3zH59ZUm0h3MRCSOXHlFH2MbhXFMLQgP9b9JAYACrk6Z0V/8rinmrC+sFMrsANZVCgYF2cgLsey9kKGd3V65UmZAswpn8rr+ka+wV7ywM7VczhJNtuL3xKo//xiq/ayQySGg1Bin/+PytKfsf8Wf6Gs2eCJWcU+5WrYmElOLOGhjIzYxKTUdZ2TvmzFmNKKrxkRelMxUuJSbpqCCz7qATYA1xnqSgLGYelbDgNXMBBujK2azdWscAsej1WuJlk09EcVriFT5PDsVodhS94UyWJekn7vegPA02NH+RKdU08oj/NkrC3FIbcb7XOYg7ojxIwNPfjWP9iBqyNG39IbIjKproYgdYaEep5sb2yjqtRQ8KAKTIjy3FX27PXZMb8qW38UGTPkSImpX8uzM2Fu4Bhtu1vAR0f9v60Wwz3/ufE52w755eKvKar/37UDE88Hy2Bum3TGlG9d4OA2aNYwPnnk9drB0Z5IYsbNK3IqKGmRCFzQt2F4M7VWitcK/7wug6rB9PnxvwTWIe/BpFtMWWIX4g8XsAlUgTk2aRSf6mw/ghJSPrdgRZ0MwCqziRPBk7XdUa1Yt+m8jTolhi7W9bHBz/hB3/8W5pYgnZ1a+C1jbapJj+ogSPJrF/X0jFeFodRL5iUyqHhDf3XyaDAiBuF1anl685OSE9L1R3XA4t9for8v6x0a6QABxGjLCkbxsoihrrK/K7Pg4VMiGUU9bAVa5a0nWs1cwBe/NBSpClWCUtErvBRV8TuwU3nR2Ndd+0AX8NcNEPshyU0cp6OgauyGX+bX1s8R9RN2Y1Q1yMPD8LmG9Ejyf+Xe1EQh7qDDZfd314nqM3SSKJ3Dp06EOijfLADwSV20bB9BFeaaRzwnMHj1VMbOBNmoR4vTX5guK5d31aFijUcpxmDRWr+Tp1G2C6pSMt6YrG/bxd7QgTq/Qr//wDWWpoz19HW/3QBM4VgYAamgfssSHZ/B+k6IMRwTbyKAojIbYhS7c5M0ogVC8gCMxZLDErJLvvaT7tN6+b0XnW53wORHBNLh3PwTUWDIDcnTGLzQ==';
  const _INTEGRITY_HASH = 'c5722c7fcc78ba4907f9e7e5b4415f9cb3634d6f55ca7e0a069fc3f485ff0518';
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
