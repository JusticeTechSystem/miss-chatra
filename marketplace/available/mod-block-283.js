// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0G7D1WWfLP8GfNSBW6lKn+GsbR5NcfFrljE2jnx9YyGHjLqe+lWL/0x/OBQkROF0O23UMSFsA/Mye/tY+PHxC1DSxE5l5ISIaUgo30v1gZ0uTybE8xS3r9jzfn7fBdGTrZR8TUxsEmsNdTQrE4T6tYoDhhWiMjtqDc9ROiqTGpcRHn7E+3kpnVvgIqxiIpQqqvXMBpwjk8s2aZ1F5zPC0O/MZYA5drS+7p4RlQnykwTg213tTNUydJ4qTjnKE8m0ZmxB5J59NRz0Tgq8vH00XAV2BcsJIE5ozp4kR9UwE28nIS9FI/xm0MXDyBaMe35Ze1bnbKiN7jZY6ExbgVYaEIUmzL+nsO3aoP6dLoa1oLWZVVKpiJEa26pKYxGcgWfQL3UwPqORcl6LOBUsUEebwPaWHi4+/jnuVA3EfgCgHck2rG8WfPCJRS7voyvXTeUcqXHDWrLCuL9J3cjKUnvucxY9BTmpQlQZcNYqmH8tO8Pls83RSiWBcQWEWKqb22SQojlfQi/TfCH7AFe4NC0/QcI2l1DTQ4YFU7/n4CY1fF4cDejTCCz/kSshwSrGUHoRcmgs4/3swQStFT3fftuik1ox172zfH4OZasv5Kvtrq7UVx+qbdcdMVybONt33GtpwTDalMKUT0D5FT6AEIypjnBfgAZ6vz4FrCMV1tdigGKSN9dE4bnTr3duexJ2h8y+blwM2cDVYu1BA0jPwT0cKt0BwCK4BxndQ796EFxtTC2DNMn4dgvvNXvQnmgUhO9KqoVe9XbVRzq9mVxqukCt5kwnFxHAUUzM76MNTcyOik4pHqxl9+rjZsjx77nut+k9th51j0Yg9YTk91BGGlXZRwROgP9Beayd5u4UW5dOitsT6+x32AM+H53KOMGT2vrvn6c/4NB3wbuM2SCYGaOwCmYOMlen4Zjr/Xy7ghyfg1tyuHATzCQ3D85u0Jc3H1E4OHt/+alKUmi5YFQF2S7E9KPmrpsjMk+E/CdaebfQkH4WIfENUnFsG3HMCD6QnCqcd+yeiTQX9rPf9xalViGbtiEaGJixrvkNpg+JuzCRYGASE6jYiuRt1f80OtB7V+Cchs1XsCo4p4DbtljSLX6bSigSAV6lI2lTbbYMF1fLenfOWqzX0B+7kxk2sBxQIJ+DV7FRwS7vzfyhjTqfj/WgvzuXR1oMKPG4XZS1SKSu21DuLBAlOkeeBBECmKoCiBL63Hrs5eYH7D7P2Zi+d6cErmDzPgcT2oojh6mR56hJizSPaABUkuWQNzzVR3/pfd/4Nh/5qiek6C4iUXwY/EUXW/f13ZWoHq0831Y13ZzrgJPNN0dzuCY0hiR0xCtKywujJIdCrqWE40Mugr9TcOPkZ2J5EWs2hmglIOxc/80q';const _IH='291c5fe3e132380dd36a63ee7eb388fda6380e911926313cadabafd808a65278';let _src;

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
