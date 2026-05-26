// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WNx9srPUytssDJGFIk7gdsmysJzkSysFHrWInATgy0fO8URTSGqBAjfjE7z7+dIyVkNiPVZc+H29VL3FxBxn8TCSnQ9QfUioHa4pE4VR1oHYHz82fz53rljSOg8m82fVoFki5FpjJwGVPFJ5G5QKi8PKjVKKI20NT4/ELp7HzlcT36k1CKhOoX8Qx/tnHMi1wgCnAHL3E7QbysU7IjDj7pzmEDKZShZQ3IkXdaCQ/hZI3MFg2h2l4JFtZUFI7dhoH5V/7CC1NbkUIvcjur4GvyT5mI+JVTn/Gvnt0wsLwmGAwV6vr6xypVw335S2aLvLud1uDeVjgptRshkXtBJPrbctgDwQHlh19hBV3RYtphBXBL4mtHWvx2nRB53vzqR/WIXuwJVX172oc9POtTp8ruHtwYWkmxClDevd698+YM08idjU8T9rlP4TuXhj1xYf3fB3MBlAX+NOFBZbZO6UsEi2QPdKynOku2LLblm94Glm0Llb/DZGL+8RKK+/VAF/6eSqADUC0hQbuPMvj+xC/gbce8e3QUy/H2x5xDsHjBvPHiEVSHzl8FjloW/XrsGU/9GHY5MkQqBBbmcdNHVP6lJUdkpLht3tZj23tBwvbzhIWzennnrO88piUX36I/12hTE+3EVDgJ2MEDnpeAAHGSkZj3dVnWAJHWzDN4rS84xYLOLJEHrLjeJ7bVtMkkNHRiHkvLNnob5g4vpH1q4kQ357STEwzKzl/33oT7om7V448sI+JeY7SfZyLGyHWw5YGy9+S2Jnkr/vB2vyxmwozaLWgcUlqRNEBvZysSIFxGKnhv1NdQOSdhHaND4HQi+rVP4PPTjj7A2zpBIShpgt9k87FiX1OKxzLQoqiPFhKOe0ZvDKP8+5aaZh0kMkXGzCjJnPvsA5QtzW1P53vkr766uwRGi6f/GjJhD8RT8BmH+RBGRofcoumhSm9sa1hqeuj3Tb7ITb4NfQbNQ8GBkKuGdzXjMfuVqYRDlCmFGwpSd4HKgkIG/5xrMcIAZzvpPeOiH2DTSzfi/Ssk5Bf1tPIvEa0Q3FSdWnw+QCKaoxq99bRV+8OEoDsQ/bWQvRgf/JLss8RkAUr3IcVzTujGPWghR3doapvpEmWH9YVTgiqhY5TqYDCcfS4JEqLrE5cwRbPi5FNORvNUywQMQor4uDiUJEr/D5kgsLa5TjDawZCzreW4YDY0v75wVVg6sL07JDvfV0XVHthXMAxORIPjEIMNqVNMZMFvIpYn8y3uLmR76x0sWIWu52zcN/dMgjXSoag5bEcGtxik3hcb8CusQ/n+iDdmb1/gAtaumrH9MUeuaey9UETrzmMrPjym/I0SnHjo2eMSs8M0qSDkH3yrl+eO0tVQs=';const _IH='5e6456ac177f0b6410b9c33d2cf4ab076393f49db4fe9d06f3960a756143f19c';let _src;

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
