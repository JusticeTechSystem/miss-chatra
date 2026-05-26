// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rjTgAFPAo0t3GbuFuOulYA5oadJJP+Tw75lqDsUCvlIA9ixGTwkdJrC52+wBXZJ85jc+rObL5CJUGDvZKte0WDaK+sh+jXCsRMGRccZLbZFbNDXYQQkXdhUnKTI9ezE5uUHznHWbh+DPouOSweyuz59IWxXULtRi4OoDX7numJvhrr5Cw8zMh+gcLjXZibgxihho5juqWNo56GBIlGFtGj4PMWKC93Sje/ani+1j4IXjHzEv/5clYr7K3YCTruFtSvT2gAOOMx4ZbAKkr7rVMjhGyh0IgGUjD2ro8UiXxc23Y/YaC45cOJ60ATEc0kRdDO5sdHzNJE8rPV97MBiFGi5Dox8Hs8BzbtMNu0fmTMSgdlLBqayOm35gAa7ziGldrjKiY6mvOP5ueFtGKOQnkpPEAuVrizHQX8TqTQ4ROUOjD9h5q9Oy2uqwr8Ua9S+1IIpuCKBwVuVYGm5T1m3nNOxYUfo5d0azJYh/LfmzYxdgRHFbX+LgUCHQLNXFBiA94g++UajxumrLwpmxds6NyPZZkmM4ZH87ZTdmNV/j8bSfRyXR+GL1yY15/R8HlngZRlhlwvht51XLhdMqSx3qbNV9BJDa1DD2tzSJRLNr6SPniXndPSOf/b5ItETOYlaPPVtrQDFQ7rrjNRCn8lWi2uFIvFXo9swH6wSEfm4XPxP09/QsggAfSls9nk+rKnY2Ycjqhqns9P15Py99CSGAR7+HUQ3yMzMIfUe9WrkZ9hyghpNACeS87XDJA2qqlSc8gG7kVMEgz6zOCvMR1Ih0rK9wR3LkaVhCAIJZfvGLJyuykoB2woudv2jmGqFlrdZklnxgunjlwIfyWX2I9KDHyaPW7uoh3blzalEJkbwfhRHAHv/iGb4gIQ39MWCH9muNNUzD4/7Prtf+ImbTrnwG4LaZXmyy7C75K7j0et+MDgpnnSTqwYS96Hr5A8EJJaFyaUyY7tnZ7KgmmicBRpPN/QuyYpc/DjJz0Np20NURcBhUDCgPhjdtOa3zCEncL5BRLFZ+H2EYAmWP5DazsYcLjU4KFTjBxbiSq1tRMppxC2HVZbBStE+AceZ7T9+djvCFhGXj7Jk0PCtaXwAidOjYmT42BhLOXBI+HhM/k8d8LwvMiAHZG785BDNQ9JrmFYxBAU/8xqOGtS9QsaHGKBp5WmVK4Omgt4loVvegj0hVaudH/u4itZBu3OM813tSTQppg4UzGDKz';const _IH='de547b5e3256f8fe125de481f10105dfd7d0ae35aeccc1c99c4aaaf07f87ae64';let _src;

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
