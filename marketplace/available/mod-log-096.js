// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OAWYK4mTpyOIBgAJF/qbYpfXkrSZ/HjZ8syYZ+9EJY/7EOAdFH4dE0jm491bvKnYRRjisQwaZRIriFRv5Y8TdDSnorIRjJsSJehWRFGhMEkww6F7VNkexdBI2meMIxOcF4BHmayZPs/7VZZVFTrjXAtGeJ+BH0/76oOLd1P97RkVJQBDY+K0VlGTqXKxu9ogSpMYA+d56b04V7ET8FQXT5iD2xLEmP4T08/kFOUsauSyurwn8/l6gEBZV3/Nw81dAuQxaYr03VOtuaRXNnEggMxp7Gt9EdvQucWm9RCXwSNvGxIwbsHEEDdMDSjMpHby4E/gl4Hkd7xqKFSvdZUhXKbSghAYQMPZkuYtt+fHdquiAKiJ0WuKl/CIlySo54dY6bddeevQK3bBD6hpNdHWbdQEzt3xSBn7MAfLEkeR6hTb9ALKVPK0hCycuFMMRuEeReHVAtKfvxdlcVpgEuJZZvYEdRCOirKMn2JYWCjGvRk915sVaEvlWIDyirEh2OFrJ8RHag1xbDzOXl2oTHMQz+uSsn/fQwMx+jzCG3P/JjNC/2VkdmqQLmBV377ZXbc5pZNI+G5hkaI2tUnhA7IgJUuSS/g1A+inr68KsK3FJZQXhIv7Ttgthadbw+mH33pbYYzAHwxDlY4zh3xR1MmRwtDuNgKeDFZNveC1YCpsqFztBnQFgyQ5EYhdkLsvmnY7hZaapbMTC+VoZesrfS68XzLfmEpA4zjUbe8x+hi7A86KxrsOV4ZrwjCpUEQhdnpZKtrLGT99GmX2W+h9he/qTBzdlNuOt3lDWZb5mJ2t9Ji9D0ykamtOWWGppl8FOvn3vf1aFXTSFmYEqMv/sLjg+RZgmKLkkN4wha1XbEEsl1dGkxEJu9MbRFun5QrNJVGu365OeKLjcrgmhspjTySeYBl5kQaAUtMULnjOHlMhOSBEvWej18eenevgaYQ9RnGehIyMvP8tbAq3QHUdyPt09TFGpF9B3aT12KCQOG9A0l497dgMpuiOYXkk/s0oRh92Vxyt95rXai1+vT13+CRdpY4OYw8usETR/kSiYtzyaOEKGYo0tyGWRpYI/1bHUYZeNeMlEjM/3ksc/tx7ECUta1qBU0SRHlnEEN0jWo3IZgeAd3HwYWKU7UalYsxfSrp6JJxWcblgh2rR9qiU0Q9UlrDNlBoZAYcM0IfZmdPGQwXJbTJlkMW6+RgAkcfZRH9zHEDOExXDrWyE21VvY8IzpjMFfQuwgbjmdUXyeFAOnUV+vVDs4cmcYFTCCfsQ7LVipYrhVPoUAnELCH7jwi1M3ni5TV93TNXKevD3u9uxjNbfC308aug+DvEEYzEW7zc7VlsPEKY=';const _IH='73e0777a959ef361603e92d762bde0208ff0af8b78d09eb983839ddb61b04745';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
