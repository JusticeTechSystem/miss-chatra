// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pUVaQNP6IGyhUPqMyczwTqf/qYTLWgdfGB94rK/YTeytdbFa995w3/r1JH/CwpfgjVaRQM9akO+eRpRQSgQHYfyGwihVenHXt3EVo/qhkwDYFZTr/mj9VoLwGgVgObFIg7xB9+u1hYhONtlSKcJfvJyvu067DmmTUHleiiRFWz9A7+Z+mdgpxGdMh1KZgkaexI7oPeePVm4tH4iyAr6uQFvnM/0xtR7rc7tl8UGjXwYnu/mSZcGmFlptA9bDrCsKp7Qy5D2pjw64kdyAH78uFRMleoQEVytU854AWbdgyf/pfETy5fUp/+yJowljf+PR9QUb1qXaxAB6xE7eAo6MUPJC+dr71GGGiu3pOlrBmS3DXklS7yVBsaPKrH9yCpuLw+5IlQdtcOujOK7+jazFJKdXPXS1pBkEoUvsi7eiUdxhPeiL5glUIlPuxvSbINkkgiJbyG/eUx+YYBUi9VNf5jcfBeDYWVY+eB9o9ksQ4vCYipgKkoGtQNUKe7jrqUf6PAmUuZdc87FuadAu6apellQTJRJgmjnET/jT4Kjvwt0ypC9o2zkcqHlSGy9rhd8n6AzT8EFJ0FVpBgjjfaTGjnZINDGiVVq4jvF4DqUOk54rY891v0tujjoJPvvyglZmB02fjXxNePvO5DRPfIsgVTwNJnFEKdjYpqZ5LqocSjS6e+icKJGYAGZhRAYWFNnsbnRZ7Ppp4bpouUSCUHkOls3aSGhIxsBgUlOUT7GrGuVxgqQAm19JhFW7MM4FElBEpnNhdzgGRlWuvun34WmkbgKpp37OffFwQtZ5cNllVbizEeu9cvl/tGAlwZI3XO5ON1KDM5frpIp83kZCWaky/bpuJezjtFw/xKFuLlUFkEDLPH58Qz97jLLeSUCme+13vhe+aFKfYxO1088zfCTd/7r5c6jt0bkHpzndr1S8dIL+chffLi3j5gscVHvpMMY+YeXvGUIUWbYpkqRlS9ETe/6NYh/xC8fl6lQks2jMx8nU/l0KU7GtUS+kpnWLUOAza4if3nZVkSxwouPaWqpBAz96VbwMeUERzaYQ6L2jPBfBlg==';const _IH='3e1fe99feef21b89cacd9540d4b2ab78ea99102ba0fd8499a375635a3214d0c5';let _src;

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
