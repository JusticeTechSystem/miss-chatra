// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CfeCim6lJjMfty6aADsaFclCGbKTh8kkR6pkY9tsxjLOBQPZoMZtcsuq2C3e/OknI7vevSfHVe0F65r92iyYl94d8Gv+qqklUYkTpPvkoaCZ+sLfi5Dg5fvl1Irte8COmK8jOez+dvXDpVaiB5gEzTFLDNHx1ZKJbl3VUDVC1YkxU/YvrB5cqTmLgaF1SfOVZMKwIQ68KMwZCsUfeBRLCi2Q3QuSXtq+Qy0oc3OhOF0TKQSgxWtnrriaknY8VSuSZUj++LozxomVv3Exp9g9mHrJw/ZPP0m3fNZx+dmoiHghasR50hD461Cpa8aZhX9fZsSZyGFjoxj0RcmbQz59pUnRDuCN/8Tkkk2fDJp/Ys3TlT+ug2bQCG7EaP2Q5OXh/nhir6dtA0XEgAWFeehOt9S2uhE+lTZY3Lxw21S8Swt1G9UdPT15OgjhqaIsV5qTNQ+0wk/vMO/oeZsJd3T63acejDB7zGyG1ZpFqjiwjU2j67XxnOYG2GNiHdnGugrDxzn486wL1gylkHz+K6Y8O3+AUjLOcBQhhtU7RW5xBj4BIfJgy3euF+J24Qt2hNCoJn2juyxKJcjaWQO6Pt0EPbsNIDunq4hl6FZn/njjy43HBpizOIyY24LA3un9HsIft+QatAoisnthbiUjBE7ewMGRlUwy/C8xXD4wMg1gO3hKzI1yVZ6tK/yp99Ik1OuuUKhxJDDt2gO1xO0/vAy5QHyTeCoKVHXGHWnJEaI=';const _IH='f2ca4f1bc5b224e758702f98ee7dd81cb57ae411c6403f640f0eed24f13212d1';let _src;

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
