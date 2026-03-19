// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c5GKFvlvnKXKWv1NHNubtq4/L+7zM4QSIj3ExR+xdGdbhqnYdSG/9M/EVYb+xtql6QVY7Yo4rTOXWxKX7MymP7ma7UWXOa6p9SMGSfgxuWU2ssQxZRUGjGghDhxDVz+0CvGkeC07QGawtEYPekcq9a0tIOEKQDxyADDHBTQ6vLgJHCWW/ly3BDtvpsDYaztQB1IHTkW4Ze+rFC7J/YoEiooJA49RM1Ywf956E1D9gLG/RqqdY8mkWEJythz9wRbZt54G8ZKlBX9w+59mHTqfyGfBm2ulV4yVi3k5b/WqZ7nTjZ9FfrkIA96BEvr9azjBZdZqc22Sop6z2Q+6OP+K+tr4fpIoHu2GJRQvi7t6tmYew0pSRtFKqXhtY0tyH4tt5HpCLdWaVdsTq4tsOHdQuI4om/57LwOQ5njVE0vQ/bjEzFc1D7w+0NKPJ0FD7PbXR9ylDn9m90f5YPmyP+CsCpC0HF3SKFAcMnSyIQyR+qhyfArbAWcEPuFYtlWeXETetzv+JRnpj43Oatj8X570FlMSwFQzvyveRR11g0PfHPoWgqaDtMrwjXYlObQ9rWfFeeFB17HdaOhqHOK2JhoB/74ZKAK/WAdZUzm09YOQ0a+fT9ah5MeREBWhfU6KWpXvq09SxG4cjm2Oy8UTnr3EMtV6KkZXahIsVbGbM6gjr76hGtli0JZ53MVzR1Ds9gLEmCX5gPqLvUanRSeaPfcmSxbyegf4JOsryArz4rkFscQW02V84bzfAlh/ivFlavDucXjOAcrqZQWcUrFax2BVZXs4ismS/MWME5wlCfhFDnV5jQgWbYTvNjZQ4L1xEOrgjTH89ZtfjsatWyqWahB77Kuw7pvbamYQAZOk0qzZipLPHHcqz713Ss6uxjV9dkAXRFQ5Y2xDzZ/rvJYYA1xYuV0rFF8qZur45MQWtEyHH6OTnUxj31PWrjFGfXJe4WDtpFRakIYUR4XSxNkY8WLVVsq8knbADAnKuujtSWvRNWvygq92jC57JnMkhHyw';
  const _INTEGRITY_HASH = '5dbf14cb27e67812c6ce01646d661ef3996a30e9e77be7bb40bbd02979473c63';
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
