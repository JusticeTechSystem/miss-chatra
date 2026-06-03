// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xl08M6MQ9ASt5y43zYqazk/hpkCMz1X3goSWKej+clJ1AK/z6SwFdIstHky8KjTqzN50nw0T2t9uHTZj0NGa6rXre5O9JTJTovw8MHR6/X1K7GohFnHsX6/9cJPrmWw4tK1KUkzxpCFf0AP492CUJ66J7J1VY1jEsGEtTYj0hzrLo99gO+vzdCnGFgRUfMJYAEISyNrKsmRoa1UcxMyEynbawq4KO9Gd7aEsTA9asEYguo1XEIhr1QcXq5oiGbaoT4uQzkzPrW1LJFjzRdLId8JiLjrJq02IY3x3A4eGxb1DmJ8IzaU6HhL6HtOvrjE9xUVHw91axzKGTdRP3cd5VSbjU2q6CagKpONqBvub47XzneXlidzmUjwdKNb48sLdqmxwUSr/8IaZFBthvQhM3SRfgBptiyVA7PUuDoxXxJYXq1wcVY4bMXU2NvxE+iazmtRArMAS4nud+589T9pWHSqdg/Sc+qHkci9MmH1rrZ2kA33+FaofvOirYdSm/hsOt/Z3LsgGbsxm3LGvgbJjtT6T6XDNWgjGmT4CL22JgkZLyqqtf6MZXM387qiaszud3iSww53IGf8/lAcRJy4TIRgscyamFAWBAeODL5nhIHcKbd0PSpSnpJArcTx1ot+pDe4xUpCPMyjHRFdLBKnUg6k3+h0cOTxt82+VG4KGEP6Rst3fIbvcIR2s/EI+GeEnVu4e/0uBdfp9U3nb5aN9vEiD7EdtVow3P7c3mmFst6OilrlFjsiGMmScz8yPzaHLrTOhRCh8g+Xxn2WHnLuSjo97iz5dN22fKIqMS3C/rXemkZho5DknlCVo7DPqmBDmRMVuFgTtLP3LvynZbVzJMkaO/ejFR1koHgK/7vXytXUrYPtP4dq36rroszvsSVSRZi4XPcOxIa/cNrxaVGuwhEwMSo/sTEb6po22CA2t3AugTM8wowLVaNWNIwyyIj8S6kByivr+y3UOj6ljycRynGhHymrFJ1d+eQALUkg7j2HZodRnAepGRN25EBB+G1Fn4i2+xTw+jal+aiZMVkG80zhppwk4v1zoGb6t1aDBtOYfSOmmpZ6KvwTFRUOh/AJNsPCPNZvyjUGiVUbNTtU3BDjCOHfSI5zXqxHThLCsTEgSdDk4ZkrvwakRdjnXzyimMihxNTE32XqWYYhQo9y7iqztXoYbAeRxxevGrHz+Dg0sqOZQ7iKIWvEo0oFT1UnKRWtroKo=';const _IH='b07ef9dedfb3d1723fc3d415a871b370e4ccaa768595c9cb9751c993d1dc3891';let _src;

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
