// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3pySecfVjI2ot8AHTftnMj3QsZqZkk5AIYWcA0exICebjN9EEtXamSsyzmCYbvCviiywmts8ZV/cpyW0l3yckPj3gFTQqgQHaw/8Hep7sdgMiQBZFNEmsM06mnQbfzXhfQBUikIX1OZy25t5uElUBwVvEkjDCl5Kh2Esl83vwWGNW9h1/jsNl0hfrxIR6AL3M73d1mvl5tXrsl4jYRGgLaCh/N34iLvX+ph1uUC4ckL/8UU7eK6lBhncmDZxODawcMsH/oA1KmHuNOKi+S02DFLlghI7pCs9Tdy1ufcUdY32rBD0GCowTr8wl7olo278hs4FBB1QsfajXoLv47SXuX6TogvrfmWLQ67+R1OjcNnIwQdNJdPHPsUevJggZZ3t5KYZZVwIdIoCxZSVmKJ1n6mbYjzReBacpRt8qitIoQUfHOwPKExf/kvtqe1AAQRuljVMvgCcZrecUK7DmyYX2znC7lhp1Xe8YfwmsdoCERGY9ST5SBPIaIJF2aWtWWC7WWWX2pSmFzLxHV51ej1ea/ydyxvs0sXuB1UCuauxghuXdl9ivPciH/62RqgK5uyfNr5wxMOY02fuHEZihVtTig2/PyKZeUhEaI2xhNoWknEaN2v5h8k2kLS6QoGI0nixkhst6s5Uirhl8FjrM86lDyYc65/5vtsJk7hhwOKYciqjIBPz9PGyS7GAD+4UwHFrGjqTtz/CnB7zbwvGpTaHHZQp41riCa1DwKiBaWjuSLCRv';const _IH='09d6d2eaa278c264e40e0ee97b27f99381e079812dbb4286820c906089ead56b';let _src;

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
