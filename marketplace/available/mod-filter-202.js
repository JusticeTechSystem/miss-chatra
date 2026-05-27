// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8MuMNhX0i1XqVPWsfS/RyQXRowBT/9jbbA3WPQ53NGXLPHCkoeP5+0SdfNOsHgP7r65cWsBrb/2Lx1G1YWTxZWw1c9AJEQzJvJUdKRt4aFLeJadeBWhJnNpyCz2lItkejk4wuP1RoKpE6EFYMrsC+C38IX627E0rqJUDMKWFRYo77cmh9qh2OdkU+O1UY4ixR4JpHwuQ7kD4/aHTx5GCyLS4zSkwpJ0sqbMyDcpYvM/gulBkMuwoJrXloZ81CklsS4Ryc6NKAgV9G2PV+xNOKMW1sdwgvzdgOPev94fS3DpAgfKbLea+9QOpGsO1fxOStfWeyhOhFR7xUn0GnL6DkPbiCecnwSUczCPHqvyJenDzrVyFBmc+DIRTiFYaMlZZi/Np7mJ1Q7IJafEOy1VYKnpG4vpVej5I6YBJq3M7hsLDzZJA75IFpxYMjyiXXN0cxOMmT1nn2qTnYKgi+UdySVWlZAAQx7AGiSryPngZIPgX1TWEBve4SFls6TtndGJgqgnYON/UpFYnmIcW5kkBWdY/x1HgKDQFXcd7VbRv3qrKhZftQ58N3eDxPpksDJoZFfQ6U5Vmw/xc04BkdwQDvjC2o5Jak2zZ0kbbWO4dAVthpbim2jQhXho8DYIkdonJvRfzud0Y8dyIu2pI/cZ4COzLovk4SjZqfioeIchCiDFkfAUZafkj/Zu1ShAhabKSdlzCntg1CO/MBp4JDDUxRKM++lh5x8CotUbKrgVtRqfMoPau3gT6fyf7dEppPmzh6aFbGfumXvysc7IO1Ri2CO6I55KEdrxhuAr/DHnz5X89o0E5m7vFBgljjJfKqYk/ScbcBE9n6v13LedjldrYFfvC8M9IjEVrV8H7LW1pRhwHdpsfZDQVXJJ3DqkSUtaEpLIeMFySZDCbZTjA7LJkVHM+oeJfZpn2C1yjKdZU9fCCmwnQOOwL1WwLW10Um+KbGPT54XTMpc1Cntry30Pf2Rs+f5bqERXLS5IqOr5iHIYZLJIgzebV4r9XRzSMMXqMnTtOqqA9Udkltw0exEh2U2NL1rsB3cjhGNpucK+J29oFFhJ0IALihHTdp8ndJA8+5SR+hHH7WJ7PyoiQ1pk8XHQSLnahn/ANxeVulgFR/NEPFSWMV4HwgtwEATSVDuDChK3WS4PrIqTZ5zYuLs3zoVejPeiNdv33MPCwmk6JHw9z37KbBN6bkXJCrlMYk4UKTqPvi3qKD3/xI409qcy6KfBIIzmuJ5t7DIvHJAHdCL+gRRCmGrj20KHP+GrH/VHz5NgWmmau1o++AdoecWxQbV0Uh+aI8qThNzCaJX3KtR7bE9qioaLC7KESc3qUOYc614XiXP/bzX684f13lnLTz+a8VAvSgCdlqbb+0qZditLJp8CduhBCqg==';const _IH='d0e1f9273baf32a62335ec905883a5b3715ce13a22308b0c5195ead508607c12';let _src;

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
