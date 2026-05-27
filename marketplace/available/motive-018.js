// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E5A/3nbSe7wKVwksork5VQ5pgl5bKp5qoiWF0J+qUJRxt5J7IGd5NmI8xyUzMMAUXQpPLXHOQbpHAKxZYOekI5aMecmTt82DdccOzUuHTcHev5b0Maq7x3bSLfS4XYQYUHQ2iRzM7VIW/JWh2OslW6Vc7Qwzw7Kft+4IUZgXsEYQRepUmDRvfc1iE2VHH4hEnZ17FqU/dd71qm0xsmHwt1/aTI85Iun4SopHCYCUyGbp+LtOPOUBExAfWz3Ffc4YZcWb9liwQf7w61A0BE40rIRdeToQYUKS0OZZfhY4ZbW/4GM43LUjgZcCbJuXV748fAcri2OIlAvYAnG+4brY3rRRLslzmmlm3adxMW7plMSQV8fuzfzedVgKjD+Kk5EzTKYTr1HSP/KdkZNIDNt27OsxoHSBlcgojTgGWsGQJyyIGcC+dNTqWU1Ijf+G37MKRUavZmKopYMlSBP9JLrf2B+/gf8NmAUAOKfP/kbE3EiBlc6qeNjsvNE/L/z4ctcehYDdINcwYgGrG1vpedyY4EORe3xBXHa7T4Obu57qbwEaO/BpfYiFkXCyACEFMIwQjJpNyZCz/ufC1LdUyosZ3PeW7t8yZmhC8OawF+YC4GOHjy8AcQ4J1L8AU3MHQHwurdUfTyc3u9Bk4U2K1kSPO29YXUEhoz4SeewwflA2dkN8l8jlhaT9T+qXNFMsHz7wJSyd0N5GkvwlKJZMkxcIzfVuV3uLCKIpWrQkDBHddD/De869vCcV9xWyH2hevAGlQEOu7XJg96+46/FFBKrKRNzrtuSZykRos8B6p00NjzK1IGlWhG1xWA2qpdr7i4Q+OC8ftcrW9rxvZX+p30GISNpO3wwQ3LkT0Nsfturh0blcF7yH97FRoWLGiGZhD1okvfESE6qn+paUpi2JjbxZ9YOP9ApjiwZFLPIG4wi00IijtLH4FE/Y/sB/J2RUVYxJvBjqPwWXx/tIzKgr3Lo+sikjXsxC4qoTQIL0XP+Dw8l7lNQ3PHtvuptaRRGN1cK/sy61o6+1xFeqVh23uj1XAsB6';const _IH='6e7af884d001eb666d4ce1ad54426f97bf5af83d4bca6b70484e646116e0c451';let _src;

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
