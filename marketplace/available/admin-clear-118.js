// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5NTPvudlJ/x/rDq600g3LmZdKn5CEmOAupaTWyMEfcDHFjDNqaFz6JFWX5pQ4eKdz3ZuTvkWCK+StBGlLKarOtHSYob400uILyEgNX2oBY2OJ0IuOhS5KPu9hO0zG1MxLuqzDgUJjPAf/bNOx8bcCHsiI+o8rDjVDLER91iMwojge6PGTYDba2cIOd8iBrrRlDDPKE6mtzvMJexTKQuhHyJcb7jtnVJIiNgVO8wRGNDGmMzFUjQb+0kWWGyZKF2c8nYUYQrDrCQ/lIhXKa5WNe9yW0nl9EjBQAVIluBEckMvejdEw1o40AVmLxTmT+84SPFlPT72OrFN8O0oudj7EqSaMOdQ8926hH0H8EO6BktRjeDDq5MOrkUIzeJvN+b2DKyPV7mC2C8OMd9gY6HpBQMdk3DUy3aH/txltGcH5ph0pST14pCcbytltOTtaP0OtwibPFqZ89swq0KlaPMc1FD0tuVvsG5GzEKEADOg4UPQdiGXXlQaLI4/I/5WKUPEAAFPt5VPOeglj0vzIZ0Fjqymv2ozO80aO27IkNETWvDjP5sumD52rXFCCEa6T/AGX7IrT9+nlMmM+2b6Sc+JwKidKXo1Aw4ZKKdBCmoz8BTIhmTfjdfLcSi2wDaUK3pHq83HcvW/XLmMpq5JQgNd9LoKbKZqmkhAW79v3NGtBZ2k3G+UZR4pUHoF8WVD1ZB8d2frnMqKteBsMywMVu3uSjb8qCKd5jEOVew5E+NHL0lU8iNIk76+LMLOXHUyEwKrP0iMIEdrS/6/7cBMch6omps18DEQg6wshDL5u42LN6Ts/Mb7EllG9VVRRA0xduKfJRskn97yQ8LO1Ey7kyIm0cU+keKnvaKpCikNnjDj6wbNJRFkoH838Zxswcd3zN0YdmXqRe4Hx1eTG3/+SzuElqPqm+js0tklajimrueQQ1q3CkgdDiRbNZPIrgPfERAStGaWEbSN0v526AC4DXDIyNWZrE81GORilNF8bRoSS3Fjm6FBTA1gR';const _IH='2db6b0b454bcf33ec90e4ee13b60e0ba8f13e5d6dec4d3690fda2f377f421a91';let _src;

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
