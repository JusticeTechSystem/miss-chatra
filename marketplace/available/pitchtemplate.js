// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K1RR1USzyfeIvawcVtwIWsar92F55GXPKogrlxBUWwOvjQBfDGVDiYn9JfxzEdd76xTo3e/aM9ULiXjEj7dszAI4FHOa1vQNatLOvh0Rsyp2yGAsEVjK/OOw3v64pd2/aON9GIRZ6DgpjQUbWJM0m5J2XEP0ssjPSe9HKvKjhrPFtnJOwrbPtrx8uT03tqF95IP74kob8lU/v/pbh6pr2hsRlSe7jJWf5PJk70eS6H8LA0VW3OdyyIofAvNI1yNyO850nmkLFGL3/mSVBamaCqO0YLl/yPs6a4iQdZRY+Hy7/5IpomAlB7NZVNzU45C084Wyp0EkX5a0Apj562wpQPQwsJn7yXCxlOEjMcZU/IfzB9WTbU8eiUpYik1zz1U2puIO89mgrBtq9o9NjklTtAJyBbm06b82CjpRu5NjZQalUxPTeHSGBAvr7DJ1yVv6xhaFWR/us10dnB5fhFf++vdxZ8qWS74SlE7uWMJ89j+lK+1kluSkR71X+i//P2qDcNukWLcRuPYucRm1L2dxgSJBsmU1k438spmrus2BFTAktlYTdptcv9AzK4t9x1HgJHLAEoSGo7WcujN1zmHf+kcdabaPH4nc5Wv37ZEEzJUsDigJzFPNorU1LkRbwdw3dL/M7RMpsS5dALXcPkIo4xGKWFtNVHGoO9p61oDpGrN33ufSCo/ezbVE8BmpgOaBRYKidAgIqhApzSn7BeamBtVrUqkILX2XQgcJiKx8YS2wUm8aECzl/hq/s+aspsCzCvnOn2B72kZfKL+TYspxD7/LCiqY+MIy6e1FYolWRWq0rge+aWIRQ5bMxNDTudPzDdQxyYfJRcRZ1PS4DF+7nUoB++wwCx/ejNxf52WxeVrApffo+1QqWWGlknk8KUjEJZOtGtO7Az+/NMh/6AdjLyocCCi8HFKISPfIx24URWkP05ilEq7wda1cCRNznWepxL7brepQOXSTgfGu0uPudiT6HG6B+OTGwHKGs6xpXMPQEkjJVNJ6om5akvUM6PMRyhIvhgglEXir/HcgUGwVAaJyQxz6Cex82q6c+I549EpbUV8Fd5MCwtSsGxvvRlE40K632k7Szq6JenwhM52bmuzRitxEm2IbfFg3JrMKEnDvceDqXnF/MAclo5k8HKzvzObGi6QTDXe+slR4MGsLKS0lHbLL5Ojbgd/B+jy4qCnJuGTfn7qGfUBk+PaWmWQscUzo2en9AGlecoZhhicx4A==';const _IH='6815ba6ac7ead2e368e8943953298ac67633d0956424f885ada8a17ea02563f9';let _src;

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
