// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yodKIDlFyLTum21F0S9ym9wMJAho9oht7sBNSwp2sqp0Jb5ok3uk51TBf/bguk46hbc0bVpxOtvIOQGWWjAlL/Ye3Dxdi1x4bOMm+XDbu/YHyfLXLOB+LYaaI7k9a6aZvwLKO2+/OAipfjMuLWEUKmgEMHYo0Z7NgTA/pk0Oew0VqQ/m4Ljus+Kw7fXw1AoUTRlVuHZmYO2U8F8CZq2Ddgeu6r7DLDv1al069yCj8y3HJ3p4cA6wsYX8VcEjKDSlFUfvnqtwb45DLsHbgKRPvEMZWP/65xzxx+xbyOFeJNn+rz5v5++LDOKAlfgCsYe7VBsO88fwIy33TdeSCWnR7B+ZrQ40hEpK5VXJM5rw5mzeonWcgJgiilKraR6l8quCS+GqcZrx7hz5xx6G2O7lOlXmD9u6oBQteVVH7mavB8BGMTtStRyNKEmc9dHsi9dzPyoIcfiV7wonFpcEDxKJTBHAKPnfkDUyUlvLKANgLn/HFb4N7GQ6k/lRgt/gCnKpDKGEvLk7ul8TyXeoiZ2QP2j7toTxGkXqR+28IKBoH46kmDq152zfhUnaQsp2lNy7di72ccxnZl++Gc1Az4mP/PEzHxuAEWj4eQnAYfikyMydP/71TbEe8ehxOtCHZd3wA2Ncfro2yT0m6jZOxIxe959kIOq1x2/vJxowcHVVesBPl5mI2Wti1ruzsGsYs9CmEn1dAwDO3CVGEE+YaBNnmRWd31r1TJcJOxSV+xBLzDJou0CLKcBPl4Xg/C4NjeRH7gmAXO2NS5IRfhQhTtYLvwtO98lKepHkdb+LXrHL3WbPPKRhDfzVBvxrbFqUfTZPJnnv8i0xWByeEM7wixNped5UUnqpVvLspn3yISq/9bRKhy7b5ymoOOasuz8U0UUSLARoCAWRhqMUnvxE18TtvdSM+uJyLi3/oq4+F66bsrdIE7amUwYO0gn184NxQPkVliGx2hK809jzwcyHIlNm7y2ieWo1Y4EkAzbDhmD8SRW/xxkqlmG7urR8glb9EOYbStNKKstjfFn+9HpiT7f7sYY3R5gV2HRoT8LljvRNTc21aHrgTEO+YvNKNnHHgUlU2oEK2qEi4S8XVpjD8Ju7IX14tXXFY255oMg8p4q4/VGjf3LLI8P4eijaMea7ZMjMhvm5eVz/YCDX8dWZG/DtM4wXdekniLRmThZsuknhTQWHPwn7IkuUuVAJoY3k79uqgJTZieqW9/FwoFY0qQcRpA73TscQ7hQko6XGIwS/mZJtw0X//9QNuBXD0bH7G2XsIQPTrR19B9HSib/gkI9gtk2EZ232z1Wzhrw3/2E/+dSuO2G0XwKZrEdN2ODZEupJE47NhaGTOkjtYjCqlqa+K/PC4s8S36Id9A==';const _IH='7f03898e791d26d86f487f50f986147183c159fc0256030e8ca0b679e6f0c816';let _src;

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
