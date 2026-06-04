// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sHSCXm6ATtGP7k8kcHa11kpkDsUjhtdm711l5ZaPZ+N1MbP6ZYo+5reSkqfXOda5ZqYvpCaRalhtMC2qHQ119SJbueownswJNqJ+dTQlYN1JXjWdBws+G4wKqWMJgvWNSopHsZdvWW37gjQOKBLigjcnPaD3wo3qX+QcGb2LWN8tkLygca9c00bKdH5vbQyX4zU2Y7Z96jU60rvfYlUiVwBvZK3oN7zOuFK0++hs7MBsaDbdO5T8/kdjNUb6Ho/LhbU24XfDjb2lJfYswU/rNgMYhbiqrVfCK1YKILoLM1BmXxV0SD7Rprknf7e6UrrKXnsXB1qdKJkfuPhHQuwQ0IfCNK0nDQJnEWAD7bG9XR91xRDoNt437M3AfgyiiZ/B/8NNVAp0QCe2jTnvyrmJBnG0pWezaZ/vQd2RkMCHkBrDokIsmC4Vk6bm6uqWWU8o0JtyYjN5/G8+dYSblKeu5GkMCVP2npH7lyV9kdHIjJTpLy82fgwWmPbIQ/zhO3sb2sy/RRHymPVCDqAENzz953XvbiIgQx/daMnsr5t2i0cngnI3GxodyDDTBINSAx88zL4M+pYwhigLX77oYMtWIeTRLjDUHSSVxPwzfJg44Gl/xHLGn/Ug/o56eASGrzgi+1vcvM8uktoY2mtfq0XRA16VXBqns0UJrz6xICPJwyiu2yh4gYwMZ2BlWAAYKt7GCW0KGDcSh/F8mGOuRkltcYW+ELFAakc3yhdnddQ=';const _IH='d9e9a657e8aaa2bc905e0ba60df189af6a900d3bde868cb03a70d43211490b44';let _src;

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
