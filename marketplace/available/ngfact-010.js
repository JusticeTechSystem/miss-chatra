// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEzWqjr0VKozPDtzerlYLh2H4Fb6zsJ2n3/ODtBQ55kqnnEI8tzaPpyWj5Q053+h4wz4LHpS3z/sZUEMdC0oprGLPxam3hVGyE3TWspywnZXb1v5trB6kByEd+EwrAIMSYLjsY3mHkfzLgeWj4wLe9NnbbY6705xH7RTzt1LrlQgxBgjiS1wIwsSCQ8jXAtowWBhQd1rpoeE7aXR9gRXBA7fGV+VmccHHbnGEkThLO15hDWXhrw4DrC5JX6f2neCpPrEFJ9CYYQumskeBUjrSO0zaP2KL3mSqIPc/rP63mlYvDJq4T0aelaDMUJwaZJ/dj0gxfnn0zSkYNmGqukF9CS68ovvRemNxfDCZIE8TTOk25Kaf2PRTADuJs4l5gZopEYZVY4N28YGYOoBjeouyTShTQ41mygMrWOPHZlK0xj+ufFHrMmdG9iZZclt4uqql4ohyzwRN41N9Qf6e2fu5Uf1KA8T1MyoW3YtAzyE4WHdmSj5nwZ+MFb0/Cxcru4dtAgIEcvfWyNMIRVjzrVFvf1GXM8Qna+iHm+0+7YA4QNUIGmBllFJSTUzvnKxapT1LD2o6TTUkb7tD7YNV+yrbgAO55/98LUbMHx4F/Gxvwj0Ch5AjrmI4i5GtwzR6bFcDBkGZejOqH9Mh0cSBpSQKCucUvcv10e9CymKVef3IA4AdlCzuS2n6/26BOWgz/KI0KUP0MUS9snw==';const _IH='ad2a66ce7093ea82254ab0474fa3b28037a7f421f70f558ce5a64d223458b8b8';let _src;

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
