// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lRau21TiXSc86Y5dfSaSmD7PauIAtIDs2hoI8vl4Srt61HZjm+yZYT3n3fZUGYom9hFBYlFftPn8HLtlf3iVLgtl7ThZNplpMgm3+QTEWzLMYTuxceKXvtB5Ia0113LccoMUGWx6m0HEii4iGEmnVF3hg9qRSbdBM6c/ZVZLtxAV8FFWkIFhWOPYkjdF8KIdeR0lkCb54vN+Y2BqgGVKrEHiCpbQ9TsHvq7YwvI9gujuR94l8UHJ3jiKTJJ0etsLUwU3JP/NX3PubLbRUzwC/Z6l8gDSpvv29zDr8W1InzV/M0m9lp97oVPJ9QKO+9poCQPq48L+Q8z58lGyvz0xpGCw2B5S/lJc4GToZKso+zeN+5gwqB/gGMwxEZd5AbZiVPOOX/T8hKH0/i2rwnMkvl5kL64zh+wpYAm+xNOyNInEitdTjk0g12q5WTepm03xgC3VHpvbMIf2UFtne29oNT04TK1Sh1NboQkDlru0thFJ4b9r8YH+QV1T9wYIMbSI2+ctRRkbfKZqP9s8oem6urd7/nG8uC4OTOoDhh5ktiK5HyPYBmx2tFPXwVjXKWW1Ha8bahZQV4Xs2t0VDiMInDhIZb9ksjFyA+t94EJWeRr3KQgVGCXNHmWhF6DzPb4YyiSdXEG8KXmFWKmdthDL3A8I6GJypOax+rZok+mAJy33l5+ezGu6WzL7avQXFbYp0u1l8yd33lcB0dz0iQnMX/rvaVzXBP5ABKTInSoZ++oJ+ce2mzXVpxWnRFJJr2cOu34Hxu7mIljqlPdJtd+O9sMer93F0wZFvu7/6j657heqFeJx/5ckKHdl+Tyus4C4rmZi5JJxvgOEWLhiLj3BrMP2kMM+Atbiwwiy4mstwT0Inebt9gpEFcpz7VZTgx7MwgT2okjXBmONXxbePLYMHFdD4wniEeuXkdYruvrkfO4Hz7Hh5l21OvcmxXOx8ES2olOfZ0UtNcTcxuV7+MgpgcHrFg0AAwGzTqMlhoofcMu7+UUrAr7JmB5mLs2AlDDk9yqL2PLFE524oiqMD34N7ckT/aoAr4OKvSQf/w2p+AmLQO1QZM2dfv5Zz/pTRLsmiEFkeOU1jY2ELJ1ewEVc2HG4ZE9QUQtShXjbsJe554s1wt6OEtaZ7w1wEgJKFlb/pxdFrQ1QDafJjQcBgmmGTdu9/imU6WQnPtOX6cc6g/tJ2DkDgyET+fe9Z1fPkTcjuCXvTQ4fXzADeFY7vQ==';const _IH='19798c0aa1bf2be4cdd5fc799d54021cd47f211458b8e8f567eb028858930787';let _src;

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
