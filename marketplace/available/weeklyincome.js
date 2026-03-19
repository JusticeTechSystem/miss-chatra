// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2umCsoVeu9+lDnHqmWE4uPPvVrNA8Jy32v2ODKlVFMXH/MtQ7pZexVzdkr6VeGreJnPthnlnlmE1tbVqoQszMDNlZT9CAwOLzFSccHzxurAqG9BIFrWrOs7Z8fiF/Centz1gQFlQ2qiX9FMmjD3BfUk90tbtp45xahjxt27Kgplh5bJmjJyqFyTo7s3oz7qw6ZLlxKstPoNvtdBHxqvqQo8MZJi8MU5Te1Ss8xINVARM0Q5+5njxBc+hOOsvoZsEGW03CdksOo2Bk8q1t8K2/mAgsardj0xBeLEyxbFqHHgmIsjFsy7nSl0lQ141JnSb7mpYM48YgR48qnSc79A61zChsqLTSDr24J4cV8trPPUtCbUoufV8dytMppHtr1kO9yvncS8fjrvTY/kXb+2xE2RXrVQrtucCuw1/E8gXIOTFSbUvqKE+zsPjaEWTh697Uwiyrrf5fgV/AvciI0F4cSa90rh02EnwTGwGwlgRTx2onxZLDRhmJSdV5zkViLGogbQS2Rl1E1QIbkhjbY2ZT40DWCbeoFik9S10bEzMqXgNMFh8aD5Fvf6Y21VfKGbfSQMkOIqFTGTJUqzneuxLBLP5hP7zGRFXScvC6OmpmDkhv4b+mJC3DPKqfDRbCYQIY9X3nZC3w8nPOez407uK1DAz1cYkWmgR0k7aV7T5xvuaa6tXhdZnsMciXtD7SPJ89SU1DhsehjKEadKWYtNFLzDzP3O5/0HgtpFWHRz9IasdMHMJ1eSlNITvyhtoA8RmCmXRsNyc5e/QYZ03uxDNWdIM7fKxGUJpt0uSk0a1qGFhtP9TtDoreuEvOUm1BIaNNuqiN7EFybgArAr7QgVWBAj3+FZDfoWAlZAGzA0Pcjif28yf8/WenpM/HFbfgv/fZc5d5GHx+bn4nV04BRt0sqQAO1MVFM6RJZZ4J/DSmHHOuhBQ3Ayf9N/F4zHk+ysHyqXqzKr1XX2Scuxyylfq0fHYkR8kWaDL7VZt7wJAa8+XuLYeiPZ8QX3pbre7P/gFr++TvJdfKv4OGwN1Y2kmF9/MP8fl0xpU97E2Abdq1adijLPg7OkJhYPW/I/7DniUECZKAEB/yGtmIa1YXV8KVfOedE8cNaq3IKsb1IL7ijBAgcepmCtC6Wh+su5TuajlM2CuplGw/RlbLNe1wmXCvy53XP9h9t4bU0rHBUPstgr5xnBX6wfNkGtbMXp6PjrdHce3Cf1XeYY=';
  const _INTEGRITY_HASH = 'b0fff66e90907957d0f95705b508a46dd4eb6d92050a0c8b49f78756b7cd8387';
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
