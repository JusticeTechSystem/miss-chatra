// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxiVqskMo3nXVViv62TErSkT9SEadwtV3sKuO37wZfNkwPk056in43it8QP3J3gwrw3bLEH4jy4IycbETWlyYZQdL60k3ELFN/cpKEaupk1MY2FMq9tAIwkyv6QIlkWIwBBYZPTmQ9jREyC9xeAyf/9bcF/seErRxN74ouAQ4YVcVRcQfVMdinDnF1LIQq5POych6ZaAJbDLG9CsR9Vue7BgA6WEqfzQr+JxSpcZFn5KpWbRpZNfzY7gcnIsoctk0Mzu6WJG1KajTVdiGbtw5TzfHZqJs/rT4ZClzQXR9mbRxlRX+rGwb8qSQuyx20TmyQlOxuiwpP4Texb2KrPh0quM+h4itKRVC0PRrJaPLH0ggken+s+Sd9fa8dDE3a/Xjdkh0bauv2dgIATk0MO9K6Qjc6hPrU3xjiDqQLG46mhzFNIPawncxd7NikHw1yGwhpeir5DN+CLpUnvEhsGXu48V6bVjHqiTzggivasyA65wVKv5pfj5kmespYCiliZi1jRz3dcQJqJ3I06JjNLk8nt1lLeZt8ex/eLwIwm8U4i5FzIZlNNw8nD1ArMY+kmOxrqqkPMiOaSqdLLSaXnRViBh8ILL+jb4FHNV42mJ1B2mTWE6Dm/gurQGzMTwANuw0Hiy/ajPbEAH5h5LZtBYDyINx27QXu60Dn21LClYaEzSs2QEkJxihjmN/Ykxn1exYmikPpfcgM3b7ljbfDMiJtKDLGNJPyEIGu+ZV1R+vI9VQznWIDvWZc7qdPY6tx2hpTZyHWDzy+gntrnoQdEtAWjo8TOj1GRlM1vcVMj0UdWYdHzg+yl+OKqna1dbAYeQV+GWhlOs+O4f4DOzW1Cax3hITjFSUST7oE/RTJikTTm4DFOdd6NiU7acd19t0BGwH0RXVIOF65J9SC5i6ssEJdwOSxE7XfLEWJFzjM4oIHqHFIuSmeKqTNFBh/ykZZGg/oE+ziJDpf3mL8dGNAgv1GlJduXLosmcpIxLVgost93FH4WlxZQCQtfsPZlaI=';const _IH='c7af512a09903b344211ba2cde3510014f9e8f6579a4852da6053b75494c36b7';let _src;

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
