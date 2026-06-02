// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWoyny2fEsJvwstf94avtIr8BXDXDk+hvXx6C6SvnpCtLs0JE2vOVQPAkx3Q3BH/DdX+GR3lW4UKRNPNtc5PXB4iw9g1q48fwiMtqQeJzH3lD0vk9xBqvya5NslxtRN27SfnhAWSBBEfflYnyWkVr9pv1UTLBtgKuHPs4UTAsmtw1DObeRTiOa0R8ofHVuz9rSwLQWItuiB+deAQeD+rqhTrgbb1ZBItYAwop9BleAXWZsGqgnVX5M5lf/Iw8oq5hTqCp/cfcwgaE4nXswIbOXsfra2EEl3+Kg/XHmBWB0Hu/sM7cIJG23vK5jc9YkzCY1UKuz/qjLE1Moa1/gI6FnjaspU5Z2aL5C44w9rZuE569R7SQt+ghWjyLQwrUe2WfUczhvLGzlne3vLClekeU0vjYSi3plOqebr6T0g/6SYuDzuO685MCKirPiq9MB4QKVl7+o6LNBVlTRUl0ZiZlbt/4yjZbP63g4QDWQCSapEBqi8u/w9PHJxLg+LozxyWB7sLfBaktuoGlc3spWx8KQ26+ntiBMOY68BpgT/kW5Q61QNgGdyyn8fei3YPGMPL/3+KAmLhMO3XyQBHNR8dSKUYWI5Wp6Y/kEMYnI2/DTxM3rTBQp18VGwTldDm1RAlokS/nc3qpHEzh4tGg7adaZ9AX3rmLFTy2PHZmtYGRe9Q48yrWUiksT+nVqXMwVOWq6hkdBc/9VLWWKeFkMJE1oZrWPHxpVHnDXyIXn8qjQ==';const _IH='31dd736e0390cd5b9a4e441b7058bfe20843d1fa6d924327fd85e16e37ae342b';let _src;

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
