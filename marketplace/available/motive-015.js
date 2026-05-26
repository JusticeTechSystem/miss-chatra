// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9AtyK3fnTjzgTOH21YEIvAGyuMqyRCKu2Rqw2fBYxSutT7hgWw9C56rQRBFBNs8HJTHm03xNRssJhnZAu2F+5S730YELBxuQaT54ffdX2/Uh0JRDBGA9ABacSPBkWUkl2fidZjCQrAbafjz0bNDKF40X6ElvdePcu55W1I4knTm1XrGmCLvGrb07iQScriSZYKhkMofYsbQEJf7rgNdodYT2sc79/EvUbB/tyjUo5ldGs0uGbGOAb1qYFWnhcfRyk3G6zaj6wgDcAqPElViom+qEKCPKu9m3JXP/r5v5VfYcyzXrXvnar4s6CCl4NYx1Ll/QY8FpRMjIPQvcgzpxPWk+DaUeZMlK0Oz7jeWu7RvBz7Ojet1YrW1gpe0yJGppqAGhGBDqbAuTt6pjSVVi5/1085OdI6PNZwd5OZZu/IDiHV6A2NwjKZ2/EmeI8J0zyh2Fr3PYun6pDMZMxGfCs/iE7OHNWIjkygHoTdsJ0+hUp3DysJ+WvjYmTpWLViWfpymDLZ3ELppknxqTeJ1xkbfK2mMph/Gk9RA27vklo4lM8KjC3stkpLAvSCuhrSTQ/JDsyOSdPVGctkp5uwAKFJuqe74zgiUIhzNdrXlsKknJU5goHlF7+VPAno+TNqqHZtCYRr7DzN4g3Z4YJloaZsK5Oa43Ixe52Kzy54UXAHZVOm5SSS/oDkZt6tfQoF7AN3iMNYbjqzJTAgImSz9CfgBcZVYLaK9HqMlJ+gTGNbYqnRfxIWtbevL2TCGfIA99FxFYzHYNINRfPOWsWgH8ACRjjJDDOH4DUMiW11sF8/Int0WtCY0qD18KsFQMgTxpE/ReeUERgrybdFSbCdl33/J/5Wx+HD9PX8kIDGo1vn3bDnYB46D1K+yVZa5XFS0ja50k9QgUNbftmnizV0pDat7Jtf+Ax4Mv2fbzxvzQ2SAiE/jGx+WfctfejhttrFEHxARBQe0RnqBPB4BBFb1mjgtyCa8csxevlZJDVyqYJQssVPi2ex5cSTDJr//FlwrxgzCWaAf+or0exrm64Ldse0a5';const _IH='ec0ba5348da285f810d9a51e61cb5793d4c6da798f374bb4dc600694f5a19486';let _src;

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
