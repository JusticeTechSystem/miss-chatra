// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLY19Tltxdr8JqYte9jiPPyh/+9+F0xJdQLQ7RVzLqfqOOwR6ruKhdrIUj3+16CVVQI2fCLrEnNa/Ib9GshvS7+jRKzgfAlzpCELC9/6p3ZDzrCEOuWDK4Pw2q824qcer520SNB9iSKOxrBiNQ9GU+Gxnc/k/hc8jChtGLIlrOatMsmdrcDYk/SBXsHkpPf1CdbESpI1AmKUaGpBQm4qlMb26dCLYZLTynG8FaUvJjwi4XuZn4HNuaOLqG6+ofy9Z4TnmF8VmK10TS2JGAP2DSFLs06ip6ryL/wbC7yefO+NMeu+lCdGAkDytDT+ugS+ZaQh8pZbUpRX92EafTVLvuARRidkP9XvhjrQAZNIZzhjMS6rMFaY2MTL7oNoagakI2ws0LJyYHQLpTGxRQUhGFMwov+bUnc/GMWUsbCdkapHoWxI5I0BSH/0jCw6weNlnBr1gGe5zI0VHtWmVEYl76rHiU7rfHx9cmXu2BhgcuLTpysA/VAui+9QSyHDWhBWS87/XY6+iz3mqodM9Y/N9oX7ZEC7bFtSBkHjcY/bJsTIqnMpoDeuaM5Tx5zpOTqraIakcNCmNO6nbJFx7t/WdgiUSPBTPj8z9eV+r+s0ewSfh2n8rRf5x0dEHWLG4PtZGzrn2n6EBXDImmdLigIJaCPGQnO09IrLnOx8NfQpKOzIBMeshjgZcWtTvjPNRhX82fr7Ojh8RWu0rcVKG5si/Yr2fxpEVOwRGe';const _IH='b35f7473a51b8310f8f417151e949a1c3f551f6518b17b4e56a43d1dcd3f29ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
