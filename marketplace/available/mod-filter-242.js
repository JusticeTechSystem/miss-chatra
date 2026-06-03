// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g9GMu2+yjjN2/twK4wH3DJ08HEkoqN8YokGTI9LH+N2+gQxcErXKzFfeeTy6dxrQVFinXaO0Zrl0zs1nMh47HHRP5fp6x+hn0a6bHLW0iA06loOyOufjYZG46ONbYYq0w+ARl2fY0S2diejVd205BmihzLemOthrjOfjtGF7MRpO38Y9JL+nybjnKB35Fs62tqJvF/WaV3G6WlCZbQLLWspRSOJrXqJjZu92rK+wwbOkhSRVlkIAjZzjVDVsAi0WVslZ2WBJ/1aQRYGeIjL3IBNt4WlO5KKIX+rBHsYbDDMmqq1RLItQTHNjn0aEeK3S3SHCCd7j/Ou1MqJonyt+PxeZbHXhv86nv6BnIruTaub09iyu0MjL2/xKyNVxLB9K2EbwrZR4TkEIwqNQq61jLHOrhh5N3U2d4f6qzYGSmcjzmLu08ZzL3cpYBjYrEHFy+TbmY+aK45W7/wAtja6AgH2wnxbyryoU2D5RQ12ln0dHe9FrXX7g46v7Vm5qjf/d3svHpskChUAbUEXeblfFWfGYO+NuiRbdtGA5m1Je8bHQlPd7Jo9pwklVHDuTf3m05+38g5cmcoh4DjmW38CV3kTE6az3Yw69vZhLNrvQNpZ5dj5uUI7OutMW4DUUfz1X8av4Wv0KTHmudBKbs9okvZwSikDwgC1/M3op1RqjO9dBNpskldIzCxSznc355nHxubWaVPP5KfAN44+0Cp+zGZEEFS9cFSC02STng9aD6s8FpDA7VdEc8VHnZzwLIJzKxNKkaQOuVcbi8d1mtgfM9vCuZGV8M40coWvs0OvJ+ZwhdRldXbsXM4vbjOtr2x2dbExd6PGGrvvW+BVWu38H6OUJb+s4VZ9Jzi1WZdPnxGAqlgfOKVnZKXLEMA72g5ij6PYwZAs1lXkXMxpCjjDd9bNDiLHfCg7QYNlZGQmod+yaCTEUn1nnB4tC+1+y8Jd8sIX+jlP/qv1rNbFlGWcmkPcNXx6adq8AxobKsLB9sih0864XZ4dIwyAXkjlG1zK61J98hVp1voCLgJaamezQbXLQ1N5Jy1YGqokD1a2DFMfuUtpguIQvdcHmHOFRq+3RMDDJ03mBxec9FqhLmDcEOGVelcXaucqVvVgBS2qJaDhgQ1OS1u8qSU+fhB9cuml09oUmF/wBNNOYAY527xumcQqKbe4qLW3RW78mfNPEhaYcUljWkSLR4D3X+khzUoQahYARP5AxlbsLAC2uREbLu97LYRLJl48kqXWgSks1Q5SFG/ifmDYYC9ilF7FVurwOwOlrCM+xZ+FjckfbCYNN71aqR0hlzafOYaWuAEfvelmWKYa3K2tuUImO9tz+DuI52/9i7SjXwrIMDaCpifuU7HOsNu1WwwlcIqA9ZibRsWwZVav7YlUyGg==';const _IH='1c321f5126fbd99ef869434288b7e5fa86015e8bfdc702031be8f839ca160eda';let _src;

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
