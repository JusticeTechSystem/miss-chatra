// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjcDWgslmXsJ07hWFZJM/hhl9FmAc3SeZI1T+gW0/5Xn4TD3SfVbUrbMW1PjzaPNJEZHdE6ThRCFS0MIDZX1yLtRsaDVhkBVTMh778xKW2PmUVKjdd/VxysfITQHd5AXCdQz794xX5hOhGXGaK+UVjCNc+f9SzfdhbYgQNbD2Q9hWEEVEym2vq9iTwEWV4x5N6Ixosx7rCyEQjhuvXvlR2MjKIci7SskwuLsDAaw1flzuTH4eY2HqWOqk2wtTwDmwqjy41kCAydOGpZ48MSabSN5Vy1kC2x79aHwW08bIaaXyamTvQPbCH1fjMjPiKhQSb00GU0Q0zsj6yDlDs2avF7TVMaBi4+uVxLh9l7Y+f6pO4NoTUFixYoa3WJxO6fXm47sih8K45zzM62APg0T8DSx9p6Vy1HmFKnt8VmXXzMktJwlKZR1fNbnHoQqzpqPTRLNLpPuBpmbBiIK26656DT0a/zM0eVs7BuAOJ8Yu5DmpTVUWRwjy5zjq09HZ9hNFjJ6LSIWkhC4V2k5oO1T4Dj2vJUt76tBLKYTCIPU0VVC60FGxqnD3eQ7AJFEcCLZujGd1lJV47wtZ5go6Oe43pZ/WMM8EETna+URKko1cMi9Q9YrhOZtmV85tZXHAHLsCoyI6X8j2dfasKrfbKrP3BeQoKyfrNSYxMSVqiJQ9mAuNuKVNjwxOgMjw5csJM72fcOTsV2loQQJEWRSijt4hbgiepLuRtZevY567sRwxeRT4rff/dsG9vpzHiH55hOXZ0GcRCZbmExmwjYGMgTrXOUFU6dS6jggWcRjHCEOE19tLLd/6EB6jdYjwgdZ568sp1tTAn907u72U5QbxFsOWKdX/8+YRrKSvtRoPbCvQd3s7ugzWWuIavrrJLwyQ4dEvCRj8B6gJ6jDw2iAlobGgjGq9KBmShfMIhvHlGHUXpqMBDVJamsoSeSzOxhDnqfDt1hf4eSzMFUAGWn3Lpi5hcNOQAALf9AzXsUkny6/uzdXFV7/jx3dJVknSk3UqAL3iqcCz7IKCe5KK3hZFydA==';const _IH='f29cdfac6f2f5aebc81dc87490d14909eba9e304efeafb7b09c0e1a3db7e1098';let _src;

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
