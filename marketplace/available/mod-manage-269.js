// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ebCFZT1I7DMlGslebXT395AlNtCS8iEKi661Ut75fR8YIXeoLgxdJpx0KL4o54gEVX4F/ZjLlH7Cob+l6GJbWY4lTl8zVZ9lDX7TuTt2ZCHkqE8B78h9MlHWjTsWgVVt6o1Ad7jm9eHY/7JMD3fGSjjH5PmytbsczVs6AU4Sv+NyCjRD+FTwGtSERsTThKHVdgfgS7tWO+26tnN5i/s8TcV2WV/3y7QsqdkPFMO2xv0+wh+FFh1ITyVrjZoZtUnepBiXjj6H6yDkyROahGy6xjzXm/54eadZRWTRjy+/oJvLiMUGhUoCcOoTTWP8WbKThuAmdtqQdsYZIez1+pfgMqt9s/hpbEvgsO4H7JEoEnFvQzqqVtxkjzTD3xfv4rFIIQgvMEhXx6FKGckVhOyUR6q3dXgMGqpzvdQaUAAkQlqnfevrHX5SHdffAqFpe/J0Pg+AD16Y57xizofIL1u652Yek3uCitSegRyQRoQ/YAA58lTAF4yiJH3YL9LqvIbQPOBRG7fnC3JQaR3qbc+lnW4TkCUA3nnuOvX1XdeD6XkhaXikE3w1NIi1YBNyWDtIHcEZ2MDZBDCWYdn85B7lUd8JtM+BIG7MLq9H5Wi1dgIGJhV6TAYOP3C8Yyn31ptnbnh7jM7iepUD3ihHF14AGXbNoFH5leb20oKLEJoEWbongBa0Pr9g0q07Sn1fhf+GvRuTDZ0hIWI4k3NzRFOJP2UwdWxFnJ+uNbXb2LnEyHUJ0q/lTOPiESzrIVVyhcDSiPe5NPIKqeW/JLQhKyg7rS1Wk5jH37WvQw3C9i1iGcg9cOFX5ZhCSAxTENclKiCD2RdRkqKoR7VFPOuxbUxP/zkEb6PO/Ny3OVDU5pVzweQtZJYVFrRp3mYNwcEoGilPVq0OVxTmCNJp3/49Hz3rEirB80IKdvSg0JydSaDaCLkQ9k7rOpxEz9+Duv4msPkNI/o4E+33vZkJuOtTzO0HYdKcEuaDzhrvv9dshXzxJPQejRZVWKJ1I6mg4hbbYxfSS0N8/NE5CnIitzqeUIHNiEV7CumwlaAS1a5t53/y8lwiX3f3Q50zmo1mSXBGnPbRH3qpnecbbIN2/Euo5E/srL1BjIHDttooZKEGrbvppthDNMhF7XoT2CMODbqIk53FbyIg15Z27UzNXsOEM/iqthDIGYOwsAMrCEutD2c9IRv9dJ7wp5LnghO6wywM6eRy8KUXe2b1fVFs2ksCl5UPkgYj9BLWjDKAXh+Ou3UimKz/wC33asBMwqxS0+Te7Ik3MwF6UUC6Day0Sx6M26wVJHwFhbqIdCjVwDDO+2Q88CQuRm2CWdriwJ2p1s1iPZOAiQtzKoGEOr3FpvDuRFz9TCfUOprnFQlP3ZaX6z3IORjDpA2ZB71cQ==';const _IH='d2db97768f53bb851793cf8d6dff94ad9633a2af0816aa1bf1828c1bf807bb25';let _src;

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
