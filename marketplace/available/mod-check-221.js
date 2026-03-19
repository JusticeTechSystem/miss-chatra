// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PAyYV/nDB7cmosBx+g30qSar5gnYmytNRFD8rLafRhM7mbc91m2bNWSMek/Aimst6GahPHlIguf1Y/uJGzrMn6COIxKy8a7Jj7749y7V3aALsLqEtgwzeEwh40Ixd0oOlAWA/tUDYknHMR2KNLmee0J56CHt6Z4JoCP04xfvA4SiA6i/xTxVWI68pX31iCzHVtGcpVypwMmqaqwE0/dSd7uznjw2uqfCrPFux0vcx/oMg9FGLMzMFbbwL2EeNP7acQqSCuYUGCK+eXFVx1KSzXMoFf52g0x03skzvKmCYbF1P/bjnHML88oEdUxXb/sRXz6aJ803syn3X52YRtLtuR01/X38N3ozi+y9kafSMVZ1uEZEm/Hkez4O2ZIQRcNYsaROfTlhx/IFSZaIAR5gWErrz3LDeV3uj97kChTli+a2IcYX4ylxnxWn58SJxH36Cry1Fzn96522hAajblHUmMk9AciDf0XpAnqThbh4b39ohNJ6VeFcQx0LjUtOle6COFGxo07cH/aK2Ywt0s3m5GvHUXOJvPP84Y87OsqCIgeWGPPyMP82368JmHgWDU2DWFKc0o9krf2LedXXJM24OpvhDKckPASr1Dk05fduPDGc0RrqcYzDKDfScucuLvAanmDYLJRGwj2GLmjRk0IBXEmfLiiAsnVx5TKlL6glnUhKEaSavrkfSdWp+RJRqvkKKF0DxXZGU07yPKphdf9y+TF7IbSIh4rOcYR3zYXk+YLfKiNrmfJZpK2uIG5F9qD7K65whZXBjbOFwZdMhY/G2TBF5/N2DWS57XIg1MWnf1MFw/QSAREjzZK1z/4+7P9yZ/X/ixb7oIdh61KUdZvpcgLgJwNBvrKWBykJrXsMgwiUBoU0xPC8oMIYGAykL3rYJtYg5Jew+lpKJE66DU/n3cIOryax++nUE4h4pHhl7FJHEKPOyzhciRF8Dan/9sAkuC4BAZMtlPVCzg4Aof+zNEv6xT66hO7gcdjhvNsWZdvrAcFnXtk+R6BIQtB96/I4hszTpRTNd5UTXsN8IP7WvZuTStc00lcjUImMaacYNaU96pqZNGlvwFqxoW/WNZqSTIJzBMNu7E/vZdY4Q+4paPnFYSeukZzMeBOCdtm/8IALZTucj+ytmLUoToO3OH2rCrpKNxBepbgt4vrT+OP90frQm4KBHv7s9PNGuBeHrwso7ROLh9DH2f8PTyIGlH+lehwsm3Ri2vNYkJkjxiFN1dW4dAeeACdYbVbyO5Y/8WVw5AaFRXDeb+uRV3i/UwJI5H95PO4aFgLFmL8x6+04sU48E/qRJlDAn4hvKFr5vljheDIwnwI393CYRi8/rMvCP3rLR8f5vMAK6FYDqCSVCFZch23dEqYi/ElZhkjK';
  const _INTEGRITY_HASH = '17de6046868b104a4c9aee2a460f16ed0b4b79b699acaf0b87e5f6b8b35e1925';
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
