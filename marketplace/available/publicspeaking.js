// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVTCI2zM/2AlZUt2NgMx1XFmRY1Oz6+iVe1Bd39cx6QHeQLF9M9xs1w7yYJXvou5ISOBT0c6ldGNoVqWcfPETNbGG45iigGNeAhaaNWVruYZ5TIre1KnuoU0b55KpATEoxXbmJdCVppiYnyenKPtTHqq8h5REF5TRTR+Q2kPURN1LZCjKcqcGS90EemXAQgfehT+WvFnk9t27w/EAMwvgsRrgyIJGs53IXobfil1MsOQfBo0DlLl3OsfL9UrT39q3LuPqgUEcaqK1XnudjPalYhiocpc5c5jNnX82s8ilvDMpQi7aqV+PaWiqov9I62dJVaRTvwOpUTvEanQNJjPBczR5hdBSFBUBp11yWj+3keF4VipPzrk89Drr8ZIYiSIc9ag4QFk+1xo78Rn0nZzuCPkKKTYE2h8JhsRVi8Uc80/a+dOyQozVFUnGIr+ZzvJJTp8qNDYhYTmNbqLt9VNuJm0wb7B2g4+QNgT2PFLE39yYnjknj2k3R5RfdM1IsCnGhDrqWvGQmeB7Y+WD5zCajyoR7CFDd3zTHGn0NK0e0yGtsTXaFb4w2heWOhPV95CFJlmlVdGD664kPgu+Noc+RNYfPKw5x+4ljHKWS9bpbCwImWlKejDyg7j98wjDDv7TIDsGtrUoxTEUOs+eyErU4qvNILV7piZZ76Q0JX2KWsSfDsF5Us+9FCGlGG3+VKLuIqzBuM/juZXEcL5QcLBi+5vU0G8WJxKT8+m5vRXQLf2IXa8mkmP/35xcjxb1QjF1dyfscXYjeyFAHiwtS0rCSRBXY3h11AyVbY3nudaBgBQnNsPj1NEFNHzzzoOCJc0reDD2fvZZheHwpvq3Wc0YEAr/A24AmIpxTW8ORLgd7wifDYPtU8EJtaCtX38lqG5N6/LW66oO3WNR1f3J2oXiIIxXbF1nN8a48nINjU3zdQakatlpOlDl51G5hRKoXLlOczJIEv7sYlKOH6JJ0eLK+GkhViBUfI87/5c8X64PIMKVYgjDMS9AQZ6jgy/LX9GpiRgXsli29KzSuZPMAHMxarUGMz+AXWPfHrVWagfU4B7j+5frlyyWIAbOb+T/35fopNqMHlJhjCYMyCwitsqH0h5CxgHaKzxJRbYF6HQ4n+OEoltOhtPIcKxhavlIvz7wv33K9+nom0t1w9nvbJNpJWNM96KtWntrjl6GXnoYVR+aOfKvUwcyJr3NLK8XSmNRyUliojpbNJUhrdJzKH7MxqI8=';const _IH='b32d0b8605f4c0e0e96dbb328e494e258a59b937d61f4b2df2c18c465f33ae62';let _src;

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
