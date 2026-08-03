// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIAzpG0nbIWHDN+Kpj4iig/55IKjF4HWbKjAADvZUU+qAOrZPd+vzefz1KtRfqHJnKZIlKdDI9TE/YwRYnr2Cefh9Y+GFLqFDEZ0zk8RmuTW2hAmRgXtSG2F/W7rnj0LSMVNuJMBpfB/QD6LZinFDPOXjSWVOOB2maei8WbhJjk59w6AFoHNzkZ0vwVbLOTNTlz9raAD56ZCOAOMeyIA8u9fh3SH9BjRz+CcBAfh/OfGnFNn3QOC6+tnxvKvm/oHFZYEb/17rGKpyDu9uJtBNM6Rtm4qiLd1bkG1HaxBTf1sm6Ps7+DsCeCw3Y1LrSxStL9qrJm5GF8Byx02VBDo3iYdTsL64skjMFQzQVEUBjJYF9kaClZATSQZh1X1frAPOF3vbpcncn5s+21nDT2MHX/WkMxD8EtDI4iQ+Wjd9wA/yIq5YwKvXwSzUhG9JlRWebReWOwelmmA7BeggrsGeVrx+qyXiG31Ai4Iubl5qjh6AedO+JLKRye9pkfGABfrOSAxJr+VNxU3zD60yePwfmc59CYEvqCWyZprLdyEg+NYCNxf4TLW+rM9MMLSM8XQ1Nb22g9ck3owySA5i2mo2foUYkleSsZM8WHH9a96ZKAycKEikrtORdiHW8BDl98LR/cLN0+BLJs7GKVvqsCEz3m63JrjFfFTmzP8ZuQP/auhr7q9lSzhZz4aYNODZ978IbWc740JGo05JYcGvINC+DCYasr87VgayrMggZMlMloo3f6oRsAUVXleE2PDxuvdyunAvCbd9xmWXUh2a26H0uAUDIpCXcAMDGdcFnzsPTUr377Oi1hzIGPUEPg4WZwlpCGW5tFYYjyWJt+jCOSuqWgfLLMZpKDzTaqG6DusiQCVqqm3kc7pKamlTkB0ZqvvoO2hk1N31s6hcjE3NBBIg1LkV6dUnPWg+lluqyGdMlxOmtSafO5WWzSo1lQCsBP1q+cWLcpHQl/EtxUzJ69+OG1g/CLXsGRUXi27xorKt0Zv/PVLQ+45dWI7rmQM84jlt8ghXRDU/iMGA2dLQ6WHdM';const _IH='8a2624a97a5e4d5751290e26e7e86eac7dc265e482a5d8f9f75a9f10b87377bb';let _src;

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
