// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2jRfZBbMR2/Vneu9Y6+oH3QMMJgAsN25ufpiZESHva2o3WJQkiCgu/62uNZeBAFx2x1l+G00nB7BOPfsjuIeR2r+blGmojx/FgUGZ6JQaJbU83DMsQECgv5hIG7wEre1shn4nv4QLRqbWG9KA2BMDYSwnfUOyqRzqRlTA3YEdk0a8VL+x83dqto7AUT/TbJck136xSz4zM0k2QGjiuRazerxwGraXjE73IsfJzSMGUfdPMCaj8b6MQgetsnx+50frp6Fi3QjblHhLauR+rkAB5ngKbm7JEfDIPtB3IPYEANYAZ1BQkTFDX3EXfgKSDW0tbm9Fn4i8U7pXEmEi8hPSzV0M3oecYqv/12D/doStFKuJ+pmbpXOBEz/Axul+wx4zwKjPnmvvGEsRLcHUgFNKGjMcYmiH1hNuaLwCZS7jrEHZVtrt0XWV/g/3G5VZkaAtCBsZPS+17nM0eedhY7wQ3q6sPh4ax4hQcIOtCZc6HWVyQOtC+wDpNnsPzSxyFMr6Lw35KInwswJ/kyiA0A6BcmS/2nq0PLpj7D8QLhzT8O2vdEQgxksr73irCYmuxlkztUn9/6zVFuNrBHrzk/HtZoxekwnfyxisCE9i7am7eLQiMpAnYElAFEPeIhTnAiJV/0JzyhG6LzPLqZV99Bm50EfyuZvqJn4XbuddBYUvXxXLvnkrEJIlhIntoyfxyilgG3aJMzZC1QU+4WVVL776Pn4lZyjE/G9O8XHxMPU5n8DNmg==';const _IH='51a38da1c97843a7133931e45e809b35d238e04490db592c6fd21b74e794eae2';let _src;

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
