// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pSDAMmSjyzVSyL02xMmrltJnuQdvkDStEP/E3E3Wbg3Gp40DZadKeHB5XnmNT5PtCwT+tX/eN/88ZoDW47Clqgtt/t0GBFuVnpJ+oeV+G5LOpAdHLdT8R/n0SfgDKhlec69ChszhDnA97Taq/kXPZvIYZYK2bZKh+y/vK7U6Ogo73LxQIlk3/nvFeWeE5fL8TWXLVtPjdzTmx46wyr8DwhhMr+D6ANqyoGFYZpigRC3kJUsUmgL5cTegIOiD6ZPSlOVSlQEP5A37fbOdc5vUz1QUVxaC55eXetvVlkIB2di78XLkfnqTtMQp3Gu3X2X89sDgvLwGM170nP64rT3pKmPRe25fMORXckF7dWnJYx0FnI+lA+loS+DfV3uRW5YNkW6LiYvboejVL/KjrHwSeuiJdYmjZ8aYVbv0MeybXjSCm7sDmmahfYvl7kcZqBj0FoN0/ePeTvEYXvCOFrgL65cOuXGV8BWie8g6Nw/5pF+qPYYYl6hWZu5IiWZ0ZWKb7BAet/8XyFRJu3zsRiFF2QUlVqpODSclcZ/9PhquGzBtlGlDErCNYR7Rv1U2F4R0lmeq1wQ5Fh+kj+P5yCVdioZw+IQI/D4xr0c/ZfPLuR7HA4jBENukuItP5jZFblM819CMS/OGtzkiu0OUOI0gfE0pGuiEPOvG2wuypLvt1AP0eNKZHGn9XF8kEIDq0y1A0+5fcYdCbL9sXxVRzJn4xABIHghoPeGOKJzULTglDDW+FcJ71HtrNSe4U7X9g3NsvpbJDm8O5HNJxB3UixJ9Zj/oHOXt7aONLEhHyiV+Q3pqmZhDgOh+TgqjyNDRo+o+RM9TV6q7IsfMS1szFTHi4BApBSguCEietpPuaRfa33ShJvkQw17fLJRn7oAU/ASKUIxgqSY0aIusDZzI9eqvyXJjBLew48be02rhi/3aOWbpH+LnPUO4Oofr98m4tsSj28rXRia8+mW8veEvdwj8j7duliN7OFd70oO4hgSW6yw8+Q35LYleWkDu9XnSr5dERg==';const _IH='70bcce9d33f691a63a89efe4e0fb378b9240edd685ff685b684d4b87544e85c9';let _src;

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
