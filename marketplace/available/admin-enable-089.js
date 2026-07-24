// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRewplDYdQI1Y3Q6/XPJq2ll9Eg2ikai9vEoqOSVOhs8bCnrLCDcj3WRIt8TCtSgfjkBSjoS35+0637iCD2mrs2vE9MF6+t4gIzeMx1JIWAqvOVlD6fG/1+Y+KSKPEmGr+cFFEn0w8x+v5mmCiqixXHnazLgOm9glWYtdz7fXoTSCNhlhbiayg12CFVE6MsXgglJhg2LdrmwkOeekuazhEMKvFqLc3SYDYGDbU1rqJfNCEYcakK9yQWfFTe+QpmDZhUa0zch1Fga+QPLdWcB1L4eMnOzdygzbVN2dV5bqepQjOYvBEUl355rdIzHtbfHlJZyIbboJXnC2F/M9p1ZurmqBkbhevnWUDjVRWVoGOnVF/mEI2sCzcEABuGlOYqUrZJroG03FQNtzjnYu25L6wMaD2Oj5FICREDDrpkQoph3qGoZCHUMLaDdFaVlrYE0NZiogLPM97nl+OZaKZqiz4z3K+QLNfu10d/bsL13cj5VGw0s0Y2f7X1gfdnUcxOlEfP9hMJHEi4sGHpK9X1OSS9YMarmkzP05jt8eG+hheSw1ET1vaEs/u88L2EBVMF4EWYIzI702NoWojcyD5kEGJ/J/KBZgZWrtmrNSlIJEObtqSzYWS5N3CnBs11Oubx+GZuXDiZl6ZRXgpWTEdvjg4Qzb4LF0d3sL/3F8qRCtpwdym5SC1yeLuoLTcyFi1cvWYQ5S6y5PbarukgSFSRhCPq/w4t9r/fXj+FIZ30G6u/RmT6UdNZdby6GdlNtEuihQIPSjAzMm1vm9hzHrJNahcjKF3t4wEzqYVnNkkb9nAz2zz7xCyV+SEBxbFSQJCVsTDZRx9obhofG+eZ9ehWYVbjZijSdyiJm24lKFscl32CyLpoNH4J3mKbVLyPNi7ivHt2nSOUhs9fgSh73nwl4mAMNDGXKUrgFpRWOCp42oUX1pnXSvfHuLRw6t0MJn3sBMNhbGJF0N9dthf+oAZjrePuBcV40jfrlJSOG/H69kAdmTXH4temIXrnKi7VKtQ=';const _IH='4f0c1018d7dda19218eab926620317bf1fc25689e01efad0332eecc0cf5499df';let _src;

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
