// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ns0dN1VqIznhqzLiloq38DhbvlR6n3YS5d/8Vh9tbdON4rMmq39fLcIB0LdVicGgRSjd2cuDIWQvoM4/3oskXTwToCUItdNVeuUbiP+7yd1bcrA2c5GwuRUzw5fJfhtINPnnWnF/haBpFj/bFssvQoROK4AbeAMjOKQeC8cargcL6QaJyfTmVyXSoTycLwM4A+4CFZC/amrxf/ov5g3k50Qqn2y5wtRVGDH1MV/U+UA3LbMDP3/YwP9dgp3OCqerCz0xLHsF+pfH0BZFlpH6luuz5+FJ5Em4fzarEiF/F6SWrE0yA1eidDBN78Niv4qP/+wjauQkYic7QNFOrkKfr8cY9GMQ2hUVZx7ZPnhoZK1uWXjS0uLPWgT4zzX4UtuWvlcmdLPBIUoflE1xZADPnEJWUayJnX25aPFu1DPv0i9wFEA19+FESG0cgHDf4uCiCSdXeK2XyVQVSnOesL+q3xDqenNkfMP7mysF7oNwfh80OGOYpiv0m7eZYA07l2M/xf172z5ltv2VduI+/yj9syKVy/s82UvpvmItTwZVOEn2v6Ca6tQwkDzt+XenCbcfXkHKwV6RRYOti7u1CXk310PVvQaENUHkStPT+DZ8y66EHYDIOlanGVzc9/J1AT4gGH6qKMhQ7hYOCitLNH5VEEwa6w2HmQq0uMGFPJa0WMt9pUHqbIxxSBfoM0dHbRiXuWUkFiJRa8HoTu4pZNSSEseCZ12Xwc8oxnlwUbBP40dtmtwfjtvRk6NsWLhKVA/TLFT8lTgR1qSoRo+qZm+u2xHqEqSctgyqnmsG9cwb5zkdBLgYlF3N4supyG8rOeDPQd9Nn30tYQRmveqZgzRHqmSmVenviVM/o55/V0jA3PTbSvHMYKPJKWbHqVcnnl9WW+o54BSsDF/oZge1lJLlK6Q4TLqGSdbOzBqHNUEPXwNja5L6JQNwETbjHlDXOht7d3As8vODJzRbMa9G04gwpyxQVFPd0+pA/PW38Ko33qn1AGyoJBzf+vxGtyiGNx7UVdLrqWLtDR7FuKD0XZsMVGC6W1q58HUEiuakQg9ipuc1NIM0rsVHlJaxaHvrTn6tZOZeAhbgUEP2mJ/1Q4+bKmSzuZR4FuxjadKxzKDAWR5AeRdCF84ajqUlH0dwyhT7Qv4Rto51Hd0wlyQ8hB24nQ3WF3JP663wC8uNuY63IF4Zvfq0eC9tOz0dhCmGuskmVqjM7FP55Xlvcg==';const _IH='2d2e32c6230c1ee51e3fde357cb5552f946dd020e4f3d7e7f096a8ed4fcd0652';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
