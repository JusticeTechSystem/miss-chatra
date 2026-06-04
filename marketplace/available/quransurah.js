// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8v3+IvFPT9D80IrrC4mepz8GukDNFGpCaeMOCqqINSSyB3Mb4zhhTGpglVOxmtGHwwktAG0RGFd3u0eVqyIxGhp6I7i0ePtc+yxmi1tQ4wieK5Fj5L6fvohbr4gQhO6TIN4ifYsuaMvTDqa044tzHx7JxDqyhqmO5E8CqlfnVanIYR6TnuYK9t/Br9IKfNH76H0ktSEH/trXJXDGAVFnga3SJ3T3qAW6ZYQXaeDd5caeJRZR1JgzjmUOgUlXR7k/4KZfXkHXX14XWyzb66wlWQxzjZbJ8tBaoK2wlYnforMKIa5HYD3+EiPy1CwRO++dRLgSk5jhphs8rf15fn7n7a3eO7eJX0mc8uX4l3iih+5t7CV8vYkGKpFTo8acHni+GDaSFKv4Zw3Bo94N/nTRGI7C1gVcm9swSaTGkoISPANWlk3ajGKa5RDRaylF9S3K5pRs5H0OBWOHCT1QHj7hCVSnDrwBwn1ELrulGEZKcQLUk2Zk/Yrk0dJ4bwHPyweNu4isn4XA0NI9fQ6Sw2T7VHbTUrVz8OMBo6lBobHzI0P3JDe20YWTuys3y9I3WmFHDyO8+sHsD2cc0HzmMY56ovoURMf3cyXz9Gtycrc2q+UUqtZ1BTVc+SHpws5Rovu+G+NXiOY4NbeQs5MMBKLFasZtH3SB7nWZa4Zfhrgts61MZmbqoCTnpn3m4ausPw9foCwINJlb8gjCN9vx7eEDi6G40KucsWeIM5ZyiTv3rY0YQmgS7pnRdck5wDnn/eu4ypq8PIZd33kqafzHlCJtvDEzOBfPF8rHksKv+fNbZL/QgRMlu/TUY6MMyKR/4EdklpGUEdPk9XOJwHiTOam+IlzigrTlc1aKS4/yNaWmE54Sr10/EVm2v4J2UigLwVvVwbERnhr1RDsORJVgU5eCwbJ2yTc5SpXqSZ49QMFkmyVeyTjH8Ezp5Y6LjgMj3B5Xmm1XgXoiEDlZgFEWlakEUg7QWrovPj0yGLzP4gD/EL5csIbNYQ6kXSCZuWRGdTo7qpA1Au73f2SmkKh3AMIF3cRLbcFoMdFSsEcXEyeL3mW4LuXcwUA1XZQ/cyHXVTV9ibWCQtCa/80qHVO0kVjskGkIQ6ZDfHbjYCcnKWSmsPZScapIJfO+98KdgZgpLL3LqK627mS71k7lOR05qLeNS7HVQSYJQ6N6RR5MaMQv3/tYYSoGkibPBj0Hodhv6BD0vb4E/SbY';const _IH='161e70631f553e276ffde0e41b0fb63d385ce5f0c2d670c3b299ee013844c9ef';let _src;

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
