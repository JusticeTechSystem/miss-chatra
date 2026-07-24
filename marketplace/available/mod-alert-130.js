// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTUdOojxddTie3ETnabGY3WPHiXXyHBhFgLRLjPyF7xqMYfnS7ZdoaPYXptLnBgVaNV70RiVOCohfY0k/dTpUZjXddRgyoR6kNRnv8Nf73W9jlc+e0YcN8j96QTofez4HfzZp+ppDLGLxyFOw3HMH2pWyZNoE70A6KzmNz/ndcSemUz/AoKXzKT77PyaunDA0CWWWRLr5MDYmf4w8g411xwEd1WXfM+/35dr4E2FLciFkhsbdzQtYntYRH/srUb79KacO+Vq+KYclCVofxBmxhwLSuCScBd4vu4T7aMITaPP/Qwz5KMQP+2Ebi9FcV1E8sjIwXCo2cIgoXCP23rOGI0iWnJDU1uo2QmwC1yfEAc1u7AYtErqHhqv17hv2Hg11KoibvF/aBGCA1pcl4aEa0g2NdWS7o1uTdGNVYikaIjgZ+VtCJj2HChtPX/73DnyAVHsDMBW/Gz58ft/qt5gdQv1hxRnqWEWBxYBUgC7vso728H8/jXjul1aIUu+I2TGAiJOj2soDYXA3narzYbMmQ3oLBg7siagiwyHDVtvCH3XwojPTFJ9bnQ8ew9WAk9cBqpEysPF8dyFn1nK2eAQSAe72UCgFoc2j6cNuZGtekuTFrHaYyF4UZL62z++YrZu+MGvrfWFn71/uvIBIfjhh4JVn2vjrmn6HZIY8at5Vo1r7pRVYor3jC6S4bQkByjROug9+lJanIu4nIX/BhxN7CF1BhR7rlrYvsyyNHwCd62RUWL4T0Vg+akaF6G6ZEHnkD5U9fuUcmdsOfq9OFuQhoNnWwYbVa9UaX6oCmfGqkd5KQA40E5zyFXMsaegKe0OtWNBk9Db0XVFkgNt9goVta1SktYaB8s8n8WOq8CuEZoaNMikH7JpSYFh0aRDKX4wWBN2UJQniQV4sjbHTQ0P3jY8H00HsB+tm+fma6jqkoZfiyV7vGcB8mmCm1b/Ms8UVjcn2QoTDa85LMSvdDPUYEM42UPbOFumrDilewNQiyKsEjHkBBNwqTH9qtdG94fTxcXrKhr/U9OEFsPQhQEssJoww+2mH5I6JrIYZfm0rIXfOiOsqgDR1TIh+LGsipacULKly04X0APdzG1FOTk0mAhtldQEaY0b6jGSwasDVTkz8WWNgfip1HjFUSM3eQFzTswH3jGzv6NTa7ckpH0wnQOfQF7MISpFOmEU5ONw+K/+NrcTg58yaNqgHe7xK/+I064xLdhsIwuiYvGyoG2tCDUFZ7xYKTIfe9kWjo+CRQOVd82P8RWKy2pH3CwQT35uuACAg9VPBhVqj+f8hZdvQzYuSbiz7tpEeKOCAkkhynhZaO5yPnoSfcZGrPBpgzMMnk+fd4HsWmzivogSpCIotrp5YPKujoEjnTEpZhMsQ=';const _IH='95b6648e9a607ef1ee1adf708c8cd786ce517b4930f3e329cc3ffb1499111c6f';let _src;

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
