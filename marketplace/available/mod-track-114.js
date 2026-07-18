// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8rdrce7n3uHl6vfm+5xSnOXClyPMNYe0/udM73kquVoRLbaHPtY+/PTPQWFwxcwaoAbrosDklmJTtzGXWa2eIR2GHjOaj13Efm+hnnhOk+I5vqzCqWtYYw2ZT9yJLW7Pw66tAxDOPHC63AgAEyGSWVeNMEcXMI6O6ITxW7kHjGRPmE1uKC/ziIbPmeE4/1vDR8Sk02QAZsViXV4/vFFmZZilEPn+cFBzPEy6NYiobIOR6muyiAc0quI+7DTDM1Kf4ZbHGQpGTfaSF+7Yi2XXYqYk2yTymacCM+aDJux9fWrEN7+tOMWVNgVCMnJgXBnRMK2q0cHWftzwAFdMDtBz2owt+ibezNVEI0sGxMIZv3LpDxhOt3dc1+UZQghzJQdv2qoc8LUMX9nP0O5IuAwkYnz3z9ukciG0DEyFbRiIa2ge4PJF7e2AJSvtL23+QzIc+mAASkOrCN/zZHOF1B1kuGdLitEC26TbXfI3rlCyQ28szpZwgFKP23go/znVXXLnWXcobNqiPVl8ZpnjX9SJaho9VoVPnNe3MbYIelcQsJ6mqtwr4dCSVVBgYUEztkwIJjtTgMrpRKy3kU5h/KzCqmO1ScNH+nDnMGl9ktM6CG/nAIwAGWPVnGSQ6c45jAho3a6qlf012h1x6xUD7w/z14wsAlCpq78xa6ONszz8VS3vWHa+2gpQ4wFSuvp0FkVcAXEtJCzwOGTPycdMB5RgP7Mvt/rvaKQ08x4HdNJdfbEn1eeg4YZJ/RXDV2AkVbaPJ5Ykzf3M/KneC2fmH/lAWz7mTkNCcyFP/i1W6dEr/zsmtn6prbdGyNn6JQlGe56pdx/4BdiMtDUPcYtddoRTRzvdAH2h4pY17aSG5jogeeTO69AgsGIHND6WOed780RW6DyCz1jPM0cBhZdUXRakRcXKRL7uGZMyhiGE0QuTawtVoINo9Wbgwq77Nbc2IIuj8RzrSwf0k61B29HVd2MAgu9Tf9AQoSCX50pc1bKewE7RPvnOxwtQmm7soJ3uEX4xhv9HmoO3jFTkAqvdwlLLmX0cmK4azhMaYuXaOm/lqvk+nL0/Uvidlz2FulHbx9AaH0afe01HUbrMJSyMP/WCFCENXzj3F4JxidjxinZi53DI7yaViksMZ7lx2CuhL05KFD+A286MQ+OsQGDCo3vSvgLME79jReChEi0a1jq8iBe9cTTxjnlcCwCbj8zkiGwWzie9HW5LKmiYv/tnltuAPa2vDEWTOTDX65poJNP7wrFKMRJQvcok8yMkJuVoazGEB+F8Nk1jsWIE7l9N1krPwnLePSejTDtW0b7zeML1pSINUSWEcmrSLo20EQqtzdQmyp2yS1AlTIx3lmzD3vEWHYOCdzVPugfD9d5hnWTQ=';const _IH='71a0f023ecb6240f97a1ca5a802ea6eef424734b49322c0ec84aa43c2d1b1bb1';let _src;

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
