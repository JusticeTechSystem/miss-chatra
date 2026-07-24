// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNq4UyVxYuXHa3ZY6OwTI7QJTWRX5ddH9z67LDSWyNqyfOjVOZjFsoSpycgEfB2nhMUJroGi5NAuamLrnZI8t3oRUbLJZjtBjbSQi3oD6U6uVYoFbXZ/kdsr6HZuPQOrWtvK/DRc0rjAajsdE7v29w/QriL9W69WzQxHe4U5ZSaUlmqLpHoklltpwALx1xPfDWuHyymc0mMahaOrs4XYHMJ9cU7cixdOT5OL+t8mvgGylFUXwSWxHcpJPwrpB4xoU3GrXNYy2hGkrB9GU8LKFvo/b71y5gr5j8RAZ2D/N9wVAyLmlW6mKsi/EIk1pKGueUbhv4nbAdZFCpsfnbOsgMCCL4XY8Opy8PXLSM2mZx3S3QQ+woynkjEbKY/5Bodm3jKKSr2hw2jEPhmaAjt7qkT75nozq1U8KKZxSz54dZwaFX7Bh6o5n7F5pMlubCDJJIPmRMXo3oZcweWYMA4L3ik8QVXMM7hIjLOgUl0A3UCwkxXhysNZol7KNdiLn1coE5IuFr8HwIA67sDUjJEXRXJ6nCK2hDWh1tCTDm0s4UUSnJeo9S21ZyGbL05czjONlX+9Jz4nz5DoMOvVidz8yoXT5e4HYodkarPLRTKT0aoVMWSaoOhoWiCBjDvl/dyRExtVV/l+xX9nsnVM1eU55Ve7AZvc4gAL73AdpfMFTBuR1IenI75pdt/d931iwQEzoYubMtZFKldMeoGof2YgDJDEnCU8Ho340=';const _IH='2fa7f69b85b464486b4e465d72d823409ff5b97b1f73a81354bafb153958fc66';let _src;

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
