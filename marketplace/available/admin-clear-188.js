// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sIE+3u55sfjkErWzrEz9v+4tbybuCxnnV2l0C73ksaGL1D/XBjE9tZ1x8X5xHprO21FJqHR5J92TLzHpxdhSuwaBai9Ahvciav5a5+Q/yZxKEwIyYNLfvImFi6uceNYEuUE6tHMJZZ64X0o7P/ueVHUf7d86VGdoea5yJ+B/X5jjm9zQtUs12EBvjF9dTPb9Xnohau2c/NKPb2KEt5VfhJ0ZNkqLXZGbXK3kcMqVI+G8quoaIRjHuOv9J+FkiD1vtMFFpQWD2vNGmmH5+J0LekZqdvqG2zVEJcxM8Hqkrqtwis8DCJ77FPet0HtqccJ3wkRoF0jHxWlLKgFtVGXmvgMnsp4wTfp8BPmXScQVC0WOy2P2girISFbIDtFEFglIRZ3zR6pYQZcutaNocme7/FP1CBNaumlYXgffjx1wtD9At+ha7PqqYMuLhaHllKZGn+zGPNiY5mknDmuM/gFpDENBOy040mzNWxJBRabjlGmZJAASHY3JOcjd3bDsCs15+E/t9BmilgTjTQgd5JaFAaHiKLEj9j4sLjyjXq+uXPDi4sY4154IKBvSmPIhttsxbNl1JYQ44oeOSyWBms4htg8SCl5FHyh0omUIRappUKJ2SUkpSKkHoAcZVMAuWW/yE/fOLMJDbkYeF0MP3bDV+FZj16mbQqdtEy0N2LfxGGlQ0Yi5RPcYWCE2Dt2hRsNXK0vcNS3Ckk+/NSx18hmt4tAN3HL1C0ORl2hHCM/TA1SAmkvXlEBRpJe0CDCFKCNBwkEc5rd3S/GDQXGa7MjDXYKJ6M7cVyAwNe8KYR9WFapkJdJSM2XEwB7l4VRBzYbsM1cSF9e70IbtC71ibmCdUv2e1zbB/Wqk8TbAxgfAyJVa0rLM5P6CbQzCeDy/OrMzzTfdANkJzj9XEP/TgSH23k5SJHvAunZwxRTjBo7w5yfkT+Rdi4QqaM5zNzS1rc0uu5W3ylFDUa0DxXwmX/xlU3txU/tiODyMp2J9uYO/GXDrZubT7SzMzzHo';const _IH='b0a8da9aa36343613f43f9f70bfa86e9efda0fdacbaf95be30d6b2c17528afd3';let _src;

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
