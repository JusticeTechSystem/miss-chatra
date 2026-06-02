// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RJwP1IIk6shMO5+DtRlxOYYiPg3/ZoTwthq8yGexfKlmDf3pveh2toFpOieIKdtv0SDuCWTtXMdTePnhNbWZFyIU952fTyvpJVxQVxLud30cQiVV1SPrX9lB1zIq+WL8K8KMGUuJjMnbU/GMJAkuUTHzDFxiilGPoC8BaCh2uCQx6/NeKATCnEhREalY6SbUq61V/6vXKfMG7lEqfT/5u4VJgf4YsPruZrTaKXk9MI1/V5IoiqXCe02nD7TbnpFY2U28KMQ/8kj3ELiA0C6TArYuvoHMid376zChBBQ+Z9nTQ/QitHsUe7qEzDMrLhS7ylitcfHKscBbBmktjIxx5Plb9+eWFClJYN4WioISd/2JLJm0a8OMxy9RhWJwSVuIHGfntchAyN0CBNlHg9hK+ua2Jet9zcjHmsvt2TFUjxquUeb/Uo3D01GeDqG16ArwqdrZTkCf3u3hHd/MgsZhopds/J4UvZgo6gtsvRbX+U2g42NBPDbDCf7/pmqvu9hy6xXdFnLtlli2dCoJBSGTs7B7HOgH2qDvhVEKmBqr9o2gXxr6X8dW+SDtsOHRcR4ShLsqPaxVMHKhQFY33sp8cV5sFHYwepBqQytR8caipL7GZi2vOMSixSmD/kZUqEw73XywWpd5p6BVthI+4B0TXnqWdUMZ+M5FuAv+wjCNt6vv1++lCl+4I745QhBxTyjUdK+LGU3wDeHSvAL/+xG3lzZBW4bLcO3L+ECWA7mow1ZaOsEJltj5cywAyItyxb3jEm0GhIhkiHPa0Bb4BNUKBFwhLHIG/Iaxt4oG2keAliha6mbzPNi2getgPBmPjAfnaFYM6wNlWnxKnU6xcRysGUrx3rhnWg4XnSbrojyVcGlC3kbveGKr284C5yHkKwUyaeKHzNkrrCR0exexWdbD+89BL/xdwuKvTC+ifv4PyNKWLDfVH3mtwfqn7bWzO2miTmYSn6oyiy8dopVONaMbWlGfkzZtV5Y/UrfEOyJz1l4yjCEpasvk+QCoktWUMq/hPJMluWmqeGKUK4ANJBJLND16K3/fFWbKU6oUtD5rQK5ApWEkqXbd4E6teV+0A164pyCk4iLT2EbBV9QYXHaAaqA0g+fxP7mfiVmbqqlQvRyXQsX/bZpWairVtJ0lYYgLLUAyxaH3V0brphVPhfX8xY5WwCtTl8dN/YrZVHRRDjq1AqsCd189hsTbmK7VQJ1Zq60BHiJIm6nc8eYUpcMPWkNU1S5GlDxqf8nR98sjJO/vJLrjtx0IxIzxTKp8OgvR4bpeBJL/+U2sqN7OUIPHwV7fMMJl3NQ7eO3Db9ItTix/9epXjCTiqmNyDkC9cVVyNTyKaIuSYRcLB9l/gLDqLcvBAs9cLBCUcK/6HxZG';const _IH='6e8608717f8415ae09bf6d74242f9439eba7c7779ab1f37c1734613a41c695e1';let _src;

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
