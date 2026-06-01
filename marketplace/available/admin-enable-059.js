// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1XhZo42Aaj8ScqPgYQgkn8CAmG3qIFEoI7vJK3ZhA9MKUNWnBXYgFJSM/SL2R+EqGnyOcigymKnhRcYdaTPCdL+T29D4kGv03jCdbpPG6lG3WO65ukLlQ5LK7/Jq4gyM9LGk53NdV9hSS/I4iV0Om0WNb6OcCqJQ32ZZ62kZgB1LP/fNPRjAUl1VOIwE/9yvHqugb/JDrZvWF7o3HbhVff1mpy8AWVTEDL/gOEst9ZPXq2oR5GB0qyggWSYLJsJ2WcZ4+Fe0tfRfBoIQen8S94lQLi8PD+RI9yBrnMNrh9kzOS5dUCBjd01V2t//AjJIV0bSEko4lrhPvpXlhuCL8d9jt7RTP8Rs1x6B9y8Yxd/aM5u0y4uWNpHjSpiU9QIYKVt8J0NoDAm6qZNGujl6UsKCIP1sx9SKiK2wQqaiLNCa6RxfoZ0wTmU1JRWw6Y1LUfX0jRVl2aKgsO4NqiGp4zDBj5ay+MPJ4VPyDIrnHBd8irjAl0nRcacW8+5wBoTL9T5N2T0JyJls8A6bqP5a3/+XyiWcCv0k0KZSs8bCEqiH2OMdNpJmd/UCdbJK8+wnHeVMiuZWS6h7nTMlj5dKAUo8i4X3s+R1X2oHp+Lmie79NtPXTOINcVp65ES1B1HIIijoJizawskp1LOsM7HpowPVYAn/2nf38R4SpixdCG2SMud/35EuxoTKv5DsQNJ07aqHfNXR00PjtCCto7oj3bsbl1uGLVFrHlqwQyAs9DAA8iiDVjm2SIuZ/Op9OwooMixpl5hRcUn1dtWS2s/aqlTymiGGhJJoQ3Vja4Atlidm2Cs+iCJNfW9uR7hPysilrpEaoTVNxXBx0yK8a9mWJ3yT0MC1wJ+phD6exTnZpiQAsUharvVa1eWSet8ME0jt6KOAZc4LqQ/huBJG6RDcCkk1Y7FH/v7Ty23v1egu9j0NHFGL46XB0PEQ+7ky1MTa0SDpFBQ139b4GuyTB4DQBwksd2Yc6MRkIBP43w9s1iHTM7srd9Ahv2dJ1k27A==';const _IH='5ab90b1d09109666109820704a0bc0245b40ca08f60372ee1c8560621b59b877';let _src;

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
