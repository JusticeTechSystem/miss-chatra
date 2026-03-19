// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6+riewZKEXWixH4WE90/QTIVf9mdXzw1PWMQ/Y0TiDsJ+Yk9Cc0n4hBME3MqfcdcWmQ+CEZAVShCEJ2lSab2Z8XWH+85gCw9kZ/cBu7IBTkIJe8rCImWc75bJ14bsFluSZwDoZ27mi75e+zjKB77pmXUr5nbN0wq0UqLfpMlu8q4RUpOg7tnvShL6f4Li+fhfFx6vxues+RFlI53t5iiEH7CRX4R5ri+JkMUc57QogiCXR26XnZ/4zgRxfY4GdxhBi+Ow6vwBjATa8r/sDLNnT1eJyW/nolCXfPW3tftBNIgzL19/VogMLIw3FcRzhxJnLlbkFeeu4CJV3YYQFDEc8dGVQdjlw0n2PgZT0iWhCGrUVDVBFyzj+oL0QET7XW+zXmgM2OWy1GwCb7U8LJktbspKlQe53M55GGYs4HceGzTJoMo5Ei4e9Cr7MqhMnleCLY+KaPfNlcTFzQDVR3WSEQUcSjtwC5Vguq5v8uTC8o5vP91j34x5+DK8KzdPbcqUWu9xMYFkzLOaonp2zPfHqfSCulJa4vlt+SfPuinQu/ZTAGugzswL//Tmiy7+S4j2bqWOKraZyfJ8iHjBF7eDuFcjoValjVzzl6va0nWIrPUO+nugcI/62A8U8m/OldqE7Gb9/9oxKItpSQYtvVXsK2mxLqY+ufYPQuy7XpB5URQuIrF5CMXI8sh/Eitxv42fMrY9pcf2RXixcsYcz2KesguKq/+Gsi6itcHsKzZr4PmNg==';
  const _INTEGRITY_HASH = 'eb462358b1636de1271c218dabf583c4505ca12e1cb22a348204822e573e5109';
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
