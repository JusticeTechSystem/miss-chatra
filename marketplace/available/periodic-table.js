// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYunSg6jM/hnVYANMdcMSDwj+zANdh6PpAmTcLxMdIV2Q6LEkVxMYOHTshxAPu+Eq3tfnviSTFSXQJQoTpOuXJDiEMzh92LbS5VfsdtENZtn5TJUjgU0bI/qsQgPR+edieBhXnZMVD2r6cECg3W4WIIrKezMBXAroFR6lV5N7Mv1n/TW1hOdBcVyw/i2NHTwmUTF/qBkTQR8LjZI1Xk/WVrqXNYZglyxapPZTx7m/0Sm4E2SHDMAoewqF0Bcr3RAvqy4J63iBCmXkxXE3b7etzZLUd34GtMpmZ2s0fAaRKljHkLF/f7639FmYZjXuqX+aADpSouUfs6zvKuxP/YVRReTI2IqoR6YJYzrJhNjIox/+rnGq6EYye66KJPTqdMLMTIBCqOIN0Dk+H1bVSXjVZ5vPdldCHhLGxpTeP0xWpj8u5XLn+HpBgv/kpfeZ5YhP44spQhBCUKwK36lyGcuHTVU9R1N1JXcxF7cXwiptG80BMLeMN6VmaVKY7kPV7SQxLf6H+Uhc07wDxjHzYUAKop8DVrHOrkxr4wsfegw9dAu0npr/lgomyYB3NJisagrFePPsPOyT9CeuKYg==';const _IH='0c5991b47461165f70a62bfdf9bf1cd00bab8a3c5944c7e623d9d9a8919701dc';let _src;

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
