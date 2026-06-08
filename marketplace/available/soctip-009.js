// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g7fb4vj3Sz2pDGiXHJIOPO4jvCUlApPSn9rPeEMhOFzi62gmP5eItQbrm82WlOFkrEFrkcqsAf6Wru6gKiJmpEFG9wpkw1Vt6k+EZdLlnQQaeszqgieEX0SHC6fVrtIm4KCJI4usCI6ePjZWZ6rAUySafYUi/Jg/dYWeiGvvjKS/fD69qnN5us6FI9sJjaMKYHqiAKvrJeZ/N/nwIElgs/57wd8D0FCtOZofpQu+10HrepWcw/Y6JT4rJJYZpfx59wjRplW1l/YOqK0P9Nw+dmr82PK/Z6wuGnaaWig0s4BgMkPw9zINoyj4RqkcoL9qAYoIbXlqUkm15EkbGdqXaprON8UK/nJAYHtU0d74zKa1CG9wmQ7y6NCbLXodbutaq0aGeaK9w89cTJYIT7tDjrDnELuanZCssr8OFIv0wY2QfuTVEKGSZJ9romYnp4MZb0jeUPX4HD3mBDWekNWUnADiSoZVH7DMHRUDqq8pgfY5BKSdp+T6y9Gl/7n0D8TVDk2JCrZgMtqMSjCs0xyc0Q7QTr6Dt9iorFGZI2EHQI2gqtEQdhqYzf0uwNkGOioZWWkwKBNRJkGDp8vETuYVtrRHK5By7To5nRlD+YC0PIS9RZHvGIpFWbChi6cGSRatzTg0e5Tee6K0jFw0bct4aXHvv9xCoikcp8CMea10+3ny4Dmd7VgFbHij8cKmjC4vSsXo8Aw9hR8eHeKb83xelOBV4AuFHz1fLg8UHZCrmU2wHms6pj+508Qz5x+ksqMSwjFyQQfgVtn9pvC2oKdQSJu3uxqMTh+XR6Xv0mQRzM8NgzAc6uO52p7/OZsl7baJBvTfeX6HhIq4P5BVdG8cfnIRfMb18SUoXIwZzrjyaj+19n8z03CNhLeK/ark6tvRQCYxcT6w8LlMN9xQCFboWEab3Gt3F6r0/1zpjSr6G6kIIOO4YV6/UsYPXlrIDVC83yzKDXLhvsYAQQ7CudtqMxL44CmfeJM+HOW/xDv0d9B5Xcbt8DWcy0d45CeMErT79A2BRqAXqz76PlWiUoRkdPOlSV5yZxvm3aVIo18ag4Ma9zkIqp4dpg+bcnxufYs4Ic0aXwcsi0Uzt0Y=';const _IH='5d6d461490cf98cabe8e6ecc323b4710efc461ac39faef027eb31db95f58b1b5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
