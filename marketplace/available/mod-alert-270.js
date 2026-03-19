// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nwNHHGChgDTb3Rf3k+O1YFLYzTImSoQEqGdJggm1qGYpConD5pTSJxDveNXYXCxRcYt4lCz3PDQAWXlc4wIN5l4/9H+0FcklXLmt29N9jcPdaJYp/0Dk7iEiNd7Nf9NjilASFPuPsxRDqzZNLJ6XVkivQnal7mmXaFL7ZYrRn9SVp5U0W5RmIA+PiLeP4xCh8D+TXkMNLUPXY7XaHSUPzCQetoFWYP84I+TfuCiPUYbQXVCVnUM0pfyjCcQAXETRTNxw18PrRfF9mV716ToLeUK4b0myhthPl4+foOJP/eatVLas0f0ARoBticLZnVyyjhgZro4w3wkTDDeHWukzmA+rbfbWnjsG521SizRGkvPEgXE5HNLLE79TWSxWzkbbsVAZm/sLf9uDyR8I2wOUfz+VRWth/ZbPwA9gAYI8Zog8Dmj3EiYrhKPwdqhg4u11KclsGe7QPMMG2tYGrMDAVxaCu5Pdlc6ZZSk+EZ5j7HpMRowxL4A8yx382kl0Ci4EpoFmHp4nicRe2Z/fqDHczvkPhc3C9bjjrE215Zf3kvN0gm5NxAlz7Ozbnk1b8ZQ1D/dfUzphbgaOSSzI8WRAk/qyEtysslxfaejWG7pktPBh6W1w4yU7b6I11dEoLUBaDUALRErRzZngsdnOJIT7HOgKgGLxrG5ToIvEScJWK9xGmlhMmTw3wYzElwsUn0sqU29AFgZfah2Dsm8p57wEY+ePNddRTcxDMvnFyVuNt0B9skl7c+vaY24y8HJ4nGMWsftHqKG7yaOqUDwOLwUw166Y/7d7X03sk2HKdqKEV7oZVUTkReSShgjXO3d0Fxt7HTkX2TwsphKEZjC8kV1G2jRpbo15UG4SSh7cS89UQjMNgtbHvdhzptd+LoNeLuLp1ZIUdh/1UG2lc4gaeoJ5Z6pPRrEps5oEFUmwpZukPV6NfBbrz827pQSfdIKfgSb50RHGKTmrpPsyk8LeGXAwVAx52C61RnAoMKPFcJli9xl6LgIzWND/hg6lfZvcoEGxqsVZRrGAHXed+7sgWkAcRaW7OijPbvRBwvmP3CRiprY8PBgXCBtLEHAry7MAFBfwidrSlGqUtHaiI35MqJMECwB7OSYkSNExAwUQ8QKE/3iQFLS44LH4hAG8M9KoVDuCpzinDc4kYEUWX2BxhcgULw16T3iuOL+CpEwUhMCVLWwlHPhgeupovzavMGZhwTEpxONltLU55elRTsdperfFJaFONiopXwyq6i6n+5Rmj5CpYUheJzbMcAeS89cdehHtegWUNSOo2z8nlDu1KfWd5N6pXdTCWVMeXbJv3yT7OPnjjPU/eJgltgsEiio7Q0mv4KWqUSIKO1QhZdc74EqTHBsmfL53bZeL1e+ptLkv';
  const _INTEGRITY_HASH = 'f703ccfc2d5a959e536db8fdaf14468df9e64f28ed76e3cb3cd091c485ce2359';
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
