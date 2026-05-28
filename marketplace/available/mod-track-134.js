// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='waa8xhGCyr3lL3FlkXCjVT5B78G+SABGEsYMSOV+0stDQn5LTwjFnGfkkkGZOHM0IUSHxkJB6rRRySf/vtVYqmkTKjrOCaeigOmkBD/JQhoF6gEf7u1FeEzZ6zpO7EaZ6plzwiX0qChsadRnWXfCge3GZdsTKj5mwmCSCjC7ogA6J8MgebQ+LdrqrGw63t7y4Q7FVKNePBc8etOmF2iNl90dIBA+bERtK8MCW6TI9T8aamGwJeuJbXZZgbTGFI10K67gaakuaytOtaqVBhDUjzKdqdBW+KFK19QdHcCWfbI6oH3kW1fqGdZsCKVFutSE/yXGCqd3eVuQpLNjGPkSyz/Xr7eDLCZttE0XX9LsUQnq8R/dMO+/0BRTNNhryCLow5W6g+Gk5CcVSu7E/8ujmzGA7SGhdxH2Oy47RqJGvsP5oQErmXPtCx0zyLTLReuMkDvp0iRubLwk0fzbfljOFD7P50g6yPZSWt9ZCaGu92c4z7UXWiEvuleECnkCNqTIGG86xeTHSOXolfXbGoj31p9+ajJK+WUJ8/mOhoz4l6eTDNpf34QHtgeGZoWSQmmhem7uFeAcXEmGnoSsZVSWXPf5Z+y92JU1hw76Ue3M61XQzHIr3pkHY5L8/yYVTlS70nyT+MqLCq1oApsPJVlga92K4TpbWoLwV8t4IlPIOYxy841oO5PdNTI3pzK1iZCO5FG1m2EoB5d/rV83jl7Wb+BRr4Az+Gxzur2NsZ3r3z9KzrPMS6oFbCR3n8KrzWBTtKlRWgyoUw+T0WIBOBRPdNPltOG62WxFxNXUV8a0rQGtm0xg+WrA3zvhK9xZybwM9yw8m2Ywm8/YUEDwv/onFncQK+6Fa6InFWsBLuqEr2MgJbTW+vR3woRC+mxxCPaCFcDRu0Ou0sfxh0uCn7U9mfMKrbXHIAw2ku9mehnIvjJ8ze6nt+6pO/FCg6wj9mrj4xl2Ku4/0KPNM3fPo3sUUscnCoMiMhIT7sr55z4xgDBRoNsVT1wvhoSSRMoWvgrndk/qhvyTxoY/+jufCWdc0x6IW8LdiBctZzh7XvMevJud+AfyRLzGbtEUtLPL7aB1OJTAT48f89r66VmAY4Tq5mqbgfyaGJekJubyNdFsW27WPOGJx0eOoVXhP/P7vMMIktl8W7IUeAJvHhT2rv+x9azSz953APR7y8W6+42pZvLP476vP9WxKhAUe71D/cjEgy8Z07uRElo5KI4lfm5DhvOU6Q4ieJFsFIGsdo2aEQ+v/PgYDErgHDSAM7bZ+ivcmLMyhFQrFmNugWaiav4as01r6rsnu+1aQmtxeVcVebYIqiMjNJO/4/bbCnhgfdlbfQ6ANdwaNe4nhUn5SOJR1k2JSnVO5/hd2hnPw+d4';const _IH='1892044f90312f084fd0eab83ebb414861ef7d6ac5fe8c38179af0de010dd0d2';let _src;

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
