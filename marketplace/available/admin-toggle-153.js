// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Lt0h8Aci331g6mvqpP2W7ea+zbAVk9skngzeoM1aZf3yW+2ariUmNxUwBRlAgiQ/JgjEIIEgarVDszjwb1KwjG70J/SsgHyzJojqdcWN3VlBnml0e1IyZ9PB6RL+feX7lU8ZL1fh7XkPp3/CaI9EYkyqrQmBvnWfpFZ0CJ/yqiqwIgTdbW1VsTxSA4vkXtvxu1Gdry9CnY/6TEp5vc5v3+RYqzyrwFyYYRAVh+bz5LQJT/sIDrZORpoGDnc8OVM+v0C3UBDNjlKu9VJgPfJiFpmXseLCpyZPAiTaO8JSxlQjy3FgsmR2paZgAhYZAIdP+dmn+uQo//lfi16bJDkMljwdnZlhWLV9tKV6up6Ye6sPd4lKOTD+HYOXcOki3K8cLNQBruYtc1IpzL2VwjcHZycgXc4ucFeLe7H5RhG3VhkZiPToqBn0gDLA9857PO4w8tD5kfeH6+uIR1kXKmUTdyIMPXTnt50tG+2RT62CvW6b8JeXoMleBZH8oMiz9wPtfaYTu3g/bt7+d47HSIoCHtiAeC5JhYhDsDMZS+6BMkvsjJvl5Yt0ZF1p0OJho48MxNCK8NL6330kwd928fqQ0AfwGIyD2dNC8Wp2QzFjeYfgTAKqMpKkpwpMByfp7o4L6ZVGPUssT5gDFvxYx8wlf/awA01jVo8U6YuJXjoHc0mYXnyyPMnv/FkC2keRQp1czCsdlbiut/L6e3Az8s7MyxrlL1qhDqUAkZeNGh4uBCW+v2IQBeFXbHguu/0iPhwo1rrF1/IbhNZe/lrLliuVrcDkoRKptiqPkW/7T5noYFlpfxtilgyj+pkrXCzMEf/cLRc4VZeeLPm7h4raXECQkIOfbjlpAetrUlu+aDoJz8rPRsDhTOt82Uq3CpR3m5eJYnTcLOIL8j8fYMgNF49MdPg1Is+8ynr9SHIbi3MtoJAYFQBFVd70+YEifNfrk8EVdxxRqgtLMzusE17S3c6/buW3BvaXd57UmbmC/pu3Zdvk9XXywqybiNR9sD0KEJyZQ==';const _IH='983b6b81b492c24346622bc3310f25eaec34ec5a0458e3065b9ee14443c8432a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
