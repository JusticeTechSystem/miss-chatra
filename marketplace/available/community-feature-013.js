// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLTFZZ7ZfMOGptyDT6RtmgBWjPWJNp4tCCjZEIqf8pf+rs7gntrQ9bYyR/lVH+N9hL+YPQsnnOSOLtD8PzYauP1aV8I99HDlWR92b+FpLGph2HCQsZbY2BtL3x6CLVVKQ5BCW8U7G3jjepA3ChnEi3kGu99sn1Rn5/87aj/SoEvK9Z9b1gfGGvjgvI+QwtgSk8vvWFZlfVr9r9R+grITzWyaA0dEw7WxiZwI1zIsV+EEeCv8BCcD4cBZvPbb/pBPDO4OZkY3XU4MTm9V9x6b57ZBn+JjAkMwnPve0K5xJ3+otxk98AdKolzW0KOneIhQVbdDAPxbErez6jxKAkdgcnSBxCZ2u6zWjpTGiOxeEBveIje+yhSEA0Fw3aM1KMrn/UKH5xilHMzj8q8S4uht7IAP9RSdmKY17O2A5Sq+gFXTlygRYsCDXCCccVYP5qe+4j5UzrjXRT6mqRJzD5kcooMBXCOJ3uUY7xGcydIE6hChS2/VrBz27mjDYcbNGNH19w9ktWwMcHLM3rwGfjK5xhnoauLJ9FfzIt+/YIA0kJVWu186y5q6eN/p5Uf/euQSJmlNdJApB81pBKu5pT9s7wONk7kU/KzRsFtp/Sn6PTWillIWTE7Bq6jCGtVtUGoLR/cYVNLmsXuWjNZ0ZSJYM/u7hL4/tEQ2Za/60X7q1CjTWQQVo9nakp2BPgSIh0To3a2FS+AGnDa3PQIKcFy4ISLcPA87IlzFDI';const _IH='f186b9787dc2765508c59ce36592131c9deaea4601455212bbbaaae2ba62d7d4';let _src;

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
