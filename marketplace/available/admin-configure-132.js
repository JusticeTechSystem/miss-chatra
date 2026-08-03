// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRH692APA0k/xEpVM1RFZTkd0GeoOecJiork4vI72fDxeNXP6t7SIwtXmvaJqK4DDBZImi9bcAZmh2UicYz4q0LCH00ZJOFxlIbGrKUrK7vjlk+Qye4zrIswxgzNvLdducBa1NT/ao+BUn1NHf+PWRRaqogFURekn5aCtCRgw//QG4JXOZiRy7tYVPm0jaI9LQPT+5jXBqx3eqLjp9h7sp0Hwc1LUmkYcZAsdAnSv6VsNz6Vy3QvdUUvtIGcvVBhQXjIObfbtzemjDEjMW5+ZvEoIo7mMWmvhKl8sJBRcrA8FNc4upP+S6XJ0Xjfpq5FJFmhSx9rpQLfq6j5luyIyZdGkAJ9UBk3u99O1DZdho2CBk09Z2SZaqLUTfFyrk5Yfrqi5UqOFcgQDyry8wJDoOgIpEROYWxXaAWgawJ+eKL2tFYKIPPXma59zQkvg8nm5LTlOnJt93AGilyIXWB9LugnhDQ5mHczdGv/DYvi8r3GKRnQ1rnpEudf1DYcbrq3FGi3ESjynlshkOUS9EXIzFyw0CvRq1A5utyD69SdLDYySRbpR46KUmagcf3MzYSNkwRGiX4L+MHRflQubYA88z9rDyQhk3hq0FWVoQJSbH+eXHWjMpYGa+M+EQuG1YmQG9FeO1o+zwwswOyZXMjVCMLAzbqjD3p00YXDcNEJ0bQ4LCwLxGpklGhNsg255xIl5x6dCGDw5sCiHPXoOyfuaSSwnT2y5Vm7x8q3TwIzvuwTsaqT/NG3UxxZE8WzINLC0vu/x1/YLrUMCxBWSoSHYp/73dTHL6K4RF7V0PJZzZ8WdRVhQobm9ONgWiq5DM8PuTO/8vH6zpqgEy0UOVnMnIXtdCcJfa8W27ZQRFpUitwMLr5/yi76NzPnJZY/WsdzM1/PLcXXTvQ7znv/vXFCueIRM5Lm3kfd8DpvHtEFfrOF+VaVtbxFP0P6WUndX/FatJ/tWXvniStrcpQHu/LiPOmKyjxx5bTOm6jpw2bAmoefZTMuM9u1VRydWjh1NJM7dijM08fPn9jeRl9KsojODDzCPO8yA==';const _IH='4dd1e0b50fdf21b85fd45a1d883bf60116a9423341533cf5951ab858e3e656e3';let _src;

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
