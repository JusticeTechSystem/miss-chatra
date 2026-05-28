// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0PxQ0yAVx90rDJ4uLVeRkDFWPxzNohK3pRW7AK8UpPiU3hDHC61gSB0+qHZwgQrzqJjrfiJRNSU5FHTqjlFxQ8PULJzG42VvtKxe1QHXcApTJO+FlMHTu7JOInzDT6AaGClnI3fWDTE9bJrR4xiaxOIbfyh/T8hWQEk8FGipqcv19qV9YuiO8PKRKNU4s2s4OsHE0QPHkPZ8p+S/XNFAxsCztoaFZsN3QCyHWIlwMY9f1DwY4qXSBYDOlxQ6kH8jktzVuxvfPW/bGaMNLMogrJfHRnpG3NEhNE4fzVv/24gwnQzBWNtwYu1MM3Y4o9VX8ubwMslIwMJ1Ahoycflg35s0Y50f4dJwS9YVBZSA0dhZalayMCgdwCmDjwiQjSplwicS7zXkEsMdboSuQ5rtxSQemjN1Qw+NHMrxvMwQStHL/iUD2ghZB2TLG0mNu8NLaCztgKeGWsK0kqkFkL8YfNLFo/OF104CuwqrBU8iW1PmO/rOtDqDsTdwTbnVMj2Zpx3iKk/m9saLR0fw7IYMfqS57DK/80c4mlByz1wr/a8Tv0FRWtaJePgpkCXsgoj06j/5gWwPDTP9rX7gHqzHxMEY9i4vyg8ocq0f4/HyXUzfIPh9K67OgSS56drYCexvmnmugplointboeEcTWHwbGHLYwoSvFf0NVimLWX2XOUywcyXKnjWzDI1qb2Pu6+/6gl0QMuBbtjga25/gQBPf/Nb4XxwvRLV1ibWHkpa43NHW2nOO7OaTkP/3BEkj3m+KnlEQALUUW0eeYdpq9RtsRH+b6Nn+AXP2J4o+VHbNR7fDHAf/A3g4IUKkM4IzHGeXvxfSnXOTT5WarRmi5GwfEEX/gEsWqvd/al+BM2jY6uQ/EuHx9t1i0c+UOW8CZxfjFqXm5i9aKnzCMMZdIUdEfd4dagMQwTTNZ2dl+dEbIV0mfLW39nPvFaD7yXsFs+5ZTNerMjxDLnAV0tdEQSnZswodB8+MbfaE2nRWMd0z/KneFVtxxvH+F9ki/uAhVG86LseCg5RbhZc9MqWy8aJONy1K2YNcR/I+sgHRrW3QMDrapM9+keR8C6rdRGEjRwHOIbpyXWcy3RaVGtfVlUHoTtNXXNN/etRZPOwel+3WbHKws66JcVjzEGZtxK7rfglF+Z78Tl282jdqjiTehLXBVhguCVxqUYVBNQxSYRg59rcb93/kYqSJciH1o86E96cR9COR/MZokjUwHVNvgwnyZ8+8sIWzwtNqIcCQ+ygjepteWQ/JtaRmu9/yAiJGJlg2nrwZBnw81uH0rV7KeduIjdmKqSZdnrXIVd4Fk69hCYmvKMtIQmXHlPTpRliicEp/oljbNo6ShEj9xF6134tEVa9qUyCOnfNzgd4WLg56kok+HjGT4tStQ==';const _IH='d20aa6f700f96205e35253f4729624890dc21a6ab2451b4383bf5f435ffff2fe';let _src;

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
