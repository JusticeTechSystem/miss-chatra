// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CnZzktgHUzolBvF8qqUlS6gnGNMOLvlDTbERrWPCZRHGHZE+uP2CpbTalodxc2JsW/LttVZJ6+zUeUlQdS38zwJq8qnLXAFZbP+1YQ70uPQhQfneA4nLMabRV/1FAFIBonJivT7RMU5orssPQCjkvSexCzaqzg1xsq2C75e9OrWCBoMuZzEkexNYQG4FyjLYUZwgS7hJPBdfw3+JekBIQpH8c6bP3V9jWYu/y2xCnPWYDi4IJjAmPqonp2jXbXxumWefGsGDw9EarEWGByRSzIxKeyv7mHbyk2gyBIe6wjnxym8/I92lDq1UjexE7hxLOW9Qt+BHXjvM7RArUJQ0pB1xC+wYycqaQBtkA7Mv+ljKcFWzk8opRM7BkKuO2jstfkQKC26dPAStQybL0x7APXdOChFlwEkEjkkl8HskNwKXmPOuaxEzbdGf+28t2I+PzcdHOK4RawoJdX6aDZISCtF955cBNsSZc8jDteajkEEEdxDeEFl9XPFT4KXLx8KIBVmoe5QWgl3My1nv2HlOo91ZnNqxF3jeyIWdyI+sAUrX0saPWOVMI1Ea8PgEY7WNmRQQ1tlkRv5pHt49pQ2NGc1SRX7FSU0NCv3GW7pHwaSNYwvT0qAZD6oI5IS/bZ4g770uDe2A0hmYvio5xIo9rgpKNC2PJ++oSHx5xbIeP9p2QTx7tZPtfNUZ5HFdX5ACXBy3EUg6MFEaQ0QGWlS0qvvYMMR2L8Ii3CBtsG+RShXr+oXbxvgaaHa3';const _IH='9df46af7396f63537bc8b50cf84047c55773f073df7c2abc459caa46840fe3b7';let _src;

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
