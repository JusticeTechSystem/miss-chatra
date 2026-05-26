// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gtGnbNbj1FF/HUve2CYXObtfvkUh9NmKD7D2vNhzcLEtK237AJFSTJFBwH1ddIQjRSIXijryqzRM04k+NcIo3JRnDZ3dD0JiSf2NqzpX0m09POnQW0tRs0+AdyZ0Cc7iavLKrB6hftwjU6R+Z8+hNbpfgPIH1aAxE5z/rhtzPqpDbNy43IL9WeUb9pfr3eo8e6zypT3qkBoAotgioDOMIDfzHZQGeq0IDvILqRnWhI3NqwDq8TVbK0R3Fqbz9pK+Ffhrn9+bj/LiDE0UAXCGiMwS5vdjv3PD+bYmq3cbZdrepSyF65+tvMjst7N4GO0n47WPqYPDspFN26nehqEiTwMXxq61EBsB/HpAWPvnoM2z4hxfurr7yvJaWulenODceK4+E6ImPp1RaUXurAhx595XpzqTozLaF42BqLJhAV6PTj8hx5qnf1vVd3eWlj+5q0pwNifocQSNiYvpUy5XnDOFSzavs8yttpWM8e1ilfCDQzFN8P3suVtl1iiKdUxGgf16du0uuXoMZs4yYyjjOSxQegKgK6YnSxJ8UfNmBq17kWtCMAWc35VTL5CMlLCSzzNfl1/NiXL+7QOeP0XjjwiC987+V9BhRzJxaGC60MNYdXAeXl/MEc+6d7M1k0wlBUd46DApt5TqXmvzF6tM1BuNsgkktyNCxqT2ACN3f1uiX1wWb+271n6UDH2ZVZQG8KMVPN3N3WUdl0n/DR7UDv10/uoSDJBoxaLK4WIxQVV5xJjyM1gLlkv5wjZChkfhGnJjRMXFVMov+RC3K+2Loa1IQsu39YmqlCZQNyX7FtcCDi/+WRcrVggpm3QYwy+1OeYVZpQWNrMBkvx4OvFmPrplZhFlRTIjadMDRXgZvB8ERAIWLJbNo8payDK+6dRFYwacie0ECj30pvoHAtOwoywD1uW8Bwii3WYatg7w/yoh1izTNZX9ybGs7PGzyPjKYSQ7bvaV5W/bxnlDqRh/m1UEKsuhsmYpyl9oeS31rTIYG1xF1cLF9fKsS86SuTF//uzsOQ2XBJ+Vz0xS/v7boJmthrkY5T45Lhsj3q6kTPJy4EXnyGoJLLYf5dV5tyy/P93en44SkNHO6OXr0sux2AZW805ctM7SXX1ck4bpS8LOtkCEBrg3xG4k913pgOpLlMaIm5JZYusEjTdhveewYisyNlJ/DqY5ISfuz1KqHC0gtqP3dAHR/GbjHLjuvoGmY8DBOD7ZZVR/WQ2F7SL/6tK6zRtJM0IEdXy8iWFmdB6DXippKzR3d7ugW6adAWQvw9aSCebwZkEvYRWZCXmGs1ZonCwR1AwWpDODysgwR/C/dGuxmpKp9NhNzOH8ncsAsM5JQRyhcHAXhBBwu3WnKHNgHhlw0LkJlWhxcmfB';const _IH='887e91f8806d78930ebf9ad86680c1101e0b01c75c48fa05b2a936a77342e46a';let _src;

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
