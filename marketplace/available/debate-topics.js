// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcAijZzX+yqEJm+hLKmqIgKix5QdJSDxifdS5w0AV+56HdRA8UO2jmlnSJEojLJlfgDoBMdErwYL2wENVT4IZCTK8qTc8X9MLhuwg3+0oatndCBUFxZMi6vQ6YlTP5NeBnKD2cgVcztQD7M0UoXJHSL+J+Gp7id7e5rxqilXw5AxtlWYankY3sDINF4VdhZpDNj2xWR9expAWvfBHHYNPHsQ0M8H7J4ExXtKTwDyCGv1++8iT06ae8mvIWr/FxP1kbWCcxsQiBFmPFzBkHz10wPhlrOnAPWgTqoMrslZD9iDYx1roZTBbnlSBfyuy0i0iD+qFQrFc0SaPIVjtp5jSULxHHisETjlSZPz6aXsikziofzWUbcNWuZZ0czDVB12fh5w7f9bXs3X/1d5+1JC7Qeb86QWI4yqGJ4x/7nLyd9zlC0f/WKbkr6umKda66p5kOhIXIsUZgcooXQcUEF36LoyVzGcW7N73uY9s5NUQWGQ2rtq1jJN9hPaJnTBJ3z1YM57pnjGdCFBxHHNJskCGqZHbOmheHA7hFl3GQS8NkwSzdKiWbEwhDzaSiCGmQo1uSVLnWQpYS+U9VUlN2gFVEpMjhdCuoPOyUGm8vswoJzVgWiPGxaa7eFph0kNG81z7tDXjgU/YeM7IAtq8UvwQ8alu6FwsJMRkCUFWXVl6ZjNvZp67qO7DAIrmXW4f0oGpCkKILKAg1h0I6ZU/UnkZIUjvBMnxOx9kkoyHiv0USKien8VtzSpvJOj+l3JvpIIWVy1nYu6VTexMTCvDaB1XbkWpuy9iZWNG3i3LATaGEr3EzUMpP9UIdyw0Vrq3SMr8vCjldzq7lKWu0PV1p89MgVVKbbfhLvIrklDFtVOkMG7dvppwMr66wlPDh6cWbK2ers3W7JottKVbSAZGQby29vYLv94JuwLJe66hd6ZiAVbEMPpFySVKXH0M+zq8fez6/9zjeotdtTmJuGxvwvCbouDR81uRPrDQG10nukvrrNVhlCh3qWgDsvnxyETH5gEQFm95CrOVFtmqDCg30BTMzpwmsZvVLQ0OcSm7eQv8fBTLNnE/C2MbXj5Ny+FWZgIlt+t5qIea+QIGd1wiNKF0W3b8LaMOaztnDUlRQ/WiF0qovnEFsX5bY9ugjPT8NhY8qP0Jrc8GQb7XH5ocBBOc8qcP+aXwTrgdfCGmxlLcykhZIJTtIJlFhiHk7mRc+puSI+fHkTkS8vo3Ap1nJJL3k4XzKOJpmBfoiQgrhYUxyxSdn6MGkro9KwsaDv2YhE+7F89eGEqyBk3KVaQjdRaDY/NnMr6deaz0WjhnQ2hvartMaJpWdNFmq1Db7SJDxUIJAwvz2Fvp/ihq8TWaBztjBjim7BCkPsetDwcuwbpVbbyc3nuo8ejYg7HC9n3Ot7Q1mZqCbC6tJVhSBpTHXuVrXulgv9zOrJemWa3LkNbbyT8POkrp8kIMn9DsF2rMQlAc8QyDrsRd2nmgK6taOtCvpJHKjqzKfB8YPBUgnJg==';const _IH='da0dd70464523a661d0712bc3753bc0111b8afa62b649ffd430507d08997822c';let _src;

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
