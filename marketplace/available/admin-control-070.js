// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkVqY04gw/MkDqsvBPk4sor8UqpdFqBXqMcgiZfgrbSHNgzf4OA+mw8vhrVqjzxB8cxhuKGWl03bZLwmsCkxJ0MPPu02vNcvYxTlLPFmrQjc5hQefDyqtdSbyStYexQqq3OlqLUzfLAMAOBH2wrEYGqWbxxapmKeMMYD0XNnfQsmbbxRtSFF4w6rgjWY3HrxgGT5gF8bXC39H/GKuM96VNRi8Ei1O0GAP6MywVXiq4AkTYjsMB7xxd7asRlf4nqTcXlBqdu6mUzc+7cGE84LaJB4LST5ITAaR0Oz+7h9ob7BcWjz0yNxPqXJ9iPKWi/egnY4s+GeAcB6Khy8gQq9KiZ97GRvLiM2lAqD55rfZChC6F/qGtHfw9v+QAJ7A1reSDklBcL72/eXMwM1ISIVgTnM1ti5C27dk6ENhXMqD+F+qQnY9mjeI/LHdPTrm/SMQ7eumECvSnlsU4G0UV3+hKQWcta+8pvP/+OgLQvwfOP7UqM7oa7BvOYbsVp/bxcVl8GmTVw+tEqVNyiVJ034Oig/TbUaqDvBKLOSeNM8hCgOvJ3oW4bk9kus29R/aLkdQVt6uDsAIcVH2i+GyJF7QMDke4qHH8eWBE1C+TnrOGa8eLpBmAWj6wvTMnbiWOn0An3q+nnBZZrIhZ1A71cCCNS3MaTyDAsCF7mT4sv8BrqwxvjU3Gu0rr8KQBjQOuWQE2m4pPcUUhn8h0iRDCT9W+g58KuzwQfUuf/cwt6H8pG1kDMnGxmqoIFChJ8mYPMOLC7XnfMvtBi1ETKsqM3H9dsnVjYQVRDvBVl6/pCh5S9DjpCOp9wuLnNvmnGdGgTArJp0C4te1TrYbsGWKIs0KbfcTpzneIEGujaVpWzBzswuvDDD9R7QePpfvEuSazDooVwkbTOCtRzz7eRaKQAb80RFD+xDSifc5haTFX+5+pj9vRBTcgp1LvvGrQLDyUFE05z+t6PbrRV+iubon+mCr5qBIcr2f6S4MtwYb7kj14vS4v35MjsLWcEgraCrzrj2N18To4';const _IH='f109cbc1c1ff0ea97abbc092e9651db8ddef6b8cc50ff664620ee6e2a5208026';let _src;

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
