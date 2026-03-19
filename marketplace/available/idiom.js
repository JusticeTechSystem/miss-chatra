// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QS52kvMmlN/ibU7a6GyVUMZ4qj4Cw1U4o4O4J5t2DH+EmW0MLKaFm+Z3DEgqUnexwkGncrX4n5JroYP3MyL/PuZ9841HT+hDv5Jm1I3g32MNzSuft+dZKmGHy1l0V70FTQxCGMDb34UGLZNyV+BQk/1xuzCrVICCzJk15kSW3gJCAt6HoyYy+YHosOlRu3yRr/bE4h+VuCVaK3aJ8bwG0jBQzbJnRxgqOTSuU17fcIRGW3fOvoXzajlJi6IMCMmFKvvJ01ZflZScGbZ5pD4KI+1o19AbfzOrQkkYRQzioWuYtk/0oAHnE8V1Sg1ReHibaVvP++pX8mTydTv3pOHK/DtCXFVZPS5RqKO0oKtQtR0dgY8SzBS1OdY6yCvTlR1yPBZkgTiiA7QtiEDpVjcMF/cinx2GPxJ9+yjHml+iIGy1Bglzx2MUnf2iQrKUrEtiWHP42sLXuNtLapn3g5hn0Wokg9U3LiW6wExARGSM6jj1c0/wQXANJtSvaFJhfNIriI3eDz56GJkPP8CykuqXenMNSv7gD06vD1kLq6ymPJaxi+UTsGYUci45D84X9svhOIHzAV9Kev8ayhwd3VRDtSmAkey3fOWTPiWemkb12Kq82PY+HHGfXPpuMs1n+05JF2acIwO5ZnJSj4ORkF/L+IRJ6ylcLTkusHw6gC+pnRGr4K8v0Vb/4FkrdLKT7nEmAof7UlfNFsyzVY6FLFwLLJISX8ZmHPrpJI2I9fEWTAT71f/C/5CQliTVT8M4W+fs/hiuHR7iFbiyQz4z/PhYMPz5fAlDnhWWuyQzOa2IqoLKfzTd28ZZ1QActx7XCNJOvk4/Winf0VMeaZisQNalmI4d3CKlArP0glMGj2bLphyNd9D16uDHck78/pgk6C3McU629yvwzrcg5volnpCjDcRbCd2MdcjF4qNjD9i1UQ10hyQC2w88+VAXGNaW4yPpamvbG2LolYCI7ML/luIcSRXxDNB8qcqU50n1Zmes/Nwqr2AV1a5Worvr11UESKsJcltDex1N3XdJ/dp7tLn4d4KjNB5tDmdL2Ckekb36LvWNLwNu5Rfgp0mT6zBnykYRmQX9Q/I9mIws2tJDLUxUXZyik+pw/S07XYDfkDR8oihIO3PkQdpyPwE8k6/9a0BW41Gvpkg1PYeNIBaLeBF6oy1aNUxvZzKUDNapEGu6fLCK1+xUBZRPi2E3aIE=';
  const _INTEGRITY_HASH = 'a2f25d2e718f821983fa42f32df75e042e9b76026e7228e39bf83960865b5e60';
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
