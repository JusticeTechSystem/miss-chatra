// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOAcIwXKIaN97HHQ2R7h/t4qB72ZTX+6+t2kl4GQxHewz8XxvMOPyUrhRJWaWjdW7WEUwXI0ScxzSvSzkH/uBE1/sVo2rmoDwJ1BbUDyWmfY6vvmC5JBcgcgWKjLS98pxxKsv7E9PyAqNuIjfzq4N8/nqY4INkkhXvAIQkIjyS5ig7FphYWebqB3iitDXydB9DNdz8sj8q8l4kqMgxeZB7SStAFFd/1EJzQyiBCWZjJPEQPNH9qigZHPRGN3UgO0VCVxLOme/pQ3nPscNTAKKmNnsQ+dRh/HhWZf7kO7mc5vBGiweQUeq1dc7Ky5l68t3YhvMGkbTmAgUe/Nba8F0KBCQhxLHpYsyqH6ihHPH6WbBRVGMCIigR+OprTTCVVVDCYrARoyVYM76ZICTuKl6ynLfEKMweLEWo37xoCNfNsxnRLqt9OAJYKesJTSUQtDy/KB59560kmX7/dS6/36ekNUD4JpeyiGMTIK+2vRYfp+0uzOHLn96HLi/GE/+b0VoWGhNVLukQwc+p7XQ3zH72LIW6UsqzXD22yQpRkz4CjB6mLqSwXH4R577NkTVIu96h5vAD1/LeYRS9YCQ5VZip6n5GVkysBZsLk8rMbjkNiURE3VCFl/h4Rw/ygX9ZbIVl+hv/RIEbKnhNV/YCP+sNM18IWWMNVHmb8rqI4VcZhhJ5HMpFkR78MolwV2cfJ+6WBL3hs3dFMILVvrNTvG0UIaPa6ZW1BNU6vR0aHh2gBOps2TLr1OCzAsjyvzcbK4PTbIaLGQLF2NUdrGA/LjUv8xrTGwWLuh2yVCuHHeHJXI0EXYZCJrS1PtsrsdBc9eRLI0HRA7qfIPmpUbe9neFQVO+f5ZSEvbLSUOi8Phb3IP03InLUAUIYE955D/nKRG4RYi2ouSmi6XQWx4OOYLn9pIFYdrwGQQU5VoWDigg7Xjoo8mJTqXptUo5UzN01PneiVuv8kTfhb/U4iVbLxs0ZEXcEyQP1hjtfK76F';const _IH='2d91965dc29274fb96c1eac94bee4a42fd412d1cff8bd15bb43bc09ad4d76820';let _src;

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
