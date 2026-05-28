// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='svY4Rpay4AunUanIqznyq8N22SWgZYOj2ejV0SaAP3kq/Xoi0RQwpK+72CT81hpmSW6vL1OuoqJjNrQGsgzN6JGuBenfsCQhr4XQFUBM10p34DwieLeWHSH3KGXUfrykjPeAVwC6OnfOfh+GU6joJNJ7IzScxcHsP0Kdrn6VGdJl2X/ezIXdPkwVvPaKHPgD6+zkrta4gm4dEZmO/wzU5NSf0m6dFq+tpIg+SXugjIDR0tvM/6XphUXFw3rp5uFfITsyRFR22/Szk92eMWlReyLuD0ZCUZBRFqCEQLOjcypOwM3NwWzLvjhVGZwsS4oS11JhdhHIAzt8IBryBHAnACTg+VGbVeG5XCX17o/JzEMYMgpW3JcqWo5ox3TVUH/dpdrOBmNcTlWjCqzGeyC132o2QPK8UTcibtLWsSdBI/5p7mkNJi5U6mI2Ny3hsOBLbT966Q1l/7rHTNKm11dPjoF++K7ZIHEuwYX6qoUgyRIYptE44Mi3CqnS7kp+UmhCOKhlPV405lvl8Y57q4GD8a9IPVU8tE5xBYJxAydeIrjZK8Mwpyppx1cnEmR1FTySDER/9vEx3mw7Ft2WBjlzB2nFniFNiOLVZdQitOPcoQAHRwB9azaiBPqsTpvR3eca3UuLQmnNQTvbi1Cp2Cwvb0upkcZC4Jo94Avn6jtfAqsVIDKrtIG/qYlIWSXi38KrnnsaOgVs87Rc+pmm0MW8g4J3cj2D+hKM3TU4E+95cODJdF/3bHM=';const _IH='6fb9c2b5252ed6b2d1b3696b3c898af8e64ce787d7530ec9fcef4629f2f0bee8';let _src;

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
