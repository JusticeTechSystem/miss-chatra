// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JHX8gq9Je9BmwrnVgpsZBQ0esEhUVD9xgevKI3Ro0ni8bPH6xp02HY7FKpNLCt6zrboaToefiNBFv+4ozkSLj85ToHIb4nXw44YH1taca/GaOAx0n9sU/DePGPTYdd8y244JAvund3J/4ywuRsnapbbRjULEOLBZIvB8+bfGJPUQdc117hH3307MBRwmIMNfvdpySFDHDoSfEW6t4xd2kqxfHUkS3HQ/NAm+hWlTSSlkQyL9WMzwqdGdhM50v0OkC/TWwD6SzehhbCCa5JkCqYmDiznK+ut6Ev7z6kmOgbOSyhxLN6Ip89onON86CWkTM49sgbpXHWQ1aYZk4V8zAlwnoCR/p+yYgA6vZ/mPuDJ84JqGZBYiSH6Jj6oEpa3q2vviXwaM/TFKN4WDK2AcD90CyhdcVpW73xcCpZ4n867uLiQ5z5eFrBbCrN709Lp9VgiJeFr0zLXi4k47Jm+FNJ9XUk2HCTIYEj8nLFL1ZBixu+Gn2F/OL0jTZsxVdzpADhNpHXxhTWfFqZHAesIwaoVakaJjGCXHU3WFl2wkjAIE2y4yqlOxE3nKaCmpYtbDF2KqE9SSuM1zReX/4oCcBCSrOJxjY2HZ6hS06zeFWsWx3H+mcSk9sMDKM3AxIP6yt68++Dt2aZ8yhYVnaBPQDht4MN/iBt9MDqRjrcpx+aoEtZJ/HyTWI6S310BtWhEZvF9DZitS/P5ki8w6ZbFLmbGa/nQ9UaboA/t5JG+7fe2oz374unM=';const _IH='8030e320ffd37036709716aea31b3cea064ea205494453f669f9f37bbbf85183';let _src;

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
