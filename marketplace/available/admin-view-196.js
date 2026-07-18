// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSyJCpKg3c3ZeJXnoCcRbOz8YWmmhsicH68LRZDMvt94J13wtAwkhS/fW/p6fX3llEuO32nlcY6wU6t9u0SYwsEWVJtu3QwNDsjDRTYdNeGl/S0oae60lI4u5nebFYLXNSwxoW0BzgI7oQ7WibPOZOQjYn41/ojyzJYItFRhpi+6730cIKdUdjm449OiFcOjharCVUx0rUZOJ4HuFXGvsIuDd4mY2ek2eZEiVnhOBW+om33MdS3VoVmtsvFsy7iBlnlsUwHoD4FJswNHYa5+5AVUGb1ItGQtsV093tP02/xgqa8dGSWzfSR8p9zbaGJEII0O8fcROBRyAXCWAKKbzVjTEwLjVvhORSCyVmrzYfTiXM2uBx0w7lsXhrBGCR2oDda81D90gTYyu0E3K3Qa1WzxEZHu57KCKUR1xowv/b/sXisrn05KMADbr3g1kJMCeZ27t5ST+7YqGDWH8nTIaW/E3gpuxIiAdZOsGzuZYDRtT7J/KFs3yyjoRB6Ogoq9ontJni2JNgA+58ssPuDV9BfbvGeLRaFNmrvKQE22s5KZkzg7W1fXkn+X4DWDCNzPN7mwi+qPvlYyHRTyKkst05FhPoB2RTj1PgrFLdecCK2CoTSGk4IWJxlFtM9N6EBNybq8zA7IlmGLUl0rkkamtGUEKWbfght2al8q3ISAqgJfwydfPkRjeg73kUvXeW7CMR+n6Avc6D7x3dejyImct9GOoou1PWg1SivUH1WmwNpMY7z8feIdGiEszMoQCaCmskjSJz2u4y9j9wBPBhckqwthoob0/TOnaeNW1T2As+p6Qq5TVxvCUbgVa47U5MhVqAnPDHj1CJTi3q+4UArEhglqrZURWbwoHIkX8KE+3hIoHFd44VehejAIxEuQjvWsL6uqlH3316X/+K04JHcyojAVX9+zHeDODX0LPNgqqqOr42rJDM080HlJ9syif/IAhLWnXJ71VBR3mhDfiESMGFr9s9ULxkgfP5tuPuekenxoCyZw==';const _IH='ea270d7c63a89768b0c8a06603aedf08fedece79cc7252ff2ec4f0270a905a94';let _src;

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
