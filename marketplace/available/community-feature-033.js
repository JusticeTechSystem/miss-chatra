// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rtQfanZYgrXZmfNtsAto+s36xY0zD0V4uJ/f3G3bZt7P2YDS/pzlQkHIrVcsNgkFMlod9aG+qUz/wiGTVYqsB+mDhM0CNCvJVqgaJ9bbkm1MiezK7fKcHu9pFMQ/ojwzgfTxSzTwfhlQRfAyOh+iPa7TgGYrXpXpoDj5EKjeTQtclnAHRVrnZsTBDXdda2oUXgDgbrl/vbhFlhUr6ePKMv0D7CVyni3KspvL9pi/VrTbILrL60TxX3YuYnoUHHaDfPS820rBOtYdMISsn6lxG10aHZiyJgP709pOmEiOR5CJxCj5gyW94VNPukaz4frspiCuMt9gwe/7+m8B0lNw5iqtAUN0Q9iZaE6HzvovaS2hYlb44kLQvIf86Jh6yoo3+PWDfeMrccA/VZQUzBLMJ0gJupflZCNVV2lb56urp7ULi3mfzhCTvPMBRQCatwaM2Ofsj/3RwO1woVRVRglkvfhnGyEqbeyw5L+ocAri4Cqhpc5OD4oJgylzPsfHHfMcW3TSfuJ2nzWqZWP3+J2bMhEs7JsPGWDnypD0oNmPfuZrBVeqTBmwFyuFhaDHt/5puTZndI8o9rauvT9XiHwGejR4Siy4FRiIXe6/Lvnai8xVl9r2dWkrluTGExJx8IsA/xz8yb574p6s82owB46gmMlRjpnQePb+ZcD7wB7q7M0nn0oUAKwQhCeoF2yEmLXgHZC33lG2ssH178Ka8cyxezizcCZKT1OnwA==';const _IH='bd208411896d54efdfc76f4592764b3cc59c374fecfe6c6b454b07d360cb08d7';let _src;

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
