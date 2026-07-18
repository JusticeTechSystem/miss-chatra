// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQi70T9l2iBqol1lld6EdEDuBByhgc5md4LCYI/OwnkBJbtWbWmZUrhsho2RAWM5T8TbzZU30idbFeIVzH2SqG34KKXc4pAu7EURYYQ8tM/Ba2UykH51X7q3SZhBJa377HwLwr9euw+bxV98FJ3/dblwjWyjdCeJxVBCT8KHEmuqlz3hJ9h+S6RMiD62Mlg9W6S+CqUCwwolrNn+zwAsI9xHtDaD174/XeAP3XJ/VO+doCP3fHK+Z12Uh9M2YUUwQWk3pKxZExYU56BhEw1j4MfkSerBPXHX5xv3+F7+8ZEtNmf5EQa/lkq4YoVKqCCDgcc5udmbPo4FVBpvfdlOlhDW/S4i6DPHEW9SdvCEiVoEm9yAPnD+kDY8AvyPvMIk7bdt2ylTNfxpEd8AimRPmoZYfBp5i0uBpudkvCQHVNB1c61o+vBGLOyjKgQDouDlhLICEO2FyOFjVfsReWF+Jb7x5XsnJt7Hh0E7mTt8DoIlh4muwN6RVpgDYwKBlDRfJJQP+xM9jsgs9X6hJW0/3+AMCLNcSLxYcRIpWu0Xbh/L/I5pLS0p62PT+MyfCh1bBMPKj6IrOT9pkqfAPYdpX/QQjxYcuS6Bz+6lptuOAiERdRjWfgmd2iUDubXT8x6YQKWkzTMcdZLBtDXjWAcU6g1mCHrNnhbsLuK4HI2tD4cFXBdFRfo78ShFuUNyn2kbX4+Y0PK6GcmNZkPb4zyrbsU2WOWOD6ItH36OBChQurtUJvF+iQ1PXG57aRTl7Ay0IkJlmAprd+fkX6+W93cLefuCTuEKCjRKIhst3USLmN85nJN/UAahQX3k8UrtG9g5BpaLvwij6j/6MROVMw5iE+ChooD3KjEmTLe7joA7Pig02h0HdsELMVITOCFfWjrqtsVM6v2RkxRFQzkucBnR2kiGGTQ/hJhMEMSxdsjlyUcXCx7g51YMhOGK3S4s1KflFKBNOv7da8ud3BKxqaLfDYz4ZSCfSCOHx0IIvjWfgwWIUNaSXfRLqGWQTgPpxgg/mgmPyUn8eiX4lM4uA1ZPo5MdHJI4VkCu1w+Q8/cO5wt9UqUcVdCD+/1gNK5n3A/iUGK5A4CbeZaCTLMckne+2BYbnGovs+57ugwaOIMhtRtX58mE+63mdfWcNd3LIEYdy2OotPH7a7KH6l1U4XCuK1bqG9t1LKrNwKqQs3pSHgY10AwGxJF3Kz9fMI7PUFYm9SZ+B/5GTGKjQ47vENs0Q2W3VDafKu6lTUDtdUubLMiNWMqJVS3I85eDzszCaSiedpqtIh1OJpjDOajAOxWGkMi12QfYCvIhF3gAG17tzTKYpM7LDXESwoJe9K8k132gq9wQxyNI8vWsVX8xlBcblaAziiqE9xJAbm3ajrVRdol6c+jIDwkujypxG109TCUz0AkCCQXKoWuyxfhzC+Oaefbyk0xbiJ2NB2Ap7xYPQWS';const _IH='1b1dab17b83fd817355c2432469db701f2fc51d995293e52823af6d520202205';let _src;

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
