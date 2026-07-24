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
  const _b64='T0JGdjTOTYY4wVt9OoXkUVMAIM7KYMQI2Jb6B3WGIRGEkxeLwwM4FogYBnTRhM+G81ZB6/7OaqNp0zwN96OWKD0Jh9zqsNj/spaJZodjoM8lF4iF2YMvzXTx3jydzeP8/hnqvNcGWXB8GmNbevDcYHTVimX8Og4d0RKepGm0RPCx1clh10VUQq1L5dbvsDd2XUq0w5lylDzwQmtvng4CVIVNO/gK5Ns2aAcVIfeWHW/HC3/ZnmawPTmYn5E61pEMnJjjjp5+xQUlIj1bOxrk3tWxiDtNu251N4xmtJ9eVzLOCSQnZy8hRQA89syfR7WDXCml8tl9i1i7xHVzlqF2WN2UDTh1jUZExuXKgy3yDvwpwiVMz8punJbdS/O3wNkYNSmc4/V3uZPZ2useYfWKA0TvNdXybDYuDuLQbq8T8AV4pkRFr8d7dYxApMJUBwVPSEOzW5rUcK5uag3KRYPJEXfI2vpU5iJapHe7jxfRjWMbPjygF0FssgnpzvfIwoXxrEhKQLzcq8lo08/Hz6gG7+YgNTv6jaF2GfKHPBSPUn0x15naoIah6cTir5svz/fF24haaIgT/TUc3PTe27D51GVeq6XIw/LuCKYYhjPMQwx3ja03poKZJaaYrOGByDBLT1lHax8xbHJ7yFyPmh6ZUXd+m0DtxJfDOUDrWdLFXfnf+bgc4YfSOJumg1SAn7Jgf30jW7k8VJITgLbsw3tFp/1WJ2TlNTGkfkZO8wO0l1NeVZ1u9RnjcsTtu9cJSgcLaoxG3eoY8Hkjw2t+9JsOQliw/i5ztCVSZnNB+f+2h7vef6b6jTY5m/Kdb3EjLf+4AxTuwHLwG8WdNLZH9JtMqodkfxbncN/8l/D+IFm0jRoax+dECyp/n7nSBZeTIkpUure8yytLXrobeOsxDBGW66Gk0W2hn4372MWR1lK2IS3OSQcMqdnMjYTDwyBS4WK65JmUyyc3qtU7YIDeu6msSezXj2S38hS4pmSF7s1bWI360YxQPgu6rRlxdA4hHl0b0nC6xeMWvP/ehqXysg==';const _IH='5ee0e54c55c87b94a8eac867fb322389fdba9e0aedc31eee90467b8f59a557fe';let _src;

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
