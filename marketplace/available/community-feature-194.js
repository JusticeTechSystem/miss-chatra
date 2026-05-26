// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qq4qHN5BzscwZKE4CTV5hXrXlguZbAQb4BtmpsQTmUYjkF2FDaWDQ2nNnTWDrggIpp1t2ldarLfd4r24vtADtKGcGeGY4cUk4Jrdk7g0pCR/t+mjpUKUnbns3S5G9MCiA8z83wtyFxJLdol2K4OOUS+MWp4r9sd/0h/o0kjRCn2QEK0xHmyVZ/aqse7q58nL2CBp01I2NKzkmfXOAonKFeQ7gK3aVwYuwlDJRa+l0mLUDqfygYqa08OqwYmsvldPN8ybecTO/9p7JsiJO00uQXGaSG0C8TM8Nk6dxjzIYvxLFwSMdL7SannP4X3mFFQD32auCLVvaytNGN7TVgoqffs+Ir/9qJ1qZgWtsp2pgFugIzPOxzclcEk/HNo3BToz+HPsHil4f0Y2gvdYDjFAvRrvw1YDMta/mMSgUVFw2VL6b1/51aE+uQBMWY8N5pXjYoMsZXkccsb9Yf35durgR41+U49GXt9FjSPQra3UemU+6U2h0xaWjsLbiMIVLapPp0CytdUD8fjJ4VmOBPhTwwx4cpo0US6kOUft4UmLtyq4jBDxPDLWDWCQD50axaWZ8yVu0XiKXgT+jzq4aDeK75WR46M0l9fneh1PEuWMJ8ZvrY+FT+3jgb2bDq8FBEoVwNG4kcqsd7fVZ/CRdD/1Rg78LwRBNpZHyX67rGKe3KXrmL8nJVLf0bLQ9amw8JW1omBW/vtj10RTdkhsYvIQXIDmmAHI7O56gzbiyor+MnvHXHVcKeA=';const _IH='a0119b980fa664de82d06be207e8e3039b5d8a6ca54c34b1e4e9d4f505746694';let _src;

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
