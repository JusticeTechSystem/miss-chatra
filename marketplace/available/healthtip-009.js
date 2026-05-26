// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1IyFMgAwbvbCLtfBQQ8ZXKHYXUqciiH7W9kwWe1ix8TZnSj+uOxZ5YrBrWrmJEvg8W8rVw4D9KBpt0/Gs1MhwwKy8biZDVaUWLtbJyJsixJXLBDkMRjBmAd6rJ9BQiIebpT4nKc+wKrzxMM/80RbAcwgwo5fLGzBpDR56L4NJncu0LhPIuWbK44LI5hw4+S8iXn0EkwXkuwerVZLhGE7hLteabf/ESyr84O0ai55o9Y0/iVbGmOqumPtp08NJhf5FYR0nsG2VCTrR9ZIDvQEolUFH6WB7UfI8wUxXtSNSpzG8hiI+4CXMbs6mLJztRrmQZZSpnGvAHsGe1c2tc11E0b6tJ/mdQszFeEIm7OWoJ2xdG7aB78YT7SDtgZIok4HebVqNX7OoewWNiynDvfArXU/fqWiojmAx3/6U/fGeHnLFwDLuDZOz4rVbcyu7kYaO8OckZ8CLiSLCbK2GdI0MIdvtesUxRUZglaUmbru6N4WN3TnYhaMc4fkzTpN2iu1ZjqPAE9xCt83o6axZY2SgqsfeG8towB46kbZ9r7Q1+6wcb9jd3LzysxWwXj0sU6uzWw/SIkIoluHqJp1qo5EilKAq6gjTYuD8zJFp6GlxtEcqAUyvaSws431byIVaJVXG/T6GQ7UHYrouqOnMSq/cB80qTuY5asclEZE54uWN1im1ugvTjU+8KmbNtLPSDrunKz3Xw3dDvHThh2G4zu+g8VlUc2OwJytiaAy0ivgE71FHj50BilbMyx2qKXHWLOCiZ9XIuXha/p6ZwcTz2fgigRKDX2O8senwBJjWgC+/erWMIbpbwb6AjtcyzZ5COdkbuX6mR5E3GP2+/ZIeB0brvQ0IZ9z2WKpH95uHTfH2Bm1ilfJhdOnO3hCHigu0fjZjbwdbn0sCBFiTeCXZu/5AHT1NQrUDnV+HYgRFKzW2qyL2UTeSGwtBg==';const _IH='26627242ca0898e891d6f920f85afee7e6ab10801cd9998818d9ae4f81535cfc';let _src;

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
