// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MubNcA1h4hepkQnqmkp09xlwnElmqhLweQcZcD88i8jCD8U70GiUD8jEPn0QKmhrn4mTd66ioTVF6M5SkeN/NT9rBJX3qT+ATyRbSvAftAA39lM5c+Mow9VehGp1q3xbUWtNYfqd+yKHC4TS8DKAaqJBNafCsdbY+PNZAfEnzJbdIMnW+ftOHx43vkNE6ZMiI+0kX3nt8cRTBhpeVDJGxUJ3KnSX6U3BzHK/2Ow0fsXGL/vSX/B1H7YEOPn9NOtW0V3/elEG/xE/FiOd2JJC8gIfjAe01iInDrTjMUfC2ZFNjzbIpdWWZa6Yt6l9DO2THsN/j4z+c/+cORHck1C7HjTfjuVKyinwPAKJ3M326VLToD5EeZs10XDZ8cDwoPTvPbNYcD9ZADXsbJxSiFFJGqLQhxMpOR374pHFgIbLZGlQXFCkXAlK5EEfZ+s6ahA0lnpJ4naiVmrhUSrgMX8tnxMRCvNVhctVaewf5Klsl0qICFpCQ2F5ixIiglK2qOz9mPlMddlj+kX1l7g0w+XHUlC7QO5s98p/my6iIcNVAIZ7ZaAc4LBvpv1CdS/+ucHGiYtfpeyG5hB/HRiAZMwhN/PbzRgPla9L8eVBZwWLrPS+T4iHfcBkCc7P+1pPv/T7lNA=';const _IH='6d060bf974d113fe7bed96f78a4ae2b671bea997372cdb4c20980fb646fcd6e5';let _src;

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
