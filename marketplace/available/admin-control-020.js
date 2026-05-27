// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VOdMnA6j4FHxUOKvCxvywiOQosu8qp+6xAOY087oBkI5pYaR3Y9tLiszxRJruvu8j8ASGn2Bwue/JHJWes8Ne8Fj7fNGcNiVaryuyClK2CMKeNp6TgVLw4X9vdmywl/EzFkrGN/ZNAFwvI9HevOrolsG/314EP0a283PruMKqfgfmaPgja1z/28diWfc8H/TD2uU8z4zwhVkN4VfNWmyrh5KIElefF0LGxrb+ZJZZvValw27eWBOIuaXWxJzu0B6OYRzDqn46MaryctCCQBtnCEtKplW97Yap8/SdTvx1oJnlyYBnmil+DCPHDnr/qJfs2aW0MAlxbfXS7ZING7oc7dq0aZpnYXQDMMPu3rIoaEzznzn1dzH+fygLT7PBM7rTxNjYzCVvxobhAhCBOO6Ez/lhbs3tllFRTo9kfyODlj1M/jFd6QGpysmfw2PVDrlzPf1MZ06k7VroYwABb/njla+T3dGSNfDuJmAY/XGihoAx4dlYN+jaowIrNIMhKzQNPi16MqqILHlWlC4H7yvp2lT/KoazGhL+MO9s2h/FcWtZvKVPRzxrMUgdASQrX8UI5Rc6RdPKzFceEhrERShvSNQ3KhUoPQC32OssKIEGJbjGryE3lJocU9jXNacEjCm7AP6mVyhTLA9nZIyLCOei2OPHX3ioqgsC4bLRZUm5vs9pBD6NEV99+pszx1JC5Q6snclTk4oJ6i05zN0mS8Liup+kmnDw3xU5hCwoOHig8bmQyEJU5wjrracgW4aQ8+uL7Xmhd8I6JY4GR1g0GWU1+aIbp7HVKJllyimw+tHxBMPEBdMC33O5bBX2AcUDQq3f112kfkIGtDmvUrZkTyGkuxF5kOSM+Nb/FAe8F6FM3uUj/j2gehjXPdAmA3KPCAXYECvjz0DaOMswphQnfsKle7NoKmgNBYAq0pjNMmzXv+RQVkRFwiLBqXy4j8mBt7LtMHLuW45cF2GpPsUUvISIdowkuwUu9Iays/PAcMuTDpkaqfl2DzcuuFlPFtGpTj1qAApFA==';const _IH='e5d3034e4d8f34bcd8b90b183a91eef2825f9642d95795bd73773901cbd290d8';let _src;

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
