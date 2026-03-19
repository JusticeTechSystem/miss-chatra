// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K6+YHzngdydTSlfV5J+0qWnm566INiSQJgcCnFluLlm1mjxmVIycFVejb+V8+FZdtvS2UZtcIs1+fdu2MD6tOgPFIKXXuTNN8dW1llShS2ix73/rA5SJbv0N9qydMZntC+v8M7VjCkslUPAiDpOm9X1GWZHbW+Hvw/usOuwfJPYlsUzkhtqUc87uLbCUVzRpCwLnne6qvfbLah3b8UZxrrWOuOR2/tE62jETT8LhSCZ5eVEzk8ZPghYhE5micK8lKUXXW44q8xOpxqIpsPKHESzWQOoD2MSHktYUavybvCy1PugbH7rsNPIwUjRN3oYluuN0vGkNRBOy0zCvG1FkTQxuoKOhaCe34k28IjrsqcCHpL+3/WqvVMGi93WSV1vgWz9kqc5NOKX9sSVwXGHKbhNGcnhu+l19zTtPriak4z5IxGDuWDFgCCNvfX2KlvGTmwARIDNpmsHVkULsAJY6mvRkP3f3i89DWx38y/HAesP96wo81tJTdABXwfZpLujxp1yOGLGBymckZPMcYmrcWegl/hjYMtMWOjKYYC/ac21ZRBd++Dmd831fiH3MNWribJPL+7J5g1j1+f+0Xh168UFpyXqOgamcVmHhSkM/HYiTdCAWRcLaa+dkI1GjOCMHeYSrG0QoDWjd3iq06Pm0aACo0pZcRAf7fqzAM9aFV4fCk2OtWxrwQyseNQ/D88EpEizqSIoJAqQNEL85MkejRBRUWlBwpJmr5TTUYUBHyM6/69m3AvX5CK8ZA/NT6/Z1GrU1zf0+buTVgtC+EpWvvs2XRPFcibNff8IgzcDEmkhPELHtmAChG8qTrngOGA1EbThKVODp9IClCqals69QzxhMpJh1eHCpQ/Ny17402pWBgg8T8SOAROjI0iajuDiniYCFIy23ho+n3CuSr1K+ArcsOP71cIzeyXLk5AtCY6Dw4LsjIAaUYinQfEX0WZbx/X4nGTXU0XWBUW/ntuGj7imnNCNaDarsd6k2HZDfPnJsPlepAYgL0T7ejmrpW+gBwc8DrqjKkvWyXuCSVeupeKscy973iUaTpTOwLkQ2JcwiRDHt14rYR45ehIi/tC0RjKlpQ30x1jHzNnU=';
  const _INTEGRITY_HASH = '8a31f37fe4c141c4e90d51c3cebf962ebb56aff1711641bc885728d64d6893c0';
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
