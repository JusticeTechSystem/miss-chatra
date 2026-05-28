// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rdFL+nTaVwPvjaqVdxOW3OgtJVafzDHZWJq/5/RmruPEFSHaQVvOxnKCYq4hzJDC0hiV1KcwG58UoNPLuPEUfe8qiiFUuRaS9Ug2Ceg7ujeUm6XyMDo2zk5rpdyBgBIVGH4YRx+E05mhS4RLr82KWcKv0PDuTls76DCy7SVAIfaAP65BQfBtMplfQonpphhiavHVyVO4EXGCDf5sVFXDZfe10H3PHlFEkV/slHlq3qX361t8kj7Llu8dmPyQZlGQBPr7XXZO+H+CuN1VH1SvwVCS3rsNJiF+dS2469Hb2L0eTfX7taK21UBRB4bJgRgm5PuR+ZmrEkuKJ8h7usgTh43FlrHhyLEUYN8FsDWAXuRdtAGR/cRq4grQicUwZVD5ysad3qstaWb2fjs9pf+N5OKko2QKUGzkUWydLZsCcTeGq5RZsJlKLMuIQEaR6uxuN6nrdMC83T4VU4vG5Yo4ypZBHGaxckeRrUv1O2qUFz+Z5h3eI+SSwviCgwm6CWmMr60Si2roatqYdX2JnMMrAdwlyeTgMyioveyZ58MMWgKzEJ++j/tL7L6CEYnwSBj+V9Q5UwlIGK/jhpjFQp0G7KfYvRXht9Rn51Kr1gCki2bxLurOfj/S1sUtAxHiPuVaWmIkKlP1tH7ggChHyRD1GlQtVW+TR5YkwiED28Tl7Av3byH6lWvgQEiq3HUQtq9DIzIwl/HR/fxQ0LHwiDs60kJjxTamMrXQexuyGJXxURKZkDqj/DTVnPAHn32WXCnShJVI95c6onh7uibu6JOs1Y1cG8zbeiezB/yZMh7GoH0+VnnFUhkYux/5dvMYIH1jJaSkY4+fewkaKmcV/0ILvc69GSiYQA/t/EcjElFUVjgiMF4smfEv9lBscvcKqb9xr5PxwZComl4u42pffdtoaY31ZGVH46G8j7yXCegqQlPYxKhzttCEErqSeVls5NK4Ufvi/qtZiLBgS2H9qobBNZA/U7JUJu0Yg8OUkCPoUbz9YpUTqp6dKsyOZn52h72muURxB6N/mRWVBfZOe8vJjSIusqOLF/JHNR+EWwRX/yp0wYK2xity1xkizQBY9JBbYTyxtYH9m9b3G6dWMYoCZVOFAxPMs2LXMqX+aWEVHw37PJFh6+F/mczhaTsiW+M5p0k83PTuhBUo5LyhkIenQbNN7lmQa0jSxdowWQLHl+9M2hFzPgWwhnSKl4/fwqoXfQblfoCJiw==';const _IH='38cf052aa89275a8d03e8a860a510c9afa08e3880b326968780ca2aba54cdfdf';let _src;

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
