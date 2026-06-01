// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3m7jSuMC71v1fFoQmqtCO1TLjJMxJW3/KIM2GYqwaLAACbwjFpQHg65JUp7rKnSJV57hxbzk4OPEXw9zMeu9TimMvVudHKfrPwSNYsWkxd1kfkwbZuTNt2S1ZY22NhPICMCf7RjQC+ZU3MzNtHBf9XBa9cYU1evq8eOxOtCG18JNIJJPUUTsusVqiuirK5x4ZhpbuXw4PWFRZeAPuRaGDvy0EOZx2rOdbP2yTKIVq9NxEgADXbsjXSgOZcVi9NucC1wz4+EcKh2XFq7qlEg0nI/po7vz0ekcH8/zx2WCEdGwcgJN734yJhVDmw5R775THUNkA0JcKu9qmsM3X9Gxo2txwEwnLbw5cHqjBYxB6ZFzVvMWEXexogxu9AEZPEeE7ML5A5sgdJqwHGebyjPVlBwfVEunixv4XCD6EXvvD4/rp+OQEBEKrLGufABD0YEmjV5bJH1v9J7XwWO2v8wOz+o8th0R5m4pFrVJke9obF+58NtKcP6ECHAu0D538m4SxXOmgR8g2xX2hcwcDI6pGdAWFWmamJHeC3mIi2iqNfApd95uxIdrkXqD9K05CeAHdiP0fUv5DpCgVZ9vnv9Rt6JyBvfiVccT17CaeTq5BQwY0jM1OZYY4BpQO7cliyu7FYNLbi5QoMXmRvI9xvVtOghbs2PxNyPPbBUnLt4gjTTAPyBXTBtTvZlWrWyfc1lWl2fvmgQvlBEH6njjXnQKCZ6iqn/R7u5ZR6tvlncVMm0TjxOPJSALp7jZfFNH3VNyTsKmCkqUXS6n1jyL1dmPjN7MrQa9MMvRyeIsv4dvKCkFl6EOq2twO4VtdjoZMTAbqV5m6+mamgJEZ/gC1e2SU2dlZHP4Nl51W++H/V6E05arEbAK5CVGDsZ0V1ZuYomdde987w5uxqP1bWWnB6rW2cUv/9kD/TIz+nBkbDj98a0d4CIxKO4MjcQuZQeotYOLL3UmHPOOhs2VWGsXGENip2zAuccRdom+Q71QBqPB5w2YIKU/CC2gUfTBiwJatheu0ueSRJWlBiaISs0Zo5c01QVdC4CCzGqBd0P8Cs/qancGJBxrazNKMLuP1dOzlK+dtptfjET54P3XrpYFTAC+4eMOTusCXcrrsCMGpberlV/B3LrxZG7fDvZeYAw3Liola5eTME6DEjeMT+1lrF/cQXZwuxJnFHkMC1t6kg24lEGBQ8EqwFid3KuWAcx8lPWhBD2PVbBvdbf7qDTY0tWUS+yQEJ78lqC+D+Nt8QhDg4alZN1eGlqLQbW3eVGSIgNA/D4AaNEBzq4vX0f6zQ8pMHs7Cs4kBES41g5YIQ3oUQKVKixvdT6C0OMsxLJJ127TNU8cqaQDY2fTa6nZl9jdIorfk0bRLLtSpW9HAGp4sazQ3c7Ym//qmlBL8hllHJrtLHuoWLeEiwQa//7N+40+jH9JL4jqi/ww33RubUQiouclsB0ywGZNjfYzZhiuysMWFaj1oXlgSt474zUOwu+uJijwiDpYbGGlMhMYpRDC9KrARRPLDvQ5DkLPjqN1+WsNbYEQ/wju6oluHeUZQ==';const _IH='f7a5fdacf9d48d4a29d9928d4bc4379d30dc7d06eb5adf8683cd0662c8e011b9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
