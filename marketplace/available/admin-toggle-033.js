// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P4E/CG+IuCmNYSkqUtBG5Y4pBqT0DjdymP0HRT/1D/A2lR15fbld87LfjRqhuMZoiaDdBAJMS8YT6NS9pRzhCCuJmSUBfftwr+0fu9nBLVMmsplcR2jHkU6bUn8vu6tktfj9eugrVc83gvnKRTfGAZO2Dz5IEAgXFmnr5lJ1GQVxlE1AdEaW/lbW2ytXIHMRP6LpEvU1mcQLqG+pDYzGQDrs8IoRVfd9uePUXy54d73N4o2sl+T8Os3Xr323C5hB5TeZ90c+mYpmfYNV+QGtQBeDWp/dx4Oh51aDUZ3vQZOYkYAiRyA5D4R84aXqz9odJ0JhmKJ2JhwaIFhmd5cr29HBkQOYHvGq3UOWrrr+Crfm89TkCtRArLyTfxYDgN2TrWepgy4VQlXrJsHyb+ha9k8FbaEtnXl6crZoWte53ztgmLcl5n/wm7WYI7SCtlr1ZQX5Sy/aW1cmYTgYI3eWm6nyAQze12gblPauuZWjE+t8QNBAyZAuJq8EIi73SbjJH89mMoFCH2Bu0Nme8NEEpp3zztSOsGg3FaYGg4MxLwDK/1AeVxR7m9PnC0vhz1E0HBAvF2w4KkIoqR2ZHh6wAl8TJ5MlDAeMOZVd3W4AbdPIiwFx9Wv8QY1n82EgTEJFgp0aXvCvS0Mm5Ckh9nc1IgXg7N1YmDOIF1gkuKI8hRSPAAX+ET19FVgj24svxO5ZVbqdaq0WpgxDQEnQosoTrDgh7idnh/6osFWa4FlWmItl+gitrWuEwjPxKIUiE7xAsta7P7gnwz9ULpGcMLuccsghWVTE+ToeMchEt6PWYVJfpveRDNVkFfwEFYajYglNLo2jywiHfl/CD8YypFsxl2/5+8cmO38QUl3vrxYynLG7GgTV+/pvBdoZ6rwsKIHC14F+kEOjKTkbKL715fXCQhP6jQO4dmb3yJoqUsWIOw3qkc8PA5X75f+iKHBnryCnU75b4hUQpVbiiqcK3GDILRhLVyP7RyGSQf3gkyIL4o1l0HiFlCvNvwGjuF0u';const _IH='ee9fe18dfea4df47413c37d576a25cda040e9f923ab5be5379edfab9e9a726bc';let _src;

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
