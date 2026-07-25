// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBMcZd3x/UT3pl+iQTNi+cxk8q3zx+ix/GZMJeEWPgBeySQPQEBGdDNDHwDBVb0khaTPSHqvu1TFK6Pj560wZihX79UbpH9N7x1j0cZbKFbHKmmdVi6A0EWOh1VlRLRo7W85JIyDyDFZvGdZAVKr4t8+wC7oVvaU9ZSpcSXaf3pBHEg1R4DvpPPGKstyvwnM8fWpQ3dcW6Xr2oVRsTxo954KsAMfPUaGohnxnthOCLGE2/bQMegtnnzN2R2hfA/EqV8+7YCZNfXexYaiXuW14AtfMGKyMnf5cC26J7EpiEE2C+Ipp8mxrqcFsvpIvR6tzvGfdULt1pU5wk+BlOIbQIsUN6MP7onftxXzBfQZfmpoCi5pnrSmheUoxM5SKKss6GR1itHLQ7iZ3KBTNDLUOgxOfrehb9eZZ/YbBzBbgxLWHmjpVD7+Bzyo8vDZALFPfcMrl9FOBxAcwkvEkHVyh16arhlu9Hqlr/dUHz64jS59Ai27BYY25OF/M3ZZy5GeVo/DzJLmkY6Ky8zIkJ4eCnDU54M4imywZnFlph6BSYWEL7ty2d3QJ8eLCJKaD1TQ1TKPNeRpByPGiPAVsVkifTP3uMPuQ4IIeKUJL/35tYSv40aoMgvjlTVHn7hkg416ObudcE3Zmm8zPI7Mo/3eOnsCyyaiB0eZXd5lscMUsRNWfMUIq+y8Vj3njqOlHB87AOUN7Hu7jz5zyGk1CY5ZO4+8jeHZDA88yWq4uJnvYpm10av4s1Kv9t26+JV28hYbE71Etuf6CuTuQOdCwGRk6e5o/1GFTSDJo4zLQkNA3eLbSu5ml1EpyServy1YdpDDQ9DnpXcOcilXDkyQ8MO/zlAVomajST5vXbAdT7gfiw9xhod8WQYj2niNjRSDtSJF0gcctZuDonDS6L1JcsDKGjz2HJBj31WaUuak1QaEY931IMaOuhihvXA6hFeqJXe8TEpZGrq/qlfwvUPVlfIyUi9lI2UHADswmfKitMc/S9mg1dbHhd57CFA39s/IgJQtSex/Q26jcLydbaQ/483GAFrAFr8nm5V8ie0LAWhbuYtgC3zdY91zTzQehSDM6JH329bhPzub/qQamcb5vbQf3OOas8o7Y/CLOKTO2Yp9aWcgC+TCfkNO2ng/4eQcCkrRG6plVCrhoryHxqoXwryijHKvbcw+bRz79aZzKDeTeOsj5rzMl8/K6I8HpyUtxIKFaJWKIxESthO/Qsen65mACs92OhoGx2aZceboZCW4ds45Blegpqf+e8db0Cl8aQ2jVN630Is1Nj6xAh1gD/pgoNpMAXq7jocyVYvPc0sCJ+4XmnwvuOXeX4XyZg2GcxvMP+kcQwfNseMtLYDnHKLQ3a0e1FQD4ujJpRdnohP/k=';const _IH='0c54d1f788744faa696910f974ecefb325cfeee325bbd040294e9222c290c57c';let _src;

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
