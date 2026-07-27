// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4jt0L6Nf5tUlMBJMQiLzl6C+zddZqMeaGgi+ZlKH3EG+CSDxUeGN84/6dAghSqli3bJtKeAO0vf3PRHHLEIfCiwq3/gKQy+U9B+KY1hZCnM5jgk46udqJuSGA65rauOPtLYrx2sK2OceHKGsYjVs2QkcXwxmEulsbmUue2UKhpBDa+FgIJ8RnHwbtlFyqYjExjXxjiBlA3hW9X+UV0Ui62EwEKIasSdMREkuO+6mE/eQXhiR2Ttp+4qNa579HlXRqcszytLGLWuT0D9Om8+zVt2ltWDWL3y0+zFKltWq1iu1CIQ8NnVkOtT1FLFM/emnQIwPDUJck6PbA4aI9q3289G1zac0jx27oz6PbTO+4VAoirvSZhsUsGKohMa3qAuLmViiYl3JV2zXEvLSC7bb5dukJobLiwQgssAzVhz6ZGloTRv0SVcXF52QoP39QgPrd1zfD5sjaaV5St0tlaJGfM9gSuAmOeDvO1jYqIB0Ucfvajd45zOlTHXwG/XvWiuP5AfCUfaX8n6XD5Us6EGWsSIZpuJxXtN/3kuZJDEgFCxCfkEohQT/gFgTAv/nWi3369Q8N9QZC07NZFBATc2thLq8hT7OTBx8zr6+zyacfHP3sbkUmyWvrx7vIVlHivQaYlVoj+MzGkvdfdN8TodnInoGfgn+xJ9UeSb5JtXlMTZYBN24LThfTSP30Cbw/uK2iwthk07tI9MooxRKDjMWUlhujFdVtOepNYNyZJg==';const _IH='e00bcef2bdb40de402e1b154b395ba6f9d0ad3ae6cc446467dd4db427bc3ae73';let _src;

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
