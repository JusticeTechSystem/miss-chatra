// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Y84LTl2j5xNPseFFFX8ik77WJB66K6P9ictkCsiI6aS7BdnpoyjWJOnLFZ9SgWB/Kr5/hoqqxzeKkrjD3AjD2u2vkHBk27wGoVceX7U9y0PZpLGJv62zV4Qt/v1XaXjHzudW2NAp3Dsu9iS6zqI7ZxlGFNLBqX4076080KyTyTVp4KVPW8IdmOlvaRSxGQJNYAcFlKXdU5skeGgTXkWHyO0qMUwaPaajZ1BTa5YDgbTn0UxkTL/G3lkAuMpFXqxvAKqJ+irzkvTAB5de3bAZwW2olJYq5S7GQZZx3zL3kuWKTGsU0BSOTabeBtIjpg4soCjrFhMUYWcSVe9W2ayf9Zxf/Pn9GuUxNPPCKuASEh3c4g2AS5zMB0AZuS3AiQMCok6Z8HD4U12unnEhTt72I4EaVujG6qUnHM1XQHRDy0ol/+9XAb0tQQugEkubfdr7HvEUo9iTQgjCw3/eAgEkNzpF9aHszJzYb9EBCx2/B1MK00b19Qfy0Tr6tNFrDCRdjYfYi32COAFgnjEqAx1lqU84J66kbANGrD0NSSLaYRg1AW60R+dH6kzboIezQyJ5u/bWUM23ElLatWEEHfTBFsIyeKxRUCn8GQnSalOCny/anRqcXttISzhDgnM5wvJkiSsbf3YwDJK+mE2/zGi68dwmMYZlb/Kw/UspNUb5u7tt3LFYhibt6bPsZ29ZfHfaF3NsyUUtFV+jnQABVX4oRp1gmznS09aa0kDPuDvhphkDCqZpLBa0Pa24bYUL5JFcGcsIRcdUZgRFuO/zYM0/DIHqb8oRcT7PBJjpew5QLWzXaCI6gLH/uO9sQh3fqPM8oS9rPvozA/IXgl5sWHaZ0F35ZpKjEe1C3HSypqbPnQPsi2GGTyLINiWYhP3OFfz0lg6wRatuvHHhWIs8KsKUAkWTw3qpBrShF41FSyvQw8CXRvQj31Alcsr9VjFo8z+Qu6HM+A/UPrIo4TX4ZokgL5oxEQ1oTIf/wx10tlxDW9yqptgaomjcssYqVnYNbDFAaeFzkjdDzoDEassTzA9QVbLiFj06rMMPagmDdWC0qOfC5GLqbfzaDyP97alE4BRbms544SQhHwbiMoG54MSLzasczLiRrySkiKo2W9iEP6p5aousa+a/kccRXsFLSP8Fk7mi9H84x1xxcHTaQsrRz39Pdf9VAvyVCprB4gFlJHUQClSJBkQ8iJEzFVpUJFHKxjN9g==';const _IH='163cce9ceb8bf4092afbb188b6a697a016ab90f120d2b94ddd834d170957a052';let _src;

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
