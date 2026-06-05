// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L2+IKa792A+lmjBxhUlaTBA26v3FP3Pu5jGoK0910G+9FDKpLC2QhO75hz8ZCt74lvTIZTIw2Bb9rUbVV1r7Pk6GASVRD/P0jms7T/f8m3JwWaW1HpP5t4tpok4UyomtwGHjR3cQadI1MXMwllXU4EroSnYjq5GWw52Ml1cXiMT03oGYedicWIqDmKAg4/NkKuOidRFh0He7Ejo0MLjjAeI+uKJ4Mo6aGE8OYyuhNZGbQ9ovMZRRVsYFKCPQfO9FixaLhf374ljzGOPcSNQJZ+ip2gTtJ0/0iFBnJYWwqdDvKEtmBsgqdSsusTjeDo82j8iD0P9ymZPv8VIBpSXOWodOZsKt35ZRc/RSMd290p1vbQi1GJGW98hKR9axSYxVr5a5/sxEN+F6oxHWW9rt0SXZtwjM1KP8jp2SbqCsLyIfo8lnAlD50G+sCz/mUFCJwLC44g+xUWyl9F9rkTEzkn6YHtPHKkMrCYfXKw2VVIcogTSpiWdRfcORiy0mWrzj9PQDuc7IQGGKMZSQzqaevTGA2Fsih1NIPdP348eBNNSxPrZUbw9hQeLtZXgSWie6ulj8vnDNMU2l3lOPm/SCs7zCGET2bFXORJ/9qCsjF3XpHzn6BO8gaWudXQCagfUuWwSWJ2rUcBvTbrpo+yTOwH8ke0H7jFU1VZ6Qi/pYwHYcWuYE3hXrTyVps7VpWcEbKoh/5M/FyO+itZSmsYi6+H7Pgs1MuL/3RzgMyuQORV+6uEK5zBTaG6ppmLzVCzA/88sY5jQaH416smTC0o/rr7ccZ3VYemPidiUjHU3FKKFLNt+2lBWYFKiDH3Myrn1Y2ugzcWgHcqTqIp+HrmrSOsUSU6SXDcLLXkBROJi+c/y6zicm4lclvvCaBfQ3f8IMXxnnj+n8tau50RiaY5THwETYye7oWPdFRtcnCOC4uRfwNeli/zEXZpA+XVqDar2tm5juWh3vzveuqqoLelBlg85QjbnWKKkaTSNHB7kurHlHqOzEIgPGP23hz41vbnGdY7t1RmfGy6DUPcHMvxeqRFx5evaFQgs+xFX4Lml+iPuNtyeuZg97QX9n12lCUAHm9Ls8yd3q5ctcdFUjsgZxIHvNCZTI/eLOzR/4FdAhHrfriLDcvt1GIhu55Q==';const _IH='50e3e783d8f5a70d60828ef719b0876255b978aca71fbfc2e2d88658022b4c82';let _src;

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
