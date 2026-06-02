// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eCEBB8x7hqV8Pdv/HZQr1ohgOqhGSxPQ6hoZlEMSPM4h28QenVFxiaGKUMKHlIQDvNae4z405rPYDWbjWb5G5l+MxYzXlMF/Q4zftMl9KI+ZJb0ukMuP4ousWuzlylrPKZnCE+fx6zcwZcxC2g8oJYpb/oPNmdyGOX8LpKGbpjli6hmd7A4/NgEI+K+C03ayVnEJXgMHDP8UgRNn2+Ef3ejxHkchxamN7/ORhQcE0E/5ytAY6iB0OJXUSGjCDFLgQ2wzr39ZI7uDjNMPsy54t7/PazJRvbbLMgt9z/eILRAepWPWX3InodSBZ+mr0PKgGdJx5XP8txCEWAwlRNM3vrL/uPju0j3D0sjB+VoxBmOAtXBRxEAMMX87Wu2Hm3LIxphJqJZ7goOMGK7VPionAte2q0fAvMHpd+xchH9q4Pz05sN8ckvnKnjqbNaPx47yxTrqWA7h95I/Y8k4wm6q88yrGAYuj34ia4l6m59dJ3VJS9Iu4M0dfGlfZ3gbX/XlaiEH93+Xe3+JhN//i9jS8SN3cmfuNpYjsHXiDPylUoR2t/+8K8BdbfNJo8PwNRLY2ORmVzFBxKZ44cWjErCq5L/i/iSZroWW/phWq3Qux7qVOGoQ3I3Bh98ktf+zI9/EGVRA62uCL68CouM6Rh5oHyGppTPjKXIdjbdhcpMfK5R2nMNYAqLbfqxd7BiuWJQby5c4H4Mz054Hn8rAG2BTUWDGjpbjF6nCIa82JxmRWHj9UzlBgcA+tuxMr02F0o/gyAvUl9cDQj7s9793JSJ9u86K/r9Fr4Pra63KHRBcXbqOyc9uzIAybW8A3ehpueDYyGLIhRQREURrVAtSIQFpc0rpgtI6Qe97QJ+VR6AU2xam/81L9Rf8LqOqihA/KNmpmi/1S83auHg3tPYFBajda3CCXSFMnAzm47svGPSaVxRtPB97Bios7snbLnqRX1d7B5zXqG/ZEEiovjKQma+xIVDL8d0+5LV+yv5kRVwF0h/MY11UxxX9Rw28qfpY7rQiOpVyRBXgd4xsuTvARGPKufHOdi5kkKvJviRG/38lvf/oxvBTVagdz1juJ+WadtMLJh4HOPLYy97n0bF281hx3fO0N9Qml72stlGGjbglZYAUyUtw+HdQ0Do/90LFmowGer+eZJlsfmF4iCm0xyv2O6ZZrV43kF5qEvQWSR3pHkJbQBzUVFwRq6Jf3nWl/OvrrA0Ld0k=';const _IH='8363d8834ce25f01fb9d71650f7d79f39c82728ba7565be3e17894e8965ed65d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
