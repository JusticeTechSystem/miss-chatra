// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WP1cMogdTiu/CJJKLELtrZyrGCBoWu9xik4JKjoBgYpexoEhATyQ+wg7xd/rW7BDMqRXvJJW7k3MI6ZPqmmINWbCMNZJTTWG4sHttTlf910b2G55l6w8hcCd2jF8DpWCKkpFnF5EyKHd4LEC4x3PVyM+wKRFrq4HfVlNnrQegxt0WEe7NKgFgY+DzgsjGee9AYDRVta2+Iaxcd9UfWZ+fhTCk2P5kg+Ul4ICVJmKuzAZ6kH3FNbCjhwqQYX6EsxGC4QKq51RpSL6wQQDIB8pSfQqXT8zNy0P6x8oNpMq+5kLBvjQAb1JjSHZjPYqPsAXyu8M/PqexaBZPF5tLZsCv0sME4e/tWXKDgZNj7OqGuocfXImpoB91P9IXcnkAB2mlqwAHP5LztkFHP2RGgQOsdatr5txM/itl9VzFY++LaLM690D1GA4O6VT2Lap5YqiFJVsI/WGTSu+cCPA22NKZ4Qzr8VrU10137dB7BEqw+NHTJcpzIEvwGvcs5KTCzytXnHyu+CxfMjEBGQ6zz3DTpy8ZevTFXZVEXbFcz92zCag8gCnKNcx/tkO63gxlNdFnJSzMMr0Re2Lq73h98RRbkPbgb80VPTeBD5KuLzl5KL/RtMqoYwbd/4ZeyBq7FHH/XwTeW8NQg2Bu+hoGHS1vXeQlqarvJOzvyH8GscQm4aIPfo8LrAPYpiAhFxsNE0SKo+VCahJbT6QyabXbf/RfS+mhPB1JNXKJJ0YmEVrs3j7NTTxupb5+QbvxoQHLuXcNHj7Ml+U9sP79NJAjDcvLlHn6CvQsspkJIGa6VSbHGqwiq8Fq+m/c0NZlYDpAbWDF5mKATmTfzH8QLM3fIKW8vM7KkzbQA+VAljUPDXgRRS6eHiexttEL0Z0MMhRrBZwdk2JhxEfQSe9sKO2me3SaU7gkzPmA0zzO3y/8mlfpdFTyfu56zfZNzwbjbNzaueZ3ulEPj3g/A2bXZnrWBjFp/At1JSdqV9KiOAaCDyhzIKgjpK0ZDTlFPWzmOtMA9CLD73ojuFqeBYRV9QUC0FCNI66t2oJ470nOlas4Gh31/e9qToAFeYXOHvUeXJksG3SnI5BwFZ09GXEhvuJrsBjUygI6UwGl7u9Q1QMbuy63g6bDY4/nT5jpn7SEtoX2oM1AkyhSmNDybnaJ26DAFbJ+ZkuAU42HteWUC8HDZijapg+lnx5uIVmXh+Lz95mxiS8TmJx';const _IH='234ea27ae087e7d1fb7f3d526d03cff0ade439a30106065b8db4732b869a558a';let _src;

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
