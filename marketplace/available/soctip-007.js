// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fKujiLp68kSVBuIwH2BIb8fsz68iADCURMfRiYJXHUG7toNH8DZ6jwcBsi49l2qovjeh7V+o1u1uoLWg8b3AXCmRqeJjMM44HkyhUTJOemf5iUwUdSDQICZb96kQ4T0PRllMwE8gkQczyJSFCJiEyHFil+Mwkl1AJ/qooTQg/yGqbWb0HM9R9YUDi7jLcDo9OOeWRr4Z7Yo399OCAxGf5opHgPUrqt9IgYRXhIdG6BGWLaA8RYbFqDNnoB7qBxlZHPKAoqZsYULtku3wod7QDtJCch2DWW7tJm1xCebrnVZwULBZt5lZ8DhN5Z2/VvYL7ZI4+hy/7qH7Cke/0fhWbu1sBKxXSLs0uHHHwIhGk9oR1g6UJnsO832paO2eyMMY83VtWBwcd75mr35p1Oa/0dV25gOPMghHWLsct6BktJ+9/5mEN8SaU5q5ET1LxY4demg0lYDacYuy4wRegcDEM5PWi6+4KwqcjuwZL7jeujpYp0ClOjF5H55AfjMxgXXIP3ckX0R0dMqDykuWEpSLSU+z6w/9BnHEwN0n2yyQve6/6zcWIjl2AaYuHwZKbSyHVHNGTmcdFPojuqO5fZgEdGq8t1aJY+NrsVeqwkUpj+CyEfp7z1xyzQqaG/Tt2bgPY3WIWU/wpdkxJCU4Jxd6MWoa6dFxTJLW9UmQh7O8zt2cto+QXmygUEgVUxZSywaTQplnt+g9vlkXkaI3KzfpaqdCZ3BowuiMzjRSQIlm8+Xz++hh40nZGGxywr7HH9llcIE+uGk20MusmFyrZlkeqWrlBQ5yAdzMZIzojaYW7dup+Lwo/KO1L09f3AqGLoU9AO3Xxz7ucpkmGaDLXIMy7u0Nvg3nKipW2IwkwDpaiB+yKhX8TV24knRkZRVqbKV1IvhTYvZTKc5zq20HVrWXTpeazIfgqrjI++nrpOEI+oh2vv1SVtdEadfbgZRFclrSZcVKHJ72uxcPBTeP3Rqrc+ZZDN4T55xeak5RXyXHDcg41rJ/opMS46DTZzSLwJtCEfKUqXa8iW9rT7gghZskQt6fFu6n2WPx6BN6PV54tSRGitwhjXY2sGCleT4qIvLmV8xpfG2n8wKAZlw=';const _IH='7aefc5fa720d8375a84b7b83ffc9c3bb7d5b02f3d75123ca41438d70000d574b';let _src;

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
