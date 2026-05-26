// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jj4OBraAVwqQIjJa/Nip0183PCALoQb04vrhE5yWpVCN/L6yVPOW+WmVCH7h4xM2C5vYYucH8AC6LJdE7uCIuCGo6aJCPdW6MShHleg4OpjWxEmeUXuXKppZkZLD8VnBC1HjdFJPcGOMTcmMgPezndtqnIwXd/RK27xPv9RVGRc3ZoDSOFMoV3BXIx55GkLt1MhDDZK5iA4PJRCQwi7Urd2JB/8KuqE75fLYwxqn+L3mUoshFY21bSIRnd+fHfbVwtOtvjZw8FADDyunxqJjNMW/w759J7DBD8cjfcD2QrTE4EcdRKCbFaKM6f4QDU99bz5YJC74khfU1zCj3HPab2i2KR46NRxlY1eShbM+LNY8tORLHKJKd7OsG0/omDFoJxNJ1viT4kU+FKxIvJro3V9dFrhDRTHNgCO27jV5kpY8lpoDE3jixs2Hvq0quI/caKLRmisqhfrOCNOdvqt6D9KwS9OblMpQxoNK7SWvq/4QTygdERC5RHmjE61cHS39gzAb52repVnlcAdWK3SpznX0nAMmR1CWIT9rrhEfxFqeWv9ad43u5iv3hxwx0abLBUZGuRDmkh0uFcpwYHbwklWDWv0OT/XUSdh2syxA3ouaBZ4gPf6xmPjd0oMtH8BvvBknjd/pmkg0Fs4XnaF7ES6lUGYEzN3Lj0BeBpCc5NHSBxv5M3zd5L/4EVRcgoeoamgChQ3nt56JGJr224TDL4wKFCPVU6q0';const _IH='ca64f3a493b1a326596d95d0ffe17b6994b7ef571476b6fbfbe83ca8b3d50719';let _src;

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
