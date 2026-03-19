// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NgbIUREAq3TsU0IxcleyNEi9dMSScTegyPpH6ejUQbSy49Zg7L65jeEEWMk+6ZdwOOVkog6eGuObDsZCxQORjMUnAK7FpOkTjNHzyLVAEWseZ5qvS+YB6usRTAz3Urk5apm/fGkGL+x62vu41cFVsOJuvKOMgxMp+15wbYvvHGU9NanftRRG1sKBLr2bWptZkECUCY/Y2JuOZ3ze2v88YIebbcWaOdPY2F3kxyTjwXoYYfpSA+PNsdz/NcAtd8jUKVYNurlTkyFUwkH5pYwyKDMM72p/UX5yfPtAP7jXWJ8bqM3qMh6wZhw+ZeVI87Jgcenjgc+/xgzhURctRkSEqliHQPgs9nZyjl9g8b/Ec3ITmr+SAEgTImTbdP+yzPXZvhTMu6BWSInDo7KehrJXzEsjjp8thffq+yO85pFlBGYtk4c6WgFZgcGlIeI4vAIiPfEig6E4C4Zr6MmOgiJ7znTKTK1EYM8PQ3Ld7MA7HJUb3Fp5TYWs3xmD+Y0NhuCe4ASwDpUbp6yADalRlkxZh5QHrnoVZ3C3jhPdpRCS/5g5euSavN6WPF5idM4YriBMwv0GhJGlnWvAETNCUXXVkd71vYX1louagsasH+znEXdOeAjDnyHLmCNEnro4TSZHLLU6tlZVdum3kpPEwhYi02KpPnL64uSj1RUn3NVGU9nyg+0WLGoxU/yC75cvLRg2pj03H2NMD1BPQGsm/UZIDv4/v8Irk4eiM65FKg2HZTeKn7y6f6aHNVjiaXCP+IUXWyP4T3JoRrHB5MS9onzhv3LcQQ8ch6+bUboiaOZSBBD0jBV3Do9r+ZGG34p6ePH9/reB1Ku3rpxkRaGxrks0uQqFlEpXPDg2BJq/1EIIg+QAX3BTe+osxhZXbaagrl9Pt0XFA/1SiD/Lmb4bMXpyYdnBLWHK6VRnFDevzP/hJ8Cd1Ww/HLCSsU/oC+b3vw0VWCDkd0ZSFdxiGdRVlRqQGi9ws9Bb5lNB1R0/W3oXuWQ0n2O0NdouUgdqFCJmygbTlvgzARXBV6bwhLXGQVVLCFLfDyZWzrVhiUhQnoDIX1uoWqXafU7KEpp5p9HSt0LQRqRI6g+O/EDGoDFhERaDBIrzelj34UCBLFd6iLdJiTaAleMgIczynHnd+oDu3bVbVz7bvIdssCLEmnGnVN97c659Z2OTbzXgcDAHY1tRrpORQdiL5rgFtjiEXjNzY88m7cJYYp17Q3cl0PNp6Y/zV0pcTzW9BNFRgTZj+k4ODwlF2zGU2b9g/2/K397bY+9dVl+rHFi/uiyZLXmwT8T+NbpoejrY6JwEYMhiyhk3r4+FE347xAsZ5wbS/F20VsZ5MAE+Qhu6Jz2sTgBV9S2smachZwn5Ogc/EWmOhOFl/022T3JwKssBIn6vfDDR';
  const _INTEGRITY_HASH = '8b4f249e8ad93815e170619f43234e17e1dfe08f5884a95d084985b9dd1777fb';
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
