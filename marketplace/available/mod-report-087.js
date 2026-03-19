// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MNrgVVMiFfbydqTu3FOe7FRLnMTDLmQ8bCWDnHx52cuz+m3TYoK6YTSYKIG9KV3vq9iKTfMTsKNKs6/ac7vxAMBx3X61FxfnDuHILbed7oTW9OY0nvPRuK2tMtdtIRFEFhR2yXBaLZXcAd9+s07z70kmlrBo9sQ0OLf57KVSWwQVeU7IbA2Y38Y1LxNJHx+h2RcC53fHbDgw3p6bhnVRLpg6b2mgH+lChBwrPk+cU6UH+whF5kJLrt/ujdbKaV9IlvpJG58UfM3djUl8h+GG/DgtJNMYR9idpXWas8X1PTy3/oXPvgOKyAvrL+Vmzgm2yvt/Nbigj0EPeDkpggv4djC+Y+j+tPw1cIP4XEgwq0/6Ihv6LnygprmFLa4hFdxIx3nA5szVgqMPU5iSR4V0KyGP9bHCiGlpHwDerUG/Q2cBQgMRFX9445OAA4Dq7mzXghTDR00wQ4G19FeKOkYtXPXLtZQ2Y5m7DBks9JSpq1C0W+nBMRrsbsD1kABHGErPWcSXQt2vlb3tikPo9zELn+l4OInMoFRa033OEuRqMYP7aVgzEuPUJUEj4ITigIcXmgmlmXxwJeQTZXpmKdR++H9Lo0R44gA9w0X/miL4eH2e2Z5u4ocU82FwAeCI80GT4jbHUOJjGKW+61RCSOaJdPY/F9ufewsepEAlVriPADndnJjl2wQk9k/shR4r+E+q2uZEflc/mIdxpNi+C9vXyB/TYMfiI4YSdRdpD6HwJ5xDahE/eugBwlGvmLnCMscqKd1xLO6HFHnRj7kdEfR81m/3UaKooEDcFRbz1F4gwgk/5aiw14FQbHXn2PJgTCIHKRlh5+Q2JfM2XXdjojwpLXFIxB1f6WOf3Co6n+zqnTjVHWJrjaPLnz/SXEbXNNF20QgpwAGr9TVKWMcIPiOX8aRc7DxWAFSlDb7KN8uOotjLs/wHp9grO0Mk4Dd5hz9P5nD0Kk/KsmbkjYurcFPDOTS4LMMVHssEdgo4AR59hORQVNN+bbECML9Dmbo20W4PLwG9BUqdEwFXZMsqzEbH+Cud9/sstrKcmBHPthHpbD5oydajH9sIhUBE48foDSp5dBMldRIqWtUTFRaW4jgKc26ybRJRPCFazRJOyP4ykbXlBMAjexMd8BVuLQiQvIoMUGevmhCLVxmbq3BqihPQxwYeDnusufKRl4UprZ9eE9MyciddPZdEsQxjgRK4OM3UJ1KCBPnBAA69rMZ/ALwQHUeiEEWn8wrLXP6oeG6Ju6lRSfdqqhh8SBZco94Z9VLZ5j+WjqVjjGffDNKsK3W89w/BcTNco3xjxz6gSHFu2YLP1qH7O8wxSkpNIEc7jI13suDN/o5M8gFLQ8Gu79Uc8Chq9VKMRb0s9qtBTBfn9+KtQXs=';
  const _INTEGRITY_HASH = '6bf29b1d362d5d2d3cac3d911daaee526fc7b979cddfaf461e985a07e78c1832';
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
