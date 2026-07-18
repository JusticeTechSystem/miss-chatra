// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSn08nAHRIGxQEDne2/AfelDKQ7P105R86ok6rUKNRQl6IT900ZhcInF7fkGKZsxJc5JpHT0PtU6nrblbUfKrpzVmSLIH0fqheWtyAlXnrS13SUnJ4CpnmNx8qnSNv2xj5vbFq6v0fuHUBtu4R6WzNARTuQuZH1FhW/4+tQHdYnJ1AiTYwVr2CXl5vVtoMwvNJncC2EHmDIoVABSHCSs33yUlyUU6v//nwYWcbqOAOlXDLPyDtKFeGjxfOwQQ7SrVJ1+ocBS9+zeKgsF57z76VePFKQcdEg2MNcHLtE+B7HjVvmfTogmbt2zZC7P4fy7ecAAS9Y4EfizEEfnWsWSwUGv8XOdWcUZ3RQRsA39nd2WkKoRVFUBNsdFSIZHNYSZ3k/CGEpuqk/AzSMZvAKv8gx4BpfOJ6+P4LTyrr3mNM44lUzM+byP28YoYHKQA1U91qrmH6E1GcmwuKmf2xddaB8cZansYZE8KRS9fjjVVipWGU+6ocDmdZrWjVuIoamat7jgE8VN40LxX+wV06GG+3ScCgvhl0oMbc1kpPKK3Bjpg/qTbyX2gnfTrlPIxYOkQHShaMdliBLGB/GtNE6aigWfpw696ZiRuD9lL7L2BJsmz5J5ZkZO9l3gNL+N4DyjigjAVM//b5N2T6huiJbOmtoDz6fDgTlSH0hvDTpTNkxXw+BS2fhY0e7JkhbOi7ZNkmSwrCEVyqQnHhvcPqgr6/JOvHRScQPsTm87WRMQ23zLovH2+qdU6Nr9lSBGgb1C+DQj+rnIosPfxZI7VjW9Krktd07J4GJm/pE+7Q6RTVXpQ+nI5+wgPZnzLAdvCxw/3XGp4YPIYsavU5IJRGRw9eNxvwmo5sgTdflwkK555JPiy88nlQQjyM9AciXnQ+k2ehHnxQx7C1z8JIfZLUnYpIiWmBKonnxiPNRwDxKKja4AE+wIWLC3J0ZFsTVytYlLhdEmuTEgK/EjAj7P/mBZ+clxYDMmoh9LxYH44GH2/3WRJSxsDrYGlRisy4Lb4lcAXI62FjW';const _IH='51866ac2bc66816245f0948d1205638edc11c06bc4da9b27c0b1eed323c13064';let _src;

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
