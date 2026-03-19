// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IaMoaTIzGLIrGf6MZk0ELoZjOcEVbe1tdIbXIC7JdordOkYqC80PoDkF15tvLNie8WmAJC54elsqkVTaTKOh8JN+u/CWx16b4iQvTxOnGAdrnKeQmAavTxhLW5e/CNg/OfNrKQgJn6DU0hOs7ox4NsMAenb0vXcU3OUqGbknR/zdohSChGuHHIK0mD7XSU2yA1x8AmwVXna/L+vQmqqM2GjJ8vgXPhj/bhj+6JSRiMBUNS2iw6+pzQ7bOLtWAugQEDnxYEyz2tQrBT0fhLcNKLqg7MHktfcg8HF+Pg0IreuYf9dv2CbQVTtHNusHELY9ivXeVt1DQ1oY7sqguhviUbc1aY/HrN9bB5v+/8T7yvdP6gSXfZluitqiTiPwty7r9ktb4VgR7ZRRPP1ehU4gzJn9kdxFranJ51A4S7yRDkeePjLbaRllxMgIzr7iBncOmJg8+h1iQVqjd198xYu8T8FmyDczzwGJ2rboWFT6G417iXWvqSPgvuR0ujT5HQP5WQKFI3KLoSzlwQctwC/Jw/03enfLcaJ35czxRWQMtk0C5S1/OVerfKV6FsYZFnRuST0TddCRJmkEr97TLXGPYYSFTgCIyzcYgODpOrEsJrdBokdh4Rp2fsp7ZB1ds+fX4D7PJ4nSes5OoqORUc+rXiV0j2p8kOc6B7kgq1qImHfNCiW2YSeD3V8ML9I7AgC7bsuw83UWzFmWrXy01rHEVBY5rUJyG4x9WbzIcd0632R/aAiTMfOJPdgMIwOM/6ZhBTGLN69p2PTKD3+jeczfM6v57qplKMpaYHDhYEqfY6uKJn+/oiaDIYk0Eniw75ajahfcxuSQHls9GlvmPREvML1cp5J4YhOPQCQX5dk0ZHPjLu50oEy18QNoiZFKwqYk8zkmyTKPAIQ/oTJLw5y4Itxg25FmSqRPX5prP7kNlTYyG2+YJeoQqw6B+bfAhqlW8sxs22o1kB6kr3cKLsFOqJ84orLfE/X8+rSZibszNMKXud56HlunUqOWG5ZlwNd8XtsyerrjEbVsdIIRBfdsMhI0oTA3PjuIqNZtLEl7cVKqpqjb1cfGQS3DC9kFhDMpn14s7d8AOPhVTSaNjnUWL2/aIKwtc22ZV3+mzM7EQ9fUyZADc7pkvJosjVEOMiCTvhzvBkSDXCkG+88k/cS6HE7qdgO06SIsEVNp9u3NFGKxUsaaJw1zoJ8JrLC9RfywQKYqY53bbw==';
  const _INTEGRITY_HASH = '9f951fbb8da30837efa2a368baa61b3283cc5c3bd141f4c163d618fbb710d3d1';
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
