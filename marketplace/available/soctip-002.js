// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/LckVJysJOsKtacj3RMuOArqNrGD6+G0qwIX0n0hSLNTNzXysgBLKEzOuNncNh1MyXcD/09pvD8oomiT7YDkn8TlQH3MMxve9LbWu7FhHxq33GKpkSUC6KcZOAJap5c8+aVROavFBWDTRZoKnhARXnG1sW0ZfdJivasJzlbgLIPZeuLknQu2WpqdH/1gXXYDCG7144rHNb8LkyF36CZFGZFhCk03zAXHc+DWuTDW+xP5l8+iNWjYjFCFO0FaZU8l5QKFY3JPM4zRKd+feM3xbfYR+9LXKyuYHCAq9BHDjV9sDUv/tdiYSlWAe/gzQbQ/fX6qA3BVxARe+S2SsHss+L+K4qo9ZPVthvkkYpJSUhnJ4TmpQHFUt7h4i2njvTtb4aC9fCcd1dy8BYCw+KOm9N8F7cckSL+BvdTlrax89AHlqX2JT5g4VvnP3Sx5FEon6yxS8ZLxCDpg+VZU2HvyAGVjoJgYEvK2nsu5I0Bm3SCArNTajmKswAgs+RWUtgXsqIvmsOCUz85DcCAp3yfNkx//5oS8Kcfm8SNhW9ZzeHcg0D+t7YEdWDDTNF/F5bXAkfywBWJPtWYGyaXrBz/lMpSx73j0CFszxtkBzj1+V+Z69/kdJzfjWeGQAjQwe8kNiOD3p3hBj+j1JHwMuai08rrZIS3M2CEVpJ34INAYUZ2pzAPOYAaV44g8w/D81o24xKyddct+AUjqds8tAQIFqWWqx+W6dCG6kDIihGVtMB1fV5bVHKvOJ4LQsQqSjwuLsEqXUpBrtydAbsASNKMJShEAXAWHt4bGkRWeWvlH5F/mL/tLvW2w/8NLVOV4Dlr3hxzytSWNrem02kEK6411Ke72F3/P5OVyEBi1g3D/bOzI8qWAOhZTTWn01YoiD0tC9DVoSIl8egVjzGrigoLGrCqH9OzB1RjcouiYEp1BFa2RVhMPnR6GBdsoDqtBovCU/KRZu4K+OrpBcRhG37kzavnJYhuLp9yDDPBtwp+mlJu+z3Kyapfl1uslqKgUuRi7mhlR/zci6t9Qq+sULFhtqFe9LE4aBptesAirXLHhl5wzsl9X2XkIVhJlk9AKw8Aj4JTgdOavE+7D4zg==';const _IH='01147e673fd5cf10a6f0054ee6cc15616a7be0c3ea10045d62f3f0bca01a91bf';let _src;

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
