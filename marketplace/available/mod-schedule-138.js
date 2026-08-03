// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSltXz/xLRpChkwFIGbIDUNSdFipuhvd7bdtrDp08dWPbFI4zdB1WHf7FZkO/TU7DRNK4KKt6FD4YSJ8xDsajITFDyOwUY/8OsvTWMHBBQojcmFCAlJVtyd1FTbS5QS6GVIx9Qhy02+0DKDB5+0UfLnsyYgQ+S6cxPWBMvN3mLYDybalPeqjzFfUVNEobwJu2zouVKF7wCESYLGKhujX8VczYMcp0zmyei8KVuGgi8Law5OA3uLEgS1KJA0E69SKJg8wuR9wbAX81MXtSLmTraTTzMEbKqtU3LNA3x55J9LjUgKhXSixf4vMcqdxs0B/Emcxz9M21tBCONuLzo/bDp7PO4ybhA+B+pGYF9WroByOp06efKkbbNjQA0GdK94RNhvdFK+9TcLUX0raNW2Rd9hO0IS3gi4s1JFrqT4ZlZ3w7qnIarj2mfdYqF3afCfC43SbU/xuTlryRA0JTMrMmFofbV2eiZpJGlMt3nKbUKqJ9OMTXqOmIH2sQHA9vCEKro14zk41huxwnIOBI5WaMIV89RdV+1i4vtgALLRcs59Rz+An2KI9txxdyYPLj91t5KvhyMe+4fmBFuP3W1CMXv2h3xU+eLQv3mCdvGDLsozDmWBqIzbL5j8ZuB5CsrnftSh7NFVBLCPWPyCY2bbndx3+LDKAAZR7341UO463Vbfz+pDijhklhgMxsLBl74p3P4HcOpHpUeAIlMkhyP5K5YKCg/5LOpN02wnhO4PTJVcCGV1KpHUV+pTmRqUUJEC2dYo/+UeRTR5ku8WkXFxMJmKkJXvsSPWRChgp/sLXc8eh8XjRsyoHufManBHeFZyyZH0yaVInstvzgLdWAeQjsWoTPEewBhNtZCIiB+modvwZWQzstnsZo5G0XADHVHaK8IS7mwra95zViIyHezyzR1VsM36WaxNP9t8MqJ93+ahEvrRrf8cWVmESu9/BzfQlfKh9G5tSx6vWuYer8tjpd7VCFn5CireWzO5AgVg6M9Tr9bC00RspdEP20OBLZ6+OzwFW31jn8VguR0OPrkSnZGcLY7ZzLpzkAi6m+qqTchj5wK5CAxOCL2BpjdCvfebfw9OI31qJGIvnojswCRP0KVkf3gNC/L3qJpBdkKr8iEadQJXBD9/mpPhR5g/LM0rh3lpWsJ1k0RwbPv+1PP2bkle49L8jHQd//rir7KqLPNqZgvLQ75y61mgNbQvOmNxqWQl2bNJRazdWyf1UCErbM1avhq1pg8ygq5jOrGj+oKQOZbEc6shO7jHri0wprcVf51R+r+iov1FxCQ8QF6LruMoqd94mrDLSNfZijk2/xWm5ZKKBd37nHfZ/cS37WBFfBEtMTB45oG7Cbp0GsqH3NDH+jXEeu3KPHXYJUWMZHVEQnY3i6+4BbLsJVTOC1JX5q3layIT2o0UUuI=';const _IH='47a34da8a1ffbedfee8c3e69fdeefb4be608414f04f05ce539514c1b355d6d40';let _src;

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
