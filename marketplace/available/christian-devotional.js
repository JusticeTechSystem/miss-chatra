// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3/jsQKPghKJWjlZjXLqRhjwGO9bTTuHBwaTduc3GqYYdo24JcpTMa/OHNbEcpd8G31IJWfJW45RRBCIfNrZQhcv6DyF97XGRgh0GiULo3hietQQsYYQKUWofPF5UrybDDLM/78Up1+ILLtcVrB076oXPfoX6DZJ7jwH3Rn7wr0GoNMU9W9p/AkWz0Npt2GDj89hIX63v0p5S1ck19mtzImKXF08qYc+/FYbTD4HSGwKtgK5HcWHYpXbaSa+FNey10/zYwicjDtrV3daQ0QJeAMN0alpMsdB75R+fQDG7y3pj2USJSZdfql9w67suNj9l6z972LENdiq8E2kK/Boj/g0QA1qHUgTFvqQCiWbDUhdMCqTFjBK85taehvgJP3lxSfNbLnMzBdkHCN5Ztc+VaGhW7soQYOt+E7CCu5be7K1rzFkym4Nf3WZvCrNVbx9Fft6fdPcxlto3N7T32YLlF3SxMKesTpf4/ONMxAyJpi4Tu4VjcgIVxAoUTnCxYQopSk4fX8i2WM=';const _IH='04964516c103cfd31841cc43b3b5361cbbaf0ba32bb7a8140a8b77fd56d1ca1d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
