// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kMm3j/KlHK4RRae/7Cv/zsuDSqydAX94awovMUi+Cuxs4pV3eRL+Ytbg4WJUNpTlQ1oHbHw7qXOPxxqDk55SjthI/M7B107t+X+p8TRAKQUzSfvjnATeikoDY+DC/PtaDVCkd8DYllghx+9sqWKS+bVcV+QijKVurwZaSC68k7T3FWWHVmyER25BJMJb3QLHJ+vDlO6q3XuY9HdJWBs1s2rqZjOX8/Tl6nXBe6pCCzJZWKeWLqu0QGR4VT0ehBBbRY+n3fvEicqCSZPHkZxLJO+WcZo1r4fTmufEAce6VBluE6yAziypTsAihQhYDN6i+HRVEutPf8KvlPxFDjzGlx6skipv7bNbxxj1Bt+8CxdYath5AdbtR2l7pLxxETc/2UPdXH4Z/XuwG/1COj+rey/3w1vdgTg3cuhDs2ejJNsxgw3PLumaoadaALPi6hhr4x2Ra35HFfyUG0oWBD2/6aIhg0mQweeOWJc66ATBj9Cuh/CUZIrJS9D5+MGC6jT2EkxcSFpeHWSjzM+RZz4YlMtWojaETQnLgk6HBC5F9sz3VVkSUqpCE73iLLrL9K9s9R4C01QWsYp0yIMcu9aMiKMCGvyD5kW8fWlP0Rggx8c2dvn9BmuO1l3e1ov0pyOY0VzeNp7u6sTuk+fAvv/tVgUqoskSP+rAH85MUo/rP0GWYzUILT3dnr3RJmGtRYTJIPMJoGizmY2khcmxBjMzeoK04hS4Yc/kjyQ8eoYq5Py/U0fRMUp5zAqlaRGVo95OITOWVFkL1l+9DcZSz9EVcbQYcOdb5fh1b6bS1eniRAPpAZD1kh2iurwN/M7rtMf1APdZViNN8PY0H1amL0Gie4t/ccDBmsmcpMHZTyDEOrWJoBkbEzi6aXoaGwrrFi5/Uh+2u+Vv3H9LWACaWHM9buxK6KsfYBTiTCJffnH5Sx1hant3/LznX9nDAmxW/3AmBnx37czUX6rC3bNXP9GxhZYWCiPzOqWZaLSJ7rNHlIAg2uBT5pA=';const _IH='f83713fc5e7e1b72e7f0a274d59478adc1b25f1b52f79fcd8b590528ba35482e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
