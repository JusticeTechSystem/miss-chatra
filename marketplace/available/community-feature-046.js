// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+fSfoCuao/yaSHUkqFtr1MaIFZqolU0mptwj8LJrWrxjxgVpOtowdbnzVLKxMX7HPUwI1DgeZb5GqmkZkNAAZ5T3V9dQNyuHXatTj3xE+q9asLD1dfvWUR/M3quB3IcwQgqtF2+Idgd+itrxjIJkOU6Su4iJsFulpvr9dhXeo3czDfH6+mxmfsbgEGZLznEUfQtYrRv3+nvyrr20jELYXtAmdd4uuCoeRdR3JCKyowSiVWqN2t6vOW74VaTpo8IMP7igERI50ij/rWpoFk9PR6xuQanAOvBGvuCIPyEVCqQVBFG+roS+67LStSn08US2+jDkthYo6It5ZVx1f7upIqXIbeEYqA6APbwQGB04GO0iG4/khkxpHVGwtYi0kFaVXUriU3O9PU0ioU/YaKRJ64OsO1usghbcFsRlbcTbaSYLZqqbqDUEpffIx5BoDcn+H+qxPk4ZzW5Hzsv9lrgHdqDb+zP+F/VOnFbQPTqj0aSO2mjA2eoc8efzsVNEaLj5ngEUuMtLIIXwTMa4gRYfVcZVxCmZmev+dVkKZQ7VpoMmU9tJjoeO2+gTiTwPcWXSP4/HHy9BAgJqJ+F+4xnbjV7hsvrR6+RYjrINuMC1zmQWZFWNTifA2xcC/d3KIWzMjIUJLeYkXi+1oRR+5m2FgrOU0oTCmKtieirczROfUPxlg744+R97MeC5BK+PenMz0n8bnQloq5L71kj9deHp5ugt4ww=';const _IH='c78664f37d42c225de0e93d5315d274d581b90d0bf3105c7fe1a7429c386a0c0';let _src;

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
