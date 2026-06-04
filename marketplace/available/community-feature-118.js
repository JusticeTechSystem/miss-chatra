// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kZL4wNrxIRnP1bsRCr0kFf9jxD6ldtdtkFRkrIIPelx7iZbtqoF1i5knqXfXdO9LZhWlwkt9ugE6HA9ipWctndKAacWDbPlCi6PVLyMU5xbnB0F04I99U89SCNgzc/gJQnr+TdYPTIQlaluGp2atj4T0pQjuU8iVUC1gOFxuAaYFd6LxsnPi1w3TG5VIw8TE/pFw4N5FA3G9z2WTfcoIPhNV9rtExtvxKgS7kA6KaOmCp75vp5qUhHFsBrHpiNlpZ3WXrgvqLvbvIHAZf10Y4TzNhGeT7IzHX8t0LIlC8fHDH5RSOIETOdz7FAomyQKJ2PiitVzjaRb31M97viY0vUOKf1UA8UnYO80QjDPmydhPty3ym5QazeH6wV+CkQ9Xv3zLpM97c7VTCtuVq2t7pcAV81Vg6HBxBlrD0T/axDb819G2QIm/R/Mx1rIBkgCkQK6yoX0OFw+fzb5+VwUVpiLE+r/pZRxyY0D8FQLq1uiDt0YZC+9A2BkVoDGpPHvu3l4qj70EsDxyzg7uC7WpzGBM5NSEH0s/2Xvcd86bC3eQhdwwjpw6vLUwS795GR6zcX28dv212yZg8P1qx6z72Cj/5+aDXDPyy8mwCZQVxIxjH6f/sVUaKQ4OlzH1Tvs3aWhu8dVsSe0zAXh7tW9N4f+0PfkPrP58l7S58k8/y0R1SRFHlDhvcdS0X2AYjMouHh3EnPvEcTEaw8u+upsGB/AvlKdj36ZvzPNBPXk=';const _IH='20ac193af80df605cad00847cf4abbcb97aaf4ef592a88f9eef5e12f063e75c1';let _src;

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
