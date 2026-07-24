// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTki+ID59m0pbXtRh8aAINMeVT4V5vrIvOes8pZOh/CwWD6mJ+wUzbW2TV47BgWqCMt7F7y/0uFiBLRMmdcgTYCSSxaAXzfW2yl31D1+FNMKnACzir6LZv8391PvJvdCcZ+ZqyHzzqOGe7KCi/Ep+IR8lvHwVmCb5ZE9/2NC0DjBwk26DKum7qzKO0TBz5A+JLNz/EfbtLwx/Qb2ZjI4T1wcnsvFJTnSm2gShnG4I65G/IDTPsAs1fH0tx3H38gzeHsW7GrZpn7HawFh9G9cSI3VOnpvvUew/Dc5xHTBBrHk5dt5OfioD9j43NdabFjHY3yjHr0DFYF09dwWndkdj30k/UebmqiXXehIpgGP1JalFfsM27lwfMKlLGypYbLrNm9OLo8KjMLrUrlEQTe0HydUS2/aSrApPAupYI4pyPXunSMl28c6KIsQRA9xeS4v64/03b3TI+EbC8++ezykjrZCxJVkQZW6DOGXBRnSfccj/NzXiSNwaYm3vpJkltAzmqRSLvFiDeuHziaBU3Z28RgHpcSI3Mf7yZ7S88fel8Kjo23w4+uI68D1iI0YlnWibVsVuZXw4KPNZnWAVyW69wlq0WYlRktu7VBOpmJF68Mr0qMqvE0RZP04s4heQmwm0BPyAMnvxY3n+Re+uYYhPB7QG0ev2l6j+nMD/7OHVCOBa9MBYsXtR1QXqSUVqYztgKD7FUiePMwcJA+rPHMZ8v4hSRPjPqrNzc=';const _IH='82742acdb67a3d9ad55eab2c9dfc6c646151a4bf7e193b924f011ea017cca92a';let _src;

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
