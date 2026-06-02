// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G40MG+x6lq5R48RxxlNxu6k1AmdfqENt5nnBI/+DFa1Hg9Vufv+9MojftGelJnqlYgRN99zkJm8qIl2jbNX7ZznvvZzg/NGfvQlYz7fHB3vegpgReIbh5GIZM/6AXHIF1uCIzuXEbd7Gr4VvwAfRNyiOOOrw5rWY/kF3cTYvU3nqzEteYZFoFs2po1Qdis4IJil4LuUlaobvglHzLY8gWsCJgOTpR8B+u0R/ANC4yphZ080yzzXC9vFNVjlrJ3Lk9ZTZjMqXCqKjnP6i7fsis5a5hWA78WDZ2qlcYTJiD5f5uchcH3dg9MdHobssN4PIqmlLX6xFytu5SbSrhkIqQ0jAx1XmJeZiKkM8S9J6f1T1WyFMYEJBUMqylqzS2RlgixyIDZxQ8cG+IOrxlwfwaJkBFnoJFVtpUzY7KBuFFroH8G5DgAvP0njfvna+TO5W+dClRXRQeIhcGt4AJ3EGDhTM0TNcmgkw3rnGXMAjifuZh3jFQBmGKZh4icQC0WoI1ZF79zAF2mcduiGi5Z0S7II/PJ0SidaWx1or3KcX5Jy+5HJ+Px7WPVzRJXFhDrQD7XF8FcqL2St78aSb6FnJN0+HAdmXD2v4juV1y51C/Ecl1TwlA6ZEUSipvF4t/aZ2MLBa+o72guDmhOZ2v39i9AxK16VMRdXHfj6KWDQ2z1xfd+/cQ/kputtQg39LTiRfZ3ohlcYN3PXShq7/XcOoLMjni9FRIjVzCgDEiyUBPvGgyNogrG94d92imGE8T5ra5uiTn8u5HwFNU3W0Xwiw1fK6N+rkztLpOLg6NAaBmu345taaqLdsXdq+QQ7zabQNzxb6GJnvbD1ZoVIINQs/mia3O5dl9EBaNv3naQBtI/ZfawH3llTe9irIXMFP99WQqajJ1HP5DNwagDPCk4weIAapAqdQ3Y7WLsQ5rLUpA8j3NJEbktsEO3QonRsHbp3kjr8Bn6s4b4SWawf2Tt038AipFgyTkcU6FGiXu+b63SoU0Ch71jBt61CuJ/n4baE20Zg0kfkPE/aspzYcOF9pPBlIlo30kDnyWsUU6bpcp9DWP1Vtt1Q02IJ4nqMlYjui6WV+A3YCfctI4AVwbOQf76vSuGiLLx+k9IOmKF3SMyfMLtafI5VjEtO5PYsBUljah0NBN1ft+2m237bO2CcX6Fb4xyVcrLTi0cuICE7mK3XVEQv4vdDGmaxbcxmd5ZzlPVr466ma3uPxpNrhqvVym4Atd4O2ADQe0R/xsuGBYqUPepDl+ZyipIFCz3NfEIXKy2LINCQ2g54RT67xOBwRKuxj8JpzUHYbzVE7KYAZg9dIdtOfK849wuGHGg5SJQsVGOPGJr9a3xrkBk2hdeFVpvltVydfCCCVnHbC7L+J5AMLsWrrMiymMrrJg02IuH1tWkn0szPHcigRIvQYxBuUfRosEtllwWSAlRsiEtNh0kV7FDQuT5/5OQ==';const _IH='3e528591c5e0d18b9d3043822c90babc3e49c887ef40e75cd19bc9dea1da34d1';let _src;

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
