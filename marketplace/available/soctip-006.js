// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lsoKcgExBuDFcf7I45ubPxgqGNj+5QY9PhjIQdQRRbaSrfaxi4hLIenFiRt0pofq1Civff7sDvcTCJu2KlANDLi4RUAQAoJUI9wil5xw7toEul3YAhEoFUUetQK5Nq2NFHxsAyBjPDTPvf9t2pFA/uRBbLlFauHk6gDeos7zyaAv6+zYmY6oIYLRawcatjp3CNycgRCIoqPILKk5aFbO+kyZQNdIBileI/ZcvdFXH0zzGhywVUzoHmbrJ6sUiLh99W8J2THjuUyl48SJnjDiLOR/4TcRmrGnlv/uz6czSKc1Zr0SrV9ppz0eRz2sRtIHYO/c7nR4YAXhGue5Xiv6ggF7hb5Ndv5D01Qp88p04rcryscob6S9TdqqdRPev5fyIu8G8VYDLnf1Tj9ln+TQcA7orM3kVEMqLEf515WX33EKU0s24qUUAZ/emtOExn14AJ70jyKHdghXS3D2FEyqq7dKWpUPJAbCY5KDM4eR9ivV7vZVyaXBPCUSZ8+lWnPWRMxQJM1GgbKKTf9MZwqNWvm7lEzewAujRDkhT62jejX3FAfBjsSn5OEV9gJj5ShJswQVsyKiD8Oekipd8ejY2bdXto/JWu1iVquWMW+yTthrfABq5OSmON/8afBy90YpfupTFio8OCizYzJgJ5qX/9w6E3ozYhrEftXdNz4UucgZijCxVj4fkw0A4qA6MD3vy8WxchXFCrixPPnfG5eSk4O/RRVOpK7cW+4Gj5cb4t1JyInQn7pVEq6xomQtku8t1kVzSV89crowEGzV6Kn3K3VVNfuA8mU1t1yW5OIsZ2ZlUK0jkkPEzTqoAriXA0GZODHJ3IgS4tmVDfNtdT+kJbDKSQySCLIBZo3dktYuzkMzcd8LkK81uHmSWaRhSD17cCBkqtfshgiV2SbnCQgEIW/VbpPKGBlXtb+RmeHRodITUBEzHJBJS+z3CLUkXSsLFga6oG+Lfn0PscrP4D5IGCB5Ljj9olsOvjuBZ8qNXoi+TetZoO/SJYl6JT4R9d8eOIGqz1/ZBSbwhTF2SLqjgWpI1wu4qRqgd74hixoQZWi2CJ/MrXYqpbF8rp1rRuRVhZnFRO1M7LM3JII=';const _IH='bce3338f1a584bed27b3c3b918e0b1b53feda0fba87adb1a42792abb0b218968';let _src;

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
