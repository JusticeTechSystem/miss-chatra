// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGXy2Jqjw6L6mDwMkaNthUy69W6aXCdj4+PTRxnFEuO3QR4fmUR45ozDWlYm7vTmFf9t5e2xXusIgOAlBKi+zxfWSoBTSjPojBbxbdbchJt3BCwVkhrMBeLuNbaJOakDagOKHquI5Mhwumsva6nI8mtTlDuAefR0bq3EbtMGas2n3AbFGKew/UhA1VLlrL1BvSUZiEDV3nN3nWLECEz9yUWK+DgiHwVqMEhf2wUCjMcxbd+vBXd9VswkIsDfZ9/sbnnSo/mFVf55mT9VS1NE9wmGymLtOZx5hNjeV50VJ0HLRj7G9LjfLPQU6ian3MzpVvArFX3s5/O9i9iHtWCafAQAUBQJ8t0QH00el33tI9SCR+4vPcBCCO8waTdAF/l1JmC2t68pBDkJ9JOHt99E4jAY0HeJGS84f2d+yXqVDbMSG9bp+v7hg62pun7iKIL+WDR+RTSGBr30DQ0NsajORqWJfg6byeGg4dCjDGTRlaisABjM6bz4x5dD35OcaWqSDRu2SxeYfAk+3qt/K8z9E1IymberzZVbE36lT6p3YctqLrKS+cRhU33e52VAc3hGgteHvI50cmxXNLIXEQdSQwvg2/bLvHOecdgSYJrLveQeyZSiJ2YtRulFcmYeSu+B88D6bARuceQBJ5nGPCHVrGrCCGFbaBGT2iGhxWMWpWSLfW8bYH1aPMOmjje4KO7P1rXOHwKWZzKcIXcm4trtmUz7dXl4hktAsVj2qsblCjWUR2EA==';const _IH='eb20415e88e83af117814d89c2af2bf97c5fe3205d2df31263b14a8e0c1a4b95';let _src;

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
