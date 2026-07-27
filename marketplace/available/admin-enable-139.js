// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRvw/6hoStSZUOkSrMwkN9B5PJvFmm06UcGAZ5gFJPz5kRAztZiCMVkM4O/xlUjYlil+l54rW4eE+TGW82yNmoPx4yI+7f9qFHJp+Nnhw370vAQGEJbeDisv1f1BdEz95+XQ9+6fFjbYEQUDCE5hDsfXLu65BPY4J8Taf/t5edhS+olUgC6tzTeEcsy0o/ebmVXkmqevlgz3fOgjNNBHWeY/fa5NZsDTI7onA4DnxVy5e4FbUiNRqM6liyVNWoDX9i6wtNN6KqDFS5gcxHhE1XV3QCra4kca0mmgVtiqX4pZmeVQLvrsdbEpetH6u4m9P9T7Y4yTfWo8kz1152/Jfc8CFfEPSn1noKtrur/53phGEYooNaGhdormkHHhpcfdgFdIQE+CMRqMNdXUPSEwpAT2JdhuniVoTNmGUgaqbPWLvaquHpgvqOERc3Yl889itqfIrFvMkBpS4coBsTaZf/m8EXLBi2SlfSmEXOjjGe3ZgaeuGv0Q21q+W7zmDkzX408kyda/Dr2XLveQ7KO0IoRFopibURaINp/PFzthlkC3VUKnTNDFOQnb7Y4wprHtLYqnZg05vtGGKlXu6GC7ef7CGFDP2jYD8sRfz4sg26ITmspbKsVQQI/V/g7Duzf+fosvEHmVpjtFgDteLnP/s+kbTgTJkz4DPAtKM1Jnr6i+8YaWKZI5/pMGp/F9Zqz83oJf39WKmUK8wbkOR3FCFKrv8lUU60MZuaZ1NBRxgJKSGOjGZMHG1X+dok4/ODx1M03LRWLTfASkx6us6gDkZ3dxLKFK+AKPzREi8ralAB/C/hWljz9huNDruUDrFGcEAaRZpzwrtCptd4g7Zf1vf4jozE72c3HOcMbOj1HM66tIq5mmtu9iM31+OGYHKOXk91gkFJXol5S660xRQvl1bPRlSPetqQeYNLnYjyPslBwNavTJ3EFCPHbk8cO88vTWPNvdL+v2V+iktC6LmfayA9+FHWyiCYxBR97hnYnsZsTETbhY6d3EjLbwEmu0r4gj+n';const _IH='3029f9f899b4e053a0e60fad60ed1c409d25352550012c02b6029c7378de472f';let _src;

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
