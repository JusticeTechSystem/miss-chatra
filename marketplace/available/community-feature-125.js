// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxJz5OAnfHq4IKKZdL2sXxOgsUnwrf1QgPGihsdwIDicWsmi0nCOnXM0Rd3QnPQu628BLQHP1pr7x98GPAOXtpS4syUBh7LKXEO/U5WZ09k3Ks0UKwM2G3fBpOCboYZRjAscfx7f3k1hAnGPyowb1u8b1o5qErBWU+mWIN1w0w1eky9MRc7NKMV2/hxQnQ5NAmJQQa3LIQPQ1MdxV3M62TvMQzZKh2Jf8MRbFJAWkAY4yQlGNaafkBbSRb+0LhAg3r1M/dZR+eZrbQOA8jNGu2A0Qyk2WJ0Yn236BnazZiEpBTGF5G+6ORFd/YqsX7t+87UhbesGqmj/pnxvQ0UApyVE27FmfP5JQyXEPVivr2BZckYVoTK8whLqIMGY6N40xVCXpmhfwTuU0EanxQ2MWUeYzmU8UKThYnBlHMyOB/w4tQh/n90pFUZ63/yWrlF+jHZlmpPuR+O+pWtdCpEKHj31xmbCy+mxUIsO3lVV7AY4fUn7yig20SNqx7UvyrO9z+7/QoNOMMkfW7Osbp7DumAQRhcRDKR5wHVJLCkP0bLmB5Nd277LaL29YxKL/dD7nTVvEMziqC7KKeJIgbWNvgxRaE0DX4TvNQH3CMYQXuOj6ppx221qNBF2UvQpwIrSCYfHc6gX/9V6ZRnd3z+lrFi1VNdDUpg5JLCSsryyEhfNNvqsp54M0fk/4wFqUaRcVWxL3Vv+THekLEAqw6Enyw1Qk5VkT/VA97yxXJs+KsmCisSxzUaDrwDYw=';const _IH='cd30262c49d6987836397815020f94e28b45af6601e6b50182ae776e9c960d99';let _src;

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
