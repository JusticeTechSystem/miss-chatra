// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTj7NUuXsHoPMwFpqa2HDs9OwWYRBwa0SVYelCQVAbrUS//yqYBPOOdo13DwQmUKK8TghOms6zAjFYJH7AhkWxdeu+2C5C/aQMsu8OF9G0gT8UtrIEmbq6dXYzMgxnDrILvwbLDXouu/2jdOyy+HSbGmHzENeT3trAQYk9iEEelnbRC21X1gg3YMA80sMIlrdizO5svQutYQHrUEqJqFB6rU9tmyiQ5WswSRJ3lgWPtzl1QxKskvXjiKa/MNAmvrGO/SOc2pKiUzkcs3LP7XZv1ut9zAYTYk0lxl8H92jB7Ph8U136E5MuCypIFQsEgymUuGOudgiG7uhNN31sGsFZvoXDuvkhNXMQahc7A2Jx27MSdr89MrZw98lsMGL9F2WtUPDnJqjJNqFynxTtiRB8DWRKdNzRMADNBzuqIPFjy8ybW0upfTLYF0xaYjyfJyfQ+/R66ZCmewhYd3sCUxAlUqZaAIXLBfW29ZYQltseE8u/g5+BSvYeTaQn4If2Mzn651VmzZ8D//9NH/8O4ONB7wae1LxiXErXGNqglDM2jVu+44Y+j48rXvkdqKtRisLbzp47KNoBRsQGYjTflPonVFcPtE8UwylGOYsR5oA5thYbSJCdvn8VJ8PMvnqMeOlizsaBV2lTtiMMp4obUgUNWp2uFscqxMZRimY1+fy0I/835HXHQpk8TBlRNAL8XmhQpzCgvTmM6R8w3xJVe8qxkqkgVQfEiNIdH02Q=';const _IH='1d83d05c173add69a39bc961d9333237a5191510fe46b830fb3a3bdf3e5367f2';let _src;

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
