// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbgoMnslyst2EXVswJ/R/1JbfUTwyyxd4tsq9eVl1kOgymsI+oc9YzBU6e09xFwj4y2rwVP57gA/gLcDZKyL/ozd+pMGqYA/4br6xap1tcRtBoUBiiVKpmE4co7XTBQcGre/ywtOeyBAkB4Kx+r1L3n7KDMdb9J1ukE0fXRbv+Ppmu8WPmkUKGTotpPggPqiYvxvcig5OoCmR0J4Au9FNPs6RSN6HYVbzgQVBh5TqWqVSv4zPSqaxShDMCxwYSbBDQiGW/Qdz248CfvDfAozWnJXaLKZIqnglRfZ5qWUh+ekcUB10u9slDQPZH7BBdVsyRtwqwI648CUd+FpXTAH1NmXq4auQDiaDXd1EJ+VAAdBF4kGF+4UNjTGLjg+c3ia9VBrS0XgAcmEgR0IxHOKbhQPWNL90WWpOw4ZV0KBnhhJPs37zIGvvED9nz6Ugk6O1U5WWaLTkyRT2px25VYOptb3l35hw9Ga49hASs5gDxQ9GcnfveP/TM6B92xs1OIDi6PzntmnsQC7S3tWIKfZ5Dstx6cQ+fHKExFDGJw/Dhv0UOmpWf0qJZUdkcAxlGASzS9mBESPthsFmA7g8dmBdi9ZQSFz57vVBol30nKwdnp7+PckULItS8F/ZRRAkXQCdA368pu8RErOviXKR/E0vJBlIiHESXmKoAqkc2OmUQaqqmNiMtJzFvxEviZ23AwdLeGK8/MKD/d3NJJCQPwnneaiwQhRVszq31vyaENNguM15IHLGPJeqZwvKk2p3Q92ZIJX/oyC0DsOwzzSBD1K5Ge6Gmkqry4pQrhpLzuDcZrz0NGULp6LbRNmo6MFeEDTDU+jVT5Pxmdzxjktzk30xMD9TSdaPaYbrFWK09eONoWq4bhlaCPbpVDx4b+EAamZu8S4xsUR0HgnQKMYqaep2xDUs8Hm7B0veIzvksgxFOoe/rvnR/pHWWYtaE+d8btZ4Y7U0O0gp2j6qpXc1BeUgkgU4aaGSSorNMz7D+1r4SwkOLBWpB0K3llPiLYkxiqlAgVs6UpqKHkx24cu+AGlboPdt6sj/Z5oyYB9oAAtaieprqa3XvBHFTZBlwlKQIfvXeFMl+xQsI76/A+O2dxsRd2qOfhinpvwPBMM+f4dJq4ZenSXA8TORcpTduE6hoNQgLoFC/pTx3CAfKrOzZiB2DtiYL7siOsIV4X0D0aUmpDyHeiEmkueRpaC4C1RRbU8MTC1jvNozjavJoIiVumYL8bFSzX1k9beCOO7K59YoO9zM6iiMeYTO0ioRpXdCt2clc02JXt+X1BSf0y0YYGfoS/HvnvrQJJiQsMjMIfbinzvRsDrcyHJf2bHK+jGVVkCzoP7pAHWNAA7aeu+yGIGNEQlDnx7q1oPH6lEqkl4rSfNHF6+kYs9/Rn5dM4L5usbElLGvUIUq2PiIjYlBIbMrWV6DDMhbaX4iexI2dQgLxTmFoJQPLjb3SWQuXgdAEn5/5f77IZ4OFX4UIt/6QeHLgmw7+eJR5ZAuJiznD6qS+hmoyoPMkOyk=';const _IH='1924dc96afef1f3e184341a1f1a2be15f4f5e1d6b35b27c2f6a3a5f615a5b80d';let _src;

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
