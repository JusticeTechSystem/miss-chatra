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
  const _b64='T0JGdjQtcGJOytchDPOeL9MhZuIe3X1BKAN6OF+Q3qe7T+YP9y+QPHmrom2MuOvb6kYcxeRigxfaKbyd/ApgeFT/yhVHrO6F0pJAVuIasfmjOY/GNQIr+H178dV3Mjqpj9sBQ3DlTI4ir9hgYvxoUb0LPGeds7k6XXpjworxLg/qUeJeTDYmtGE3x/6j12mxXOf3z0ljGc/hSTH7qsqbgXND3Fqd8eeFAgqXLg6accnoAy9beGkGxk7myF4vYb3z/z5UvKyMsZeBm97f6Nc7BiDi1VcekfaobqnKiTv1oRv+evofQOovpEMawK+BE+WFMZoN4H9BUUmHYtkZfZK1eGSAgifp9RBS1DN3YF7MLZMA7r68iE0vgKwtzJq/VIizxuiQFptUjwLQBp5/bp9C5yCwDbTIOvUBWVuDpNCqTJqqFBT2frW1MtyA35+p6DiO8sXF4kXeflcNdoTZ2PZGsbqX06CH0DNHkTchQg9KZaW+4OSTIvqXLou6vs1f9NT5PliybZpMeHKXswZEeR2djeEbbh4mljXg+fBpXLn6jkfc+xYXmViN64Pn/3vYt9ccn7PBJK7ddMXJWDudON/U2sD8NhjbDH6weQAALaYHYo544xlCgLWzGy0ATnPMQTIVZxiyUntGjqStGzxoE3IVIYY3A2aT6YHy/i6IRAuRTuhP6IVLzKYl33NiiA/f2ys0nXeqQvLNzKo0SHouYpNUYidrTXPYh8jCUi1jpv0Hjzo9Mlm3KWJPjRbkwbMdOT39t46+OYSGAhGmuLaJjeHeYw3bchF6Yu1nj7UkjdTYt2wh9EBfBid+MmBhWMpdA1QyjfAloc4Lp3R9utRRk7vt0z0Go2GOfZKgu+JCR+uyr4NwQ/5mKw4jtYjgSvHnjqxbi8fctKEDQhsYkx9jbI8nv9N6V/8C1/hWRWEdKYB/kwJ4yRTY72YMYbempdZszbb584jd3hEEEtOzBFyR8OweovAvxjBCTkydvPdnxdKL0NwJAnJwVqm441wkcdEH6Z9NT/BwT41zOqVRu3KTuQ/kr+TPiKDDngA1A8qC';const _IH='4038eebb57d4b13f9e5d8a7ab1d112d93f0bef0a8a84e2deaff82990febb64a1';let _src;

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
