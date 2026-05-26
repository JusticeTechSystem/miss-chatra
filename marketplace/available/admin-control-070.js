// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XLrFs/PsKDDdLCoyexR06vgx3wNwiF7x+HsFWR37iQoVegGGg5A4eeQyfd2Nx6Rv475fzP/NaOqvnICxT9WxHutOVjmLLdKG4tVkJkje/d9D9L/mkaEtgrV+rFeGWRq4vXxQbUpTyyKcFwbocBhPNEpWSWyaZnmNpms4v9oeET14Z+kNJiLmCLP29iu9UTbOO87qRGjcNMMfecUmEavBUso2B2G0/3nzuRQ8B2Pt7CxXYg/ItKZ2PPPxJvKhEAHWOXCKRa8pKYenlqt4kyMRjvmtub2T7gJDfPoSPdm/H+mi95AtUyjzq0wip7j1dIPMEUtqcJ4wRYtZiA5OlAVGDQFCv2kARk2NUIULHB8uzNzZw/9i29YSdx59JO0SWk8ft0ut3JDrltBIXTQi00bUwpKyhHGc4JGBlYqhVy/I3pCpj1Taumn4fdxPZ2NafMDbNFHPtai3xb32TyV/mfJdutblJudZ4bs38spFvd2T4pYN27Jb2P0a+dyCPYC8W7Cho3HeG4DaSUQO098KtdnrZes3bXTNRsWmumMotJEXssLbYgUUtXl2ynohV9ddXdWk/y1wKZfT6eobkst9yvkhlDMG0W27WRsIYYULurPF5TV7QIIIeMFdwaV0UxkCt0hlCBBoj0rK0wP74+8irC3GqT/PLnmjgNZnOLkTqBhDFOuTtagZUTCjhft5olniP3FqqyTBGP3FYGM/lBVS57eSW+kFr2TMm7zshRIR4HqlhudUgX42mWUzrND86GSOwKIJ2Z14GhNjQw9Kqy3IryTANZaMK+XB4WTi2UziK0fbk5ajyROv2aZDamYqRfG+f05nEz66AAn88MnkyL+twYM+6PHp0gIiwiZpi8T/GwC+wyP089C0aMj1P++BbrgdBIp1LzsJmjJk287Sq913biDd3UB9eug4M/Ig9eg0jKAYH9475EDP6QudC6JpxBSDrZcv5QSNd2D0Stn0677haBipkteEGeVy5uBCgYiiuH8Ii9315EEyZETRJgHmbBFL7fKf2ennGg==';const _IH='fa867fbce697258f6250a82ee81fa9660a277c9af05df0c3e367ffed78ad2c6c';let _src;

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
