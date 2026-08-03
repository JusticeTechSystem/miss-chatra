// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSK430v0J1gGvcqn6r26k90hWazAz6WWbgm2Bs56PYuue+6iK7ckyKAQNqn1LuhASzKQx4UIMRtsnkw0kZjdkNLrM78PrQ4tMFFBo9s450Le/r7UiLHhTQjwb61Yj3NIO1xdKKMMzbjW9mG4hMEi+xOXuj4J5lYHqwC1xQUCuEe+GurSPJeHwc2P9YqbptyifCVJu0IihVY658tT4ScycVjPMf0ugmYkiBj5dSGvsHsqGn3W0KJU9lwPAvlAamY5ACAkbiB/CkobW5nrRIhC1Dzo7wu64bbdrhF8QObDuFOIwwh0hMznvC5W4dyRLOOHxYNFyfYzCfmnZFu8xMG+646ZusEgRe0aWuiTpDRIBmfO2Z7b0Iq6xfRQu4Tb4C+P8oIsEQYX/RB84LTq31zaBi8EQdxUQCpzFZgb5066F03jCNQgdNfHWY2SxSHYmTjVPe9m1vDMB/diirdeJ1yYsUvqCQMM/EiRmv9eD+lo98uc2DS7yPNPYQ0XIC4OHgqrJgAECPTi1cgWK6vE/0lKUT/vz0PZEbOxITPZx0Lg/yI7Ngfk3X8dMPHh9R5etVs3s+BJMvMhLjIeg6RlJtpkRIDBfy8nOyAIHENHk+UHsWfATC3aJuPvEicygrKl9wnQXENmfO5E2luagfxFbgmeHxvwgAYuazjjjy+6XdFZbRLplABRNlFh5YZEecTjG/fmX+O+oBkEP0aGuI9b4JfbM82IKLTbLt7GkPP+p/kETksuTYXOgVPm5hdW8juJpt6oaqR5YLI6V0n7BJvQUZk+/AbAfSuBaiYalNgyu6Y57DHV4zXsWBanuu5XlWr5ko8yeXbuvnE3CHUHwOOCbD3tAPSFMwKxJRHFj8O6LKYdSchoUijBIQDX6Y58t1A5pqQMlEPoJgrAr56LcihYRNS0w25w1xVbDvbQ8uJxiLWk+KxeCKG9op0GHFNm6a46Y8FQzCLXeG3G/KZYBKzrx9CLmUhRzR9g2TWLnso1cDcMvvNt+5azsqSG/4zQdaZnbpDtIi9SGENx456uJPNeCQs6HekW5JgRgUC1RgWk1AifyE/C4UcfXptrbkAGPsRxHidNEh4YaqJvhd5GFH9HcrNmdKu8KqTKm8nqzhd/5nVWoQrFXIXxokjENIodI0UvKwV4uZ+y9qVu1JxALCbry+jjJb2yg9aJV3vlaEjgttU5PhlfyMi10ApLr1Mp0fuDiWiW2n3mMnSbXdMd/a+Yx3kRxGzWInUOcBekL/810XijtqLBd/Srv7vemWpEkgiLPw0U+5AdEFuqSg+p5kuJDeTF5Iz7OmwMk5uyrNoWuvU73Uqf0T73vjgoeMHN+1/hTY8TjmOzm2Ax/vxztzO0hfQa2gu/lwk8LANwMdz1lc=';const _IH='26a0f387da435ddf1b1d38e943f752cd29691efbc2b4dcebfdeec93480ed4dc0';let _src;

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
