// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQH4UrrjWzHlYE0+9N130s/5nFy7fkIbeYakuBxQd/enoy8cRKdLiBw0ymI78GYNU1CGQ9aK8sw7wzut1njhpJmCfBLSqV4NQ4x4cOOtlIWPxjKFinutK1yWiv3YeZKZ4nQFASAj8/xUR9ivA+1aQtcbLJ7cabkBVMGg7c67uf6mmmg2mayGrMFtz2Gj0VHeFZklkDou4inAIb6onRGs4kDp5M6fwO65tkLW5geai3TDNqw+dS+kmEBmjTYFMSNjIJVo1YkmxAAR4ThbO4GdNXrS1hyPs6bDYbqXo3lbiCsp+iiNInc7KUMTuSnMkduf9VlKf6FOExJBWRXVGeSwBto6b80VcaKnTW2QqiMA20Ja7RT8dts0wSGQCyOt4aZT5yxzSzPoN3XyFfbWxzlKT8r8uwrrhYqvUsmfkribYh4f2cRy13cr58v1fMBD6tJZCLyrc5LkXFgOTxP3anMOvnCemSPJfg+lUyG3RAQrs9dDZu04QSrBcFuWYI/76m+y0NLDlXjMxqjvh9zKt1d08ryYUV2vWqp5/NJl/iwkyDxUtqhCENrKZwsM+JnGtXq6QfIBHiVebTR5An7/7amvubHmbdrOExj1nCJkEAt3oYzWR1DC2mWn0TX9WtAX16AtSKT/IAHl3gNQW2p/UzaQWIkUFC2V64UNAL/Mw+fxOPNWozU7BCPl3jo5Jc+zyTFn/g19gvZEwjzMtL456UmwlE9ElZVBedZ/COLdBlOeGbW7PWCXP7mzyXTErBKIWubjpjuPtOZOEGJUn1+AEo56+sE29T4uBRQ+tyyL1LNGH3GuXsujj12NNvCSV5XJPFFmpkWXzc8qAMn3Rh15Lz9kB7NxmIm595q9BKpXWuKsmMwwZ3WBNISTIHe+Q5o5XhGWi0ooBx05qaoYfy1a7COs/duj1x/Itzr7amcl4PGJQPGYMPQAYaxUyq+jliyJ2yYXoE8EfLgw/GrievKEPpYV5n2wQkxxe4bJUryJtJebdSFvkGUB7cN/ME2FvlFt236EOpj6mMX5eTwaYncatwRB8bIc1PsFeidvnRRZDpK1dJhr9oPyOu9AAztXR1IPKxJQpUIdkFr7U/sLOj0Pya1pc23Hu78fG/PgxzSvOuiDr1OL/QBNoKVl7MZKAhyddIe66VF4jSW5axJeuqo5d8bBvKx4JN6LgJLifNdbqOHcnvY+SKYG6XxubjlIz5vUUMik0q040GPI73TVxDV2Wz9kOASLnuYX6UFe+zrzanMSFZV4Yege/WoYvFA44ZmfDlQYRqvYdEKWkevhlmMDj8GXWofcGM3BFJdimKf0XAYMHWmwZPAP0WRPXn9i7RtpVG2bneJ+fcdkmA4hgX/2EiLRETtzzWMq4TtqW9JLjgsIircGmW27A==';const _IH='297adc41128d55d9f6e7edf2de5897604f0178b540baeb25811eabee1fec6921';let _src;

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
