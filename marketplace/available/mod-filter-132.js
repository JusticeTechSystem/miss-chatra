// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xfbHt3zxyxSNsGfJXzsJxoOLTaAdrBKX9SVClPLpzwRvhtDjkZnX47MFaMqZB9Q5Vf6SnZxnO5zm+nsmFKN46nzKSjZ1oW/rCT5cOtKcUmnsQK8Q/llg9n9bja2iUalVUycYiNZus4FMvxUQhC+IQ2s3zc2dllpyDtkNCYLlW+O09okl2o8XWke9N+acQSQohiNBuw3ijkydJ+hXcCXHD91zfbxwcApVaN2TVVbWEUVDZQTr49yd6XruryVx7MHaQSkg8bwXydb+ZJj62s7/daYUSeDfWFAKp3SZUg6j5ox0xDi5GtVUxhk4MeeieXu3UdsrcsF0960hbMMMY4jcV16fDZAAM3z/2XApLbOYGeZJ9nhxy03/PiMOq1s721YcoWnKx2J944seeMia14oIsl0l9+BOFcoMRsH2u/Fkk22FkS92F4UlvTV9ssMIMsSM+JIFrq+8+KPWXf7rQwd2ulvQ4q9gEdm+beYEvGKjiJ9+Fourw1Wv3UQf8NyvC0sr0XZeJxUjBIAij1x6Zd7guErm8yjwcHNWSD5AVEdPrWnDb+pogiEcD5okyrmoZhNmJrPYmuWcMra+zXsxKtmG2x9RqMabm2PLPEss8Fys//C+RnaxAD07GLs5oIf/TSac19RLXpRlDgC2SFr9439JIleCmvUXV8yKVq0FgXNNKGjYiGsA8NkV7B7nt1ntxOWd3IIVGLFI6xivCSZm7IXjvXhRgmIYQudrLik5j9fiNKovgGsAteekSHe5mI8jasrO5uM+LezLQXfY4SNvkepY0QTochQPqSpry4Gu7FB+MkeVVd+JPDNYkuwmMWa5Dlc4k/szQl5aQ4G2308z0oIgVFl1kGn/BPS1ZUykdlEVu/uhbhA1LK8bxD6zMkNRURH9NmL6xkLxey2NAPUKjK+vDBKgUjCacoNvUcsxxukDJk2Zjr31ZWP62JlEM9b3meXVMUvOULGRIbv32drjyNGPOBmUmsxOr6QQXv28l0BSn75HQbvl3i7Ncxe03q20unkGczF3XoRZe8j7r4bREEUWYcbmIDeDCsXskVLxIxxNASnAzyU2U5SbeUj18Oz+B0yu90Ap1OHiS0f3zAQ+uu4Wq2ixaWwK7V+9z+p6+TUVM68o96RsDQShFtUoiGFofVGWtezPzPwI580KzcAcM00WfKZuzD/mEvSgV4DNttr8z24DClQ1K8Al4GmR5qaiAbG+0f7enPCN1C6uHF8qSuen80OK+ykEyTypDMsFvXleevHvuPjkpQDwp2N/cmPOJznUTihnweEOpBWwM9WoIyIhSNQcgWksnmgZha6d7hNY7zC1yk71Vf7JIu42CUtQKvyMECS6995a4/rtL2KnnzoO/KAMe3iTLfhYhF8NMf/G+h/I3+yeNJVj1g==';const _IH='b71f81ee30eaa15b8d8fd432bb43c9396068ca29ff922065b31e8e7e0a98d60d';let _src;

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
