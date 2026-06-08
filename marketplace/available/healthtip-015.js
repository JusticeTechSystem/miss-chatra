// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EM+z9TyqjU/P1o04KhhobN5+E+GKdk+SP+2cDMspWCjx1qxJQ+pByQo5lipZMgb8SoSSlxeg1F5ZnEkuSDEiIl9GYT4y+nKYqnPaj75DImSx7N1SEmhAMvrXGaRsltq38JVbnnBlpAgGGJpQIqkkfkMGHCEibEvNfsmsuhlclTI2VQt0acpQFWE2j7TEza84jJyHJmS+xClABBysXkuuavyLBEB8sL0LbQye3pDG5gKSlmKMFVyO3p3AtMorLu7O6aLva4/ArSBNpyEZVtZsXW9Of54wEalr5etYhKADICN9IGQFlaCYQkoyEn/pXRN15zIeKEcbJDiWFMItn6QGF/eOoAjO0qAtJY6y795cQcfuzqhVU3lf76gF+Td6OHprN2veQYQ4F3jdsFMOvKd4/r9sc88b2oSHEXk9Yd3vu+CcKYs6wKMJDRHLHEs8JB2bLe4JPwlwsF/X45gVKnZ14Uij48IXqV78enjD9FEeFD32r27yiAld52Qlk+Bn7DUCzYm4Bk2l25ylEiQmDcwiXvZEhKD9SfxvXY3RjDTFKVkX/4oAtK5Rdw2Ajl4DCiPjCNvr+l+Nio5TepWl95PRZGCp4s2vAjmNYUXOyWJVGgq1O5OT1ZPAnuaEE2+jr7iTLg8GG6wVozuW41qNoOf+IMW1rhVe5a7Id24LaoTE1+BuTe130Kfz8NzT6YBtjSXD+FwWtYxeA+3oig0FASn8Cs9WK3Zy/7cFnKA3dFK7JR9c9iHNuFvux9XBnqfSLydgsDWbmtnKS++bAh8M9K6fVjedwNlyWWGy8vMIe9y4CsHHEcPNBMWPTC/KNNnBEyr27lWDYrbXSAIlznUvJehoPCaNjy3MHS4UDWkORW4gvq7aIeiGZa4H6msWfvCTpqitPV19T/D0ZYUR1G3+bHZBTNJrK+3L/wWF3yx+Hj4fZh3xQCJdJrDFeNdcgVU=';const _IH='f9425152673596f47da6bdf91551fa5569ff4250fe369f3f0b33e188d7895770';let _src;

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
