// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AxjPhfSkC5foTy3pZkHREzSTZckTgWI6KpYo4HfCb6nYnu36vIftaz82ctk3laBMTXjFV9KUCE0DAvnMstAW41k2DML7ed/1FkiXmFKrWeBN90jRPNGmAHu2YiDJvrFDjseG2KRqMI7TkcF+E5JxG0maLx4hXKo2rxGqVZSzwPl1szvGWjAK+nCTjPBCYALXH31pgtEJ1/Co1wJO7WxvEMDoF0XS8WckI1TG/knHBmufNGrFeSjfvQaAO5fxtRARVdvuSng75j7TDLEyeMHPizAxM7QmIfJql8mFIZYCRiY/OuGdv9eUkIYHTqh8sNLAEefLEBnwHz116dthW1gCGtHsB4k9xZFZTbywEP5sJPOs8V/GN/FrIvujuGo1fnXbMi8xkrDyE++WZ9N4j5iqsvkEzNppn3m9D7Gq9n22vLT3fUAfhT1QCkjL81BJD1i90+qgCESCiDTWPLsgbclFuB8YaTH9Nbn6F+Q78nRm6CDQaKQXDw4NnT47xQPeL8Ibph1JHrVFZACrpGJe6v60eK0anOlRXt2xSl9P4c8u/L3chHgao/qh52x6NXjYAT2mUubmvyJC6IXlAaLDgS9KVU2fHZlQxtY+21hTIofosF/At6LEM8M7KkhwMAJqMITUqyobzxlXC8Nno+KicY4h2MNpWC3XBR3iy+U0tx6g+ypqbDPdywcMoxp/5wwT0ha+1jwRhbXgV9+RMPGHNM7akSqvsxsJtIfkyz4+qJR96pWkK4iJz9nFNsNTKDUBdLW38opYg8nz1QGygqDQejAoGfNwLWstEGZMi4f6ZOUeyhGiTsEfCUaMwlK3+B3J6O0qVwgPxaufb7ftrZI+shGVCPZsbPZ4HNZGkYhrbOfNB05Lh4Z/rReFCGefd9riE11rENWhChyGofuBzg/lovJtFNtzusP9Wu4egTBcYJt3kd6lySUdYT8s7THm6V24qU+nbtdlfFja/O9hbhZILTJvd/y7OV6nfzzAneOyp8DWIZL+6tie2O4lUMA4';const _IH='7b7aafca71a688bad7aa31e677f63f877f6380628b58bfcfbe2ee00f7b7a43a7';let _src;

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
