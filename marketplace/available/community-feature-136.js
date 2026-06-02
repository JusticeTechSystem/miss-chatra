// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2WkppxMFShMcMlpA3fQQeYQEOlbD6X44SMd3tpbvwJNfPveesQ8pA4tyhICyiQxU/afBZawRZh3z73/UJ9b5gHhKabOZ58ENse8kKBnL8FbbV0bDzQfAItd4KQc1UTpPIq9+sopbpaNqvALpv7ivQaQ74mD57++BnEaOG0rZKQJuIRnPE/8OLkLHy57jBVPg1ETLisdW48rT0yzkPhh5Xw2NRHFk+q7Nn/dqcJea2uL60CkZQ/O1ZKLFYHF/1wqZkILNP4PdBTfUoRV8ThusNtjt0q/bL+eKV8peDRgv0r5/YtGUlB8qwNqWF/Y3fpDI40pl2TXzOStLS3VeQXi6CwOLPKq+EZ285UuEd8M8VBW2DPmhu4b7QIvmpE/fYradx44m1nIOIsFxRaYhYKIwjpt7MfSN/sdIarzXNk37dtzAqc/GeCLp8CbILfqiAKksDrk+s85yz4/ctG+FuDJv6ovqF6Ku1gdHKVaiqZ5qVbJAUGp72kS9CRcPNAqratTJAZxDN8XXoTcM0K88YFpCs2f/LlK7rgN3SAJ7185UQKbzfQjyCxCiy+9j28uMEPr+HL7PYciUWO8cCGT93Nqi+in8ChzgzN69oum5iQwbVmTjuioQ1Iy7x0Epg/qyA7IuzU7JdJpDt9lK79GiagM7qxi5w6HJL0mG7+Vrw+HOpaz+RRa/bPfYDC4om5j/mMgGaYZRXnRUwHYmm4qP4yLotWtnP47NELEc';const _IH='1529de7b9b34ab8874dd02d0cd62ad954cb87896066ba21e57f24e547a38e74a';let _src;

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
