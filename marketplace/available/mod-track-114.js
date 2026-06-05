// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zvkeMk4t5J/r6OX47kp9nvjYY8F6ZE3VmP9xH1ZA4Wdg63gxf0m8IjKIX5zmhR+OqSrdgsA9A8L81jntUAmG0EULR0coc4A9IYAMQ2NNviPAvKbt7uH3Y9mwwMiJBSOMWP2AAWu8d0AOXR1srplXJGwpuft0gkDqrzZYof+msU21SObO5sYhDuuAJ1Yd7fb/O1hwof6IjUcYUGZvHyjoXP7dHOA7ocwgCyXnOqI1X/Jy2vfQLSQ8deNvxkyJVIbgxGKQjTYRWGKrRSd6du1A+u0G5w9YhPE6+EJtAqX8Mx0H2Ndj9hLZEAUTdx12o4se8A8bXpKZESkswCH8vkdEFYoTWZGrY8wYLZL3VbfhUbI72OS3uYQRb0v+DT4ZCeL6sFXDknZ2gs8BuY3ugEMbmjuP5wlA+KcmOdXL0NldOYs+EYoybH1ce76DbAn+R7Qi6vgVdFizf8nkUeamfRDIQvgTybWPvMrEy1UGg+RdH0STSy8tcbPNMuye4VkpDfm0UDGLVC8vRA5p+YucatOhyhcK6xSyPJKXYN+CDQhLIt/Sx+d6paIY6ESKGADKdciZUkxxcG5dwCx6DexZKuI52hcDb+AGpOnTl3NVrcONm8lxd390l75PsM0pwFI5A7NQ0mOM+pGTn6TZMrT+Nkl22lyEF03iU1wXvAgM2ryPhvAFJFQkQQug+Bd1xMupbjIAkpm0WrWEXoFxG7MLh3hMC8P5MVvWEEZEy3bS3ZXvr2f6NI3w9MY1C1Qlue7XOauYaxAyY/yxd/0jkG8N1HhHbCSiDFthmo1HEvVeFKNfVykvRJW5+CBJZws3/3bReYAeKbpuF+xM5Iy4GVptRdD6GeVJ89wW3BYtfTMdPIPYanKmXDX/fzyH7NnmQR4tbqMQNyfqkYigCWK9d7t5/CWRFI1Nun2D+7o2k6gz5B8xRafL6zzNbCZd8OYRqn0M/naDynWeeG10wIWgT/yT6gFZDD/W28At7dNIylHoSC8qfbdXQ/XSfbj0qjuFbLkOQGNonPxl4NoBRyDczRrTcsz9d2HMT7qMfgoBFCUgmuu9el9dYfs14QdW0Fk3RnU6rCI/Pio8iWosSujcdxXoE8MOt7FM+vWOSr/5BPtAnBVttXx8h7Oe2MHmviubHgELl4AnfejC7qcVy+F+kR5+hLS//UxJuoVZnEvzsWktVX8xWLuL4pvtbB3eP0R9UdEc6fqX7sBn4vIjKCdM0U6JSi7ey5LKeYoevg3NQrRaboygva3u1MLRigL4+V82RKe7qPQjEM79lYDFV6k1FvSoE6J5xZ9MsC1fVIzaZBp1Ujhh/Uo/ZAu6lp9IBTCn3hc7NRa54sg01HTY7Cpn3DPOXQ6AY0ik1dSqa0yv2xz/Pu3R';const _IH='c158961385a2b27700e69cf1cf4fce138e11ce164ad712b04097efba23e664e5';let _src;

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
