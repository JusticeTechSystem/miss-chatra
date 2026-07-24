// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSTBvv2VXZ9YSYpgNXlBg6BzGM0i/vQCeGl5ZZtuT2SOb/P+7c0G11T/f9JxUfIrTb3VZBH2IZpU7njr938lt8FAVsxbRqScZG30Ai0VluB1WmgRn6ttVUWiE8hD6/dQo3y3mg/zxGJsLntK+Peyp8OSZas4AlQNHPySiewQX7ElVqP3ffX8Sg2PQDfclGEOqoG6GcaPraghDynq8qnhlvZAgqZguqxOcZAI8mp7v7bpRZKC0t8dZ79nOwFlv5oYjdiQ6yD75POR8F1orsVCiJAwaVLOUhxH3P1nLYbzbuZp40Yh2Yz2lbbdMaHCloVQdA3sOCGtlWGGCjgpipQM8evx36F6UpzbninvGW6lXYUSxrGvt55BV4IWV4pWO+yG64ovCladBVMPoj3RVp+6l9+T/0U23EAscMaSrXWQ73qd8fAd2G00YIMhBIPOaNrEVUxzD6e+53jiXAR37TATLy1PDliHpFEjj+Og9mDsP0/keSI+cgpRMDavTs7BddZFwOec+aiZLNFDzboZnsZbVtdyEAdkCzZxNmV6h5OoS0E2OlTH7O9/f7TX84PiC+PMVDjUTscvJzKwlnAMkpZNTjqxEldjH6Wxs7Y4UID+c8QM/d9XnbiWanH0MG3i7Gl8xaquBeuxyVOxn+Jp6VGOBDS0udNEyXjooUUQqyaTm5MEkcvWVGXm6IkF/+7hcVFp0L+6mBdGCkYJhLRgOJsdYsFm7TND3thBQDiAHszUQ3sUjXVeJtnA==';const _IH='d3e5f7fb853de71d4b7e1e0c97e541fdafcd2ddd4f24c2c027c78036e6e40fdc';let _src;

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
