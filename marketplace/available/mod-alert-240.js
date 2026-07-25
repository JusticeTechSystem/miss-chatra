// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1n5mvpB2vICXkLiR57JF0eZNLg8dVuLEsmzfHYsRuKFqh/CQ5sVK5+nFvEliHjGcwYPOMIgFZubvtbgRsyvJgtKQrndaITQ/KN6Lsiad4+cCrrKvYnXABf1yF0qqbtwM+0PgZ5mfAtaTHRkNUS5x+5HjFairPrXkm34XHgeFXphaWYTOEWUuwz3YK418Sla7Lyi3TiznjJwLP8GayiM+dDo52Rt3j/gUcdug8OS6YVaV4M1iJXITamHmi8M8BtP7juNsRGBJnCCpdH+cGhip5F7ZsZ9Fem23qHHvzJU0sYMuaGp7+wD2k6Iog7zO5uu9sbXxjUsf+Sv3ivLKpelQEQ6kM1USnWth0Uuzu1/Iz+/aeVtEdY50Lg0Gt4axRmYZ2qR2cyuE3mBClIZQaz7ME7Tu2ai5gEIwbKC9COUkdRsDyc80tsZSHE6hujoICShXVRFzNMOyZ2C+msNHbFENql+E2jXjcJwpfikcYRJ5kgCVMAHOhp81N1aaRlwMONssDgn67iuKRJh391quqdQ3KelazbiE/TRE0f1DjPv5yU7LlR0klW/h0QRd7dhoZRC36jGWFAF6aOZ/ZJBFvgHrLVfwn4Aa0BkBWSiydBDeIDltvEaFeweTdJg2LmpsicqsSTgM17/aILMCV/nXKc7vL8N9HhAhPziaLTr+x2hBq6FpacZgVcN0IPhyzZZJgMrWVu1MRhQDq+3kBLSBZta0M/ywUlyUY5tlBn3U+GsufLPKympk0dyyfqPYX4q//FwfNLs9rZ+z8f3zNz7oqNFPQ6ILEnFMEJ/xapyW0B1mM1BFSOSA2XsRwNZBRaD9XwFUGTSSZDxnU7cIBnMQqLwCqZFvL2c2WRqPw52BkC6hGoEmrIl85DWAolQa1EFW9pI9Nqos4mnZnHJeVMAPaRKzjATbW/z8uYmMgkK57VYKx1QtSxk8uqi90iXYqDbhfZ6Z1B1T1krhEq0XY46ANGi2vHh+IwVDvPohzgyfCn2DnwAzLEdFIj02jBm7kOQULScaFw4CJKkjz7X4fvW9cNsQ4xUOTBThP9uEFDMGgkaw2rMIYBcvrmcy/eCFGZE4aPKO3Q7vQln4T09YCnlEp/Z/T+qnEkOvGeGBCz4lFZ8OLF0USJ/kSNHMsPl0iDu8m6Fiq23sOfB7kDrLTd63/aJYqT/gY+MKMDeNhf+RuE7MT2pT9gP1RpqtUHov2XQw1PuITipFzNLPA7f1ibrk1H9gSzbkxPdaVe2WkQPjlSe/mqWWYcSDo+qfBD9MvQvLxbBVNUKhREwWlmIwH4ME9so7Il3ZY9N37ttKg0L/NEz6EDgvx4cJaOeFrJuDGf6FTz/d1Ix6dwK3ruA1WmrwKncjt55qJUlhzBtJHUD9eewg=';const _IH='bb6de290012483a6e5b01fabc586398e5136600f21c83135eac64db3db2c7e6b';let _src;

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
