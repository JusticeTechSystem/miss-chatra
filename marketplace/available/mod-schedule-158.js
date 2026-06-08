// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vZwkF17rF6xXT7ONJrFqPmYXV7vIX17PKPOOADTooZo8eq9HyqggqxxCD+fO+XDmnC+yxmpZ0TeYyMq+ICYH11Ejp7pnHgkf6tNSKRZh5/SU9J6Aq2Emc1QCH2BeI9MyVc0AHeQ7kNlPqh8VtqBFKYe+u8VYaUjGAMKoXbiRV4FcLXOxpXcg0FMVMfdBE1gquzNAu48Q+PIco6vYvK76xrZG15JyTSFO9+guq7kUkQlspDplh/i9Sc0Zt6TW01cr+VAzL7ypn+xCOaNkrkb6aIun9c/TeO9vkd3Au0X2I7f8pSpIjM687qef7U74Mhzdfg/3oa3K2/K+Zk3rz2/JvJ2CMEa2EUvkgc1tJ2IwBPOC5lsv8JZcyGKTk4oqt3LW7Omx2GJyV4HmoFJKvwZpwCezsNBMhc3BrawnviURw+kGV1S1pXzVlADXqjkukf4gje8eTiXB+hLZ7PIvjZJsNRym8w/sfM2+c70nMj2gMgS5BQEHDbA+Bpgl+90221Bfn/NAiC3IfCkZgluYFsqQtFpJVZA2plv6DUMctiHIM955r82g9/4MV9RSgzq9ajxqxpVpVa/zALFuxAXPisCUQmCd20zL2kDqHFblvLLZ+mwZmyFbrmWMsC+Qg0dMdLMiNAPNqASYKkIin0lKu104wB3OP9LHeRlcNytnLKaHApEw0jW6kurOGW68LpcwOzTKDGWU9finIsW4kAdc4XGuC63uqwoY7roWZd5iaUIMWXM1z6SG7fYTzsYgaE/V1y2p2m4p3/DFqfoeRE1Ro/zkj504A96mNNcHTWHltvo4qWYkn5fbiFgpyvtDwHBXjZNHytVimNEw7hP9tpwto+SCmdeYr63/Zmt+NMPbZeUUB/aVmzuot4nT+79MmKMq+xJA04RedMTA2F22ZSSIfEiGpKOoQNA3T/ICdty98jxGXp1lvOuCmMjKw02n7V5Xsh95LNGw2R/WOkgHpDGMabjcsGWs/wGONWNgN8b7EbjluFPDQcxOmHafDG0KZbxsrNDXkRViJyryV58Px2p6oxiXy69aXIMiERFU78Ma8UfsJ4XNuav/8hi/27wVoXMI0udjfGaezzoxonNL/9r3jmDSpsWSDr8h7M9OIbRrt/dC3FyJiS23VHYU/syk00K7g90x/OibPD/LbPQ6Q5rknIZslMgZSYUBrEB9YHez6plpr1PSo2ihYMaVpQKNO/FX+gWXn3o6WA+LsdSzpw43CgNysO1TaZ7YN+R4aRdzt3cmFgsB+OZ30ldh4LhEPvvcIE+uP8W4jSbO7Jjw9fEkx9jwJ9JBE4Q8vvoorVFLLrPkMVR8W2QK8CBA1Db9fy71EBzGvAt3CX1MgI4BQXRlSaTG1mx2a0Uum/guk8po9+wUqmSEH9MczF80ZECdqJobOvoqxFYE3RFikAqXXorZ';const _IH='039f6dffd4f44e9373be46b036b47cac934d3fb3359a75fe7e8194a8e5dafe7c';let _src;

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
