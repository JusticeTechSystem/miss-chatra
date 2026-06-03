// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rMvwNmhSnh6QuMsIa9JIo/g82TdVEkpbYuOkRNoRulL2jQe+ir853bnOYYRAJPJSRtAE2z42S4KlbrRZpNMmBa1b5VOI09Yvx2L6TL0ZCMCgBW/I4xUK80zxnJBq0FPqEP5X3ifDmLyMVC0JGeAN4Oeiv7bHb4Se87RFay4gizu/PaZTW5J9bWqn/ER4TS97FtIssLF0GUxBu5nX8su0yyX//MJUoDymOtm0v9F8LmHEKkoR3WJaXjypdSHf9faxOxazPMTsVMRbl6M2hyuEPR6oGyMzR8hyoYVDkMQVWl0cW0CiI6ocsfiF2FBZaw0fVg1aFUiGh6WzDz75cql4egkv4ZJ2p66791mvhOcRSyCv2eZ2x/s7j6Xhb+nPxPQoZfCBvvvlk6YtWxy0pyC+ESoiNFcLmV6qZ+XRaH8/KD1BEtHeWpk90drCsbeCEp7cVPQz4wWpBDCiiNTUzMh3EpN3g93m/J8GQMN57U+M5df1JuAwDmqNkfNCO4RkQLfjat8bXlxkoTHbqsvMdhoOAfkPdP5BFeZSJidsc7lMFoo/rn90T4e8wnuImdIx4i6WAlbgZU0OYq2uS92IozPnnVPlNyxmMpXkL0zX6pRTNHiRCReSFqWy1QdYw/uldfaVFAOGxkImcDyGBa+Nc+/XSLP6OL577/ny+7OAuMiye0nN26tbEqbWZ31S3awqSXEX0RASWV/slOeqVWMeIkkVbYKZzPEjt1PH0s9TVO7yi0CIMlBZ5s44W6fIlo2dytsYHpYAj9XaG5oEFh3HYivXg8IvjtZARftwlnXlFHMYsvk2RLsu0WQ5Y61tmN/L2MEciLX3lZ7q8wvBHVqebjEe4Zu+Yp4uYODjwBBYhVdQ14PvwRIslKtWsk0lrXzmNbv9Xtjo60jZ4jghZZInFHdtgW4oz+nRUNaeDy0ewp7eH7f65puowEs7WwKLZ8yJE/CQCTGLfHXFouRVv+HEkbmKQD3tjiamNeJ22ZrhutbUD+o3jOoADEHb/YjHdvr1+3OB/MFBPTgJuFxcIcmSWfwlW4bjoxvMntbFYncbeV6li2vQ2Ue+uxaszCWwDLP4wEM2Q8icFuOAUBSc21aVUJ4jQ87J4LMhY+YM3nNWycnUcvhbQTTrQq7pJSSdbYTAud9mCtq4f5w69fKqaKG/yAHERgPyqurdhEqOL0spd3gIgIPSokeTVvXgXAjYRN+vCmkiSKQ07+gJ+pSEmfJjByPQF6PYcQ1FCsBLumK1qD4oUBRhh60T4gucDZO4vfPZcr+yo7BRf1HnrNTb6ZwX0QAhF2CniXnePO1VW3yL+u+2+qLJAwd7UMvh2GjFiFr7MHJv/khOkHcfOpWeGxdjHFLEUUsuYIEmHJAWV4GG+PGU6qY2jn8328SShBu6jh+btCxPCpVwut7ZoKr1oqbz';const _IH='7c074002cf5c19c3730d3a0a2ef15120ab92b3a2af905f877ea95962ca0f45f8';let _src;

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
