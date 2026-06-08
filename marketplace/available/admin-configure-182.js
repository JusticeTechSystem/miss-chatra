// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='De2M7KuHyJWzi3DI/r+1p7dORZG8GvfpuALRby2yD39kunXW9uwIL5abveen+WhmfOz9Q012yeBqGJISgdtczA9Z3OJttc9/pKMI0unDz7BdW2Azx4gc/3z/J+52tJmuadPUG8dE45e1+Tdr8aPhw8ZRb9NekEFltYS+E9r4gYlgmI+Ded4PJe9c48uN2Nvate6tezn/rxZxyqsUWc2/vBggvX65c/OKIG869cY2b8TrjcgH4udr7CqA5/yyMAStEmA9SSxx2VjEtxWbU+OhyoMTpEEfv7zrXThLQWMEUK7GatY85COaS+QS+rJJGa+5p+IQS8tVvBY0s+BDXrwWYBt3ZQI2kBbwilrfuyU7ks326WoMmTpfl/YDevWRYw7yt2cXrgjnhiABok6BDa6cmvBTGbwciIErCXP2iIS8qE8P9O3CZ2mdLIB+xt2TzZQMbDChER3X27EL564mdsT6NdyT+N18RVRpPVftkHZP1UnZycNFt/YYgnoX1hHBXDY/DFmbW9KfnWah5Ke9ml7cL5xYwoPnxS4pJELo4n1eAEF6Z/4Y4ougv5W+J3aQmp5qPOJGRDNBp3/GNv9bohR4tEvZ2LePrdlmblq58Q5wbUv5QUNZ3S3P9Jlxw+lHNxfuLXU0QpTueWr70WPnzPFNaoXJqk1Qs+Ju3n6KApFP3koE28m7jKGUqRprodnhNydHDM4RW267/rwnBnQYYxx+tpn1d3qNlobBjAgPYb7QihbI7JukZ9Bqg8EsqKUW69uie6/TlPOxG7a20rS/uhX2x+wKYKlprM0eRFSVrLlQxjhdfEe71v/9K4CRoCTjvrEAvfAbV87rQ750Fm0eeW41s9V3IhE1awSGN1x/ihOeGJBgHR8s7HvvRJVVEjgiSa03+kEwhBOAyt5mvyif5lWV+1PDW0kzriERrJnt2a0gG7JWc5tFnhCJ0NZcsBihTqko58LmR5h9bRCYD6Gs+pylfYNhejJMCPqlzhoMtsczgDUe50C8zfVfqAqenCuru7n3H937QsTngtdC1XfWtsnFySV2TBfKlQ==';const _IH='5fc3f912dbd19e512ac1aa1fc775268cd904989aee3738d2dd46474876e02e0f';let _src;

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
