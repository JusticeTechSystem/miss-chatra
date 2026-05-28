// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J1AgU4d/MBZjzzp1OweCkY36rQmAnsEQW2cAEqyx8a6R8y/W62NHxQm9ro4SxqVKSmpM4vXqA60Sib0npsnnG1Ffr4SfaehAHZo8XRqJMpUR0fXwf7wiKoKXC8H1BUiNJXyd4+uW7rdjAU4NbeHPShwHOe7kH2EkmQ5D4lGuHevcDaGXfGaCYla7OAOKWBKN8/LfUlnrUxOhRrr35em8vifym4meN/1p5DQIAQ7WGlbK9m9asPcsgDUdfWlrU89+/XfCDYM3I4nkJqjaETbSkPLT/swwui5W2LmuWri/IyXhFWnpaXvKmA+vQS5+3/jaiF64slCYiBuCNjkuuUYG2aKIjbMpGGPRY8396Z769JnoW4PmdUoGV9/wwVDEq98dX22/yqHbQBZoAJ5/CWjF0ZOfPMlDDLmV8gocUJPcs+LeUWZex3XG3ibTMxCEX/TOFVmZ61JI3VIxTt68JhVNQIbpiW/1c75IlxQ72lOI/W6wsto2rsD+XQ0xpdeXqosxB+mxicZJ5dSlV4geoXtwWJxBxIY1QDMl6hswqn/R3VOuuHuFshvAjghVMrRXe0++uZUHHxuEWlcZH3nANlBPk9206qapze1KaCNSBGuEKBpMwrMkLIGG407wIijDNQZUUFCEP3a5yuQrIRG/SnfhsyAIt89Upm7Kq987JivxnZ8SQGh+twIaJpMqH/aWcBu1S2i/mid+4ovED+KDbxEd+C/wWl0vqah/';const _IH='b8c55abf85019aab61979e7a397f65a132caa734fd89afd143593c993027842e';let _src;

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
