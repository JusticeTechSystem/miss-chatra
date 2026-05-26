// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5NAiVkhE9acW6PtQ4CR7hUcJQlRDxlAnoWXXK9OYEWV5jjb57+0CdW47PYxZVXVZ0qi1exHywq7w/oZyykwDU3AsCUCT19WhsIHM96YBZ84XC3Z5P1lzSKL7UwKgPB0UVTuRIagd5V/0zObGVs3slTItNVbl0tS4/JicvvooR3HofzjmvwCtAApQujTYr+7WdhlDv7NuDgzzbjxW/vECECN/VnId4ueB0b61bF8Ke9jiscC6RHAfIqk3vFqqfXlqmQq2q4BdVMeLFPIgDRrP4+ZplHo4VkMccHmI8j8jmc0ck8mEJah79/0P/mQ/ceXBkQzqs5Skvr6n+7z3AHd6eh18QPuBlTft+Nblm+WJlZhcKcdAWGxOCDttI7q8BjvY5E7XLlYJxxuZUoDE+7gGu23tzLrmpvlEeIoPK1dgVH4gVWNkd9ves2+O9uDbutLDtBu85+Ara2455ht/mV1+ZTXZg+/Zgvrj9fN66wEQZ0vWFMExcmvkFOTZZvh8N+WUasJw9IGeLZ4aHLb0bcgj+h2dZpJYMGz5EgSpwTWunCEzz3Zazm+2EsVvLpl8l6K89iFrA4mOhPkkvK3CWC8KlqFie/7rxUsMR0L+NTceU3KEJxC0ugdt9Xp2RHcDDVh7wELPkae+dC0D4w9wWgtML95Jt/5YfhPZiW4maSNq52IdgYMRtKAc5+XMEG2GYDMnS+YTTbDVJvwk82nOzmJCzfwfS+/rzxFbOk4wYIygL7kRiWg=';const _IH='48e84520c2986db0169f8de3aba96643e166aebddc0d7f744370976c2594f2ea';let _src;

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
