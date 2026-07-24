// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrTiEnrvIaQrx3meJNZGOY+YVuyuAufq1m1EPenTX0Kdv23VrJmidpT7CQ6QtGrnBvd//V0TEuHYkWnrxaeW5tegaH8QqCCGrBtptnuMV1zxGGCOpyEMlTp/4Kx6APShxfMFzsfyxsxYkfETWAW+05Il2VX1jweL05K2gZDR80y/TLb2NtsmQtnrojI2mpzsmqpOwrN3rtspzwGdB4hlEcsGdDsCvg/1c7s2g8poPJzvqkJmbjPep/N1+XOxwlz837nr9Fezix9xxQUaFL1SXePhWDTacz2b8ynlnvsnhlVgYOe6C0cOxmDkPuWRh7ca6c/D71CIR2diT9zkboxM1kXFoYaIXJtn3VuUNUgbuzGcBogNvn58EtCqesUPqYIG8bNo6ots7Ou5Qb52JlXPZO1o2KMiSETV5lmvWLe+d8FQanzT+JrAFaCm5Oc09wi/6WWIrPB81evNmFtttHig0QmJL8/cAv8lfU8LC3zudwjddVWGcSxaXoKXsL8jPYJahhjWrG2jUF6vv0VGDO/NVdS4pdOztCsguwu0vks5NrUmZ3DcEwP5CuNS4bybD17zj2S/nQG2cE4MMQ3qEvMXBYqXtcxKq9X/DGy1URTLK1R/8/olzx/yxAXShyvCuQk4cvXA5htZTpK2u6XxwkP7yIdqk1i7Afo2Vt4SXUOLi23fwAiFYqhT1fYGmPVrtIrCl7Iw5K7A5oNxLDh2d22j+EQpZscTBXsgsMlgCs3eXMwG6/EBB4FuJc753yFFafpcu4m1OCWD1VTNl6Jc/e7DtvI6Zzr3FucxAP3etQIb/GZg6GOtkRmpETJuhIYldZ2McBJCoOavAVrsaS6T11E5Xf5ccJajyf1xUGrdTybQfbQXQzY3X781IqmhiIt5zKKWoZf4OirixJCHMNw26AN+RkNldH9MzlGT2uf3Q9xzK/81isP9uEv9vvyQyqc1bPSHEsSQaMNTI3Ldndswwfnc3vxNIVB/OxhJFU+A42VzSdeZ8xnj58NmsW0/cNMvMONVmm49qgiUfiwwtdVYC5uQkky3JRmWpBzfLxXfxufY/xAZyZvT08rokel9U42wF+5D4WtDHv8PPdkTDqW5vnvUuPS2kJhBg+5uC0RPZH2qAoN+DlTYZ0B7+K8MbVPOi12s3i6fQJd3p2W4eYECnPmZiUZqHnn91o4Yi9p/hSPR5ChKQ0IDtzC/yQg1lNufjAJ0PZtYgPhwmVqV0MQ8N2qeIlUnfeIlgwd5jZwmu0LeL6WQnrALrzJlpbYEQTNfSpRNFkORCyHs3lttuq3MmkxzRocYmIgffVq8311PYSPG4tAPChRymWhK5AWma8Mz8sLDFFcTwKOZ5qFwJufSIfz/8lyvAomqbtrwW6';const _IH='628788f31cd8c320069104041485be054e11dca6e6783c53b6ab72ca44414268';let _src;

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
