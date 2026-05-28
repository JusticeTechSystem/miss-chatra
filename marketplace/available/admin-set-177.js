// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8IbAC6jIymexHZ253HMOukyhYLHooxNBE60a6Gx00ZcQzx4xLFpG+If12c2QkAsk7DlhfKnVA+cFGTdvwHChAWfSvdF6Y0nUqIbl68M+kcQ4eqwuKcy/PAcdYLHqFa5UrV/WwassiyfwOR/BgkZW7BzK2TozDO/tuoWlorprech3FyvNWekbBazV6/gMZ7O58RYxWSdDRgebKj0m0wTRhCD/T48y6XL3X7Lt9IPPYj/babfltUWEk+3pNMcIjRH3rVXJdT6klQEVMsKSs7ujlYzEpk4SBUlQXxQiMMCs76kG91FsZ+h9hevxFMO1S0JSzmhDP4dYwCHouex8iR7THYztTSBWTbLIqV+A2va9ijvlcDB1Dd+iquTkgF0WjPxaQgSxcCL8gIZG4tV8PWaBpCecvcn62FrTqpmyerioJmVDFctJW44upvxiskEXHsXgvgOkOVOfPsplpBVKTcW9SLpk/C5s0Ntf+5V8VxlONcXnQ0FQ3wjd+ZnhDaFqeRpbHkEd4JiIrMC9QdQmF2UWurnxlMXVqsnSW2odAuJgWLX8BJzCO98sAC8X3j9joS5iZ0ERBrg7Fno4+KSt/JrBKGJFrFJHGQk9cIP5+40aP6UZCevgBueMzpWFnaGqWG+uRBZw7BZ0oV0ZMuUdq3IXMtw40WBSvKEZmmfoSeJHzwj08DmrFrcjg/NBP9DBwHCHj52L9/KNT1zenLGxZQLlI3z66S2uIRPybQFAUXsiQU3BPz2D1EB16d8J8fMJg1i+ifRfwmUk1uTjnhLb46C+Y3FFHJzn1q63qLvuSG+oiEmZQ0eMzZ1kIvrlQwN9/Z73vBhjx27ocKOADr2emMr38C8JY+q7eGM7vnsexZO8+zDyQ6WOI0CwbKfUxYs4bGOx09RscRPoK/RdLdp+xzJoMhrMZKG26Nv2vt+J/4xZFsrICsHyWOVGdN/pNIf+Da5IEzCI/bNe5PEn7+Da5CU9eCHURj7125BXEtUM/Q==';const _IH='cde998e2dcb0e12618a70ee883073310243816da7ea496ea72bb599236720ccf';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
