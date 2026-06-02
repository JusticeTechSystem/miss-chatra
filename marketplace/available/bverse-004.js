// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h5Sam+nCtqP6JNMZBQDvIl5vxOaOKCf3hBHpoRKzZb95EMDmtXdpBoI21DepV1wtBYNDJEk9W5xqrJLq2nNgsJPnIBFps29ff4T+mCqCQ0K5vVi4+76uli9gh+wih/q3uvil7evphv2h8o0rsQVjk8HS53Kw1OaC4NpGogcQmyMZz8fJIrIVb5nZ6nbVFhXmRGIqj3/h0k9Z2DAlRDikIBpPrgkkoSPiW4oR7HasT+AiLrkBcUEsRDj5Hw4ACQU9c9hkZjeBmLjwwsFiwe/JR/3GohK0hVcJalsT1hThegIJZM+9ohGUZAzi1ei0HLkcytzrX55UfmURYZg9G+ewXRkIRC+r5UsNmqrWFMft7Ug1ggDzzmgbMS4stxA3J4gvAOnQnwL9vmIuNVuXqeQqKjeZL0tXSZcxWqc5C1ntxk6mAizT3xKsLqYeEJZ0wfs33fXn64s0mycX1vQO1+53zhrjs70Pf3iKzLYwPzTV6IvYvlzjBVI1O0xV+xyfGu1vZYHcCH3TjdTnv4ThFyjwqDYG6HKcJ937xYZRQpZ7VMeq+qi+d70apdJIj+IXMF7k0IwJ2AxSgO3mwoIlder67u1ZJknpKWtFAmlv1oWsajFXEkjrV48SniVLrk2saHsl21w0RlTNzl6xqiwSGZJaaHcMm+wBIpv7PDOcEC9mExu8y623uQ==';const _IH='f868557429fed8b7c1b02884ee9477df7a85c7ba4fdbaf133e3f54ee4a31b00f';let _src;

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
