// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TE/U8Gy2jPQHcRzXG5MQsQkadtY9OzigFF8MPTZjccvIwKSoUlhSAE37NA054nAn1NBhGO7ou2a59KHzGzHRCMoJjRutFngAMeHYNM9JhoatBSZJPPLkM1FdyYbt8yIW9ANDNZNzX2ol7I8/MQSq+zlLuFhnPHNr6hXLumGjREf8GA5px8hEyRf0/PLMv723XzsDt5YhaDbVfKXZk7eXM9VM2RPHDIaUu976xiM3bExSUVTSwef6vJ8Zet6ETQ1JbQ1eyPGGagYo1Wrb9x2w3Jq8zKVTuh5keiolk8aEOJSb5EGL6RIRpX4LZbjf0tAic1hq84GGXA8eLHTNp0nL1RUpZoYTwSkrJAZ2TSGL7/m++ipn159rgKmh5LhwaAeP85F6dLCS6XMIoq16cNMU++E9VqLMDm1bqigPsJXBL8+AUTT13GhdHRkSjnqwfA7lScXDUOaftlhcbZb9d0ihw7jTh7QWyELJfhwGHiICMmOMVuC35Y76gyZwLXBnXAMvXglg1GSYKkx5WEZi344D+UVGwBsneyZ1jA43lSh+7AFwd+Z8C1Yrrj+TWqgPRr7AVsIAy8cjBz1ycd7CR1dTNGelzaTOffwF7XkjmLtZKerVRqUZA5v1M+NV9HAEx176B1Fy9pkNpeD8fvJe9GZrL0+73/UqxpTDx1HI8h8OCopLMEosQU5TNSlrEe0FeR8QW8RrXllaxTd6fHKBpT/4kz7nm2fq9JryyLu9Bc+kLBYiMds5nqINWYN6//h9SB5o35geo/28vhj8st7gjxQ7isd2vi5dwaogGoYVFHvElK3ywHR4YR40efCmKAunDIlXGja0n84ILzOnsqvNFsmahzHD9yOjoQV0KEDVfN2rZYVvz6kBOn14+6XYUk5koNraMyFPP/6LyTgu4049MqKAWzCDV9vLKcm9jEPZSHtS8y0dlEoubT8eyVOR60pIYCTagY8E6rP6I/QXDQOdjHXw/XFBCBJK9GiFiK0RmKJILNwZggFOrxM2sMDe+LksOStML45k0OynJnA=';const _IH='670ae0376cde8e74e937c594997d0dcd5e3e979d183f8028dd6faa1bf71d2b31';let _src;

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
