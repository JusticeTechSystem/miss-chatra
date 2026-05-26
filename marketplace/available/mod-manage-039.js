// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wWTPXAlIfiQxJUyX1R1Ww4D/cu/1iNNGZ/nytmq+MslsS169Tp7vihOHrMuG4Z69giFwRxhmCuKdsS+SedDIMD/G8iYhVrmFknE57jw44jXqo+kQtOJHiFMDPslFN0qx3frWtCsjuMc+Q6d3sN/7Jfa/mepgwr0q/98JI+sZXhAn8Vc9VBuEBnET1qQ80ap/yxF3h9JjHWY2wJQ12ZYg7n7ZVxLNG88NmfhZDYvHyF426rDbmdIL/pKU1wB0aWgMPX/8Q3aXu9kjPZyHVYNho55wTufI2KexDnC4L9YqNnLjOGdaLyxm9wrj4MUGzSYsJ1BByb/zKzH6W37jU3dT1DQnIo2u90iQJB7Mmg383XmLb4/eI6WJhb60plOlgLN4mb4tc6Dnn/XoeUbBIiWMuZTBv9M1qEZjYP0XcFIzNqdXa55m9Oc+ZFQMUiBjfIsxf96xzJsW2KW+teaTtueh2gJs9tJKyfrnkUXzAAwp9Eg4RvEM/8ECl+OJ/FHn5qaVj4aGKs56QzDP46YdgAIhy/QdEBultgUwxeDpzcyKfy2lU4VCIa4M56yBAYkCNqKHzNULEnEd0EhGGgsLpBg9513FngraACKTm1vKJaFs5PGiLtLtAE2U1sp+riupmuGcTez4ATXhdu0B45vyXNp37HqtLEGbkR1H/LMGM0vKbmi2ZhkMzDYwt9ZrkAfD6Rj2Wh2tJ9Hsk/usqKuzcaCO1tN59eIaXWRFaJWlOlhqyyqijcWNtvlzsNaFzsKN4Q1McurMbmAtpH6C3Ti283kdnQD5ZKp8AJMENpfY6jn47SEn+HORxxMYPAVSy8/NFhZxAQt8dC9iKSxeNCRlQaidmJ6TECLJ2fafI7vjaFC68OjzzOwaZYOxqNl8YfOoJMzTKu1aUWXAVvxCoHWorJPFe8TwkOdkJ89ZfDeZ/1htFbdGMA+DEu+6PLQ8IhnQ9Dzb9myWwxiU+mPuwEjNSjM12pZB3QSvhyHVV/vc07t3ACqh010fPl6N6vSRgW3ls19NFN5Dqp4Sx/XQTHQRM/zu6e20bI9dbtO1SKcXsUxA8tywK95301jnlpl9mcQ3CjXzvb2eErx7lL9m0bRd47+6lA4MA/lUevHupljOUNTognF3q1WAl+s5TRM0lD0xLhdbKi/j6LyuvPymsebslWs78gzxefzima5WIVh6AgJxDVOGiAiD4FDyZd0hasdO8x38nM0HYFuSTA58cyH8AkdjX07JfOlMqnd6DLkyJ+oxik9z5RTi/r/FauKp4eGZJZwg+DqZAJsQimq5I8anKuSkRTzg9GNqR5hj/ZghNPjy6EuN0v82peX5SFTQ/jVgtskNlHKsMKybvygj35ZQQWssZmBV8WAWiJHftJUKr8LQa/xNn7s=';const _IH='2a6778443f710348e5f85f86d42279be57b2ac4c7ea477e5a4be9b378c7d8d02';let _src;

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
