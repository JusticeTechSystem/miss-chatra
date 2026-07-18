// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjKJ2pNE8X3CYhqcvACWLOPlEbi11w3dQ7CNn0VSOifB6bCshcxJ9Fz5PEbexWchvyCNMePr68BfTbf1G4C870PxnPwdKhZ/uzNZxOYPJ+3UunyB/GKWIUxhucjGvLAULyjS52CVysAr3CW9PrUju5NY/EhIiftLnvwhX/LB/sSjv5EZVgG1F0ogawXyzCYeuEd6znL0PHa3dkYlVUWRGFW8Q/N+U9xyGjRfCWnFQ+6NGA/UepHW+p4Ig9pVScTs1+7vBhKOtraCyRNgE6gLX87HgPMQxnl3rldexiHCKNUNT+ULmqNmFmzS8Cnih5HqaEh8TtEbX6JJH4PhSZw3BMBimJEGA9OxI7ScpA4dk3JKC4d3qJ3YBn6dTkYONprp00AKILT5jfkc6vmufJqdSN/8N8qthENL7mIF2BS3RW4XsbzH3EKGfaKSfXTEbAruwv9gW4lMHadAHCZrnoL8Q/P9J8/Q6M98f50roYEglBoXzqTJlTe1AHkXk0Q1g2rWu2kGvMWLIDX8MmFmbC3Cxb3RJ+YAWGqMfgczu1b78KwWEmom00SCmpDvicI1+lfdMF+oco2FP/x8YYN4a71bUYzH+IkIuItOj9CBoxn/6Cc4IYHQYZDPmCn/lGTwkVA3xM2kmf/g9DV4jVdRzCueY=';const _IH='da16eb1b7cc65779294382ae8cc1b483342776979882e74c227d06ca994eb953';let _src;

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
