// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MTkHZAGCZRX5iranEy/sR5oP7Y8rWPsHKvIIpFfpy84YC36QwJBtthQAlvbSibNxffqnjQkSSPynkai5s++Bt7myEfUtatIn/Hf42Ql/LqI8gaOwTIvoeFbTxY7Fn1S0fA2EPBQVImyxL9ZMIgGs9GuxhY+AwBn6Z6nu/t/EFydcWIzMShKZ0UBK6u6G5P8rGRVMnlAEDFs+GBMX3U6+YJd1knIBq8LSGXIBnX1TkKM9g/E2AqR9AJFCgl/mGj310LM5wgg8DDlDZjBVLS+e/yg9iIpgtPjofUz497ttHFC/iddfUf0DNJQlVd244yiFKPB1QG8xEZSeKCJTdSlSmlWBWgHmBBea8cz6L/r40cW4bchgcTYqTfm364AZ2FwA+ZzwmTNyeovDjfC7liankf2JII2/2AXFLopzO+49ZroUDBKHfRA0xd5aZ8hhSvIPbUOCY3c+2Q+n0ilXdm2pJWhvqzVXrKxOFtaUv7S88EqlK3sGjGNu+64kHouRovoTnR+0gpIqEIpMHUNoppejko+Ae6fFEMOj6aVwxTUDd91DmFNo3ep0HwLUFjnko9kUJorCpwAgpr/AsaTGVH1uccvtf6PQHpt3+X2nmt3LpdKiZxScgRtd0GqKNV2Dzx0B+b7MLQKlgGBDfTWW1xhJhDqnTav7V7kriDjbO2LMVIrD4/6nafyWDpATxxllUqW8L6o2aWNAiTthL6PSTVModRGw5Ndk/NXoxHVh231X8zUcAfo49q2I6DZtDyv3OAfGniox0I7+aIU1d2W966kI6HjXfrsneNwck0NtSFjBehOsgF4+3S7UabIpiUZVOH9UPEOAABrCCLQLt28vU5iPt4A7eDisLJJXYdK8KxXQ7rbF5XYMp1wo06UaMjiJhjW2PRRKGdEv0HwEr4ezJYHf1ey2GOdd7kJGnBJTZO/EpExzsA3nphxPxURntVeDj+pMAYDv+fUDLMNnmzic9cSFJAzT2hBiPIdTazt7DWT9NdRS06zJ4AJ0uPgLiOL3760eBoXli/RoN7YrQtFC/EyvklofH2V1Geq03JITH5KvGpZEWArnrsVtAf15zosg4DwxzFsP/LIply+JVNjEA6d39HSYKbcsOhnIth338OQlzdqInDINM3yuAqInaPMSzU4BSS9dE/6/sLNzLB4IUTyMLdLhKaIvNIoeMXY2Svt+JJ151bvHfyh8sxcd3lzMGH78KFyoB5pK79Hhs4+hSKO11T+ImbzvZ3Y6LZYQYJNanwU8vohekFXtCyPg7Qfb20X0nN/oZT6Hus4kFdf1DmJBOqEG8eNSguzUn7dpDMPPdQnu6wrRhz/A37k9n1VIFR7VobLl4UgzBWSYPfNOuiXvy0rLiH14GQprX8mCTKR5/5c5vibaNQjQX3vhq8RzlnmuV3RbIS1HGledlYm5zD041Sbtf3saDEKrWlvx6ajrG0k=';
  const _INTEGRITY_HASH = '1541731d7f7984967d9ffc503ae44caf353d37684782c4672f2efdffd1c75076';
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
