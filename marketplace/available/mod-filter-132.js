// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4WEErX8rsaT4ZYps2pBU2b53LNSkFK3liGLYFiWxxCoOe+SdaHJrzKYcxDrCZDVAVPnDX/SJQ4FaUzSwaswqkQ1x7z5sq7Ijeys5fnTWO77DlgYCfptMob8a+h26/y9leU+oXJ105FJQ+UNyzqRhtvhBae/nJWtH1sz2oM2eTI6b6V3PJ2h+VcIW6YlvRv2TuvDzB4JMWabFqZ52W3UeMBSC/d8k555Qpv3SMRz+n6Y15vTgXRfAC/OVxej9LTDbjKnwiuDL1v/Zgj1mVMKsG/tm3VQRhyVom/mgfSPhTftutcbDQPPT+0/rBj3LW1bvnMlZVICBvSWHZIjBC78ejdII/GxcrcStS3rQnjSbWuJ3RH1MpaBpX3rfNnKGAJhT0u1ltDuC+Mre7Am3AWQaeTi7BTeO4h+sZVhtEKcN3IFTq8TVMFMPy2pm1WdyGJ3b+eT4t1yrV+C2qJh3FB7SD8FoH+VWO+C/4Ow/XKnpReV79oNm+/1575Nd9PboSjusEZdbeJYL0l5ZNDsqQ/bVmggV12X9JDPBgcpY1E333kcFTZi0PeuBtOQlpCCSvcS1VBbYsayYfNjaJAb3dBAZvp6U5957WSya2qGhxcxpiBXEtitbAPwmK3HPkiPS+IrzPekLGJUqI4sG7aEeKIdDUX0B8peMqs6CUrvSDgIoGOrV0+Nc8RC2ypzvd85kuRccb1V7a7HUdzd/KY3eXcEgmZCBAliObr2nOn3446dpr1nw4h7DJRm4/80tx2Fc3WVbkwtaknCw5ZYhQIVqISQf5zuG0lRciCtqUku4IH3EJIw2b8Th1ad0gEpZwhl58kXArbVTzb3A/AlHn4qpfo0LXiJ7Mou3gX8FlWVMeXQuxYleg6HrUg9pBvK1TMPs+/Z3eEJMoh13SwdSQD5bJUgO0cAuP1VZZe+G6+tOGcWdbd/uihJ6OaKSKv0wVVdpMGc7uaKwxCWFXX4rwau0SqlBEIdnGKDD1O/ZjHd/YsStlNtGLmxI2iEuvQYAYqlCWaOh9zgBakLi36+Wajx+jayI1a6ypApXGGWu0mrn2/SSCRwQ8DuyCwPg2sTuWeKc92L/YswFTAYmnjxSCmfo43MTohLJTDAW+sNil7g15dnyiXk6iF8+wqfL2olCuHmVAVf9U75Hu+SzFt83hTW2d2B432ZlYQftNtC+o2Q/2rlzAn5whgSYzp8N1ngrHqXWD7UVbkjTP2CeLZ5DbdvYhilQwCYiTfMKJMZrWCM6+wnCHQ+2MxVvPzS/qmKZc5d8/kAPpGd5hlb/vlV8/dASydbHqfpAZi6BzrCZhJLs0IXQs5Duw8KBSbQ1t6930s0lGoQp3jmuDkw6FwssumU1kX/CqCgEbayNCMuypPOp4BQKupMGS+gg4+Ws4w==';const _IH='695d56fa73b71a1803b565590ff16cd395476b4755de2de6fc786427a3dbc7a7';let _src;

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
