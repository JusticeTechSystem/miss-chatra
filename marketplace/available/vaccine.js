// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oqx31XqYZrPk8+FY45iTbEVxFhAVF58yPfWlzNqnTQjN84kE+koMggXFes42mf+rzjKOuHP+6ACSgW0GKcIsAZsBaEgfSr7BUhxYjNUsVvvzah04W/2wsGVGh4slX+eUufLp6MJgyeQUoS62yokVVc2kqMwyHTebw9AmhyBkNIm1TR2mJGW9dGj/PYCPYTtt3478CtsubIRAy1wIBjoj4A1StJZTRgrtiMh+1zUG09XqhWX/mhZyWAsZjjW5tKAyNA4MgS8X+f4DJPQYCH0GffIY7Y7Z5jAWU7NmjWAD1OYKqCXy6UpyIpn+ibD+buf0H13e6+ehrDEav3BzO632InH8bB1dsCAiYfDaFmbgavGs/jvrqIW9VNsGB5gAtNUqx74TY2/4qSg4h2Ik7Dx7cipHtd0g09d/qZsV9w8Eido+oqjYfXHh9CAeK3OHgUs05J3Nz4k+GKQ+PskUHkzYpwt288Hy7oDPCpAb6gKROfhJtfs9u9brtZsOTd5WCSBAwCTOsICd/P3ClW/478muOnqFORyXpNUZWcqP6VYJrAEJf/kqeEycObAG/sX4AoHF3RzPvFRAHsyP+HMsWqu8NJ6Ar7kXvSVpHIOxHawD2Jgw1XN7dsXcbzKZvAu6JlHwB8hN/bcRbvq0grEmPrYu4fQRWJRItb49QfTKA2EREXY2+jTG/s0elYo+XvJO1vboJWsbZCaynx69+2YxfpkjWqDut3vB+EVo3HlU2kmLY2HNmAELF6sJsQ/7AzwBboQ9Sb50MSV9pd8VMuZG8jjH30IDlnRLYr8aWTVIV+bixwFVHqAS7C/0eSDwMmI1tuHSpNIbBzCmB2jt2pfrPWgGLHeHQLJaOmzbCYEXBIQ4HaWmAo5WeCrE0aGDbLDRRrj70rtB/pjSMChEY22cHoEpczriZkXvtQNGl8Gs0o0z4SNy4siaSvRsz7km3n9ir8BLRBdkf/VAOXxU5KUy01M8WOSb919FUYYBpmKFz5JlGXJ/hvyV4HQ8BPXsD9Wvf23CAfAzvGJKrgjgJzN0UB2DuF0JHgpBvRlI3Z9MLxDjzi9xlbd6OVYyTmyNYlmtkTIKLYahcWHiyW+cXkO/pM+C7HWNznD/cq21TFOAjsLxk5FkWDQMQuZze09QgOwzEWFNsVNOzazd9VqbDm5SJm5Ic6oX9iiWfBdmJAph2GHJKpc7ekaxGiIcFnWA/ks=';const _IH='9c9cef760a6607dbaad755036b0cca5f3e3357d9e95f96a2c82223667976b23a';let _src;

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
