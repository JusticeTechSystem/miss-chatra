// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3PQNZufuKnE4FSdNJbaUwOPJKQb+NsNk8xOpIWtrlOticknJ/jQ+mAyHEpBLaRj/EK2XT0DLdizbFBMwJE8Q8Od3C400mVcZiDiKeKFqEqwWvgVhzHCstbwuEZVjrudgFMwOqQoJVJHrsUatJAF18awE/elbR4H0wDi3naGqo2xC2wmv684IpOIwxHCxHgUE4TN34nJYVYeRFLFKdKU+PsDvap5jXNqTpQbq425B84GQt7HF5n4nrXNYSPG4UeePRqastNPwWvC5D5FBmF1kQf2vaGw6nVpDj1A00v4bTaXlm8GJrNeL7b+Ha4t4fcYJlPgFfIw7jvx92ezj6Ho4F6HS7yX9HCC4Zt6pJvISWo+wLi306ha+qHShu1xoqd8wGTF5MCdcbto+7Wu+ldqxmwEqzA4EZUcbazMwCcfMfrkadiheLCG5Z2A62lMECNEG7DSNE2yARay/eoMszijwicaIL1lbc6nWMfDzkePhM9NySoJygEDRY8mFe+mkuN9rf7wGoBYxTkgqwOgOYclEWsFNz5CPJAEC/Uw8/wJT10Sv7Fzd9Xs+mGgAmuLupJqIqCZxRPnUMzgtzIIBfdaIItSsWhJbQ60KM3OfxRR3Rgl1u6CdWHuPJhDce3guklmxpUe/p6cHuRZmN5HGlua7y+VxP2TY4o/NMIQReMwzD3QGcopnGBEZWqRyp57PeujPZrc5xfMMNT/dXJQHOkz5BiAvqUBVkA0WmCeupSj4S5G+dCrvKamRz3Wa5pQss9zIEn9WJpNwvWw9KXqZQM9SoUlIMjutvXp8CsRFDpfLygnotINM+d2zLWKJRMid+1yAlQiSzXTVoka6RnY18zQ4/DDvOTPi4fcgevzmZQqY8znM00qOqkXD4ppnk2RFvnmJurlvGoSrxIl2cPyzfvUHBRt2MOIV5TTsrOoTLBs1/1PLGTPtKyjTeRLM2GpI+w6+8GnZVg+YHWVP4efWDByjKe+yOAE7bRdSlBHUIEQBgPvQI5WAh0w1t0iJHSl/8JIgR';const _IH='6f773dd53eaf9c770d1d35956a14e9d0331f4e2c1bbda35bcf1282e0a59cf658';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
