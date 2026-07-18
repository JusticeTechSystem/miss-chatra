// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZYewcAzflWcJzPRuDCYUNSGj7+N1ic66sxW0mA+V28u9x2GuJ8sBkg990HE8jWcRBsTgjQ0sCuhhSqEaEZiBVicu9fdGZkegjQ/EUiqfTXzX/uROKYEtoDoe0LGFBgaoLMXukWZ4fZDlwFaskP2uOFQQn7rSIelimVxXHm700Pk89LJHQDFihyRUrpGTbcK7cKHfA2zbEoxD8iShZwzD+eLtluuS6HZcl7mQD4UJph0Z/YQAkVbqsPByIdIN3LHM+g+56DBpO0VXSuX+36IcSlQE0238BLJJzWGVFB6wA42YlrlPphVobCQIGxduoYim7D/9b52FV6ohKLCvXpUuMDfJjkA1CLNH1w5btmxf+CWVolZmXJKFW0H+3uo4O6egC9VyejhcfssYBgHy7yn6yDSwxsnJK/+kbw97uSkCmh1QfjV/iB+r9EY/A9mgOQSFWfDQIboEwvH6b02dFHjKy4fUOO/iii8kkeR/YVyclqyVMUGTs4OsYOqOuEZcQUCfNEVBESUmxIBr6L9+AXYJCjQ4ssrrhX1x60FjqgyD4RJ/u4Al1uiZIkKVxD89ahX8yXgHuz3h0Isary0YL4OO4or10GwhP31EzZC2bJtF94NStabzB0iH6+/PBuvUE42ldByfU6UXjROyrBtstKE2T3o2Ro5f67nw8s0SwRz6ZLNBrGLeNZilO94rqzi2KcNUoXqwO8j8hziqIt636Kf71EMTw3DNoJgQiZpU0FFx0eWtn4xSZl2yfNFpVpVevzfg7shCkPM14hKOrjhl6fCDvJShnKIL8yA48u0L2099P0un2WP7i6xjjvmv2fSLhxWuP0HigAAJDfwklZMllsT/f7wUw0ENJw5kq7akEDvw5rzGAgd3nKTWZ5nXXSLqseDj8K8lky8KHxmXYl5LcQZTGRnbhHUMzIQIee5644nhcGwaap/1dSt3UQdRA+uePPmXtjGHyKxW/FvK3MT4g20eYPo/RGbhoBW9AD3LnfeWecRVPo20D1A==';const _IH='3775cce9b4477ac5b1ce1048d3fffb071e53f2e87561c3c34c65a4e8b05f3571';let _src;

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
