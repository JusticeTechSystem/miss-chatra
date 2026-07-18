// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQn7TdhLNn0tP6KYQnZ75wr7cnyEJSuKhRUGY8jBHdEExMJ+OyfbSunic9WalqwZ8T4ADvVaACB0LG03JlKc228iXESD8qDKIlHinmZo7NbEQHJN2WNaRzZ7FaC64G2TUIQPdEAqxpGcSnqu8YM7URKHrI2CyI0Ti5D0LL1hkl6IBUsY38l3syLhgE4i7MGIQLDOJBmr87bvCDqU5X4NVc4uCOnXVMtqpfiDoL7zwBiSnrAVPn2RSEGr2jF6Vl/at9RLgUOcJgFVs6TcwuRB6+w6N53SKYsoPIDEnqi3KZCILhVqoT74S7hM1V57yxNJTNV5iqczLNDfrHDvX9/1+78QPpk2PzsVy0WkbVLc/3kpqrjLDXml1ywnRJoEbaUU5TBgQefTUAH2YgZ8tWtKt8lq9tNBI4c6J42KFCK2QMnQDSPhH4kKPsx78FCEoQ1DeJblt/AbWKKA+IJoId7D0gJtDYbzUQ/xtYq8xHEENXLKpV5/tExS5cLTihaBcJlJOjcdawZMz1/QVigMOsZTuMgUym8sut52SgaIMZ149Kwsytbx3EVhIkOWuQ+ZnZupQp1a2BpMXVhN/xW9p8J/Squfg/Pa0YDvDxz8W1N0FNXekBIDGdNTz05/VurlrBEkX56ocg6d0A0CwNdOxv+63pZgRgi1l8MSAOPYGSK/oN+M72mjltKQ6XSRoy3OUEFVaC6yq2WQfJZ09Qgwi+2icsntc8xXC7c5+GDj+td3UWLug8ONIY5U1eiWE7P1Eqjh1AAHKbbe/SwnegDi58pxbTKSisyUifnzxJ9ejJ/VOrQ3xw7CyodAVitTs9cXaZUB4IR2VuYGCDleZ9HxdiYVjhVwEo96xsXDmz2ZefF0KKPBehHYcWmZTI+TYVvDHE074xsdDcp/QOGTp4JoREFNEZnf8tWaRysO7Zoidd9BfAtwjlhiYu9kPsST9kpTOEcxqCivb4jyKE3ET5dgz53hU3X3mACljTvK0pCXL/tnVUkYjhnJpRkk5ovBRsTCRAGQ+dMd0TAL2m47VqxgeA+hyvUNLMIPNsmCQn50yc7kej45tqAB672qLd4ZyyeYo/OZ4r/dI5GfhX3YIQbK+lgX36uAIf3QGFQVHRTgNiroD5FWgSa3H8ciVZrgxQ256qJD/XOMEDrMi0bwtVY9z04qrb9Mb2NnZPKozizJj4P+6A3CfdB29+bH8rqBYtBsELB9WbMHngTz3MC5lJg2iaZMw06vqNYLiMT2Iw4dPFC1eYZaXuSYLWzKyY/v8n4rxhKOKjvVMAFQ/ePyS3zPphAl3zmuagf240w4WHCMO24nszDpSOOUlRKVkrKAC/LtT+kx/1FMYzTLGjb900jeCG5w8FKOjmsaFTRRFDP';const _IH='4147c83f08630d4f88e2321fff788d774429ea6a692e2656e072c6bca0b45052';let _src;

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
