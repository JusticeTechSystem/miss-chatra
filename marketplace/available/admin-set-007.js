// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSW8QiL/5lyZovRqdmdnaVamLOhEwxCUR3Xa1krt+cVw2EBfp+UEHpnT3+qNBeGUV09GFwsvMHxh6gQ6g+MQbA7mDchmS/NlD2MWHYrX8YgiY99qsJUzHUAEwg86pbGiP6FaVTaFDQGjTMeGw+sBJYvf/AIsfptw8N8euAsSCSPhySTSWzuUi1ikwrHvxIO9sTBdIloXXBkD4Y0JnUX76vGCjvqt9H155dX9TWM0IxzfR39HIn/lAcsv0FEIGjndiPVYnzsVnCFZvRwY8Ob33XRG+snsnjOmgtjjIY44l7w92z+sasPVAmV6xsqPrLrJhYMa5Bu6C/sm6zNH5FasA3fFVrCp6OPaxoydaFMPiKNUmwpLBDyQrA4i7g4rrx9/H0ocOsScpsA6ZgmCgcomiHOpS/jXfxl27/6FxIyZaB56d3czo7wbc4x9oWkU544Eh4UxP49UckFFtOondCppb06SOV4GRTeM4lmRr9JqoirWbDTWYHH2ZUhN1SIL0doZthVHEizwLuCDxjYAYsVB/TsyRnV114rFhOM7fxFUu+vNb9UgL9g9BLgOuICAio3VwhFWzj0PJDCjx54mzPQyOiKwxLehV+0V43ign9rPJoJaWUKoOHJSnMWZM1iA6CRqiTvtxxkz/akH3kqLN8R+4SfvZ6oc/1y4td8LFwq0bUxX2iMpLu6sUQGjghBrKIf2GvG5gZwv21AZeE31U4o9GC+vrDmudx/AUJ39/iifSLEGoBnBAO0xuXstrrLPHxJwgcOpyJGHeTB9Z+cVfFrM9eXsI+2E13uGhPgxk06MtVkKlplVJrkRWduWu6cDfvf+XokSGqXtId0Lh1HiOM7zFkKrMsyic4gpvEIn7VzVdHt1BE3aLwk+WY4sivGdHo4POpzk/7IOh4C8gWAWlX6lb0brmQA+AiyxILxT5JdKnf018yo0mq0zRVJOD4856STwmU5VGuExhcLAKHzUIaOtg/TzkSUpQ==';const _IH='3f70819cadf7d7822e9657de0aa16466d0e6f8da10fb3e6f170940af9208b9c2';let _src;

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
