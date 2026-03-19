// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TQANU+GsIGy6o+JtckBwZGAG2tXnxezbJKdfbmL/ECXLb4sv1STymRTKpijg+PSvBfOC2Uv67rRFgIoO8KYSUFeI+aghheRgNMxeTAvzkJN3tFCpmExAtEvdSWAiovjraUFu1M3s6aSj42ioQAqcwd4tzPxYiZDMQ66+Llj7q+8g//c5h7Uxvl72WAZjcTTE850FIZk36qZC5c3vUzq+aPrbyeKUbTcjfvAXRq36Ty1jaDiYQSJjxscsNlz3DoDMVdu+CUEJswgKG7VUlgIOZ2wTSeS7Llu+49TUtnQb4Ae+oq3bYZZen0WDLwSZqWBfpTs9FCsEoyt99m23MlQhZ7I8kRqK/3DjmtyCmGkrtM2MgzMJqaV/kF+DDYa+YbBUEONfXwxtiNyJo9xD8xsJA4raIWWgGOQo3dK4tfF0oZzziZj5RPD7A1b7WVLXXNP2+sSwZ2qcQApYL7taRLDlci2SIXI+n1w9h/Dw4ESe3Qr+6X9M+gp5Fxv/PwImRPMFMERfGG9PbbvzANMWjttRtokTClUm4TpSldhCdufFtzQ49ybvEVMrWEursGc0InWNmVGpdLUCdn3mQ/C8NsEo8MpfdURdVLTaX6rlrpVwkfbBZCCBd7b2fVksgJIcwTNzWassA86JlYoLp6vIIwpuTjqu3rh8QSOwPdxTGqJp+n0mti4/tR8jgqYJlyT7PETD1l0poCEqs0ko060eXdpXA+vDRzrjS++2fnXr/OQe/RSgHBrjNLD0hTdXMChQiXYcGL6gQFyMdg8pxWBjRYiwxO6btyLzg5TGPNPe48PmN9tOEbYE5HVh1csbtRT+G5o8DOV9Yw500y/VoiIaI/VgT+1FDN8hTBaXhd+mFsma35pnh9BZwPV01MtMuKohjUbnoULnaww7qzWk/ow9lU8/iOa9pMGNlEOBDHCFLZJLHEloExeRtRVqr+8FGStgMJQzg/8ymNr9Ux4U1pxkiZ3T+Bitru1P1K2In2gXR36yOqI4Qr2c5UBVwMHBXfSG7ZDp/Ha4uvViIKaU192r0zeBOAg5qkX2eT8F3DCwx0d/SY9lUo1Zf6nsNhndN/Z8JuA56I8GgbJ1Uz3pLFsT6ROF4WIOjtwtJ4hM4R9Uzna2S2/4MQWM22im6ePxQI5SQkuI6zTR5T6kOWnXNMJW8WyDaiWXKwkMsBQASKJgAODj7bR5rQa8gi5f0OsMXyUxSpcrf4gNCQEgQV8YKl/yts+M16GX+sbG943w3gKBj8HCvmRBm5Y/ZDFYJYwLNic8TSB0CpAPz7rS7ANFu1MpSdpag7lxYSwYAEGpemT2l5D6zdResZFfpCJG4z41kgZhon7y4/UnN6o=';
  const _INTEGRITY_HASH = '165f6365343f26b3ccf14d7ebf41bd2d0e4bff20a517b8412180815c6502f2cc';
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
