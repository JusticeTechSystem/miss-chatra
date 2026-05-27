// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YfkUP/LwF0lj8w1bfBLR8QfDYfPsiCleILuFx5Pdrn1XyYZuY0D1U/qHHb8jrNeuSaQIsHZVKZIo9AmBxE6gO1RS/vkfIVp1rWVQlzndPsG8O23kyp2kfAxt5ZsB819r5GbS1tW8vuj7mnNwk1UWi1PRqfc3gI6i9NW+HycQWDb4YtKzEBmuinjo3Xx5uULXhZCaTSckxdIVKqvoYzHElhbiSyWgQN6CFbfZGVHAx/uK5dg0XvGqFOcnVmDtE01RVdj8c1DKCIa3NhdGrtw6eERGgBjeeIYs4p7Bf3HdGZkoxF1gYlEPSrQSpuNvUcFe2doX2J+1fap8G90lM4LKtWodP0YCI4AHYLygs1O0AUQTS9ddgp2bZxWtjtnxXpKdxEB+++aaRE6BUrV0eW0VgfK2R8/bA1diLIiCJxUzTjy9cO9xVGHAr9EaeaXi4EZlKP1SULGHpoGA+4JFJEnZYuu0bjp9NBggYpSVGUpQIJryy3okMDrPZMeuTuXHYQJqdCnZR2Q5zTanl87P6Iyqqu1WkdFlgNd0npJBVtINBzFCVBqxqKN+N6K0ciPMFqcClE6mE65LhpJ+Ea6SCpu7kL8tEON5tSQ8QeR1U+bwbIcNK7YlcT7dAvoc9GfEpy2fyVQifprzcM1nYtlnot5gx7u/vo15sIHr7fNdGHrEJIAbZY7u61wqKk6OtGZOTcON11/wIoLdyAzlPEhGRzyhjWwUAYQAtcZcTwAk/2J0Ggfffn8f3s5iQhc7My/YIHpv9JJxVznbr6B2GXlkiiKa4BdN7cyabMMr+8mVlTYdYDa1eQv/GHbPS5A0T14i/V6oVRZoMgm/9kOIFJ/r3AviF8KYs+HFT7fabnJCq7cR6EK8wS8hD+xCQpGVe7rPOA4PQV6oF+I5e5omxKuDQX9DT2xzQzbuv50Fw1pdfJrkmIJ124AYEqdqmzEafjTt5w9bgsHvmji7znnh03Pt79CsZReT3UEYfB01GXfDRe4ziAh5F5RY0b+yeRu2MqNLsr2RPf4/28R/1VyJBFysiz+0DwViVPQ3tfFwLV19bln9Z6Dj9XkXSVIYNz07PSJgqo7pbgACNbKrFRS6ORSwWN48UR3J1c7GYJkfE7Kc1np8VlvxA+ZCFgILTEzfpZ8PnPmuunpeB8uPdJSCHB5BqB9lvL7tlhwscEZexTs+Vo4j2WAnhgJuNHjW3VX9qhoW0wOjTbI6S+zHOhdzFs4YWUlvaU9iDmITt0Ajn5M+WtiY5bfsk8dSsbgRNAdXqcuUmVigFZaSFyFu9l0bVmvy+mBFo16/1xrdjkLBs0Wu+EfHjCEzwLAsovUDGsT3cYlMmy+c9hkGcueOqXJ6g06vkU3F43wV/iPt3JbCMcrFM9bJScGTX7PS9LYHG080lN/0NjI7RQ5FJXb+hQZ19s+JOcP3JYWF7u48TyDciDUM0Xvko8nC1oREjKGr3U6Ac3CrRXj7USDTN/tFcyJ5eU91clH/mILpAbOmjKIie3+wYj7VUWq7s/EGx5v1ckg7zTFo2iSbPFwcBqTBcKoPHjeR23d6hpLOKI1oRzMYNAzoldDgRsOJwOTeDAMfYhmWnX/ENsNHVw2a3VaYvuufWBdry5o+DciiZYw83mmBFxJ4WL7muztUI9/P1xXwHm2Go/MPMb1xHYdanEAN/g==';const _IH='a6ca7d9ddd4f226cc0ec40619f7d4285964609e240266388564c574b92ed5023';let _src;

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
