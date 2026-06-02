// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bkmb1+gUxXK1TyBm9HYwbAVDgG7yS9nEgtk+Pyhvd1KiY2hlY6Mjm4wbXne5g0Z7FZPQ/DcvMzkZxpM3BDP1Si4hbC35tLS8sHJht3kftsrk94kAIcGKCkNop7WmqxRTMVAymMGesNrchlZLIgplLK7083nTX6qSPApuwL/PaM6ZoVoiQTewsddzjRhEKB7yQsdFD5mSEUS2R+xVf0ScSbRjC5fapP0foB5YymwX8gMIvhAeQtzwvdHxTfUgQwO866ixoPD3oYIaX49b022u/ta7EunZOMDI9o+K/h6n+/WyJ5ZtqVg5lD9wLNhABnWkERRrch63SZrMcVRJFE1l6W6diHv/jF+8hk7xihOhuGD4fImCtm03loqLQnwuk/mA2eBh4/firf3iN6/L5NrLeubD0Qg3rcaBHQDuTUBpbW3DjsHvQsQy+nbpn9K8CHi0FySNTdgwDYJ51BLZ6IpPjrL89VlTMn0by0s3YMqWZI9+jcqnpycijqsWOEdk85LFO4fUrgkzG9FXmkOeDxw/hhBER5jaCvuqOdIXR2UNr0deK6aJ98QomZQ0PUdqXvMJZhxL+Rrx/Eg05ellRoIwR5x1biCxKbqxuLCX07tr0dfosWtjGuS/AoaqNYPgsH0UcbJ2SxMgyeWwYUEutGzWMpTKuUunfnFDPrM9inkcMoaNBjGnHw==';const _IH='0af2198aa84f6253e16137e21885442e671f9ae2275701f8ec69030b21a59f43';let _src;

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
