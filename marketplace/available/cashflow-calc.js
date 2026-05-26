// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mhv9wEXcMqmGonwteWU4+xOAYUuztico2p5LWXgHj6zJpt5Ll7p20rSNrgelsZDsBOQktaTQPFlMydSqkWZQeA9oSondodwjuxnrBYp9V+veg7nDWDpXi7znIfN0wUceBHCD3W5IuXNkyKyZbmMs58eP5zTahYvLcw2aPCstPIcTey4DlEjnX0WXldKTt2t/+/s6ciGrPXE4i4r9tHFnyxIAir+mR7J6AAyFnwZpk9G2bQEcu6P7w+GqvOtVv0rYa/2N4GCtk6ei47JHtCur8R+OsStQU8SqZpvful3IenTn6x0bJyDLm0G4C623Ny6b7WVoSZArXe4J8ishTWzAhkbsIQvu2yO28OIDYTnnf5Gf5iygWYjoHCw4TZ+AeMLBSGBGqYW6e10sVxVpJ6S43b2uLEZM+es806L2rPd5njzIBT0N/O3pPmt3uhlKegYyZvq2qRjWepxITy7ZQ0IOFEcRypZDwSBt3e3gX1JihJdILJGVUxH9AxRGQ5t3qQEc1OPXvcf1/2iowZr58Z5S17A6IuohqZ5i4Eh/KMEBDeLKIeHBLeD2N/xWDHE/bS5HEbg3747umykYyjrQBzEJfQmHp2bW7CAeY9e0FlVaIUPL3kr//ClIPeiHSaWDweUCsNUPrRqOPW3hb2u6NliJQyvFnJdCZDTfpFNQa3LYWghDinxHHad5sadSOD5p+lCMRwoi5nIw7eyjZLsYS+PsNwWF5GgfeBmK3U2Hgl9qfrhRXEwLrZoOV/2ac9Up153w3HeNXsIrZCiBn2Jg3PtcoPWypH1D2ib+liaC0Xsp3q4rQv2kwaxNzJbQkX4BX4bd9EPJpzrI6dkRlvhyQNxIskTYXROynaUNE6N21DISKZL7y20tj6lUHx1cb9QZY67H/w2Rr+SkvAnTBHiOeplYOjZ30NotgheDgZh12rIo6wkMD+QvuBAcK48tdHxq25Rbk1AlhWtrLVkHUPnXd8gbd3ev+Kh+EN275YlVT7ujWCzzow+Faok/smfmhagjG+w0c7Q0zXI6CdeY2z5y5GDnag9MwnVzG64zt/8/VhCY2tLVHE+iyp3ia9rROqsSGyml2Uzo/DsGtVLNyIzoB+pp1VyFAAg6vUUxdgfnSKr61OzikOo8eXs9O4RR2oeQCO+EkoLywOjpXDSpoe+UBKEz5LDf7ouYBrMD6iL2iwhmd/N+ZHqp3b+OtVa3jYZbEC3WB2LCfMsb+pI6FHkxmuYIvfOy0MElmMJ78pK83duXPocaxZ+coTrM9J/5OB/0oCyb3udNJYMcggTWrVnnXD63cd1776NDkdDZkubtYyq9A6n43Flv3UiEZRT+k553ZJNW';const _IH='6439a8e3786593f90b3b291707f2ed3c821098263bd5802c57a4fbfd5e7b61a2';let _src;

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
