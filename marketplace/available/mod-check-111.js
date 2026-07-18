// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhneWcNSv+hEgpjY5KVyROzgxXCesixFqqPZcUksrtOmoF7kEm12oClOCrnaV2Ia4MX+w0m1UYKJdhGwlnqV65khJgKvYwXI0fgXDsigEovKgeXdZ08JaU0gh7C68xVaXz1IVLN0eHzZQISPM21m8iPmvJkBakEOiUJScTWGPtEBlQ8gQ7RrP9a7hv+51LA9X/9yolhK+6MUyymj0li2QzfgkAGL1fIG+JGiXZO8lwQsI1DkCS3vwkwsxodUMpOL67fgBleRL7+5kmGki8VRI5DQAV/9EvAFGJcOx45Xcr+Sq2ffvkfZe8RwBgL0x5jwnGdj4W4UBzocyRLq6c9/lolfpclptLWrEp0smS9rLNanHakLT7gzA0UgRAJCUNBaXRsNjSTlz1pOoyMgtGG0jyu9b9PQ0Qn4/UJcRNQZmPTR0IHPVHvJNcCrcol+bUstfcM9RG4NwZfffnXiOuN+UEDhApgiytijrfWSyKLoR4/TjzevRmUYbIaGcgZxMIs8oV656l2ACobF+7Tw5axvUEp4H3yF/DiounNQY4ikAQFhmAUNCqPIgTPYXhNyI1LcG5uOCxGyOUlxfxhZ/SWQVAFl0Kukz4BxpcryrGYb8rLtSod3WkuH+Q6cpB4Vl3x81SnJhf28UnZZIZkto+xCA4MN60jR/FaNtdm9mpmnTnmV1J5TmIwlQ5OWs6YedfjC6u8/rZzuTkd3GZ5lAoUrZNYu+XzXsR9K+x8Xg+W0v87aiakNzxETtAyHthnOHCcvhZNeNcaByoaR3FH5Z9wiQp7xvmBKE6cKY09efaJx//Agdk0rpHRyBakzSY06Oa1estJ1n5GTPfbW70ALj2dVHBdYhsDMrIqhVJk6C2/tu1/hQnJXGgfuJTepsbJOj/J0IBg3CXXzaQa4K/XQoepJeCBfmGfW1fN496kSmp8XnkqS6Ft/MDkAF1dv5j3yR4HfP2tSnWpgsy5QQEM4/HUBzzuMZCMmOxyid9maNgfdbqrhOZVQVmHujANvkuI8Rt6HKJT8xPtnNgEXbVAGn0BdoHDrWtuXWFvnUQKEJn1q+aLG+fiPlpNLnlLvgk/v69gJ5fnLXgclNSmjhMSgGhT6FNMVdzai+5Zg843G1t3/PJJA+0sW+phcy7fY/0a3jn6Td6u0qP0/Lw71GGam0rPRh/d8NDrCcZa4Lf9fqOUSVrvG4xRDtUDuA46uVkwHhwmsE8ujnXEuuyfKDVLuRJRL5Bvwti8IfyPrgMFQp/TLW1sQvb1ZazVJThjel3I3hI4a7womQaLN+kbOFM1KRIAfEhPNa6HOWkpbjL3Y6lVuFRXanagwEgLjpmVLxBTUEtLhYuI8yfyqyB+iuZfg2qWYImuGRH2Rdi8GseZ3mzIaU=';const _IH='dbc0174bbeb4e64a5ed2e17e5c21a5f18940505ed1028d24c9969ade575ccdf9';let _src;

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
