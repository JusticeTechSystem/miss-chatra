// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mqm/RUZr7510CMUm1XqPvlmf0zjViOltZo6n759wytrk6WARaF4O247aMfSwtfo1GjMYjEM61WD8QbUakCAuP7dUCP4Uza8jIiFREtM/CaMj5aexuXAwa53C011BOzZq9z4NkuHhQEa3HxVbq0iq8cO7RJVNWMXMRsx+dz3e/HARLe2K8hfbHGZlwnQibwVCb6A6NT8OXJBXRYZswxeN09A8VFY6AU2OO/z+Sz8tipSIdxSNskD3fTvMWm4OrVZmfl0DZ/m7f2FhmTTqbiPiQKVRQ5JjIA6CFN1B71WLGeX9ShWR9PqkOPQKi94f/QAUgGZXN7KnL8t5amqj20Rck5oCWK9v9O1LYeTUJ4hco+0q5elsMCOHOXTzrZk0BsayRv8M2tFtOk5eQlMhOH1IR6f33tNo95ooLmncbFwkFJHDI0LWPkkx9bT9TdNQwTH5gO1hN24BBRBaV8kYK7ROWTS/Xe5gHxNXDDIl2ElZsmVH+x32yENVEaIstqQNr1OVBusNZ2IvblWFqADCgZIPNdAwPm/Q05QJ1k3mopWtcohJzNxr7EwwDU5YV81DK5WsRCY+obak+VgJkFzR3S3/mXv1o2BlH/sgIttHn0EkLRSx6rUoX/ZtAt3Y+bGR/J7WQyVdNa9GCukNxyxknyMbCcMJ+kA0tFx9zwgD03uPOymxFrCi9gZy0IJ8U/t8ZHmCWDPFX6O6uHO7IAhYwDF7Pv0Sk4g7pXKDSS7BM1CPR2X9u/9gmt8nAztNvPJZ57Z5JjIm6QexKK3wmb4gBOGKCUZar/8RyzdaDyxqS7/IC5Jd2g4QuS3rBKrPv8CM8P9y+lB5osjQioWPMJeBL537I7w2jYNp0R5jdUFHZUtOypB/qOfGF+cp2DVrQytE5ALdrp70Q+HDSemPQ56faB60Ujb9llOU/lBUxD6nd5uWz75GIim1oidVWn+0xLbSX/CH/XOQYWckVWK2cTpZPye9b7rB7nRS85+NS3W7S6i1PM/RtXPLZWaeDexu3Wm1FhuVog4bo5r90EHNe0QSXRk05D3YdUJHc3lZKW9vI9jJmigdIWckznglR0MgpoJhpVBKteQUf4a1wW0qMNrhfXEgKLqP0JNf411CYLSqAkrhRwuWO8KLNwvPsjwQlOTCmonTjcHDhu1x5OvN9Rg/lxYy3bFQ+N3X4FLBNSoTKBzupVrkMDH8AWUecxSMWKXdyHcuLU9aJL4=';const _IH='5eaaeadfd7e5f6cca4822609a81228e837af9408cc4fc29fa397a4de703c79e8';let _src;

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
