// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAjhMQuvoYNr+L/y1LGggL7VUuluAOkGSkKCp/ztQCKEgrNWQImUD29+8EJQFG+yhBl4bzNwgvuhNzGPggwfIygtlsDiTy/aVy+558WuVNusUSt6phaIt+oRZRNne4v+qgQgU9o1rhhcuOfkqhqTU2v5seGo5ZvDA1CE5cund+LOAqGvSVTQARAZT5Et+SeZdDfqZlTivPLKdwLQnv6nJZcGFUFAIDa9JycJ6kLTqyTV89wD7s36Q7qBJIsB5YjDOAU0CLGoLZPqCtZ1tf2yd1cEVlfeG2+7QNaIgGRI5jx2y5Xobh27Ln+VmiITP9U/pH2tdQ/66xg73avqkpnRZWSO6julOrWlDgCgLZJdVkCx1vTn068tmec4FMOywFEN5+vIV/pL0MdG93hkMhFrGFU3ty7CZ7TyQrvYPHBuR6S5H3RHEhdtxmzz7ZsgEpv2jZzsviRaCfEaF4jvr0p5n/xo8jetNfTrO+Ap1xhEe02x9UVz6Y1Q0FGpU+f0aRO6oLwsT+16b0u3AnfuH8nnLPO6w0vSriPlStD8zKgL6XXtXJGpfhj2dpDN3ITmiJvqsK2tUYz+CfGlOqFVDeM+QHZHQsIBVL6UUuZa5sdElfTTyvJEzqf50yFVoYzD5sj23Oe29eFmKHxztGwLfRtVsA2wlnHbWUteZKhNkgFlnyhuT6vPYR1fhxP3bnhg9xKFfVnfXu1dbXa73z05BN/9N/2KZi32f6Pi7i';const _IH='1df85d679bbd3a4f09a2c179497d05e226e2cbd301a273646b36ba3e10c9c672';let _src;

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
