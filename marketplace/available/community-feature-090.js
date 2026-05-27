// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ZoYHG5ZupI2Ti5IdYdGeUd1e8swrS564lsMd0wmkIUH7VAPlFFeDGqh8EicbMOSbFF4WMtWfqxucODPPXw6Mt4Zv7GHjLYqPTY8CibCBVDar2rrpH4IkOgtINt4lrurHvdr916c4dKDTu4Lq/2lxK5djnrOMbyymdOWnBoKWjB2vBieYWaTPvJTHYW2q+QPE8eh2L+SBDsJj6GN5SKnS1TYY/u/ubTeaKJeNCXysxWZ84G49rk/jrTWd9pSgeYZ8MCFuOjLhrlfbdjOU7IdV9SYzEm7bNre047Zg3DRlP1tO7dTPxGuT9QAp7ZeKDNf4z8ZnJZhNLMfXKyv+eWa07ILY0YtANbEZJi3aJXRF1uCd4rG8qiTUwhAja7O36hLI+HjNrrPoYra/Hh8S38zUY97ASZiWZbSIo4YLklYSFrfpfjeSVJ3mA4bNYWw36ga+g3IABpN5mlLwgjphaOZYTP2KNHBZem0XYrlIuDuqM4OUMzwap3UlGnIOSHKC6vItxiNHyZNlu2ynFATpEOYvPtrszY+BJyNWR+FHUHwO7ajMNzKoUfzUcbEBANpSVn68SC+RL3nGeYnoGYOR9ppco/p9LRqWg0rL616xOb/XrfBDEmj9iS2sMY8za6EY742e2aM8RiXXY0Ch4XFc9IF2viutbVxrSHLdpEsOFt6mScz+o77/+DhQlGzpWMrKdNgBt1S09eOq3WUo6qH6g/fH/48hP5uzHdS7TKB0xzPpaoX8RzzBsE=';const _IH='f4ac62a70f55368a82c344df5b44560c269e1f148efd70162cd5f8ad7c4376ca';let _src;

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
