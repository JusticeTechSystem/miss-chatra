// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rQ62Wrzt6NxmuQ87dGaKa2uGjVf8ODANXBqZf1noTkX1Na1+WHdbc5GYUjq6O0ICbwNlE8aEFBahO5dXFmkiYbhNPeNxWYbtoKx8fHNhVh0GS9On7aFHKXGgWPGfOZ3WB55oja2ar3Yku5ma+D3bTZDUz3pKS8FYrr0KJTbHOXII+Uq2PIpfWKMuHFVLDlCRKkNNbql0ADfdZdHssmnD16M64+O7VciBIb/vr8/R9FhSkvjh1KgVhqXeUSXNlkigHgLO05Mp4Ra8jpC+3L/0eByRlbA+NpRgsr8nkpBMupcc95/WwzKzqMyUlW6M5nrN2CYV4xrC2NjdhWF4Jvi1fT+zqCi1aiipUcxaM0X6GP44HIKNk6RabD2Ho24EcJKGyZVpcPl30TvitA5YSINzaG3XWknLgDfdsCWW82LD03wMqxr529GDcLU6IlL/CTd15LsDVNtG8j6Ii1ERAPaFnQaAqos6Rw79eK9/s8FtREUrEonsbkwzYwz5zO7o3+wfrV0xxMXQFGfSZwXfsKolKnm/5VFhgCpxqk/2T4+1G9OemYK9NoLyt20nfL37ZdnClf6kWIlYnAnMJRoUlgBRy6DnpeNgARyxU8dLDk3nhawKjBiDpEr4EY9A8nH4A0yUS9ciWF6lVX4b33xofDEEczeTKx/UFbvutPX+p6NUsmOLLB7QVXS2veXMlzYQk6gmnrl1ZNyc983TqXatGpegJh8mPwFZ+FB9MJR9CiI1NHK+IE8Byw/CtyJ7PbuXIxcNiKz7Jt2RxWAv5IUN6zu7Z4r+ElOoHFapOF0HdmqXWQXN9BxUGVAy+UwV42Mj1CZGsw2mgQcecP8669GbyaawUInoIXnXHIauSAC3tdIFRNG9HC8MNAXjHVGPG61rWiSjxbeWceo3bgEv1BB6z9YFMcSGDMo7Mf8sNGwtyCLwejzj9zYMQLNEQ==';const _IH='4d12faa9d40a2070bd88d05c95c13597524ad4777dc65dc67bb946378cae9602';let _src;

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
