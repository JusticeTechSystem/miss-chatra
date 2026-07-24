// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl0ncDHPPy8SREKiUXqS16OtlEhrybthFpj5lLDeHTinNvu0fPcLTtGN8SLQ/WTkTfU7rHIsGET0HjYpwELRMXqGozGCt3c7+tYPt+y9hsqqb2ria9At8H6mS9AjFfBhn4pQvAcHEGawsn8/XX4UWxsgHFc4w5YAon871bjAwgx1ljNszI+PMKPKqojjjFKnLcCp8YMBP3Ukw5hLSr4EZ5Oaa61OKPWTbMpW0VMRK/J2VeUb82YKTFusJNu+IbLlx6oclYInlRW3lMD2Ubq0qdvo9PPjIAuTWDmLijNs+FHj754Fr//f9hEY3V1yflK3vQ8X3UbgaIXX6nYaIOWFw0Y6RXsu52+iUFurBFva12Ti5aXxffAaFLgDTV+p6SSr0AfG2MT2TZjT0Syni4RJFmvDlHrqjoqiRKOaOqmovHisLkZoYek8ND5C35neDPrn6aUpB0dLMcfzCwuUDE8IXxl/gepYtqzp55YO9EyRn0dPAWvrMRgX6x7gT6YUGkHX3bkgsKhQFru+2xSvA93qX0+DvAdtXBi/UD+9TXoRS3mjyUERZToerJXarBwRseefkLWELBe+PRo12I0JynFxnbhFsO/oK7tUQCcXkn5dZgCEGUyvt9i+WfywaaJwTwhXrc0mLNIAa1NEk2bmjnnB7ccJeSGSSGe1o4RJHzEXkgSNWcKvrnr/lc+s6q28v+ISpa70D62SQva/b81dohhbd4N88gyQebREM=';const _IH='b59d4be5b66c1a63258ff9082df92c6ce9c68d215ba2d6ee2d851429e126704e';let _src;

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
