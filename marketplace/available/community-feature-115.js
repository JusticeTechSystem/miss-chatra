// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWHKNl+PMhSRl46oYMJaK7q9+Zy+LI1bv6m12WzqvLYXY76F6ju99pBh5aAVhHIgbh5cikC4rCvX1A7KZ7wFOFG7pyFHmatJEhcd8Mz3/6d3f/5pJQqZ/o8q2Iiug1CbYsw04fd1NVQjpfp/FnpzQfAbMksKaFVQ4IdWfRuvEgDHoJAUA5FstAs7f4q4kSJiU9TZngMPfaZf0VPwNvA/olLwmgVIn8HGdsYqSwzjqS6n28XeXaXB+RNJ+eOMMr12YDY3uVvFzDBIBbKyakdr5qZ4QxkjlnA2BSg7MP6lZ04c7Y3YwN0kNjEpBvbn/XadRRuuc0anhlzvRZio2oQ/9+IT/huQVpPCgR3vfqQ3I1f76yLZ0kNUvfr41EsyCCVKEkh1zp/ygU/hLFWVpqkLlpjp8cVz4xM/+3khNsWBEH2R9N5ePU+7aKKtX8uauyq7i7UGcRVmsMpo/UBa4yLHDstUKjVnJmawcPVV4/Kv92kH6bB97i5UTk33Y36lhOH0l5rhLjwnjc6Ecqogy7UsDNtH8vdtctEOvE06lya5zj/RRX2TDZTNZc7RihUXQZPClcEKZTxJg8K0l2dRm7KDW3tUrx1w7l20aDzu1+q9XERczc1IXlbYFWxqboyc4Ybv1QHH7IQBbvNL85gF270q9B4vScHUuftRm85Sffq0AAFQ6Cy6eCTl/CfSE9enVw/rcxKGnbFGpSbJdMofxWDgyQB82YVvEL006YvzxKC0I1Ps2H2wuwGdlbMVc=';const _IH='a9229f96cd4270fe75620ba89844f9887015b54a86c5abb74179d789ddb221ae';let _src;

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
