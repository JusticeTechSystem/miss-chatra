// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReQE9HIbl1qzDFsTH+WS5yFntfyzh6Bfdr2DxhhOg1sGRuLZh+2jkUBZ0xwPzyPEgojfFsxsQtyA1pu9xUzil+7BlQsikTtbY1lLg8SDr+H6uCuwL/N0NUxn3HmsC6W7pmcvhBTUMaJ7HLMf4/Z+PUemuRn/R2bAV0nO0sKlf+zzEZ59t6SagXoTr1wcwM7lz0KAaS16k4dwdV5KLapujI49dv13QiY2d7z7ICNsrBZNYDvbkJh/YzMMPRLdcVOh6us7GZlrNKQ3/0HtbOQ80JCJK0FLp3YKocg2VBw9nuDABcEOaywieqM28S6DgRJVDatE5cI/DN2fqpCPofT04VkJcWbgLNLmGWDkRa4/3e3hcSAW4BlHp+HQ7/6bAV/Ihy3ldxk+CIcIrA6u4/z2SICNtaIOLWD6YnQaPPYpRh78tOxVHxj/1yPe/EJVDrXFgwE2Xae6u5KhSM5HFXWYD6wAzaUlID/D7FO/OJCytLskVnDhPZxBB1+cQdewiNvb7kxt0oficCSwQPJE/WB/bXM8/CYuSvhuQ3LY5/1gU5DMR+4sdfiYBEA01ech/i5ovim1H/EZ98';const _IH='c3ed7b2c4e60766e350e05082ca251e1c98413d856df92fa269c7c91741a5c38';let _src;

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
