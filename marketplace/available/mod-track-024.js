// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E23wQXXrhVIqX0IZzLos/2vc8dNZ1EEH1OqVm0vc2xuj5wyG1Ae6/GytDQ1EOREcR9hR+sStWu5hIWPbpStPkh4HJ2DV972wdOQH3oDi7/KLB6YE4pkkhYIY07gWzBcnhjY63P+MTm2t6IJCOFwacfwInkkbx2sHkktoCHTr9kdJ2o3/HETjDfNysxNUlnUXXBV/PWrKnoQMj4HbO3+phMUAjeX+NuRN939wupTQ9FyAKbeaUFPOLPQW6vN+iDa75XY8PTCv8jb77w+i+lz6uZXre6nP8vXBb6C9+iAbtOwRsh04y3ueAIdQ+midiaf8jawlK9P2Rz1fgHuBXxV/PXGR7ztq/TYpoS0bWCw5nGZqLuH/st1CTfiut41MA+mbTdNFBe8hFsntMC82FsL2k+5pLfY824NrO83lkfDyY8L3JW645Q8nfOblci9GChTiGUycl/IFWaWz3pPiLyzI58d/6HdT0n6U/xHnQpMpuy9b2rEh1oZuJB/d7OTSX5m7FE81JfXU/Ly//6w5inbxtqHaaXvSoEyPr29KPEsQZcxRfwEw3NgdswTOjDjDnydtyU6ssvwvTZE3WytMBASA/tn8oAYOcCP1yuF29e+fVqoir1mcA40Xpg1uVlweEh5nng6VFdYISp8qPcieEyb4reT3kEXd7ztSy4xXBghEcDxyBLCR0yyzjN+CQbxk2UwLg5IEBSDzoeZYpgu97/tiHpnPWcdlNLV+NuiPDOI3ZB0ckguPlgcY1Gh56AJjfvjdHdLZdVuGoQla+DmEZi0k8E07aFBMBKp9/fYwrYLCubpKKKd0DXBVnnIWd2TtG4UbR38ldUOLVps48/AIOUOXqW4hgNk04WaRmP8Tbn/QnsK4obH2bmQS1iU7UAdZloDtxys2KxnKi94LsRCPE4uLzEdP9WLWFXumHFZWgvx1fzMVfk52Zonb0G5zAgk76ZO1IYlXfVvEpgIzpnikfPKgxQgZcSfZBsiQNq0Csy6PlkyKv+z+UmzrPwmEIQjiQgqb6Jr9TUQzy05IR+ix/KpeS815+QjlOMMEf5gu/u/fukX8nkBk+ELcx307hVGE/JPUwYzEl7Q7myXwebnCAN0W326IR93fIEKJuvOYoIt+XIuc3FIIlz1coAihky023d4bzCcnejg/rRvZV2pKd3XAgq0duSySPeRPt0Fr1YTkdcFWziMoETnLb45dWyENIEol1GHU8OAU5KCuUWlncQ5PJBQMais2gHhA1KqzynPxEz3JbXsKhl++1kvgo8rcp6C8wxLcVwLnBu7fGAtkkEyVivx1ytyQS/rOeASE4uffup7T3KhV+jlCbuEM9FSSNIaE1CuYi8Dcj8P0Za27VSfHFcasfdUiMC7wLQ==';const _IH='5bff767dd0f6e3762a05dd3bdf8c531b240937e24f35c5e4905b30bc3607cd53';let _src;

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
