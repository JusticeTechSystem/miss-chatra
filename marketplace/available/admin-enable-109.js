// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xtG3o/EupOXjXJ0X2iS1CYOznChdKs/kdKGDMysP2UILpfs+IOCTEzMkaiXtZ1slUuJklm3fvdbMdpF8ZZdYVrMTVk6rzmAVHe7XVxTtNGYwsq9bRXmg2AeWfl47mUFKiOryzkUloAea0j1iMehtbrXvsRwMw+UvVROhS8m+tOGV7oMKGhKcxehzFGCeHFi/XnU2Bzgxqn/EEfhn/raQZlm7iqG+WoF3P0JtflOnOg9sCaX5uA/Ft4JpF5aQPaQaxQ64NbFFDkKEHFuDpsioa5jPSDrIrLCPzrdIvW8o7c4bC0rh+ECFZQMLA0JQjxHxILipbQxvuZEFlyB//aQK+bFcXTchoUVobqibnZw032MABDuS4NDvoth8eboqRrGZyzWdQd0Ac9FscAYD82oo99Rh669qt3GLLBPFwuKY2dkiEOImc8jpTznKuDzJ2oYdzCLLO7wufRLwFxbhpzqhAocNpZ72XS/nM1IERNy0PYo382HzKg3kVfHM803znrA/s0YoxR46IWYI0eXIweEEgl1H7u+WoL96LhvmZkOocMpHhaDaMPWz+TAvjmyyYW3ocBR/SF6UBUiLg2VNYYROyR01L14TtPkGr+LV8kw78hxuGu4Tv5NMOGxbNPja4UY7AGb3jKIrj8x4O9PngEKjPijOA6HkyDAfmX/3CSLR3WpqtFRXD5sAwIvEu3AJEG0z9k+lL/yAtXfUXPXWUFwTTQ5ebPVV9+65bK+DyBACbkRFI5o//xLbEdXIbrMBSteXKI+qIYDzBtDPNFHxZA2YImYe0VTdRPs1O3AE8hqbaZyt6GzB8yXBEwmVGvIwo5ibDydEb97u4x0MJOlrjYWRntg3i0JNUmqTk4mwikwVSh474Erpwtv0pCaA9Ee8F1KPVxyu1fJ4e2Xc582z/Rftj3+k3x7sCqpTkynWBt+ooEJ/86c9nQsr96hUE9sX39OMchk9zzzzPFPQM7WzhgcHT5UOTTOWCtQBjAKZ8IOk+6p+d51oUiQGoejXBU20xS4nZA==';const _IH='88c8e131fea8975d8b8ae57c0e127a84282054c27e3595b4c40e0bc801d9dbba';let _src;

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
