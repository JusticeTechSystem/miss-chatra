// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7fZP4CG4lhbIZcTDiriT/X7ROmqjY7aC3mnDQDOe+7caxKPQOTXJp6YXG8qarxmwDKq8ZpeOw4c1v6oTNxU0ulHaLuwJCdZLwhgIJH3YgNi16P5OGk72/52IQRfwUSTy4ey/5uHo/yflvKfOhHcFyXzQu1JHjL9NgsgzByfOZyK/+YrF13RDG7zc2hP7MVV6f6APm9VhUT+Inurl4QQ7dg1PJVt3nZkMKNvQokmPYykxpiNnt/D3pvZEgAU8OxKFebFIO1Wpgd7FGxEVFg2KYFZzmitNNUq8+HLshsc2JA/rufrSlYF02uWSGRhgA7YfaDD+v/Ahv4T/1yAqdb4mVC0h+E34vCK3kM3Pb6FT1hxLKOFFvoNloSJ8DMPHa0Uh22VZxsYUh0ZaKAv/BMtN9LmQcucQhdGO5CH1PW9dVs6vT7tK64puetWW65KViRu1kulQOVqKUo4h6jHzi8gzb21BQM/ci2hgJCd9Uljj3FS4SDvpqTkT79IWJJxVYVbIUwY6WqJoQHV4RtSv1mcgbFR3SjZdWq0wYOLQtyQM0dyIS6FVSfNrUOLzJp0JiCy3X0YfLUKD7MKE80qhswUOX7oLe1PSQFX6lPhV0YcTpXz/LxkMijw3d3b6laJ2V3V2vG4R3/Y34R/iGYGUfkuBt0bIzRJZuDU4xW+aU05tBUM3IeeiE0k/48cA1FMaHFfwgDnD4+AbC1huZBjXkDxzqHskWLHKVksJ1rrtauMIznNM+hrPOEIq7oUz38vgmlEaQbEytByGGAQ8VzqJl3pIUl5U2R8dcL8LRDLSaz+lgmblmBep49GKHfZhYTnTVZ5Vl3/o3wxDGm1rnggeK1PHnrWmouNR0JAfPqnAzL5a9290IwyeTllXxuQ7DY18irGQu0iYiqFbbInBxKmYp/GevmS9CzY82cUmmQbP99o2Jhtdzx6cg41fezBMHwOMpVUkzu+rdrJt2rvha1EMQV8FKYAjZMLqejdOcXvz5EBPwA/YhnVfqmoaTqXJPlYbTUFmO4eV74f2NyF3XMW6HTSfb8Alat7SVwVMbvkyr22z';const _IH='259f3e0b026e25da4a4fefb95532a9c72a73ffa6811ff799e206155f25bc6db5';let _src;

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
