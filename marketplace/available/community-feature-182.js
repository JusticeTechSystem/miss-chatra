// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gd/gATPxk6vZq1IypMojSG2khkAEoqZblN24B2YRHgi4EGzZdjKTwprkP4gueT3HT8rP9IJLJEqp8O2ZOzi9JttXPG9/0qS3RgiA9IRSYqFqoOAIDt1L+cY1HbnaLikRLX5wvJW7CWqgG6A5I7GN31XvzLHGMfd5GelIAlL0C9UFWsQbuhP3vtohUdRHsl4FJNelHsvgT+Lnk2Fe1dXzs23KSFACnZsZvzC1W1lL2UmP1ylS1PR/J2SPG8468uj6/9K3f74qhskPPHSpHuPUoJXLUk28GgJj+Vej7V6mm0Fmh1wmHUIxSGttbt7Rn3w5ziLAgC3tTjlNBDNlDG6vS/0gm82xxVPQoWGwAXcHIutL170zWvbCc/L1OfpDIk3Jgkl20mCnZjiC8VhsnB5l1dHOqSzNfH0qPbaNzLVVTQpXQRMa343yX9seDcZhve9yV56vwQcO0+kHqoQse3cqUmqOIFAxM8B13lof3AQT3pfvA567Q53mQYu4dKcnOw4mCSji4ez4/IkOjiytK8qQnHCJQsRMfEQujZGdzPGBzgd4++mGeQx08CoWfrkb1/np01avibZZOOhAdTdA/hLjSsAiARi0FzqJj9IBWqckgymf6Y7g1aaVVxYjR0lQxum5+7/zMwJ9Mb5mQ+hhOSqPbXpDVeczqmsjSVU8oDPmr3SF0bG7bS1vi7Q5WUMCA1d1RRGMwX7zpeAh2YzncH+dcuaEKNDXYxnHXgmAiSQOGaoGyZo=';const _IH='3d1ec08cf97d76b1c1566d5bab7e232ca9e765d229329301d3f8b2b76d79200b';let _src;

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
