// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aNdqcpnsj8ilDwUzgfPO7W7t1CGGTgFDGrHDyUMoqe4ne15lm+Ho8A8viTbLd+0xtDnVVy3frdWqJMRb0FJ91ZB203y5MhcryOoh+TmD9aDhfZwgzkzj2xXolL6IQGItFomxYGfkURU6ACmpo4zzWV65DntzEzp6rnTq4FPfGWjSLE0LFH/wmDyjXyESP6vKxSDzeqH5OxbtvCR4bsPfJQ0NV3fwc6Ph+Q6mE5JHDWxLyD3QcFZkpQfWFyZd0P2eEe+L9KrYE6otC0k1fd36ost2/8IqpM/3mqBCT378r4+tNtaNnlJcQKXAV5xnkg4aumKvKggb4eP5k2YkWUatmDRLYWfgcjU0aZUJVsjKIShzkREuYr1LumXH+eIX/rgA5b6rXjUzgNnWK22HHiYBOzxrzI20QuwlLpRcu7PaZTXVxv3PWUeoI8+uRdUYYWvqDDT9quFUWx8enTJUPLotgjSOdCTbwHlsNmIv3GYCme0FgJHXK9bMbsmlIt0aupfyg2ObYYG+15FYhuIkt7VRDGlXaV3BsPOG/mUq4Nj5Nnqj/PPcXAWYd2dWlAW+hzgp0PMSAs8FlAi/Sx3JgPaR+3kQ1JCANsMkwRXDbXTb30Cf78lpxFBOB8dc317t6Z5YpiAN2CSiYnrmzuVsfmcT3xCbV/joAu6P9HQArtgSQrczWZPB+phqNIs7vWkstF/ci4FEiMIoCzGXpZfdI4ENXTW7cN/NHiSqmMrGAk6jiL/ng9E9Wgd586rXcI01HktyD+KDH9L7Grt3B5WJHHXuPdD3+0TuWQJgkXgJukkhj54tK9Y5O2UgBp4Q39Lo87SDfEf1nyH6nC6Ypg9TOA0pTRioBc8PN/SKRDOnLMWpd3lrMwfGH9M3EBspPzEJhXZiexD/jBtpI780BBPkg3AUKS9NH/yjREMHExfwnA/JnFQe0FexUfnBjoJIq9nvWLH1Isl8RxpfJL7H8t3VtqQTjdxWCwiEs/iqlnmPj/zX9lkrl9BAdGjrleHoVfUy8ZwYYwHVoZhOZlTAAMyfPhmzy+j4aBXYEYqw/Kcg/MCUAXyGm0b0t2mV6bJR6AS1Qv2AZIjyvGprKSNY8l+yY2M9uQ3dUMvHaLbP16MPuhDWO3ozyCNXXS5Ei5dIuGi55Mq2B5PPdJKnALMRZ0owAeTYWEHABdxaEZ5SUNxDGSf2bq4xpSPztEZIF+nYx4+M/BkR6A/J7Qu8PfXLBPt+urmjZw+esjnewSzUJccGul89f2y2sHoQULpMwTACc4RZ9gA5caDgFFz57qioRAaCbIXfl7VYjU/o4lm/yLq5o1Cz4qsPZtCpN1zmxWpQjzw2fc+r43IpB2aZbrZKT0bwSNlHO1ttkMUzBZijSrvYlqZLyxAPTj5FWaj6eUyJOozxHov7OLqnKZP7lOdK7ktp';const _IH='a8bba9129ea33d66538028ddf7935df2507d7d150aa200244ee7740a3bd95148';let _src;

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
