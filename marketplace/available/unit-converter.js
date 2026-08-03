// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTa6Sk/KHX3r4F0f71qaENl448N9uSpEXjb7gaWByg5Qeqdrambhdtg3S74oavcqhMhByp3r9MGeyjs+ZlX/dBogNGAhSZHPw1oPD4R+zraUczMSGgTVGECUZfboK08FDzISUg5sggsOvNwcMUw+1GkyebYXIjVMqDT8RDE02qa5la7bv9YChvCcba605Nna3UabnNl6Ve/Q/8xpC69mkObl2ULD8OCraWuc+w1Of1ujsqTLwedBtkkzOi5IvO9jaanl0+YcMhzLeCOlvHw58CrKS5Sgjgap9l62ACP9jNfuxUcs61+6rrGnPuYFY+yCllEZEsWn2iovJk+JZ5hu1VqE7+p7d1nf0zseNhLB4ZupArTA6fWVv5dX8I+TQ07G9HBrkZmPcxYMhsq/+igSPJySjF2MwxYCP3oEzHYF8vL5xtih5493dB1ccVkc6kbE7IjzZH2hsXiO9gPC3Uj8a0TO8giPSnqAmqTyt218MsaTC3NI9JwFIpFzlmoou9VEM33xNUtYQpgKoZst1UD9qpJFryd3VCEk0KjYMbN3tN9JOZ8m+yAzIuPqJNvxih91C7TiMS8dV1aMyQiXNYSLiMtd/0yiTOUbFjymMn7WEiQOsLvzz0ZauaoM7w0rzc/+3KHVn767HnlXzZpJzuodKgyXnRj0drioPbGh9LHU/NM+F2+vqtiyHPIFDh2VKRnOx1HbsgB2Nolty0vIRRgQbzcu5TggRz2lJ1BgsQQpL8R/Ky4QuGmDINZaheKpp+glp4MyhRe9ySeLojO5NRZNPRGC33KCpNzIC1tkJe7ssbzF4Bfu1QWY4fION/6Owz3i9rIQMtfX/QToQm3zrApZw25WEl9dEgUeNZHbN6qEBo+qtNWDg/68y2avrRG+MUIqb+Rot7qgvbhbMipLwZjPfOGSOLTLFabYNB2dtldZBewSrQ0DKVsvWmtQlj6KHaRjRndBr1Lh53NK9vK5JlHytiRQCv179BzqacuHQijoFpObOEeRB8OnVV5gqEjIMSr1xSCJT8QGzi4js9cMT6mFhwSeg33czTNntWzH/rcCGYb/BCNMph62BGx3vZb0z7TDFUAqQxtE27X63sSmeMaMTw7KdQqbtNxXWLtEVxcEs6Mo4RkqrlLUsxfvbTwarSiLByZT5NU6I+eM0o1lmy6ZuuM2V3v/fmXxNqN5xPze3M5HFEZKdZT2pVILXBrlW1/SYx+DuIdIMQsYZN5D/xpeBg24wziCfs2pvQQMJCs6Ybw+VsVbvwqql0Mo+Mxfh/+3Mfa9FCNtSiheLi36Z+YkUZ/5ZnHPkU7wW8k2V+OezGegKGIPQ6F7D5mpeo2UmbhoA6EGFMj4DHlsob47u482xiv9vbIPQotn9qubOmp8Dc6BnQF5kLL/pui3t1+Yky63hnpRXBrwKW8NMC/sInFKDP/lsAqF8+RZT/VeQAeJ4jKltOnXadKOeBLYo0W20B3TjQHn/8VSYWn+y5UITOYFU85KJFfKszREY8FC5TAWXOxhad2';const _IH='5867abedca89d216310779b94d688d1736913a251b3841b4ad848028a61aef28';let _src;

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
