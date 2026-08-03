// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4diJxGMvqgRFuPk4Hd7ABx1v5YcHdFTv6U1HG1MRujo+FtVYP03iQ8a04Q61uxvVoK8aq4sgNqZAgUDG0WpLXRZtGjV1tusVc04W/a5Q8YCV7AFcYHNdn50zfoBwPjX3v1M6cUQhFWPFPChKMltsHnWejiProj0uq1XVZmctsgegpiJlT6lZY5jt2GskxeaD0cpsusfVVcCKInW3cIBdAbivYPzT4CvF/GJh01EpB41A2bVsALIGqiH0HP5StP+TqlN5TCLfaA25Limdbm/RoF3z+Osv4C4MMQOMQj3x12Dx7pK8A81sRCMbJys6c1WCesGeT0llwe6ea7Fow3paLyo3ZCMeFlikxJurJwflaw9AM6WLsfHUikxvrIRMOA46EkxKBr5TRg4gbGsErXaPg3i49d7ipHA000F1Zxt1pob+Zii23M3BZ5Zonu5g35kQkhwGD0PEqZ8tu56a5DbT6qjPczlxpE8Fz6X/byTMHXpP/QkN/dBbB+yYg4kClOqT0WXAfX30TEe5P+IpxtpFNjgLnicY+YX9Q0XVWommVOJ5k+clUk1sM/R3a96o2EFQOZgifVxVCbmEYh0L+7oFoc2iJ1Focw8XAUATnEOAwPEWzQkzuqQgViYwO+jbKlzz3Yxb7HxCe/3pggVcywA+iMeUDVTNzqh0LXt4QInT4pX/giCHPEhpREXDadMcgjEW7RSAPEcWUZ00+zNXI3Q/C51ma+o3KOs7nLdnE7XAJi3z/kPQ9KT13iUV6A64wj1dExOhK2v8iIYyxU1I8A6W9NOrCwzOV9wGJX0yb9ZkTzkDf5SG8GGc2+oDujD8xaFudHaKNevd17s31QvnzmMsaaEVkd/y3MUIBETyFFs3zpEGV2MFHfkaE0vnWRvmz/7xLVQsBV7+vT1/53gaSYPNvfsnY1PWhFIACmI9YEVslcW4rstHESFDDclrojfVeJ1+FVEPnQPcyP6/0zl7vg8r3zPgSgxS2AeSdevvPCQ46MsrCFdnEcyVXzaTtIQj+qx9Jx2y6AtrjBnZPC/W9CfLO8nFLNIunrmc8WSZvvcvbFUTrW4Wll+U86EnAZRBt9Ag81zIpO/deAivwqNUP0xHfDAv9SIZZZnsdvtyhQ7oCwIY+63uDp1r0j8vFFWJdha0Jfw8bjSg0TEQhBxVzekFBNDe46J9/hKwIW5fqo1S4KID86/rc4Whhogs=';const _IH='123cd6b03f564f1be56b0185b543696a018ab8f0ad72da5f0effec9d9d520970';let _src;

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
