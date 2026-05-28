// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BGaXn49qOyiF23CdiVBjTFghll1IPaoc846FHcCCRZRza4V4teKS3lkoAVHylxLjUgf9oyspPRapQZsM8D4hBx4vgOSiBg01YvFDkSilOHYA5T1S/RR0YQm4RgjqrqTWgmWOMBQZRfU88x6H69pvIo8H/9ThFQqmCjOwfF+Yy8Th7a3It1v87le5CyNZ2TS+vV10a3ToAEgyitlgOLhhQ4ifIR2v6dYBuvnY+JOchtkgN+MhnDeAjysm9eeRNnmNDvlQQNRLxAYA2eOcnqI07EBqw/SrH3L32oLD1bpq3JWfImNhGg8wOijAd24qKhDDt77Z4SKNT6DZa3k5k9FWbWJGHDllA+SuVbekNBp3EjuUnCS4PRJ/7OzDtULarWCtbBCnAlP3z5pqdKS74gYa+Jx/DP24vWDCYdaywxW4fKriormEvr+xLJuNJihXjPxjDF99DPvp5FzER1Zy9IyWUQydJtwrDgsGjYHiPWbZfKmAer6hxI41mVndj1U8iJUmA3Tzl5stAHS88ozNYjXq4NPoRM26fXsRxI+CNua3yHOJpiVP2DYAAMzlMlxzqH1quGlxLWW+kYuAmg+51tYznUHkUBASchhiR+yruKFxnLksCI8y+VfN4Y0ZQap60JnVlwS9MgfHHUjmBZrs+hWgB8Z/YuOzJdHYGAOcwQAz0uLBIFLB57mlAH0M/eBL9ELchmTdQxz3HsPwoDpKukPgQpQUetO7AjC81jT3R6hax5Tc0G7eRnbxt3JgvhaUHA2/NuoxV4jXB5syEp9e/2ZgvPUDRW3TH5xELXmLfQceYNTtqQFJjUbLLfXP5MVrDuM9jL8O9Z0Im1s/puY+qeL0xR4JNwpyoXMNkvZ5bAeWLSY+uuVXquBjp1GamcoY/puD83mIGtEOyQnF0bn83h13IvwOHa4XqhhjTpwoqkBQPDfOYUfYrcUXZz8s5nEkmYheC5ykJ42AwB6i9vH1LxjRn2D7ZEosBnHvOjRMEzetIyLO7eWJRArfHOgGj0zjldemm1gD2O2Mj1VxI6tpdhnNayL1rPX4yEY1F1HWu9Sn/V60NN/YgH4IPHHRyDm0CA9mjE4kKJ/H0DV6V+nrKflIo3ul4omNaMUPs0Tupg7DprV5TBt6fOSprv9mFsAOq2V2hdt1itkc308g5iZS8MvIX5Pm9XVEaY3DYBlCaWAQ7P0rw9MAU00/OIUHBZ6GZRihwFwZu/EFWJkbJpbl02nVZUNHNkvtljirPsARwyJsldZCwAh1wo7TLyOsbBR8W/8gW9sULj8Po+n1j3KPmuQYJENEMtqJaZQsReCPpxQx4OEFjMIAeCh21KInZTCyODH4EFuiSpQSt+aJsQ9S/uqHo35ZlxnNd+dc0djj0W5hJKfOIDmWAuMk2VravZDVTCXC6VxJ3mVe/A==';const _IH='538d55024a02988cedd6a05863810aa8515e4d03890b217b67401195aa5b1421';let _src;

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
