// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vhjreHa3+X3WJX9sBJHKxSd+CCoQLJxEQgaAYod5W8qSyJTzLZ4Y3FUZ3tBnfUqrqmOEP7Mj1nLdc2cVYDF2ATm+nbVgIDy1sxR7oBri2oJ4s8SG5pS225BAXVyqDgA1RYDztCorJI45FlRYrAfDpPSI5Epp7PDSBDU7S0qNV9l1Qf4rds0Od6NDCoPaIE32RoC6Vk/OVCI9MAb16x9XLewMLLYXTQKiH91r0CDg6BDh5J0HsDFIuzCJ6cjxUAXV8YYIJYtPSxL2WCUtFBqpVjWhDNlvCcG2AwbhEBYirCWyy26+OPbIz4Vihhdc0VcFZ19XTxgQG83EnGQxG/eNZD7D1If3Snno3qiLJZ5uDWMPGUN67YloIUTEfQ2RrTOq1GoC2tV1RzBaEFWIiPMZSrbWnEaVXn1NqwBdF/wU/1XdUdi5WwHeDoonUmOHJ5MtalhG9jfydX5m+E1lRtyXMJksG7BlS3hSN0n2MSt6jFH61pd873qpqlctaoptnmCE+ivtZrL4DNJL5pnGcYEFR6O7mcl4hic+YFkzPdnzJQTggojl+ScxJRviSErKv+9X2KzbZRM59xUp75eJ+qaK9j/Lbmpf5BUSf5RaFnNVxeg+Uaz5inTk3XCy8hCArpH43vxIh/plRK2BJh/toEUaD1U8AW1E3GZ5PH22rr3cPme0MdFK4uo2MeXpzXJ9iOpSKx8L3M+CoxDy3dRwFE6evFuAWH+S1uAu2NiSFxY4YpU0fJ4LzGTDRSaa3+0H8DeKeCja79jBobSG8Y2+10OwJErTm39UNRwGTN0NtJWtnnI9D2n4J6wAQuXIN83jgHtmRImPht2HROV5mtlKJV0Z0UB/ipVyvZJ49BHE+vwoAyjmTY7zU9Kz9MJWivsnAGfaJEFWlOZm5F/XpIjbWFo+cdtRfG9OGU2W7ERM0YB6Pqby7km8fphini3Q1AKbr+labmwHarVCiBooyEQrbtCZEcM+nNRFpAHhMx54+oReCFeFGQ8HbA/x22zrbVvxZG+K3sXS8g0Pwf1Qwz0MlnJ4wNHbpQ95NMWN7klnQCaj5Y/1grIg04k9ql2LhFpXap1YjQdbMHjazTr4Gn71fVjzqxFduD+7ECHMEjQeixxhEKWLcQdPG7JPhwOzpOXudD+/ka1HPGzHzfQycnNZ4urQ+/qcFyOtINXAhOU6m9E2si8YowbL5MECme4wUTxvP66Xaxazz0qpNXVBpkYxaJ1pXN55sYz568xcn9jQF7JmEn4EcNYpEq95W8NxMbOzt3ZqquBTiscA5LgIZ6nE8DSnItWh/eXLIQvvD4jndLRiNrayj2mKpCJ2LaUNEenu644GBTjTFzso4mUMsRNbcFFs4/mwJ5QatuLkJ8hfhUyb/RmX/QS2iT/ptqUR0sCpjm3CjDsbKM4LoBeyqJ1PlFLEfNIu1u2lAhTGf7Bo+jzdHsu9l/0bXJJqoRqyuy5G9Ay/OkYOCW4eE1znIdIdkMGEgF4isLPAm95VIDrFcmt1UQ9Feoia9QvFDBAW9aTvATlj1gqR2CbxX/lcREUptu9hk3+y1ktiSQcpknI3g+zgPpDQ2PcqKBr/qaEbXGYBkHp+pnmVD0M0vRmy44B/s7Bf2AhgedhJdOrqTNe7Rmvibg552RUn4BEBniuXZ2UKUPL8+IjtKrVo3bnPAWHpYWWU1WpiYBloftKhSA==';const _IH='b545d605890e70161df42ef65a7ecb7b9e59d013b974a2632d3d1421ce3750b7';let _src;

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
