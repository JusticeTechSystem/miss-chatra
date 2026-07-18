// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrBl8WrBdegxtjBmpPNkKuPiQuQ/NHad77Cp86KPp6XjXZo6F6E66a6AKjlSWIVY/3zTNIyTfd1+EsZZjWRcIA/wcT7v2com0oExlLy8qDtAe9xZhtpQOG4NWOunaK1+vbmlGtFYnQPikoDPWyXNnTEh0nmFlpoTfDAbr4L7XbbOLKutsJyvKkiuTKN4xTzBL7IyGe3ql0n7u5G2DZVjOhac1z0sqpsTxTbdHUJvWeuo+QYvN117ma+pqxOJMnaQl6Z0EU3p/KpovVbWxPsQWvbuC8xSmKBVYvSJvNgtvLRgnQxG/dUhEdDR43GPnS1gfFyVMAn7AlsW9tm214DOrJnSgYd1bz6fclX37JAKY1tZwvzE8/aub1zLBhQc01gFdsUuetGhDEayU5utWsxfan7z89gEFNj5zNjkIOMFuZ5M8jVf/JEFBq4Twqr6Pn2Mk7NqWqv3jLhO+MYPxWXAggVobkb9YZTuEi7ai38ZyxcrrXK3LUSO1YBmSGql5Q/g79W1CEgELzhXa0gvGplUbCu00IhjGYNVnAMReDnEw4K1TbBWwqVJl+w8CEgIj9VR2WPI6Vh3WOf5nx6IVu7TsoC+3N0hS4QCI9wcRajm0Jv3PyefObtL/Ss/DpNSE026zVQ4r240RDyFo0ZzxLxyY4yJ69tDgINmzU2Q9ALXN1L3hgAtwMzteIqpUrOil67PDQOEo8JvBQOFb+9SrbOCEpCbHstN5oJQrFnwp5PE3SN+whysJBgsgZ46NeWx32laF1zk5HUqeiQgD7YDSNzIDO0XjxDr6BYhTNzFpLzcLgH3Zv1+M2aFTnp3YqUrw++7uPOwfsKEtwyDYM8vynpiC1nGi4YKb8Rl+vRDvhY1DooTC3nFMOitt9Qe5QmzddCgKvKdLGGRQJ8wrn2khoNQ9oZk1SMn8LggpNConFmR0bh2am0PRneVK43EcOxPrGsoNCnveI8dQN+Wn/ZeBD0ZolUhn8qQE6KCIEVKUaUVrzUljog8DdmR7x9AitDNcE8nnztWxTNDR7IY2Z+RajFLFhh3xeaeX2IdKcm1L3BvpijqNV7BpkAaIfrLEQXSwMOekkKN3f6djHlPR5cExllMhTHS3/19y7eqRLsxGYQ3b167CxiFsuGSJKMAwTOWusMgwueBgFJCvTbnd6k++/diXrreNiNcd7iXz+xS1nds+bqtRMoKVxi+XeTCE3qRO5liS9hNobLWXwlzwG/lxQBi0QJ/vr5bxtz31JhN5hp+z4hQvuNEm6r5hQGgNQ0F8C7B2u1oGy8nNxL327w4jOpgUacu+Ny/qkJbVgJaznWN1DjTxEHVL4SKKMnfJxFZLPMYHP98T477BlnsT70tmqZxor93jsoHRr26QhtNwfsb0t6na1aAozOSEF';const _IH='9be9aadd4b8d90d95474b0ca97d41d509825000f2138ebb505871d93b1fa4cdf';let _src;

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
