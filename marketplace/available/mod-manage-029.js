// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WglKwkDQNniJSOLM3pmxcc162RB5P3PW/aoqZh6Wy3J7pbywLp5bTee7mqrmvwlMxyZq3Y2daK0p5zljL38tR4Wg3lnxwV0Ih2TRccdrYcANCHuQuWSXY7d0ow5QDXebZs6NmP8Uh0RaPLKnnBRCkfFp++7HUI0L5UO7wpVX41NjUaOiPfTlJUIS/ktFSXXwewEQVB49ebBW0FXjaYsH411issio23p4nUBTm/y1PPgPtSemUGPLJb5WszQ4AzdAR2Ee4+hFsOV9qkE8qAAAL8nLqP5yaVb7LJRVl4zn81L8ChuGUPIFLlhlr8ldwhn8f0ntwBlNg/psNsHHclvEDFvAfD0cn3vANE3hlIVWvGLcliE6HCF72yh6OR2JyqAnF7ORy8ftyeRpuZVpvnPIpHQIkj+i2h+FLlhEwU0pDeNYMh46rrCf9ilG8KaKzQpin6W2Ncs3PAKjQ6K0u6HkNhGxI7xKRq0vgfuzbsbM2iztOpLdVaKXSsfVN/rrI9YxjktpYpQP8ujSM13SK3drVM+8pxswSf+xvZ+FIWom339TuM1YyBWSICTHT1ZDvaO+sLDH8NgHcAHcinLOwE3f9bUwu79MXFEk+KUDJ20ED1Ow5cnuFTy27YgSqZvUiisVbxs+BQjM3ju3Wpjtwe1TIQhH4sSNj/bc08RoqLc5k8lVn5l65UYgSOg9sUngltgS1/I88VBwtGpDDR/rRM6BAFEZIf/EwwUqeZk9r4wqpLSAlHx4iB1tgmi9zgk/7/3zueu9mLhG2h8GInvzSTRlMStVYeI3pGiuxi52YbhUFkOydbOGJU3qRQc7Esn6OwqaUn0pg9m8FtqWBeNjtKnwrkzSNjxS/NwjsvxUwZ0TuGHIzjShKiFwldgisw6MkKqsQ2l/6rJ3+iH2TKquaw1ueQNs3x0gT31P/Omr6D4ldJN1Bn9jC3phKQv2bpDQ0hk1G8hUSFpy2DaLKBoOTKQpg8r/TyeacaKHRhtiqC6WfvUQI7PdmVN3xh6WIqHcMxmgvFPsQdadV/EF2JKcSMQ/kRQgruaaZJCQE9J6zxpH99hnJ/gRZbms/iOtFDLK5buVuMEukzc3hvd72I4pSCDriAg1kAVdJlfV2dU/hDbdSccw92l9kaw2PCTAa0wTi9Y5XAwkLQ+qInUOQkcWHfnfk/SzBJSr4ttLI7uwS+dCfsl1p601F3DZcFpa/3KgAYWxyy4xD+FH9PkPfn/rLn/d8Kf6uSohKvCWKseB4Wz0XYxmqdFY8zuLystVo1Bpj/hnagCRMmJIa5k8TlBNnqR7atjpz5azPSz+3Y10q3YyVzPXobjPlIReLL/uoDEE4xk0xpuul/yn5pO35Fzz+c0Q8BuYH+vgKtyN0S5f4JwIaFgB0nM=';
  const _INTEGRITY_HASH = 'ed9512fe8ee312ca6df1d78741c99bf5630bcb123cfd07dcd800f9d77e5b0e7e';
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
