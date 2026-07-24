// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYf3SYuz9uaWDvz0FOajak0gigUszbtaVNEG7tx2319cCKJPjJ+lRnUzxHiYRZCLaJRM4NXp0MaTjvviHb4b7EvBA2nmXo67mVFKzOBbh1pK96HpphrWTUZ0j2dXelobDCdrZ4sqyT1Ils2McnajHLCRTAWnrAIWhbunYaOhGlcGG7Ztan5dRA0jNfMziSlnZNVa6s5u2MXucyjrrROZZ+bWuVSRNMeplkB2+spdzm7AqK89KUFBn57B9/HzNHluepOyxs7cSI2fVh/cldN1SdmxxNi9eKUWVL4lqf1ptmhNPhgo0Mq34uIAFH1bthnluapn12T8ivBQuPKVqkJQ8VS3nkWYL2ALkcOjWZuz7DxJWZS/nL/GG9fA68ZuqAz9z+vXCw8q3VES9zGVGFKKtr6Y6hsIWtxAFgFIBLyfguofT0f0r+1KswRdftnwgtf7hnYz5DLAwdXBVIV0cOXaxamqs0cOR9+6/KTQdXyqehvhrOOanWsxyMmuKywDLlXCtgWvxmrLziY2rYWVpzHCLIwv30SBDb8OcRcZDWFovYnBYi11wRpPIvMM7nhMWCQdWZF3iyu68Ys487713TDwhuyD3Qr/V1sZa3UUODmhqNAo7XpaJocsH0FjZmXvD9qdB3JprOqAvLxmUEIiRSW2SO5gtPvmjKi1U3uxUgIsoHa+vYxJi/3ZbvzmIL9xYWNOhZx7pvTykFUFVidO0C928VhHp8HbYmnzn7F3xJatIrGrUlaQ3XTsrXSEtjoy8uoxsNN6FS0vrdSPWgZt6w5ZqiZkYDHHGy8aEPFkrfJQioaQIsLNVpQqaR2SboJA9dsg5kbLt29Pwg1fErDftNnODI4OaYeG748Lds7AV2LTK6Q/SQwQXBA2caNpoJ7MvoQ3Mi6aRVq3vFeISTCuXMDBmN1pRAWK8NdU3JG6ZdVt0edO/X3RPigRo0tJHADrGjZWcrwoobaYEBj70RAATcsFmy2h+YexWgl8CCjnhXLn1MYD7dQvkHfZ8HLypiNYs3Fak3j03EeYv7rbe9nPBE5Vb3hk1h1FSN45mklmqTyCo=';const _IH='eee041f62b23a622687f55cad493851ec6af52b33f853757622206ace1545315';let _src;

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
