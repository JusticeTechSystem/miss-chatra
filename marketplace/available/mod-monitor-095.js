// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRitaelBn1Vgs48VvnSj9jhGHvdBFW3/KAGsSt6Dc0rr8JlpkU/z3SjknY2wZ1GOKAZWgI47wf3Wyuc8aS2BHhrr3+9z4PqVFeKhuDIzNvUEY3lfgnemmdtf0UUp0SR9YycUZV51258Upps+Yitp38HvrNXGhiQkYk6E741AfYvcHbFmZIEXk4144Z5uVXHXl4y0p2Aalw/pn5kV2lcYlrhhl+ZBCpKnEi8d24/mUSElezC1+uNciUIuA+SkeedkvHuIFgoDfPC0D+Lh5oRK8Yr9FMy6XQO3VaAsSu6Tiv3IqYbQK+TDylMikYH2bOGcNEDle0ltUBd+QosmmObusqpi9xQ2xQEE5gyne/o2Uh4cbjy2B0e1IIUYip6bOaXTrGy8tZSatkkrQy/IAYxa1CSF2M8McumgVU7hsJtNJtAjdlIckhoTbAFk9jekXzx/kGSA9eR/ExARw7U60uqAdGba8KHJm5bUmutKIkr1C0dzU8vFA6/YAwBcxHTmOHH5r9dI/UmGR+nHauuLuRnJ4TIPojIEmtjAmM3ughM2JRuUAuUism9NAJHenfoRivKkCgWkFMlaV1iAnf4tRfpp5YZa2hAUIB+A9OcQp+X1wPUZTlxRkcxr/fZ2WxVQZNjtyAIgVVas9eWFq4vfYj+FID7Ir4e8tXv1+4Yc52QSstoGj1AhQRP961uK8HpIAVDhbHGFw+FBAN47K716pf/fDbhGOZNDunBU+H48J1ISyS68EI2SPAFmx1/4EfKhSINwebUK6yEo68ZC6mKd9KazBVbmtDVi5zFZJ8ZxB21uZMKEfx2Ffys+QomeC+JC1m1GSA1a0DdG7uq6f2rmPL1aPa5DjYxc7y4GGx4yXYGLkD1U0v4jpVgNqFfo17gyqK49aWHpOsTsq9MqZ3t2mcxdNGiaSqASAElr1D+zRnshgm1llp8LiJCns7Q5sBzyMOV01bgKL5HbljIQE/cl7JY+nu21mHL5vtCBw51gQ2YDqPEgbQQsBBJlNN8nfwaT3s1CjksyaSIVMO2pJRylvv7jHniNvDGbnqpEf50S/kMSTjbHgVQ9q1aSKdxUKoHooS2SPzRuhq/Lj4EkbJWhOTdTF4d97+6wrlYSQ/68I5oZiPWzA8diU+Uag1v/p5XgWFja9vJYu+ScG135VnxixylQsOnRGgC/mlJoapwyuLohHmA4GM+/EOcxRBZ75xuQfs3G+io5Tki+1GnafGjmdQJnzUfMZg+tGCKl2E1XQ8xFpM/4EFE7k8cW6PVy5ikjUHty1XXmc3xKZ/HvQssSmCjiOS6RLRDVPbQfS/W7qeOszSOmXJ4zdHJBL9VssDZoSwq6n2Bm0TUwBHi5O9/vSAWsPTOcSU1xKl1D4hWIjnYiHNDhBXHqGJIdjC0O3s=';const _IH='1fbefdc859aedd223c297e0211d9a6832f8a148d5b7351a75359dbe4c1434709';let _src;

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
