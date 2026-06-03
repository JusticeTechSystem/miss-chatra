// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2CXyz1SEItzhM74CJfaMLnnAUSF+yNaA/Hl8IkhGbfrOQUTtOay44yTEXvTH3OijEeQORPwtcc0mjVtR3//krAk0vFeAMQDrp4YCJcO7fOY2TJy8oaITQm14jjVxy1DVrLPIOZ7yUto62nCFofVMPUFRxiOdybGqJnvJ5QyYa63Nt94EPrnPOHossCtvyyj7NDv6I/sT9EHYomWGyQA6hO055L7k1TvoxN6l8rx4wP9Cfo6RFFfhfUPoPyyUycwvKoTTJiS/+TR2X4x3HEuCOuXOQTlqMG5RCq6x8qkpRWoZXwql+aBJ2+MuLC6ntWrQJOIth8/vPDycVYmc/tNA1sntm2JZQyTPBoCmSMeE06hNTmdfnMo6rBFeymmIPk2i5VNYfdP6zXNYEyY641+bFPSnQHAVHRwKmb/rzBN1+C0Kwvb3nBMq3Y2laJeWMH+PfTN/jMYTu+UovNu+dkINJoIi4FUHA7CQi3LpIIj10Kan3afegd3WK7j6C5MG22DmIDz5NCln3rbz6OAAOLLEHC8hnBkIqMqw7zS2O5NVAS8P04rx/zNcwu84lr7gA3WEkzboFLyKPL+pCrQtU1ymHSBuR8i9gdZbCIapqXLAKajqbl7m0Tk8uE2T0bnVu9Jl4b/8ciBVxnpwp1bcfiN3rK4DSz6S6Ocf9KXz4xHTR9nffMIWdOS+sRZaNN7T7zb1OFeluSnHDPWAvPYz7dyhjRgbeL88LXDIESl5ctLuQ4l8JNtzBlt+27Vcn9JErqPt/64ZR6MAI/08pebRK9s/QQa2t3KoEEBj0Hm9ZF4sXAv+eqgC4e/QGNhgK6SLmgt6Vg7zn1pCpA4kwGPo/DXNzDJSc3aqTYAY56ot4mOdYDJ+dISkTkMSw7T4k5oMA81IWRoH4JB52+gMDz5JPOCP6KRpYgt7JQ03rXPphS9kwn99kYEI0mD7CZBKB8haKLLvDc0UB204s27p/IrEuj8IKCVM1hAHxxCGG6Ggt37YqSqHb13/BaObJvAnAU/iBeNiLQ==';const _IH='3bcd7365b1176bea8bdb268a3a16c1ab0b1f91b759d0cfd31d17a736d261217d';let _src;

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
