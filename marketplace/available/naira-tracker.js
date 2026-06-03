// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gYoGYl/tt24Hfqc+0rpsPukrPADRPL8bJHtIJhHh4M0We3Rj1R54qR4Plu1hV/1xzxtQnnjOXXN8QHRai/GFWhTkE+cOQFnUqV6r2Z9lA2NuUkhd8nlKsNyEadVmbBvNSxtes9FzxYVLKNqmFCfEHG/AOtX150ume2G15EWIDMGfAaK9w7DRMbDvvQ6vDnVcnKM7nTuGLWfWRRNHUASmCpubnFPRfSDq9VOJueNUS3QPtQdMFUOefWU4bNfLDxXMY85oSeJ0oFBaH0vTPf76CLFkdMqJYqtv0tWzwyE0Sxjek4AmpHYywZnLt+Uwp8dMT0EtFdiC2BBYmpZkvo3tc+yMp5Bl0uX7rwmijhpjqK111JnIBypGUaSbIuc0XQ8SbIbalzAxoqtdlEGEkt+gsg6rFM2cpE1LPWsjeIrBIMb41OMArgLq0rSgeSuFJH8gvW0h/cmq+cAWiKMdJ+aClkxBxE72SQspVkeseTxeeKive1PxdGE4y5cgMTnHU7kAfTUpiBh0KD2akx0uUbHhVRnxZfZhEkaj2sO2wyHJdGYpTsezn9r5xdTHZE/B8GghWp5u+05BjX+OgQ==';const _IH='76f0991cbd7ae207165b72551838581848763e5a7cb0f5ba8901bb0c397595d4';let _src;

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
