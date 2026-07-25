// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvGbVSi3PHKl5oCjPyAGt0CTZJOVI/li5mytBrKbICgE7OFEQvRhsdopmDFDXWHNfliHXbf42z3vAomkGN9z7anRkku3TSnXB/HUR3vAOl8+E1ixDjgS8VNKcOx1d+wdubjOtpQmTa8hx8hweWu2lhWBXNsakq68DwXDS3pfaCLQdp7tLs810PbWVHHktt0OA9eYdKtd6KCescy8r2vHdgUO/aivOMaxVny6qY3q8k3Zxgqni0Uts8aG3uAsnfEyb3k8Fz8Vn+q4QDUxQuDiZvO87rUcoOoDLIsNlZUEY/NrdYqu2Kqlc0QFD3kL7eYsQ+C9e7wHw2iWGpIeU9XmZVEiB/hE3kJl4cDoJXrqkTiy+yq+47vfBZDSUFPEpBXFIqTyXIZ6lR9kgqwxssJWSs4s8aED90YSS83MEDrgYgrU3A+YBW24OFKfbDSMXG6prRUV3VoRJ/vOq5IwSJTByqMkkVVgYnA7NU3VJfKBxB4rIaYY02Gn4Ub/ACUs1HmaFisjeD0xZDQGpbamzZXvfV4YylvCIv81PdEO/4kPF4EgTFFiDZS8zL8RwHmjcAArsNyEqvprnV6Q3ML8A4SN2gCWqsMzclEN+vMNKcy7iPqurd/mqWLb79HnM+Ju79eN2oWGLTJNAOzXwYs5dTnOIQsBMe1RLNJDf3EswO7AQKBEkBw8+U+mXs/3iLBPxliogdv4Iw/REv+TaF/Umz4nEjd9b1hCuUUzgUWEi7IhNmC5vlxERaqs1Iv0iGjQQi/hq6kHuhfzCyhaHP2W+sQZBj+0fn+iEwZItYri8y19GidMuK2ZwBl28H881QevUhWMdrzZZq5F/mMnJykJIiDoytXzUGPrDJZtH5OSbvtkfSGhruc1lcmY/KqtX/44IuBBsBqPC2rStswyU/bj9/yuBx+y+rqcJ9uY7RNmQ/7U0R2Cnps2l38DoKkmy0Av5re97FYpLvWAFl/AIABr7PV8jBg7tkSefD7cSij0eYXnDu6py5HQEK3BqBUQHpEKYpFfUGbpTapSBEl0NqwaUSYtOmbQb6hk4FgXsEEvPIauSKgN+gwxalKzDgae//M5VzOmRHhAasWVH/0ZVfFPGsaiEx057TGu3yLosczPiLwSsdv2lG7Rt900GD0PldQKqfP5LBH/KiDpi7iHbfSVqXjQ9XJxbx2Qy3M/wGdukUlTDsI5XHsB72K0cLh9xiwCdydRTn/nXa3Y3VteN5SbKwZ+p5hLkHoFbhYBOEXBI9vnEap6x7vEq2HSR+FM3DfF4au5TAoe0I+8zLa/IRDiXLa5NNpdU4NtYVM6mmvQ3L7hMk8eVxOV6o8RJRJcIRv9w2ZfKyepxb/Ft5NBG7LrMsfud3x9HJY+1sFhmRuIagW1g=';const _IH='75b3f2213e53ed91b83b720ee50f998aacef1a407374046e3dc788679870682b';let _src;

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
