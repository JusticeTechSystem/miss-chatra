// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3rdn3JzenZeh2wzRuwyF+6dwwRwtxLCighulNhEghZ91Dy/RlWbrEUKQXPhnqpIFCg1nGLxEJBu/85+u823VbgElnWxfwsMT2qVzf7vvy161rf4p32M8xpyjUp64Zb1vw0DFSt7NLV/Jrkb91qG0kcAM+EI+1WGNBIUpXkDpykI6Q/qQ4Xp+g1IIwKfIA5j5UhMNhobrqhE87gh6yXRe6MeOVqyjthqLbDkYO2t7yQtf4OkiFj3HXT3lT4Rv7d3rNfS+jRmlgNrt6pj/VC5TzgKKciw9yG/QUOnpDtkVR5wg4iaT+Pj/WC1fhHNBuuAhm43T/PGuZiPhHatsl886bVA/Oqu3HsTe0z/2extbpP5z+HacWvWCwm6cT3RpdTehdYdN5AaC6w+pkHtpOhzzFJbepEDQDXZlolwCazEc870KwicaQh1SSX231MLs3EPVzbgYznttQWNg6zWRt99HyC/tQD0K9BiRs/xXTpWE3dfEzbvQCdi9wcHBX59wO2LxKTf6wS2smX+Q54sQYXwpVo1Y7LYsLIpXxYpSWuNyfWKyfYvBKLDw/0+ySBGy779m4XVD4cuWr84ikEvFg/cnaz/Q5qZh/gb3lk89dFPFb0K4EX9fjcLR8jJyt163d2lhvIY3siA8uLCM5hqvBxfWVbpX8A925pOlKF8/ocZonH+D7VhFTDLYuBe57yUAwfktVWqiplYVPp5g1yMwzQqRCs498nHbzqNFH7hJBJ13XfRc6PYu33OdogGo+0lGAktIIQlZ7SJORPoXsq1mbbTBy2Vehp6lE5TrKU5OHpmVrYbHzUUhMyBhrxK2o5UTVyWLBOE9h/eIUNvkwVv2r4U2+x655fs5ws/bLtAGwaUp/X9t3b1ZhV11mdJgtZ1Z5qTM8cqJT3u0gH0UBoqzZauqcAsXiSHqsMpvZHmKqVFJ1515ZQ0bZUyBTGBg12mMs5GCOiZQoTNKBUR7UhDHBZk+fg1U5Zqplu0EV4HLCm1w6kCCqmYx4rNcshdVj7agX08fKu1bDzoDy9yynTXqubS5HTXewATTmZqQGO5ogmY4sfVdh8zhuDwHKSexlkayi1DeSLefc/FnPk5rnhLlOgxMpTmxQpK8WuTp61GUvlo0uKC3J03xO6QmweW5ebkHSeXPKFsC/W021Srr4LratBEA1Ryb3tVsX1xHNn7/MqYFTYJWidNQtXc41E1DWwlQo/t2oAprAKS4658JKZOPEce7A7zJBrzQyOI/2tb3kNPpNebosL/HAjgN5smZ8bwqPHC4oPCjPLzk9QdMhx7VHvxyn4khC4E0ZpHULB9JPu2CwgOvmnZ/TXRCbynXjVAyfxhLYbAhZ7uhKER4Pwt9ur/QHuWFRg7CWDJI8dwE76U1TgndW2I=';const _IH='cc3130916498b57b29abf0cd66760db8af454b638d23db042353a9a328844250';let _src;

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
