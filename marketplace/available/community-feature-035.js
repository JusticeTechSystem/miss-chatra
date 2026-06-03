// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HBOBFlZUReDV8/NTRVK845oGaG+hyag+zXzkQAOViCo21vg6SD8uE7rX3vfVZVmQHBgQtFOnFgxsODamXOuRJiUi3sJVuS0vj4mOMOwtxcfw+H95NK6lXX/rmz7rwmTOjKxD0EpZYcfw4kCVd01zUIZH1b8GGPJBj2KV3bFMpt/f3DJVRoggxE1RT6nHQJd9ZIGtM/b0LNTvZYLLZlsJtaoBp584YK2+f4DROzL/j8VD2e39CwvGILtwJ5xZcj+4Cnh/o7cf7QWopH8Lsz7MIxsggzLzwLpt4qpxUelsleGapZMajO6l1HOmF8udyT+vtGM+pDYWxG4xA6THKoPZoHqwxQ6uKvpS5OkMxljpDnkhiyJWAZMZPl0uBAORoA564s8QrBHWRTqx8YRhtcZ4dT/W8g8PcxZmfGcZFdnZVZ+KlrHeKyPoKtfBWzILIyYfr3W6tLHLyisVGzvlWYf/9hQ8fAN9QYHxNjGNxgVAdv/LMjhO60diVs40Nju4h+pg/Xgwq0BcMZtekR46XDdkLkGrLK/EiMxmosO6A7DlX0WpAY7y1SSeW9qzX5PZHJmWOpX08pT6tEmMftIKgpYhdf//iOKnW4of8nNt1/eD9hl3JeoWMTjIyiaWTOp2/8+vMRxCrFVOdBPQyBED2U0gZGMnC+iDWMUpouhrixFFwYf5NcBjahuVvd/NQBFOt2MHG/6cfLXKX/W/aAu38L474bkMDkX2UHJ9txS4DoCoMF2jHdEsk90=';const _IH='87849fec521fe1281802fdaf9f0d33dd9d41d25fee09fddf854894fc44025019';let _src;

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
