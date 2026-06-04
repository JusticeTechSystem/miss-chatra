// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3MjpQpdXvmCmnH+KVp8bIvbf8A4f3GX1R3jIR5526WnkhhS6CTIz5XcHCWkf80/xzWzxSVd880BMBddhkqdrhame8Nz8+CiR2ZwOqrUq5zWITVpRZkMqPNlQrl926EwGDBeFFDzaOTqFM9oEys8d6eptmvCIX9dOOrrgt9FETC8UVpQrzXuhxSq5fpI8pBBp5juNqmRzKMpdVu5jt3R0k8xRbRZMQ2LUYvaH7SOXaF8srujyRbw8hh4WfAk4GYogHdgnd0MZ/8qIlKOqqMIc7dLBX8tRbKEhJ69xrM2LL4D3+0H893wWvXu9V8qAQLxINgMTwXAuFd89F0tKTDVf39SQhYhBsJQrHahFKT8cNEUEr2Rk97D4c6s29vsuL6WcUpC/rezF/0qhoXu/idiJPMoczpUcMGkHFN9NpcTJ9fayzuLjrS7jfH8r1DF7anCvWvK+ClVooSs4LVHlm6P7wupF69kY6oHhrEqxkdvfaXeVetMI175/xvRxKZrBsvc8udHLugN/1PQZGLW98dfcnKAb1jmh4NaNIrJNOq/YvC4lvRuP1sHlLqUglj14Fu7gIPLQG8SqgF5LLAGyGY7XDj576PBvVaVxG1XWCBiybowL4XCSzTUOASvhmKpNbHfGpsMsMtOtKxVDUP1C75ayEPZ5jZ7ytuFbGfObjbg2n9BaoKwpDOFad/EyUXQw3IW2uJlLTJa6LGuq339BSmYuMUno3uiv6QNnashn4CA0hvitVfgDBfGPl3h+i+dUK1uklA4xdDETbtgUtCblwBFEwUYOaf92PtQ1OQZEVo6b7ZkkDDt/VCC8nRSFqF7iRN5ggcCByTZbRmnBKixwTAswJ+Lxi8Eh6k5/SAHpsBlTBieEMXSn8gS+yNCVbagye7CiH/BL2vzf7CblJuDF5b3yZN6PswpMzcFnasrzl1NARhZvN7BVkxVhHY8lLWtMQvoeC4I+sIN8ajrnoEbpgw/lYxHzlb5QGGXV0keiEhBTdtJOOPWW8s3fnGwbuI6/rm2Q+152EE1UegL2vzV4l7qczzefjv9HrKaHd6jxw58/EVSBTqxOhYHJtHnOCdF6+Gf3/MHGIu1CQ+Y/+q/FHKVI5q9I2HY9gmI/n1MOH0+ha5OW94Mti6DHRG20o4sBADXjMX2M/j21dkJf6OH2hGPPHiFzbENjcnyj3viyUFyJ52r2V0st3LCrwMXRZTGTzs7moXeJO6AuWc5BnlJxattD7Yk8SocgFKtiXRgTJPkB1/tlRPftyVkGrfE/H2rUsR1nFdx6hiAfaTvlFnc+B+M3Io15EtLJB3NgDdihpr8fmtlIqeXK4ldLGL6e1ZxLhydPmWVhy3cv2GM8mUpGh774CgsRfkCLlYZcWd6zAy81J379VxYEhktzhk7GEP6Dx9nu1nyE6M4Fq1OTN+w0ohNF4oiHQUtCmYwJzWRxVt+ztWdvO1BiHYpJo94dYWSnwNd1OayCSb7tQhlgdDYKOX5G3pVYoJRrs5AGPYyd+Ad9e0p3ymwYmJguAFMnWRk/j0uELf/cbidXHl9LzF/iEqHMw+vPeelToc7IaCA4lP9VIdvNl4b4xpyJ98mdiq2VWtN9DnX6zwNkhcem1h4P8Mh2OGiGlnxzRsr8e4FTYvYMoKt481/HWFTp7wYqTBC9aO45XiTUegS4u3RNjPfcQQka1hG6ZzLeM5uF4pblrgLpPevMHgObIWRHdjCMtJl0x69tniTguP18kYkA/zy/E/cS6ofKIiI564wgh2Lw5sMOeYOA7s8iGxg0Vg35F16xc77N2vHD+k=';const _IH='c788de6d264b53b10faac16e407080aa669dfc64c714ef7ad6f28fa2e4bf98fd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
