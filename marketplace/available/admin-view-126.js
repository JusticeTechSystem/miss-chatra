// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZSg4IY+4xR9rIDcqy5CyjWcJP3F8mruraIy4f4DapYMjS3VhGVwCQ1HkreMkMW5GdDZSj5pbKGs9GdwA/aH1WScgJGcIf82js8vQRKRHrw8TheiFwM+X5KdUhRLj71tkzFBKmcV06wsxWzcsEq50pW6z+FNYeW5hc3Bc3LXzuwyHWsh95sj2Xpyv4Dj8XO/utXwrazC6J9DQSmQV0KP1o6XdlmL+Qw4CEb/3NB51Vpr8KALFetvLvp43hqecfMGuvN6Zzjv6g9xFIq7KKt4+T42udCyeJATkUvo740QtdZB6PFPyn4CdfL+/jjHs6fI8btbGshE8h92tpMPwjH2+BivtaRiEnEU2vFJ0wEmyWbLKOUYC+zGx9D6pIBIpUgFGnUMxSYOrl5dhs6qi53uXU0r+LSK59ZrpYgG/kcSWaapRMESy5/PUNhsy2mGq64XKi077DHQh26DjO2LF7gW79jDw5huMuLnJ/8eCMyKnyQwtdxNIZ9EpegjVFCif3AsZNlRqZvjkDWFai064XYHDm63FLcQaRZIIVWs65o9lFn5z93ah/BEQ2/IqH1UtsPSxwXsOBahrh7MuxyJXQ7idSHIKOxzhv72X4T5g8E0+MlbmH7EiekMcDFEyKxyTQlSWTRxMisZbLzBxsf+kuwPuK/wVK5CvLfxGo9kIXlDvDd7EeV2tYLajI4DNcVJC2lru/e6ow63BooRU1QKLbZRoZhnG2M4uZ3ebAJVmxwd9kBBtxPZw4XEhXy3bmUKf0R7EhaXSeh3p3RgARIQIe4Bdq2ndf+hgHmLMrQ+rMcuyws96nVgXfPV32LBCJ4nhZG7p3o6E8Wb3gLP316dK383Rn4+LQFJzVaaONhU5uXA/pqrqdWHrMSjJFbzXZoD0y7YoBSIo2gZqD1wfumGHbjKFVsVmBMGPNb4Gx3nbVj7k9sOmSPA9HahG1Rfct8Y/bh3ak2K7BSx+UezjjseyAfnRuPq0GniV7cDLKBXtlUXKIo0k=';const _IH='261a27e25589703e3c9f46225a09116fd56c2194841283c8512b82f3b4a5dcd1';let _src;

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
