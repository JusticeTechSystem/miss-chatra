// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ftvdkOvmt+EItXjk8T8CAHkGTzZaZ+tbZWp0fiPAlm5fWOu4O1al/qqhjKgA2oPRxvYBSV/tDYXoP4tQIgaG+UI1PpPAMHxRTYjpETic8VT6CQVsnDytY0amcjailhOvdUxrhVTfuITLqr92hjO0msE+fYJAJVyTdCPI3lLt4es42Yw2zMDe+vFsp1ArVtvOvNqrvon7qJWzbN6xBFPQIOAFAGCjGgNlc+xDKJdoQLHHNAFa46A1IiVPAWS+p7JJb/D8Zfiy+DAK1PhP6H8M7l7Jfn6mXeKBtGWIt01mQZ9KoAz7yyv3bAY4p3E2GP7Jj1YZx+Zmk+A+VHiD/cDuoSezGFhBIr00bdEoQjm8QppxFomPOxOMHPrHk97J2MqCASCfZySrkYUf2WhEmAQO/7APZGZ+09vfsx/mvazNp5Z3z4Ag75mxIgGF5evqPE6iIOI9GR1kTV1uOsfx2LMbqzldI761eMu2jXsTaXuw3gGLvmWGyidtGh1lme5JHaObgucBh32bE7X/x9Iwo550LkQPxKG0H2fiFZTolqs5029YEWT90RAziFRf/gm+DpclZWQ5YtpIAzxmF9gskBvNQJ39HqfcL5k05eAyoMCYWtR0Jr7v/USvF9YRF/k2uvcUo+Lw5LPvRJvjWlImDDQx0BL7E9sx+2HjwOivbY26/FVU+5W34FEfq91wiF/L+wydpSgBZUMw20QehGYexjqc8vjpV65tutau6EihU8nGmGmKvQGJLjsgXSEHpfpKo2YJDWEHhic0gYNJkzAA0ZDPxwi/SCCZeeuNxS1jDyv8LIOJlZQDFkUbZb3KHp5/K4Q7a5gZrSUgrbpfc9ksOFwXcA71N159NHwbb7mVUFLZogiPS9HB7zub7ZtuJsnQzT8BLpQgcqXR9Ur+drlINdDrYxLrY583sb9yV0N09z4tktGGBnfv92ivKcGzkDF9KS60nanBWQPSrqiGcGSeOnRfKjPmfRbt3E21xUf0W4R5tI7m4IqBafww+m222IYz78XXrHzIc/wg9fs/FynfBhPTPMC4ACByhXB/NhoaEwmVJMzNJ2nLaqxdsv6hWv2bVA+WQafTrIjQhxNmw16MFdALBZLofeMtcNUxpsMliR1J4fN90jj7uFtkjbFQSRxeaBnb3s1RpyYr6iVMzjtOL6AMGNCWnU3votBbTf5LYRtLltnPGa5nbud2vXrya4aWPkZBT2JzEN2P3O8gn55tmsB0+tK+RzfBOBI+212fCGKh9yyhuoqV9Hmjymtt9+Emxh0e8wNOP1zdkMLjIPO5sPIVe+FaHJXfPG4mOQEQkA7zPoz4IDXJ/x+iO2Lmgt7FcfYfdPiB1grFDD0QxzyM5pGQwCMGWMRhS2YuZCm9ULR3jQtGWdU=';const _IH='eb053081e8aaa9c8b491c5014f7b60cdf16d717c64f9374880afc7e8a3cf08ef';let _src;

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
