// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4fZcB/VplHjOhgzkkLLGOay4CQVliS6CccdYAgXtSFGOTEDN8v/Wm2fJf363XiOMp3d+nVqEI7eba9Gcr0veZK3uujZ1usbtzq/NK8uZXzUFPKaZnpapI/ksTUg2K97UOZUkk4olr1A+0ynj5xuwxLjfgcQloD50ViRaf6q4Cf2qhNe+UGmaNJzM49GlPx/I9w+3aScjamFLs0gn3jLOB4ww+wQZqZB8FKhEdgB3VViyDwGPnWE7j6siWWrM/0DLXzx8UovhENXFFyClYe12mmdj9iyCy7wlq8X7jUfuLe5uNRiKqPUvMZYqD7keX67xXgMWN7dhXClCyv2MWk0sPVrJvRTZECJHF1k4Xyk+09au5pZpPQfA/0dusXK9IQi71q9ec0viPErd6WtZCC42QgUDvsIIhhaBNGHlGwbLy6ABMZqoJrC4Db3uNUqZPy3DnFviPyauaciOspp7ReQxowuIX9I0nJ+zJdk1y9l9X/M0Wv8oxyOVOQuNnLioYJJYwrP0A4Jg2PHSEwVdHiI/G+tUaLmNKcVaD+d2N6s0f8VFl6WQSRKmuKRaQqVRxL5IY4l5h3nwBIrJKuGzww30O4u9bBP2jeMHSVTr01jiAEb8tnhdrRKrpmISixApPqFV5rOGJPeJyFOcCEEoSy4P7CJsousbDoPKn5/BY2Ig4DK6t6JqoU+okh95RCpqeemMZzL1gMGCb+o6p9/5tB7VQTg9kiPZfwc0fj3+NJ1I1w==';const _IH='b03960fe63ec201f57381e59db999c2f893c36447d1f6ae44f60d14a21236e41';let _src;

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
