// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrgmYMeTaLuDJs5Ym5Z5YxUUglD9aPRrHzbOHyVBBx9B3UED41Z38r6rAvn0oQ6hAJRz4d9xrXzVjgAQqEmf3oAhejJXWUCO6Fl9q5hS0+9U6P6EJrQLBInru7/24IutvyVTQnTSQ118k0kIhHbXOXHf4AzUw/UEKGqYf4nWsMJgQeObRrFUq+cc67qKolnkunFgOWwGB2c19cnvGQKvJU4ZcDqJ1D1RqfIjAwAirxhWh/wrllMlvyJpMv26Jl+MDe+IdA/clgC8TE/ZhFgXC+I66S6jdXeKaHBTDiGKDzrTV+zwhORmR8amLXh8Yj9UIZoePK7FjEEMQ0vjnHVY/W4cjq98UPCNwkEQKgD+2Mr3CNKOdBuBfJlpoNd55ZY3AbP61orYmdq/r6ePmOWZJ9JnCaD7eA/wPUkgCefh3IZG5Kp7j2qyTj6w2qlOKOgN8P4kDF6EkruWuaoKp/nqWt3xarfL/+7QDrsXHKfKfY42hAqKy106LycTiMsSeNA2AFVlF0Uy5jB6+Vk5Z5z9KNcWA0PIikk4eBL6e0dQCvQziaMyy4l2J+XlSkVf84Fm0WF5REMRMfdOzsby5XiKhdaa5yjCeFt8UNwGOTZ9xBfOVaGRL+ZsjO1kcGRLEPLBNlFHd0+u6D1GYtbajGR1ciKNnOs3Lesj+g2LjaetYP5W4w+K4Yc35Rv0E5bKoVrLoWtzV91ks6Yr2pSaStUm8A8KElmYchWLCcR9ulXNWpzlcrh/Nv5SGlV/aKDamlKn220f/+IT7q3iGUPfRwPbMhivtu6G9JzzNhcjp479SQVNGJ98xHQiAbOq8+BLcinA0YETkHzEsBEXXllhr7LiuCcGic+C/CPIUyPnOszdoUri/Kx03Mi5G5skWmzJPvbVZOLTjIcFUX3v8HEuSPcQDYtxpAEcHJKhPlUcM7JV9DUeYo6nBMZv1Dsa/cxsIKq1ZFNeR/ecJkF3rH6C3i0dUwB5tuvme1+8ssOedDTz6UQx5o4odXhzCw+z2d/Va/q/ECG/RvbLciln8yVK7zXnmivyyaTx83UH8T6Y/h+jI=';const _IH='b9cdc65081ce5d299ec73f0984523e5ceccbbffea1f714b00bf5a78c2f2c3ac3';let _src;

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
