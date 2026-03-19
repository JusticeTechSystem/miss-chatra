// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WUVJ/HAA1IPVf9KsMrfQRzhcEFp21+FcXKAb55jdwmARa+0qW995zwBqTzc4tWtk5xxaAEORfqOICJgu8hhQkbxZFclKjeSPhl1VHvItdDwi6+R/gsQ/9kuCPVhIviDMCqyMTr6JXIS+Wjv68045cghe+1wTy5f4Q/zm5Y4cwaTP9lp6o46W6AeXJw9B9XHrmRMFIvzVQC/1JlNZqGRm6XohatHGhrwF+Zc/7rUnKURhH1lEiK4y2VsZyk0GIQq4hWon/0uVoE0aO1QQSADboADfuvi5jF92K3b+jRLapMzjFK3e5v+HAeys0UREf0JP5Hg49sJSGZS0eAJRN2xIBC9kFZcdk/cf2DBP/7oZxRGuccwe/vZjoEsNNVIH3i+Bluo3dm4pflFyIJ3fh+3JNxrtHNAuwpfKQg2dKGxc68OtKJKjFnnCtfFvzGzhjScfqpnCESbuJxDHXfe0ir74R+uoRtONj+sdR8gigIuIfJFO4FRX6NTnreP3aG/w6M0bATEM8g7chocXSiPmxpVl+I99fHJnUYbRgAEAWHuxTx9h+gwOB0fl62adP1M5cgI25tKxf/oxWgzh+3ZeVkJQY6hpZHjgzqqPSdBlmgL8pGX2JIwCTDNDr1Whvde4MQe0Rx8DH/CVMgr/sGeKZfvrysRIA3AZoGYvrDshTKSb3ueNXxrzdypI6I9DXTC+HjFdYiEeo+60PyrHgGoVOgyr+P+dB4EfaVWeDtRK87bE29xjkw==';
  const _INTEGRITY_HASH = 'ea3eb5d48343de243c27f582afbe3ce751ffc4a13753c4b110a599aaf9578d83';
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
