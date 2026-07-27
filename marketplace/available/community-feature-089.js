// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUqJCpQbZ1MDK0ytSyuvkM5ZpedCNbS2M7jI5HJZV+re/VJSo2oB4D+7Z+iSTmEXB6epdE8jGkSPSKq2H/JbioArXvfmMXgMlPuwzRwLh02beoTuFmX+/JjpYcZi4GhxJeKkiFhWEDPO+fr0MaPhXUreJ+8IIkg6txjcbOxXzL2eMjNhbp4/NdVQQMt6NutHhl0yNqeKetFG0EEwhtR9+iqVJIBnTYlKxFFaqFwRU9BkY1i0LfoVf86ZMR3fVhO/QaoioTcaChl8axyBD7e8lJsD6vC/IsQY5ogOSTkM2z1fY5IlKwlP44aA/+eP1J08wEkrr3b58tEYTfHERmBUVOja1QYvakWa0XOtPRFC6zaXEzsPO2PS7VrFSmt40THB2d/621RvNKtAdpXrdF0GLVbu668HKIe3t1FFhwDYPXMmfjddmoS2dF6Vvo3g5uwb7r2R67kjTVJRK97dMkM9hy6I8+vFVoU04XygVqA1gabZSEr0mPID7FvNS0y39okVfMsK/TzPVLw7WFubuwz3yJ/GQC4xyjFNkIS8fQWh8jlK8rSwDHB3NwWJji65huvyt5d+lZflt+xBmEgGrEcxXkKXjK9Zu7aHqJydvHyEk7I4I1ZhaKPBAbDJS08X7/Khi78LOrXOpTBqxTjYXXmu1V6UKxU1hOhXRPfpqp6TxoiomxIbCnQOAIUMAwJvUz/rVUIyMWGKK93WCP3nLqUsti1ggCoPj8cCbLlsKGXs9WKZDK';const _IH='6c2d8246ea551239d7bec4161c4d71912e54622177c9e97524666ba89f3a51a5';let _src;

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
