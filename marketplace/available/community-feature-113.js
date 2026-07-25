// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAPUEh0Nqs/PATND1VEXz8cjmcludE8qbB/q7zkeCIFhtJjmDxREyvfPg+XAzx7m32qdy1fElnhSgKXHjs8k8piOxZ3iCtsC+D9yBqdm9qnD1th0I6kuggj4Tn6Ak0aAZmgwvU3i5asmP/pRl0mseL3bi2I0qHcWi+YYAKo7C1dlWZnqeK+v4/JZnmJIsgGwxr/9OphCCzV112S825rCpz4QjkGQz9ziE4Y3r1r+/TcBQyuk/Wpxb/kl9+w63sgPfBLZisctxlbgqJhv3kEbVpcwv8nHCzj4uZ0zVEnDqZWEjfDnNhQoFrMieVEeE/G5R4te1/HVf/D0eFrYIVKVxHluLp+vKPfcZvX14+b6VqPvbF06oZ+Psqq8iHaMrmgA8tqEQGs1HKKFEg40vkOeCDdZ07O2qp/yAC8y8SykzO7MkIMs7QrJ95ZYAI02q04TSSUBqSE1Zt9M+RIg6cDenOizK/GTniypaX5SOaHqty946XoF+GnJUufgdboHGyRIdbWvq/OLqTSpbzQOmO57LCk8eWvgtmH0zsNIgGOdqrzON3UkVYvLlzbx2Wg44ZRkmMnOHB87pwepr7cOTxWV+pOD5fW0sNAhVuGbY6RN02qhPUU/vD1fQpQixELzxCMBmaPWDsdQAZX5e7sqiwfhdnEsp8gwKaglmld+qk7/6C6uEdgUQ7ukNvwB1uOLoQw0sNzLYO8R2wfiD5ld8cBtppqNzuiMjYmRVW2CN1OA==';const _IH='7e47e360059cc6fe92b2386243dbccb75ddf3aff52cf6edc526dffda55f8aff1';let _src;

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
