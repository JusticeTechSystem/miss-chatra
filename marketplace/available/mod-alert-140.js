// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wbuJG4wbqoq6FDZw9Ro7xnd3UIX33POkafm3Rh5S+nSfDkq8jT/sjD1sBF+GDvLlReZmAvEwp0NT/dUtn9q2alNSNRI4CqQuupxU0JBR+XPUABwZOXTLjuArjgr3Jjh2CUwqSaMdX53PO6mxuoNiKfcq4djXXosD2CAq7r4FXG5GOuGw0GttJipqlCe2CkAd5DcSpjcvou14ioxnY3k63ZERdDyeuMGj71iBeb/tv+NeYYwCzLf8sbzO41BHMykIf2Kwe4mNtMRz50wKtrWGWBtb9JNpmod3ZW+V3GUM/YOg6UuaaOk5Fagwr8eSNIaUledNiQ6NcFBRsjeDy3GV2i5mtGW3vu6F2x1jsnk7xJdnoiRm3JhTL8SI+KReWAjvT8Gvp0vBsszuaAlfIyeJboXr7o/1Odk00+8Obhm7h10v7CT3s40NjxDtW/Mwn33wF0k3sMlJ1xWTF8vlf6mJQAimwMn7e+gO9xM5Otrc+U39YSZjEFy8ukrOY/Ab66vwalb2056ccghzV5cGwFDK8wI1XHkyx/Ahr1/WTaXXrXPqupUM0662/Fb1Kyjj87xui4QAOre2g3vzIoHujK9f+jcf1g4ii5ohVEmwN88wGylbokZoBlA3lznaFizC6Ny/MBvyYtps8b3ZPPhLNPsEwKPF+HGGDGXZk6CPlzTtpHFgka6xsev41ZfrKfDTyywGcFQyLoFLnR6IOyMD/lLSMut/l+9ZHLcZVI5yojbCDK/1l6xYyg2CB8+3VGxMQQ5TNq+rA7iIZ49F37Z+Iup7JLlJGzKgGNpCMKqRep9Q/pUwnptYdKT4hsS/8RQVIMERmW3K/q2DS/A6t/EYP3I8OV5VCqrGZrIXj1+cpbUK0XziMxXttUYO6Ju6VM0yPbAtsvxOYdvsjzy6lqUmmH4G3qTXEw2rmsCJStcV7Wu9UNQpIMz9A376J+pOuDXa+pv9rnYiaWZ/6e/v4GrcSe78amZp5s/uRu0qrAFPyMx7P1Y7nO8I2RlX0vkcN4kieTwYkCrv2dYZzI0ZfK+6cDbgr6RUvPz3S7QYJG7IQGOjq0cPo52hQEvKV5gHnVvbxKcqIPlXMe2P6oyZMRDJq0WgeYQiRAogE6A7T8leRMyrtqc0qfJvuLn7waB45HZYOYgLeETv3UcUfSQrZ6EPF7I/C390zaCeZ4rGUboA4s7zZyJGm+dSXcCXKfNv0pCpppWIiSV37E0qAnquWhWMkQrTp4GGic4V5ZCalbou9soRyTZv7a9PRl0Fpq+Sk9aVK3Vr/YD9IbS04N1PssrcDrLGF5VWulNiqUI8xbtHaoc2uVWBYvdPfJu3AKSk1ZechYR7nUA+429pnVJzeonVIU28rsLORi3qmZ8H673Iheno';
  const _INTEGRITY_HASH = 'a8a79556573f9fa41df64cb37a89964a7a1b01288e01e1c18486a5bb5015026e';
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
