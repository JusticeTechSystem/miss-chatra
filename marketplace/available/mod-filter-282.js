// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4W/2na6ciofUju9r+op2Rr99NhcjivIMPJToHih8nInzRhJp2KlQ54XdmUk9iZYqkiwj5d8HnKbgZl1mVvRqwM/5hwat9XgJqlUuiCJbHo1INj7Y02YsKmCcHcEmqGSuP5o6u2Pw0ERZxxYKJcYdK+S914CXbWqwOzwsQA+R1I5oe8coayzxgOHQzq8PBJCq4qANjgbnHKnsxDhCpU6g0aKH0CGVw/UovrKdvIMyJGS2ug3LV7OlU4kma/DMqujPOflpCnrGaTtSHfaDwYCJCct34//wrL3QOfdyDM8AEJFG/PWUeuyLKNYDbwuUk4uzNy6q+sTnuXLjYxYhLpoWi9oYam8u0LpWbJzCDCFpD1CtZys4SH8EG/u/PePCtMhSoH96ITC2lCQrvooRPiaq5ZLwJwvgW7wKbN8c/vNYOktuXYXOu7Ijh0iXUucuOo788R29aCq60OQuoYx/YOaXFWmvJVHq9FNqr/TI4VpYq1W/uX9aGTvH5UiAC3S1+9jjD6KXxr1VcBqv51OJZkxK50+h7M7MBnn29CG3ZLPqnhh6NsjYQVHUXRL9VvpnOuhwUPyKriD/ljRs4VASajoWY7joogrJxJX2nkSSdhVklFK+3dI1T//wVK1XRKpX8acvLhB8jVHA2G7YQemM0Eri1pxCwCSpq5JF/V6kDdpYKgnroIR544iHWkr5G62zYuQkCJLJm9VD+3PP2ryCQYMVnLgdRn12BlwzG3TiqY4zSDR7JFtBGi5YYAtOy0yYrdAVGUt/rEE/PfvCiVkAy5A1hdMWhi2T11Xm2BHcu2rmi2MISVWWtaVwOeXqCLhsHeAOXFadtmZzJbBecEN75ieJfDQxeYV2cy2dMiIbcuVZElCvr48fPhF2ETX9I+vfmIPPp6PsKs1rjU8AdXgVc/jBJLVTH/zU+flc4p2kX6qtqPeEVyXxbaUqL6OuoIGYzphFUfisaIGWiN4vfo2Z3SpezbwQ41q3PNiBRSGspRaYIzbJNDj5tLDohPv3xwW8SbOg29AMAgyUY67i2NRynBZ7qRf9f15Su5LOp9e8m+CDobdF1gA/f4OAgQ+NQJQcrlPOLE+ACPWEKMZ+hLmN+n0F3wIDBdPu1whuKMk59nneZm40o8UR+jfcgCSSDXc1j86vPLrjy/PSgZZSBBWF1orH0vBA3ZNVfIx+y0qz6dL/pZOM118nq28Pg185asXvhpwaD9Li/A7eDXn/JKV2NZ/b8kOHzqMoj18nPyr/9DGUDR7/jnvoLk+YXK7E/9s8ifzrgOp9mJdxfAWqZuNyNtj8k8MdTmV+FaLG9Lps/y1oVJM71KQ8+g1flieYo7TDHmxGOeZo2CCE9cEj8GD8s6nRJ5dvylMlM5472DBl4tA3QNCqTVGSqGLpdQ==';const _IH='76115664c2f5038945ccb3aa3e22575759136c88130e14c98f79d52895d64270';let _src;

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
