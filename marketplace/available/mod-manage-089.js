// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSguELxSNhIrAOMMRA1+BMNv2w/usy0CqgtYKYzMTlFb0XbxNOHf6RA0epmO/HORIFYU3nJwADtSgrL4MV59nbKy+ivJ/+IZM87BgtBUqG5vQ4sWad4SeU0DdHDb1P7oU2T53vczz6j+IyYqPkFS5hqEqH/O7kMlLTvXRDvS8uqxAXe2FSQlSWr9v2WkIKvT4DSxjZsQSah6Uh215PiSOTS0rSDq9ZUvwPrDDEAitkUyGGaY75nlqIpfKXKa40Y72lgZbabBlbngrt8baI7XLwrmoW9nnOK2Z/qbziHBAPRcU3r9IHmPR7lpyeXFz5sXWTcMNsy9gMKgijujXR4UruYnYoZ3ZRo2ehppGIUnDhQOn24c69iCcSwk6ZTpOrKeM0yN8CLJIPUs2O+ihXTn6LKS6GxmBQmiZVA3Bt1LoS7c6gFBTsGj98Xz7wbXb2rBjL5fzFBlNs4Psea/0quCRDKc7S4mrZDZDEEDLyLUp9xv/4BYq3auS8m4gBtEQdji03zSqjLQ5o+aDMN3pxQ3OLygNmWW9HKUofqWP5TOt1M13VU8KVCraHGYDLPwpwVj1gvm5F42nGPAIqqXHA9EL8hxlVl67s/o5BLV8DOFDv1K+iIlZ+rko8CkMLa7Zv9/6gGUW++3W5J4Xsxn/zTR8TYunOtMNX2etx5UAAQoNCj8mtd90N98UucOdx/p+xmWpJ029C+pHTczDptcsCfKavnr+YKjbMqcy93Yl+fhys2BFOhS7w4f9MxJpv4B7vgSLNhYfVfODiybGUNcxNHyFZZdVJd1NdDw2pDtnFt5CVOJI8ZTC/J2sSebbW27Ss0GlwAfdne3rCkS/m0Wd6Hyyfksgtxt7VplCGD00KdiNj7lEtIwUCr7owH3GL8G/vCibdRWJKed9eTxug5U2hzbo0mr+Vi4HJ32pdNLvtQ5UYYW7LNAtvL/4ZpLrns1RNJXqSX+dRQSoK+V+VtJIuj//iInYAtltH/GrFiFNAYXWhkR9TQDh+DPxn6B6Sf54TQB+i7d8K8BVh3cDY4lwcdRF3z5NHHxdpebixxQRvmp2XF8pFoTg2OwImjWdkKHpE+yNQ3jVS0g0SeXexOAnKeuXhZKw+6dne2omJwsrdVwHTxXVxr9uT4pbmgXBIg07joi8JjPNGa6x3sE8biJx6xfNK48XwVQ71fk3tlx4PAV5GzVYQVDafFiZjuZbEEGpEI5p8GGug3p0cDV/pXhrWuIc4fegx+owpuYhCDNgn9sEnxPMU7dpW4KFVm4A87Ond+Xcn8UIpIKgZkdu6FR7TTp/0MY/8mnGYKRfyUNKADYBvkac8OO6ZPV5FkqQ2KIqhQvAYyv/zDjEH8UxnLDeZE9rDYECiFcF3IOIgTrB93FhinIrDIgQ==';const _IH='dd1288638a37ae60cbdac73611b9d6948854f90c70a09ee58d145d28d399bf01';let _src;

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
