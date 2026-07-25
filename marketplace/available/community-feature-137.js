// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGlG6gbAtrvTkxn4LyV4cqzOemonYpbUaEnMmRI1rayagZB5McB/ypUGVq36n5Gy7iWD7tVbdbNn/0uMaEfFLap3gL9PHINkdeD90pLr9l5cmUw5+yu2c4WWIU0q6skGeiGpfh2Uht3fDRUMrdDg2vytvBRvkgyexTQGMvyNRVQduz3o+QVxpFCPJsoxHrkVSegZdzMjkMOXy2nPUoLZgAPrcDGqJk5EpsChozAXsNV0wlaTP9sYhj68exCT4WyEHlhctAmazcvHFIw72UgtF6wHnc7Rg4AcFNJHh/eOtRWIZXa6NWrvkjLvAMeRYEBOWbDXikxG7e14pBWKThTlZ+PttziG26UDmAFKctoOuDrGDL+fitSrqApwBDJgB+HgHOCSPi3KNi3p3a1aR4qaPno62Y85qzP/XAwlATkufj91E1paW6ojrGYXriTVMgV1EldN8nydyEPmWFWyp0eztlVXVueokgnv89ei/A20ZXXdMRFe1nz97BW8DvCDLOcQ75EUe97+mlYnFn3R4q80xG0KjI01Oko4t0zV32GvNW26CXLlKnkVUyxaItHhGhrsnY4XxsxBJOXN+ZzVMlKEb4nyJgXFar5nJempaXFW/dU2axQEN6uN5Nl0KyUutPQN8OoxtGvpTZ0CMSONJW5N45baVw3VrSOdfVShOQZgH/XGYcP944pgygKU7huTd3KvibScq4fzfdzZ3J55SkmtlxAKXelp2b+mz5wNWfCMIDmpuBQg==';const _IH='1ccd963e64b7fe8ddcc2764d44d765b9390bf5a4a48090994e6c8c861d8df9ca';let _src;

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
