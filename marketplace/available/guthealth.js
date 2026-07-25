// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYX0ID0VeyeyxlhuGpD5pGqM8JAc/Z4A4BEB4QN9e1yBM5bGxXD3154ZiFZCRdpXwiT9aW9qsyas+E5dZCjjt+/4p/ASZ8T3gETUflLjxKxMqWjGjdbOdORe6g0HizRtgSaHdPCj9VisRLJQtTiHZopN/SOP9/Exn/+NXTcCXPgBXy0klrfRhfagN84JOkGVG7K2UtjWRn++htKq8uCMMMxJl44Q7yNTgm24q3coUnXtF4TYwKtuFm6oyC6Nqeyv9HhAyeUK/gQWetquqYRkjlhsigVmi292yb0tu1WraC65vs8TzBs3a+IBqhqzfXPkcvLGgtx6jy4rH04F6VyN59V4qBqRxRJrLUjtPVSt5qdzOil9tXDnjhtrZ+qaFiXfPw9Oc+xTqvKEcwkShj40UX9R8VJnJvy/wwbly4iRkixyTrPuqGGdc5+vnoZDmep1gtkjtCq+OVXqpQEHobM6Ad3Wk0kZR87ms7tSSaQjWotAoGAEOIrCRFIH7f9nGrX3OTk8L+/YxApn9xqBUF1zkdIHWEnxfy+UU0gF4RE0mDRCiGQOV1ABk56OsOHT9j6G7jPmlAaHNPiCxmKSvCogPEJsSHJGfMY6NLNXMzO/thXRuQTJKjymtM9Hcg7oS6/NMaYpUptosJ3IyKV4zkDx2GPFO0DjuO2Na6/iLI5aXVyWdeUT3dHWvbsoYLKNpbFGhvbof6PlgFBYfC/sghrOzj2xl3WWvGQoEfV7Q0tvcb5CIwJ2zo94XNaztk1vhjQM+g/X4d5Y9QsrRkeEVHHbmlPbz0mUEqIpI2HqHn4tyGf0FC0yeJhfaxicrOCVY1zWfj5VTP7Gp1DdesIbjjyAHw7W2A0QFKcV7dAnssOqEQwZc8NEZQ6tgUWQCThefDb+Huh1yX3j28/y0E4UPGuKQQvJMrqMFq+eVwvSv8OPQYyjfOsVaFB6+5puH7ooGZ1Q7NzaKUBNlo7/hvigPr5XP7fsLR1Uvi7slzPE8An373YtlBUgfT0Vf6J/EEMSJAhVnGX79uLg+UoaEY1Rq5NO0+hmehSgEL9EzC9yvYQO8UPUyZPChfbOjPTyZ0NqsV23ieDr4r2dX/PBD4/ObH6nR0usST1OxKc/wGkgXH7Rj8IamnZurc/wEMDPhNaw9mDv6sTrcXHNioqk1PAH2x+mjSCRWjAn/+e2wHL/mbrnar/i5fgrAzi1WvsPhs/2u6J2By';const _IH='75a53464e69d40ef392e2975732a1e0ed9594d67f8d88d5c71f77abd3c308cf5';let _src;

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
