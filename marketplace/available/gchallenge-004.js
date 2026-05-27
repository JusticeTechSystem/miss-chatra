// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vTK5/Xwavo0uulJJ/o5PG9AtZ2AlcM0JjqOQFW1lJnS/OLIKh1O1ByobZMVMdQ8EdTModbaUdzW79lJPeHL+TyJOa2yI6utYA9feNHDFpYmnwcTPV6B4sp1ENdr05gj57jQMZnBF8/fesnkkfDXwfAuB7dt8pvpx4T9e1HOYbnKBwCBntF6y5XheHIIhH2JI7vJZwkgidfSbIucxfIOYuQjfGOH50NLeW/UvVCiv36TInYJ9xPwf9Hd4hSCC7GYJb2WXVHv5NfEw+P5h3e+Qw56IU4UN7BWUNVDW3zpj+WHeKh5J+EQFihG0+McYGgZfPIR79/tIB61hY9JF2gQ+EsZybHykeNzEZdChboIbCXBPtyXpWzurrT+TNtvN0uREF7k5gN5OSxwc4OObLe6SGbEtmga+iipx6MSXZ69qeyNZybzuWsni/NbSY6Jy+5snNTZ9ASHZjHXU6b6fJZz+Yogt4MQcVToaU+8/piuEJWUL9Vlp8j5QWoTqFtOoWasX2UHZxvcBYIIPL8Og0mY6ucjFJCML/ya1V4ULimX0+f4LPj3Bk3yuHHyP3NJL+VBGMVgMgAosfjEFC3p9r1uDFyYBlaQm6WnZQ9e9oUrAoZr3xwRk4UIaUS9SzbBALow=';const _IH='5d328ecc519bac1e590e76142df14e3c8b90c29059805dbf7d2cb68a43fd2111';let _src;

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
