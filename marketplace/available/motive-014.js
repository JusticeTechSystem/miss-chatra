// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjtQs9jy9XS2YbYv4sAd1WHuDLwjE3nMHdP7YHkcPLXLgLKAH0J6YqUkD/F9mK+xlZQD5ef2EnPPNylAdsCriEDyEDb8s1ou/uiC3OeTESPQj4sN0qJqbbhXqknGfZMEHyqy6LtK0Ix1zpSTEI1VWEBqEblRiEhZpjEbiMKpfwORIkMW2Qqs3IGxfozlYuAuGRby6BiIRpLLDOIzZCZnaeOxUunGkl2q4wsOjPE315mySczdnsuS0MEPbrVYwgfJZHtLsF8np0azzQ2mvf+nezd/6LRtHbWNnwf24zTNbhZ+U7CxdMyPkceQJsPHS82DPMbOxeeNhtOl49jKpHcBH9fAvmvgWIk0gSs7ZfvrNz/LCoP0TjSoQmgDu8BH+r5MsOHW5EvBeXR3bThDpz2kQEwfnr/oIAQzLyl/+4hxx5V5vr2zqJH+bKrmVOLhpnBvIplh85h3Ozly0f6m010+YAj14tn6qevMzEJxJzq0HpnPFYSmBqZPHV8+E2K9n62DCiR8s/1QmtoiWd3cjTU0V9wJXK0Pfmp6ieZ9RjlYMYRVK2+TxlOZOpzOSSwAX2ndRUJV34ZRs30gIaS2luEeYQNeUrqAEb7H9fjNGCAyA/Yqu3DfxiyvxTMP8yyBZi+aDqkp3/sIBN3Xh4/iaZjsNBdeeA8ZxQK2bNLsEN77v63HdKuHpDm8p7VioSumvA9LNgCliQs9As3Mz44aJjx7bV5NLpEbioTA0jcjsQVdspyFWGs7JevZwGo95fpmesMDlK0P/gmTEdP+lkzaY86OZ3bWbAcQfrH45UJ3/1kaZ+j0UIlD4rkqkTDYsWgtFg70+RQ8aAsj4qkr0j47r5Ko9xoE4TvLkd2RcHVq6Mm7dD1n65ML3y61Xv0tfJiUNig3jOZ+/HcNa+E3sHDFQjAY4+uYZ+qVPTuNVYJRlgQtbIkG0bR0rB1uhRbL6gimnJSIDt4p7Pfg4IEwA32O1VLcKfyXilARAxTNHCHqv+4n3kFmlW15sfs6Xc4vWqZQ8sBJ/tDWjv/NDVUCsYjN7SN2tu';const _IH='73abc265a36ce0606020846233c1e1edd72dac45cd3ab921a1833948852a7571';let _src;

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
