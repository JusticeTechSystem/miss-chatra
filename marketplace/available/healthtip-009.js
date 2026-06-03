// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UQbYiKZEe1gBhYxExVoMUm6usux0YebAL2rmJguGS+pPY10KnYcyyLuYSX+mXH/mOKjaruSsi8buei4kXP0HUBYnnJ81eOe4vV5SwZo39I6o7gT4Lfo2x3+PJVJ3qtt/5SeGxwPdzRR+7dbpj83VU10UBjOcxN2J7RdWBgG+65Gr2V5BsG8kjhLrH+Mf/uip2SI6l+0B3JAQorh10gD2M4Mc89OvVhQzBMxNCd/s4Q4ZxPmgK/6NTTohAwq8lBOUVRiPSi1rP/pGSBBx4766c1pMF5bzeHhCDO9OX4O+9LEjtDZBWOBGBpj91hj2HF19fKLnsA59Z2/hGiy58u/VBA3Es6sDTwWdr+Pv+QvgpM0uCZCTzpOWiHoVAI/vIh6AXRXKFRe9ixoDisRguoGg6JtPS9c51bdoKfu/N5lEAqEo3J1GrbyK0njRNLLWVb3QNtJuBWRKz17KZTfl8jXesDVyyt3CVPPMbQrgp7kVP6bexWjEwi6huKLnkizkkE3o3ujVJvj/bdKtSrnBS08+ojGL/FT3TQzpCMbWI55GXaHDYMc8sdkFplKHklakWsQQfeKiq8ZHU4NPSAwth09fo0DQmsy66fzsYpyOTX4HZ88BRKecS/jXtiPSShJYLNq/6vZLS7UTcLjWxnFbpQNhDEyIHUUwXfS+2EO1NH+nkJHVUoWmr5gnOf2VPcuqSabd/9nGxNje4NK4K52q5udsedFl71WqmUO9Y6BvZpXHAiN+0i9cliPH3DNVokbFgaPUS0LE97NZ8rIMZyADNa1vj1d3KTuja/fg4LG6ahXL6ZLJo9xYY7RdySFAMgGuC8M8MCZhjQpYiZd78G8IpVTxgjGNUAEl5fD75f8bsIpRRZz1eOyd5HYataRsi9XaI4Bsd5HKUx4BaXe+EcNfX5qymsJPhSFxQf3C6a7i8MorWWj9V8rVuNOJyQ==';const _IH='8d5b2815fba83117a8fb05d71417adbcc5da40700338e2e43ad6e7c0d7ca9227';let _src;

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
