// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='czrllinzirWhHIpj4zCu+aa7aGF1nYVBbYwOngmNfEDigiehTB0+XoDFt5VG/S0Pi5BJh9MUsyafgRpA/zgsD8VVfRPVm8V9tP+/bmmeqMKHbp55m49guXQn91UqTJuNWxV7ngNCPfSH20gPOBrV6la07bYErBk1kJMjDXNxri3Q9/L5dTLrFwQw+JqXGwHm+FLctpYm0e1rKFyzD9vqXJIpmsO7ieOFX7CBR++TTtmeMuPNfhDVHmmLfgy6QsLv0uPPz0HwR0IEM5XO85Tu2PFZiuLWGkxEvSWt40nOwmr8dY2M+CHcTrRd8l65uuECPfI3SJQx322u5RSm0yQeZBZp7ujzzTKh5xnojatNrKD30g3WKXPmSZpC5ywPkm+jk0Sw1//2jDYdEA2n0Ec2i1+ZCVoem7MNzTrwwT31qIBE6qmPCp94I+qCby+tymeDpHYou3G6HvYwZcLMaYvPWif0zOyxl3zDr6jjaejbft01cFloBPycy1BBMLbc227ZU+8+NvfMgSA+q1CdM0l7Cdngf72OFovJ9k9dIVToOdpm7TkskRYVeMF+FUetwh7TcOX5cTPcYmAYZIhLKpZHu1cQgBQSkQ98sPWHahAc8/xxB2GLu5yVx00w9kO3grxCfGxQgOLvHg/BKUKtH/L9r8sf3sFzQpkqitJ8N+YBlbpi7O6I5gX0UfWaoJmqJwuFkf/gCy4Kgx9Xosi6aRFgbz734KQdsRacPeJ4JqAeALgYdlRDq0G0yx6D3GclBVrbCsIedw40vlDWsHvRmlWKsN6kGsveXQue5lte/XO05tssklB4XeBlEdsChdzf7aMjqT9cZlykd2pcPQiUH9V0fBDi2x9al1tO9nfUIM6FxCbTELnDaUe5GSUTaRSydaPQ36RmiqrUSg6LmuOwLKA+7XSrx/JKWxiaf9E0J9iKtkdDDd2eTCx+IymtgSSQYJ8ZeXJZYFRpblWlD4qQB8yGVfSrC/+jEpZwNZchiofBMDDuKb1kOm0j4cYD';const _IH='c04c7958275690a0da51fff2c0b488f5d1c07515f3e1ce1d6c39d06d97559217';let _src;

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
