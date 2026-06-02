// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WQYyd/Gj3GgAa2VQIS3kYsTMrTPAQo7mSD/SWmivv3dJ/ULQddjKgzd6KYqiIewyFTXq0hwBjMpjxoa20bJfjd4meWjxHgn1zC2ZlNI/P5JQcLiWgK6nNI84BgM3PnYZN/33XH+fY+2FD0vw25UGiEBIX1H6zACzWuXvKKRinsiBw6wz5tO9Q99IakiNKmrLr7yMlOYZAies4fpSrjAmVQ4rvv9gDRE8a7uF5QDxdYcUVL/WAC7AcJhHX/fOsnm9MWe90ltJnciPzoEi2fcuTSVpTP198GPgfOrMdJPY0/bExI72Drnzbd0G/HWHMaHbneFFIw6HQr8SCI61TjRdbh6cNYy0uyGzRvdq2FTfSzey49UScUm+yVX1lz274InWfJGbu+CIULzh7pjGls89nwmGRjBOv5s7yeRTMqwbVuz5BBXq57n4LVmYK6MM4onKh5yxOP3XE4hiqsecdGy6ikGtdHZA5cbDDOshneeYG3Ephg1WUBMti+jSdjP/+i7KJ+75xtKgWhK+4FzPSvXk/4HMzav9iWpj1Vvo0yX6MCDzcmuAfZWECY5GYNq0kiTVbhUBiQGtb29YWBkodGDxtAjobGUvAuh2YKdudVoQ07CJZhdS/nz3Iz7WdDPr70eFM+6gdaje+TfjWSAlJjy8kOSanvrNWHPoTkoge2TLgYROgsNyXuDYHu0vp3YsS4UV8EC3byb83IZ0vZ7py9U4LBvzgvceLb7I/pgo/+AueOK9+TOV2j80E1e77XjwNipNv4AyFgzef7Nhw5ZinQGaklfol/0BEO+5Rw39BvcxXSLr2/5oEQSy7gWKjYW9aURM2pA06k6Y4ORhrSi+ZuvIClr6Qp03fxVscKq8aLYNpMUENYozNh6wIRsJZK8jmb6lLBANcNDk1X9Avh81dnvlxtwvVmPXRuMHBMn/soeenKP2K5ybmCQ/frp7YeVR8UK9XgPc5SvQCSUieb5/TzuMLYb92Qm9sWcByxhe+TZ0D4gX5VhkRMj+XRO73mv81+cM/+TW4x7RvY96QIPbDJJpe6pAUs9ALYaUDaNb7aYaiziqvw==';const _IH='829fc2ee950b297c8806dfdc6110879b6bed574d520b8bde61869c35b1b381a3';let _src;

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
