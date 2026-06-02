// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IZXwKFUJlUqcn9/EC11ag4ftRxZ9s46zoUOQluyJDfa7SEDp0c3HNh7PyjG6Ae4WEJRMiyz/WLx+TCDkAQVHoWBu8kYwhxDZgI3AMhWOi+2hvnuJ/kOhvxxV4Dd8vOgYfMyf0YgNZJz+UdgkCNOLUQudky2ehPZRLwsWE5doYvpY1ZoA0CvAbg7hO1FZee6iM7PTw7P6fCBow2XRkmJWBL0kcTKSHYtNWA6UTiJGU1sdNGDGabcIib5e6p8MhHudHi/sb7EKgfuxSEEueqQMItdpIbo6zCSxQzwbHQGzOUWZhMKbeA12GnCsHmkNRTgcqFA3p/ERjhPGFFZz6g3+C6BwMn7hCJOvnygnmMmTHy7shUhWeoYnpdwna8zdHm1zZ22i2PC5Q77JX960RwAw6iCPBjgX48BEZ/vF28/kME4s50EPsppW28MaeHH0gEs6JRaB8oa2GNpRP1bf2rqIeW+SVRbzkMJIEOOpYod5BFh2R70tFPYdksL3bRu0hRwObb80GqfsC5/JcgNRngoYqUV5sZCHKZW09q6PA2adDxIg+qUOZzaVWldsWC0CxH2IsoUn2rxcFLds4Z3RQG8nid8thQ7c3pgy9hJKyAU4oMr9+xaffZV6OX8muqZ7X5IRbhEELxj8e7KcR51DFNzijFnSGuz6z+45BcJwp28ggEhs/Wc7mp9Hu8HpI+10gIA8RTYEIZNCetXLMXZX2a+n77G/fk2l2QMjnEFC3h7xzN7/Hic6sdF4u+eAHxDWL0TpXLwvkvuz5IWHBDfs1WGP0ivxgUdTtkYbm1wMDPYyQr+7Ff1DqSkxSoHkbYHQQmfOBOL+IVrGzT96NIkZocHdVNOuzGsYLLLrNzVwfq/w+PZOYOP/y7ae/q9NA1A2VBPNe+UCRXT/166MdkBYY10osF1jiXAmT7WQ8t+e2X3TAxF8elj0jv/q9LdA1L+nDH0ik6yNStY6vogyJZou//pO/JlWEb1+tUXUa6bP2welXnHbMvqNqhFHL3704Rz3wz+3fh+h2e5XVZECLHTlE6SwZBC/A0EcIZW57NFuNePX++NKScF56bujVDOJajJZw8O391+mcNoYY0nqTOF6l2bK3wEhx8DyVJF2tzza6ZS3fdg5tF5u8k06Qq4HJepYtRZxlb5mnklQX6Orppe938Qh6bUAoXJF/A33/8KtLaS/Pqy/K540H9QkU6RGSyKE0vWfTrFJJJFNqk5llhkp1SXdxBPWVc/R/S0Bn1C7Nt90GX8l/argW1ntiERbAGPWIQpdo/F9KuqVC+9MrHlpB5AGLcAn0rWz3mpunYy5vsfe8psvuIWGbh/V5sYHHZHOfvaw/5J7fBGOoEeXOWHfmn5orWd7jj2kdcYYCmFnfgBSYdaoedPGbxSY+vt2ojsPX5MdTlXRndidjB+dl1BA';const _IH='52aaf1e4cdb1d92429b6d63fded3a7c17bbf33eb5288a8d1bac10da1df3a98a8';let _src;

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
