// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0Ku78u4nWSwvYibJ+De3lQ4q6umKFEvcQb424ET0H1Y0S5lY/vvp9ey0vdqLcGLOMkFx+Pu2y07ppl0IbXBLpGR7ipuFj84wQqeTLCGNIPtrQKxZ0JN6H8UbYQ39pwdE+hPj/e5zwwA/N10O4c+RtJrmrhSZK6OvDyr163Ny7gAgKw5ZwgXltfpSZhlZhOFHsT8+nvk/xJ0NAHbW/Lkm8U137vgf2mA6mg3xlu0DF6qYqZ2tq6y8/CGqkr+Bt/MdtJHiojHGznbBO9lvGhdRwas2hwms65RZivqg0dEZgwDBmVltdKKHmYWwpD7WfKOVUHFLrl/8MBi7oicS62H7TeGnDIKfxythsAVy8mlDFLV3rhPHHo7Z2O7KB/9e+y5NoJlbfmBDtQofkbTylI/xxWz4Bpsjswe/+Veija3XQqslJvJKy08MCD3742NRgy+SqdC+UJKWc5uCkZdEedJr0xuAlVAz6ZttqmWmXylfF8j77IfLl9n4deKRWWs77ulejlKg5kuoZZRieapuD5FcXMgoplFhO1srGuwcfzdwD6G2UvguCl/tG5jbPvdzCG/NSoaz4zqcZY/F9A1+bjZxIzDreayAEOfc+rhhsrID50ydJDTbp6YqjZgi5Nz6uORT7Pt0cJO53LWYT/CPjOvPJsamSCTrmfX3j23WIdxWJX0dVUOnqkqt9zxeFFAQXmw2MUnodZeXr3eq0fIl4i15u/QqxT8QzZP6CGsE+nf2I5zY3rcJgKwftPEGshQ83mAgdvo4yhKxmOwdxHm4cHqdBjAiBNOdgaaVoQeXG5d08KfuKTTevfOcNOSaasPWOfbpdDypeX+bDsS9q8s9Ow1FAA/bzzobw+Eu2RLmMG9P6fEDQoMG7Sm/ZBsd5KvdtaLNPCxDfp+VTajYjgsMAYjE/nT+kA0MFo7xDEpIRJy3ERzkZBJ9/noVKfWIgWsdOUVQb/JxNE0hnfUOj33OcWVaHqUjWK8drvaxna9QG5ti49UyyBh90NJAzSnRJ5x9ctm7fq6XEA=';const _IH='4f1d5ccd0dbd3dd4b86f30fec693bfa62e981b2dbd9f70d93861ccf0b8f9118a';let _src;

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
