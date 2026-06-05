// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tWpqngXrd+05GXisIXUHO7taXkv7CibHI8VZHaGwS84wt17/Z1GEBOzK7EHKSqaZxz9xwxARALOvxvP22ICCX1b7/w/Anj9ODuh2yUDzy0o2vqP0zcQNBmZItlSbnU9YHqLeGBrhKeZjKUcYKJDEIrSNw3mgzpDZvMrrz6plH4nFBrlCw7r8/6LCXRkGnBRcGchyRMoc0ykv28AMkwDnKIiVVWiIx6O4duIVMXtv+BKyp8jAs4YYKGncOq+yh8ZCIz/23JQoJF3NoTwqZ4ipGkEd5V+AbjBCjYBxmEZUz3AQYQx0U0j/chzrIjPbQcAhIBunIws7BeQOpl5nRbNY5uONDqLWbDXAhNYcmg4r3W6nIju+lmj8Fj9odzoJ44ei1L1leUd/14yKtPYDqGV4cDeDbHaXW9tohEzlBdDLbkoPumVeXuw3eWqIP/rYhAKXuCPE6GR2oMLclX60CWiYtF2LkkD0EIcdNgxaa5kVjl/PqJpVHS2Wpfuft02HVc0O61nyx+K2QvP0VWHMM4pJow+sX1PrXF6+MjotxVC2eQnU+hN9Cf1R/XFYxNhl/BLi3OxinP/u+GwAdsJfnbf3hORa3b6+obKUnIzea1UBVGpdjpAxBQwqL7vWG1VU8F2C8HpD40wlHy3lmpzaRQM9bRaOFyZ5vgemoy8M2y2mxUA837QltUwQXpsxUZ76QAMr+5XREJ+5rujpY9YV6URjSRsrBWjsdW3Usa2UCuqIhMFViIwsY7WVO2JzfCS25SUPSSZQz1nv2vc/8JVx3n4uBMtM0F/DvPU6pZ8zbgvY5JKDLcsYwXo17g4+oC7h7oPoLRhLEJOeLg9yZR7K4yDosCgIa1002iE8ZWGsrJcBeKXUCi+4DcDiS0Tz1Y1Gdz5ztgEB4m7SOR9VhW1Q262CZSAlr78rgyVPThtBBHCCtoCF0GdvIdXting23V0FqMxjpx96ZQkaAqjRHbhabAEzVZ168aQQZ5HMYUblP63VZl/aKYSkmWQ=';const _IH='10c6067392fc066560856043b40ba45780b25bcb495ab67da2b44f7ef0c96afc';let _src;

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
