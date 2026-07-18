// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfEd3/0kvBavzViGitjn/J/KjxaAAlcpoP80MCK1FST8ysPX/C/3W844mR+C0id8OI0VDiVB3dW1MBdGNNhrviZJ79YITJ/abqVfr0bnb38bqhps5KhEcLgpjqP9QB006qi9K09bJ8klLK5PUc2Ax8DVedq2OOR271hGTShO3CeQSBBZ09JxuNHlRdAf9AVk3fE1Oh8Kl35CI5mYO9Yd+g48lRTE/Jqqos7rVans3ckiRi83R9n0FlLF9p7Z5P4UqFlfAhFVjcGBICqZIJo6iCp3cJLlA+FPNchiuLRDuznoHsgBA3t45yqSru834iv+gqtAhR3E9e8wwbxGMma2rCyMar6dpJ+/5kOd8+lIpvBZCPg/holXGPh8jRDnAiUnxtWgMR8Ok1cPjiZ1V+8i1ZiRsMy+wkR2F6xa6JiSDQ4sVRQx6ZOmZ5u4nHCQxPqamTP3rYqE+4bqJsQ2a79XEdudkECwBsd8ZaTY2BiJy1do5VE0uHWDHz6n2VtCF62GtXdMNts9TkGrz8j54hVY9rZKHp6GdaPs2zvy9GQZpzkuZXq/B2q58EXlPtnUAosdwiUHQ1RksHMZ/lGQ+jfWp3jpBHTI83SYfp0qpSPQiZeE3xwZSXksskKUQpTuAvlea2sGw0mcBUNNuznGR5Kk6uEg7dYCpg5onbblEbHrczfnq7qHlulQkI8377t8a7ERYnOeyXAoDqOKPhcyLEWNTKEuRcxNAcv+x6ctcDtfOUMdTvPvRytyyDRBuvqbPL9SKlGjsLjK+ANc65qFnAorfMU1aGaIe0RVGVqYzC3zKBaps2BU53aKkkX+9bdDHpX5wJHs+44YLBLWjEOlsd+WFWc5X6HAb1PJI2hpkRZdnVMcIcby1uZiZwDAKUbouPjGDvUOQX2eZtZjKXUoeCjQMsSrb9p4oMzf7H+GBUlgyyJsfwPD9mpWhQkIRR6PzdhwtpYvNaiNs/wCabUmzopj3X3K1xkQs6yfbxKZ0X5TvLzYVMhyuh5qa4/4KEMxW3vVAxlt+6zAL1vRm6M1J8yM9CRMQKHyIsTia0e+DMTZKfIhiGLMXNla/3JSv53w5bbkeIxWAwA7iqyFBdtkfJ3X+34dkbllOfDY5esK++spMelSvbcHrC6Ady2dpRtSvyj3Jg9VhYBQGHF4BPtYdXZjtar1Dsq7dPJJz5KAtxfhgi8vSQcmXDI/IbCzHc2DA+B9+xQ30=';const _IH='1c7a13a4ef04101795fb149b019a41123ae298e92fc327edbcdb2fba5c6e2852';let _src;

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
