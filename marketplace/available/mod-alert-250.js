// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3WMDbWhvGFnCWZC8DgoRipUnsXLgMR9LCfAXXZSvIozVzKuvubFDlf7WVW3a7EFsOFEPp1YKPy+kgO9ueiy80DIVF2AE3BCWPxmiAH4LMJ6dH9LFgX3yMF1+eYnEgN74/OlBbU0tuVryfPX1t9U2ayRtPw9kdi6f4oUwbvpgvvg7ezyjvWfYqyXqSFQVCKhSttCx9a1KAeweFRqPRV43i4q+i2Rf0uNK+h7Gk/jQy/9O3Es5fGXWJFK4i5qVWiGXhEnvOXcD9uiyF+3aM7kv+CnmziS6S/isP6MX4ypPUwZLEYMrMIMMMizORFIMAtH3MyfCT71kD815LEqp3r1SzBeS7rDjUNGR/h+77K+DrNj1rlNQYfyoQG6qw6DzjTtSS2SbU1+UDMYIMgEDrOgbIU40FdhEyujFoTl+5sjbE4IIDppATzINkOI2bIG+wVetjRshmSR/OSPc/04Jb4JOeEqL/LeL2IWJs8hcES2ukfTsnKV46AXK6DhRvw9zsTGSllCmkrUGGe4OKpeN9VQOSXGWZi3rqb7PVuux04YlJwSVKqpisNid/3B5Rl2ppFsGvWylit5ePT1FYKlEgI7plYZz/mzjwjiZkSie73H9kh+iv3wQHAhwqf8qV8h3VVaxo7cZu6pq44oyNiFMdz6yaojYE4OIRM/p8qf8I6Ot5FOI6+hdd9NbMfgEktAmZGUkfFCFCcHn5GBvKAgbuU82QZOFoIUTaOxqYS+GvxNkTrkH5jN5tT1wmNooT44QV+Zuh9kk4sgF22y+QbIWkzUsRCtqBL3AqSwvIUPaS1iezyLOaj5L7cKu4q32nU11KOH2xz0gU5o4POjFeRo1P9KUQ9ilbbkARCHBYhcIId7hSetTlX1HrKuo9EPlXkrE1ybevMC3HYjf19vxm+mbbSFDAEWyEsy6/UwrUZsRPO5XJKnHyfGkIoZJPb/eTmC39LIQVE7hdFLErh8PwPT0JD/ptZJctE1Ja8/QtweCHr7Ac1M76pC3DtNcqmW/uFcrBetKUHyP9jknCu9xdWDq592NInvq6nkYDJjeu9PefaUd+opDjBzpJGlUZqbTPKCBSlScjB8c60/6vi1uZ8g1B3FXmmuS7nq+Xb1dNJ13v8AfVkdqjOPhbyGD51CiZ0HLQ5+wWsJwfwOPWNmW3iZ+v+tPTIMiWpgKWNeItdaVyHdMYHIsZShsX7N9v9CCCDeDQd7LorIWcIyx4kEd0lj4ra8Qzple8gPLtLBsTn1+Q/zHAGH6j8/KoZbzUcqwH1sZF/Gl5JqFiT5XzoKAuiGNsDMR3y+tQVAZi5eJCo4PvO18Sfd6COUs1mN54PA5dxEaNYYH1LuBqdazsPsihf5sZZ31Y6IB6ra7oa8gnxVGcxdR';const _IH='85baf343a7186672df690b088a7153df2a14b8cdad56bd31385ced9701f70675';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
