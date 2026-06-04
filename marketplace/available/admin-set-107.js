// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ad0e8ZExqxlkrLy1c1Ar4vlojCAROUajcMZNuAxoL/aYG26h2lLOWSZbC+zbOdPYJVjMK/yYD63p6h9QxIzCUXDMJPGdahz6JOUw4vpgH1+IyYJ0BIaDvN3bNSn5ZwwTOlGUzeFlRQfbvLlW9bx3cx5s7jLdvRlsyywKleqSbx8T9VfZQKngHq7Fmfz0YRmNzNEAesU5Qp3ZQJC2+s2NYTIm7t6Li/9OrKToZx0WHU5vUgxW9swVovpmXxf5Gdesp+MxU208uQQs8BW0GgG2TcMGey0dHN3y77sTWZ3zUf5flq9Ckt2TCA7ghKjEZv3csRTsQsYET4FP315acq81qHel+dV5xhQyieWsdCxwcuBCUM2+eBogLFGVx4F69H/Tu0QH/aHhtWdfRahxIPV5ctrrHVI56xFbffmCIjPgIN8NC+aCq+8CcV4EA7rhBSHMP25yrXyqmwyusd7lsJ5gPlGQRzWpM+ztIsJANrTBkmrtZZSfe9s6iON/8sOeQ4R3JfuH9lsAm5r9HDlGfE+3EIyJXCGk3ZfxhCqYBrkCEUwLlUqQrN3VbuerFYTidmSseOkPuPtfzhEuhqFpSaaUysEgK1q1xX+p+OSDBGfHhfyyC8QWhKFQbLUXbVd1h9UEpyYPDft6I2pcy/pfWir4bmQyn6xte2Luqx3eGFebIxYZ/TvsP/4FihdqbYbkmywPczPW/vkXb5W0HJDrfYM8UqsFtpYd+XYKsA0J6+9X27N2NoTnqHYXnplUrE1soxg0kJPDNiukcOxDLw+2sWD45JgLmy1d5gVM5+l60tG+yw394Ne1aO6YIpEeRfhduBLABm/ynOAujJgfrGkqu8BfFVszZAWPgaXez2rIGCQlDDEJwhCp7Z1L7E798RowRfSyQL9qfP1Y+y+N0CTbB5EXDStO+weShqIxenbmvQPF8H1zz3CDhQS0Qz75aTrWcVcWvKCJWO+iuzaj21GmTHXsY/pI0c74SOegMnAbqA==';const _IH='0ace8bee5ce6a47819bfa19dbd3b4309c7c7543b7df6d88fbb8e10d947823988';let _src;

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
