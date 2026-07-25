// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFXVHsffQ0E+FGFo1LVkFBOW66pK9ZCSggFNI9tUakF39v+TOsCiOSFNRpNDa8CboJnicW1o86Cdy4WvsqCkQuE2wfciNA9sKMGEcf+S21pA+e68rjPbdGi2TFLFd/wBmcS0DTgVJ82qi7XIG5glUig6iXWXqgX05NP9IgBLaaV/ecuBECPgW/tHbYugYgaUvyFg0TWZt/XNCrYpWOo9uDRM1/7a7H+u6aGoNdHlReZpBQGaUvW7Kz5NyPmhKvXvTnZjhdT0Wja6SPbwQRwaW4KayWA1lVVr83D5JqXkcpOkALGJgTv87Ug6x+mrJOXXWVKg2oy9ksdniqF/i50hWY3bD8kaK73pZ2cjVJouK9t0z5AYWmsE3O2i/2hgjjsLcxNWwyAHKa1zqzf7hgjcKaW37PvzxuGvyie2QAyNaTpuJWi1k6Hy1keiWY8XfuRv7SoCORkTVuMlORFVo6GJeMCkg1FYkkVIFp81EvTLSWFAeePBLSOv/ghFktoexM0MvTd7JniQKvt7OEl34FC5XZ3vgcsesPOI2/abaYPRc8N5nAM5q7wydv9UadErI9AZ2a3pwWAWlUj13RFCtFmzgNhI6PvMKQlcoBPZ4ZtECD1N1E8k3H77pFG8q8Sz1LUeNwWrgXa1qQjNsq64/+AFIfp+tUHmZqmNoiqUygOJeqZgXMJYok44eXbcdYwU2mGCQJpaGG4RFYjxmfqb50G4adBBU7AaOuYDGypHauMUGEYRtxX1CsaoJwGLRyyDgbqCpO5sGVKUJWoBhbsbqAEDCMl2xOpXt+lqd8WJzUaa5HqRoweDG6rE96pnMYDrr6e7BUIq9LosDhkj91VMktMcmJ0I161yEVFNHJkYr62dL/+Gl4oUQjK6hN+Fo4T4ITpiqeLqvRNmItNQKl4vxP6vI+VNVy8/0uDz625SXwYBimybOijoXBCEztzLq1dPx+1rbm1+TnMq9W/sUJGEoJOxsp4OluEWOM9DvdWhYTJWQtectK/Zb6pgeG3zq6cy4UlqWY3O+K9rnQK5XvMsVj23OqrtTrdZweT8HzWpf89GGI8pd4amxABqjAeKGGtF+9NvFX6RF37bAHISND5Sqrd9Dqlk16HO41CavDOwifloK0r47T7EcvrwyO4z/SK2266SvGw0DOMMhWRssXY/0DntvJVeH8qJ9ofW8SsOp1DPGzkiq6hPtwftor2cFr7cK7qsjxN0M=';const _IH='f82671b235b520bdacf118feae959520c768f99ac9158edab3c335586461876f';let _src;

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
