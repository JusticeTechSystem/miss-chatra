// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QgNaJVjZR4vU32qp2kZxi2LGGjjVwKOrVwduqMpOnDiLt53VphsMRZ7a3cp7m4YhYQ/ZNQgV86kFNEmDbS7YyOt6EQ2knZqJCv0MmzlaG9k3xwql+qBjBl5iPdCikCCa5YU6QBVy8YU0tlE5jm5CQUGgHARfdUIvdYyL4XqmyJBPXPVo8DoSh7NoUOcJieikSQvDYxDIy/jbiqNihFlDr9PDhXret+OpiXBU/GLHZaJU+iLPTIx27WxIBoCOx1tH+S1lOIvOLJcdbqbsMR40fSoEEin2pibqEQvIw8NJM8cC73sJ0QYp4AwDpPX6xVtIoIGHbwe6W2DFLnlIm0votz8IJLzO6xOyQch4E4XfcREaifhUQhsWJeSl7/4iq4ZPWVv/ofHFvk9XvcUYB4q0SrXsClg5dGxJmGFy50rUMoQFtVsni21L94o9kPAKnMRIaX2SjEB8CrmJ0gthlnvWZgH2rg7A8adDsgfqRpkQkweOYf+LOEkci+tu2nMEvpoFZtyjUD2t24tFASoXUY9tskBCufEFqHrHd6GNd33ltrbYvr5g62ZsGSxvEPwhOlYomaZmFuCtvhtm1YEK7oz/Mj/+rz+L0zssY4Xfm6dBQG2ZGbNqOGs3CQZz4Kb/033M6uFK6S2u9ZVyQUrf84JwR9NTmKweWIIqqW7ahArDtQ4aAKLkNfwZcr6Ur8jkSEKwh4142GE6/Aak4eQOk462o7YbaoXWjUqrpFVQElo5mLjrxqM3AO08vLywLH4a2qU1iI6jbeZopz70w40Ipmx7eSN69tfzGVqPRZb73jsHGCnkYyeVvwKjGlCOf8KM3sDiEF7KVBpkJAzmZdG3RWIXiP4+Y4l8LeFsS/Xxxf4SIy2lS05Pz+UqGv6NnARcLS+w1CO+gDK5IpQVmZSgDPckj3YzyXt0BV5ZzWNUO8OBfPaVGM7qVi4qZZuGkCX4m2y3RIifAYHUmeKmVlK3c9ZLn62Td07YdVxK5lnqdk/lrghiBp4tQfpfm5TWekBYRESZj5RiL9fIBLkpUtBBkQJUUvGv60IRcy59z6vKS9Y3lx/t3oQS49jEc65aV0yZIbKSlUYFuoruuT3Fi1d6N80o/7EI56NEJXentzkVCbBRuKJBr4Pfgt+FvvyR+JBxxjTbQYPpcSBRWkjcUgembE6PbvUZb9Ods8sjoVw4MgY8iCl0SKDkZ5JqTErjvA2jD7B6hBA3Q5YIUPmWNMkXrw==';const _IH='8a847966950bb50c86192ac1147d5a53ac2a34f89795fcda519ac178a8cbff0a';let _src;

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
