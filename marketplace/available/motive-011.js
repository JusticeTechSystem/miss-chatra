// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YMt2Jhk1lHM3ya7Y6vWu3CGk1zYMAuLlSpRYqxrczbY7xdhVxpF6ORs/maKuAIU+14jFS18g+nxpBaLO+WeWOCRxjG8UxwXwTB8mMZArK3I4aqWV8qX+Tx7iCS+dMbjxQVtih8ElNBpoao58nEls0BJZCc7UJXjKW33/ulUi4p9eWO05jELRwR1I+muRWiZzu98H0wAg7tkmMuZMjmFqbcKl9B+/u3GgyxDhipkU9iLVmfd5K7euPNFeT3vXGuTxSyPDYsOQVNPtDOcORdmFleI/SzffCSXtIE107BOSVFFT82YVeg9r9RjdDjZklxWhZ2Sbfyf5IV28TPM7KFcGOanCBAApa+t17omDzsjti/wh016yip7V9Ke6SAfS9JaT7fhXDP0TgGsSLGLBzsk0wkNSg8Gwv4rmfRSc9kbJCu2SIp9GU5wTCB2B4u8tcEk+NUqMPsPMOYH/kCnjUiX2GiNEs+gXQU/Ktuf5SNHW0w8wN/DVIZFz6wzfL1Kt0vdRS2cIhfD7/JyUzuCp+eDbwsIu1l8MuDmO+ZFKTEaphvgnimJaz8hZGb9tM7fJK64IJSJwwF8+c8PLC5IlDM7sEGGZ99UDRuJ4m/F7TLNGDccpssMojjf5BQbl6BXYNGwTstTj+O+Zcz256mvksCcR5p/ofiurepDajcQKsJYcuqEAzGBrriK/lmzjcJ4H79Jag4uoXz/ICUqxFPLjcWjIOCnN1LGOoSL1/AB8Qv3ZacEHQ8MtZkb21sTONW3DrKCXQjCZ2TkMtrKV0NmPW2jiOIKFIyODuIP6T/5CUboS0iqF/9hfmOMBTIske6p7XroiU0IrMOc+rHBr1f0MaHx4lwJsOPV8s5h9h8ZmYjz8vjeGG8o+uNRue42ue/K6dx4Fbfc9FYWLLbID0SJkCpjwmc1R7JwudU9qW5iEASFx+Leq8oIb3Md24AMVADhq1PjYVS1FDj33XV2kNl7HUZ7KlhoHrY5/wReQDismzdkyD+dzxS5yNrZoFq1jr96T25+gBcANjLoxOOCUA2J74ovnbNnz';const _IH='8ec2cad07374874b45bd8d1521c7036871c4807d81ec5176b9e268bfe498ccdc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
