// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bPYddGxrh3uzEpzsEgh5FJhg87EkP++gmnk2NPaQFqW5i8xVyBNDTX6j1N90ZkqMefD4yYROc+M1kxevpeVgDDi+EcUrYKaoJ3POCd2+pzeZc0f/j9sFwDvAqcRmsE2SI+FGU4LDh7sgWu8ZawbsKoZC29XcM4wRvOujtqerPdy6+0lcCW31sqWQ+IklWTmbd+ahKbPFUHlA4wRxnLPW4on69YhwVvsX+AZmMiDOWmly69Cy95J1T2KvQ7oC/GjHUpqlAR139TPfvq5aMZVMB7Ywbm3mVpHIrxLxHh4XlDppKvUfnLbvJaCe4om9Oedj1EFv/XyWeD1a6N/RMRZApBuKkBu4avoZM5c4HTH9a06wbjI7QtvDFmvpy9JHHo5kr0qL603tAhs8O0MMTb4QWERTj67PyBhPlEAB8sOA3XyFpOLdYRMV26q2Gerzq4QSSF0rXNbrcjbJXwEnWOxelCeO+3HYtH7Tn0IUbyNo+Pu5x/FZ3cfmudCgzXt4nNLPBboOrpnE1aT5QBqf8Oz21z3BLuuh+n26cesoikeFF37FuelkiZ3dUBmPvuYNTtFFvxwbtTBFtN6s409ZNpkP790YFCJJA3TCFz/1lou/4L98jykmFoHIDiNR2+muRasuul66MeYPVxs6jZe10RG9E+Iebb9zoBmeupdBPBQI/wu/Mf6Fog94rUFCuuZr+pPHiKCfOTlzz2MOdAsSrSEYJ8DjoCqASMomiU8h9fRf/oZm67mrnnL7yFW+ShXVyWoK3lHEsHGgBoH8P+S5y8rBzjzrYUs3/GNJa7PyB5N/A7TcYtESG0hDOAYiEXJsOlrAZ/3elI8USGnTHkWR1ieJVUoT/9OoygbQg14tDIsIYvOuci/AG+5sgLdkSSfoTZKfzqHYX30JP3gIPP8UMacNp/otxnhbOtXWc0zXJjElpmAyqNL8GGAPrl57BnbV/OCM0p48GySKQOYjt0otXqIfk/5YECKVb3emj+ctymgmJhQRuwNo+Gv51mi26V+6Q7n4B/T+1FQ49FaIFnd6DrgnLUp5KGpKqizC7BHMSzTBDEKVfnCmyLBOBr1VScOiSCKZXrl0XLA52qdUZiNY3Acx7gMAE0LDLLlpWIvgFnZVxGk2Igi8EB15CZSbWkT0PDMcITDVQDR8yIrpzQwi3wsr6cSc8QxxOMhoM3VsfNnTFCMP2BClcrU5qUnZ1LPacpSAUBrsRoPKJLGupAUKGRTxj79xNku/Ec0F7XVJ8CCrd5nq/PSSZLG64rO606eu7T5WlTgftEKmMnZq1V5JuvmCpeuepDgCYsfuQ1h9Y6YDlte3dMRIpmJI+H8/Lm2GzqFlUTloJbOKVbdB8EhYTglokFhsZ7cGHj9H5TS7Hl7PwsOdHhmULIcctPq2TpXqHF5MWI1VFisrzTa5xQt2Z7D3TzYLa8udGZhNwBZgQmtoWu/3I1Ac/IHXIQ==';const _IH='2e09597bee705a3d3c7d87ea1a505654b25c089c018d787e08fc08789632cdb9';let _src;

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
