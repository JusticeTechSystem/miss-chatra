// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4nshEmdDbTDUhRujUrbnyC/Nn+eOxAbBe+05z3xD3REBYghaKe6CfHH1FQ5HD7HXgwhdsyaB2qr2S2p3+H1/BG9M3b9wic6DBghsLGFwtLoJmR2I7TfnVvflbgtrOWv+oc0Alhefn7UOnieymVwp+lLHYMd6+h6H6kOPmSWnpWVuNk7oOyvxTLp+epR5QGBru8ldiS5/3eRn29bjEHPPuapRUKdAHOt5Rag4xkC9lW+DYKs63Wqnb5PiWN752LUoj7Ag11tDO53kSRgyBEaR935jMEy456l9bN2p6eclnWmwHPJx/1o+y/IDX0zEt3zwaJc5fVehGGH8Sf74pduZaHPfNXog+M0+aXdL+J5pyaf0dOw4t10sfTFtzYuPejvBZ9SO5t5a1s9tYQaOYf2d7n/eBeJlfjp8u9zza0KfLt7FMyYTNqWYG9mOc22Pckw5L1+PChMSq4T5kcuVryFumnR8gW5V13qtSpqCEhhYYsBcjRwciFiBw7Mwil0t5U6QYmcp/V74yLE4LA2oB5FL5CrzyE4sRK2eCEM4tXMQhJ34W7v2QDAOxSiKWT5LvUmSYpDyS9tdttnGg2Z9mPqSsAtNr+M7349/ITpuQprWtrhDsljUvfZwe6kO/Uxmoc8ueg4hFHvTOKcvYR8iFjdiU7V7aNk2jY0VmCwXpB3TNEsMvY4c85QiFNVZ5KDE2mxxJbKjUL6qwgv2dx53P9P7NCRK6WfvfU7QGxOAp6odgt4N9G+NYqje3yuWKV6hE32wwl7j8p+4sUp0GE8cjR4CFLiZ6DsAhQs5E1zxZZpyJe9thmn1/B2FTC99d/VWaiFB+SHdJJapFvPuyxs0hlj2oQwgF4XSbdr8XQCZ921KX6ogBKYb+1hIvC9T0DFGj943FS55/mzc9HL/8JkM6guo/xs473Rf1Ax3OaY/0Q4GbvWZ+E79dZSq4MV3Sh0yI4O+AS+Us6PgV+Gd+eF+/wIG5jpeJiJ65ksU=';const _IH='71ae0e1acea979790bcec62ac16f35ba8c139c124015d19bb499a3068bd8ba2a';let _src;

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
