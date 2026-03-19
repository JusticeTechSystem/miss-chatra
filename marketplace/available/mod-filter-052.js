// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '81Zv13JTsemi6RhfDQ6CGDkwfAF7DmE1AQh57WJqRV6ogOUrdsT+vs3IAXwTP48NDoxWcRcB1VL5URd2Yp4xV+mK+qQROnRJLsBVaMF7sGhAOYiTN3uGFq1UG4q1hGS1/5erNKsPIX+dluq4/WFaZjLxtutJmZp17oPgfdpnLE45ctB/ZlC9VrGz7MBZhog0q2Z25zSqMoaNXVl3+iRNDaVR5wIrNvbVkeKTqqpv0Jr8Befy13DAvZUc3mIp2EMbdhdiea5JcVK23za9RgRyWS4h1T62C43eBLKEXLQXaEFOfRmB0Uq9nssy3ZtkaPvKLMQIOXN/1bDoi4xEoM6NYGMt7pMHE1NCuaQs8KTORRWuhIMEK1kDgxp6jtp99bU9JiAhXg5445bp33Y3pcil2p+3vplFf54feZ6Da+H9n2XK0x2Gqaa2unumjnxCliMd/zqXGX1oiYaPJhPNWvSMaNC9a5YkVHez4tFD1kXGVomsfHyYwKn6mF5iWF4wBsM1j6iYmR/D8OcJHm/alVnYEAJn7wC6v8WEFllytqiawt/M56P8GW+8hQfcDMbfqRoFDC0RnXisGFY0fGklVSHNZMDqEIzy/MQ/X8sEXM+BmkWJuCCBTG7SNZ3rjUiHWi0hQgKzW/55APZJ3YFAFghI/Sv7KuldQakqOgQh9sSe7Po7WF2n2oQCRnRYzBNNmA5PZDzv3A/zSdM8bDqRcXKXO8n3Zrx+N0gnBoPHpXIFChh2072+K7qIgVxefnSFFgpBjPpM6s4qpX7tc0N4wiCPO4K9SLIeTAmShRmGPxSfuQanjZnevEnHNmc/7IckO1gF/ugy1CJgAgQ1gxJpCbT/zfO2qVOxYr10fsF7YhAsbnU7B3pJB3hBUwXkVdwb/KI+RDHXX2jS3N04i10zzwA0RioaRRnOlwfxLnSxdBSnTBQVf7cmWGiSvM+q4l7RsOpi8vjhKj+dJTHVaYPr776iefI86au4oEzmpf16Wk3De0zT/kwiippvbyQ8n3SDXJHu/g/53DXkI73QPS0NahGVasNTbpo86mIidaCE8tODomXuEFTdYTQxEVD1BDGEH6L0jQmSHpS22raf0kOmHWDAnSjPNjU7lBs17SIYXDhlpvb+jV/2QEnG5ILa5FcUU8Upibd9x2afTzX4nZk6orW5bZ5+D5EIql6d+sXencu6c17j58H8h73lH7Nu5h2AS54wQciKmV/IzY5wwDjw8tc7nPVUwa5n2ZatJKmgh67mmv6p2ptEJx+9v7sXEr03RmaljbaIoWjCS7dBCDJgq6+NNDWpqqSBmcuqH5A/uUu91lTmwpQQqaozVPsKHbrTehFfzvmrJscH9e0UTNvdQDRcBs01ChSagiymplkIoMhFplDiogM=';
  const _INTEGRITY_HASH = '442e540320d6c742378d52eafbbc942440e8d307874f76db009dd42ba52153b7';
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
