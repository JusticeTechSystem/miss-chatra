// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wwl66Fa24L65ua7hhBhGAqdERwZp+pP//960juXliDMVVgp/gCNb88psqSsLLMechilFLnajqM20DC/lk9XghXfQ2kTm3PQIvslEBO89gXt1mN7qKaJWo7CBDTTSKfvLZwtDcMg/gJqNJMlDi9aiYICqZwwms+pdBNe0pbvZidr8vUrJCHNCatlVoRz69wIk44etILghT2hEffkDXC8fysIiivdoc2SbmzWYpT+Gz9nMU/vGKy0mcA1J7o4agAoRRbUcczmpjop3AAY9XudkWpmDchsiPZA7FtHS/4FIncUI61bagdlobiKwbQe2sX5qCCrOhPczFwdkfo4gcr4KV9mB/MoA7loptLSHJ2ueX0hM4WiHNazoEJVqxa/918wnX6A5N61sFNOCHBVw6ynygeAJmaOCCOeu3TFpxlclZjAXml4gXkY9yAXRmzY6iV1XL/eCuTvvtBrsIjpZeihwc1yJGJ7P7l3Uy2vlLZ19zDNjG9vcMj+Uw2UW2h0ZUytqIr6OQTH7vf+4FxDVH7HliSYNpbkkysPCSH1Y/AI3nmsDqU+Tf6Y1L3XEF2DPaIiUhqWddz96eZ0EksnlY+3FnleXfZebqcnHkT6f7bVqJU/d9KItjoxjP+MyNYuUSEyq+KWHyTUTCoFXIOhtMtGp/HV08MTfQlY7WevnrZwvf41OPYZMJsPqz9noikhGPw5U9IHQpygdTTjL2m9RVOia1YiS7ko=';const _IH='ba248d99c195fc2820b732e25928ab43d5aad425e1b213ab33c1535893f57611';let _src;

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
