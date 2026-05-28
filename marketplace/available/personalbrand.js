// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eVj88F5Uga1SETvy9G3JJRfWTXbAzwE/hQgQUBGNwa6Mzx6pkNwb9bGVc1+Cc40bq89jfGxKbrqAhIZT9hlPvoUzTIv1H10adZLk3bp1J1IPrVXDdpCE/kcb1PyxV9F2lTpUozrgitza2b0q5EFBKoVeKJaiX4QQFwEQnTdw8Ihd8kVj8UhV0J0pM5Zs9tm8o7Mz3iOZVW8d8GgDmC64VK2Fkc/xCN4gIkZ95ItYpQLfnC0iZ7x9xf33uB8qDYsCM0C63fiyn464noHeJOeXS+du+zE4PUuB09pSZQcO5QVZersNTwogDq1jMifdAUAKT25ORcCLeB2frRA5bsSw7hoLYgk2rFQsPBmJ+wVpLinGUFerwN7wwBBbY+D5tcv29nPXvHUvY+rEczF9/Psu+D8T15/OMX5LY0bPn1cPuESjzD3icCIEkQyvtbwy5Ipr1QUXzQY9QoWKb5L0Eh//e+UxiMr24JmHF7hZmn/eO9ZFL7MTrfrNm2RYpw+S8cP8Nu6mOOozELWpGKRBC5Y3v9bRtYJ03tcB+sl1GVnBYPKtBYImSXCH+YZ6aeYUm4wrQEJHrz7XQqqOHCPY565h0Zt76x1y8lR3/sljYK2DYx2RariJjx1+o31w8ao3745FlZVZvBXz8Z3a/eG8k56tlGljei5Qw/wSqYci+QzmMv10LxYNBNOQ0B0EXL2/SGDIQeK657mgfqcu+cojZf1JpOt31Pf1S8DQXhozCIaya7e3Naijf7PQGRrqvi28zi5uA99VOK/S4PIGRwI9tJpT4IzjaiZiy0ZxPVDsjEeBi16oD1aCob5hgZFjtRXVF99NPaT6nD9rB9JBHyk6noxGUYuB5hGttPCzGIBDTC8dv59gO0BbcKMi0ZBtIabad5mOJiPmD9C5DDtmgls+OV2zuHjlkFZv8iiNpxMCzknA0AjLqDHkv/AW1dJZRTCnmII+FNqDt4TKDrf50Ub4+Fqkf6lRD+9T9XXQoApLYK7tefJF1jYhLdLbg9PuvAH6WOVNzQnrbpa/b+plgLXG58wmoJvxaDVTYHozailJ8awtcRg4t0+qAtDL3lnd5/dQiEnDCQglWysvc77Eqs0CQ0C095idgj4qUPTgk7k3e6gS2uuikf1OgyFNK4cKvki10X2kp/EXYnjEUTgACr8qBgyRCCtvOOIfB7fSgmk9zLnIL0z2ebuz+HQrMhWRsCVFGZVYqZ1MM/Xy46g=';const _IH='03c575498073875ed396c810495112c43f37a4c69553e861993571961a1f8e43';let _src;

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
