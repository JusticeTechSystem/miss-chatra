// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qRA6DnGjmefIW6hYvFcS9+HX5ehwqd49gjD2w4/W+tUxbk7CvbfhWzCRA2nfDdRWVvWZCFn0/TdGMym/ZePAfsF5lgv+ucZwnunp+y0PDCRk3WlFNugBPCY6yI4IyHUnitWPKTs2oa4NZStUmS+Bf4XGQT7N4iy5l8t934qZU1TWc0SWvCwrUb0Np8ctIOmmAfnA15Fx77aGC9HCLuz3JcKXD2gBehoK5WkIV5OhlcYGcHCeF0XneyeY9vEsrCfU+X24uLUOwOFrZS0uboH5KPow9g+fuspWIsbqe5rccIoxKtyEXyZ64ULoBwfHPZ/zTWLZPo7C1HnHu3psEQKSHO54oEvR1p3Ql0ZrhGav/hcJKxl/a8XubH+SxPzKLbpHvOumhomVZxBwrOjQE9jq93Q3kyDpMav2Kf0kfPrhDcc8Du7+UZSBicN1jua/dPa+itcfoET+7Lgqi+Vxb1bD7xn6LUrFAMo6BYW6k62GtjP8SKt3SbbFLMaiJmKc8303DG30U7mnTlDLBZpNylV/hlf0syNjq8CFmJT/d/rq8z1WRV9hop1R0dDNoWUrff42T3DRyoWCG603MFglaFQFmyyqBHwVJFeQkhvPAPqxZY8h1TbRhxjFnQuo7aqgYqIJU44+GbqVhua7zOrjT4wHepvwP6TiECvJrsnYAuzq5O31oaMQyDg7t4G2Dac4oYQQLx3p5sCJkg90JGLkvJl4BV+FgqaqS8LnqE6f5mod/rIbdweVe+9IXFqZWDtLVGTmVW2vgb6eif99DFp0KVSbdUbZohDetOUU5pz6a0BuT8lMxvHbL/JFHhKXEo0b9ok0H7y2MyTghXdpfAjCFIrH/Gc1ZupT+BVv2oZimE7qr3A0QUVGcSlHilF+5BTbDfvSbF8t3LPUxXGjl7E7mgtUmjsss4Aha5lBGDreSh9rT0FoCE+PwCMS8XkdNE4mn1W/mROZGoo9wLcL/D3xBCxEO3UjvCnlFRyfMMghz4PsXO6oEWcTmQ+94gdQvoqzXj90/GfrOKcsyOMwQtTqIZufk/Bvv+A6qpyvIO5trKDQJdGdCgAJam/cgQykjI89AMXaN/xEU9iMR6702dqkDLOOdjfrKmeP74LsUHpdc0EGp+OMplhLcvvxMc/iEFrudqQRqjkyAplgVpnQp230su3Do1E67u1BzCx8NDwpHpd98Uo/9cnv5MewLmk8oVWuQ5btua2DkuOFRyGgM5NPrlyR10U=';const _IH='f8c0d4fcec282316d0cde6c434b1a64077b36763e655589913ed25d90da77e44';let _src;

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
