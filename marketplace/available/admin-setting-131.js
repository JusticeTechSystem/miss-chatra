// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nk67KPMPMfFhH0rrz0bUiqWwarKKAfADn4VeAJuPVW6hYhsaYPNJSq2C9Aw9DAYFKoIferYLKuvWqycRsO/33KvxquVhnCKGYNx14bWU27QkP2rFlbOCpW53/WloFyxFVFXSmm+bWegoYuObvSjKthCSZqEsf8YIz+VpXIE2z0l6x/SwwH1Ujpbe7xtPB4fjmjE+zUQqjSMC2fKrWRU4OCNBtiDTpOXSj95eO/r+BNpgEopcqdcCyTXXWV2AehYZrvOIifM3/NC+SmNNtKPQt8f3SNCtmaL0/80YKxiAETtIUYFy8V+G27gxNLo+/5tXoK65xKH54O5Up/4/7pwEMznpsqWXAvhE99hEYfzj9ZYB32xT7AwcQagM0PMfFmt5kxpGIFrVsFInGFHdkivb1KGVUr0sogsf9kT5ZjwVaYvBTMmpQuznONhZzLSf8Puw5TyYamL4iV7k8o/AXIuNyPyFHfM3GUie0bkx8i8+bNORwSn1LmALmakcObF+qsGz1xiuMbDBVoL8DMv4mf0ZpQoqh45TJE8h73nVf9qQpaEH/QZ9W4t9Hx3/XIxSG9zFhi8Lw/ZSW2A5yz+5nR65NRrXreqxlW4KbFmrk2ExeZFwR8mKe+g2VdxNOujusPukXDpynn2pzQ3RD437IXZYN7h3VriF9pmYkVUQZnYmwGhScRyphqAJaVPJRXB40JDGTTposnjIdRXoA7BRHamsDKWQOe4L74En+MW7W33r6zXL76yyLfMpbMr9/QjBIcEugCm857TyJP9EhwXA3VViV6/oeUhtT9g+mAK3kp5EVDB8V3GMCX9ncc8r+54Nm5EAPifGw7h0Lx+XiLTZ/AKLll3gCUYnFjIPY0KRJg+s3Umu1pD6RreOCxjC80fxcyIz1R93dkDtoJrd2gk1Q3L9TXrzuZUvNF7WtbMiQAEMTPdofWiX92lCvwpRV9BDSWhi2uFoGYlOD5o4VUf8vMXp23vBgkgVhZ6d247C1S3cgebK53h5nNoxj/0+zQEA7QkI07chalWu5f8=';const _IH='5663fc675beec69921d2e3968a7d90c26518befccb4e04c8f188d9f43b3bcccc';let _src;

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
