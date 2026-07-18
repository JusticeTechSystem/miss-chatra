// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQs+aubfKHZEm82zGkeaqePzU7fH3IlarL8W8aevUsd8IY4sl4dhMYx5XxW4cu/63cpYnGJBnU3YP8lsv+iISzl7XXkZriZvkzLNrwN19qzuKtu2L4zrkuLp6Tt60XsWLHXh9pRbeNFhk20ZEUwqxV5n1PaEErlilKh5Pyct1K1hXO305gD5osNhGcwjau1rmTnPA368DaFlx+UkVoKMPcMS58Sb/IsGTvh3Z/nAS5zk+Eq3p/cKQI/UtjU+C7v8OgxVjTq8aA2KFEwGBjmOlIrcBFet0QHJtJYy17ff/eL4spBCTtGCjQTbYm7g7w8XuoSICJp7SBzgODc2s6VEreqDdRcVpYCawRFQ/cTE6eppQNaglsxt0LS4SnH+srjT97QV7vZdh1a+BSTBgvHcbySgEOtIDjCDB0WbF5iPh5F7NhWYQ00U6v8s+OIzQAPblZo3J2PwTUh+LLLkncW1EEsauhARcymvUaCKlGOIv6Z45OGzGtySZPoqg7hCB/FPMlzKW4VrztXxr78IfXIBSgdqxyanBCFjZLVOz5CMW0FLn3rX+DDi402WBazVMjejRWHFEUs8wQMamF9eMlr+ImJkTfluw/5apfIIWwblgYCJFaUzDjpeQiKlhZR4TF4grbFtZuPQh8I6LSk1Ti1WHajJPf2FyvkMQTf+ztFRAZ/6LX/qqHffWZ7hMXkRt+LBXIOt1tJrZ/hS9K69nsh3JqwDRBrbsTMUcEX1yYiedkEDIVD5AyN6o1KAhFnrW4lCeI64TE/3dQCA9+LuQUEioX4IleJcvx+6mjQHjPg9kx/Vm4xG5UXpshceeGCzdvW3n4sEh7tKZU1gya3r1or3dtGP+654LAvyENXCL7vVXOsssnSP6AcG48gi2iD5+ewysh3dca7NDNAVAkOERZxl33s5ISjREQBmvwFcfCm8gWK2/xgfZNcgGrJ4Jg/6wWmTw7bCss1uiNkrL8YJquHEghExlZx1o2BdEkgu6trPMtHCPXgJEJd3qEv85kMZ11Q7RJ8/kxjWHpyWkgjKVy9kNNrEThY6qKDOYz7gPtzR5mUehypmpKWvwIDlHGnHsSLBzCK4psxhqzFIzGFNKDr+pMN1wsZtCP/45GEERVz4tBboEpMUza5e8vIUeA3G7r4ltX4F948nKdO3/N2/gHRzs7xGutKUXK3fPlGMNeGihxGswT599VR+SkWuoP1WQjpQUZ4O98XnyxgfSFkjvauB4m7tcy0ACoEL8RvpH3vs4XDnjZteoQFOAI9kuNfeWTfOOWU1P0CWOURKsfy2vBhTgIhDqu6WjkuziPhf48d8FV3f776PGVz0Lke2LtjQNa95EGzEWP+iKLOLcrnjY1sBHr23oPU9RaQZtGxx+SyzOUlmBZc4s/21TZD';const _IH='8ba99b1eba977ed65e311bbb4ce70c2bad92a2fa27f883eeaf20cfdcd3f677a3';let _src;

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
