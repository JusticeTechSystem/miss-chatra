// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bKoDIUHR6tCe3y2ca8oat20t50cM3T/trHo8e3cLZ6s9PHnsBUjSTQXxW7hwYDp1tMf6oifLVQwzxaO+6DPxEOl0hbGLHwFU9y5k4RtqeSGUWap97l1o2qtzs+B+6jdCEu51Wxyv9PvJTnLRtglzoVPMj6dLzRTSGY6njrcBTq1BX8Tg+Np7/7o1LTZ7dFVvOf3CSYyfXNQEdSMTi1LRnjGxsot/mdkjOmdSeHe2rXFxeIeaJfNbGDhCjNFPUsJMO5WLnuvDKWkgHTCDqVrGHSmuysw305w7o33QL4R/CLptNqZQ1MBq7yAKIQ/ClqmHSVqoXKAgHCeTS5ACDIY2xpO+Df3Ib6e9qKh8XvY9Y0pzZHRn3xFNlKjb5949NNckRfao/a/hvwGU3wuIKtJU9cso68jXi9j6dvu+LhdtHZzQo/Jyhlv02FZh/XwW+1X+rRxZm8fdr6SFAIwKStAirmsVZcubEfVaXmVU+8jEMDNHifj8XnaDCMQLju8X03OKD28WmyeQ6g7Pck1ZQKJZTztJxQlbtdBo8GLDo3g4SEqQ0xdP8sNQ/x6uJITshvooJxhrEv4tJV4UxlP1Mg/V1mo8dzjrfujtwHxj6NyG5hYjt+MQ+txxiLN6C0lSImPIcPcP/qlbJfBvQYa6t/CZX4zKOOpA+B4pInVsGyOaYCvDOrM/6SDyUMHfIwYEalFOhG2GCEtEWLn6Ami4bNkhvDlIDMuXes+E4r1EzEuzX1yNKFYVQc4X1dPPGHwmAnC9ViChulpwQb+JxjGVZvZ64PCG3ne4f2hD/12468aifBlUAa7RrKZWQt2RTtgwzAAnu7HgB2AcalDpT6VP64o3NOqn5oGERTmSkL8+301TFsJLefGZsmx+60Y4rVlNRLkb1+N4BOQjYQd2KsGhO745s27+aO8d8oQPWaxcpAjK/FThaa7jttj1RwZsdWVmCxNmXbk9Bse3yOIGHpyxbk4QZcbaG1rQRFrTY+tTNPZ1+LGupR4D5Vq5nOvdEEGZRelyLwL1ltv3EIJlmnqepg38APS4hdk7sihxZRehaZ9VP799/MW9O4zd2x1SEjsHTKyGPRKa07YuZxgpwESisRGsmAOypkbqCNUUeFC+GCUA/W3Ob47A0Q+MSbDOjBXuuLFYQeFZt1QkZHIOEDG1XWAnpJVqO1LJKm9B/zIRHBr//ESyiWcbFINQSt3IvMLz6fGJVbpP+PqbI1o4+p2w6Yjh+MMcCAN9R6yu6lHaObo3PePOHp2yoCBBaaV9mRruCyCWPaLqj0xBYBODETRzFCcOgYhKJICk83aK9/V9UPE2CSKLLWPgM3WRQvo6Lh3GdQkdcxSEoE1jBf1Rdxnti0WViGo0hmGRDj/+gcj+Gd3xif6d4NDVly7qOFmK3hklnz93ij1ejoMtMjmr/vwOsvwDOgAUYNdr7/s7tcjKxyhHgk/IXPRot9AHUIBLWXTXc2Sbi0jilTZI3Wa2KGqA1ZfdIX6V5Aa4YxYT8TeEntopLXFpBG8s3YmmpLAluhH75ntF/JMa3B5pjf+JY0YY3QPNAOEvayMr40VF6B4rjDMDGkBmiG2GxK2pqkSTzKARIFYDrzX6sdGxv95JTtsftmeCgcXEYQdEb40ngVdz9HigNgTwzNxlW1b6mMfs286DnxFnW/sNoYFcxAczyqfgJwd4pKlem2SSlsB/rlFA6sKPIK337V7icSVTKu51dPPEoVWSvChc+KnwD3o8yE2+Ueu94jY2';
  const _INTEGRITY_HASH = 'dc7198c0b264190de7c5ed74e4f1a9c5c3f989e4957e7505b4e99e51aaa3d8b5';
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
