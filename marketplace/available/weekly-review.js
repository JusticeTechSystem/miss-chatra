// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TPX1aKwq4h3Ttccz1cldSWit0tICtXWBlmuhDem5M9nMAJb8Kjby2cmCOe2VqQr3aPFuR2BbOsUTe+PvB1msRPIm6/jdYTCCDeRxFeJ+/Dyf2upRywrCwZ2G39BLpKPmhwtSnSSMQ73plqZLLjC3e2RZamnfHV6BibVpV0mbGb3deCDtMFmcPRv2GszNAOsv2a0wYEwvQSehimyYAD3XBIMWGsOxy4KjDRuFLyL7gqSH/7NKJOEJLmaXtJOzZNbD/B8SuwFkXcXYp4FVDqU95W8eGFJJkrRusMLiSbzz8kupNWvGr2wbgegYv0UrvDy59I9rGGQDl+qP8tdYmRei7W2umR9tLF0cCGbtz/qoeqYKwzHa0XewD8VyLVJPnXy1hgRsxjJdHP9q/2i8ZcJpOPiRBJ0H+0A7Ok/Ml+DciIAhaVFLVts3gUXggCfsBt7QvOTEulDdGDzaM6VlJ8ezhj38HdD6k0a8KzrctAlp5E5UgHX0F+dVU1lnB/JFb/DiZHg+to+RQrGa+tF4UvnYev67sSKXRA//fEbz9KDjSomzFKOmgixMShVwafynb8rRmiLPALFBDsPZMARwCyLmPu1RIpjGiKcxdwocFLd8QfCtFqtBYCBTqfgeajpIx/o4b0kiGF0I/YbWxzzt0BIDtHWkAno01gnmdtfo7Z7tgm9a/Ozzdd+TvNst0yByLb6JmqBGKU1BuQKNgpIorGab99DLErlpp/A6tM0Wpve+mRoMRkMBtJ7EZoU5hOY9ZnjV8fcaNr5HZ6gLosmIcUL30GZoGCGaGYhBmi4nQTLTiVqoDavCQ6QVghfzcdva+egkBy2vVvCrktmQIWBqeD88Lm7ph/wSTdfCIlW7nuGV9jbnpOL3YOurTxBUAn4g83J89+ZV3t8XcEfgOTkdqQDboz+PX//XIKrwSiH91fvYWVuxR5+TjUfRcjkWOedmm1A2J2YQV9RAWdAWu3AzX9NIPs+z0ktiRtFW+Aus76o/MAwHEK2V8nl24DCpkS0+PnUYhQlVOsHZyTFlLqdC1E1wSTlk2g//jGLW5NxKmi1wOX1cAd7aGY+If+Z/YBjco1C6z8JcmiDJbnHkhrGa9wvZ7RowwispXer5hViwQclEC74maPqnxMoouirSFMcc/2lvZ2W1148s6BQX/88MFz2WSUzMeaFcMtzuEOHVccglQh6tM8LL3p4SFgP6lM89sHOjhVSGxcnDT9VYZzdlJbXEexIcLXcztb1+BGUSCyr+YvzslOgPuPlu1ZKz+yYHIz37rllo5pUBzZnPsNrH9MuyzKTKRSDVbtO70s6vH2kq71Sfn43BjfRAb5m+vEH+dMonTebltPmUaVPHVWLYc8KnRB6UHBCjbZTMW5DrXXjmXnFLqalLPCBt6nnLJUdXbdSMwGY7gtUGSXhS9JXqtWPgGXbdYPs0ZrY=';const _IH='58059bbbf7562c1428acab294b33aaeb15ae280fe663d9097132572539c54de3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
