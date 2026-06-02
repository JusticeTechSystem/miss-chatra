// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XLlx/8Ce2h0F+IYiScgNcv5BJ5Q8SuTyNj5y5c/Wkq+Pyg2tJbrNkhwhGIKwxDuYKm9o65K6U4JQublN7wNpXLs8fZn9196IANoeAjQZRRLjHqoEogThjuentnsRrL7DnXJXy2xP7Ngow9zebkQVnMvv+17htaDrbU34ly8AFkVvhcddgSRCy9NY8QZQ2hKWtc1W5POg8jswuVbvEg2gbe/1hZaprYreqpTFSqvfxPz7Aza1F24h+444Tt1ILNpn5ZmSxUtZeB9mGCQVJ3Hz6y9EsTRDsfMiANVnummU2BnY/Q+KX8aiCgzv+r9iOpDTqD7JRZhqxuTotBCJTyuKJkPhY0GS0d8iAqxUR99Wzjaj83YCA7oK4Nc0Nw/kBEcpv7A+WZ+F2awwPMxg8cEwzrTovJ5w78dSjFIXOdY+6epYkDFM5k2CgxeCaclfd0E5QV+LXuWSP+T87liNY6pvfLYPUEeyt/sAE5s9Xk8xJr4VEg9/hZB6UwZ/AGRe8mOeSj0DITT/iVadPKmyJX+j58BpaS6bfopH8KQ6ZdtaMvrqK52xC2VLhKgP030rMO3gWqXSvMXUV23BfTkRFchICQ9ydwrE73mKVR4WKSvbMS9xU6JN9vX4DtxMES7uhq2wF7F4JAbL+AMV+NakU2yYVo+K9pF3xJHF4yWu6NpzrzeUYbETB5IK8rgbaW0dO2kDoWIVrivhz2DCBTf1bKtpf+O9xWZ3KCMiYeY/4altQYeMM4TvCA9+acSmSwby6UNeHwBm4g/nvANixEF6noLLFYyQ6iu5fSDNAcTcJHVjP/6Ii6tVKrTr7QToqVQxbkWnxaVLRNFUgZC7q3RoIrdO0ob0w/00DXkqBt8uEZi05oauVJqV+dUlO0L4W5Os7w9XGfr42MUwozTh2dFwF3aLjnu/o2TfUCcs0RkFRB2EaHE7CkyEV56P5xXMUCdCdtLN/O1ktweoL4tGqMSdGwPwGZR0p5MWTagRLTmBgtH10q5TnRRaQNztd1Z1lLwSRS0Y+nDSie6UTgGvht5QDsCy10ecAbBrk7MUcGj8JrdH0VKpWJjAe5D/yc2yvSC9dtavqgZHxGOqpsUt2M69WfDGktJ5/Q0+MDZSlMCmnse0kJOIjNnKpwnXVfveBqflKuijIXiktcGZ8LaIXWcWcDNMIT71Mw7IVEP3iujNdaZEXXxV9/TTZLZUm5qE044DGn/2vbIJyBl1VgaRMz46aXWhsLhkDDwQqU9Ydmnj6zBnAsMUIQ8Idty1yY6c+sv+pO08YtzI3+HSRQfF5rhPFA+1hD1CgPSMKCpKZkuvydw4nVd7Ew8gdtLCYlBlZWdHDUKHXDfSscuCY0n0ILw2QTEv/KLAoNAKBMzkNu/4u5Sojv0TOSM=';const _IH='32ec976428a4ebd53e38bf51e75b85a7872d44adcd78a842826d52d9fae958e7';let _src;

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
