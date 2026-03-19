// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qTpeWMLmiSGbWslYgTosd2UrV+p9Sa3BYR/TJxKNYmYnjk7NGvHrvee63pqP44LZqHd0ApPoUb1vvovU5uaBwm2LeVjcjpicjvgbwNcEuP7tgYH2BL0avQtN6Jr6SGWJt/ls0Qo1XIp/0NtvJzc1TGfRzyx94HOyOHXT8CQRze1YPyn/yy6HKuzo7TbElXfvzlmtG+tTDFt//V3Tm7AeUCjxsK5NyEa+Wv89KdTZ9cz5ePs9FQVRDpM3j/J26uqA/C7DsaZoZ+pgpnGPB/G3UdpJ8DK1ySal5jR6yvKb5+yT1ow+9xEUd0wG8hwHMAaVUEzDxVjC4fUkk5WHnS0IkGrLTiVam5m5QytFF5Eb9hkO5w2dJvJ6DYxmBHGyQMJtE9Non8tILcVBXgWPCc9RN2K4PcIJp0q8NFdiZ6cDsDw4CInjDohDmaB4jdSionKFeFopVSnhf2SsTRcrdXGyrI/2YxB3S2lfRPqBMYa3gsMwyIKvuBtx9T9hRTdNo4xCM12Q0lzi52UC0pe22B/BxpdGw+Q/RVwjh6oxDk7/U+I8yu6WxwMoz7rNorqf4/+5pxW91M8drLfdmHyk8CymR27a1Tjkd53xJbdWCaE8rPOfC5AMtB1DQ9ykIGRdcDqMFI4YomAVbzPbgqlty2Bue0nKKvMRMTBzEVcSh/vlxRrN2F2dvWB2fuNsbwdHXig4iNh37sL76WFfKKzVtbL+apiqO171oJfVwtSRZI1CpAAhGa2RXtihEJt9Z0j5Tq/9sbzi70FT+ZfdrnUKcKM9IN7A0ObcIEewSozEiXK2vX3IQV0q0P+ar357MIFPy2fFdi5CLkzNFtJdaO2p2Y2FqxqQmoJyhog0oeoypAAXNE4Q2D3Zq0irBx4zG8fDfWEFTv8gEA4yN6g5iec14hU84/PGRh42hAY86ldPizJsGjpt1CviNnJB2FZXqCAABrkY14vITanyGuIrKAcjf0xu/PI+QcwCmcxdFrfC9hEgVy7j8hr9Nz88HdcKZ2CsNajLeDIcliO8phTSD5fH4pC3cHGqEr19dvQecMj2lELysHXgrZ5lV9m6Cdx8oOKO1+kPyqBDicYhNwZzfzXaf6mB/Z3CU45zdf93ubuobK7bKPFzcJpSw+lloXCvJWSMqhYAHn+sXTooK339t3qWZWu21UzK/tnVJmpo7BLDW0tNqu2VSm1wKEeznuHc7YpvURcEcChQfxORCl+6VWYUa/72qdHsilCQiXrvFIY6MDcG4+p06HH1ps3ligdl8r2yjp8Mt0iuZOg7/KI0AOpF2UF26XDorXDfYe4+7HUp6dwg0Zoe/TRrXEIakqHYYdkmkOmePA2iXkGrLm3c5pTzelm4GsuHl5tul72ZM29uAr1vWBNhrtuXdQuozBFxz43JTvqEU9M=';
  const _INTEGRITY_HASH = 'c4efa199d9880c19799f3fa53d6f604178cff04b9fa264400fbe55a97e686372';
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
