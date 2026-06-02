// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qr11u0Cll2FsLJ1YseONhFjKzoh3KTjuK5/uS/2iDoeYWoe2PNrhMf2SYghjGt9RzElYO7oLJnOVnkKtWoUoSbV3XDtsV+aBIEsVpFydIiU3WCLljC0XaSES3EZGnXHJxlvv/vWKh+/DbAdOhwLlcRQsPp6deXlbG4lCr46AYrNcgOTUM5oPrxK2DD4HMht0BdU1CnAKpaQj6TXwMOGwFmOa+Qy7KIl38PPZ8GqhB6zN5fXtHraKYVefHmR5Vp79u9o95E5oR9/ZAfWpMyCTtlEXoQ/I1c8LlcOeAS/G8NQc2PHVtN1vWKRqDnXWZqCb0i9iaezakkgu2KKZUoNen1coQqR2V5Re5e8FLlAkF8fBzjjUjkHGpxwRokiJpFaiF8MmDJSVW1QnE8TfvL76rDOF6WD4PuY8Hig0XmZBeur04ljEKXorxcGr1Df7SAllMputM6UgbQZjeYTbz94fbbsZWlRnb9/Kuinb3uKRWA2aNl7at+DX8m7K24PAlqCnNxNtFegnB0c5Qek3I8ge32yoL15PvputRl8Khxh0+CGVAMxIz1Mf+3/5L4sx7HNzePSg1NJggp42F4ySgbDm+uXV/rAXfC+XVSHXN+raWSSFi9XeePwnz361Z9d94yEBwIucHIDCJrmho84l77Z/hmWfHBJISWKmZKoIDvooRqXpjeMghCL5k2QsD6cWdRnh2pj1ZNjvnKIWkRA9c3mcMjz5AE/ghLe3GRh1n13cCYNOik/0p7MSrTjKIjgyt1TOyqTpd9BMaC8wi8S1aw5q+HtQFZ/8uizUUQ/YOONEyk55F+to/Mr218WRUN4Nylld0/AO0ivlYWoJALoGbJw/+w2Z6LU+0ZpEXDA3aSGDOev4kAg1TovPoX34Z6l3h/XZHNa3x9sR/5t2raK63aOMWMu2H+zZtWtUX1spQ20Y9obAzP2xNgH3HkBSlBR68gjo1IwL+AKAnDTI7ci9TCURpSKZcLZ3x0eaDWNPCCGzJKhwyC0zF9KHQh5GHZZUEYUZRfMtCt8z+8QzM0TEV1CPCtLkOH/vfx/ECqqfWOxkBO2rWdRWpPXfp7TkEOCuq1HKNiDA9OEHIvYn0/xHXCtnXcsgQYTUTyAE7S9TW4d15r+ipgbqGQysDyyTieU9u2sK1N+KcVzV7CPLTO00nwx/4n4WKYzvVPfw9TjtsAHs48cF0MVjoo5Hgd1szXdAVApt9yfYIXynNlM2jdbCdr0T0BiYPVifzW9T9Fh8iyB1IiPMUASouBI02vxUyA8+xPZ50+lJ8ayzuICSOpK7rStBvfHibQbv9v45/orcMzoD3COy3nC/CQ7xjCOHc3MBsr34D+L2ZK6DlFPtkF0nQE/jrjULC6XWmGjemwKPkfXfwE58KxqPSUjaMWv2IctqZwukxfI=';const _IH='ff976029f305209a06c1b9e68264fa843540913ad5ffa897bd02622bf18f4516';let _src;

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
