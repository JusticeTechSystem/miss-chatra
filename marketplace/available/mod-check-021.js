// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3PFiV8DIMKzYOpgoFUP0mi3S1Nk+uQeY61mjpp/zaejhdjE6KwQbzQm5GRBwzEJpNJBzB51EXqUGrmRxaQREZslCpXrXOFDB+yrTQsBlTYLGv2Oijqiv9ccBj+MxJU9rCvBKXE/XRAsy41iRYUctXaOCPA3cUX0GNUFhRttTCALEoVuvmXfeYAYewnc9su4us78v5K3ihzWID72WJ0rZsrqV9YZ1zHkVwBrFx1drsDwTeJAV+NZsePhOykH6e9NRJVGrhUgQAThE2b7Xey3UMHTtgmt6Hrs4hSOO7xBLKuxzDnITZXxdkSt8h40CktMIwZh+e2pEuDkGt38VRxr10B438xqUHuNamhn7J3ZP/E4ffjFsBGU9sMkq5RvA9w+2Qd4VTnFlnLpuA+kTbzA3E8CXmYoJpOcNKfRaByU5lOaHlCKFFPkhmndneK0swhcAZDuzA55Ml4/G7+SfZEK06j0limN8yx6lKIpyHiUulFrzj4k7mHrbA+KUnjt3+RJtyA8qF/C7A0HZ+dFpC5mKan+ifIz0gCOaUwa81p+qXrRaonIa96eMpg+pK/pgCYFtiOLYT+sPTJI7Uvp8643Oev9JFFZJmm6koYoDRKRVZVs3rxWZ0SqgdEafjvWasvVfmq1kXh88NBgg7ovFRfDh7RmactK1EYAEwuzEs5Pq68jcF/6TPHxs90itOtH1oLGT1cHptrIH9WFYIvCzhUaXR9acro6WO2vQnEkGA7dALYPbxr145KzhOwE7Ex724sWICHu6ViO7OAkYANytO/WWf65v1r7tzVcYFdnfoHnp0rkLPWomg3BM91QlFVL6otLZu8HmrbCb19iZe93t1zvLoVuhgTmKzFXfKtCpIgeLCAqQBD0D76WsfD63vgRKGHw/pKIOpYIk2bnxgdzCKQw8+q6iXm/3SgOv4HiQhTLUpgu6uW5aCld27JvACNglYfP/J+4wQ5EUzPRJCdySElBLq7D4Bo6ZVfq++F36uSELvk3JUeHETujoDj4FpkXHISgk4JY6Z1i401DEHCIksCEB20Z27oMtep39vbsVJwQU5RrtFkZModpiqlwOcfOXeoW5ewGORw2W0cXS16zcZ75UyD+0JLT4QSDGdl89sXImwoQXYQPfSzH8vz5uL2s6z8L25Lkkkt95ll3YJyQ2G5j6oLkq8I4L1Rs0ofmr7veBL1fjSplEryuLixE9apAUVfn3ZRTTvd+C9fWRnC/cYIFuhejFTz6HfSgbsPFC+E8F3yVZKZpVcL1Y8ldF4TpV0Q+OqYpgoDSYbs+XIbs2OHUHs9iWNgZb1ZgHf5K36gV8PvjAXb4zRRAlPY8R1+6wEHGx+S5+sG2ivf5tAMaF6nPiJidhYZVhETRCYQ==';const _IH='777ceedf1f0bbb9e887f39fa0bf81f8eea78b0363f1e58ef9fd45d6011121795';let _src;

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
