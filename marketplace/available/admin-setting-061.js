// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlahfDz7Eyi7nHsIs4anCo0750ku7Y544lCQ+FZtOZTn36xJ8WyMgKxuFsI4sJcNWQ+pQ3l9QlSfiGZ++t7h0QmQZOVoWfIP5FiNkjZd3r12TixvQm84UyBKcXasrUiYkMGQKoa35oZVMrJm71dpdAjlHXTGIIKqRTAcRZA1r/MLKYa7cciPZdKUFEcKD3yKmYm/rXvI23AvesGwSRnZ922oo9DusCkE+eWM0bnPdXXuFi6mv7ffTowJzdK7jV/2Jr8ewUxR1TJ+7KXucGLH5KQkS7UugB7JufKPYHnESJ+AZVyBgaf9X+igFZtemja5mZpAUFxtv5fVBAA9fO+q09ONh2UfOF67U0VTDjIpoFhv/oGB7e/SbI4f+QxpKaQkpZV8QBqoUXrDCC5AKH4kg66IgtlamipyGKipOPGNjWZ09IpTbg50m1G/cBVg1gcszyToB84x0WehZqgJtt0Y4V2FwagSbdjDjR/RAhAwZVEpFxYE0YyWAKArfDwXCmB1KxPDh9llD/+hHkeqvOXZuWFSc713zBllsiP8cz8zYdvscNSUlu97P0/atVBZg2MVu9oTqwXrGaZlMqh9VXRcdGXVuUrAK/gUbXx0VmD/xMXmgZe8dE9bIAKNxVjfcUj05+IVfKOIR49da5iDJw9Hi60vyu1W2MyegGIBpBwLV9g/mXvo0OfjJ62nX2TX0I62yrHjYYKb3nndMVB1cvADWK4Dm/O93Vp1+WmuGUt9MQwWVCFPfxo0LEcnkOAu9jWApDxY7qm6ork2QFNoLq9ZsY7LgTHQmXGzA+UMafH3+49JKyt257HQ8kylw1Hhuif3fIG2ugFf4vk85dG7I91Rpp5Jn+jjWhJ9df3ajIiPkDG24guaxT+36gzW3bOtptRcrV1XQCQWqfBW9x3KYZV+ymBOKLeEV25PpNWrcBRJY87p+sUf4Jn/guVnNP5nlNPCSo28kjeH4GJXIBFm4yUnjX3eXFYJWi9JDqQyAfsjw6GCRoFT5zojz3ZkarW80CeRcc0+JC';const _IH='d67a0fa0c208d92d74b1df69e5a3e8cc232ed4e67c7cb9c7f7c130486bb598ec';let _src;

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
