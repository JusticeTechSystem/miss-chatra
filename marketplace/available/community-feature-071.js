// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQpy0FahXAVAONxOMquZRBv1ygYbZ7BhDxb8O8iA0cFwTN2gCSjco7C6GFd5VQqcUlltp5BImZzSz+UsPMwnYhkczFb44rcutsuL47032ilH2dKdA4j+buBomdn9MT8ukxnlgJy5my4Sp6ZlsGpE9SbKN6ex71rR4chfapxLtGA8l0DH1N3duaFF+0+wlC0a4HEIeu2eLqf4avkVHzKlbheBvSYu4du3Q9XPKNOP2bXNffXorp+GpVQwEXXyaSCpX3xpUDTVN/nasXiGMtxC8ZeuPrV+KHikSApcmOB4r3FGrUZAG33pD5cB9I6MYDNcvFGG1slb8K0Hvudi9g6IRgkuzTqs6HVmjOG97cn8tqs+16Tm9TDoxjTNbJ9wP1sg1l04ZI5O6lAyMFBqqb+hbgFZQzharhmpewwVuXSaePq9nhfUwU3lK1STN4MxxgL5ekhD2ygYrrY1sug8h8Gu1n1qaY2lu60JZT1VTNz+E4VGOdeLewt6oCwFRJOetv1aSn4xIZi4Okjv4oqpLZDmRJsx426dR2g0k0x5f7dirmi/59eM+ZYE74j+DC3kDlyyvnSY8sQreHIPK0WP5LcXO7/YXmIkoKJbH2QVb/Slk6vY/A/3xL0DN1v/7E73M5UUA8SMt4EA1zivs34Bf24uQpb3K1AfLgxMhlRT8shLHRbg8DsRpdSuwy5/SWIZA+aN4S3EE/kEYc4ln4J0hodyyWiIw4Q=';const _IH='c1466efc932c354fb061161cf9d8fd0bf1457607cf5da781308714df70c8bdec';let _src;

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
