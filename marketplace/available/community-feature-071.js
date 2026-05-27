// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CsJ5SMFlppQwoKjRFq0vJM0GXZcnzaJXnc26eA6lYirxNdmLMtVMv4phR/AwPTPHKBhP2EPMJDWgSXkU6KgAYU3+1y3sh22fYwOXn0A9XQrCfF574s/5HhcB/Fx3jgJdJWOY6wNy+dBvrPT6RX2niwWw4SYC/r9O3HbylVpeDhOtFpFy/tkaGbc8eNsxxdz1vh2Ux2s1e0u8kVj3vAIXgHg1GQA2tiN39zh0GbXLtM4v5mDqE19txYDkmfP7uz0dHcJEqGHJYjbkLyGX/KVneyjrKdX44I+6vlxXejjpwjr7WlO5Vp9qUPsh3KRtZFw75IThXGaOm7iyrCxrRjdjsJLS80rQZmEE0bv1UFnmuN36PZkD7rgdz9j1Har6bHVPBsaGHYRbfVHzNj99cFUU7nFPpaxFy+UEA70MDq5RXWwZuTa9x10UeD259G4Eu8KjUPWXt38bHRThh/peQ/mtUJM0jiRxuOD7dbhrNTyWzBLS/qIT/oOaB1xyqLB36eRglwZhaEzldfLhzu9s2HC1kAHX2vdYT1/gheo82+4x+QmbYo5diB8o4H85rqP0EiKz9RAD7SksuwCiG8frmkyymFjCUNYNpOOnxx0aUxoCBTpuoHl96RcaiAaMaGJnUEdZFBwAmWgALpd0qQkD8CXuVY8MPSpTB7Xva1WCZx3GkDs9ItTAtdKe1WvbI2Gb9ZpVcBdHEIl9NT/5AYD5co7AioVxStg=';const _IH='dbbcf61a2cbd2c13d98b312895ad1606e8f942bbed8483511cdf229999147637';let _src;

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
