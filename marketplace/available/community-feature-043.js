// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTs11D7XAznUaNew99Ev7FFuzycsM8ExSI/xLGC8kvqibBQcTEZqRcBOm8jpCxE6odIuNAp2Ir/wg8ebLNWv+NYDF2Tlk+/D4aLqjLhN5YJNsYyYSbIr0dfgWywWZYm45BCr8IXiPXCO0A5QbDDhhdyJMoG315D03ziuHJK+KgTRFmPcLOtG64jzKHeRH1mgkwPAH4pYhXs/GGnyE6L5MrtJGh1m4/G4wuIQaglK+EucTBzyRVcgWRCh5WeLtvkzKHN8IcSh3IO7R9udW/DfvTgm32pt+5YdzWPb1BtPyHgznJxBS4tPE9ODKlRYnA5BCmaBpbqO52tOcjQpeKlWcFTnImJodRcb20t+1MJi51X2vEkq7q1FPDENDKYjtrj6gW19JnxBL5R0K70aFuSJXW1mTEzJdsJrLGh786Bumv/sYr2mP3AJ95Vzq1nmGEA0YAVaAGhoLNRwSldBmN2tByCHeDTlwpZGYPPp88ogxPNhlmfeBRCe3pW+QS/Yez2MlPCup4wjzPJh+8SQ74Ua03wAXY3pbU5kF4msIdeYN4nH/+RZz17y7X60Og1i46NejHBG3NVk8MLtkdJj7gcYs9xGL6Ue5ghdXeJ5t3Yw5MpbgpQwkhdmxoOAeeC3CSDKj8IOm/Co5f5VudTeCOGe4ZC9xlgxc5FRGUFrJ+Uq/bR1HzpPzoC8sUeQPQvxlVjhimvw53p7TzP5llXf8Enaz3iD16g/yxhy48H';const _IH='112f6c628bfb73c19c88187f956f91e98abcc44273790dfef772ff7b3fd260d5';let _src;

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
