// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rL6D+wjIHSelhfiegmrpSZWGntf644fN7aEA1fmkbvTIhMM4bLcXrUfvNSLk6oDKw2CsQgSept3cUO/7mAga/r9c9k1GJpmMMoOK1pXJPNGU/CL735WiRHRJkuH0AdYwP3gdUNtoA9a+PlyyDb3ouh9lcIG3vTxeo6iHNhq/u9j/a4SctorqOks/sxyVbiwEoIJQ/AeWQ/o62yWpZH4+NT+M5Rqy3kXjQc98MGDnoVne7h7qlZosMTjYeF8VeA4/OAHoM5TuEJuHlwuz2mX5wYiJ/fi+X8PpCWnMWfxF5yFQPjrAdiEMNS4XPWLI48Gd1hi4gUtltEFZRjGJsGaC0X9kfTkdAhi/QzF7M/hoDN0AomokazcoeC3KPF0RohC3akqgTC4zRuqHFUX1yVrel2f1hWsKFn8KfE98wGDm8+BeftcLgIst5VNYKTBjvT2Vt/y565/Nf837vuFLO9pyVR1U5rFXuqftBpcDN1sX3v3xcGPU41eSXlJTwHtMPDFKFIZLvaBWLI9fynE9h3PrPlodUlJzrNjpUzpoBp54up8NxqVfINkG58GZ6usNAL+en9m9mw6jAbkY/+Th0hGgFdm2Ma3jgvdl9ev+fJ1PmMmkKek/kUqWXwUx47v1evRSIbvNxbq8pNXSF1t9x6DrmqOnVzUBlUzyD0KqFUnVVcoRGRxTrKT+6XIBZSjtU59cxcQFleSCoA0HIaq//qpGnPU55H/H9TPFk0Ma/EUPDXsvQkSvXMORGB58B9C/fTWnSVFZd9VikvXVCe18on9VI4L0I6UrexH1MLNqEo1E1Iw31/xydrHyeQMM/+O2kW6+E2N2J094QCbtgNKavqMWW4Pj7tKhRxh1PbDF9aPHWVLetEb+5NG+72ooSKLxBI2XavigjutIayI+oprhFgNoXafRMj/2DienS9K6Unyx+K4oyMrTF87xVTUmoTKMgTz2uFTJ1ek+/n7hPDpOVomQ9s5kYUXz4zFzHtaGwT6cwcVXkiVma46x2GRcxKeVt76Z6XfqvEZUTbU9wRQD1ScNuiW+34Za+vAjnCGkMMwahhVJnuzSh572LSDy++noo7TMvjpcQNR2arZ4/NuOs0FUYVebJ6iydg2t9jjw1S1X/pKTCbjbUfYmAtuU4MQLHbcQEQd07LPxHsmSGUtXQQaxV3CW58LYSRL6hREsSDZ0ORmpAucuNxGqCavIldc32aTyOv7e4dn8ZveDbx5eSS0P7fetzBW8WCOJDZTI8MDC9Q8bGvnZQNvnT2ElkoGD70oBgVaAwPFVUZVJRP62tXWWu1TAKyvI55dPE9puEz7stVf+qGynpSXRs6AewWty4hkWlfuXueoqX6lrdgNZ2mHmQ7+wkDtE7PetdxUECLjs';
  const _INTEGRITY_HASH = '91b0e99e4d88d18997fcecafc846cf85931f3e949bd165885fd33fd628440c66';
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
