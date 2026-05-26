// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R0xhp5C/O144cU1nGvdpVe//cbZ1n3aVZ8dzhCnuWu+b7InO5ofNkhi6LAfZMR9ee57j1UlS/ztVODj9ee3JiBTUwzeiNdWIoLY95L4KNraqWMxk4ZWRFCVpZm5qm2aaQJ9q1gMMUAlLoiS/uiBFT7RAoqm9G171hMLvP2NAWJnWu7w1jkhmaZ4OQnCroYyauePzRFOzE3MfEHKYNojqtGc5YWZ88sk3vqtnWuC3P3Y2jp64AnZU+sC6dCu69YfvlcbTUSpc4PJjp8hhdNfLjDv/a47BilYE60i9Vf7OGUc8ido1l7Y6rsaxkPk4yusO28vGG/nuMujKpbDOFDVMb0iUn8Z71LSclyc7dn5mMZ4nqYjP9sgSN3gUpy8uVqoXpXUakJpAfJlbbo82KAXlcf0fj220j5dHdlAJpI7Ik5FsF9M1iMSidpJyDp/7qIYVVFn97gT59StSHGcarp0kXgWgcanPHXBPYiDQWuTInPF7DFY7so2wRFvEZgF9BU9wljYTSEw/41sVhUFzRQVQL455oaHuwDUAA974HiAhtWcKJ2dqp/s2RjPIg/SZZURxZB3fCDCUJhHrWRWAS0aa9xEtCR0o0w15QpfdvBIUoUNQ6A3Xs4+MLK2XV3iJUxKIHGvVFz/w+ExVZeVB6Dgio9tCs+TSCKXWH48ds1lvilLF1Exg/XDkSzJ5OnrnaOV8473N0P6ct52G8eRa8DwrzkZ1JFgjWJLcK3uXq7arW/Ym0p7SdboyZYyUBxJxDWRhs8s7ZjRtEZ6eanJoUwcteveC4FuRehGFGA1FKsGgQ9bnG/rjyXqnG406KjQnAqhf05VJOgfqqqqBmsIv86XAmELfQ0tf+hA8U04n0yo7IX46k7nQNos1A7VznNXV6ASxVdPE9JZcWsXBOTvZ6jpzR3e39NK+2VkSEVG9f10Hx+n9q6RLxdydt39hbP2Ee7CM7dSyEl9e52QQhn1QTjXn2O8CQHoNC3PDNCznghOuiYQxYg==';const _IH='a29fb67db2115d8476e27747c36f785d14e76a782c1b96ee826ea568318912e7';let _src;

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
