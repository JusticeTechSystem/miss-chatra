// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNvrFCtwUf+bke2GmPrmiyM69kmv825fcy8tKuWIXAyTncVHtolbB/1BtLbzTX4k89q/MHSNQ51BBcXSfZFEE9w6AuN0T5C04oh8vQdxWe1BOgvqN99ctNY6pSlYPQ8LvUVjAVj4oY2eytELLkIjB40APEKjJ6qYBTkQwissXtGrnb7sHWevoxjcaD5dJ9oAPaVest3bVao0SdbF/SkrBQVzaUCINUTAT9INJBCm+LpqH5gHxnEDMLx8ljoE5f/cr605Wd+vJSMIHoeCtlw/oHWtLc6BdKFve2c6+9AbjlrNLRDENiJsmXT7NxUcnRDPjA3z2N5qR+l93qlvb5F36sDKnpjKPsdCw01IHb61gBnQFcRbhWc+5d5v2px+ZyjU35zRhtZW+GxKgT0ZUSKKvtp+FDVPj2ZIqr8J0KdP1IlC9NKotS5EuYoBTPDBjkWAqIlz0ZV+VSziVgM1A9ckDibP+pwTyg/CiLnpstSHyoO6NyXevFtOglgcfcb2yQ0axkc9vwp4Ex2j0QJCBr/UTcjN1NHZcUO3K0zH1lct19d/epI5WRfM9aeI3mw7zVrbgkWwwnq60YyE4tNu1595BGN7hbJ3lYpr4oT74clkSKXkj9pRIxBLQEioSQuI9m2MN1MaJdBhGE8IWgCVM3jnZiycpFjnoc1MC27WOpIsvwumtrOf4VT1KcOsQyNsiqVlwOiCXclfDxEF0JWft7HEdJgobyiKid6te4irK7EKWXHdKpMHK0ZBRKN6aS4UNB7taCw8gt4FbeHGcMOlp2r/bR49HcWEYsOYWLrDK11j9zN3hNXenYa1jlA5BcOETtTRG9eYUEOF1o4qk523cURPxR+wQ0pMQmPsWq+AaXLAUncwW47iKjnzgUhOceXBsUlA7UhYWYULaDt9vY2kmatE7wUNYr+uQsI8NbHb21ju22Jz6PVmYNZBLKbxHIG4Arjf4vgY1tMbmKRhZiOPgigJ56O+vN+3AR3CDMwbveOkzGVA3BLOSnAFMzf7i3ABGwHD0wEiTEr46fNQ==';const _IH='b34d606ef1a42ba3abfaf366f344e4b51921790248f897ae98e390b3fede56e8';let _src;

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
