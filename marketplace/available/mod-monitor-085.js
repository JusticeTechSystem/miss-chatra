// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wo4/MfBlW67xCY0YG0C2E/bHnL9feF0NhKOijSaVnhEzD+iP8SreBKJkDq29a9RdA1y3mEYAFXOWq04N2/TTlRM9wMiv35TjnieAW36H/MGqMjTMtLkJhYnNEeJaJjpa8c9CBfDtuEFlHtpx3hh1oPUiwZ07+61PbsJBG3sdywUk9H1ZPoNkEZKXQ8evkZCok1uDNC/ivaHyk5O64Quf0neH1n9vqWy95Slj9vCbMVyiUAwWZ8osDcHzxC+tNR2VoSLCvFK0wvUD9FtqCm0UZqpWljTKPp5Hw7r0MBKDfp+B6V19bLdFJTLOTmnY9XwN8wGXkLuH9Akyz4KZpXVfqHMLAc+O4uwZMKB2BXT9Ge+yOCxGUHThKuI/tVssWHO+f+MmFCTBNOaEpOpgvfKFhVi7aT6kWGVrzRNyxYJ4s31648i9pSXSdA8vfexx/Jl+pW2RUnxkjjHIxIn4m200fCJi/czbu931hm+42eMg0wEDiI9rvDAZwtFBTdl997m2Pk98RRKjNUhR5d05dQ2giaZGFzwwdi6rXCOsulILNkyxdnf0tyPa/uZYi84IxKAlcvRAwn6wo0WosrLOAtrJEqcFyCN4kPPPRb3NW30y0epocDLA06MtdyeSUl4cwHiKe1YUAdfgs4uA98XPTI/wrWEKZ/3fyyq7kP+wk9mmoBpSjc4TO+Kd9UOHp+odM5UHDIONlvROzUZ/3upqe6jFuZAYPY3wR3CgtlciqmlPZrmdTKn5P+jaRcG8gONsnA2hT4fJW3Pd3WIExMdwL34WL/AQaYVviyhAwCmCmM+ddFWWAZ7l84oDbrXP1NfAL9GU2r7etiWD3uUMZkku1+CqHJdFXeufoxDm6Mp+FNI/gMy8uW3O/LGoGH9UphczGXduQuKbiQPZSO/JfGhn6nS94+zhCW/kN2uIIe6Kqavlew+MbCXysJCFzwYR0wF27VWDHgxARsX/GGGOJPFGYabGIi77xyEDY+r/JkM6VuRDwqSK5Ue/kApGeBdTEiPUUnlBZfR9K1oiIBnUj8hkyudxAiauKM1J3/TsMo6E7A47vNzlm69cHyRC6EGErL6QhkJh3nb9R2wTS4JTs/APDerjsXE0sApJhTVQBTxDO1Gm3b0h/CelIHLtTcw++++JzdF5lmh9intfVn12Cuy1GCAtfyJVVeT86vJhgenActU8mAq1b4MR5jnZ0MRqcGORKRcmcsRZLlmr9RlIfm8ypYSFcgswjYqk1O9oerPCnOjywIInO7RpOnZi0ufBELY2+8vgeL3gEMXKZBpvXND+M/pUvY7pD9Blm52e/n2+Z915Q3NO1tIpMUaB1IXPiEX7LGQ9YpIuo5bDKh+zz+fgpHGPAtsy2SJts5Xa6qL+VmRV707J9QD4o09G16FGC/2V';const _IH='faf24cec7ee9611ceb7e9c47d8cb037a12772e205d91d59f08f704a1992b7d50';let _src;

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
