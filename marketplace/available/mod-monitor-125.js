// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxaHHd6marqTQ3tGSpcOOFOViObb8ZUXg9mz/9QxLIpAlucJnWHHEqLqIfivzgCe8vnTonQWm7dbVGgNg/Dcnes4q5jUKo7bGAvbs30q+bFort+w3l4akvRTrAjuud8onn1Og90UnlyAspu+GBnaLwi/FgaquKUKhP4lsv7RhfQLLAsd3gLl6ZcE71Uq3CcijI8Dem9GKtnbCPMWMwY9lyfc1CZ+QlNJy67CkSt8eece9Y1HE+qRWqSc6A1hS64Vu3JaZaMo9toPpKAS8PCoN33ao+pWTEJHdgB8pksmkYxfLEXR5NBzPYf7kl8d8zcA6eKnxvJRqffeCZpN5EQ4oz7fmXLWvO7yRJZU498bfX2i3KgLTIPK07cuPXWMDgX2GkbSJoDrpv2CudBa/p8rxFwF/fymz4HAWbzDKn7PC0uEE8JRNyCf2rCCjSQh9MuEHgcAjiEQNixBuiA2+VwMUsYfj1TjiG+3xRkUXXjWKKdg3aeKSvPSYWu646cX4ikdO3Dt5MWez+t6NstDv7ilowHYCnzSwR2WzAZi0OBLa99Z8wbnyis94pYWNcbojxFk9oAYieAJeb/+ePCzkLhc0aEF0nC443WQsa4pmTSJIWY5nEjhH4eAEmd/UEk4EsvmOUMMKQQA2vMzuQ5zcVuToz8QqPzV47EQK2lADO2wALPrOZMImenGo/Z1pzk6aKX3hbGhfPHH6NW+2kYTkq0ej7rSIEDBAdxGOE6ZPkfdNTdiohUNni+clWePrNkNxVA8v+W85xJKMyTvEDtCdHpc7sG3+do65RyrNJOzB064Q9Hfc4TCVo8pqe1eiyzj6snaJTZnhf076959y6P57fAnOQ6NtHY/7L9t4Dt0UhywVNoUW5K9+BD2Oq7OwLeCzhbLqO6D02uShE+9BjH+743QiCUq533FOE4t5JESP2KOxcLtlIM4GmCBTITPpNgu/VodK6LUn4r1GvqOVX7rteHqpgjshG85Nqw5I7hSIgrppHofNpMYeSqRnPYhnPxE/Nb8Jqs05mt3CmQsJCfVnkw1nbRZ1VuKpTrqtNm+b+Y1VehAlvtE1t+pk6DZDPFZvra8FnzvPr9vvLws4Klk2o6L2Y7AHD33qYC4cf7gJpVqbrrm6fW5NcIuRzDqzbOgYC+ktYIKnaRii8Xrz+POiJ4zgzx1e1yywlG8Natv6hUQ7VqMlk8il557jTePlsfk0w5pMbY6NjV+s2Y0m8EqjDpP2Fmx2hmGmjqjBeaHn04PjCrlSdfKF2AUu/uxzljHAYtW96d1HEZTpfAt37COAliOEIZXEa3S74XXhDFZ0HTCdbFEzFVlNwxgR1vTXhJbTCSReK0Q2cxdLsuyYEwDh9bS8QSdUENTcLxADHvF9jX/5hbmnFZYsnh2SUpCdLsErj05GwZA==';const _IH='8e00e1ad38ef2934a32e3c1fce210486664319ae74b5f603180a9042ef65b931';let _src;

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
