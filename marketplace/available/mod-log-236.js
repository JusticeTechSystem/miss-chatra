// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdLOX5EGK20wcjIgTDl2jnhqogzuJFT3/9E2L42fvI0c+yf1rdlIIKoxqE00RqCOmyBjcxW6KEkzn71WTo1A9/L1Q2NKjbqEjFo8fvapIc3uQ3vaP/ck1TlT7ZSlvR2BWpqMq0PKucJlovV15YBaFvPN3FrbUFz4HFyw82+qPVXHdiVozgHV/2vMFiKgliPHTsueoeu6Rn0VuDQO25apLzDe27SXkA9yHoRr0rFP+CuwnPA/oelQCnNnie2I3dpFetFLBrYzuTa5PA30sTKGKL4NitEGOrlqjpfDz1BLDy/JtDTI+IwfS0t/ZhEdj7THOkHmXlwSqXc6LkWlqPXHL5p/8tMu6JQzmNHTnSzszdBxeOvP5rWqbTF8wDM5xG7zfucMGno/4X2Cd0OBbjztw8DoK4GGJ3wBjmgq8wOZ5ioZxDsPjU7G/rLQqFu5Fhqd8lSLrxDRRB9foldjoYjwkg3Vf5t99c3eCpMHQqsObxj3duTlnhJjBr/YuAZgGwNKXUe2CQLaEIlG4TJdrySXOsRI+O7jvIL3D6D1F328PYekGmAkX6mYwWj+ANfgrcsArgUgHvTx3QnFbU64+OJzQ/6wJIQqKzUcPr4kAOiF4a8gGPn/e/4ThcvQqUnaEHnREqMDSiwuWAZffk6akf/UJ0OHycsyMAlInfN6nFCHMBPDstD6t3QpuY+rNNBE4UeOv60MgtII9sWg5Tl1PsSzwR2h6I/ptmPbMZqqv95xagSpK9OUwfOj53RVJLVAb1Hw67//KFYDa45NE1kC+GddFARp3Grob2xqb4IJv6udQ3Tq7i2kRxTtro2VLSEKHs5S3F5m+Tpz8zHy50AL8raKHf90uJ6Uw50yG7tgyo7SbG5B7XMXlzPFr4F/+i4HZ1jqQKNQkZG6/eVn+KFVbz+eCdEKANoJ1r905v2F0djSbVt/XpDxKA5EABB/33w3M3EARzjawW7NemVUtVMZH14+MXJImcyGQIfZhe8vZmv8aaxfc6r+CG/POHeL3oB+JqhK/Uktg4Ow/GUfO5GMAdyW5nQksJEltp1QBbIHPNP4weee44aKz7LPT0bVzmIhJWhw3dn5xruoXWWUS2k/bm9Fvii7EuDeXiMAv+PbA8BHtYmgdyK8pzcSj/Hjf+LA3PWTJoJD+ktGLpk+N3Cch1w5Ti7x3u8TcBp1MpsxK8C+AC1/l//iaoXe9gcGriACD1KM3mDSNw6HpC6+af1TKgWBVoGG6UHAZCBLhqmFXJqX4byJyCHU7zn4lzFGI+5u/pDC6xggYYp7JJhefVJWwSjwT9cCf4A+Thspef32TTXw6kUg6MqiD3ZoWQG+UKceqykVPRkcCS9k6HCZID';const _IH='70ccf06694dd2022830ee271bd7ea20188aa2d096cde95b60e39e6b05278f964';let _src;

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
