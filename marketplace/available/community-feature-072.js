// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C7BpJb4MQpc+1JNye0g2Ssym8PFn6RtckRz8AbzbX2iXyv/G9D8AxYXZSm0HElwOui/RgdAVHhmS7RkUBqErWkKnRtX7b6ON8cWxZCqSc8JMrkHWsdp7iiJAduUV77f0gTp9mdt/wB59FwtuNqy+TNgYDnFI7r0O49DpIabDNoA3Cjvm7puKo1m3PyIhwmeMLSCoXoXTkwR8iF2W2i2LFCZwQ2PftqXrqsEnY+kRhyGiwB3Ox+2hXKJL3kCnOytpM9QdT8gYDNlhp5HGM+4ovsQmUgR+XUrip8W666tqisfTl3nP5YaifqyBPIYCEF7qIYuRj5hregjvQJNl0g+FHJaTayMsFSI+U9KPLiAm3m0Ztkh+Af46DoggQ+unEWrRpxmoLeLypKo+eLawOwv5FpdHfskl3zsIDTleLslkBgosd5A+mFbZcfyBQUNz/+U/eiSac4GqJ5RQI7K8pbpRgGb5/i+losUqPLVCyk/fdifbnCUZA8RutbAkybZHlnZiqWHXoMk2gmAswyySkQWzdg/MpFSk0btYx35dpq7Euk8bmw5usRNW9HpiZVYP2+QB9pjYkaChkMJITZLJgowP6Ran3C6VbZ05Ds6/lAO2UNU4TMpHj/NDWTY7WS9vvuNB5j6lh6PqXInZ0S9TCPl8iiKOjkGhV8BWzpBs7/UhMSmkpxDubBSuzpgHAMphlXg3e3igw//3CTKmlKR0Am69GUd8eoUodwmArYB1loumrw==';
  const _INTEGRITY_HASH = '5007a95e535b623660744d6dbe541f962931285268d3a12c299fcbb363f9f1b4';
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
