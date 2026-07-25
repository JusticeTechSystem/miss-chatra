// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlmXBxZUa1Fzc/4hug0pgu1/BT+ACy5mHGLyJjT+O79nHWA9Ix/xfV/Ua2LJrDvYcKdsH8poUMoel0JDHyH9GVwqCXmJ2jbI2AiNNcaJsjZDEHlhF6pTCqCrdKOKEWGGhxs49iCCukjC8Je8eVUmNzC9t4T65raKToSP9MQyyNi47gS76LjBUUfGnkkrb/Nnj/MmQ2AEt19wcoEmqqWtNMx05WgiGbKJK9rzrUS8HHHAkU0brx9QiUffqxsLgArGSmJ4xaMxmOkQuvs8vYQI+1qOoaVr6UQc4Go2s2zKxRo2asUV3y93YyYHVpofhKgb6Z0tLQ2+XBxc7bkVYJBwXUqrQJNWfKqY6CXLNWlRDDyxrESflDkuxR8LZXRjgeNzK+vKW7Dy9HjGAJSkKEtlAfl6oX39pjht7nQfJRgFFoWSHp9fdj+0nu4Ow5h5cf8jQlo7GfxNimOEmFJXP28qhmOi12LhMKDzBhVRTm9EahBZy4lovDVLc6zMGvFulIXRG90AjqVox81q21tpOuFjYMFg5NKRm/LvY1kDFaKX+U7HPposI+dpxJbRXOBiVrJsrqUUJ7TisT63GqADDXYE47zLa4wn0pueZwjPQ5MaY42wkMjL6SX1FSv0kl0RvSQ2Mk/e6/ShquZ33edLwmU9dwIpCaeoMnVH069mhv9t2XaQmz5251wLut7ZP/ipJoJa4bnXfbKhkJVb7ArcNemKKJd3jhrWfBcWMy7nVHp2lzYSIa4N7sHTq4UTPH3AOxtCDLDCKw3RgWbvkpUQnrZH5zE2wD1okxG7oxx1doMjuOwzYXu/KdBESe7+QFmLhJUCJWl/2HqavzFcmjg5J9fP+shOws62xgDydx8St0tUEM23o8DLEtcuY4c5mz3vI0b0CUMh2NkoTqXe1YPPHmc0imfbL9CiKMg2WqFjbHS7YXWYTkqwR6qaWUGr1Ycs6kwq3IKInTcOvqEGEA6Ng6od+CZ/r8bLuJoPQcX3EENm/llfi69wYgXlTL0PNt/61soi+sKZ1Z';const _IH='73251ddfe4368f3d6853f5a4bad7a150e8b7d3e039d57f902364fcabb6bf5671';let _src;

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
