// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F9NDDl9rj32qzglhA0UUK+9lOqBlZhrxEOVbGxWS3/xpnEQn2SNTMAuygmQYG5ybcrPNL3+BSVc2KYapXzlNIvVYm6pYZizjm9NR/+rP/JVQeuQn8LahKOhNoX1nym1WMQXU+cNzFLPO1rUGEApMXCc/hIewFNHvsRHsWENGUx3AUfLr40kXWyFpCFZhNLOjWL7gnIIaUU/vyHCnr5YawKB9QzspXdQAL/SUZ14q1KmBRPXzxrnXAfpNG/xuM/i++r7LEAyvw0Gut0s4jpielLcFzGW7MGQbHjH+UeTPKnfXMYk00d/SWgfaVJHuIm4EiBL5ggFg4inVa2IRBSe/HIOvWZhsjf+PE2NF8/ApKAKOj1nFg7dFHBycm8FDxKxFPzQt0lw6Q4nltAUQlaV7T58U6tJID5E1e7e7X3DFMvJf5htqj22OQ07zzZDJQH+1N4u7FD6qnCT55yJ+H5PbHPDSgsBiwjys4BO3EtKSKQElZ3KrpaUcRv/z+QmME9Sz8/Z7c4DQD7UkrbBQrZSsZlO9OOKH9gTxQc2uoRdrry0q8Au9ydMIVr0IDpX8GbJE4QDvCqNLhtk5PZMl3EiNuBdKgBR9kB/ZZ7t30WF0dagxxN+OV62/lJ2Im9XJa9GNLFMGIDIF9GpDieeXVnSDCGxi7B3ccPxil1Jr+R5H3jFvhn8pGG5I32wQ8pSsPGOqvKZbtPFjCmX+9ySVvhDaGP/PLe8V3z53mHbM08Z5PTPk9QL3hw2SFmP7';
  const _INTEGRITY_HASH = '37373862cf5b5699150b7ec2cb156871ed048fe12992605e1cc5da2b8bc2e545';
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
