// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vy96KTL1FxBqU2R/injbNfV4778q04C6WVenod2lJ9zlnAeXdsfiIUH/Erh46p4rHWASVfxJkLRLJkjMwfHiqVCfeFpZzH60zlzwjOa3QV6HKG32ZipaVrWGGZ6+GTB1Bn7ZzPFVcZox80n8mww1oDWumpRVBpydyXK04Yj/zwJH3huLX1BefYQ6H7NCM+tsPXvLRZLv7MEZpsWpQr40ADjkrfYzkWh2eMzgI+K/Rg57Kwvd5Q82x1qx/E2PO1JvjCyCWhrszxGLLDdEhAwxtIJTj0aMLgUe3G5PJsMn1/3hVw58a2mfoi9FmtQHV1pjQ8jaD+e0y4nxziIfAiyNSeGekCQW6Ftg2dldDjOd/YT6QUGAZ0GyiE37cUM/ZYx9TtANby4jnT3k2oMd6lqEFTIJsFGWjwV7W3i3HxntX85TOxW9me7RCtV1mwCCc7ar7GUS1zBPN9ANrvP1a/52Y1gEzh92ydxMHyKluWPYmrFLg/V+iMsvIWUKw1kIrXhVbMngUPv0rWm2JHrhLDrcR84o2rv1lWJKF5lqb8uE/pCIQPbQx+88+4578LkfoegvgM7El9faWKFd6ch59ARMui34u45TBjc6yyDPHJuTK8j5pqQlJnjhESKxepjHBamKNn9uqFTEBGKcC+yHbZXmqJzbA+Q0wOAFTBbbTEILqLTcAyGIJVcRbmDS+PHDLpvnKRU4nBSIawRHMYnQtd2/cBzu1TsYpYJG7NasIt0WcFGVQupamHwgITFQjM2TL7zpmuFaWEvVL1lvHtFeZiGIf/LHOZLy2Edv4z1q5Lplm+CYmjx6/Tn0WCdtKOmLRobYdjxpcuB5zD+KQkvOPJSKKOn6NfPEVlgaoZa8sFHU7bfwlEMOuTS+UdxasjVWERxrrH85E86DrZIJCPiUs37UgB4M0v5KAC1UeYdDJIzsXrjjoOAAizPTsGOSRzUT/smz4sadim8VcSfANtXQnmgkGiRVKgS1XRbbdmjuSOmg65w3Kf32IPCPW1WuwE49/fNjIyHrbeBC+GDKc7xjLQ9QcKQFJCi8y6vYkzJuFebFl7YOpBL09e4BWSewGtPhT1eyG1bnAxth2jYoH6wm3+pc/jHRr0EMrzrDrIR/ZesApG7y5vs+KCezT8sueypGcEVl3Ej0dm1aH4RAAl42S2ZkzjR9ppTSRAehXS2UacBv4cS2kOAbGoC83tYVaGy2SxRQGv5MVHZC34+yOynjQg==';
  const _INTEGRITY_HASH = '3a7235835175996958872935136b45f4ccca546050450348442c00624d9b063e';
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
