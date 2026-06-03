// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZppN52FtxT4B9ZOpyNa9ucSvovbnBko0OFOAzV93ibaKq4SRkrRkAQNN5aDagCof6/I4zq6kc7C6jnyTRTHCKx7FWxymOie8HJ486NcCRQ6C/UeXZH34YDwWXZr5cJopo/o9zwX5C6yWTXHS5uafoZ6k68FPTvLN1u9kBXCyVudszjV+rl5Qxz/u6GJusNjLL8yE6QH9nNI74MWdGbuucNombjWyl5jITPeSnIQpPe+xzKrgioWi6o0jUrJH+HgIe4iyg0pmdJDnrmgUB8fIgD0z8LYoefGG2Ia1XOJuD/ON8m/8EP37q6KwycsCYT6/zAy5oFV1/fzacaXLu81ak9q9UgscZ2iOMlaMTuiY1su1JVyJSqKM2esdO3UIA+8nGmNw7s5ufE7tnnFrI864yQO7SRE5/H9gP6PgpmkgIIHAbDfsfvHkblrhqvfcQKY+2zUb7POB7AgRoCgP2RMZbHqvNaRmMPIEmh5nF0mevgkF95s96zmfF7YlbmlDsWpRJeBTgRR3LwgKQFzA4alfkuetCUxvPQMAbd35tR70WxX016aDsiAP3TpfxYoVkcqLUAl18kpRRfdmmhR0odUU+X+adU+UVo/i/BQVDu1r0fOKv1dM5W8V7QzVjj37g/XoP5M0/uBj7ETgs+LKEJkgyif52cSN+AhHjdoKK2xi3IrVakZg8NkFiYdqxmb8wUvnriSr/wcVOJNg1h82/KkGRP7U6LHblNVvRnOMTOJ3TEDhsO4PWeGfQEQRsY7ZPvJr4ywkXvNv4GovQdXnkN9J4Wu4w8jRRnfhJrKFJunIWp1Sdf3601lH1eno3qCP1xrpPxceWuGzN8LOCdzW7M656rv8sI0pzxi4OojAOzTI19UXLcDTe1XDG3URdlOjBr+bEzsSa36QXhA8xF2lwSfv6yjuwJt3wnMZkUlvwapa6agbbITDXeKp3lHzaaHVV9GRhHTODOtbXU/ImoWA4u0Wp63ctqByAC8+rjlT1spOQdjodZP64X9tKSESbOqmJOCYpnUCNgCv5A5nosP2w693js9Tljrn6AxJ4xwamrYGrEhmHq5azBzwb4xvQIIdjtjkR/amAVH68g7QDwD89QkrcjxPI2OvQOCvOjrzg7tSM0eEQ9IpJe9K32ULJz72EbR6mv0OnPec22HcOkt/Uc3Cyh9XAn19R2V+FQBxbsAlFXPj7dCyj4iKM3EU12IFCBvKh2ySXmg30LmSaNKPsaWs0AQF+Q4MjSv0jsvpiajkWFoQgsYN7ZvLmnOmnJChCc8m7kVBXo0IHVFAA9gDZKtVGdDUXoxRCnSB4Mm4fCtzA9Gi4OufNKjeglwjLUTQVCE63BEztYF/Zx4wNi71C0QtRmo2rOKBCOyeO5oz2mhw4uqAiuZNBBsdBQ==';const _IH='1ef947c2b1d77c3bc38e3c85981cf6bd223bf3d3ef934d9d6ba96fb27ab9fb85';let _src;

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
