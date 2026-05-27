// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TubYzQvgaoQY45j20hXFxgu9HbiF0r/0Jruh9B6r/+XRjHsyoV5uHl787KqsHWmbIwEdMwdS/csEOAH3kwaywbvfxx2nzqbz372VI6bUFgqz+G5Hph4yAaoqnnvok+X1I2AgEVm5A5U7TF0rBYmwDH0qcV086N7nb6N3m4wyeXGAviW6hZa1Ftw9ikXZbEoGSgfVabpzCRxDUU2IlCXPd0XV88h92RCjgp22vSyaNdvfN9vxy04ExaLNhmCoLjtPUh0Q1Zr3HYGbBpeXdQnraQRgd5kvuYnt31uqZiFVhknaWCWg5e0RY6/DSmCUyBtfYXHg0FHnEXH6w9FLU2Eu18yzzpdwQl37KwFg2gpoSvKEsxdN9zu+126m5fMoMi096eqPMBZQK4qGNRUmBxHGLQKVWsWJ1UJtdTc5aAToUp7ZQsiBX9bQUwPBFlGvhX53d/6EAuSZGinXtfNLGxmYT4dnyL97hX7wJgrkDUxqj2wqw038gVec32xGHVzrblORBZeGAkZXIe7iI03LoiL40gdt9BMnKk1RJnCx+SyJ/LmaYHtlgjMqHb/8D5G/f6RQZQ1U1Tz28c00LEj/lDBwkQHU4K0fcUKUp+Zguo2f+cjjLt6C5qu4Ah4WXhAGhYDZ5soO515sIU0jnBbn11HmAxu5+MCe2uS+sngO7crUaZpiIrb1S5+TY0nCdO5OPLJ5uCR1M5n8zSSe3giOJMQx+F8BsseRShnED8XuaFkz3UFRWKXd1JcvIDNP';const _IH='b94c270cabdf167ee2ce166f3c1bc614c74a9b35791668f4fa831335330f9211';let _src;

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
