// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQnfo7/TBGfI1oFm6a2wEMysODWnXrNXN6hVtT0+YrNL39to63uGxuMnLUddd/dSt3CzDtjsr6e34rOCBpvMq2AGLaAt+7qko43YbuJT72CjgkXZQhrD5ihy67GrhazvWpadLuZdU2NyX4Sb+Tpr5aGRdKJU1YFqhtWSrh0kVrroE2MMSqdijpBqO5b2KBG7GGjZQdm6lWb6vSIXd7AKzZBybam8rNPmZvOEW19weiOU7Tda+wQgHQw1Xeok1Lh5b1eIG9l3R0VCgSiW7XJUa2CUCzH094jSkSgwmk8gsER8zkCg6qlqHI5e8Z/hUjlCv9BcPm2EeaJd9PFERiHXOwK/pRUHI4RXh+BQ4K4hWYDwvTU/DXUhusfm0XArNSl/MJBNJpEmqtsUIBv7fgqnbyib/36KcCOZQYVZjXIe43Cn3ED59eZrJ3mjLHKAAnOdg25E/MiZDNik7lGfX1RgTRvs2VlCJlBdTpVNApLITVqohBHIzBS8jtado9vJeJEmU6znBVtPwNMdM++AdIgwwb9a1svJiT89yRoL1Nwal6QZ6KC6YHaS9p4LwsOhAQbxkHrZdp5rzyBLenos3PmSLH2EfooRoNJqXK6RiQuRyBAcd1KL+3K8K+2jmmAg10nECiC14oNzoZud+95M3AaD4fC6InDHM0ITWYG+FugQZZeKEgstIjttZPvRi6kMgvbmgXgaIPDA9NyIksVZJX7kaJB2MLCg==';const _IH='f0cf422386b7845e0d456f13d664ce80580260f70407da456d6417e16ebd66d4';let _src;

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
