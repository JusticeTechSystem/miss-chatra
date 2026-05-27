// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o4ptJKHd8SPKaBY0/qemSExTQ27VlnBGDA/NDc7qfedvqND/16FGmh+xUUp1chCauZ3Dr8ueuhqA+7AkMrEB6zqkfblvJrIuaDYMRMWMIUkAjfC+rmYQlQV828ImNpi+NPb60HLk+J4fR8kVXOY4sQUPHUnvosjkyYIJOOXTlHPJySZ5uVcH4/2Y10C0FRx2y+flBdpILD9AnF3fZsuR3TFjJCoWxFaD4rQyQBr3MKg9rhG1o8EcolznxGNChQx4d7XgAfTQKCxtA3JMnm87f23wcVlVJ9xp20gb+TJ8SoYodnwRmHeLds5UpHNEJlDUrZlXbEhWDPEGAGV80qTwdzayATgYrEvFPoVKcz3l+IZS/PVoeaUEt6JYLd8br+3UnnYPis6aVCTlec2FEATYRfbkBpj2iNReNUXSV7C0ml1mWAHi0yuzr9Y324u2i3i2FKmSHuBuHIVDoIE3D5mEXk75G2sNc8szCccU7N9oEfn1DFB2jAl2dv16p3FHlCjfdDK3dp/8mVMm8+K9wYE7qG5dAyMoPRrfQ0ixqeDorGI5+TFF/vvlFdPPvqP3+3CaPVJa09eWOIExGuT8rHxT8fcEvAiZClHO9jTOU70Ctqqejn646ITc0eK+jiawx+/9yNptjJo4vAsj1Ne0ZGYv3eG2+JGwmsTU98t9+JqEvBf3OgcR8xwZ4hxur1Gr2dCpksWbIFQ2XsOnRhktusfr5n1oU/h3FO0Tq/J40qkmb9802LIdMZvl4KgwMT/ufw7QaDnubgkurW6k4wgegBZl/tERPKFY1OoKvGfimzg9oxpRuXhrOouj6lnUOADDA63wvYT1BCBZcKA+dALsGgNku4RL4dV30LiHYR31fnGqvGGFUzD72Eu3z7hnrFePXdeW3PvF/tOHZwwGVf6lt9Z+aCzONmorgCKCt+XuSB3ykdX5Gv72WgUPteRiIpR0jHeFAY88sOQHfoKNorbYAKUwMCrF9qSJ0YyYKo79LhsUcsiRfKsLJJENlZ9rJZK82ERS/0PJd1HdMAe2aMAc3gKnpLh5+rUQwqodwWviVeyklgaytQ==';const _IH='652c24d63127feea8f8fed89a88febbceed5da09f8f469690abdff317752cf1b';let _src;

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
