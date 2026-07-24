// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRflJciXF1AIHzwV6Dx3SDp46gkKKU6169ZBq6R1h13l4LQompO+5xBqv96pCfPgzCBKobBt3aSnb8IUk2wcYr31CXqEMndEWZjgzY0xxHZX0F17F1ifyu/precmUCX/9to5Azb44Nmlx6ir9rGRVGh+KRMQplAXgEluwF26Ist1yLGusFJk6h/9Iy2bP80paGaUTL6NZ6cRiNAuepKiGU5E3hgR9t9Yd+SVGfJXX1nHPntjYdOy4tX6VEUgyVkwT7O4Lbr5+4xj0EFOmLpJzLYesgsAguvK7FkeOEWUG0NH5H1ZH/Ck091JhUJi6ed5P3QiZePj1rFGJlEgF8rFDIMb9CwDoS+h+MQXEbNrKuPXTwg9d0HeSUpbLxfc0qC2P/i2vDXJ90X600sKzLQYV02N+b3WlKWi3qQddlkS1jZkGZf9Z+frAE5Pya2o9Q31biA2fDy0ua2BcY41dGQZWC/xrtC6Sq+4CJJXTbPEHXFczTdOgQhNwzNqOPRx0aZtWbaM2a+rQm4f21AAjWhSixfglS0EVOK0Ed3KYaWxBIUrJRMXLowfFU0sck+n1uJM+7ZYyRM4gLDWgG4siXLGJWVOoCNsTZla2itb5N9DZlZOWZgzD1NdY1Iq2BezHwSujiW38IA3OHfZ/NZsRF2wR8j43fYZj6EedscuCjWyu1SHFku9SUxIlO0YHf8KmdgkEtAE1uvz7lsvZMA4xss1UMTsy0vMweZ79Hjv8dM9eoVadzKmpjkCSqNYGnAx6jKzz7EZ1Cis76ZgXJ84KNab3Z9RHvQghX60cjLjRgi4eTiRhEUo8LqKPTJDowWooxP/yV3HoFA2STJS/fn1G/p7JyTDEkooz634jGjWv81Iy+M4oqXRFGCeuJmE5fjSCQB34jMnFToECxCzYMYOmqEeedJT/tHmB6jVjC/tiNEKHUBV6txICe9KKr6K41HS/YDywptDoOcrMpCziEvCY2/09cTbkriqsQw6X9/n/ySp5815/LKbmuJg3Mp733a5cCMyhqgFnNhajg5y4Yy0gwSNqzkPJGYVWSnufm602TV2oHZP2UMFYE8MbyXnCewL+Djp0VGDP4O7nmh3dpCz7Xv9SdEjHoxUZckXhv4lm5j2+bPuj7/0Pc1ujaqxOARcHg8ai+jzNIo2RbWmNf1ECY2RdYSiODfN0o+SaR1L4K1Q5pw51l5aF/2gvEyp/LrehpREky5J+hWYLBgYXP/TyD5x+D5PTYZvaUcJ+QSIreKYCbPYfEWz7gQH7Ic05TgVNCpVUi7kemExHqQfTYlUjCNqKQhppOWxPViGHCLmq1lgf35lhNI+3BNdbSr23J3oMQgSA1EMyFohVAHIP85zwkuf7njU62dV/8ONOhTIPKk3RsQcLHkGkixuLcn';const _IH='dfa072e6e535a0ddc76a387f789db8f50d5c614908df3fa446c04709fb0c3804';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
