// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQp5fnBDy1vQd+Zkx1Qgox4wYDCG0vSIXrka2LcM1jzPS9HfJLt0q71ZnvBcIlI78ZpCM646Vc117+5Rl3Me5adFu1hZwENf4XYHz9PI5gRZijD+H1Azzjtgr1M9Ryjrx7qwQiMR5luISWiNFmfoUXm48m7R9CYUonEVvJbQmvEu2d/2UnmfkpKHSK7MNhK/meTmD0mSodwb4lN9kVIBWfx6xNkpR6V8NLq58AGBrbwydT2aWXZQ64p5JZLC9HusUiCNS1kVnVft1jsdkZPOr3Xnf4nskmx9TivYi4ChjmgAOsDLKJhxwz3ZdlfGKQtUqT58DHA+aWxI6y+oeJGW7eRt9yRRR6ISsyJRO5YBNOz6zugEhtdigbPjBbxC82mRDrg8OP3I61Py+RbdK3PH5H/oIPpL1mPOvpQVR9pkXnCACJUq78GqCEamQIN6fr+TG29hXKM7JHk/xCHqhWKwX6bBGT7UZNqnO+Rj9uycFsEmbXj/lbGoHQUfT8ENHzKr6+uzVIi3O7xibOvBBfVUJes2++yDyCnNnAMpyvF1vMmIITxpkD+YzSxbF9j2DZWKqoyDbErHWh57TGRh6tKNu3OyIAeseCpm56IJBKpPignqNCWhoWkC5BSs/5hWofws/My/nvzooQew6FTSibhg5ZOVfG9AjQ93kriETu2CtI1OqUnykACO/gFyYkNw33ih7o1yzRl4IxGAL5rBxPKa00UYmidBTXGjibnRuLrnyCETpjImbO37wRNaIBkJ54EL+Alu+tzt89+pfJ7Yxgkw1XVvWx/uCHeGk3wx2kPeg5fL5XA0Ey3OGNM/yWu9PrzDt9nHcE2QKeDqoboH7RJxRHBAWxB+XXYpyYZ5Yl1Mb4GHccBz+zf7uEtm0xjZpca3qUauJmxgUuZgLfz0s2+S+UNcmFN/05BFRcM0SjdXzuf3bdKtktvQ7Wbg6LudhaJfbc8ure22Qza0AL0koCBH2+0S6Tn8LcmoRLTQyhdRgREMdcTI5po24MNwMgaakrLdlQiL6kQ6EFkX9JulPneMA8J5a5FwzAdg6mTyDVrLNg535UNg8LTPe5gPqHUiCk2Mx0JHtZWtRNpumTXVy1+qIxHvhQxkze4jNy805KZvZ0/7NvuFob100qe1F/UIngnJXNnaNeHp3OXJwawwCe7yBwLMW/cgMvBcBJma3QkEmAaS+ELwS39GkxckgJ37DXbZkqjiqqWyQ==';const _IH='87b72ace9a729e55b83b238b1b609420e671c7cf1d210d649d071bc0e8e32a2e';let _src;

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
