// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j6eykTq7vtww9oXmQgW366tSZj4ziGstYsKt3/6SC0ysQtVvuZVZDyekbjZW5cNTZOf/3l8qwBON6Aboa/7CwmJpMfhwRtJitX7rt3vsrlSmNdAUaKOZtAJL1mCg+yHWiRc75fkWkiTkoRY15cTA1CFvOBmDoSOZZePsulJ67sL1PGBrL6ZGtePiL9esIS4rOwMsYY5foJhfzmv09CxtdPVpv6LQD70KUxOX4oCYJ/hNi0TKXtgUDMw7nugKNmLWuKw5ePRmn6WIJi62m5WjwnWGLBmV/4VrBAlMNBSWQPBKhIjWLDxk9L4dCQWNAvdWaETkO5u+aDn896K0mDiMMnlwCAnUIVO3CAT1Ja2aWUQzvlcq8vME8St6cKC3u9Au0NhLiZwRo5BvJOFnms8qH9dDJdiHs3wRtw7I7pOOipqy8A8hhPPMtG4cUfF/1vktQvYUgz7czhDJzV0v+AOh/k+tWGSWcF59ts0E9O3nq9J2N5gYSv8iG49CdUv2uKnjlrYH2afezMVpS7lWvs/wOMSUEDmLSQGOsdA2Wy7N4NAMWPyPPcAkK25p4Sfq0nlTVcG7NiiPcRoAZG5oT0jxXrBU+Onz0mv54m2yA2sa1TbZShqh/TBejAE9M3d7xMbLaSyH/dJcUv6x+MP3+IxLqe8CdJ4H35TSXEy+qt03x8ANC/hgElgqb73qdJVvZ93PyU3KaLOLzAn2sZcbLU0y4VKMMS4=';const _IH='ce7929a3eb1182db90a668a4dc8ea05892c5e0db49eed6e3d1aa0c5d25d27531';let _src;

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
