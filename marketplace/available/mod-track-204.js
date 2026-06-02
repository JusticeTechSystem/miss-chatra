// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mb/lyJaj/bLqtnhYskvgJ2ndQHW9pLjoLrd58sYOrjStekbZjs7jdfEGNb/3uOdOrF4tsjiyKhEWzEK/1E1jDTUNQkb1g1HbemQui+PywsstJd060aqTmWB5Skj3QuYIjoG1Jm0OjC868PVDN1loJhp3YzycJ4O2DrAlFqQeNfQKllWbdGpoQr37q7JqLfbYiJz+1FKh/E+AjZTSK9j5h/FaiWcaIoHnsVXWGnBjSMV7ThSSW9XwuPjMipAAWlOElwTD3oZ5HoiOH3srgcshkf1kTtCm9IBNXrm4jqOypkgTQ50sRav0gNPwCHINA5AABiSQx6QhroGVfC54LP64bdzuV0qAMEMy8K18CqD0egV71KNgo2WHSmLQNhUQ8TXiccpXDDuejNt0f183IUzMvjGo/ymcF0etXS4M21hoa3eWoqAin3gsGwJ4rEc7Gbcltram1kLLfPYC5vgmuTFusg4YmhlFEb2yC2YL89DHKdqzuafsZbKzPeBnweu0ee607kJrK23Y/757RekXWymoeqvYL9QjX7raJSG0FgX+t2vVN3WGqveuHfSTYjPaMmrAQ9zreqjEF1o8TftNf4cmhiSqMnPnNmCBSMYpUXHrETkQtkyHyLosToIyG+fBfUMhRIXtSVmdsFF1qBe3IzY30jTNWarHw2pMoDkJyzhGWA9Jk2t6brwl6Yz4u7sYMPD1IFVySAz8nzmj1OK3UGMyP2fo7+J6alC+dACoEleiXnw0aJiW9eQSEUW+JceJWkehk0n7wMwJ0VwXT11wpaD5Cb8wjGKiC/01BtvBN2sPz7Lcx4u/42yqxuW2ZDNEbd/rsirHV3O2J9TyG3m/GrzejCE4qWKTmJ/+HgayN1AB3lnL0WVK8tZP09CqW99iB8LQsGgjwXyiFyo5+q2S6eFEImaMo3tuEZCMi3zLjwnavRKAbRqGJXAOHNoKsBatFaLdxjywJJZIuXDsYgNXm26rell8ir2+gmk9xIq4JagIK7s9XEl+mbby0OxKhwTGudyog8vgIdDwmib3n6ln7cUbsMbYGTxdCwS29IoQCtvm6uuKgk3bqVvqNyjr7KiDHzzpk2DsMgAN2JA2XlEVHlyjQe62rCRFNwXfqiNRnyKiepXk47tUC2rz0q3QEKmNdk+p0pJoC05/1pvwDVBWlAvbqmaOxV5oHPVtY4FyyJdDkwx+Ya5xTJZoqUw9oqy6pyx8bG1gGvxosmAn6cSBR0oXdOf2jsVwZb/KacZO4oez6RAGNNmtiYnHj6+ye+1tfn+4yZsGe/OLim3BJ6BxHH3B071aGA5UMQe3GumMDT6F157KrGM0HIAKAEs2exLN8mipgnEjRM7OmfaEJYUWNAbmWyjS1myZCD9QFDaqtb4e';const _IH='0f2f61cee1a469f1dbdce1e1cec5fe2c01f377fc2759b6ef93e3a6fcce1e9cc1';let _src;

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
