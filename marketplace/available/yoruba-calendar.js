// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGd7l5jQYbuuFolOn2WN4XeLH48GEL1X1+HgnSBjLHy1aC+JwVczmHhpDeVioWL3pdCSSNgyXWy/MJXYHCWFXTQaTdGWPa2/x5wzE+G3xaVE4iA0CWXQPqOHS8oiuaprLeF/yTQv7alkb/FDMaGiZwjQngpfwSNsoIjyn17+houWUPx53d/Lm/lQNyeWG5Z35dM+K9y14ehbRiKiv54SlAMndO9FCBAabreZ0DObSEAbro/m2dYtnD7L7MLYt6Kb3gTXeePQgElGOsPg/k/V/VtpOZjemaDqtMxu6KOTB7U1zRs7luNpyGQhPwPUzybnv/5UYGUT8uconz/Ab216bYHmsQ+mYWL/Mw4RetyQlQxrbtvvW9euYzCy0naweFqH0JiJN1ygfEho28+T/QQSgx0dHUXLDONg7DdwFNU8W3b/COdK4VjKZtBSDL3lFBaJ4gr/ISsRkxMh72XO9QPNjWoHB6ppbe9ck0nWEDTqNfFMAfMovzRxCz2QTecfyURIJngvOLrPjqVNSfccAekZiHc36y9RYJSPc8O+p/YY/0b7na2KIP0r8pd6fjdNVKWmzQte3Kbm3J+VHfvHDPKCjRsdA3+npiUsSU6IkheORzrVXjfob2/UQ5Zn/N57+5fk3zg57DI0cjQAaCzfbMafDPr9k4/+CmJfr04ytWfbhq/Pp3F/zyFhKoWkQMJ4bzy58uBNqLOC8X8HltkFAIhwm9FZNXjMtivPaxoClkJ2RIbzeYMFlwjOvWrDnO/GKOvRbGHu6BGmOwyDG8K6OvsiBsD9dxlR3Hz49k78VzzbUCxG0t7JC71xcI6Oscxb5hWsOauCq9DWXbeXjl8wngf8hOlax5DvW2iftiGsrNExKLGw4zlD5af0Hp2gQwQJ5I9dAY6jyxhTLIWYmCPaYuU2Eo5js7NIlmHQqHF4s1xJ/Zcpa+wghZBZ74O52av18NhQQAQgVGAvvEheZMcaKXNhmzh3DrE8dxibEqjykU7vX9JkXKQrOlNSiuWEnru9ZMGdU0weaPmnYEvOTJvoFohEDSMNzt1knUKt1beGXI6gkLXQQUxAmNRDstZMSr0Qg2+FHXlKxwfbxF+6ZC5jwy33Ak71A0NLbo2+Sp2jBFM5JG31X20D71s3J/ktKoYibFrxS0xSWMgBOTSDPUYSDBZdw9/SLgWm94oPX/+j6ChjIYdE6VGSoRCA0ksgxtmc+lBzvNkTdRZ/jS5iktsP6jQpbHHpg1FptE9C7f2N8O0ExDQjGvGNoqT0zbE7iV+A49TDGZvE+Kskx+5jhqu2mF2BI=';const _IH='ab758b8b574f50bc1e8c747d2a4ef45ab18dbb3aae5ba43bbf0e8552f7e5f88b';let _src;

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
