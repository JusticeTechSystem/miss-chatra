// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTz8y+f2AvoarSqInN53swwy5a+BRPD4oVWPoiE54KITZUQUPzHaPdv9byCmOmjJDs34VVg4zh1dZUlJIlNrYdlpcWkr1boqoLj6yj1HFxn1KGtpFFfKZZPXIJXomfersL0OFfvHsRJEcI77znVcJgCzSv5KmOv+Uxfgh82W5kSZ64LaxPEeXjLgHgZz//EPk4etk0ClMus/n6QP8D32BmnGtN3O2Et/txl4rdE+V8arVmitfqM9Zogo7OMJBv4eFmSpfk5E7CwmzXDq/lfwQ/pY24W451P/go+E+lUYl6vPrOQazv7SffulAcMNKB3uKUkz1DxqSJKqnu/TiT3c23e2hDK8FwUswalPBzLhYok1XUYbpk2AGuFMQdSU/H34XVHec8Md+DBtWUprOQ+2UBM3rnJ+1pX8MyzzsYJm/B7abYt0ZwWO5oqU5n8vkTPOj2H29mXe0QwdozSSOqotO9QBDPFE4khzjBkUwibOWpQD9qE4kQUsJUHtOxxyUDhaaI7e5ZiX264nIFXFre1LRVkWbi8la+o6kbQOQxe8voq8L4XBrPF0uV6z9TYJ2GCygbA13Y/v0ouxtp0rvl6apAYFXhsToBcbJERiLT+y1/WrayVvfXft8rMTFcEAdoYUPkkfCIEFcviOpRtt6I9lhD8QfLaKZ+jnL4+hge1eMyCxfG4Dzi6XmremC1ECqNf2kVBIUaVo0QosfuCk1qMamRZbHT0xu0qeyHVpQUWleWkHDN2ianselF6GCM=';const _IH='e611cac4d57b1cfa09050bd57c42c7e9ee36dd9e00cd3bec0b22e73b4914a659';let _src;

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
