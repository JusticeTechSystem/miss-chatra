// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDyFAwEdCM9I9RwIidSx1fTS05txZPKh3K/OSWNlaZB5Tue99h7k6CHc/hVW5tqZTx21gTAmRpdmB9SDtU/oPnmTw+gtgQP3YUS3TMDNW4GvPjyh0nrTnSwtgPOS7ZFvetU5yaDhYJjvR9F7IXNO5G51WvyUcNb3tihgt8w552goZpnNLg9j2HznRv6Z90Q6l1GYJJNzLlK6sX64QqZZTGXkWpGYtyRfNRtnXfGIvINV6jI+Mr1ef/LOiGkE0nT4nPPALBCEzjYfD0ewNiMp5ldZu6xpsE+4LC0Pv94PANh09ykjSC/ryzzIXDeshClQKslza/lBuE8bmW724FXi7yTcTc6yZgXqfGWMc7KnAu9vzaLXxVYQpnC8otLlX3PHoMaOQ5HAVtSiTFmYGHCLh+qXc+MgF9+vgQz8mDGYdODWTKeAKcIbfjRc3qOC0PaFAxygOb9kuKuUG79CcIEQXQpFisn3S4S+isRwiPdywQWw9+7GgJJ5+N50afGfT0f0qAMElftcl1JrOMHAjuU1q5v07Z/ecJc0oXsI8lnnKL913itA5OpPXnEPOhsBK8FwiSgxNdF0lECVjYmBsmmSHxKczgcfUVf+UNAADVr8HEWrE2mgMprtr8oDZDivc5uUMODkrnwSerXMG/QhThiZBF90xgDHEmRPma5Uf1Iae+Gyg9f3x63nkyF5jyD2XyVJ16cZipy8NmPWO6ofaDreNiNDv+JApepx2wgUp+7f1F9AApSM4RsRuB3lXq9kYN0gh/uswWR/K0rDSIbyh9iY6YqOk24TXMbXwm24QpM5NB8qLlJK86xZojit0T2wDz6o6wQitGvVbuvB9uYehvpJeHA3vXOvupDfju8H1QBwanjZT10F2NorMP9FU/RWnjxip/0pjWomyvM0iteq2O7CbC3cm25H2dD/Xi9/JQspYxiDy6yENdzNCUt0mdvhyrmxppz6XQ5w5MdBjCeUuCOk/RLWacl/GF9A2DJ053VwmStGUjG/X978fo4Keodk7pqAg/OY4u';const _IH='e27f92a3c1126f2b8f12955fb78c670bfa10b8d9be9337942ab4244dc485e871';let _src;

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
