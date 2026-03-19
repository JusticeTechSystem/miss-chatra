// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uEI0eqhvbE1WiJiYJdhkUZPhksrz+RJ72eKAlDMDMLpZ+nvptGXzDvDwh0uxrNZLKWPLN8mQ8kMsn7+7ky3rjXgloZQEh4mCbSw95tlrrdLXrz9Iiu5e3e8x5emNtut9nwRLCJ13L2hnnG55i/8ISZDkdDRhxRHaIn5YeaC2Vdk7s1XSl53kyg+DCDO3O5Xt2eNJ1DDNNix2zZgwTpBd0ATEUCOQ69ArvTw+8qiLkFLtgplzV0egAGH1H3KbgAnt9LpwArLs8ri92KGEkrdO6fnaVUohIOMh30AzfysJ5KixsQNVafnBOcxtza6Rcv0kiDK/IaDhyCJMDKPygJASkucqNGPRWXMcIb398jGtgIsMZYR7G0eIITfMbCxv/IPh2T54hi85RATOKVU8H1B2Nm0yarBWhz+5j6sPxRdRfuqcxQOxQOQR7Bn46qksEaLCouxGntuVgQnmKtDD0ZmJF1CVpLsgVJHUAUXu50CPwlDpDmlKPv/aZ//NB4kFj33vilUDpGpM46EBIid+xYz+EhR3GZJ5SAoWMw7jWCTICaie2AM9KIiWqyul5Cfot+t91Kp3XscNB1fs7XAIeLdQXXDQO154DqhG5nwNhxeAUEfWhfpG1OIdAaVJqzBdb6g24fAoDKJgza5HgWhPBWr2rqp4Oq9AdymWq7OfM5pSrMBDvqwqrFlspP1L94XFscrdmIBzbrgq6YD/Lfx+iKw2l+HmLjZbTPraoTymoNVpayrsJqJi3QprureVle7HrX4XjgfCH4+1XkYvF2t8iQh89/mP6/UV9BaRC8ohEESrTjSsjEkLMKeU513aUkts9Q400cOZGat1mnnQM5qp1MfOgydMiKJBRMesHsK8HIOPpwS42fOXFCDZAYIxLX1G3oUI8ZlJ7AAHAy0+uCUg9iTsXrjj6mOA5zvAG2oEkJYafXbxA28wkwX7BoNYz2LyEQQ+puaEwUZ83wdm/hOK0WhehUpN0w7L5Gtw+IqkcxFEzeyZLPM40XFCyhk551XUexTLQQ==';
  const _INTEGRITY_HASH = '636234f83609c9c5322656ba28c72dd69c93c8678bc49602e95db083cbf536cc';
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
