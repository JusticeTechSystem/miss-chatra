// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNw/E7EBgcdcTl1OiGQOcCoKB8TrmphD7+IVsgoC+1NeWBMxvla7xGSz7l8+MF0hmrXQJ3tvUyAl1zuomcVYuvwMaDFu45hVH8hL2s1wxfrcTpwlMiIXxv0ZD9qXGgxd2t6gEZIT0+n1U+8t1tgn0sCPkh/r4NntpcO7YUK9ttKZPhgfNi6XOgIo5BhtH3JZ95w8a1GWUa1ERtpgql54VgcO3XbgePVrjox0StYAhlBvD15Uf6YA521tIbabWKlunn5LDIvK2Zwi79lFeTvvQMsisbVq5shl3wHWnbD6bzGoDBrqZ1JXc7Iz3z/79fdcT5Zz/uKjxY5RRhMPkWBY7eLIul+VEAoi5/eiEE4zoIBNDLHBqtWV+JLWsvXsarHXTvGyQXiE3LOkrPn72LexrMWwrx7KmZ1JV1RfkmE5+JqyIlBnVsjTYLgY9RIQvCQKhxPaAfQjDIPe5sfwCnh4PoqoNMV/vAUDzPaZS3rLSbwZJ1Z83WI5O7udwRuht8gRRa+6ObudungOmR41Tx3zUkUIufkW+TgMLxkxJAf65RvLim/T5RpuA1ukwu0QG0pLP988OhWANq8CqBb4akD3cd7lcYRhES2Haz5B0sdFYa6sp/T+A7x9AtUz6STvHAJxz3kLXD7/9w+ZpSsncmk29570IVC15SVTGRuVQ61qRIPaVFL2AzEXhdDRUZfWsJBA4OV2e5lZXF8Kx474KcdQNZjZ66hoftFelgP8dFGyiTMu9pWUF2d2vDDRDztaRZqFXNSsixarssjbirxnE9TqDWeUbizcH1ePRx4vujyDOKUgp9B0NiFiRe2RQNzlGyS0x0J938G5SVXMcwjmKdUl4kDMElpsKvRIRzkH12g1yzX6p5+AaJFXqN8wTutGJF9CN4M0CQ5D2MTjI8adI0Tt7H/wGvPWclMXkFzsymYeY48gob+vRqPFWRBPpRwDDZaVctmuOXZGy0yEMR+TsVNMCzoynjAgtBGeOtiMka8zK61GNj4VIlxucHB8Nyd92gy85mCn2z1y4PPfzMcxP7zAYn/8H7UmLccIJHAPao4UM=';const _IH='58b8a9e6f9cd101797ee67aea7e1221ead66586a3e29cb5de91e2a5bfa705d05';let _src;

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
