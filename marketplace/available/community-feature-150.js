// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsiws1E89HFhkKzoSafYEWV3s1xGB7JUP2Z5HqoJEZijsPsVouD++MzfW81k/t0YZaHU0Efge2m8GhWY1kNYxMWPdRmJX4+omjdEF0Q1XPsKTEb4AMk8bicyFPyScZSYs6LPeKrtE9mNSxYF+brWhDwZo6nJMnEr9YxhzbpF6Vh2MG36/XJF1MHs8jsPHXph4CNiBoaOKT0Tpx/Uz5B4sR5kuTepZLI8QTrME5Osq6uGbgVyvyLWkwAFQIUn79EDkQETexJPA2MEX7rrgnf0/vror3jw5khhRUS/UnCt8b7bxbKu438AmSsupt3K+FhbcGaR4JCy8QKvK7XuPSeAURRnyX5Tn2NZ3a6va8uVMKRwJBnEn0kaQIrJCJXe2lOryUaTMiDYwZPBZCv/Q3CD2Dfc5d5j6Zo2/0b6b95ejALVOEMO2PbaaGMP1Ikz13PoHYdZBS3n9Vx7IpTziAhadQ6DAOTqaNCxL8gomTwvtR6d2yN29DDe9MqOUJm+d5RshXd96/MiZvB6ZlMH73xZWiaH9cIqD8CvqI6IpHmpaGf+uDOzSLAF6h9kOcvrrsnv/DBqwbDEw81QfihzOK1XRbiv+Tg+Kecd7yIgBkAcgvpLrNhDo8wh02ugIizVH5vvAyfz96Pi8FMgarclZ5SZBZzyYWLgQXb0T7Wd7Sh4jlHffK8+1UJqpTDmgL8/zv/2JBHYKcos6hVI5m4nbHLEZ+Orvzb4rtBMV7U8CdxHbFDvb00uL84vjV5KY=';const _IH='d1d977d24f59aaf8692adfb7598e41b7979a95bd9ec8e2a57b9ac41604e3c47e';let _src;

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
