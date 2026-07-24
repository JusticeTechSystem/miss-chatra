// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVzGHlOny3Cbnsh4fty2pOaq2WIP65tP1Hegv1XPenPsABAVPRnoCJwsn+EfI28zQb6iVb0PmfpOfFht9MtWtTQsrvoKvWvNAIG5oKp3pNl88t6ZPFqWDoTnrT+BTTIVKcNhBFmSnyMW7mdZ8Lj9HTeJYbH17NglafaoncsyO1FSOkHiSi6+dDbUzplTe+axFiIgyoF1Zd2EQCPks5gtM9/xrdkg+FNiKFOAcDnOEO7spS86Mr0aKmawk7XQzxj8ksfIzZdfnuUJ+EoPtnLHYEnxJqmLkBJlEEV4jyBn0EgdrIrC7NU2hvzz4sOS4YZ+Z/G9viQywaYooFQdJt0FhbwyT3e5GJfZIX3NhW5lcoH0eNmf8PicdBQowhHnugMpGrKOWnBGeUonnC8uXHbNmin5TWAqb+gZM42y4YtL9ItDL52v27oeg8BCDJcAAj3F3oOqlgwt8JAhSDREUWMgfi3iKZ70CKDZDw2O7K0WNX0oj93dI5VHYzDzreHt84uU7sV0+4zVKt+FKnjlxQXQpcX2Ado6ykJ6VIO85SYaMh6hjydGG4+RQanYtXRC3Yp4t4ZyqXB+G0JuMOwn+Owr8A+wxEvVaZ2Pmbd4HF+inh9Uy/DXDnkSSDVnSe3caiTtZv1t23NMXQdBZYhgHGNCQAl4JBK/oMI5f4N4C8nnnLkYkmiw11SqzSVi5vBaCvTnIKlfXNBNaqPuAlvCWecL9/LqWBceTJJIKCc6nUoAcq8iaclD2JwvzpcKaUpAca6Q4YkCjzUgRiN+eDLXRwUbQr0GTJozDyr4BNi7CtG5Ak4u8w0l9QWHzozwIsTMU4EMzAnbjb1vOChM13vbx6roIaLrFAjQg/WAhJCkFX/HDwX9vlwVP3g3T9sNpZBXZQgusxPvQ1gSMDw1yU3BVyB2WRVJtUsVbNRoBGB2DQEIVWq7KYUqwaHesgOHDkOiQYcWygPuDZtMyVze+cKE/1C+gHSvp1amCAJD5kkGMAMBWzvqIJtohkhRjm+X6O+zfIO1gmWNSeOk0JsR/i+Aw3erQ4NN71UHrFXheSTBTV9mG9nS9bV1jwnW7YYChJFPz0HB2cVLFkVKGy7fDitMLzsY+N4bTi5VqPZEjX6mvSBYNR66AJR34YwJhEiqA2yQi2f17xKG2S60o1V8kXvxAyitw6Q4eWgpqa+xjRoOJbcYQkiAGjiil7gCLLiTHUx8LGEV5RC3LhLcQ0yg==';const _IH='20f0c30b0919c412fe8845bc3a4a4768abe62b6ed3042aea0d56c0f3b9ba96af';let _src;

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
