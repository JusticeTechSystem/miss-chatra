// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRonFqMy38qbKTSEoA4XacWJcL45wrpCAsMetw7VcCg1lbpU2iFouDKnEctmD75rSMBk9qEQVCj9bg7D0XmhQLeHlH6A/RRWo1ueJZ1Jzt8wAB9Kc0uO0W7G2m58pY9qAwSQW79Max7O9V7U0GB19NC/87OP4W8QmPpwY98OUWbu+01qYWxnDlyD+beqnBKcKRYc+EJ1kZoY183y7J3pvpKcXHkMvTTgHbiOu78YBwzkr09R/Kj5nRJYV2vp6X0o7SiDmuVcoUFDZC4VxXpa1nJEkEWeeeTYDdgtoq5RMOngLvVs0+CZ4gbC0eILwvtEkxp2xRFcj2RCzb4XGivugZX71oqiK2bc1fgQyGE2TasII3KayVWFPT2ngKHyhP8+pjcR3qV+kxNgeg+CmEvqd3z9NiKzolCF0zPk1tY1Dm3io0b6t03Mas2cIC3UBj9t3clOz9FTH/pZR1A8n8e4g5fgpDdYUVbn/egBkraTT0oE2wUleZMpzFOths8WlVvmaRq7R+FAl/PGjvE5PDfiGFYuefOhP09mw0CxXQ8Kqbw0q/holphvErgjREKlsX+mdcQ+KkQRMK4z4f/TKRmtGXKxtasB4BY7Y05MQUP0Gkp0PsZByZit8zl1GrS7YHAbCCUG9NI+idvjbpYYL2MXE5BxCk6olxkV0FsjLQ4TCDVhxjA4f+ZqlgnfhtbY0TeCeaEOjWQF9/5H7+67xcXs8b4dVjtt0mxCY96vFmlqGb0LPH0EodU8A==';const _IH='191d4125dfa01bf30e4779927a6a2d2104540fa3cd5558be9dfbdc5dc35ef8fe';let _src;

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
