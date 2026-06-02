// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C5JMwzOnE94VsY3944gOdscQ/g9pTK/usI9mCJvoqCTMoHgg8hO7qKbgLYu0A5NEPvLJUnKU0wV8EdIDpxle+N5zPPtvHFtr/oj/F2CpMvpbzQ81/Jiu4Hk5lswLDcSk0f53IQlSy8zbTbDScWMx6X9qJ0noTBipoK95UGprkVYdRSylW2YPXCMk/yY7jYzjWDk7AptfHKUeRy/w12KoXQbSxj4QboakuAQ3lkZhWj5CvUW0VALBXUX2Ra4zaYPr6UiJrWra6oGva10HQmhWFeVisQOlBiK30+b45k00TpBeYvfiW3vMstDp2q7hsAyPoAoUVYos1d2y8NqW+CaLm2uUX7G4iCHhCYl496nAVUDVqz/UM/CyuUjY+0bdZduDHjLEbPrm9KndGKTVstzz6z0anlTt4K/EI3pEPGVaXpMLyW8SXzDw8VHwWR5oN0PShJy0NH1lIY3DC2smODM2Jqp4K7+CXDfdJL8DMQwGRKlaf7ua7SaxJQ90MouHj31xeP6awgd5ITYtgjdn70Gg+G7bTCUoAroGibSg+z5syWpIhf+LtPMGlnxF5WYUP+rX/ofyYhOTo7KOZyRC98GDHZpe9DvDdeZNElQj2PpyWUARm1dl76BFf0mBW57BUgpGKO78oR2RODgzYIieatUyKVzicn4+JpJwyTPOPsak0IpEyxH4zN+E7SfkZmUVdYFPTsA9/kkNpKuErsbsbZXIUVy9/xy59dziDbFDshyyMG0BP94R4KzDuTT/PzykvSApG++z6ytm+3V+dAcrKs3rhGS+yDo8MOcvlUBuTm9IsZR4d9V9WFCAB5A1TsB9OFYbYtnizR8/qNjHdL+jq/UzU17BDigXFiGrvPfdZGgzS/KqvdugOBxP+6cmLbeEje9TvQWKnwygZZVfrf5zlnTG1tiv6rZNDcrAHDSAfdMYJnEqI5/lKiaGAOgYZYZ+7mV2keCbypJQhyZPjQGgZGpymRzdUp8jcu4m8nbXQiKUHKm/1O+W9gOm3AVLUr8HOkEbvpqSWZ30YFN4SoDGfPPcbReCGGtcrQGpUCEvOrzpyY7gOXq9FBteeCzzoX9QFHuH5UoRPCyX9U6hK8LzJJRF0HkZrsihBhNzRdjLQMpjMnr5+dAXU6gcCOmlebqemj1SExaZQ4LcPfEsM/r6fQoOH6Os1srxBU2qdGoCaxnxy2noLs2zmZT/kPXCe66Xjln9lxmVA1IWPvOgnw3waPx3q36OGL+PwmwCGcRu6qPjb3zMiaj5SlDXM6zyfjwqCCZlC52H0T5MHuV+s9265i/xL0q3G8/z93ldo8HGvLdbbWQR6DqGDshcbQ==';const _IH='3cb89048c6721f55fca99cc13b9a2a69bff2aee391e696e8d351494716b7f825';let _src;

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
