// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nAk5m7bQFLV6ERP7/wZ/g4/xjGPt5AiCOH7MSAL8djT8EOtOrj2UIi6sryjKGCgu/n2kSqJGEV108Au+3hmHvu62eW22iq40eHnuulWRi9R34VTIq5qgVuEUkJYzsyZVcUc9zF3/MWMBkTz3yjQ7ROvHui0wSH9cwEZTv7Mx72xERWZxAv063llubxapM9fT+ucyvPkb/+44Tq5q4ZM4yX5GmjOqd8LYYmbzSamCucLMC2EeeE2qtueRLzM7msE/E/sKZmljGXLA2X4AZecxqyqTGmUHkgSCER1dS36WSmd23VKbnbPI9W1nZaKcUVddlmwQsrsixzuOuIGDM9/GxySqeR0IF9Rn8yH0vu1uXYjcgaN05pSf/M6WmIh1E7tFlIH23vynRsInqlFEYRyowv99thpuft+IYkYdBGoZ7l6CnqouZSWxqoEm5rI/8+GELQh3JSk1B1IFMll0TJ1LybnU2QuHTl6OTiw1qiopc4PuZmoBPqyN5Oge+QjBOKAh338mxwKTWnZl9yEfW7l2x5GjZxD/eff+q89IeBsHuZ5N7vESVgkIemJEQJO5ns2frDkoy/SfvBaDvQSC176AG6Ccy6gZyog5E44v/CVZKcdDy/HgQ+bXXHJlDj/TXr9bqbFCu8cM4r+ZdEVGcposjkVSXAhrrg4UNqpfMrLA4gs+YPWOP2tAWwew1uf5vitAd0WqbTaVFxfAwv03gFtppwbGXuwzczyNeUDcMDVsMq9EoBeGNl8lCYvokFX4g5WxdZ6pUXsf3FqR89SbEqR3w3c25jKgEJgIQlj91Zmbohapnrusb841iKHvM1FfabNCGGxOE/bdZCQeDurxC4cHdeV1Cbb7fMGx+prL9PmhAVSTPusnBKl20j2TlAAUR9gQyudAb50szYVK3WWM1hh+AQqIDLzw+njmn8JMHCqcc5LikKOIl+0+aqy+cI7lx+xRIdUCnLX/Vo/mQVXZLKx0hxThiV+ij5+q/IoMSBG2jGWN1lvb4XDqWbB/pHUPmJ/r+w==';const _IH='705fdb9846467368e9dd6cdff4de389e001fda276c81ffc2bbe50eff1320f4a7';let _src;

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
