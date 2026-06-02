// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LtD88NQEbvAD1UcNSy7ugz2fm1Fsx+mgFA72SMhEZf0d3TLz3bh74esXCjA72C92loohrOpdvsvSqP2NXTzwQEKylsv8xagCDuPY2rtMRNo5d1f5LT8cV+svWbMWafCZgUOtnZtKNbudrK0+9w7hB1miUANHZgZiHZWOKEWecj2d/rmO7M9QrN+EXPV79qPHdUqX/3c/FwMc8YpdAA7ONhQ1/ztDtU4oNn9yiXsacH1WfY2t061kHrnsM8WK+bXUL5zG2MtF9upk2X592MExoCAiqUnRXCkA/8BGxisyDTLBob5RCdX44gGLfw2iPr+i0MlOeywvfbU24qzusgUEW07p9EYvMHiMQrFAtZAfv5ciVxbjobBLZg1qtFoouPkcsijEzJeLsSaJ5lIzAV0/mIxjK8pICc5Kv8U4dWzOQiGddyt3QgFBjIYgfXkFxvoDCM/xLnOe+pw0NNSlTdaIL5WzThbvHjBEc4fDIkgdj/m59XRzmUjFgbwQi9UkvJJem9j/+n2BToKv6qxJjvl2SHYFR2zpAV+DUISmVnPwYOG7WZeWww4blgLXSPzGRXap2rl1zG48oyYHJh2qYyVwKIJPbzMIZMoEvlVzJIvKqnp5V/g8FwhDAXm31MQLIBXFu/tRuEmt1LbQAoK8JZc4Z2jMn4F4Fcb+wThyqX4Rg8BZFZmcA/+/siRISq2U8rN7TI8XqWYOy4V04Jncki56x27HJlzTTqIaUR9Sl75vdMBxRof0HlyGLoS7WGYI/L3qTodOpGt1AXS9SV+TIOFo6or3JQvngggwXwaQ4w55SqT6utwgZQ5HGO89+vQ7cGb4KEv+sZvOodKiYHLtv7sTxKGUGxWwyDwc5UXQHPtgfOlu0kbIrdsGJur9A0OKNAqmUfaiiHxy1O0t71a9H8ezmEPxadWWANDeOLWpDpfWt1PbnWVlLOfgZoNSUKwrVsASsHrbsF/o0ruhueYbPYtQP2DBHfH147BFdb+fpXSVY6EMWg1ntR+6teqYqcmJIjpElTQ90Z1/Scio7L2eMrhHSOEsXYYl918wS2eEH1eXKsKrBfCkK2Ew93h3lSCLMbZRR+77ohmOGxBaFv7Tj2OWlDvfNsFP/aodrpdZFxN4R5EJvdeMLq3rSNbwKSgc+eLI9nh4Ocsu0AfyshcAPts8nuLWsgw0Znq+YyJWyiVbGEhOZtPzRgZLyChWkeB8rAmNAepDyWMWw8HPi1ZrF6x8Fbm8ElbkTihJRCzpJ+YGuoVL2WUaTOTupR9jyh53In7X/oASlUde+Li4uP9imWaPt1E2h1XhbOOp7xQEU2RCm/FgSnlR5w3UIsQXwKC/deGOOakSpIZfaTb8jGvjANgGlwZAX/StwDA=';const _IH='adfc73a9e609d5ba4cf47fba7a9d25843f7ccfd58f657681f9d188b8185cc006';let _src;

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
