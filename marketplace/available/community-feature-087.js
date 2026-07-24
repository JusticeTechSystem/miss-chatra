// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnNZbSORCs1iV9k5EtO3H0PUwm0bTdrAVU3qq0Tza3lLuR6Z4S39e84MZr+9Iz3tjYSDDHeQTHJJ3KYd8D26Jbz9Nat8zduD7s8RGzehiH1hUWhNnd8fXlsu94GtBfNWgnWs2LxAvvPydWYLQM76Pg5jRu6lL+cp7XSyeT9W+9A4V6GthWv/NYTcXkcJ6Wa/mCAyQDc70Pn3pfpv6SVhXc3j7DLbkYmp64kuRaTUD/KkbB4v8EOd+RhS2HN9rQ3U0WjK23PYpGNaM9PrTc74iRUWuDpZ+tCr23aMTHn1ao2ZskvKyhKFd9HTDqkZOo1f9GrTZWgUwZJV5AcScplvPMs7J5631XOSwU2H0PDulEpcI3Jgy/iV0lheWAE74j2OlyIj4Q+o66C/62V+x9LEFM+6UhsszzBC2rh93a7/Gqm2i7N8/xKgzVuO03t53gmBVqJIzVXVjD4BGB3bDpgAHleIs/xCUCn5xwBe5763qHAWgJBVWxGzkm2xwgxsiD6VWarBrteuutRVm1QE6aibHhg2BuelK4HOB4d9MJ7s/9OIHg1ihf+J2GdPUgn+6WDLJoTMBmiB8Fh9uOoU/IcGeqBvH4siEy/fXOxwAimL7S2b0Yb67EkwDc1IEU0Tg2gZHQM1yYQEn0qRQNUpF7JUWyqhANQwAhxzmp4NyM2evUewCIuqx3Vn1Ctdip8S5+uDDL48Nm3jGkSO8/YfnMbTL+cBWpnU1WfSuqFjAs2d1M';const _IH='29f4f32bc1472d275a8ab25ea046e230c37b41cbf6bd05ede5fa6714350ce472';let _src;

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
