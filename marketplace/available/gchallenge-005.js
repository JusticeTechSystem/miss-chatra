// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9/mcyUWFja+nuLU/prpA8111QOdIaNcp+RldMk4yUUqt/iJ1BIwaDFc4ql0BcJgFYg/vkUO1YnsmNQFGO7I8z5pPpzJU301ep5HgnWgQaoNp4VItGrSkUmh1Tff0x2Ox0tM2XZGgLs6z3DQDlYjO1hxH+S3xRuPoudaFxu3LU/fHyIkfWitg0NykmRctFeBQyQQkWyr9UG7+q/02HUEfBJJNRSo3X7Zg99DIMGalNDl0MyW+sWyc89yEnMb4zQemUVU1cXM36/OvOZxf+ldfhFBaP+OSdcgAq7uL5YuMb9fAZV5TIkPg938Fpox40dJl1dmImg3VENs5Nz8kMQ9jY/syzrcZvQqqeCdRbKKA4yqF76kp7RcLmOY8G1UmRHlMTW+eLSvVS6O8mnFyroeSt9Npttkxi3vChI4K/yHZ3qWamFfFsmlOmNQSYCA5Hu+JVloSyOzADUeNCPlgS0nssXArMJVustkvFapUREuJb+sm9pOblhWJ8n0h/clS2H2tDYuakqujFkjwt9vuOSHjI2wUrUADQWbud1OBDgjn4iGhPSkszmkfajGuYLTZIIO9ejoChhCZMvY2TsNfAXapNgpYLJYFRMlAyoyYYr6/BDK7mg1UUcAoHXQ4uZuLmgWG2L37hAWGT+0E9RGLUZ/Pv6h+vaCHfSOEb3OrqsAXyrW4=';const _IH='049526897130f35d447c03e6098f5636da64b53fb28879aea7db889c4d897448';let _src;

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
