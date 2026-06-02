// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yth2dAb/0wmM8gv5GP+tGZ1qAcf88DerYCYfQOvgdDIosN9jQXwsGDoeBw8TLLbrWucZwvufAtJrsuMS+6mTNgo0dFqe38DG02SEo0xZ36it4LgsKjdHz2gxKTkRnq3SpPBvaCi/8WUErAejKYTKQoRuV5Btm03iDqTFnTKSFvc04kuna4pa18gpL3gutSrtDuaolDEl79S55FNUcekn/bYSjRJCPMp2v1ijY7lrpNpxCgC2fY2NJoxeo9qeAmKCbZ2XpLa5/20SYvHznQ5POmtlm3sp1f9iS9/uNmVeJpBeL59muFM7K0RuMsAyCmytLyAUE0XIZO2jZ+6/WPEdeq8nsd+e0cJ/upW23GUO/CiiKHexUW44pTWkOsTMA0YVYbhmMEefwXMNxZMJKeXDQz/Tk3eku38F7hhA6tdHh7tBuPcstRTfH9CF87qc9AQjvWbSj+zEmwNiM5+IRjL4cnOpBWY20uZa0jCn/IJm8twK01vgsmxcl7WdvvsxBSou7xmWsCizjhOAEHqvwSpo2zsrL/uFWme5+qtCfVxmoq+bylMsafMReBPqh2Rs35Qmz1QHc84kFPUvqoZFxDkJvxT1jZlMZA8xPHChQXEeYi9o9F1+eEGT/Hi40iNEdmHFAsYUeVP3yAGowGcwdNFWix3Vw1XitDQioSj2D8WnxQl/ItoKvrINoG4058bob9oi9mFVEMJXMGTmdbEK/iYJeObkWzYOD6NWp8xDiSMgSJykEI8nVNg=';const _IH='9cdbcf81986c1212ce0e402570dcd5576ae79844a1747042f8c9d76434bbb7c6';let _src;

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
