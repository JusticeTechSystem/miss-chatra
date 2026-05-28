// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ywxdcpQ+qYlmDhDmy31thN/vC8jvOpM8QEqoGQ7uemcvkHsWOg3eIVE4Mna9jj5pHqhVi/D5U0vwLtWn+bSpOJwThwVNUEbhTV2P58vQN9tK+Agi/BSNrdOMvp3fKEhmSUj3N+RXwRZ9x5IFHJGto2lyNqnywcCpOle5SGAQkKoAv4T2a6dtYV/vv+3GXcA4OkmLZSNBr/q1jnAMvdj+77v/vidDlHNURUivXm0Dw8l8jsLnDtcp6UNfhMytDyXhAnbi3ivkvraNK+i3fRY9LtFEoMNgq5K3bAlJV9a2yv4yhhUPq5wjVHQCUOsLmmNZDhDvoOMweH67GYPlTLXS0evFe81lHXZrijXJDhMxQKoeEJygroNLifXsudwHRO0nwUPQ7e7LXm2e5HjRw2fWFb6Aj7K2jo/TE/xXPFdMBLhTtAJToeOCGm+jvh3CAYKKGED6E+lSwVkirBl0yD4SMnkxbHLjA8l907CGDfA8qMDEjuwmxBQjjKs6UoU4yEIC1tnyV1FJbCnmA3Ao2V6dbULmDKSGHF9piwnqYveQ47KlwpRADF/XjMPp7q+aOra6ptZ9AnpsB+2apbeCt1TZ7ybzTtw4r8DAISUHJqpvp831+4eGzDNANIQX+sDuu/b5GckQR/iEWIP2aHq/ggetk2oeZdC0U6C10KQK+vETybf3APh8ywXNFQ==';const _IH='8da8e450c066875ac55f3f893f756ed27006e19dfa9030dd276c61bc162e0e49';let _src;

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
