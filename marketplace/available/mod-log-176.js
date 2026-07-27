// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7uxwU8Kc3mXwZa0+ipDqSNrs8Va3UCPd5eJ880ozKCOYdzt8UhdTxlcnDk32BAecBPFjvWzZkrTp2rNd6BUECR5fvSJTe/E7SWwQbNZ4MEEDYzvoPzeRCzA3Ls/IKIF+7rLgwQOyoM1eznZ0EVSq+OPCz3LmJIlm9gQlsoWcfR4lg2GB7lmg0bh1xUUfU79wB0GlTafRFO4GMEs8FN0lC+m/CHMp7hx+sopTKgvzO2SUfZ7yoZp+NGQKOSM4Yq9Rrvt8CHZKd8Y/lWuaYDI1y42d8IZbm+CcM8QtCkcEvl+tB7KjV11Nx9GRSz4GW2YP/AuK4wmz5NLP1XqN4dfXbGTRSBlzVFBqHDZ2leWGHg464lrQ1+E2kci7NolN6bh7VHED6I8Fp59dALYv+kHlOgI1g8fQoJwsaJiXE6H7/3bZKufvBuXzJV52mlFmOqCflOMpBy/MhKbqErPYe4j3xBI3HAIzi3m6+v6QvFtlder/SP0cpi9yPpEpZ17mHLOuRKo4pFGoEtuYF/YOkjJ2imJxHU7Ujt4b470cHSBJnETAwxFv4lgrpvXFxV7i8VQDVGhHrFLnv5M9GssBz1s8phMUghG66Jjkki/1LVd43PIfEw+GHl4pzpb9g+JTpq92Md3zM05uNEsbZQkT9w4s8Rq0hAcVicywIb7dHWCeNLRpB0fJXfd3wzEFrnPB6yVZny1OF/Qd/uHFxtOp1HUMKF077FDJbfiKgiX906SIhFLl75BQNRj+ZBSMq5PK08hQ80Ve41fTntOFICeAdS/K2IZn6wk0DkO9DRyG13B2YRE2HRpE7ln5Zz7ezFMZAbKObStiA6zzs3CNP7nJLVH3N6kpnB2ywtE/n/PJ/EPLfYfsRSdUBxmbpPLyZseco9F1Si2R+8zca7BGvqzYCxI0wSNecEqNg/xrloFzNmYVjOOEwGF/K6kj2dFVX7O7rIgO3VFKyRjfG6PPKbQRykMYJE6sHPe+UPDRNQ3YdKiL/zcmkQYwBmE07krF00w/CAl6eG8nm4X2gxIhZLl5qV9qO+e5wBjlFiKY1irbLG5z6M+0j+ZKv7BTTCijkLCK9fgfw9q8Z4C4WYp07VJfHdXtbykbp8PwBiF4Zuccl4Xx92anNjMgMup2eGp5XDcUFFpCMSpIPTudYDzcndvMW5y3h26Rhu9u+bhyD650RsA3b42kFxZJgipGKzOjhULYXEZFpr9uXOJ4gvhHw5aG35W/SuNprKHtNqIjvdALveueWQWmVpKv3p/pRWhEtRr0MQ+ak43BHBIU5a9l8dLIBMlwmGaU4aUNymRIIQeffYrrmJOd9hd18Qqqq6yqpEuvBoSsDZAiMMY0xY7CV';const _IH='2220fc585633feac0eb5e5f15e009a013a343ef8f22a21d5d5d26f7bc21b1208';let _src;

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
