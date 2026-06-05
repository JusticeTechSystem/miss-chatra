// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TFiNAoodi9vAjpJDbh2OTN+j6ki+97khxW7zwHIvLv+b8gXfW1O9oiOMcZ5AmOqMrTmNJ3htRMOjz9B0eBCIrh1yIKJ027tAdPW4VvhOlpEeANHhqxNoXuED0SQVo4l9K/F8Twcv+0GqYBJ0XGQ6QMc/8Ly99twn2lk+UcLszFRQ7gwkcOfmwAuEBN/sAtWvp7KqrIZTUcWeCFgCzzTVK9UAAq2yDkxwKELYLKKKSoW5b0XNsPN3dlAUzgLdpYB/3fJPsMb3kFlKLQqTIj1ABAP0Sh1sRSVTnJikqMJdSWPgqBzsT/xp20h8Zj/wlawYvyEdVwPhURvVVI6j230RED/A7+50RJaw0Aflgc17HD/REp3mC+lUgwL1dsE0oGuL10ZBBdTDyF5JkBeZfjPC8m8s//R9JEmxXBwL6ei5j/WDiIMJpq2TodNi+ImN2BvtCfGcXa25VyUUFchduoUPKSAESMsKoaT+dT4EovrJTOcktaMSBFSzoYoVS9KqAek+crTzj67FgppfmWuluaaR68yluo7/oF/QYF7r3kGh4AuSdW5/3E6oPMGRgiDcITkzfc0+PUP9FwwwWdcg0WTFmqIGJxXOPRdrcymVMFsYHIXVd/125/GoUVe+y3K0fXeNxbCh2rZRNbNIdqNBhrG7+/0XXGpmU/OVRoMjQuzU0H+bkG1PhhrHlF1Ry/evHlGsm+hYgD8nDvsaWX7WMjM3pBLgqZJisaMyc2Uu2GUOiRMhmQ==';const _IH='95a96d83581bfd396804301cb189592ff7f5934b79b7339c3cc5ee0f24937661';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
