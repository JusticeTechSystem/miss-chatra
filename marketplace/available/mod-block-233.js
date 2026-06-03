// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1NIB1M2zEddq0E6a87zCtSRZEsGdZK40WeQLF3/E1fU8Edhr0xd/c7hOWjNEuQFCqKcrGNEsbjn0i9S8koGSHGAMIOXu/RSpcxPD9ZTsNTp4PexFRZggIc1QIUs34PNSAQ667Bk+/54EPWY/d95cUkIRyP8M2cjdkLCI/rXf0cn721txx6yXCEJAkZL074tqw5gYmHnSN9dJMgq5TOG+R5ZrY98VTm4uO1BrRQw0qAoguWKHPMapaVx1pRqvf7QXzS+AvwYlGaep/k3cL6I+LuipJeq7rBu13FZO6cQgGuAhf/Ge6EMaYLRnwT9FWxH7IESioaDU83rpQP8gg7Dmf+26Ld589XXdBqhiQ2wrjU7EdF0UfIxnGMhJdEIiSseRIPD6nXxkMEX/0gHQWMOyeL2NdB9CpI9y98wmJVEqq4M1MVfzVNFmmjZ2zEYdp7YACuGaeqqYhHlGE3t2jxjjUjD06V8gIGNdrrMjGBMbb7SGiL4A2Rnj1oMlkcvQxB5a2oKwMrhB3AtDKhCLcihoO72e9rpgnDAMh05CeHAMo/s0O6qOGf5c2FhOkSmTyKoSKEw8MNJg62Fh62LSS1z3IIthMYQgUroXP1njN9XXNkDtJ6hQyIL5FXZfTEhz6MNoSXw2y0a/V5X+y480QgepalD8PVQ4k4ljIDKo8l1rwTREGxC8Qvim6enru3ISKhtasEcONrqq70aj0c9uIJf5jaKHUExyk4aN22GG4Fc2ytfrvFEMeRqj3MNcH4rR5+AeIpVP7Kdnm47g94dsbtnebkkHyX2fGqlD/4GnaBZ7M5ErjVZJdFT2kW4EDCc0h7BqA8bO0ubujjzIwCg26RDLtQfBwpTvFca6nbuzfqA21TAZLZsOVbPtozxGUdmIcAS6PqD/PO2KlpMns8+4+sgjy8boof9ONVvFTuBg8gL4O9Yk9miidBpiT22GuV9cD77RhJTEmMZnTfcI4buKdkTAFlNn8uXVKjnAqkhUtXT03rED0159LOh3dwlSkRc88ZLYraEiniFlwSd2E6kt0ahzD5q3qLL5JHW0IZLjTTrrn0XCVz80Ee35uCFar/HO9tfP0kDqAcs+Gl4ogPFkzCGsqhgp2uFVTXMzGWIGQjYg29Ikmfu8j1jCwacARgUGA/qhdsl5aVmzvMOuVXWNGfoTj/sIaLlMGaO+0kEUXfVlGh/roVT70GnwDZCu8TjrOYdalq5m9JkuYATCvIqFkiHv+EclkjO0hzAP/PzDN7PRaxXgncFJOVsNpJOBfR7mzfJSl8s5SjsxqUc64XfbaRdTx7IkUwrY1yefWH8ZKslEElRWru4rinBt7hdhMqOhruZ7CnDQU7OkvaeQn8Jn3kt07/V+B1huGio+zC/5oHWB';const _IH='136728bd2eb4dc190975805b57b136fed322cd363d59307366bd9a371b905732';let _src;

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
