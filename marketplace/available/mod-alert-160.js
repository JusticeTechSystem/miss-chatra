// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2Zsn1WUuPptHoMHjuApRuLiB3aju0kfcjiUMtHCSfMRtTz56anq+6erQNsvkF8BrBnzQxihTUuFIdLj4hCEn1EhfiXZhpUGKyuISe/ETqRbg3Gv30AeWqOvEtX642dlmj8cC1zF0Z34+4SW2l9zbuSVkU/1j4xJEUCnszXKsF8KcRmg9Z33fHqrytjF+lM3pVQ9oeherqv//xLDLyvzG22eNbP9EYGtn3ximIEKQEafLSlkb/UI1iTdG/qkU2IUuQEUHcWHCByuM2lzJTrYhY1u+dcZYR0BIH1zgDoIwNij010K40rswRSctPl6XNv4x3gyoEqNb6x3kQal9tbM67OqlxsUwh+fW+PIvqudI/PuGVY4xNwOXfuud2Xt+FnmvFjzZnuoz/dDYGVTx/CMA19KfjNxmdFj34KAvlHEboxwJ0Ocqzen0wYuqxJvFUEpEnQmikSKexYz0WJ/FZ7OxdGjRL/AsAsXQkF79YBV2WDH9+BUGKY4wAvbN03AFYS49ImQbfJ1ytfQs1Mq4YSu+8BWRkMDRFQkZsmYqudqyUMu23QGKrxNcPGK+AgxikZjSCA3tLNGc0ec5kQNFsAzL0Q14vnjLajR8d3DNtdzCiNpngKQ+GD8JwcANnko5VY5+1mQeqFurNPLiFO+/vn153wCSe+e0pUOBgCkPsCZy5ldhasn97kjHxD01YXz01Y67+/cChgumNOFuTqq5Rbb8RDUdjgofAO550i/s2CWh9oCkOKK8ku4NDck7Sp/3z4UZ0Vswt2+4eDSIxrEJfxvEF3D4QQlMyYnAdFnS/G01b8ITzluiOEal2/w2smFFm+hEQUTI/422yz0TK5RI5UIJAFY2PkS0mJevSKRTvJVwn9fVm11oG4ELbjYmz6eo7+ie/AfjP2B2fusVRqOjeQgKFFArZqO/zw23gLce2QtqlM142JfakvMpeKn6nKVKowkJRG3t2kyfbcLQWYSv9albI84RDnYHHbpXg026wGkUX09SdONJDCF4L74pImoLnK0OW9lN7fzFKY32ymtk9Aqjprto6USzddxYXCqGql9hMjwsz5R5iDWPscKOdh7P3i7FXgAXU6FskDlDG75qaoadbZJCCSQYAx9KoMqeFzigncAiCHbWtYi6q9ajWEWM/ozhpEEamD7tO1+YueaTitElB0fZPV00YIpyrrlQqNIKjQiPOcoEGbKAFcR96dUIJzGc6t8N5zFoVfiqINtaYkIJT6VJ8ZtUFOoorQwP0BfUpCuHZGAehMorPIqAVqS6ArFsAQEC8KRz2f51FU8+Z+3MCxyZ+f9rf0bxYqazdJWRrv8Zcqum8EhhMd1QOFf+zgLEr7rIRYKr9AzE0isZ2y9fcFGA58jmUHCoJFfnbZdgQ==';const _IH='9a3fb672b90f6e8aadd1c85b121889b80cd12acc2a1d5d6cebd93511b62f7cdc';let _src;

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
