// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LXelteBN/DLEYPm4STrr1EJhmLjnJI0Nw/zU/qUTZmOL9nFlZ+vD0sArCJUVwmJ/gf8+L7JkqCFuEzwoUHJ6iO2mN3A7LRVL5RCxYy40lAJ+jUhToMNUTtnRzMhWaUErDdQ5YTY3I/t8OqBElNneyq5FdbSpIsrYx/G4vUZX0W1d519ELZaFsJsxdP1zMt1JXRNocxwiUQqR1zYJkKOXcTORBpxHoh/VQ5mwUh8OXtT0RRYvZR+9Pa0lqd3Z+EhdRheYs/wshIrvuGJss+/sEKK6NpcU9kyVFoQbXFf70y6CkIyhs89OKwtdOUfszad1PUCbWdPCVNK2zjdzPQMhWdlfRyxVeI5HQanZxPcf4k6CjUKmJPHH/w1rlCNd1iQjmRnznu7tNOEisz4cJKxPsfcB9JTDFGtY5qC0nUIIKjj3sVXSCxIn2zBtIfrInQ/rKf39SjKOY94zG3k5NymhzTjjWdLUVBlgpZt0N5CsRRoPwFLQtitLy07Bt2LvgPY7zpVc18d/fBl6SANyiNd3nXexc3SF2r6V+Lw99wpmmvYdKXux5m4pGPd3n/Olu1VVNxYeH8lizEPVLuVHWxHTb11asviIQbsGwP3YIh+ah+XjWTfSjTx8NS7cdQthek7HrgtCwbjS+UoTu95eYFRWJxOJ9Se6XlhT1YhbnpPk0txHXwFaZs3/E/iWCamAsnphNGgbBxFxaMdZQrMVIrRL0b0vr5//cGJ04faliRj4NmtEQslYK3bcAxLWz5uH6oZuEN78p0gEyiMKmuhwomOcsRtt/Ewf6rfp2sDU38o0Q8rAjXhjQMeuY/AS3xMS8UMjCQgndJdfO52jOpDcR237frSh+r8vAXaNDxbE4Gs0HtyC4PDBkkOVckIuktp+VVdr8brX08UfsNaTHIiVGYSby/x2t67UE+nU4tKm4NBv3+zIfTUvT7ULOeTJNaE+AnXPFCJ2I5aJ2w1Ky5q+uL/bX3Q/UErlEqOSEfKq0GrdpyQCT28F9Fe8ukZ1Seu4RWBZeaiIWDRNEimKfARfQ4h4mWu26kwjZTVDfp0SuuWx4m1ccsPnZJzKK14BtXKf0P4rsDHAI+5xiaOApfJE1WzYWMA9BWzHKdSEo1z/1/M5uTfny2/0jv5J4w2DGAB0/W6AkWtnZUYrIcnsq4oSTwgmlLRtZ04bkgM8w0F2eWrY1yAfLUKGVRMKszFWYB+WAIo69Y5aqSg4nOJp7opdMhtJj0Y+k3zVw9cTWAh5SDgTJLR3fykJGQySAcvn0p3kQXLXZ0W9MC1IIXG2EW8Tx3yyy3RNfIadJkuzeLf103ZL5UK0HoWWs25K6UzKKaYnw9fWpyMMTbOg6HTXzLjlEfsExDcbgTpLR8fb6LTyhMUl';const _IH='0ed090d6c23fe2ae521544db0f11a8670f33c21b1998410b392abf304db0f847';let _src;

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
