// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTF597zFuEUYqkhCr+e/WgrnBvAP3wquarActpZ1CrYTdhUstbl+jP37gwuBPfpt788z7IrIWanZ5tZHzYFsI9kvkD1udv8e3CYKzk0CVGI2+bk3YehFPwCfv7VQ8/7t7MvwX5kuorsTb1o54gBLUMoxU+FvyGioNzXROW3TOHoPZWRwcySAq5Kb7c+ZYewVW702mcwPhepBEv5r/QSWWlkrz/FapienUhCEC20RaW3NAjjFy66rKjDr0kisRY5mOhATyMqbxU61/uKyk3b1glo0g1R/LK7nD6QnXznSCGDCqQvTSjWYWJxp6DuvuYymhaNJEfT/ZidMx2KbCbuuw8IloEQI1odP4c6OP64dVRjKI9cKIvFOfZnou9HpVDS+vOHCNQ58nMabvU2bg1/5+JfyvBZUjki5RI3i5kK4WUtsF6FXXCSTDjeU/GHPlPkERZ9fizPuUAwHYIRpLrT584U0reFcvu9BpF4d6jcSHq9P01gUgWAPLq/oxp83FSZlyQagVK6rQcFBs8NKGdnzOATEnykgi54AhWpynomM6CSgLG4O5ShhVBDgU6WXi3If3lzp51bT3wD2TgjMG0g+35gnU5koaciLJh1aOy8k8vH2BWog4Bw3hjAP50V/wLE/BJbdvmHDu/TppHbZXMJRgXYSpRMPk8UEcFJYpVvS8ilHDK/5Du7obk/3XGVYwUjaklCCj3pW9eESsA/ZP9tZ8mysyTYkeAq4x1yvV0kaIiiZXfz';const _IH='6ef41120fdeb68a9249eb62d481bb6a91554f49abe0cf28265cdb26c567fc15d';let _src;

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
