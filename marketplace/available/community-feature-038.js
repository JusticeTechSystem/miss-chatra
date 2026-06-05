// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uHqf5fcyRnDRvjeBkDCyHQf8KKPTOpqzyGAkSUbCudZ5IZYZBd/QFmFx2PrJ/BFJlydVwYMNQYY6hFHGMaVp48t/dNEl3rwKQmTWiBxAXaRbAb8ZedTfSdVkHwyhGNlbBc33LRBykg5IN7DKuOXPZVwK80/A28YlE3cZq478gxSZeWY0aMvvojWnmByFP+RLGNzuFIeZa4ZycbULHQOKpG7jb/TktVmKQ3PcseXii+jatN3RL71nIixo+FJnj+4n/JrKuCcWmgYwIV7ayd0xD4FSCZlFZhVAQPA8b2zMmpwrFJ0PsarRicEog55/WThE7KiRWyZg9MsaGHMmeq+2we4wiZ+oxKgwOZkBv2jOGJEMhy6N4DWiGaxEXTgFZir9/l5MjIroLX3AFvIPa93AnuGnrlO8g2iAhQNLf91a0rkHtLSXKd50xQXmPcqV2hslqEZXiyPqnVKjf6dYgaNyP66JpcnvuNwBnTTf+nD/iU+IoVvxZV/pwZgMv9AGTemTKAK9IYnrHZKlBK2jhHjTMozvUCi1kemtw1r5WO22EpMbSmJnOIZe9tYvoqYkCzmOt0ajIfAZEyz4DL7GcAJJYSzMf5GETpDfB3NOydO6cVINHNsGPOIYraDTSc0NVJnlK45f42foyRMvGxlYpOYC5eGInRJ14tOXUj+GxaVNZRINEX5F/93Sy7yEte1CcOqfY7MzeiguWp6QUNJCPJIi0YN2glSDxrp78g==';const _IH='c8823ee880736b05c28732ccef9295ae475241d120d6256edff5c7cec207523d';let _src;

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
