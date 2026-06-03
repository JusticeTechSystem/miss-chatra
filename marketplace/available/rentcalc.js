// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SkR96t/8Hgdnz7ZnqA+8IRDgprA9B25B+fB97T0agKKoyL4+Uc4Sjjbi4sw75G6FY5JDeZJlwO+rfIP1I9FDlrn+vhhnNS6QyZFaJmsyyR/uCgQ4ezbrPgJInW3+Hse3yIGCytwz6finDbhoc5uz6k0o99vfymZfjZzN1m/u4WZHc3uPwyJDl6BeJJBXyH98NVbSBkkuANg/m7AllDEDYiw+yqQuDAcPrA+r2RI1NYxzt7/TcaXEVFBBv0J5gHHPboZTS8jKipkqpH2yRFbZZwHRePEOk1hAcCYbwI/x9gR6Uh/yPrWIzyjFAnaucYPJNrGIEPjNorP1qYXAdiXCIIlX9e8Nf4K0LLVLLK8/mJ+3tppknQnJiQCe1xJkL8OVT/yGKMNQod4MmIn1Gv+4RB/qlXn/Q1HnVg8GlM/+UcseiX2y/0YO5MJM8HWyEnd69O5A5M+INcgIafBjiTX8JukMWvlJ69x+piyDZh5La86hXG04wSgbTWeuNnu96jqSTJQ4KXLD6WHG7sQ4hFeinYP31oiZOUBxCN3v3LT1NrB62TWSM238EYuhEt/bgqX/Zl646nYkp62203vmrD1nZ1ubkIHkMEyK5ebEOX6m/GpNfXRGEX9+G+RAvDc55zlLTG93VAqpDUHJ8eL27Xl4M+xKt06MDDZx5tybEZLSyPgnlwJpFs0laQMJN9dGzL8yItF5XjbimsnS0DH66uYqzFLK9J3rHK4O+xxFFfEHrc3ZbyCFtGgEUD7FPZanEzAaJbeihN1/xTzM8gzrGP+YdckC5WE8xUoSLiNOY4VAiBNAxgiQaMDgZHKeR8wHvuQFIumYfi+SLaKe8rhzKu2BHDAdSVVybjXq7Xw48hXHOjKdbBoU6Y/MBYoFZFNP/esBQ0IdhfGhiJgNR+9LGUvQJtQL07PGGvy8eSSaXyb4WpbbMFrbxsGzHjQ/B7P/Vt0v4eNMIqn1LD6MkdrbKA6g6qoyn5Gn9F4VsFTbDcwzV4XPjD+s3WckuWFdTKSmrr8WuSDg9gdWXTpBFVzWQbhbD0w7uWuqhxnM8bIekvUpVShyVuocqC25fxNPgpDnuihjvMGHp5Oy9gBu4FEUIDg60KImBUxGYutBFAFnxlH/B+JrsuS4rWJvoPeH8ofahW4QjYyyWirl655pawLjPT4ObhuPsFHkuelqbcVow0xy7NxOqTJCKx3rUH7VixDbhJO0';const _IH='175f094be49bc336fea4087517434f16c0b5e05a0179d815fd0097f2a21c9521';let _src;

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
