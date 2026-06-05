// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i1MdmVh2UUqkJWSmw22VkWxlzQ36NmHCH4/TbdxsN3p6zOuYqH9gEUngVLx0t58KaFx2Q5fbjMV4XuN9OJhpd1gvjH79mTpwp1sqxkn6pFxgmthxNTGRztR7yjM57DHW+th4YO1nwPxtehr2uLwBsDC93Cf7lkjdWpZj93HPz9kG8slV5boWok00IbATxDekIPqgFeQL7tJbQbxGrBm1lsi/tZjbGnTgW+bC52TmD1pFmYxOYNhBy8MC7Y93uB3IF4yPchgKlkFLz4ueS3s8Db8SqfPc8zxcsi9958Yy/n2TjEEbyJu8aIBNQxkmVxAvV0eagTgkmTy30nFHcXq6SfeT1ArZXQDV3a5vtBfyKGyd+r2APcqFWH6ZFXNmN6t9vtlltgBw0WXBRrLeXzLxFVIPIsd/TjhsKg3aR8wXakeFKBye85QKfEo6XAiNLWn2idcckbC6D/HMMSRSCn8LT0/C/3xmsIegSTflqiiuRfKCWd3rpSbP1SUm/kQTpJ0pqeT1EU3VsmbaT84+50rLg6LiySaxWuLJgGNWwE/zuyyxhsyhDYJmYB7xNGoPzyaQ5e+VuGVe2jBnnjXqTntGCIgSqExXoOTwKKQ9yB6PszspO9Sm8XD8XQOIp1n8PbOOjG0WmaFkSvCeAiPknlChdyev2369kjInpcf8elPilUWdrJkpcfEzVwVpmTbTbTqDlP5iGyZFGG7INgx8A35KgYtFUHsbK4ftLE+FvNUulg==';const _IH='77e35a142bea448c5c5a71ff78a78235ececd0d94c00683c83caab82ce14c8f3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
