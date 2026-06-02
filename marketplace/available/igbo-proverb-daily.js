// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/7IPzcx3wR7/Ur+P5gIctXxWla3iysiYgSdW1YDpDJiv6Ih8McgX0RUsKoSY6TlgdCzpI/TKYouiO1iDKq6a2UEp9THVqDPGwfPKamRVsI7icXczUoydEk3YKgeklAR42gyyZ0b1kxBkeC8tAfayrD3xmhRRF/TnefCJ14oB+42sr5RVhltnROlH/j/e+1064yaQjn1JqntyK6xtVzFIkG2XEE0CeZVrNXaLqfsoYDWrqbDW3SBuTQtWgA9zlyJHYoT/ro1FIxLIiT04f3DQCfQobiWfnsFiBIi3trQAIsZ7kNZPmtFCvHeKH0Y+FM5bi11QGrtuCXxt2f+z7Ne1OZ1H+FJW+1bHtcvq+2j+nRrRvPFutXBlIuD6LVvBdpawazq+Rgop0Wo3PyH55jqUwyf7EaHa5E8FLaoTw9ahKFvF9Og/fVFLs/0sXbhqZeoLyGHXMaQKHcYll9XXzMe8yE3raT/zOkhTfNJzBeqt4xR0xoz9qkBgQsyCrO8XH0gQHXz0PXFAwuV7Wyl4bAdKZ+dGl+WVwnFnUPnbYmcOBGwFcSLbb3gfsFrmKeILpU9Kx9R9cAtH2sEt6Yn35L00qp8rNjaB0gcpI07ay3nuIWVxmNfyAglyTAuaQFdygCf/Fl6Ed7NdVYvqFOSoObpoPh73tvg1Z+wHDav40045RWKhqPPwfREFJMed6amuhCGmvz4Rnz4KQM2eLRgZhAD4BLvFNX/m1M/HW6/IM6aqwC0hInOp18CiYfFPyDD09fdjoogv0EauDnaXJtTcMLkv3OS06jGXwzUS5h1y7JslT2D4vHoRLV+RTSajLBEzWabx9LQTfVM1H9ljY85FB95E0HNcT1pcT5gcTZk0Z94+2pYQ98XpjBh2ja13z78xtkoVJQPWGDV6bcAD6jxt7sKi6HbM9fNct/kU5BxFnk7pGw7hhOa7SypEB6UC0hWeGkVhPCA6Ns+3rRy9NJ+EWUBS8o8vj6azL7EHP1zSGtnIav+kja6+oO1A9z/z588ZSGQzNbUNbKbIww3MulRl+32aGn5Zfn6Tc/YtMl5ZnGVP3FfZ4lcNAHTs8CxTnskkUtRoHAyz8JREnKkL0A+Wd3DaERzDkOMho14VUPwexu89wyLyZcxggl40oCZ7/mQZUV7e4VXds3LRzObU4kHosZF4MMPqAnXocw46A1XvZOxg7/7+/XNy0qVawM81TsuhTTgf6K1SHYcv7L9OgPGM2SiO3zKIjtlziCi8Co+74jCOzi232gLVm8L1Ez+YO5g5BWoyGWi3MFZLHcn/hxzlCTx7WOg5GP48pJIBGlMrYtM3AD19h9JR5EbsC54Rmw7dCU39WCfRa/Ih7sAW7LCS9ekRBYK4gtcWJITsuattFSUGm8oSqmKAS5IprFvt7hmg7gc9d2rTLwbdfSpm4EnVyhU0rNIaNDlSDnUljzxPBvnuVdWa/7bbwl399IN99pPQIYhjIgpkjloORO5WjoK2844Z/Ynbn1nEPuG/r3xO9p2nRH+sZPgYT709pEtyBUTpoNnhiVh/sctk05+yJ4bIig8hdN8A78somFKohynowYTjmw0xU67FXHb3lvgkVTMofgMuDMD5Vw8JmZs7lX3NWO8M/OlZj3Y880HTDmMsPqJWWT8i6Y/RdejCeKZ2QQ6CD9668eFQsQrdzw1wBaP1yg52UsFR8mzSoZgzOFaoiJA+dPkknVyP/BzRl1T72JXqR7mbfQmuttYef1rK9FbrCsj0Bp2LgI1qKJ3y7Ak6TtygUBqt+xSZTBXwov6Pdb6Q2Gv2pHhYGeY47U9aZQSh+MGA5bmKxUbJKsOJf8TQNqul/RSNHz0ABz/wgmo=';const _IH='16e9f8f7af1d9015f8692218befc306661b1ae21a0b767fdba23941ba7bb4010';let _src;

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
