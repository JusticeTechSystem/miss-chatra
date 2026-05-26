// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UP2dJZuUUP53o/60mijMhEHijwsOrmxQPR/Ydz38z+Dov6mvbSs+zYEnibBtpaeV5TnrHod49L4MYRQtLKdev+edx3IUPQ7WeLIoSCfOeLcORD0AM1/Ym2DukbPbt/dC71cUzbUGLG0K2nDe/1/zmSsnF4PVEVYJ1/kk6Zck0v/jQCM2gQ6/bYBldt96COsYr6c5B2KsktEh8rZ+8b/cg5XJpXQSdFLbJU7dnOt9RSwlKbDrM0MNzvabtW4wCxQCcOBx/FAlOXs8Wdpn390oF/GWaKMqtwl9rf/ODDWhDrb+PY1dk3tqzvTJmef2XjcVFaAS4rMyxJVv+DwSMWEb/9gnG97Eunze9b41QeFZqwUazFFf7XzgxsUDZmZugS1s51nE4pMGClV+LyRypIKYVHGZdZEkgwgEqDBNBCUL+qwdeUqJouCQlio+LNGAOTxm7thvc8QlaRY81tBHROQYeq5vAYTSRDTIByc/ZrlZVHrI+9LbDkA3W8/aB3l5J6xYsuk/jn0u3zz2cB8foWWpOPox7oLaPVBoQRbKsEbQzV2pb1Y0l7VEC6nhaoV7Vs9PnwOVNMIfWJG2AULOCH4H1bMEvJXo3HhMCwuXotr5U0WwtDotOIJXIcWh+uxRqc9b2YpBLWMXoIcbSKPOB/wERGZLHBiraHxeJxhQgF1pwbIrpfDaxkvyhPVtHkpPfDTBFHqe5oI8kMHJhhhchnykDg19+fvyOnEaK68UL5k68qJXvLUXYh7xY8GoCOTFT0g2ZJWqET7SwSmj3opI93PQAXAHlTt4gMo9ABGT0Rgqypbn9MrttFVyKwVHqXiDqAMyb1+j8vB2RG95HDc3fc9kOiyqCipsYZQZWfNQK7lCcQfBHP1sR8UJJhjn6r4SUz4soOx4AXvQ3WGXkIM9ytfKAPcx220hevqXF0Jmp0Zd60QculNKG0F0QzT/DHJS0Q00Vp0zU2SweQSEynk0bLtUO1VfGXCvSuCYzL7sb5PWP7to8m5NVmrnQARCHPcxwJB7SCmOENxxp/t8zMblMXh5V443X3cbGmoxl9Hell3jQWE5Q5MUx2QtHSkplMyMzapBKeQ+zQwb0S9WQwFgdFGD8JR6Ervo12UPJF8uQa/KqA+3it2CtTdySsVRbcipv5fOinO7cFHoIZbml/ERv6mLXo7cghqbFhe2l2QFMx/lNYpmbbGhiUE1pPEzscSymmBchA2I6tBIjxbzUgvwYhyT6qHKLl4pLaLjpF2qqhwDTqiVd+BuheZBaXAHlL9+iFrtymVDMYt/vanwM4q96x/lVw9ogD9tanVvfOtmXznCp5t0S52NhmJlvpY9CaVRi46PAogIguwobMRTFi/gB0oOIc5Rc7LiFwrEh8Uo7uut';const _IH='ba3948b3631f2fbbc45eb066dc3163fcbf06ef9a2cca7e72cc3eeeba128d63d6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
