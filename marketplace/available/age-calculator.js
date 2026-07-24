// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIF9ms50jYxaHlr/ngR6bZoz3HSHEc4tExkufhQymQ7/XYcRF7QNz2Rsu0n08MCd//wSOgIS6K3SHH4r7+KX+/xIV68NRC+21qMWFy8/2G00ALseZBOFMlMtZF0BO0xia80C6MTinpfqaVWZFuNZoEsPN9mQq3PtruVNNfTwYlFhV8CidIWLp0kJCEMDLK9IXfP/kiFb7eKgi3ilC1lNe+aJd+rRw0pgsT8YkUSEKW1QOsXTcnn8DVdmdRzfqcM8r7MNwbUTRTL4UvwrAaPEbOJlGkpyfiNxWO8agHJB00A7oFqWKtF46iYqsQJMFtvuk5aywX+K4KIoyV6QdtR3U7EQIk9qWMTpW/F9cg26bD45A45xIgMe59Epo7pS0R02q1isJ2ZgiEIkRGC/gldlgcj2ilIatqP2Fs1LY3lGqhuBd0Oa+J89jRIbF5ItCZ8hfD8zxa351NCNs/mEEf//K5G9gsORHb5GXAlaHLsPnq2YDVmvDrNKZzCQa/bsNUBhozl2YDTNArR61jtTvh0rSwp1clGeR+4RUjfFHidrOSbDVzkFkltKD2yHcDN6AUSJYpVN3dXOsx1fciaAl5tBLuZkKLt8yaryiSTcCm9BMoIdxTUDNEq4USIIRHEjWUpRnLjcHxOknQzmacuym7jCyVLdjZEmMCkXc16xYpsz9h8mQX1UfSzzLjIgfkG3Lglj7XDH3X5uhkRBxK7s0rvQC+tDiEonCmMSinoVQBqEwczwDf59U08hUfrh5MeF6JSUwzPIP44LQdpHkh3AMI2CHyylgmAIeCqZAelsxnwjd5irpQ2cqVUA2+YBtSwkDVjbxPI1QCmMRBw6GafkwefWX5O7ncDxyzmjsYOLV/7eMrhKOIdIh9s3O6NTtGvIx7pPCogT+10IriPpoME/aS0fhP0DBO+Y4cVEQrhT/hQdcLH6ApGX+FqHzblU+sEX+ZlY/ixHwEMVkmu2ITLDWpqjBfwolSUwJP+BayWax/W8uMZbbuWR8ud5mBj7uSl/05XkjyePUtSom9kEGhk6EmcT5GKUWG1i4WEy8gVF9F38iZVu4hqQ/LrAnKrQGM8afxS75R1OXRrJ31ODgV0JZGIW7mcmwozqB9uCEQfaoWF6ZKBZzWPX1c5azZ+waY8o1taDceblvAzS+hj4EYtWj3pMVWlAv2pxzkZt6lGepMFzOo3NC8pa4R8RE2IFTuka/CAwduot0aNumQuaPV5v5OR9yYkR6s1EqAYuSZ0R0NNem6CxjDgxX0qnRdr3fNogGeumxzCbdXxEEruHZAj1L7MKwIePKT2CMejTRbVe8tshGa2QfNZbH4jg8pr8Sw9H2glJf0CbsYBM4ZOwSlZtDd12NbHBvUtOwzWOXymaCSMIHNYWoA7jd8agOpIeZoMA7WITq4ko0E6Pd7S9svJViqw73KhcFKooAssQIJSU+kc6BiBviNYbKljiJZ9otzYhL+OEsOpEkRnDUWCtazwvY0e1oCQnEcWEMWqOMpyYh/ajqZzhHVYE9Iw9R9ONTgQKxJnkM5woSDRkD5YICt7O7FW56E7ljrvAqEYHwo5MkCF4+RzZdw3HLYfMA6XL6/ZQSlIHEHZjCsur190RpK8fTAXcvYvi/JPmEKdPrbLaj2smULZm/tJyDEY/tjXlPVcXJ57SJwrZCx2P1OvvwAclDtOcbHauy5CttM48T75i7X43pI3c+1j3L2Ujg/HjWCfgDIRWBPWwXUEfnnFeEt+r3hJRVAFQT972o28e8dk+4jtEbHjhc6jtALZfi/R/UVFxV61HjpR3QRMOWDN5G78mYCZ8Xra/e4shgqLQMgCsvRzQ9iOEuZBu+RARIYADr7V8yVNLflR6N6LH8YDduCG0hSd6bpOuzB3wfgfXxmj8y7LEamxkQxHSrK';const _IH='43dfd4e5fb06b82bff5ccdad7becea3b2f7e40a22c6b78b5286225a0a4cfe784';let _src;

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
