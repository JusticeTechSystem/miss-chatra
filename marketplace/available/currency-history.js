// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQco9nbp5pgqnTiY2otA9Y3e7NohXXExwRnXF/60BSJAAwBn1KOwext4sDvl9Q705WPVyc7kvcoG7OSmP2Uhzk0MMGxeBsIokzFEw5RjE96phm3y2k4bHsmvfZyHMfIk+jcszqtgMeMZSAcV7ySu1qeQpT07vI2xvE0ws+Cd0tYtNBzH/dlQBypn3pmpNVjaXnCk7se17dnrON4v3khSH0mly4iCyXLLWIjGV0h9sJrZfrT+Qick6hfO+FPYun5r7ubhlxLyfBtKgivvDHf8e+hbZh5MMYONLDcgjXeWWuIpKAqVoyMS1mgFcS8NCVUwUBL1P+wxEP9fG8TFMXA6fJP/BuR8vBsSdUJHybUObUPdC1Yq/jBTaJ3VAR/tNrCH6TEG/OT2AR/cIG1KYqKssUOyvzQ/2Bd8S5+49FCRRtm8x4N8iIFJgAHLdsrjh/v9agnz5QvUudoFtKPiIoZVC5LJuPHfq6r16yV7GecEThNwcwdVjqKARPJ0Kk07yDt/Ortu9B8ISY+pm7pKuahxg4xz8Bpjl3UUU2mLA/XIqLPufEhBNVcycgPpV0DcL3vzygpW9tP2F5MhxfmeYEO9qgWlywDs7Ar5vtLlwGJ0YYeLFEpIlYpZTMMViqhy6CLNTyY7n4P6M/3cHDGM8as3YndiihqOTEAX95qBMl/fPFXjssZVd01Kp2TOivQyOIWs0Zh+bYu2xxDFegMvDoEXJLSwDxWOxQ+Q0rAcesrNBYJ+Ua+c69bNGSJCxvYpRKT4tQTC+klsb9OL+AQ+41dxBc/YnCV0riYYMx1Nyq/m/aY20BQFBdLrhItkuAnqf88rT1IBECmU6XZVcL3/XMAkG5fk50qHh4ZBcIqqELjKYi1CoNZhrWVfHSbiL7gUFuyCbwifJT3DUX6Chby3KJR82gou3WllcMugrMHddFIsQ==';const _IH='9e837b9343b91d623765be007117a9767e484a5e69eb450b3576b312e0bce921';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
