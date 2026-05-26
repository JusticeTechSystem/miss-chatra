// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1xxAHXFo1Y2xmuKtzb/4XMG0cshuqpnWgM0oOU/isS0zEADd0GBiz0T5naMNShBdQVlINhU6B46m6OjDfEP2Oow3KOJ+GvRd6avapPCFvik/QSDwt/OMMxNBkNd6+ylgha73lX9dnYbNHXAlEn7Yk2/zYB/HRCyDCeQLy/GGFZOYHgur8UHX6Da8+8BAzCaBdM0hfBCPd4rpbgQecSeJrymGyEaM8qalfjEQ7ZZWSPdwmjfrAxk3lcclRA/SCvIdW58dKMWUXez+xWLdgi5uLNXHe+04U94AnJrUp2uFPhltoz3O2/nCGo9poSmPW06PzHvQ5YsTHmvLfyAM6wWut7Nh23S+Gak5qTFXvwsY4P6zHtOVDQFwnUO1FEn//VBNSerNNFLgYkPJ6eo9cc+FNhrUyK1mj9VjYuzVl6p5wfv4AYC+Q/zlE1EUgKrZvfVUejyZjN3ig+FEOoEt5fx/C2BTagBVzsySCuhIlaPipnCk9sjvDMJJteXbi8oOZfqQngi+6dZlr9lK3RBy5zhUmm87s4oBaMh2w0i3om9/GVVo8URrrLvHO1TZwwI40CIRtucdHjqRaQ76ajdBK3NXS42Tlivqb6Y0lgUjo8+ahQ8tirtWthJh1Mwhdi586CnorwNT/F4/Kke/VAKb+ApIH7iicIwwP8gPdp7YnGxpdoyDXxe61/d412WGftaS1KGqyRnUYrUZWCes+ULndzRSnknGzsKHbyycjhy7Q/18FWfiT6fNv5MI2ByDsR6LOErmus1vBc5STgNV6R/aNMBXkvVWqPXgk/Hi0xxclHO0pnegbYOOgIepQBABwzQh5exyalsVnE+oGkE+/UTrhUuKc1pHRHOd+KuUGXR1q/IeiadrkpNZsCHjB/mLigZ+727owyeYkr6Hx4zdnbD901c2dGP9uKjBylNAjc12FsXPNkgjDoR4ejSWK/dXlqDKkM+/+1HutAayjM3G5T1BkOByw8LJlfXPy/Ob3jez0HQV7bda0V8=';const _IH='7beb0fb915d1750a7b58dc48681946188cd5ef4ddfe6c1e76795a120dd165b6f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
