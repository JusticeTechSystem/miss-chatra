// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pp84+rrtJpr7GXFMpipw4w8dctYr2jCnGBLi3zfmE4dm7VWa7F3q3oL5sIz6rHg3l8EeZT0YCQTaR79UZakNz08yHqgxE48qU8MdVykBnPHo7Jg59TK0HAmo9uQ4ICXjvSqPaJ5QyGcHbLBtG76QRIqaFW9s0H/dLd38Ag6HrYMvzdxMWRhyaskBxRh1z1uBIQChZf1BVmP5XaInJ5iPj0Hvwv7r+UDYkAGuErEf6ie13uHBuCh6PGeHEBZhfzjHxALbtF311ju+SEF/YmZGnpg7HmsW8OKWWX+9FuwHjRuMJz/24Vp2JweUvavAa3pyGgZMBswHVaORdLK3tzL1Rjw5pQAliFrdIMb1Op2i/QYPMqGcx3Q8jn8jqF61EhsWQHAqyuO+u09vEFo4A/y92SBxIZr3gE+V4zl5XcNkkFDeSrtIdWxMdD02RLpa7703y+bZ/qF9Y0z/XNN8d0OLyhDSXiD2YL1FvL1ZjiGhb4xOJLmUPTJuRQBvnwpV6KSZRtZ1hBPRdeH6sW+EApHaOphB0g72yx0Y+P+z4YCU1CToWE8swGcBHJtP9QIjmANtY949jpQxmJ2ptZJg19xLDT6N5ozU4aj3kGyuTuXdfEL50OUjUrdVXY+YQx/7KO3boQRXQEqjyD5ON4Aap/u6doEtvEN05+WKt9ZNTJ3jhUJFcCXt1l7LT+I9iUNqgLpps1KMd0cWZLsG9SXBDlFEfVWfe5kQDpBVKOBGvfDwZ93ZLO6HdTCilaCj5KnfFCYEkolFlN1Vwm2ybeuKiL2sgK9JcHXCi+5d864nf8McJqbVRmjZR49raDj7/oPSrz/PX4GAgK9+zSmkK5VMhNSotEHms0EgkOPTdxs0Vp9YG5gpugEDoS9/i3grcDbe+nE+WKFRDuuH+NDMcOweEGf/fb2/FQz+yv6WGnJNunrJyC4crivawzdjJrYaHTLjotDOFEuFv2H57sl8iQx8dOElWr6QH8AJfdRShp11onJHgi2xYc4eo47rbRRiHz7s9L8HZlfPSYXHQW2r67UKSEPKoadxXUeDIkm0VtYlohIgNpE8kPh660hTqPP++PS4zhqwGTY+izYtCb9Z96Q=';const _IH='82ac2a1f7691ff28845c5b7cfe7c745852404ee65fb3b5fee525abd6c5cc7b64';let _src;

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
