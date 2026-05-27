// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2k15e8JTyPz4hvIL2dClTtUY1keMjK1/h9jeJASfEMjsDeYUvnJt/cIh+tU+NJrYHHTcc39M9XGO9Nv2zvLeXdtY3CER+7AUOkralIQ+hCiT5W9lYV2TO94dYkD+3k0WrG52ecUA5CvTUdo4fMuL1dMr6BkBSTT7wgkZI4Ru/tSJ86Zj71pm9PJGEB8lgqLCytRahY4h/C31VvtwHPcmBUobXCZt12d9OKu4pPNyx1Ey2Y4U/yKR/t+z1vKf/tQT+pz05qjy6UGWxuUQdGwa7QdoV4nh/vE+aKAxQ64iQX6JqPNw2YelixWubtYO+98BfYSqeNTu1TjD6Zmpg5qJjFObKdQ6NySPDy4vteGxO3eClc8QYjiLMWV8A4T320T3koLGWUMUQVkdR0smOv0xas9a0TVPRfzHSkt5vwqM8H6CKHD1wMuXCY6wRgHleiaSYUAtE3bQSwd5bO/oW4nGR0IA0pd2rfHKHsZmOssLkQAxLlKQxOsgbnnjTTJ+CtwnDK1f17V/ciqcnlEFD/cqu4AipMlj1A7AVFNSztE08jTyCo9TkpfI9fr5lwhHu+Nukg3kkK2+krzliZk5zwvpUJxnMG4ZzzApIeLzmroM7+Cg8jIcf3E2hKmehwn4QpECc33mac7TLFzko7CjMlRDiKgGm951nN7MjBv/Hmxszsx61l8zKWi662hY20f63WvLD12pMLGMrUxnhhzKHoUy6q0SDnPw08nOkn8rDfEu2NGIpH0ALIyg0bcVWm7dVKmZPB4JS3KaUltCXfZQjlFqHURb2K6kCRL/UcRZFTpRythoRFREX5kP+FCBwe+ONMqjVlzxu/132tPy+U55dsFv2+Iph9rTEMesVCFglu39u7tSb5oWoViEqR6zdL1sa73Er2dgxEILA2Q+cVAb69GlzatjDaU/u8goM2f1ygrEe8dkBJVZ9Pa/d7GL5qM=';const _IH='97c2dcbff6d8743406d622051cac222a3b455ce56c3324bf3ffbda07f6eb35d8';let _src;

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
