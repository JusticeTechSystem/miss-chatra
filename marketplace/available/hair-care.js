// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1qjr8noixEfvYy7rQ/AppCxGp8KGqZbx0+MKthpv8f+hm3FLFn3/6mt2zqPXj+k9/nEHck7Cb0m0eFlpM6h+TPOdB9ZU5/oVFK3+KAzmLGMAE4fueA+X3+8q6q00vnhU9I9ONJj0dauONTm4ytG3z/PWzGGQiGCJzyuxMCkHBLksEh8OJT++51dNM2RT+0qf0FrGC20kyEnSah3bGXCKQRsVYAH5QHl4Moyfay6BB5iCxxD/WR7jqY0yioRh9ewg+ingNACIyLa2iR0frn3Jx82XCgs0wHMqDtPze7dS26tFd0iD9YzBxmPX6BmEBxlb/jNCtmZioeQYftLEueEH0OyRg5AcJ1rxmu2j+/kY3eVHVXJM5ZDuA2fNd1T8Et49/CkgQJUTqjOgkNusFddexFNM8nhbAoS5ErBSJaV1qalEkajd/yqdbinmzAd3DRswaRizfIA3KIIhfiL+mZP5oRFArWUhLrfFjE8ecl74rfszGN+NiCx+QoIbt1PGaFqrc0uIc6DDhEEkQkEtCVN0+fX+R3152n874JLtW55HT681xWBVhs7eOmyLc8VhAl8ipcJjQC5MSrV1ns+lBum4Y8N/zDKSVf6kWiaNqtcoUugJf5Kx0MoV8whMHS/ridvklT8+fZC0AP1wQ6GlbW32Cku1yuZleEsy5yQUkuY7ZCKnOO04ClOJIPCtMREG/0WoV3b7exc6B+TkbJe7cOvMXacXGjycO5Svk3frKoyiTwouRaa66nYge/l/FTmmNBB9P4+N7Nd8edWLx/kfnFTrdSlx64cPuUYsEytzn4E/FZLFtVF/L7RkHAoEB1O7XYlIx1q0nXIqeWllsOnMaqYzRJxLVrv9utAu8ELfXljDSiizbbFa61YAgZ8D8Yz1ppQ+C02BXPHyZLx6y+6G+s873QU+/ifBtBWo5vvPK0zeFL2JbtGyNORb26l8ncPpzTrK7NTtZEqEIiBZLm8XsE6Vs4acYonyEaHEUuc3+jh8ke6eqbLeTOzszh2e4r7dKFkaQZodVKjb+qFy0wwhmRcXrpqzLsUwBK3KTnyOrderk+yBVGPpKB1dEZ5nXgug/PkHrTRzNcrD/sK8PSNokhMU+IXTe96Jevs1WNGHWxDnEMdjhdO3sJgIu2ImuARNzGy6tF1r+JxWvo8LVYIwifs+b6I3J+FiReS09QEgGJIGrkjhUGWs/KTVX7UvH3JZkFq+J2HSvdBv+HfUIttL5OpbrcAfFwNEtZDunA56fMX3yhrCPLzPYPaXrgEWQzgd8NeKcwhUX0EhzebQeiV9LeINAN0SKfM+YJNZZ7FgLS83B4mFioGVLeuMdKpuKP9bU3Wqt0ct/IfWhtLSYcPZpfLQOzH2CZRia70q71qnS9Na/3+crROdXV1VZ+v4pvCKuzjZby/QEuilrYESACZDSBx+061e1sCezvOP60vnrWRA3o+3ldc91XHVHVoeFWUp1H5Hs7VD97U6rgKth/xSb97BLYyngcoaTYYXONvr3/PayvSIW+8Qr1+c9hssJFanMGlPtfgp7vbxUYbzmcnC5m0MLk7T+aMLPLY9tNVmNWs4AaAlTJoMtu3Cso5ZzMP8caXArsCIfGaAgbxeOziHk54RlDsMGBurjLUWSG3zNMAeZ79e3xPQwNY4GSZv4pxXcaeGgm3zOMy/UOjiO7Gj2c4GUF/EAhGKNFeu3bv2Zs=';const _IH='7c4c4022460e8f82707630e5b5dbbc5104ceabab963b2a3e4de6d4d37c873ae8';let _src;

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
