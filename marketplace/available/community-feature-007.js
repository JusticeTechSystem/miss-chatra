// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIK27l2M/q+SMm8zICoi9H2DHgQNSN754bLGz4DDWIYTsnGA+TVxYwLpEMvvzUPgEF3Idipx0ZPIAJiqhTJPImEqYEMKy4teAauDbP0/M1cHjW4HnFR36Y+lJFJV4/eVe+7oj7zy3MIYvi3Eb+wwjvC1UisSmUMWFHem538u1QOJpEZeJIUyDQztNCL3wo+nq4oQgwdydEjcMMGUFaQxYXd19CmXrvPk2R/Dl1eA8Sjp7RMw01F2rEjBYqjLRa2uVR2WCAJoGGfkvSrbSkyI7hZRrJFY+dbtB83CXglFIGdL4oHLygA1SrBxnaf4sC/dNpr/PmnnVDBog+1RtFwXguTqKpjpUgUs8MASkJX32F/fdz2NltTjgxaT3sTB2YcJ7XCXTAwT65mfLtzDVdC6nhapPowyELFM9mkyw3I+z4zQy3fbvOAnIwYJk9ogOMI0zFuhqAhB4uX8AD/Nzk2UrYoUurUuPie4rUPgfD768OCmkpXs1Tc8DXAZWNqhdhaCwXL7y4tCCcwDMw7tblpwrOclSYg5umvuqXcD2vBRYHJQoJTz9dOR53ApD0hphaVKPIE/OiWgEyBY++Y5GsbGKPNf8hAfBqfDDd19s7uq9jEWRcDpd63ifTdPjcDZfeHShbnT3csReRVDyXP4L7RLzQvTzEiKxL2Y43ELYbT1p0e9nC2nUwxCE+6xNX8F8DRmpMFfBBjoG4AKFcumLCnPM6CjcHeU9AO4GwwTw=';const _IH='749398e690e3f3a383d337cbbb539926381ee98d931b71ac7bfd5c4b30314aa2';let _src;

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
