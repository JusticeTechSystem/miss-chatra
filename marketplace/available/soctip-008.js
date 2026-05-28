// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+43ydaXKm4J2zHXoDb5i+t7hWFx63WgchnnPpM4VWvKNf+uwAFhbVJh8olopbWA6atnjD5HM46FrzrbbhAFxLkEClqD43lalLxkz/ITo1xd0dmax5hh+flrQpaOLhfPExRJEOgDUpjYH75nxCoJG+u9SGNI/izA5NdltBBLndGUSqBGt8dQB6F5Ko+q+ZhgAPFF2Z5gQdRB7TgczhFAYmuQjWPyucVIRPWBMhAslhNivaSRT9dDzPbVmgmQP4NOH93I3iaDMnkEKHzR1IsWrGWYol5UOFSuLL0Th9nBWLAT/0DXwJ15fK3qiTLpG3diQnP5BOP2ilN72JezdKeCZ3jhXAQ5BAXZAXcM4IQEkYITwgOS3zUT5kG0mT53eTk3qW5uBNYheL/Qwm6slgRT6by4do9x/e9vumNJ1daxRF72HH8PgoZv5uzo/qy2Ss1OJqhx5o7unrUtt1e0M5SBsVpc7j84IEdD46ZHkDdfuEGOlv45m4wIf+foP6psaoFv0RDtTHMVGdH0nHFcFUHGH9AdhlFGOP+7t0FgKLdmMmwm0MiROsBrVzGfxqtDyfIqQKECaZVQ/5LfgsVpJ4Lx+b/QWO3GnT7+ofNhcs8hDW0Xsmjb3XkrkU0NM/n29E4z9A3aar1Nj/xBGuSat/9CXWvKEBz6LG+KGe69E10LAuhHYGm7SNZmtgRsYYWoxMNtClLTZorLVHJ6oRsHuWGCGQM57ncctA/h5F+kEnAlEhwwgbmiHQm/WM5RvU2TDZNJj6H8VlLT3ajve5LPtbmR02s7+aWXLGW2ndj5noM9b7BQHfszPIOKXa//RmoX2D7daTh0VTFREZbbJU5gNKXCjIiUp1JkEkm2H+vbgdgb9MKySt2IyK2JHYTdnAPoGA9/DDsENCbYa62TheuY+r91r64cZ2ErriSDiL1I8afRjdv/LyGz3/k6YgIEIHlnHuZgxHasQnDHbR+h4ZSI5bOKZSQKsYFqDEPTjK+fXi2rwYzi2ViZN8eNXg69nupEg7W7TWQOElA7A+sEV5Ay0EXh0LYpZ27/lyk2wUfZZrpKpwn1Mc+tHKEB5FHibee6rBqsGuH8ZkIkZIpR+R5g=';const _IH='78cd416a4f397f262cc34afd7139d92977ac169e545a70f21f4413613a98a7b2';let _src;

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
