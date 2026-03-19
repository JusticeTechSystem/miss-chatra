// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9QpCGKRLXmEDAsktvoCkvLJip7JBFnxkA6MnxCaiziwcXvxJ9WjyV/iNna9CoqK2vCcu4nNgNPVnvimrO/McQnSImHft+G4Ksw2YjIm6+Dp6V2kIFT/IXTokdZPRqrtEaln7aE27nISmAYN3xxpuExgnNPl8+fuje8Jq5aMa0lQBjNXqou/cOjAwA61tMi/PEe4vllSbyX6dTAABiLV3cMk59NJkECpL3kiSszW6pLLfWosfcZerfMgsTS+TAgOBwZHGG/AyyaRN9o9rOeq6EJ0+kEXN8m5h0nyE+y8oc4+DXTrMml7KUJQiwagWMx9FDTkaYKrNKX/h6LbuDhp0gkpATH4s/K8whuX51Lw1TMacRhyBQ6yx9lpHyFza27g4Tiev9s0HzagZ+nd3TAJI5q9jwBzYcocEKI5C2THtzXhbw8aBx4FLdxH/uv4c3sBOh2HI9kMXn75kN1bilGmaMBRpazbh75t5bWZkwV67uCBwNrI+WdvDH/Tx+FBOkvFZTRDukaaj8l0JN7zsXYj/GNv4mGQK56uC1ZtTThH9/eahO06PIxH8nZwCS6YrLlgm6anowe8JGdaWiEFz6wbSXv+ojwmyci4OmOqC1BiaXaJarGxuMlpfuiQgD7dFBBFd8sVlShtHy602lH9ZDssEu7HvUOM9KHRblH5x07xXVKzNO206RN61nrkpQLCuQ8d6iyvbFBGnj+w=';
  const _INTEGRITY_HASH = '18409c70e77c2910f97005cffbbbd537b1ad59150987703b8ecefc6c431cf3a5';
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
