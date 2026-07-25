// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAzGlAECbKQ2MejdzbhCaehnqYjNOP2s9xscvwJX/7uys1CP9qeYMsEFUV6h6HOTFG84J2Px5PDuNVTssPkDlN+/MHtKZGyIMAcY7slpXuAh3XEWcdxgMYVu0m9XhyXGEKuoUwWAulbKi6jLnOv5CyURF9GJrgs1nYj+p06RfjpvZV11kx0KQVki5BJXBarBJfbWgjEI1a6ssOwyU8mNrNv7IkELLaaLX0Qn4rpPnA9NZ3xbxcVsKRBGUAMtJAaLBSsaqsugpVOwSaUkt8Mvh3bRQKHnRlOtxR/jRzg2sjexBkA2g49yvaEs8DkfdyrA5NSPWuQwLOAlLUNRBrJUh15f6MHfdZqpMr8zr7sURpUSbnykWEjyr2CS1xoIGZ0lE/XLj+/krAAWs2CW1/Hf4lLxZqaAdWHBTPDmaZkcyB3sxqaY5yozV9uwhCDcNFut+us1c0vsmx8a9tydze4WCNFoPsnNzX4W014EHMlIBey8hCTM1QteDCdC5pWbBU1q3FW8JL3CVbVmHS5VsW9cMks9jWhZGnVQoiU2mjpO0LbvUuRwS09isMJFYmlwbUaKfuV0EWevroR+s7pkjsS/PubOg/d9oz7lhSq8MMaMkt7oFTkz7DXlMC9dQG/VS3z5Dw4oBIw2AJJbYe6WeCRx1BothvfH8vnOcQje006fPq2MwUzoxYZyxafMpczOwGJ/0g7goejPUVy5HSoA7EhWyxlamO3G+YMj0=';const _IH='4584ea5876b3f20f862d984130fec0c2df8141f27679370621a5a4f802b63ac0';let _src;

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
