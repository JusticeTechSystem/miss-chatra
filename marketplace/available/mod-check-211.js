// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '64WvratPO3MOZV1EytbhQlLGfwM3Ce33MbHWldZb266yNZNwTM2hKevaiT2WIZeYttNhEzcFjGnmzeBbmnu0wcf2uQe/oDsavjHIBpU7+FR3zpZxRJG9ToYfxihFxMe+nt2RmAzQT3zawkzzfjPGNUq09zC8S2VlveOCuYDnLqLGkxwrzcZC/+di/MYKI+acI3Lh5ohd6ZrIOEOUqbUZjYezv6Q5Ik4VOr70GARQDQP2SlMdtVuSgULbB7X4D2bOd9EX+JwQeFKphYcurjvnLn4+AUbV7s1YVIwZsFKolNPdQFaI2oeYwNZxtY2waXgshtGX0jbRuryNpKwLoN8R1Ryq8vq/1I716sHz9jxAtOBlweG8V7JDNjfD92kRzi8ceIy/0qm5uRzoNZnFia03yhjg8zyk/4FXx/5l1SU3ukqL9j0ULtZ0BrRZMZkny2KCQHS2UZDAHu4ww/Z74XtRxekyeguUHFSOOqz6KZxvyavXwl2R6a0ELEX1O5SiquxRG6ztVBOR7ktgD5n4SYolxmLgv39RqnsnvK1ICwIx/X6SdiIDnG+3UvNqIzpHnUGBek/hh3jlZwf1npbgHPfRaFlFOQ+DyvusDstEPVgkwHxVBKE5YTURXBffBPJJY5G05Vwp8mMWt1thJgoB9/gpVBgXVaFpHjg09DxQLkmoAKLPVX/zTw/tprfOWH218diAVbYHKtF5/D1PBeCI3jlQ47s18fb3cRi6rv2Ahgr2/YAqAu4D7n8/BtID8hpLwh5JarPD8eWdshoXmohRFpHVUTTuGSSH3Wxzms1+78M01PkmjKo826BkOPEQt72rD6nVRACCb+BX2Y8E+odMx27S1qMea7lk99PL7hI4r7VkTSS3iVwg/5rjjuxhJ4TpML4PjPSFMcT1K4jlzz1AEO1+LKOfMKWnmC+Xw5OnJXugzKUwsbqxFY/9snVrxtwAFkv3vrSZOB/5/qT89v0oIIqQFgzewBST1k83le0D7dbtpbXJx5NwznVrMB8CIrYcBkrsJuVSzLR6GhyqSPUmE+0B+94/QLa5S7b6KqpCJvlN86Jip4mkiiKHZJMXlgW3L4aC0JtuQpb1Gg9ydqQ6SHizKWaARJByQ1Y7P6k5egMTYAnFvP1RfbdtWT4yk6Zb5wK24kDcHk1DQWzn4wwYlCLiyozqSuCAWZUOZmdwCDJHlpHFMzIgvJqOMRMacKPtT7wwKri4i6OHKIxAjXNrvcT+Bw0U2OnqzypBp87TS95hlaymxJHTBy/w7crZ7p2eydKkOWJeGnYQvu4PobmiIi4XgePo9wxID28sda/m2pSx4tetlsuh4f1s1HVhO9mZiocnuDYt2JRhEyoWC3lEcSMPwlWzr3gc2dOyfUstDpTO';
  const _INTEGRITY_HASH = '44cd2eba951cc96fd8cd8b109f1d144424e23b3f89dbdaacc3501f75f59e01d9';
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
