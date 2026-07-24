// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoBhFYX9OkV2TjkdiO6Uzmy64r8oR/BzBlIqrnEy7YMe8SQyDarhWlQU0SGEF5FZM+E+AEVLMu0OWSTyNQfIBpQJa6EYLffroinLKyPuki5bmEiMewrQScF06BUDFuJI1Z6bJI6Wrk/Rt+nU92/WL6qgCNCEVpEW51KDUA1pePok12Bfg2f2k83IyGzihm4C6yibfUTNPRNEvO3+eGTyjkwuEv3gYVKkJrZ/SBgvaQ8/FHf1oeZe/jiY2YKv79Ir7JpRl+0ZjM2oWIVHeMjlIln0G1qpLSP0NqlSw3OoO+H7wkbPO1yO00btl7wBRTQqJaPcbYguQuBpqGJ3/gYZntYUO81uo6DMpENcDC86R2ltJD79X4/yJvkZchjzgMoy5GPjIyqSvzhZPM7o2T9QEvkTGSSynX8iQIAYt96X9zSY4W39jrWO8h3aDFn2sZsfnzQRa96nf9q/iFjTF/cGSmq+eZbFo+Vo2QwKZWdRsICMC3Ro0koYYpIH2luVAPAossoFW5DgUACnQTpCtJ6xrKB1OcH/chaKwvw6vRCm84cGuhrwbdmGj9WyBfn4v8Wv7OYFqbUR7oS29N7mq64dst4bqhLw1QBArZXTw83tIF9TJ5KJyTF1FEfXvzx42wSMqjkK/RA2N5FFSt5mwhKmYA92avqf89AUEs6hLtx+HReNzI2sRZjYh7XiWm7ptnN4KMw1xfUWC59LOVbY9qUlQ3KcdEtM9qnQClrtkcDVLoqIAb0JujMFZDkaQ=';const _IH='d1c5d9837c061227cf67e813fe6524cdd1857e4659c58cf4d909e5b48ce2ff23';let _src;

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
