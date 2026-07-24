// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeZp50KysGs98/BcQVGPivl+a9fAm9GKwa/9t5Iitm5P3D56Q0YXqcoV64qwrebiIerXJsfQzMFWI57pk6pIktVE1j6Vz90Xu/mgbejzjzmpPbTrC3xcNdBOpQ/qi5n6lwiThlorVDbnZThT2OQWVSz/7xY/s2aKphjyIsUbg8oQTyagvFfjo1Y3kGGRWz3jdI6qzkhkk0+MBw8zihX3TYwOKheXmwoPpDwIWHBhr9Y2+ueBJv+MAGFLqObwnrwc1/iwvJ9yDdJPahfGxv2U9TLJXzsKWkED7ev+mJme8PwHAwkia7SnHL8ZGwCyW8avIvH7SIs2hSQD67bP0TpkZqm9v43JPkHRzhm2Vf0eXGlCHCwZ2IPGZVnFuhBdCTew8xBeMp3+zcXzQC1AyFU1OlVp6crBDcQ9CA3HSfFICOdlO35mWCG5qAQLHkUk3mNAxkWCvyQbQDfNNi7bPDaWWCseGvzkZ61gIxLIVEvltE5vtsUK1QgfpQ+3vdmWBXt8ZgR8v4/6rOuxo/8cr6WbC1lzQOv70UdkGYOHiJ00YSP/uJis/hknAIajGVwqZUK7n2H01ObBOfB1NRXj3v8Ox5fclvGm+QXqFB37FSsuHzbDLZDi5ki8G2F4gXhEqxHj2IMfKpq6LE0DrDDojmzP96SFnNRayGUjlWz9WvrDfWtWI1NNVqWGMKStOkfMrvX2o/+SDrOrS3s0dDB+16QK3JPxnbP3UkRD87t8JbrwremNedZAQmhsaPuO/jSmnSK/5PRQGlImicsGtwW5xJw6sCMSB0X+dge3H/bScIyiGzYjDtiqpIZ4xWd4eFdJn8pgOlNvzJZBRMZYMHIIUR6OHWoUAcoCzrQkMShpOGGZjZta6N6kBxlVZxjiJJL/pF9n/0lHXFvt6y7bMEwWpQV3TPX3mIlSvIol49ftTGPap83RN9hlpXJxZvGBz5SkwCiWdpNIEfhrBDnk4/cndTxskc8XpJrbhxQtqjpOcTCDzJKxiJ9kNnIJ+qpiYAyI+XPHlBLSDY';const _IH='f3cd0f276a66c9b3246422df4de22bd73e2d3c2357984ee3a82b397599aaa720';let _src;

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
