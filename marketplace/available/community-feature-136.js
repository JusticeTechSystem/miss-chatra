// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTL5qsSbDor0xbw6DpHK664jSvd6q24Z214pxLex9xw7Mr1UeFgatEqc/xEKudPuZ4K6bNV7LnGFbsP8yZw2VDMAutEzCO04sATTSFpvp4rnOrK8TlfBTMQTIXkDgmNfKDnxi3KDd3i/D1GfOWJXzTvv8QOMAkFmnUgfyW9xv61YNeGM5xHKLoMHGtA4Bsgj1Lzu7YtoJVMvncIy9TYe3etwSJWGInWelmHBNwhu/PMU8kJHSFJIIy4QIzoqhK4BwIex4wjOf+15iaqAHzy9QFzyInQFB/nxyWOUvgjx4wON1MNbNmxqWFArbLJOjbT2S2vF4W2OfuTnSAa6Uo/wcMUK2NoFXPzcmjktCABB2qN6pWI8QRpYuaJOAJ8sdf8zavA3siw+/lbezPWRlZxRMmvzw7O/If5Q0gt8XSM5es5OAiVjDzxJx4F+dwesDh2mIcnCDTOP3cGOjjscmQRkOdvDA816GtKZ1opHJfgHZSd2RNLWoFSGd9mU5qLF7HjPoPeNu8UY8TnAenDsRh3OiapmxxoE1vry9ljHWvp5vpw+1eauYNniGB6mnqbwTY4wkLOYRb6Idykm9Ifh8sHuXDP6Yuo7tGCqebuaave/z/G04IM1ch78YazLRAXj21rSc92uq4H6oKEuHr1Yx2iUCderElyq7ydd5yyJjdWqtV/mL4ID6xrWiVG8DHew6q+s5Fk3fy7ID01gYRgPEp1/nVG5hftBw==';const _IH='d1b476d86fe9d5e4dfd54337eab7c8bd4999d7951d06bfc50d975629dfe83a56';let _src;

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
