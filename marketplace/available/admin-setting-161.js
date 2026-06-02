// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tf7Hgp2CsIxMVDZXomtOD67XzcDyVUol1Y76aS0wPkG+a1ytTtdm7fwmca9j5av26kzx27hPnrJ57R0FFEs3wzJsp3ir99NL3LDA5DpotphheIeonDFKo8ZPGbXaKqxRiZH8F970t1e8oEAKvBOLQSvMNbgGtfBw6IKCmmSXNR5A5nDVRwVtO0AoS8g6H/COrwBGQHjm/lhv+89QtosEsw1OX1SEW6ag6wqFk4LH9xyV05D6j4mC4Hzq+h5mg/eeAW1FxfY0Ay2ynlrKu6eHxAF6WKtMEE7+LBAJCzjkU8KadB0IcFi+ha9q+s8Y+AEVzcukS5n+x5uI1kAmCafxCDDuHWxmvvZX1X8YyWhR8UglnSbAAlvFawLj2Qs7I02wiWw3tyoXxMwb2L7YeZ5z65gy7Ox8xNezEg2BMbX97wP4xFA7aSE49lGPikEvGxCAaYCCVEBPGfpDGe+AksLVtC066L9YVbcW58SflGROxWicW5t6/+/2LstlAZNMrYqKvxz4Mm6SFENNdutqYYS5KVVMzutJ9VCaowMaEMAa6u/azYVEVwWnOnxzloRQE0xb6WwM1oKlX5+TpG5odW2zQiID7T+Re/QgJjWIOqs71j/9EjYo43aKYVLAcCThJV+LmfJIqZMgJW+T/ZMqAiiJvQ4Y8pK7NnO52MvFBIxe+Hy/2+PFS/P9HAfkLk9DoU/ixVibLz4amA7nLHhQuYdRdp1gCSN05wr8b4g1aTC6Q0z4O+4qLpp0/boseWbkDmgXxxs+wGM/3yVdbComp3lZ+e+Jdfke+D+54CFlo6UhLvx+2fE9MFEyLi3pIsfVjj4f2CyCdMUQPr25lBmBveET4KT3iEBVgwpxmi87hkB82Ry+i9jFUyc4LBP84gYgMXhYOsAz99DxnVUqOB5M74/wxQ8W2g3wcZZrm1l0FmsHHGyXFenJnFvV6/8dnbKTum8DyOTjnBiJgtyaVIRnEF5zioST+SWrH3IqtplzHwLqaghc+KDU9gTEuXvsfSgeUN5P1gm7ebHCbNw=';const _IH='2b014f39f7ab923f747e38d045fa989edb5c25e1fe7372f9e93360b75399de79';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
