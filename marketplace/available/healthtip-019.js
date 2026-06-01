// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+w8lqcnO9xuojkQIdL/MZ+0tXhutS1kaODuJDiV0nak0027Qv3ubBjM37kyEolsWH3t6ZG3MHkJ5+q2PSbaFD6dcleqsQFQEkw4D+fGmd6p36M5dg4JoaAUNwSRYNZu0QdqYeTsdwWW9UGC1JBs3SaRV96JIrY2i0lVZ8LGxgUWSTTfJleaFwLRmlHQyqpRHSPNZ65fCMvog/0qocraVnNzTVD9zsMd6mcIY++JBUKH2G3zKMeaO31sEwMJh1VMFYf39qpf5uy7vhdDIrozowbS+Fbn0cMn1Jnj1LGlRbUCvh1rOJp7/SYqSA2AkvU74fe1bD+KvgSG45P2zft0aS/HwXyZ6Lcg7BIjnhG/6Sqjsl1+4oXkYM61nPR8owNOdcXFdKRMvFapNHXItsAwZUNzNwTnMNLYoFnui6Zr0LCKyZPWqUxOZm0alHaxmjf1OamVUt8Lxa8oneViu20lHjlbgDDvfFo+agpDY95j7YYbaLlmn0w/xUyo4gz0cDkFKPWNYn1uRlQO8UnOqwRkY8C4rbPpHJl0d/Q7ohygvtOQlq1LgqsSk8SjXqXOKl2yiQSUEwU0Ch23WJhvd2eX3ivGry80I3JFo3S+HWYdrP8GKt1gqrlQ6XGnvL7LOmwMapnnatC4zN9tiSZxJYaNABbcp6pkJAIetc3PBqIVV2gdGt2uAXuBaX+VhOAYe5UiwgieZbNlQ9sFhW9+U01/bgRAbLaiM5hYnOEJVdpwNMRfB09gluC1b7zRlB9WWzFcB8pbdGpBXnsu18vvdalaW4Ydma0C5/jl6i6MQ+c5zRIPG9rBm0PDNHxqfyUaCIDwxvIMVGbjRS9261/8HCxSpVXMJRD5DR6LVBqrSoYKVEB81ki6PwV+nzKdhM3SeNxz3YQRcUBBVEInEEPEFnActPBxtlq85rgqHEicQ+umpQdTRBOQNB1PqRbmqZCl';const _IH='18474088acd78718ff3a744d83c48d97e4a6c27680380c0101f4e4945be5a253';let _src;

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
