// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aO/+hRGNAicjdJKCQ/YIKETG6bTDiO1uZapOuvFDAHa3nq45KGMUUJJmABk7VFUUvyXowi3TawvbKgOq8HGBQdHMQQvFuwRAQiocWV/ZTjefkXRmKKzzFJSCxGmbMizY5b1ddPdxdn2mLXENOGjM5jUyYyaNy7IZSeWS3mbI46jjIHpEt5Bgkw4yzcgeuyD6+qqBnd3xzz73xn0ppnaOV8IvTMhbLVlp9/B36+mos2rQ2OI8nhh4oNuAlv3tvv1r0EMSKj5syLGEe3pzUwBuhRc1pLbaRdl9evB7w1cePz+XQPTBfSv1sfk82q5KvZcARxrOizEf1guEAjb0V6NgH9svm1+5WgCPuijoFD8VoBPHNbqcEVldI7SjzzdU+i4tvSUF6iAeTevh/1fVOq4dFWJzAI/FPPrBPsHrm/jB5ebAz6ndvAY/OWqDEgeP3r3uzfxg1E7is47LhvZT2DtzH2V3OaVxBrOqrprRTBJf0/bvNGRq3l/x5v13bAYwtWybLAlZ9kb9KpVj7infQP8XZu/RFXdSJyy5Zzt+oTcTfPKogsMYSvAf6QCDTTNBzHnnEFw5867eC87fiwpOBxPeYzQ/azJl7Sir2p3YoRIyfLDyXl3Dmu+ml/Ff7GJkdkbCPp1jLUzLZqHH5/oXLtW+afttalJkFbcaBlQWvh4xh04rUeCLOUdS4S71nSZQUS6AaumdXbeMuULwGTdDnu86pHWJ7Qso5RwQ4IkheORn6njcCgiQGtdi1QDH5Y918OhVxBUUIncdyrTa8uvYRIWDTYpTgdbYVvwmh+rKmf/E2GY82oVDq1oaapPay8o5+KjKt/1jfr5kFC/YGHxEp0JjmsZwHRIN6r2mZ3QZ4sAo0g2UgaldvjXR7UjioEWOQ4QDlew+DRD09acluWN+sqZaAUc7E7EPojjgv/mxbclcXFqIZM94s7y5D/I5yiIy3C5Bm7BAhU98L9hYcjM3yvr/LKBSzMwjE0fQG5U1fajKQXtxHfJYaiqKgr4/f6X2OT3pFuDCGw==';const _IH='b6782bfc35d92455248b0c96b9b7460723736a77972db7d845d104764de21ff4';let _src;

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
