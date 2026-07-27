// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRcanR0eJAa1+SlUvYLCZSaaAzwgZZGLsW8BIRBtmv0gz7T8C7SZ4k18fO2LfnUnwzdiCRTSL2sjY7xP6HSKfYafGHnKqsNJNZHJao+tEBwbTonjlWT1QEYLMry7R/H9FvdJPWE87obb2uZuV15HSuqgmwyXmgH4p4CqefNiwebHxcKkAIr2lP0PG9Uyxsj2WFdWffVQu20XbxFvQxYfXbi/nSKB2fIAzje4zswlRh05vj6wEHqu+RMvKyemWdTdr7pl21doMe1MDxOr9k7dUYFTslgknnG3yNHE06vZCW0oqdPAfwmxtamPRdwlHA5vRhP6fCC0ebclxSzSwqox6nhSmeeMMwl0lEqDWbs4Y6Thw0eCfEifB17oTK6BtecCpWsikZzP/caOSKysRpPjBOzBQi1sJJzwAY4FKYCIMPzVGzr+toBjHz5j7Ki98hosJ+M0GYtEG82/s9hegWTvIIJETY7AsE9FOs041PuP5knCd1l+VdGmHOOHceWXYxKWbPZRo3r0D9RhL7KGDT6ptob2dilYjzOYwE6vuOeYTdNeQuNQu/TsEnZaoCP+86q5VwXZH8ecSc1gKaTLkSE0ZpsWwKPbrb+kM+n8DfQDc4qyZDUYEGRSBJlDlcNc0U0wb4wqNIbn5ZORWOHXak/hQ0i9U8RDbxdrra6vKg6eCFbnAiEpnMfWi6aKgl0sL7hwkC1ROc2pYHXzzyI4zahcxAdP/V/HtWZPUN5eRDU/vpH4nGRz5tKJjTwOPYK+zVxW3dfnwww1gmGLf29G3FkiFvaCnRHB1QklCHCLZBxUn7u0qycUIBJ2IxpOigyrhrh7M6vRnfKx9lKk64DSYJr5dwP2q1DvfrkBFnPtblSRAiFL0Evrg8bVaVeTjAuEFhBRTnO1oPB8r837E0wuoIlFNp5kQTVsWYmBI2wN9BKP7p95oTzMgx6qjU7jsJs3r9oYWaTSdlP9Ex/4F5i0qqdFqnXEqKm4C/+xdIwuqeslyLIh7jAj84tOk/z8fmuQ6QOCI=';const _IH='fca6fe875e800ed7d3e81a5e8878970336f065f8742ae8c2b203e96a648c4ced';let _src;

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
