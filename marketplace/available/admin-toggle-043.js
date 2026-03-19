// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KGrOo/Ss5vgWjXeath33UYTwY4YyhRGT/j048KPr6q6TwQ7cQKpbrgIyaDNdCEmxqtz+M518s+kUPObOXNETQ6knToomHkJCMzqFQ7RFUPiMKpi+Z26Iz+61TgsaWJW9kUOmSSDA3KPNkkO6Cyr2PZpGutrHTap7Rgffmj8GNCzJLQ+hZSH65RHdhvgpb9pIDQzn+rbOLUzxzFIn7xUPialVXzsuh2fqqNbOaH3T3UDIjndi5BMyz+IR/L+CjxL2cndfKZ6TcdnHJ0GEJhjEEDJWFgcsp90FpGYk90rZdnMtU13Jts7oxtcRmdsTxpWZWN2VoBEsuBNla33G38AcHiDTmdc5MuvYQ+aMufN0m//gpb6+9lhxDfCh/HzaiQGMkRXRrOg9WsHdB8s8HhdJAwi7AvAq7EG4ELc77VTF/fREUsqQFeOinOarZgFjG1fYR+9m2k8Jq3s1KeDR5IymUBqs0kvOlBYAKGQFSk+LT/r3wFsqK95RTaULNfzHoknX95h3e25DEsys4KUO2WiclouBtlpyvAD+IWvhoOwLo881iKh4CzWWGjvN3708J91AfeyrVOdeD82Ku0TTxIlJkD+lgdPoQbOtc4HAFIfWQ2XWNMN/0qIEDnJncb7Cpf/gvmM3/9u6feR7msiZKjyVC23hgkPb2SKaPIyuT/kEcJJczxiP/MwYro9yBMP55MwGqaVt78ozYqNdnY4pcuzzh65EoXv7RNGclD+BxZejbg6B7/lnIUrk6IDdoSCkqgsIMgVvvsNJOEOwLO/Y3fgn3jOIXRr8arAXbOEeJUVyEd5iHks2aP9hi8aDqF1yMVkpqH7Kdn91V4LIXRFd9N5nkelEbvt6IkCe5/si2qW9hjX7dkcSZY93yt+hJa9brcbTaVQWgdkD5cQ1CU5QYlaFkXr0Ws44E7ly4DejyuftNZh98nObxS9oMy1x/IDvJ2vJRKn1EFC3tab0qEvyiUR9EpIUtIigJMvYpip7HydbwsxRXsYHeSC34/hPM16l';
  const _INTEGRITY_HASH = '7655d24346fd070daf10f1b16d3bb36c4afc13c2766773246db054697700ef2f';
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
