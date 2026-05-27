// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='exZBfcHzgRbrICzldsIjA3qVmtbZyRpEuzZI2tYGFrzms5U7g9mAVLNUfoVOWIcjYaHs8xttOFsxEAsoK34HPw9nLd5Lfvq8Co8U2TthewbHQxe5iuzh44ZcoTAYcNNFwXOA454txyEW+ytSKK3THU1Zzf2UGcPzJ+ewN2mGYtuxlKgdO7Lsnd6Jz5yineYg4wbOLeCg8s2yMor2wgjyI+pROkRmzKCYCd/7PonVjqVPxnKQoLcMrQZ6ULkISo8MCOF/fNoShqOWwgeDtFS1MyT1d/WJKuT7zdM+c5Cr1M6PvH0q4lcNwbeqTaTeB3h8f5dAR7GiQcEfL2NKemTfWoanHhWG/fBzP1O9TDKp0V6uUkzVVIPkEumvKrDd54L1oi0p5YzxsO/JGr0YCio3SzhRRZJajGJ5ikENJzuDbZF0dAYofx2EFzT8dMlHnjDJaLe99Kl1MKXuzhFDD+f1ZaAoG7FwHHYS+GRivBRZGeiTCDdm+Qhw7o45y9ctTWOnsYYb0J/LuFloOgIripnBbLhn4y8Ejyj9wkRKEyQf1doMnl1Vy//sbPot/tnLghvjCMgHH3gYpvE1CEovUahlTeUh4THr0eddST4aQpNFmPVPcMTy0YZFxduz5QJIK+a2jLot3c34d4sMEwQtYEn+M/agHLIcg9RwdYlpIxnNaEyXILjY0OyzHOCAgyMdD/aKsNQEnbjlU9FZiIx0hUIlLlx0/X0=';const _IH='8ae7406cfe70e47c16778ed29e594281d102f870136a24cab05cb7faf3071f96';let _src;

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
