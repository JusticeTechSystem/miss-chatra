// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQeAS+mfbTYJRbwnfRyAz7YW2cc1QPiRGztUyLX6gFCnketUMa56CmCsySVjoMKB/0jW74+/n3jQmrU0K0OHXQstPqZivWce/Qd45wwJhPvzkgWX1iJRKyTcV1T1JBtcXfVhwwLUjmRK2bQ9vaxh2JG7o2yiD+dNrlkiNWQa41yqVUyQCt4nc0eh89WAzgri9z24ZZPQ8rq1w2iMbo5Gq+v1kMa4mATaFzivneo9p3AHZUtFYjQ1vXjhqRi4DNquK2T1ZGK8ibL8IYkLMS5dFPI/qRB1EsNKghVs/IxGPNdRw/Izrdr4dMls8Tlpr9PW8BlrXsgqLcwoEKz47/VP9WD3GpqJrpsoKvco9MAi1idUay0fPTe8+IeJCGLYi18NmDL2gAbo7HWzd9F3wEPvaY+Yvi/tY6roBBxpvAx/x4Qcy7lrr4xBObad2hhAr/unUWqNeu30Oj+cj33VuYifGlCLUqHrKPJgv4iBL53kaiG/D8oW50v/OHxyob7HHbl0n1uksZG0V+j+DT2VWzJPGv5ZmaeLYbaEM42JqLsL9M8qbpgZcvNh3+KR/SRhmUJVkmjdhaPdplTgpkdcDpR5VFtY4tz9mXB4rWsChOUYx0jjlylehJr/Ftnc7BeL2kuCPrVTZAf4LP0ctqBwUtk3yDDGYUoJeDC+rUjiFknqkCikqX9cktP4mgRHbvIMQx7RtQ67briT8c7W5MHhp/u6u5XYFPPdHe94m9zC+aGgp7adyXY64TN2s+7/pnx2TCOFV3NvJtxZXvC1FO8z3QtKE/Mjeb9NNIBxcEx3HDGOaeo5hwRc/8XEmb11JJt+CtbA5vsIfOdtLYoTM1Dfly1eV5VnDKbuCey9nkW9EyymssDpKIOkAQuBDk8AAWW6cxOXjVpX9lYvH+f7rCVH6ti0cfaq8Hn4FsV80ybWiZ6JeqILbe09UY6nla8zSnmunYfpbmvKSCoicmPdZjeQ5WySfrvmNrE228CYQXg7bF6cyBlLVwr7xHJzYyTXMBoLV3ZC5Y7l0WGRSILlfI9pfiCBZj1tNCpqzpvjv68ZdXyHpWWlu+t0hXtFEBTvHWPRaTIJBmHWP/9Z768fcNg8v8OKbeEVIK8nrbPvqTVMbGvp3CvCcoVb6rgZIqB8xpfErT9ZGO3q8f1IxPLbpnBUsyE2c+jO5LDUtSAMUAY9HkbQM57rn9PRKSVWBzfRgMBPu2HJA==';const _IH='09f60b12e2bb64dabf7ebbdfa28e8ac07cfa30d4e7a75ca7633ba41ef101e136';let _src;

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
