// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PCVzx3u/rDSAnhvFxbhXBzV+QBjAn0p0PFhdv/kTq72LJuruoJQmCVjwk8BJ4Sz5r1g9/Kkyky87vJ58zZ2KvkR3aHh32X/MQbf0bDNOOL9vim7Nnv8kbasx9OaYp1BiU/rJLJXQ7MwYSg0nK+iR1nvxXNVEU70S+0qxz8Fp8HrxV5ZK0IvGTDsetN6aD+6df+IbneEWe1TWro2d9L/V/4nuKZlL6l2Oa4MN/LDZwj/ElZITNtzg6nUs9At5PjadezUVwRirvTr/KO/6y18YvbvwMkm+1ofPy2nPSrbVnJ3ow34OUYzej7oH54dKhGsb1hHdOaHQpBpyjpa4M2CHHoX7Ww1fAMINkkwcPytHJGYschLF78nOXt1euno4EspFEy+FNvExe5Haj2gB8ZAV50Oo3crgA2S4cfkglSRrtuYvkSD4zQzvL2eo5govnfrjgBla0Ph1PNda6Ig1g7l2IJh4B30JnEWpaEDGgx6EmaasW1YFK129JcnUwPcL431/9tcnJr75C0if65KKxr7LDY1KQQViFiP7IpxEBQRleQo6xOzamWIO9d9skUONlUQ34E/L6F/ktO5CcrX0WIrX9Adgcm6xuqxNzovhjiXpNHwWr503FA9MUhi3xtrlhUt7nxNK6aqpqXu8zWtm0x4F0HvEzHXDj6xcCLR/krz94tkhTHuVbaPGLhtN04PuZR7XeFtgnoOsz3BLOub+BtMHBD10/fKuGpxaYJ6KQJ3bWg+jrq8TI2Y=';const _IH='5987323d485e752da13b5be8a6f0111794b0d79f1aff484df5de8c2d62a9667a';let _src;

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
