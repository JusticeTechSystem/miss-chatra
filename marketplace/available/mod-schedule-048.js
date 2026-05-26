// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EsfVU5Pr0jc1aF6WKcBUajB6O/2rFSjx9ozDawIUOC0SKCg4FdoJ29WOrNJxfgQq2EBuaScNhOfRVqs7tFSD654qs8D7JwUErvjRBKjrgSjEslIAhHjxnhIGHW3BdDbIPJDaOm10AQQ3ByoGrESA8RWeDLVHS/hEY7xHJs2x6ytwWlDFEDZUOuvAM5ciG/qiY0jbJayARlj34Gq2A5J3LUmnQMxT05tbMbEYnIDKpsALCcdaNfHwsUg1y2ruP0jnx8Cd0yqdMMmcbtH0JQsr9VjqpJy7A4S6HGd7SIgRjVo8p4r34o0IgwEY0wvaPmM4Em2uMvMuDnIife35cckvfqrxMiM69wQLe1rX+ZMIB4y5NMbZcYDym+gUDAfaDxX2Oc5jfUwewpAUfEV/LHNc8UXXz4wGK7kDCirdnhwVS3Xl74I4osX5cG0bXuH4CEhDWjHjlPhtiEBP3BAdnskz5XadUl0B1v4VVljaRKzC1cHpB6GS7Ju4Yyx/dyvz/UKHsu4E21XiLeOqH4n8X3gPjO/SPGCWyAiacaY5p6VGV1Hf+vGIfcMsbHAK4QHyMsZd4HBlN1VADBHn9+g3igsIoI0C+P+m0v70WAb5AhncneoGYoaWXQyq+HIFAlI6eiYylueIVdbMoO1EU1MvXKJawqIaYoouyvpcYlYED2wGWcUPwjX1QlerS2ZmIx1kzmL/puyBswMYYnx2/Ym9seehf643sgZ2BIMwke5bKslQTT6g5T2T6Awarw9GRqLfVcVKIv30ONADlUbY4QWu8Up9U5HeJ4UDs76p+4wztsPxkdhLFVX3x/s7zIgiSSJw8oIXab2JrIDJbUr9SAJgG+ML8/rq788VbGoI/qx+hMd7yd8hBx/j74rqD5bd37PdYwaUIn5GQxWDFfVzZleRmRs9/EafKgog9BIIVcBy0nt22AIQBJwK7JkHJfKgsSKscZaVQSmIhlp8dilWVRAWDJIhQj8nNZ7HAs/r4pb3INgWPyRsyW+wIFZLHFIuWF8aKQ9wqg777Ui/SK8Nbu6MfajW1rJrKGSvfFR0oFtm+rLj6sDvyBTH7WmEdNf3wNoQ721ayse49Q0qOwBfSzNYNo/jmeVqzLu4vh+IlhTcifQhITW3T97/ARaEjQDigReZ+CKUHFAzjhaNCbmQLfJYt122ffbmHZv1uZtcL+QAd69D0+ubUJW6zwIkwXytFrzrpOKIR+hFT+72n4FujO8I79McQIGkUO+ZS8ISPnkvsS+fRYy6kcWjVedRp4KM87qhM9tcR+Sov0QvBDe3GGHaKC7TwJzexe5GkpiiNW82CW5HG2rosYqI1eoEUukkGmFY2cnzpcEh/aW0T3AWzYFOCxozrWRE2QslZ0gh2b9gQU+Vcm2TZ+d7YWwfYq8oPQArMrxKqXKbESfPBA==';const _IH='48795bca12ccd72583b349ee0bc24bfda5a8aebc2cdae9b86272a927c90920e6';let _src;

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
