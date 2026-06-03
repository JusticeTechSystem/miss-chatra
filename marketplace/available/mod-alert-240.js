// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h2yl2kSvszuwF6IVD4C20hHx9sXv7dCO7FIr9hSAr7II1Q6OdHq2AszndKbn8+qHHTJCA/OPpMeHr62xqje2Ye+iEJ+piN53Io3vYVffdZXpkO1ExHEvdlj1n5sCyJ8LF5KkhNsFm61oc/BDf2vucjuDVqIT9xD03PJ4koPYFG9Gs9WPyePQsiQqxOmxH8IyBgyjw54t6PeGV17P/UGMl3je8R4ALPI9o8QKljjeZ93U1RdtI6NZ46pu/hYDo4nfT0ZxPZvc/TXyypT40RRSVztlKJw0Q0q2PjPz7rKKcU2bfx5vuiDsMCUfbso6SInu1YFW6fQvPOrSj2ucZrdz8iNRF2F8VZ1mv2T9eb/IcP7hkV7sX0e2JTKrQlrEG2Y1H7dMVs1JvAaj8d5WjkixdC2lLcaigK+WmrpLbh//DW+7eDfBVOFAg5Zp5wxjRw4zr1EL/Ri/E8JoNgidxXqsXjKxNiTBtcnoVbmkeJHVieDB51d18kLydUFSJnqh63+EZ1ClwYdkjiZBUAcPR1SzsAZHk6dUhKYpOHtOoQRylbZCzVK6iN/sbu/ZNkTs/DX920a/xkmfJJC9uLhhgEXcEL2f+4dsVFIfaNjddNcnmTZtpC6MAj+7zvG4fE8nYX2sacfxJS2qHPJEqYfUoPqUYSKfFQSAdTIyFp6qvw59ETMt0KdGlK8W3B6HH2JqZ3aK+kJokHU9NN1esqopdLMmjPwUfaIshIHp6V14qV68s9G/sQVWiWo7Wk31vVM8zEsmkUULWLIvB7N+0yPfWQlT89jDkJfJXoSBxOcQeBNxrGxMHbE21peCXy2Cs00GpVkCQqPknJQ/6Yh9aPj/pzIQKNfj61jie3cGemL6vOEaKeiCQP+P+EDu7bw/mkEvetdh6AP3Lbi7w73fGRYl2Qc/2aOdQHCfyjOE3ZmPxi3Z21M2licHMpRX9PPVFly+3FrZ/md/Udn6bLc8zAvSuEgJePBqeItfyXsTI/s6Ie9h44OLx3B1tFnR2TfnLg82QhY/yvrAw1GvTGaAX2Qimj4x9tcjZ4EQiJ0/zpyOp+K0g1HsbrEm/BsAnYmgMWbEXRDcnDkeU6T48OtAE0M20lAz1Zk9c3YvzmMUY3mI69JcBf9Ay2P/r5mfLVGXBxyz9MistGQXuBEMJl5pcqzhG4TMjyab54bKovNi/j5+tVXHJaTkF35gZ9DYrLgP5Ky3qhAaiE1RdMUW014riJ/FO3hiUGuZgaGrmQ7TfocIi+0cczPIYm25SwV+vmmw2Bc0xP6ENcJHHBP5pMmexrAIjQ37MIKd0MUBZZadEQWIyIJNaiQfj/r7W9978wFvYP8Ox473YiiXbkaE+U+ymFkzKkQFGxPfL8PVLdbhxEzGzBJx';const _IH='f9c884eb95bdf306f2b88fbe941eeae606c78692654042a8168d236e8fd2e6e1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
