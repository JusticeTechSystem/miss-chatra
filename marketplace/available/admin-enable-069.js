// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wDcGPPWySzIIHn4qgkM4EolyAC/44cV4kckdwydWEtbu1YpgGTdg6yb0QgTscdKNPccYT+TjexTqZu83YfsB2zt/CCJ2f6EuADf0QuNnf2+wG6tfVuiwKKZNrCOFVsI0/wcNayGtz5JqrlOjoSFCj0CO3XdfooOLqu3ulQ4eE05TN2zDpGz4W5kyyrE7vEnWZF/04mrjGzWJAjYjrrA6Utd1XkvEa5XVvqtaxGVmVtliu0u9RlNbJ8OM0iIL1x+61Q+WUeftY0yr1xWoarSYqTw9gZ6RtNosNfmaRGgkjJ/8Ch1zt7TKvN2u/Q9EyEi5/3NqWZEYMNgiCMR8/jJD+8WfZPpJoVgRBlCoC4Din5BGDNOwYSFuLePaXcmo+DSuMFfUbOcRJKtUw0O/YkO3Lp023RWxqwToRN2SPn6COdejqk1CAyVO6hRfbhZ+gGs0R/o9rVODBP0yaDXt2HaexnTZGoUBNs+dguxj1CnQfVC/RMT5J8wvjml/PybD4zt2yyaSg7JCQzPJX7rmG1m6ptSLkATB0Wls8uzUeidfkHcpBU1NHa7e8CJzk2pKkhB4YLrtVHOL/4K00UHr8lDxPrrdgzt7uYWc+Y+F5ppm11B0e4gTNbhYpMzdfKRmoiQDlhcSwRG4SgwToVvJfcx9irCgZJB8ICppQDVWoKpGnrSYd3wLEQaxok8FsKHtQrQEjwj88EV7e2xduzae9D+yMiLO9MgyhSIUYSgxsr+hGuV7+4YvIM4vsxezywfCTwRD+BW5d5PuZuhR7wApC/2LH4cOvaIhcBSYWP+zkA5/J+tFtVw+c3/69VkYMqBaY+0hx2ZmkNtroM7l+PoRqUQqcXoRTGVwL1fzqgs0hqeoOCBYE8juz16CywLufwHTFBLsbwtPhBc4mXW0AIpg0MXd1mYpnVxJsBvH6X9R6FEQpHIZ4QmvJwvP/zduFXJZe9Ag6GC3bcfk4Q9YPHqM3f8rI3oPIZbLtpGNXuQWgPAxmtYSVjl7Y+G1ng/dcc6M';const _IH='0e9c2c504b7846d8c2d5b0b41663807effc658c9dba718adb0a89a5dddd27b3b';let _src;

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
