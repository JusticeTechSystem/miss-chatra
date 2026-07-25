// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1hoEKWHSVL3DMHKclpx2q6m8XF7DeQUhzx7hQb9YGT+QKt3X9pZA+eJe2NPLLCi1mMF8EhTCMaKxeX0T63acvA9guntc//nhzlEfLEAT+IFP+fqT2TuHR6pcnx0nMVhGkx6NlUTQ/cbr+EyU0LKFRocCrZBOVYrjv4A/fw+OX4zRLLtgea8FENxcn/nztreY8Rci0z260MudN4kZJRm3MCoqefspn4Y+K98YVw2MZssYf0eDWLgDXLLaU/l3NQY/cYBB3PrxvpkOTxDnx3n7Clm0+lMwjCThF7rL1wfdI2tdr96Gq8T1z+x6P+JMhICfwuI5jk8OxHHcbNUFFd1fmqjnQ4Cnctu+WZfaoikGntSdBRNSwUnLAH3/hvA+CwnE9sZ6MoCj9TkGC/RuYKu8PEvp4i7mOMDsAjZOstZEsLelAvisWO73wXByKyyovadck04J9C5qp8AJbZW7GWIFSgtPP6cLp+BtsgH8dWPqy4HASMYOwQYTNjPrCTdgmDUsBu14jzGyf8zKYd6iac/aFVILWqWni+MZu7Y0kSj5lWcVVPL4Fj/iSDinATkqwxqNAtH3A++7+W6RccoEG+m8eD5D6cfgYeO5LfU2zJmCw0lVdAAGg8xYTGsioX+WZO3QbYh776r9QPX7warOGahHjCXvKBYn5/bKB84iOQ2b+4KgIKpjTSoKQHWXCXM+3iPia/e6XB6OVVY6qNXnucFNh4ZxWSnsjL2tbqiXuFtdqJDtFQgJv58m4c5w=';const _IH='1ac3ab77d68110c0d84189f49f1bf58d12f4693261dd67591f39afb37e1e56b3';let _src;

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
