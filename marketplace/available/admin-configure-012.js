// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tgr/xbKpx9kq018tigKzbpZ2GMu565lmpHB4/M0JzToQmf/YpkLhUGGgfYY8teH+ZOuJB9YEri/oAjYgF/iTYOIF96SDnWoQZG+vBOAT3ceo4uBT9npRpV62QCZxz9nVFU5Jhb9cmD1AzPvStcRv8zlKNSwvKqJn3mmC/ciaMrtK4epryXbilLOc0+UHr2QvKU092Wr4FSvuwDsdB7ieeawXnYjalVesfjtohTYZZlDt6vAWRiMrWo/ZWHa9UdW8ZEn/61JFsp6dtSeqHHOs9LypZ0urh5Y/oBFseR7FMDUqHESjVxY2N/4v8DNk1PrkyLsRtMEU/A6RVoxxk9k3Ch4VHE9UXRO/4pGJI+966M9VDmuA9XUkXM9N0YL1GRbvE6LILsnab7zVgYN9YiUI3GCo5uOFYCG07ZqIH8cjebiGdW889STL9cybETmpuNWB2pQrC5ALzToFfe+MMvStAZgX5hmd6sMpOVWBw0o2w8v2o1xKQk6DEuErWYkAI15EcZyjnNssyyHOgBhIe4kTDiQgf1MahZoRI8gQQpkZZs9XH0nl7hfm7pHFXaQ4XBI4QaEwIvTpPMs9q0Z+i/9MKIadg+Tnm804Yzru9EVe/qp14JDCGO5+evKnt3nTTIJVHoBZVg1JCS5FoHpnstZOKCGvCt7o0eHDoTuKPqffBvTyTXzfAU+yQuxU9Om6tVdDk7oslEkgFPo/BygfgsuVh3EYXSHP0QecPQg9bXniXRldQHssxKvywrijCojFyi3e5gwL6pZEulC05Axnn9E2+LKkzaNU0WoMAg86zNHaAmgxRTpYqDVFQfGBSIBwiok8kMOZE4nmsZdkxPH+ngKJ/vY2bu1K9lY9uDQgpw787tSiWaL6ZQeEbMDoqjbZxS1ZwvF7VsAfhLkoeAvWC+CWxoP+7WRuJLnVrogHWd+uqBsrT/Xe/t9qedevOX3J2AMcA6L+riljhO697nPz99VVjoRO22ubhXqcJdOnyJwMaXLTPy/+V0QMlFt3PEnyyqB1ejRTm0Fe5HVhR+g+jYTtIa0k';const _IH='9b0e1f0b0ac74bdcfaa7e09be135a4b0b97e802beb8c31304d003fd2ffaaefeb';let _src;

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
