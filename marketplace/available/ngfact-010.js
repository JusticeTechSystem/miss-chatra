// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dO2SHueZlG++zTO2lkyjgUtIEfEQfkAiVISDVORTz7tA+8G0LYuju06arID8LBurqovgmYtC5/gn4zjpi0BhE/l/EGTTbj07CoOkv99BJoP+QQLjscpUt+fZsUADIsNzGLCnnkgLE83UG9nfrquj/CA+6ZWJyXVUzVA9HIdrFhqHueVRCjqdoW2oO8IFjEXALIfs20CssT+gG+vwRTCGxdJCsVs907RWje8r/AJQ0J5l6Nn+Gt0vaeUtNtT6nBj9x/IYhUCX8l7oA1angAaED6G1qBbs2gqnixYcxfO6KCHuE14i3vYupfUniwCZ5WYE0rQ4lJIhsJotedVHOl11X2mieHvVrimgjAyKaA5hHKL57dbG5XWdnOcF6LTJhgNsAJhszrZ3KuSE07j+uKXEjsmUyNvbaijsMhSDXr0wjbvbYj4VlviskIF76Itfcs6NkaFoDVYEy9JJoQOEWUell9sba1KhxE/Iwzj/rTGAmTURSTTzq9QFK/LeV13rr4Hg6Qc8DIIl+yQB5cHCVZmcpe0C6M71XQ78SEWUHa85eFC+K9qwc2wJKYo2DdykZgf2Y7l4cFY4meaAohxr7w5XszRCVpqcu0zGn9PegwLLft92VrBVmhxLDPCUM3+9BwVE3pGLLMtXjJJL1p3jBc3dcSH33sVZX1Pld95Yys/4Q67lP1NKNx7vZLBFJPyGF/+3FtNdyHg77gA=';const _IH='468f89dfc577960645205db328c239d5665b44e9864494dec504954d838ba215';let _src;

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
