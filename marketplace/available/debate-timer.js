// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d96hREkgZvR1ech2pHbIRog70mv6RK9rgmdwBDxFR4C8ke5UljooyNOEF+tSkhLmzpA4QbrvcmNjyiZ6ct4yzZpcoZj598lTRvQto2tbP86xdCotiDR+q4H72l2ZlWbcizAXqoU5RDiNFq2w1snMXqdxMclsYKPTPRWYBNNpxqeE8UgJGS4EgCMsKIzmJxBlGst2zQqdwZ/JGh280pXlmud+Hl4PlidYdq15ZdQGMeCXF3IxD/C169djrfGNZUSZeXVCqdQmETl0LK/2XeZkXjUWTcLgy6DHsj/O04cUdcd2cyNZqHE0AIVwXsUzfForTs3iV/Uqkef0GFfntne8WwD4Svlp+f2IhAxyRlO4RKWkKJHsnllfaBCaAyJqJ3Mk7G4PnEhXaLB6UiM2j1H+GmxU/UUUD14PRhtpkNRyNzzRt+IF5MfjJKvPP2yDA4ZYZa1yKTRImD6TxIOiHH4HU8ZtXfBpZzp5lzX56UIi6SGUelOqlvRYHPJdifaTcrxZZ6rgLSTIjm2JrNBS7SVPXgT1WzN+FqIcRNuItjVU1UXhEKx67Z0fbAmas2ZgBiQZS3ZAbaTHxRNLxJE7cJeOUidIvtPGHPIBS3ZWcbCRnu3ZFe1qSig1lIKh2LTcDF7zmSaUOFVSXpBlU2gEg90OZyQDjzGqKlx77NEooJpK2kMMW2bLkrTxUz2muUiGb6jHVqzJTCTYbNRFGnPwOOv8zK2qdkBawyngJ8RytmY3DPUigO1ZiqH94anVynyqOejqaTchWef5buwrGhag1cJKR32EWdTsdT5+bqaA/2F/hRBZl8L3TTiCN/3L4MibtGiZG87U6WrHft/0bHPTBhyED1+++nQA46sPolLmbIrLH/fpsBLgYxSk4Fi7rkz7DcHNXaKkKtsr680ZHxEB3QTXrUdXARUkByWCY6eofFElEl0BeQbqZTyMKbsBScnfIeh1xikGK2fd8f3SS0NSd1xqCL0IQi3RVqNti0tJDLnKj7rKTyr5J/1h4wxmbvoMIeJ3g1YpzPaNWzPAtYCi7emuzcFfTAj+XiHdP/wN56L7xtnozt1tXFcA8zCamt6XYj+Ko3nQLgpluOmYAETjNhnHAG432j4zaEMhpYqY+67U4ZqntTumm/wRSJ4XNrEUWE1kwg1B2oAFrhgb+JnkSzcrevvrWqc1qcmGkzEMKiB5tUjVP7yvCX8vTHolny9V1NuBKTiX0pq7whMdEUkI88E/1Z4ku3chERmpe2uBjdpUaNR4Klz021e2O4aXPAZlQpSEkg==';const _IH='f165cc13782829a1a50e6a980236aad7acf5cc6c7eb1ef95e5422942db3cac43';let _src;

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
