// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kRwxcWpKvk/ezIQ49rUP+MQkLTDt+dFPsbaiR5JGKbscWWT5Gt5vP8/BJzpC4KZkSS5JaiVj2vSbdbE1uJRcNOBncJHAzAgaZiJFzIi9mc3pAqzXTp7K7GHEkZjdsr9d2A3jVaDmORVv3d9EcC7J9Y1t5QiCkyi0Pvv+TUQ2G2M0MaARE9bSeoj2tAZMEM9b3FM+bjFLha3pZ//tVSC8EGVkOuaMIjsZmw+64pGWe86uHX2CMI4ubG3c56CV1/grRp4zpL2LdXCAlpF95Q0gknDQEslxO5oUzB5mP0sFz7jxOWIqPM7dVgvVYR24oGwojT1/pKMZLg09B+DeVsRuk8Tdr5maCJUC8LFEJPZtisdvk8D4fRLVIUuCPARfKjRjUCLgzp/Oioz+rHWe0iIm3jbAbdot7t+xuWpe39KdYw02Xt/4u6bkGRR+ZMAEcbErkULD8Q3bvWLYddMsE/BJe3LDK6BHqH0d/4r+2cdNf2yVhrzBwekJjsOE5Pm1dq3rsD0NN+6/DDRmoeV4qXbic6VWylSknViyTw7gPX4VYcbuot1rTWkds0D9tSBThF2L7npqAGQsfUtk+tqUBj0tdCQ5fIQk8YYcdC3MeaeDPKd7CWFHG6R8ld+rI01yLReBvHnKNFjkp05dZK+PPBFgnSQrLPIhxQgc0tYD2SSzlYtG5vqR0QG9m2kCHe2/+sm+8jy6gV3FQbLHplLRKMvPCH+X06hWUgxpohimhiXwbEC57H61/st6JlfvF0AoSsszsUYbIyrrhQoZ/eyC56yfeC294GcO7bVzc4gUXJXJ66yi7ty5L9eeaCSEjg+FUAW0p5dIo6gedv+S9XtoQWNP8a4zBP+R8+IrUrEvtQ0YTYtmEVYcY62snaK/GoG1boID/C6ojxCFHNavdzvRhkW1FDsWCgu2bIr95w7IMP+EZtnS1hsfDfj37Fb+6ktRvdbqGgXxIq1tAoJLWfZvDxF08EXpkIMDtsYla0ElMLkYMSUehRYBMSUf0XgvILOF1iWxu0PnYHl7hmIZpOu5vNdcYmEI06GoFi/elfRwwiRBl7EpMTIH5wzIEtZ5TKjq6s65ueMxAoSSzZHQP/5UCtGBu/gQHk7arkoO5FlZXReIouwS/9fFQZ5eG/yYOEDELMq2CkhAhb8Uof3bvq5V/RSD8SdgYAV5GPS7qi1EVEYoblnUVZbWLzvSguQYF+BuIiEst0MAqt3Nb9i9IoK9D5as9YR76vobtXebSDdoiBagqGHKwO+8UsbRBM23/4L3jNZXTk//mdk4gBJytCtQnN49dwWyzk5fDXM8Pu4W/DRWg7pxLVHJ1mbxdtJp67oqdlj1bW/h9AuoBBGrfuAmZG8dQee1hsDKiK292w==';
  const _INTEGRITY_HASH = '3c917433efef7ac784f4f316898521dbad7e837f810a7d4035af537e6cef26e2';
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
