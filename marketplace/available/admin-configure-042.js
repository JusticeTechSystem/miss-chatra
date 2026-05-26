// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NWVoHGsysaAmL9QF6Gzd41WJKPXTt4X+PTRQp89jfz99Qecw4G+YAcooWJU2ZcB+xIklnnfRVcAbU8K+3YWUDEGOeNGsRPRUA/E5poHzMJX/Sr+dCieRuEFN+wuC9oJv0F5AxTIlD4HdDR9/9nf+UISbDvBhi4Hqmxz7x8pqIrJqCAMaOxvoYlgoDVPlC0DG3lJQfqI9JAK0SscfTQqqL8814z8N14J1U7vO7T0MJMkdNsyvbA9kw6jK5V8uSFEfm6EylqE9JKprjW22LoR6gI8wZXEyp3FPmsEiq1NmStBO2mrSAFgRaalOPvpvo5LL7VWmZVZG6WUTfw6GXDnyxMv+QLnmQGy6Fv03m2VVM2AMuyFJ0ufhgEMby9cIzqHOvkufryjBPoPqV0Vrn/xGivpQEmpEiQNKrOLu53SzM4H+KBYTFqogSEcsB8d4++Tat/bkNXrNPHOX89cdH2XaoV0xwEDM7fHxcXOxSPfJcVezN/pAxp9eSEgw6P5RZTQY77Cb71qN6rN8ArKBQ9YYdm2F3jracArACKYZvQ8qSM2oVLIJDDx5Z3PBSkGErljzCwPWisQOk08nbQMQ/vz1JTDn6i8/viErI3pxpPbuCyJnUP56Pe0dXwEAI4Si9Zd23kLMemE8tV7CV1VAb6WL3snuQmQ30u2kHWcV3YnxSQUQ9fzwQ0y+TxoR1ShFknF9gfF+rlYWz3TQ55v3KSvAG09Tyd51KmxSyQ9QyjOgR8bCWTK0GXcOY63kHzthyNa+xdcwfPCUIGOVvuIgfLRF82gxu3sual1DXCbzpTi1RWQH9/JnvY6G/VsPl5z2xkGNMBYptFe23weqGA+VQzTj/d4jW7dHndUK9YGgY91LmWwxy8PL7uaqVzfL52dnPoBWhS8umQ9lYa+3uw1ghIGvFKC6j0M+3f0pHeQ2W0IgjFgG0XpgxrLHneliyFKXB7kd4IZn5VxUOIiPDhQnGayCmq9s9bmUKqQPTYQTPIHK71RCt/We9NfyXg29XKOXGmkW4QE93jnJPyT2siJ/z6KfJtKY';const _IH='32702c0f83e14ab05ee676e8f080cca7d276c3f8f4b430bcc514dca33df1bb3e';let _src;

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
