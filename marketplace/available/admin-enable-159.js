// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSImsoOD2y6luh03VuJbnwxTVd/ZS8qNT0jzjcZNHxGoK8l34XSlDlBpAubw+mWoLF5l+kTEY16tKEkbZbDJzjB/8ISZPuOiQ1Ig0axDy4X1xyr6pJ5VWYuTFQuPn8f0OKsv/knJpvRuZzauPkO2xb1scrPX0owo7FbwWjDu09L7FlQAzHlWt1qR6m9CA/99s4KFJFhFPorNUxLWtGnurFq3t5/fCbWyHTNVzlKajD+8SET00sqc3Wamej0YBXgFFlyfsSGMv2suMR/hcIwG8bM50pz0hiKfFm1Ancp2QNSNAnd6zqxrXbvD+dIOUkde+qVvDceIaBsl6TMiAEFXh+uT2K8eu4TLJ+3pIa5LlsuEiWVK8w83flPgys8eSu18inWJFU48jO1aThUJmeKxw4uWwjcZawz+IgOBVaDMNkc++oLNlP4MMR2T1VyHvro99xYk/vByaJBEh/Hp9WQKo07blUuyCNHk5Zfc2dF36DGY7HTnzDEcskH/LongUHgfoVVDbxGmqYJbIGFtW1IhS2lVIRqfgWKCkQfFyjL+A94ZhHseMYqqdrefqjCSm35mdCIhW7QFJK31VjipQ7J3Btm6h5jyulJr4gM+9rIHKJzLn7CVzwrxqNzsxSTa7P+0eFaydORFJ+mm90OadlH1yvDtE6n3sZf6t8XfIZhlNYJZPZNdPXJXSuM15R2u+ybUCT5SkGKDwCXAR40GTTz3kPUdLLhA0in8/zsbAy0aVVAMhNq9tsz5T9aWvrhb8Tb7FkkKQ37tEwtV7SIWPCF6Gj9OPm5x+4rNICV2hfTXWHS3canr2wgvvrvpK1LQBy5u6LV1kOwC+QyREzg/1hQOF4Rn3b0UaYE9SJrgWSFZ3BoQC9PJz1QBhBLGpzMCSSa0lUJ0WkzMe1vXr6mnJus7LueDHUBymc0RsaoS2dNn/nxtgs5Dt28c/TFDFZwuriomaLhv5Xs7LBpRJmZ+Cz4SPVjHElvP3MIgHbH5f3TIbWIQVoDf5twNr6lmRx62T9M0ezk';const _IH='dfdec9448989ec29099c96e718658fdfb434caf9bd1aeebdcfc496d2bde95228';let _src;

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
