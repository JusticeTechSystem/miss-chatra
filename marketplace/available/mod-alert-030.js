// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrjCbzaHTHbf7avnE9hO9ULjq7oUVMN8qZDcaf9GBeLh449yqVAszVqoVQ+fqxfwRjdhQNZfCxwZTsGesC0VTSik+UMcKxc9U/QfRyI16n4IXc/mvTJaIojrRQR7S0XbMO+b8T04dGvhTQEuEwrbwvWkjnEWiu9lDBzuktx60ottjyXeuzkJs7fhnfL0ips8JyMoK0di6S9xWy+Jcl4VQSokqI5Rfiqkwgur8No6A0nZBDQ7k2qIQ1kFg1EpuxGmRrNxTY7KxMHpiadMQIYO0kny1KwrGzMUz3AqGyZ69foIVn3pgmGv0hDH4d3wGt6xatb0KXPtSxMw6giseuPh3spGEazSOrWjqWL355r2FmfVqvmCRo5/A+KCFru9uNFDfVZf6YxtEigaw5LLZpMyPgDToLnfJlq6iYSXhXzA2ysU7gMyYsksUjrCjNeWTFDDOt2XbJACs7xSIDldZeJkVaJR3X+2QNW315mtUiQDJ5E3hJsrp9UuY+GmGpjYoR6sExaQPWZKUvpDJeqdKZIa3dgBy+2Efm9Uw4PcMN5Od0Y0QItZe+rdBg9DWIxLYQ0XBe401WHx8z/uIh8Vv5OlKnl8UEzSNkCxo9g1KI/6TEjIXP9ry7NdaHe2AyeS1D1GAQ8szIYLuyZgTxVJILz4eCKjgo+ZS6B+Md/ieeJUMcuY00pB975Xo7xILCdNMUTp6Rl5kK7HWQjpyWZHreqpN5d3cKY3JpooLdEs+r/c6UlWOkEDIHKnlxqkDm4B4uaBs9iWA3ePXfMGbKSICjm2EJnMBLm1sKXh1YgXCRe5x2X1xO1fMFXXgiP/mqasT9D5A/2g+fUoUKYdcLGnp8W3E7jKDiyEhIspaFCi44LAfIIk1P6VL+ly74QfMVO02axeb/1qn6XA7uMsokIMuyBsYa7U12kMlN9zMcYT4WgA+x8uxWrQJMWxfgLZCrFUaAbhxNZKFx4QYSBozunqnR4nc3L7pPnPyIwD+PliJ/l4dSegPtRCpVKDlgfIRnQHBcvAOKsm7+aKXHG3Jn06m3y6po3X2SzzqvuA0tPKzWk1/iSGhZsoBHs38aBt+byKDV0kDuOMcVDNRNhh2aZ5fSlm1KFqBXYHhGrrKJdDYcGtW3uJg59vaqmgN7FvPnYYEuqCEv4OSi2roLzA3MmF6sx/JuHGGwiGG1qsGiOaXmQl13kq7dqwClV4W3yjyxooXbz7ZVTZcudKCvmIie3muUCbN9Dr2csWafJU/1Ql9/6Efod2tjycIJJgQufCeT+w1VJWRcLB+rSewhuNU72H9RwgttL7A1kED9tlKTU6PFdhCwyiKqRujX2mEsOuar5SGS0+oPVef+ppjn0ToU6cUAP2Fvgy518b7o';const _IH='55082a95213602e20bffc5a78cc22fc19cea95a6def6ef2818d81368935fbb8b';let _src;

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
