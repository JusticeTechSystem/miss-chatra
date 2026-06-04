// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jupZSWb4tnILD/50kIQ/OXBtjVKJKQAKRqz/ineDLk8VCfLMNISrGaAj29TzJlPmtgEvCkrAHggcyk3q1/pSm0vs+IuTrpDPsQ4cORbkx8Pm64WE5KCjRodKAGo30Ol3toeSjwYx/heZLux1eSeh22aihLN8XXRPDVvL/fX9MBkXaWB+1QVddOnXVpdtmV3CXpc+zmQLzT6HHNpeRLHM8UZfjLs42h+TgdIgnFdccOH6CduUIV7b8OY1qT0Ts01i1SVDXU/+y6dgM3W6Fi1fK7mKv1ad6+24mvZ2hq3PodVglad3jUl178L7I4/Fg2DE45wBjBaARdanUXjXyBS+7Z6G0hvkB97oLZuVDGhc6jSZuwkSFBSWUU8o5CBByXT7b5/3ugsrQaa72I3eML80wmY5k9eE4w/bELk0T6Noo5XD9boII+tbKBJPT6meEMz+Wj1ee9YdJZ8Fs1V4wQQ5jaXvW7akDOH8JxyM4gmOu/Yir7N3GplpEotgnxbEq5LRbKD8M138rRiP8Vg9TgiMe5oG8PqTu4Qnm+Z82234hpGTnnGphqotHNEWHXAY2FdPTjTyLAkB3/bT+3CNOvv/Pov3bi2LhkfMwoKU6t1OUisXXvaNuzDvYygP3MAwMVFg9H32pV0TTf3hS8ExAj7rt8MGupMvlNe2JqNC2M0VtQVIxLrUvdAs7EhRZ9GvVWjMTwEDfITTA/4ZuDFHfe9Zppvu02DU/pRULBR/tFuv4Q==';const _IH='eab7074a2f49cd46d31dc7ebaa81dbc463b110d17a64c5cb37e4c8f7005bacc8';let _src;

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
