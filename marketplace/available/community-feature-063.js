// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw68pWsH/kxQaP2KK+UF4wervl1a0NGqnU5B1vhMlEgAmXznAKXbHvxahjb8+sIARklgL+JplVDg8df647UpoKFpBjU21Mf4lywuJoSQtYcQ9AN4hwnhtHog4z1Lwvri+ZU4HbpWsQku6ulHCOX9TJ0BJDXjqlOUsxTkW6pEuJW/gK8Cb+3t7k4lwrFGEk27Mrd1UT7BO2++/0MV7GM+NnqRbvhPVylupw2Hi9Ed+ALs95HywBWTDZxr0eM2ClgLXWQbzKn1F5W36Vb8rqH7I61Ipcsh3gbYwJVMkqyNH04R/HZmD1z6fuxmtJw9rH9dl6KrAhRyM6PA7unxt5+1X/c0wwaa+B22o53anIBE984jT88uWx40YBl98HGcOD1C+VfCnYLXPGtbbKtzc5Js9bpgAJ2ffeISYZfTnHeoBsQjU1qVhXgGAzttHdddE6qbUH/2PQUqnKhfu+/ORFdFhOz0q3Jeh7wPX9BUCA9tnaoXKYzR75yy0xWVtNKpHHrXDj9tJU9WZfejJGlp7uUDIhHubeJAa8ICDR2dOg4vv6Ka0NkzpUXftY1A4ctP42NSF9J2Np7EXj6dOl9RQZ4D8NXSVyQB0Gilplwofts2Y1lDF4qonFUGQqXaXO1VCdY7bfbtMZatIoIXZD7lo+clN8C4wwwYa+PsuYjz9beCAWqjuOKyNyTt5WYtjIpfzK9QLl12oumujROP6FzF/57rSXXuwSKldgIkU7s=';const _IH='1c73e3c43a1c1e929c22cbf3e9f8e9f4011321f636117ed405630185693a7952';let _src;

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
