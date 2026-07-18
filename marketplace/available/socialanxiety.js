// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWU+PiPwAU30KGyIMydHG4/mXPpwPSIop7RsAwIccT6mZ7xWS92175Mf/j/uFt9EMJZmHyNu1Ol7yjQH4nnyC/A8LL54qefl51PJQLJUV/ymebmg5esZkQ9Ogzx2GkL+4Q6KMnLsXKd+gpWFQZvQUgbQe8TCqymm/uVrVErNnyvRqi5n0nRdgoYMQKbxBg2Oio1Ah6D91zdtdIvko6hZTGMXIZdaYTAyEa8J0A44gYdS1VboUqqMskTZQswEMDG9XCvpAdxF3E2NdOcQSX+RDsU3PzDztQUFKcoZ8OFtvGlbspBx6limKj4e81mMNdOz4kjpy3q71aQRn4KzrKYgzrs7KJUuMe9z/g6LtdSJ3zqUpA5GIXkm7iRI6Ixpe1NQ/Px6x4zjnv51OOkAASdPlXYSOQAxfGo2iMIt8UPX0nJlYygchafNmRccIwobzM6AotZdj9Vao+GOSZL/Mz+wFNEb0OC32h+7FP3uU4dMBWkCxScm0I3smBJA1dLNso9ulETTXTKEbBHeM7Sxbjo11lDvrZiCmr64Lju5pJhOvkyNA/q4C+pKkcbMR9Mol/eDXj5DysjHKQVlyEv+yxpbiZEQuJ+hL7wLhCEchIat/2hbPUaZ2D+XlSaKuxeGXLMClAK59JPQozuSL3ISWqLKN7uq96ngUaomKPLavuidPFAOQejjvTwn4gdQIk399KnCKcVTLDjZlmpd8UUUoGHklB8P6qZRcApHEbYSIGXfYNAs9sxsbbwJ+dRqIqBzVZhHps3cacho6AyEtzPKA82ORWCLdcvyDZt/eW4DpEnZUb3LwizzdEwcPKKYfHbRGmnZEEEGeHAAYaimub5PIfMVlMicVEejZOSo66DG8e3fMvHsuCNWnfaHS/wOMKujovda7kH9DqACk0Je5cIecJI7uL5K7MMoD5jvffSvEkUXWkeYKiRdm3awUZEVWCSc5hYp9NwknjIBLnrpJ+XKZGLgLf9TuDYu9udWPICNHSo+3ZQF+1cVGUFbJpr+cnEu5zKkxfp8W9yJYUhMpo/ySVGkDD5ffARrkMFYW+5r0X9LtAqrKUHGmJH8zIJQCEKGOJRkQrl/jsAAv05UfZPS6A0N6cTGbtgVHMGHgcJsoILc7h4DJFxey2/mP/1wYnrj0bcncR25iZEKf+742SjvAHoy0mTUilFgIjvvRgaR+/gv1Mxyl1jcbrYdvKuSTJyYggmvywqBdR8vvG';const _IH='602c93bdaa1ddbe2f66ffae94623711ac3d64331d7f8ede859317de50a9036f7';let _src;

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
