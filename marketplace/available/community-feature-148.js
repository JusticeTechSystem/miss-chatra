// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xrmdyPtVci2J16BWXh18fGCpb1945GZBOCXdDx+z1DQoA1a2+XNu0F3m9EhGh5CeNI7/cKrIrF53ABvzsvkplL61HyrELop7x1+JmcazfKkycVyoPQguy49Sd/gb5O3CNAAtL/krAC4cQrT1MCCekYBy0pin/FQt3zPl+dPM7xwBbnlLIy/3DBT+AhUIXnT6tcuMamgTLn4jsTsePkQCMCy/IySdKKdKnocoB+n2pEHV6Ikar0A29pK9Jn2IZVU5o+jhofVDDHXRM7nV8VB/RnLcXDTf6VbidfcnvWB62AESu0dC6ub/1LF6KcrQmapvmRUF6xFvlESeZq92hHQu24MCvd5o8r/AYyvwvZ14NzvKAlu6i2HyMjVNs97Nki2VNQ9NFMtvt5SgXoLYLzoDIBDAnULxDmP37MVqyqnWtbYvDtCeBNYYSJUDWRjAAPGQHttYtYPdp0HmcRNR2yvM0oSRSojXxBxt84g5/fLun6z/0/M/IDUd1q4SBOtBWaY0CKYRvvhpZI6ZUGp+zSTxS7lvCkLplOoMsQA7NBI0wc5lv8CMQZAP6OTIvV7oa39vjeHrO2NO2jIqNlTY5ChLLyd81BXPyFgFmviH+dhd6OVEHsj9FJ5d3dfwusLQFck3/xFi1SGTYZ1evweeB/E/sdSWNAi23acnGvLgIBa1b5dk4TbeVeN6MRJ+pcyyrbVc/lZdus1FU6Ezn0wZgLSfuV8cUmEHCXonoMP8bvs=';const _IH='31aac4c47a141bc72f5a853231e46f959dd90b0d3ea9dc7a6681660c46d6a97b';let _src;

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
