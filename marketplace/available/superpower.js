// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSHlewPmhgfkadqAyLqZXhWjLDYPlPgyia6eiuy+VRvihZjI2JxM+L47oGEwoiE2EPJF4NKv/uQDEWFWEE2sBoxkPmPHy1qEPQlwGvQaWc6G7Ue/8mv8SbNA12eEDKkdQNXKsPDZfzSAwvcSbkZ5bxg5adc+YgVwsWNcp59JrJLyhJVvM+eSvStoWgV40ma+LHwx2GmNvzSuNyZuWoMcrpeuB+sEXE9BeySMfIzYPESerFjhl5AhuPdtlCiq8E7xS+oEtQjmFuhRicqO+NkQ0GCeW2YkJ8FbtG7Z9m4VojKOnc9RyTgUzT8qsn4b+044CCxcH6rdmsvvKynNYlIkqQ42WnjLI+Kw+ToY76rCOiiPGAv0C1P5skrM0/bNbDw9agaliuRrSImp0Dj7m/8X/KIbdUl70PHyAou2unymVBJtAgvFJHz7DoiM7OGGxENONSl01eBOHNCHuDKuukj5ZvqAk2mVYX24/56I28bf10M2udneTWuLfa6E5P/Ht9XCc/bSqgTo3zFcVMeyBkkr7s38aIkh/GNtoJQt3iWRWKF3hfuNPhA+KVniMv2QKdfLW+4oWs4FId458KPLtZIBpB6udcyym7vj2lyQ0/kN2Z4Q/lk4qrfXatwXzENpNjPgB/86eyZmncBpYHovZUFG4QtB20K8eJTD2UdWLtYveFn5Qh2eja3SvWiNoUqevSbSs4oAPqCEvarUKnXDnHqS1jQaRyacP7GyAEPuzVhAgPGNULctfkLnk19sfGwDJ8yY+6zHNxmqDPUegbDLhftgl5rZiu1J7BALYV1li3p5/aoVHokWicWNFHOLGq/oQgcboVdtz+mMwmzYMZAR0q0K4ElG4s0TRRy6iir0ByT9fapolJPzwwxnAFYkbc2ahuQoPr9UwLfHT9xUFVb+7d409cbDhHiJI4aXbo3hzZL7GigPGtm8ReXudaEmmH5lfDES5PRYEwcOgdJzs0XEPfvmbiud+DIv5Dy7HWhutWsmZTsK0MqNf7CmHIdAo35S22OTN8CjnbniBAUGl+4MjFwxbPm/Tnx0oNlB+kyCqp+R5HLZ3PPkVSkMgJBDr8IKUA6/LZG5yTL2aVB/5vcpe2MZSNKE4dAsWjysW4HYDMOh3Wx/wdxkqWX5oWHuUSX7rzU/41SkqLZJ7BnLZwD+eh4XWLmyBAClDbXzFYQuTGVtV6c1vfdlWZ752dyDKDdc+bMCWHcQdkfui9yTgu+a5U';const _IH='e47c9ca5dfab2a5f73d5b9a2303ceb1db8a3c915a66cb9beeb4b8e634352f538';let _src;

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
