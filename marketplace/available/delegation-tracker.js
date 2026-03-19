// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UBYGEE4ygOf9nQ0W7PUCAHvo0g3ycDzWVwHXi2n0j9LFBRSIe/EkKAATZIL1/SqAh8+joZzl8/Agr7GsonOgclwW28aPl4w4ENdh2ty9+P0IE0brk+mNcigOFAgXIggdcdDQZV8fSC2Ad9hNfOnHuJvkf5y9ZeXOzRZxAebPjaO6NWP7a3Cca9bWhGn3csmNAPTL1t7eH6TKV/VaPQmAn+APd8kYDVUJ1TIXFAK1IDiVh1ukU1IjktrUPcRigDgyg+2D7z5EnFGEtaH0hNo3JkWbYVMQBdLu/4wFIqa5G0flad1LFZy8yD2eXIKXrkUa43m4lVToH6WcAHqAwXCb6c9qsGjsF3DNuxVp7c5WfICq6G81nArDODvv8dvhvM+giPGHp3dQh0gLCxaUWC1mBoRULH1pnjRWVRArG5CyA5bgGAHzki00moCIgWZFuC3RH6JC/c3SbmNww8PEnS9O0+DFZ1AmlHoHv+aW2gfCQV2W0z1A5Mc0pBHCv6EiulXQH39XWIfgFtYNSsPxQBIhzBhpegugqx1M/OH2E8ek33rDOtqdD8GVMPWNMnNkmJYKGQxO4r22LqQTLPPnfZr0XiizOKOtItoPuSgw+bfZ6PCZoVM+fQQ6qR+bBAcIIYjFShSZzNhvXyti/RX8DGajQRR4KlLZuCJuyTP6PUYjajxKHLiouAtPV9d5mGSfN/X+6EO7wKnr2j3YQYheCc1eBtQpXjIn1VXIZKAcLQOty7PuemIc0qvu80aEK5RR+pJFjJfZpPJyngKHsRO0avLcEkeBDY8beH0fKXftPjj51O2lF3bTLlaVGjdY6cl3JZxoqyQUmgckYSBO6b0LL+NY4N1V5bmvniqyZV6WxVxvae4v9fRVLeMrYPSbzd8crWXI3JWLyPVlziUfNjXawmxA56snNX0/lebrrccMU26eC/eB7LLUGXlmgEpUiEDr2Nx2zB687sDIKkirUEB7qwTrE2KJAfTv12NbNAZXsAlZ0l7jjA5fxIJVGax2p9h7WSD4QrEKiK1E2JWaUFGcBxx60526IlMVdAa0u2vFCGdaTTbseGTWYUwNn3j059ot90SaA7o4OEJaDeNuRz3IX4GzhOrmD0DIIrTbdXBLCE1d4GYt81ivjF1BbZ5Nrq43s8uQn5WBBvTWrLSH0/u32Q2VNxdH4HGb3PLDA4Sv2d7qwpvi4zYmtgeqE/kkkfLZ6YxKBv+cbnGBa7s+q+2oz0qOslUdYlj+pbQ/l8CM3LgPlwm3njyz3ZTKz3IljjVvbQcrN6p4Ie0hJleWS0g0MTeJMrrnMS3Ex81EHjQCGM0PbV3aNx0DG0wytT3BTaDPRcamTlwNqMKkru1wIAEdCUlshMkyOpoH3H1vEPOS8VsCVciC88m1f1KJs0m/8fnlNq7bB2A0dJEbdoyyMWlefJLG7M7qWuUWle7k/5dhgO8ieDmJhGraSBz4hHOsiVcutytkZbW43T0/7W0ULqaAKgaDg1xpibDD5hn7z7B+mAwQstWX+oVF5fVjD1i3acZqXDyLM9S/kzZb6RO4+hrkwu8khe8TiW5zCuRMM3Ss16ae8UIy56OPQmw8IS+8ZgkUb91Nhmp1phuCjvgmSfH1ZrYzClblluZwV3Kf9PN67U3Sk5TEpa/ruj38ovQUW7iQea2dLRjB/Hw6jO4YKzRbcmR6RznFZOt7oRN9yvoRAqTJK+yT+LTO5VnX9nVOJiFPEP/jC4OkwnS/gjnXtiqIzY4Uq5bueqE91UWmldODadREht5MBs+mHoRTWqOoxZX2nZlaw0e/fjBW+K/wCey0yjcqqIGcB+vGZw7YoURP8DI5yyD5AvVaHUoqYQcyHDxw+L8ehkMvBSub4D6lMub2J+wt';
  const _INTEGRITY_HASH = '3043015122af9931524e48055b0a0d4bcb47f18acec620b2aa3b00d3c8968cc1';
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
