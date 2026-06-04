// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0KWLIe8PJh6G/gNd6IR4J+k5fjmN5l+ijVkf7/f31j6ujyaiaJugLrWrYdd1r1qZTnfk57o0M9gIYgrwdYS/7u6+dOSN2XZQRBevMUHWs+HPSPWaU2/Ewuxu2s/6CaLQbLBqSKEkx42PLlu10o/GSoJXFn6IIxzGdBzU+Hs7JFYbmofME+NB6YXekPpw5/80UvAMnY0Rm1kqvlKrqzfHG3eYOGMmkw4hAgkl6UAku21VLAyjtfSeAqPV7m5+ZfwVT/LHRdnhQSjwT/tHJ3g+7sk0RGvY8V41ebzaK4g7DUmrslfpzeOUlxoSRHBo8zCCkRNzHL/H7ezTyvi+fBdOSEyPol6M6BIosad69O8GoVvZ6OF1322J8aSEYQ9xeO1R24V4P1fZ0A53AK3zsasAzj1biDF6upzvMjGEE+IvAAwcnRMASGFZhzEOQ6JOo7f7d3a2G44hzqnt2/Qbt+J5JfJX6662m32aZssMdWclpxprNP4j3PM2De7PoClkwZ5Wp15xMg7Wxhq6qsSrd96nS/XPG4XyyrXDGTimiZ4n7NJqftpuTTmY3jvRk3CUvi0sLNc8cvEHDGfoXBNVfslUr1e28JnM/gvssDaSPiqQX/UiW1DD+lO1aI9DfpeBbWxzok+4E1N6ImywPk6lJmon3HT/1vdqtTXJcZyrDnC+Ff+g';const _IH='bdf399158f947d2518913a8fa533dedfc8ef8b26e455aad627493141cf31b810';let _src;

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
