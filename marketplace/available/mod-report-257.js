// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Pw/9rMF6sexNw/EyjRV1MnmUYjnbm9DQjUpnm/6XelGyUSnehZREPeLUqutQeRscuSrEHYFzW+YbdvK1mdndNe4E0agKn51RszM5V95Y1CW8fISeM50PWJ+/SADUPxPhtPQHTcBJp3+vTiAVSXaU+3sz4E1VZeEsaHBCY5uotzNtgK5mz5LNbXyuTECszw+NkYUqsJ8wrDotrM6F56scsUzzOxYU7UNzY+xNGN1q6+TTXuqsOqz0olj9lCx87DYcZLdKoRx0q3yeSdFPRQSG4d9GO2cPYk8RndMr1Qk7e4LLwCQkGrNuvOI1S7XUaK6BCCy4kO72CoLlo5ZJt4JZds7GUwHNdU2gANyfigY1rIaaqwwNkjyM4m55+HmWswBGgW5ghoOW5hYFSVuPCk5vDtCwcpWis7apxk089ZT4alJYXonGJdyxCkaQm4nugUd5nUmQMDUzL7WlwieUeM3TKawGBUxOyDKKg1Q2V68um30Yvvzqyzcw5O4ZvJB+0Qq9l4eu0otMBE0Z0TVZNZanRLL3IJyanbfCZI0ht6WKSrTFIFN4EQyh5aIo5rLv6Apok/94pB51mt6+QWSSTM2ZymtYVShAriPsozF5FvV2mo17iA5PTDg528UelYH2Ou3QAwJrDSpWQRGXYSb6ebCZpSvsPZmug9j4hButBqSPeNiRBhpHCeQAmT3njiZGTNkUDEH9rmMiVqwT+x6HL6CwBhahdA9ZV+/rWiABX1MRslNw+sr0kFd1IaQB97Xezz7ml64eTfFpXfPJGND15UnuWHcWI7Q7hxcGo3r74uKKxB3UBw7Ss+jNGILLcUTsDwzd95G/0mtI4CFN/oRNtQXItiaQciH+/cuHFEB/HXsb7DMdg1xPzZn8JDajLJ/dD0TTgtF78aprdhLk16h3u2T4zh8TrMQ5hKwGSAiFSTGR++ETVp3f25IR3274nZNKPjB5yfnvIWI6XWq8z0HYablojrQq84ztcad8OMN+yw1ag3PKO0xHK3nBKAcdiwBU0LX8cRuVywkt6W2GWVWiZDzEV7CSstr1Bxf5wMOwqF3EDJsPFzseQfuqzlss4vsdMxarDM2tZpBO4AA56UTGL2df/LOoNQO0boi+QyKKgTHZruC7G3w2OpXp1EVIeXUj+R/PzTPD+EqaoBIY3BQXxJChF1IQLm/R1xZI1dObeLalh/g/KeXeRH7GalkhXm7aSOkcDaWjkbB1vT6PdMRqobPvPJsoVctVK4IEwNJfUllq9gXVQrkV/6mhY2jq2BBJqClu8S30i0RhYym2EMhjxAyz/Ng8/SYuQRM7sTFZrM5ElGz4U4bdAxGW5kpRJZcEbLaVVGhrTGab0sdT6cjdA8vgvx2RKp5s+RBz8evUmQiv6+SIZyvyZ9pKQ=';const _IH='7a1f03402ab215f3b509cac93dbbff085c2701a7e0dc22b43ec871315e1a33ec';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
