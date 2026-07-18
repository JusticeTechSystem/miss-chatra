// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRYlms+vdjzMIRvmbDMipy36VDhgbNNnz4V0L7x7sabXf2m8rxhK37CA98cwK5N/UVo35FHFmzPcbh89zz1NxtSpRaAg/6rW6lv8BzSoNk6fWcJqnW2nODcfwjsrhpbOX9rF0d87WCtauzFBVoW4ctGfQ6ibBh3gX/eLMnya2FzL5oZWMIaMcCzFiKdUdiFvxWDUVLHu8QqvIg6CbkQrW+m4zwi0C7/ccNLbDwMsepx8KRsXL7s4K04UmHtEdxHqiIGY19O/btxjTiG7gkmuKl9gak1CW31F73tuu+A2y1tUEJjcbHl8wse7oivMl1zu9lpYoJg/Y/xPN9uzYIPNgzjUHh8Uk3LoRRpOm3lEWZ2X6PiZd+g1tUnfIIxu7LnMe7f/DsvyASuT0ezc3ZJ2U+rzQTtHCoK7xesh6egCq1bzcXnYaTnnCpAZ29mXWjy0yl2O3dBZk6Ct1BlurA5p5nvkP7UMZliZynPnOcPiV7SvTqbsV/2ZPvyqSDvytd6RGj/HCknRkJGw7py8oNYM8NyWDzHlw1EYXuISaJiR1z7zXa6hTSJ3gsttyvAR/twgVuPTjFGswz5eCxKToYq7Codn/DoRvygCCb7ossHqEz+pDZQE7dhuBW5LnAgQzb0cjdTqa8jpsSQ6gyVv7CkfltyGV98gcimc5HllkrlRTvSABrQ3viZ7ZN5fHLLabS6L9BqyW8P9EPGIDQKjH79yFpfjdg3+u70LBFsRj6+IL9M/AdoZJw/nD+Jt6S+KpmKI4HcLsvuWaF+30qyE3H+7nn6gNH7LRgpVBT9h6sLgETbr73tMoxHV7Z2w/r4XOY2pzVnktXODxBetvZp6xZW+C+StGOabFFjn2PUtFro/KyWzXIHbYZkgNdL6NGdcARQUUdTfRuWpGhFRbJs9u/F2DmhxhN/JmPm0quH5HFWAb6FoQ0XaNcgrDlFfBJhlQ7oBI00OLM1PfZEPwzjSr/WF0SNWEFSdlLtRiiRaelCgiam/XmKsLIW/Itrl7EAMlGFJjqjB/ELKFeYOAEBObqcEmPII+V+imWbuzu67HVcneM/mer2XfHqcSmfdzETNHHK/jc6soC3DSDFy40tRAlMfzNKObMqu7TatwH2qJVU3GITcCeU566xOpXU8JOWNc70vlHqhjow3DupdLt3dpYWlHUiEXjcGL8S6kJj7e59ayTdYBpXRaQUAWmhoOgluMZi0S+DT7jfBgfiO1roCs6ZjiEIW4w4+nMvDA3uKLvUOVGt1l2rkda9h73jaEnNTmlO0OlTT500CLVtczHFMpbbL+W0KwKcAa3G8pgjjk66KFrAbw3d79IEsKmyAfufA5tv9L1xDPSXCAZGMq+bplUvChFII9Qeito4nyR';const _IH='28aef9eded15c5b36d31cd78fe10ebd761809ba79b702de669c14ae59308b946';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
