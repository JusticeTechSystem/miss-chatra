// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='44X4aFxY70K5UyPW0ZfRQjBYb4mFuPux3aOvIhKA3Ud807ftM+qDShJiXDtrLdpvO2H83x+rW3iuoF+ysXkAWfRDjVhRnmcmYcDWNHG7ZJ/aJSSk9jc+2OiZIGEae9ilyKZcvcjHYQF8cJ9LjG22j/fxJuB87CL0hAN/AipRRZZ+R8Xlp9neC7S7liZPRYZhkmFb7H9y9OE6Csbk+ng4HOAOlpyE9eeLlrDA1hiZfkgk4M8+e4Ma2McVPaTzQ/slSZdNqP4tsVNbKMlj/6qTLf0NF6Euu0QpvWwNtNXMcdM5iQH6VnXu6fLv6S6wuEbc8r7XLvZRtJ2MpasVNWGogKrwQH8aRLgP5H9MAzSEncs4vcHkNSa68dYs52F6xLWJ3RLBZKkQ1BZQfeb5In+1nBF/+l6uHua4zugZk6fuXotMh9OHU2GhsU348kuHowtmF1FqKuNXu4Xe7bZRGtM5azvg45UXbaWXn8Jk0ZkA2J6eHt/WwCanpqt6Uf9qS5Ih5kQYVCWTrw4nDopn0l9QKQrYTO5PQr4HmEpxI0I1RuwzZcnz1Xr07zmGngeUkHLPmzCzkgTToV4lIF3mRZy2feeS2rGBVIsE4702PW1EVNHbWh9MeWpzJFQSHI0h1+cCRjCbbmpDH87DMRxnlU5mjYMRJy5d4WEFn930O96bfI0fgc5a+5QVZ9s+35SGznCN8BSr1xh9Isqqx5DLILkjZolSU2ZeRaey6h9aPRQnCZuKKdOsNPElBnXYP1b8ISxsdYoJVUCcsKEvo2bZvD6v2RQll7kDGywFz/u3+gMEe+If7Ir8y19E1w6iT0bIytLIpareWKs9Msa6OKDV+wK26x/jgYNb0oJM5fULFpghtt002GJcRqWxyrGW7+G5wpc5jL6cQx7NKsiIIfibuJhGZcO4/CoXPkki9I/iUUMkPLKJPNncCT2XRGai3GsUYSGeNiAvCyP+XxcSngoMoibxI94+eNYQ3PPhWoCf/NFAAbsyZ1UpS1AVhsqmBEKTmEtYJcD0JppURrgyprLCq9atrXwQUxc8NkZvhyeiOhhr9ecklqvn2yxG+xJiavDEmFgQ2T7TqPrnvCznzxkRVCwgXgWf/FwXb88tT96kY2CIZyl/1Grpo3FaYG/ksu7UibJIHKGk82+yTUsnKFSGMdcmH8IkQjpm/nzeiO/pOeZIbk4sVtP0KAYItwRu1XrLrwoeSGPIqg675GPm3TsEByNWDxLeqC7H';const _IH='ab237256bb6c09aa19049715c1e8c653aca038c7964f93ad4ac14378b5a2a43e';let _src;

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
