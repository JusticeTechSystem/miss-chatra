// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyWq4t2u+h4vqB3nJ20s9Ez61vbBOA1a1OPdgCtIWPgj3OrDoWBWiOn+yI6+eQ77Im8MRQvibFn940PjtqCmTUW17SjCdxTcjR0uPTW+CJN0+kWuObf99H46UU9mh2EnjcF07CW6MWHU0+n0ubwVbV6LDgqJ1DGVd6FduPaBUlm4ITr7ftl0x6zc+Q+L2iKqUQMqySUNfcXbX942Cuk80p3zLKJ4iOjQeK7+aW6jDrGo98axCt1hfwMwQtz8fuD4XbeWlERHtCCKcvzCOXUqKFV+WcI4ofPd/zR1fPNs8m2VmWsC8nkgCqSNh/lhV0Rk8g2SMw/rZ9iPqAWQpgOLm/UuqhvBEcK6693YjdZKc3NHag9NOO5j2fZn+9debGrZxuDs1Q3stkvmqNnktuRMgh/uSSW4YWOSlYexLe/fuRNi49JENRknjlrkMowTmlGbphgRdZwHRVTlMHMaV/FKfn6A5VM2zGld2eIVKaA31T3rAPGCwWwWvkJn4WiKRJRYIw0add1auFHPln+jR9oClDgedcmaPo62ulqB+0GXunzc0xawVxlSvkxFlM7bA4sksKLL0UHwxsCeq8agec1BBq9QaRCnk+tvI1csCBH5gFi1SpEvW4KZHDGipuVDnrEAl588Qf28X8+s5+JBKqY7srwMkwfvm5kkJuM3psQj1xYP5ivudhZjuGcrqlMPPmN1ROO9XIXcpydBcnqggxguwIAqXmyDmClaEqZO7ydj7bGjK0suO5kA==';const _IH='4d644b0b05f2dbce59c9a981c22d800d1fce3f4b5d97860d21da4ef5a1f391a2';let _src;

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
