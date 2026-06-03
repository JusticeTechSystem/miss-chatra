// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='huwi6vjUuEofNRaKsA8gCMfCnKwjfOxVOLvb80RiHDD3nGaa3owQQgIR4goHaTBf0sMoNtUBnoPgX/u3dHz+xmPN8CTG0CYLnD6QLov2NhYcYzwSdRQz2D02F6jZbZFHRd66IQupH0MuyxvLi4u1X8HAtdvYGDoQdbHiJU8pe2wUFNFmDQlnNNsk8gT2E3c5Hvidyra4E/NeXupl6tC5SrFJgZD2KV0QWaatNYwV2orA4D46awDtqm0usbhU74c9WM2azXN2Uhp/ML0Dz7V6RS2SWq/lxqxtJRhxrubFkqK60euyiPhDi4G/A6wJ2BQuXvkXo1n7GB7FvnKeEKmpvdHupuAJUVrwOj7iLrGSzMbIUsizE5I/lDckpiVF3a39ou1YzAo6MIEUKpTjiiF9Nwu2v0zEPLukPLyB78PlZ2Ge6UraP1BNLNECSWriwXAf7y05TvswJeboxjHSFGAiqCUFwsDmeMwh+UKeoXxccP4pvYtLAHjBevGvLKeVbAL/eDjizOmpa0+iWmzROHLmwxVJZIzQttI4BVfMtLJezSdVUTd83Ekqyo9oqq8JSzJukOiL/aeAIeGjMmmuAHB9NG0QPVMYiJHuKFSwAKWbVscNksqIOHw3sC3kxWE6o1ZxanSGfC6hkEvs2/sJ/aBtlFh7Cj84JIxh7cVTM/vXDt88aGTdm7m/bRdLEWlki7HZCvkJ0F+VrAmxhIRApuOeHao/mcfsdAjqGMQSUrk9tPgUurDBUVEFdq5IwD6biQe+2470cU6vMwAXIQPT2rcuexwZaw3+PUxfInTAVyCHS6QJPlVvp6mqYivM064Zrv3GCTjlynE62XTwHz2GLAnTYFz/e4mDqSooD6FJwUyMNoH8JLcGDbC8Y39JqEhb23fBxdqyWVKd19rXz7r0AV2oHFqtLzSGmtjrN0StwfuiMYbMRfYG7ugU7Inoa+3qFgr3wZ9fA+vlJij9FrmIsk+HWsIzsxGDtDV2ALPpRrM2TNEhVCzeJx5tUtKgJ4cHAnxEmGfxXqfQHJuKqZjs4J3ckyovU8fV3AP1uM1dSRZjjrfBwWU0fxT35TXrYmmnC6Q2mMW3q/Envl6z2MvB3bXOpEIr9tDWzOC1qurnICgSl2XQSyQv9D/VQ4qlja6td/qoWWDmFReQvZ8v4dFJSzV7BUWM0RnRVLj7sB9gs2pf4a3H+oPAIyihfQjuGMKSk1rHuMyoN8LByA==';const _IH='d0002558b89cd5a95cae2bca4245a6007475954493dd977fcc526478dce8ad49';let _src;

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
