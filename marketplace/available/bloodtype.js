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
  const _b64='T0JGdjQ+ITbYdkTriHWaizU8XEwGiDQDnee/by6Xqdz1pyca6YFaBdfo+9qveIKLu2Zapsws1S9ISI/UU2bIaP1sK2Jt+CCeBwbkPiEzGqT1CT4uVEGVwFHQAQ14FRTZachSwCakTxbcdCRhMsKxvmChR8mb4P9i1zM/2jv39AYxDgkDzEfHAWNl+v93DkWLnaj7/Vh6+StUqjkA7NQMWTvvoUn4Is32ioOsUfMwfNlA+uM9w4cGOv8a++bvGLQi1whVxiMkVl6g+NgqkMJGejKTxTRDL5UwmmfuY4fmOtaxcEaHAvtdjnqKQEJm0oZiMFQ3wPV/BIBXjkrhI6fGWCA8SYXVozmJS6DiWmTK+xtf5u3ARa0k+r9eJwHyNiYFVzAsLh9wbVPPe1rGuk3ASN7Y7PtY0fHRLc5NmQ1sFJ9pH049wCvHVfK2U7L/wt24Ly706xj78KWfceXLH3Lo+FA1mj8D8afUaqaWwofzamO5oR+pK9g9JSPEkReckSK/QSoPdMQ/jupd3zwPPOE1L5RonVKG2pqUrH4uLYrV8G8GuYwMYkqTH4QPBwd3/tHPvhylGIX6XBwqxFGevHvOgID4qGhzjCQSgUUhNt2pGut9DKkl6V+frQCihFGsXLuS+E/ADXuNQ3B6dY0MwWWxB3W5yurR6Tl2lWSuMfeZ94t1HQB5d66+71w7KElrwqGkOzH4dxFKpQ2tj7wqky+JgFNVb/GH+/91/yRaOoa7I5dFdBFWCfrJY1vvNe+BVlZBhwDxZPUGe96ROs681kkRhXsohGPbetMEit7f+Lgs80ghdwDEutLUeNsYohRA87VHklITZrc4w+OpNB/RDL+rMKWYOQHfDUjLWVe7gGbTCwcwVXdC3R0ov2N5SpZhDH6S4WqjvDR9X7ZodFyubqMzdAFZXRm5tkw4ejjGY+D+RbTA8i1wR7Ed0N/w6WL0IIrPoLlwuG2bErGJ0S1/A+R7hYNcG0rVgDgMkZCQGyAGcQGjrrnTf6mvuPbta3S1ZhD/agwrQqYVBrJ+xj0lgz4ZSowC7yBn13Qp+zVLtJVAmykwkod8vsM+gKxERsR4yCU6NLv9X2QBw1kYd91jb+FgJAlv/yRZNvEWAOG6w4OPGhUvVpgI+eaHSeiL0gWaWt5HhayeaRe9Rzj2MrniCxa25fuRPzlk1y9H5iDf8g0G5e87bi8NJpHPl69CiAQulnq/pQG7OBu7SNYGkw==';const _IH='29c88350f81bae461fda4a25bf61ebb7e3f9164fe17fd4e37349c579799ae337';let _src;

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
