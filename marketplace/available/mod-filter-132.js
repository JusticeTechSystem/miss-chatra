// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIDspnVsrBKJm+vh0pAAte18X5EyK3+Zyxqc7CmCjpiibtNoPrB0/EtmR3cA/kMultIKj8y5oJfaWYB2AjSWRYrB50IremqjY6dDiCkD+HAaNJNHUfqStgZGxNBrhxbBJlgLjB7grplcgvNka83q21lBXYU77gKuqzy0n4cRHROKpoxvflESknaHsygeToqq/gJMezjd5fo8nLsY4XY464mqJn/hAPRyySlEnn3r/i9mZAnStYIzLMCZUTiysEBf4ug2l6MB5kwW9xS50aVuCmDRifxYdxGxx/Rq3a2k1LjC1hrzU3f39yDP7xpb7/cHRoSiH8Y0/SkiZiwjt7sVDLmAmxeh5OzTeOHjC31guq3VImKGrTyhkoI5a58zdoQINTVc/Bri0NFSktl+wgX+LBRDX+zs+qWik7IiHRRohMcJo3Rnp1FTqtX6wVNezi/Gpiz5jBt7wlsfLovu88CFYw2ISiXAkbWKnhG5nOb/LqnzyU6BxmOGLmq+0nG4FWYOXptLsPlFKDKL6GvvGJBkMDeoP57WDemv8XRj9FnobPQei16yDPukH7vFv+ObEUbjyf0/zswdfx3Anw9iRAtTC2ohQCXasiRA5Uoq6FhBQjl74Q1xBXZ24bWkKi3H2pxJwTKHNDYzfiJvPJ8qsgmekdvXMZyTD+rIFAxg4nZ6vVHNv574NCI7L1KB7DtAhlYX+9xcYnTpPLkrcddz/Us0BBbIHy8s5cgjfvdNI8CPZ00M+VM6i88Z58AgOKFS3GKQ0twuJral+n1hOWoH190NHOdmspCIdMvROTxokbJC+IomTXuRRd1Ov0S5KVYVU9oqbJ8E2+uedeUNX2I3p5SjNtZAzBa4rIORZw7Ed+/CDiBGbQcqdUAMOZ/ipqpD57n+jTSJzCN8LWL/UySXpZHFenapM9NibNtoNF6TAmXERqyxyFtdzcgq5R4C2DZDCHRv4bUR+22M0zLTh5rEuEl5/K+QDEP6K+PSND4+sQmAfAuyE5pfy7HHLL+PZKF9zEo1d85XPS4YEi7SWgL7H3YUsdslam2syA/bxHUUcyEQpDApOebEsUbpBeTXe/rUbB6i7VI5S7rFq7+DIvqxj9cd0m7pNi9ksJlFDA7wqFTkJUxN6bHhKVWfHys+j9tE8urJrVFYKclMvFQJVGnxxuVAFXrwyilAiLS8mb0Hb1MeKEhmMwklUWzJZlN4SLNm9Vk2NByjn0CqRYER+or3chMa9qJeonhmpjxKnT+mFcWGffu728VUfX86PgkRBZT1wQzz9jd1dUHeGeDlvvUa9gb3vvGim5q6jZnCl9L/rg6gvxH39hKgqUV90SnJ3SD6+X1mFdGJJVV4kIvbfpsZ2X40s9Wg0etl/7TQWgCY8svpi0Zianns6rH9Vj';const _IH='6631daaaf754d93be6fb5fb50207dcd5bcd86c544c223faeac5fd62ae3f06432';let _src;

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
