// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NUvwS2KGb3xvOMKYNsTTal8YmxGX2zOhl0dVV5NWDuQDlzZMBTZPSORbqs8gjgfo0rCvK07O5xVQFbov9+KSS8fhSH1tTNUz/rEt4aX/LgBmUfxAYaT1Z6mBxxliJEyT/vVC/VxCwclIOrNZzqroGp9/MkUzIp/TfBv0aHz1SXPdr2S+RZzdfpDM9DvoHrvDaawl0cFxgI4T7dQoiAGNbksPbCEbNICB72XmQwC1w3zkRVDySVcmzs6v4LJtFgiU5BNnfjecKstXtYTuUgknwlI/U/kHIhTjO9MP6RKk1RVARftHvT/+64Yh3ooVwaCRgzLAyhaFNYjgHp5Z/nvtofqRhUdGepeb5Nn7kNfssmCMaD8pvXa1AGzNtNbCx4iR0uCAyGdxAnZg6awheCKpCxUxnBN9YwJDtXBdcTmGynmHak+BdmHtM302d+pUnI0wquRneWpoSYgFggNWS7Wyj0Vk2kyd+CpG4Wua3Tl9rkjEmTBiTYD6WAINZSBkKKVg/8WFk+h+gEPmarJ61jyHIZZ8qv/qYU6Po+4flRq5Nnu6+6C43rFId+154lxFMlLngK6hNjg5DgLttdbcNsZ7v45Psi0C2vcpw7SccU4fvB1veRfTzJukl2jFZcmVZI1r3QBMidhG4SSE1Q6ssyh5UjoBbRjiaCgW+pzezH6i5z0iQS2zwccX6kYGxZpj8y68hHGo/JpbPh6pCTT+z1kV8IsfSEphu/0wbbu4RNLYKyNkkABUD/Uc4FyhoTe9V8pmyUolmajWdyPZNzfqiL0C4h/cZIHoyLgJHpsGF9fPqe4Pw45r4wyCVIkkdXd3n4a2MW6mRmbrCifMk81PnvgfXdC+71jEmJdBHZh2W9MwEpGRdQOXAvpz/UO8DnqLiSJ4uYlCdHKkv4fwHcwREg+VSj7XoZupMTUiFl3aNbfz254D/En3tju62KXnkEPPkgp/j0Hy7tzRYTAxKhr+X8R++wwsZpTCWIFXgYubQFyjQq7ZJHIekG73/K5t23Dt5Iu8jvMTB+m+7DFG/PqOZ/tElwE8ngqPDWSpw+kiJtQR09WQ9w7crB79AS57Oy7Wa1oPvkWLKyqzltArvpRBGEgzXY/Y1uMpGqRlyOKve+OHTFr0jeiInJTxGR6Y50aStR635esL3KlFAQok7ENC+blC1Mlw7Jdq0PbYEq80p2ypxIHuB0ZD2XkwvKAIqSQbm+HhucWQAd4U9KBH9RnI4qJUuWaAreJK8EN8BqlaNgfz6CoqZZvnqJxUCOzyX18vs8BpQd5aukpqG+d2NdyeJ1SCyra6WQAxdK05Mr34tmpgvSO5RKhCYVjcz6dAxSRIpjM57F9VGPRLgzkKFDwKH7C4i6oC7RjBI//zf89Az3J+';
  const _INTEGRITY_HASH = '5e14aa17a0cbf344f47d0b9b588920008820b9f8d4ab74740f7e5dc871a0f540';
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
