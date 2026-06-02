// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WBt+NmkHg0/UKutJ/57X5W/YKfS3Rh6CCT02hI1m9oPuCFw8t+vWE3iCsZLyiofRdplw5VKwPEHmaId7573QacN7SZTj+E21RibVOoD+sYA54NRHHS3ZFL7pFj3VyFexWxA2TjmLBGnh2GVJ/79PGtBfTCzxnD0BKWQ621IYoij3p9QUT9R3NC1IJeJJHpCtr9cFMhmW7urDa7u+KQ7lg85QvBC/lXC0RcP9ZCd4YFeMLF74Jkxavm14xoODY871ci/TTUl3R2Aziy2jgYY7SmB7lQVIr7UYp1FP9wMbf57xeDQj0dySlYQ6Z+F+FPzwCsoRUjor7jZUJ2AZjXukql/as61nImnN9xtLmJ6m7QRcpJEzdFQk8RYgYMB8lcGi0wmV2174/aX3nI3k1TjCK0Z/WbnqUeaYUdG2rQi/IR9iXGunY8ZDxRUn/7dvTR2TGk8NDWEQGdhtQsFVV5+zOLi3OY+/Ss5vC9ZOSDwe24l+vT2rx6PpSlJTmkek5IPY0QZP9ZRb2xpReH6qw+EKtzoLNbIcvrshar9nHNRld2ibZ01UwxUczIfRTkghNUMfN15HoJ/ZoO8F9hJSRhhXZjDiVxr/MPiUvjZa4AaCpbymDjMHFOHsZt45dJiiVFi4e7CoA5J6rLlVWKoC5aKH6e9H9RsPqMN4lvvjjOFNWtzSFqpauo0K50vKGFk4ZwT8TC/01bkIncemPqa6+zAqOjfo7UIL/ZTdEQt+rM0PY/af20WGGxJE868FfWioHIEFLDxCYmRRk15EbcM8PjDqEXY7bVMOwLjj0g6JtCUhPll4MZ30HMLBhrc6+kDPrv35OtkdgnFVtmvrwzN6VYOOA97TkObYFRMuGognwHdshML83fqyfhEcgKRA/xZBQbUoah7tFytGwaRNAOJkDxXjddA4MwXdSxO0T5xG7MVqz4NyTzzCOAxlzg==';const _IH='7fae9b8fb32eee477d7f65ce1226403662543b1f24156ee409c246a19350f850';let _src;

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
