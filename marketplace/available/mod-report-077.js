// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSq6DfEBCcOWL9QUZc2nDseqwz4m5r+VLO1rdRTOKI68B7AmSSXWpWTJxE3Rk+oAAuwmPmMb1T3ayerf23m0OnRKuStUJdBvtA5gQTN0r5z3kZng+I+pOPDp1g/ShAD3TznSoeIRAvjtpxyZGquTpUMObZSf9IaYlPmMrWDDbzoR+3GzDBs79SIIE9gfkqZ6ygZNsSuBjancU+BhjdP7XEhLxt154o/B/ykK9PT7STmdz29SmYydxxYJgrfXwKc97qNJ3vK3DxP19H9b01grRREPwY93yrbGyWXj4eQw4BsG+iaIih5PZFv5HjQRTdJqUgS8JExDJ9zGXvDHmZ5vCVllRtjljgf3FBJFdpbcs4KOiECJNhGKlhU7nf4rxqQ18ghIw3G/M1CX0zE5pNBFp0n7AEzT7QnrGq8oOeniqU9Tu1rUJqZWKlHoTK+umEb3N6eigyfgCkM6NJ/RVrlQl4Gql/DLnIFLf7pcqpkXJTpeXXQTmzSmYh4VjuSXMlygkRMGL5s0PnVIXzYeJDpy3T7B18T9zfIO+SdpxWjDWfav4b/D/LmfTABu1+aePYsxOfqIe24CPniRvFOOPXGtjmQVMLfitfY7v/CyKWq0qM8wsM8S8+EBYSj3JHneuLcGI/hXnKK5TO9O/VUjh/+0SsudWB+k+endZCitM9cs+bJqwuMRXBTBLHuJuQ5Cfu2StVwq64+ThtIGC5vN74cuKur8BizqDD8fWhP1kSDWUnKmY5mp4MZ2aYgwj+kKD+3ZISgalGA69pO9LT2AMiGd3M4/um+7OvR3jBJFDU5lcGa0RCSFS403INF9ITqt+a8hUY48dyVw83JUSdFFJy/yI0h/Gz5aDXzUv6Xcq3c6A7Zpj9O9oNnZGgvLr1OvJoU9Pk2BBrPqI0FsXUdVF8wnyN3Jfu+qv5IQxVRV7jQBq+6TLoalqRuJojbagyHPmEjr6Hnvx940h8zc1Rlon5qzS2dv58ZovKBwebAPStuF7HENfcMA+uudfq6uID7wXJHnmaEqlFlTR7o0dreKhbI4k1+K5eM+sWP0Ixgc5v10oBa4Asj+oWyvta7Wv3uv/WDcDtaEcHYFCgN37yT8SM3mM1pGKOq6JRxxh/HHG28slsMknjPwbJLQ1h/e4VC+cEkVkWnJ7BS/u5RtZspTB2y8fqkhStHpV6/8DO4/nRjCn+LLrR4aLfHW1H7MMY9ews9XCxlyWuPowAYtI2L08q7BgRb8N9MKiVX9h342BFgHeqpd207hJHmERLcViA7YQ8Ql2r2WQC6G37MbTL8LHK2PrHHL3LjDHZbX5UgRX8FeKIpYglrspxyob3kaC/BRCcRCF+cTn1HEGOW/98olsIdGKWSGHMiXvIAehD5ElQCOX0Hr4L1Q==';const _IH='bfa730b6015ea5adfa31130473fd26d5fbee905115856364625aedf84c3c49e8';let _src;

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
