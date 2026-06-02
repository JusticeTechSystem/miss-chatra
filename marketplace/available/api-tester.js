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
  const _b64='YjrkJuCEC8W2SACRv1DbY4Wmc/XN6z89vxyufrSIVQvptUK51Vu9tkiUYuC7OxArxFUp2gtik3b2ju43/4bX4OWuIuvN8dbymy6QDIS5p9woMAfH9Es8f3+Or9zc3maAg6rL+bmV82yOTnaPXcsDA0Js/FRDkzRWMPDb7HWO39Cj+QVC6g54N4VK8guJCxUgbJOfUXNOdFSelGSbH6RnQwCx3RMT4af4ceUMCJ5br5AicpjNUkLfKdzV+fWHia43xMpYz3zo4Pytf4WhObvqUPKqBiknr9j7tu9ZhuTeK0KvXSG8Bh/mGSAk+4qbQbFPJAyhUdComiaj4HUEOnVD+h3Wp9xo+F0P97xrCZog7NaSuXkV693txXRCe4qtotMVSiPRdwtmmoT5l+w31Mwdv2pMtfQi0eHrqN7NRvtsfK5yLFRqlEjsozA09F4SwBKs+o03UdMuEX0MqNn2z5jSGYMJBuqIAW9Sh8Shv8UtasOUUjFh1sNbTibk+VratgfyFj4+VXf4lODovCyo9b7QFmQ1tVW9gxfPrY+pwktEaXgvQRKaLAN9HmGtmjDRAEKXAdaizRI1QInuXL49Wcvtwlv+OY8UZ+dh8eyeXHCLSRMHIC+QhmKbNn2ocD6+0z4uu6rlU4L3DVwNzhM85W0CcX8FozCix3QkejQIZJ7cUL31NbKsyHnsajMDhLpQAlSf3qLhJVsztNOxCoD69NDIvgEzBYKcFb8+hSwcdoemChLfyAZiYwsn2o7BOd1ktgDQl6EgElLG17PPp/QMxg+g1v8QMq+t2DwAujOQROQXImE7EhFgBfRk54mqxB9GRqmvYwwy4LNPgrjDX+21yZFRlkBXIUX+GJFxrNYDSu9KfnNQuJYJLilDMqeR5G+2LONSSM3J28yOpdpWWuFUVH3lvk4cnqxt6LmF0qOLRNMqX9xMJIw+5+6Gxv++Z4Nl3jgMAeSi3I6JI29ksVYoCEpOMw5u1Toz7SV1SRpsgv4HrjRWlrALzAPHxgqgagHU68ETP/xl2H3oVazXDvP4iDwLte3zN/RGyEybgkRdDNIpUNAYnqxymDqiiAqKz5D+HaCUMH6piNnDKjhC7ORCBAoHkquVibaQzDtVkCVw8HJsPPvpLDRcG86/dCNF9cw/3wlYObVWx576guoUy/pqMLyfQGBgUR69gMCGxLS/zh8VLtO4lLkwmULvoTScWFmRrxiQmRRkNLm8G7CJnFpgDVajDsGZPAAcM3vIa2eWZxv1xm95xSj4gaVv3IJMrs5ijwMNBEJmbj89mnk/JVIRiJL1RZEGheWSGNVFKrs/37lQ8X8Z0EuowkCd9JE3THVGAZ+DJ7sbFfPYMOS3RAbL7iuV50gn0TgNkJGtmRNsEi0vaz3/+Pmgh0yEsMyAM2TT6s2r3pzWtaL8F3BQ8I0ql79kX55jDpFBw8kjeiXBrKUp3UcBB43BualRfU5E6WlTi8wG30sxZl+q3hmgTDjjBU1zzq8OjQlMDOkbRDMb6xinFTyhpVtOjRBY8IVfu1NoEPf5zvgfDA1CH4aGyNBNqye1rfVa3m680w==';const _IH='a0b8a87f88d7ef8cbca57292423b9164172812530e7b5aa6f0e96d8badac33b7';let _src;

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
