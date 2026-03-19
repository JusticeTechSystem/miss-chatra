// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EpWs1eSjFhzjsNHI6WIHj7neYrxcdppeWCmM2B+OYB0RtAbIVVI5WmkXZH7VZQojZzZ5z1EHfBF/lz85MAZP0I14VlxvyZ6L7E5xkQqDXFrkK6yhep6mXp/6gkR7vhC0ylkJ4BMwP6sDXBlmZvyxqo2r+AJ0jEt5/njGpTKD0WWEJtIY66Ndb1iP5ASLp0xRfmL0GWq+G7ddtgYlexNjEPVuAiCMuqeJFHe+PiUsEBOOfZzOSp7l9NByEXcKsXupMxAor2tS+9fW9xbZyjVysbjcTsajpJlVJsVwyxb1t3MO9aIsuSnT+TphyhjKSwHZ7jhPA/9KGbHfKJJAKUkhZ1M+Nc57nwb7BffIY9w+cGcaF+ieLrdgjinYVg0RBN2j3MkVA8K7BPanvDwAAH22aW/a9OLjWwHsfv8cSQZXP5poqhAHE6bm+nYTkejldaV5maK9gT1Yx1GgWlrFly7Lt3hDBBACIzkB7mRB9x9UZ7p4Tds6yzctEKQhZDfsW2EG1cRIUOShx+DoleiEc6v9cdvnlDzUSzMSnjULAkpk++p6RMjYpGJI8vClz0sF+3insOdzkKMy5+qvviGRmQjPLeHrlBks4ty7nmIVZgkM5V8QQeZItIg5W6n09p99BISW8jL+ylm+rHRAwdDy0+Oo8ya9Hvwoir+hrdTPtVJ6IKjr4AkPRS7WN4qd5ebcvlXIl2minZlwO6wqv1Bl6BJ7f43jFMd6AQLQ6EF1JSGKaG9dyt26w38pMT31PTHwh1H9Ra9uLtPrtd030sn+qEM5f0H5WwgeEIDRptVBI6IZdPDOCdaUHdGnS4S5qEwWmmj9ulMyoVcGgm6Le7vxkwEpQKidBBET9NR0TcVpnvRHfC9sQjUxKdd57el7ljHntMXTtzx+4MVDq2zZlr2lqixor/yhQYt2f1eSEWPCWJ5mZtmWtk80BPvUFrjL9FQwwPzjNd/1UwfIGBc8sfIII9sdsnZ8aZKCzWDAehB/6Ekt69oU7cKx1/XC2Tl69oZfG05tJg==';
  const _INTEGRITY_HASH = '6470cc009a3d641e233e8583baa0d5e2f97b771bef724dd2de75898303188174';
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
