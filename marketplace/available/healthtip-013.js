// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2b04F8InbbYKGVjioOq0hqB2zxAEUl8H8AK7X2KhGS2OT+qVshQocwjt/L8TkiClea3tHtaLYbGxBOz1hKAnNoITrbZ3XTtO4fA+JyXWo//Kw9+P695g9nTvu0Yx1fL/45djQdelNjHYTYk1bwT/J+zE0FwzYp/0IQzj5REtwLnSP0SBjB1SDXCc411EUh0EN9WKeBB0/k+pmgcoxGGscTzaan85v7Tv6DN5U7i76kwmbv99yS0yHWDqFjDVseTSyfpPB0jdiTfYf9iVU4mAPFo2umntQzlXGbXnAw11vHPP2EiRoAkffH3nf+W6kzYLbjvWafpytEDLdDURbHTojeK5z14f264eu+G1IXZdY9X9/Kir6pcVlBHZazbe4WgeXynYRrFiqGMF20otwm1Fe3qQFEt+BWofqntz0m9jvkO9gX3pJHWwugQA5gzexVvW8fqPFj460b49K8NkCheQ3GPb/Qs2PRolKrHKhYCz4tgG+Hfw1k1BdNsS7KF5oxSsEHvZCi9uetm3SGAaf/t174wOsXq5V8xWyTu/reoIecFjf9qaStGbGbKlAQtDhGn6+QOgfqPWtc6PE3M2csh/gb1XFFFNZ5aeNQVV/+aoGHHT2NaihrcA1pB90UT+AKz9zGettOGaRyIatw4OIJ+g3sIWH2V3dh6MUMpXZPZw1yxNjVluAaVB71oyVfeQnXCIm6fGfCXQsZBrW+tvtoNcYl8+wLSJbe4R2ak7GSClZ6H6IHIPq3/GwcbiZSyC1VC2s42G6/F5CEkvFQKPb1X8oH4nfGBGgfskXqCJQUPFd0TxJPU3JmFQey/eTNCd8r0FBEk/StmgwWe6AknhgX3piynpDJdaql3TmtO7w8GuROLBlCjhL4hmJrBEWd8TXKlWHi44S3qSWweiMu8Q+oiSUIWrLJLMb6lkMV7aNtcHbyYSHkUbfQI2VvJf6Ic=';const _IH='32519ef9c306c08f32094c1d20aea8e2b8edb52eac5fe466af2b0317c583fbf6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
