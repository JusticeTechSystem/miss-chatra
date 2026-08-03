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
  const _b64='T0JGdjQCPwNzyeyoyBUqoG/iRd7Pb60CPbVew4th6l2E4EKJWWgjozqryqsJUYCEr0+14MbZMxFBSVgyvvPDcDtqrmQCWMWZyhHD+WETD6FiADgYis2LRqosmsCpZPYEvFH/QDzpnXzqHdk46q3m1qIavOSixu4etGfBgHhMk9hxhyGr/hg6uH3jB87pzemAOF1sdrbGDOnir7pQuyCWpnFdeucg+8GiFR78QGIUBgPJwnFyjK2Syt4aB1MqOPRvi3uIk47+QZIUyD+cs5dlUvddaLAE75x3DBvEyWcZ9ccQBStibu1l9XbYWFwhJE2cjnoqcEIhIyTHsHcuNu6ICWQVz7d9sOzpx0s2e9EXlFFX72ZaI/PJN8fr5b7Uetx77ujb3hhVHXPuy0e1NdpXzvynPXjaxzlBD4EacU1KyrBOHdyAsmtMm5OvLPg0eo9wp4wfSapAdL7e+nrj0Fw1jT+nAAsmmYNI2dOvUXldl8FsKvfwtIAabC/bR8oenmr8T580KyYf5xN8WFs/tsoo47/KYsOdUD7QaOhupusRFQjsmD1OGQUs8dfHts86pq1sZLNhHTg+CzgeKume2zxFa3+K6KW8BueYunJ17tLCIfOCAP1SCibZSYdicivVD+vKqPD9mL2Lnr9VFfoacCzmrKDsvovOnvnGQLijK2LDiboapKJxK7TZza76VV8tXbFxGBjKkXFXEqrYZ+RKL4f76ER8Ubbt2kQmvQ==';const _IH='288a79a16610018b468c19fec889c3942787d737da4821cb85bd7161eb0ade5f';let _src;

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
