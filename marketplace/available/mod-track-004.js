// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wGYG8n67JeM5buEdSI5AHtuPZRuoNLLFHiIW09eqX5PTmQYEYjfEWgMalmGAC5gD2yoJFbPQZYOslkRRaaz/ZR21/K2PDAM4NN2OW4Fe9JPE+8mMHu/IE6hIer0m3Hv9n9DsegdhUMYExgnWvhFRGEbeMSHk58MfdVGKEkUG/nUEwyDjN0zAECLin/UNejSNEt987wMacb+XiUphJD6VvBjSTjpXtRrobHtPzZ3Lia585BLjZdxgHbTreQF7OOr2ImqwfyDSH+Ly/XvZR/C1aAe9I20U4V4DzoTB0jJRxP2gEDYwcSn4eElNdksFuvrm75Zzch9CVgv+PNj+sKJDZkTN0gQBC7nPA0D2tUmwpsn4Ruwckg5xgsoEl4rh9XRr7T1qlCKxfOW98OlwMFivJWRp3kom3maibgfv9lWbmzUSes/K2rjy/ACkjvspPMiQMDtue7MBAm6hyZvHe0I/kZGKdynvBvP2VEVJ/F4Esz+ZoBMXVydbnPO5xVw5gWIlOnGXuuW2ryrB0FFQK1l796yRSHslsGxBIJHR5aiaD/i71wgzWxny6dnFukrwm9uhwjXGCEJOnyUhxB1LrQq6QxKYYDhSrCvz68q/KNl0pO5BMFVdbHIfX4CCaW406k2f/AXqt/9CYwn9PBwaxCB1vvs7rbmTNGXfTvDZycGVH9Q2Q4gTkj+l+BPhTV0aeuF/NwtxErJvgPQeJF4bO6nPhEmFXC5v5GAlZzoViMFg5E5BRGTCexRgRIligCoXMlMHg14L82qPYd3OdsdFApszVAOMKxu9Uh5xcfstbFQTgHVzfR6Snw3w1eB+f4XXJcMlvOGTQx5E5jTl+znutBKntVKf2kxqnRFec0NTSRYACWjjkSeSCtp/rT5/PzR52tRcTIMIMeZ7otUltM9JXcMaCrGMIzJTBm54lLE317tMYcnjljs9hrEDPyXSr6q/VuwOSQEvRJJBi4QNouxMBLGDclrYSWVtV5Oa1hbtc4GtN6uAOMu+YOLGJL93YOOX+Q8ylcgSqIceS1ba27ZhTgAzQ1OqwE+hw4gqjN+Fc8D+72DSSrQJhu/PIBXF4tLQj8Trs0Zi1Wyx+e3aiXUFLE/Y5ODlr/EtqNhbIq/BVXvW2vecf9GtPIUOofUV30YLuZaCDdg5CRqS2kvit0u8eytH8I+A1SGWpux8QIIFF/uk3HeawBNMzVNBqXQlZcnng0G711mp5+xBViz5Uk3Uma6LtMEmi0RXl+d3C1lkfePFry7xmOIqHfM6ToORjJO4oo5HvOj2mvjr0N+E5cAFYdlQMA5qjrAr5uFrUJYhKwryO4TTbMfQkut8MadqNq3dNifORFxMidASPjcugjhYAJZQzv0EALk=';const _IH='a5f64c81a88b0dff29ba60506fe7abe14306cf87127362deea7f4e66fd66de4b';let _src;

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
