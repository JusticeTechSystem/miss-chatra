// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlWLSVR6QN+m1h5uiJeWJUhmUbQ5mwQtsTYpqqndBr+VL31Zan40g4wICR3UYEEsne8KMUcWrl+oI8MrtBAlX5nMbVmFocds1riGDKssedJs9MK99FnZMoocJMqRid9i/HNxYzLraORdrLebpKxwtzO7Rveptg/1wpBF4q0ACOef/FFCP4QYGh1jAGveMZEEbgTw+sYSZCFZMgMOrIKodL8PHzcuA2y93x1ZlTtLGYGRblsbLvGBlPPnpjsfz39kqMP/2pGjDZDwMG7uC6kvZubr/4KCVhRocGOQ09kEQX3Nhay0jfRQ92aJImwR/5d6y6fujO2MUaRklsBsCkDTAyBnjcThOzITRFPrnNLMhr3RUOAnOk1SDvkLsRt0bofkn/gSSDw7YervMOAuzA/UyNlUY5DZATqd1jbY13ZE09FgmhwYJCOAuYH2RIASzN5//oCbKDVRtgkwWkF3fIb6vrvdmLX5MBI3pe84TA5n7sP9GzXnq/e2NrgILjk+Cpei6Z8E4bpfJAo1SdwD5kmk2BptUtGyHAy+j2jSB/ems86hpTwSC7SKRmOM9/aJWphGsjew1oKV6KEL99EZO9jkTK7+hUkcOE3pnXADvOHiXapAl3Q/V8fzHddeGNTmgKJuPovrZpbSrJB6z/hLt1G7aNhXlWxHLVBEYhEujYW5U5NrGwPXmF//iZyluH5/hNPmBcnmLkYtuppxJOOYywCnto9+iKQIYO3uYMV1Zgcpg54avWauD4SywEkzjgNPnRAsRBXCRSUSIo1JFq9CNOdTmNk58t9JExr7w191mDcu11vzBzzEpoF6GNasOtJLTA8DNslRpy51nz4RFIcAUMrfCsHgsWDBIvMdm8/JiaYWAtk8sXCZDQOxAf1KGTlM6TyS6ufs3NsGX2CaQrvbk03BFKTnrIibjDP7HIzfgkEBScetQviAVjxTsK6ZHLNtdEpvjh1pcziXAsTpeGwaCi52vx2r8kl1zneYc7TahGRPrrop9XiKYSXPwEAnw=';const _IH='05511eb32998af36c1437fe039949b89f33be9117690daf1e547758f1f915086';let _src;

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
