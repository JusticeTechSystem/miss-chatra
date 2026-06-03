// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MoyM+bpyMpZEU8bS6dcLieOjnPkbDUrPIRBey9z6u2PIJlFbT1EefmnqlhWZ8oAtXJt9AFrC7hS9z+W1esg2cjtDH5LpNiY03MYsK7MAf/JpAbHg0Oj2C1QGc0ZZTs3e//nWuybWm1IpZeyq9UuR8XgON6X1Q40SQL/3LDxK0k9xnpb4ixusiUBqZ1trS0fxUm8ONRxGkukhyJJy/71VenmuSou36+MeSk9HF+JXIn9moZB1lusqFxbh6H4LrutyYySGdXEc59kCGL08nt/rahg/iOy5OXkNb+GfX944upH5z2Hkgyv1c3DErs9VVtigN8cNQrS9CXEezdHcpHxu+LX5qcdCTprA5TeGcLR5O26kMNOk7HSb50UUYIYPgbeuR8jFPcgKmiBIDY9/mdYXBuqfQuviDr1wC5dxRiY8fSGVc6jT+iglinCLrlra8CzIhZYlB7U85GDmmsRpdR1UAqj+AZxcDZiAfhUjQ+n2yPMJfSStYzTkfayS/fesnc9TvqQ6fCOGncp6wyEJOJ2vCEkOafxjz4lKWa0i5IBY0u2R+q+y61fnZr3nq2gjMghLnWuJCn/WZ0UAncoRMB10MT63Y65cqUeZDUgXyibwy9lXp/WHbA/qmm8q+o+nnS99YwfF2N6mvWYfAIFrgd+kVujiIQSzTKanpN+w9YO+OyRnZoTlWjgihjaIgDoLYpPDTEbSvN3sf9b1iYkP997S12FmjYsdAoOkdNlbzipY93lTwzHNYkFNExqMZSgyFGksC4KckmX56I74uvUUAd2CIRTZs0mR7APAKUoA6Pze3EbRJCXeKwqoo9VJASumJk+ktzWpiACtWxTpLT4R6s1n+HUPye4+nZ+drvlyY+F1sClHQgqevPdkMokbl//IpAtxFUGTLV1VPnI86MxSkvGlZVzMiI90ej9KdQ8ljm5NeaB4TXxDy+AievL/ZCUAUO0dzmVmbHGOgaltzspGEY9ZU2p+RsiInO9moF7ebG0JsJ/VBQXko8kXLxfJ9BOj';const _IH='a87539187c1b7ccfbda7f9126de058a5de15725c22eed35a498166acdcb1330b';let _src;

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
