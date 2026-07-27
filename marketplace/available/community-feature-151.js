// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRu0nFUOcuTvf8sRthSAYL7PVd1agY3tLS0fx1G3jA3rzJ1nQKwG9e8iu3D2GkUOdA2rMsB7Z90/9/fYfBzR+eQG+S6rqlJwyzagdd2s5/f7zU5IsOPFpljYsdmqsSxzCWppwu1+Tv3zP+tvLVRuQOrPCipyEaE524VTL+diV/qSX8JtJzCdx4y7RLI1Uivk5uj07dBs+TmOWgT3/W4y0iOxC78cUpKa6JjTkFOQtrnXCnYqwUFxrU/4RhzqTJd/n5RjkOeROxoMRHsp2OQkr5BJ8TVKVysPwKsErvxAhKWpAKhia2Gl/69/OlO7Ob8JMXBlsig+P32KxpBPYO64qjFQ9EPG8gq8U5Lorjrwny5xDMRoDhswJ0nuGfiK0aGY7Ihpr9tCA0c1u495V5N7eRcmaRQ69DnzZdkkEiHhcJUbDncjTmMB7P91LR6+H9/zElmMKxSR59YALjk4Gy5Zk/1/X82F2ZxPhkIq/uCs5EIqJ+39YIS0ETG9blERV+Tp6/S59YPqFUk82rNTxYIxYdlun1cbKx/HQ1Hf2Ibh3OEPVhxDvg5mypfl4482B2XbYMKGk2xIcq/kL6UAygYh/m7w8nqO5G5YBc3tXrBrfVkMJHc2a/xDBWJKUtqvD9A+V6dGXh4qsyJFU3XsEPfEdSgOdzIMnh6rkb70gVFGcJaJ8B1M9KG8V9l9upl8AYHwGyfF1ONpXjvVchEJvLnnncpDpCEYiZNFX0=';const _IH='b42a9b52c5a976d4c9f0c33b43d14374ef59e18fa9480a7b656e73eafe05b05b';let _src;

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
