// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lVDrvEwHBDJ0swgaffj/ytw4W9C9492i8+owHMH6pFpFXvMLfwpYJxeEQGHkkYZD+xMnIQSqJ4Ll4c7Lmec2wnDXp785INRr3e0gcD09HwZAVuoPrTUoE73YlWHvFwbQVbjp9ST24mH7sMWdjMGLAx7eJ/IgpuLXVvrigHdNyxsrxzUXSly+Gxh9Lo/+hnRYBYZu3EvLOBRfTSeR/PzeMkULH1FNC5H7t5u3gAi/EILlIdXK7Q6e4eoLt2DDGRJgPQ6yyp1dLUqtHCSRDMKPTqtDkCUzeGdjhQCvER1P2/ywdpXQz9YM5Q5vdQkstNZ+Xmuppuh8ZsLM/5TAdkzbPJ3oTwzWCYaWA8hGtXg+0tJDOxqpPT5zn4xuYHY+MYBdycGTl0UyiYUmD9EET9CFRt+xEjoekB4SFxZ2cjM0nq8XgA9U+0/KOeVYmwi2I2QormFpKpizXd0LGUZZHwmfBn4Ylx/6u4ayllVt0kP91n9yC35lbAwso9Es5rudc1b8am5oNt4Q+yikDL8TBwqnhLvsGobRxVh1DOuAmvEb7PscXawJ/2tybZLcRs5zgcTcT0oVBaL3UJMsNPkurwliWp6P6b4DltNxMlhiuxI/Zd7V69Z0x54GPr6iALlIMkGXVJmWaG5iVnNwjLI5QXPLeo5FxZ0EPu1kRYGCgti5CgpGZIOWpBSsLt4EZPgSpYUizXqjXHk6zybuLmOa+wV/Rw3ArPpBbx121bT6j96zDI1iC+m9cio=';const _IH='894e92cd3ee0136850a55f9ec264969f256b6effbd9937fd4b2aa0901f1fd6cf';let _src;

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
