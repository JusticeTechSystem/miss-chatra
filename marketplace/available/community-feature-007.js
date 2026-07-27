// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8Mm1y2PNiHCFcCGQ/3x3Thusyq1QTebg1XfMSoxhU+xEW5ZHmwpQ/ml8IceScOndzSZNCt/pXJxoSLpyaVTJTis1XtQCfOKo2zLTWq8OLePA7yvG1I1zTUI/YruHy65rv62Cg6y/LNirIqBiRl5Uf5giw6FBZs+SMpe1dMEow94EdvobL2w8wG7OefBJvRIyjZpDZXm8ljaqGtWVz96T3ffvgiRXuu4pSeVPBVEjMvOsNQWZMXM6hhbvLiRKf6kttqmRraVdjc+e6L+QEKGAUtEHwm3Qj17PwMFs2sU/1PdUpQtBdtFCyWFCeB2ne5CBDcYhGC0pFpjBgOhZJ1jTGv+uX5T9s/ii+nlCIijfs+dQQk62y9aV6sP7eG6Lo1Hoi3Zlb266bOKVpBLdzaInm5CNZZHwS6ixoXWne8yo5m9Yy0NFB72E2KWtfH8oVUULqFBIfUbvGhP8auP2VYMwvnIVTFP4Zs8eWzOcERZidS5CTzOqUxojoYxO76KT+S/JpguzmNZgHLAGsjbNiECYsDs+GhFuI/H0GeI6vL1fUBOU7vDNN+Do7h/qUHCJEz6jHcAUnm+/7lAf0pWA8xlW5oymUtEQ0rgrUrH46QDh62nEFgeO/luSc/wMOe4BJnW/oHg3/n0lHwCPimHbjYizYhxLlD9XGseTjfdyLHECkKeYeaWzdyaB+vsxvcP4VZo1OrAqwZRWme/67ArKcivMe9S4szU0hWYpgRh0=';const _IH='383782da7a20dd0b7a328378d3fdb4c23b9d7428b32a68dba2343dc56d3e35f1';let _src;

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
