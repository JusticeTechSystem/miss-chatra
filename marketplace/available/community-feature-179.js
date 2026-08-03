// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOHmeJ/OVSgsLeUgyB3PC2FMb5wZdPBZ4hhvMvcV2h7yDoa2Fc8xjoB3GfNwPEWrzl9ChYQfs+9u7zh5STyxqIrggaF9FtNM69hRsc/zJ1aqvV+a/zpMlVuANCC5YP49oiG11SzrDr89kPO0U1l+JgwKs/AHr/PUFplm/H2CcBPAKTknbb6c+wVwPTMLMU22i2lm/WLhTVASbxEl9l+eLwKcTpEraIqL8D7hbXQPltVCF1YMBcn8aVAepHkqjNsWOjAbTIWMgFvpSoUcuG4MrEkNL422MPgsZJjX9v8XiGXnYXu0hWcHL2TovSc4PdT8/HPvBtakPYbRghsJ/xqj6UaVhdsMbSLA3oB2v74wwk/DCxGSlEuqcqv27py5FZOn3d3YYISm0NPwr4wn6A3BRovMeVt5aV4Ty81APE9ukfUcQHHC2CUx7raHjFQNq0qr232E+DXQnYK77OZvrW+JYTCf8h+zfbxg9CO+uCfnfzxxqG8HMXrUfTOzzlCZkaTfLLgVcfti5diiamBM456J7GsBIK+jJyuNMS019njnyevTcTzQ4VZg5PmyqkK8sYDgKe85l2HmAz695jpfMObNIyvvbFp+k4lH2onXRWM2nKzDC6Lo92WRCl0iegv3WvgHctJJ0gljgdMnuNf+6tdzM7J14iOh3yyezyodxymNBZOPQ7sXVJsw08jXs7MAnrZxAxyLURUPm/B50bqDiSZ5E9cg0N7cYBbUd71OuveYMik0zf';const _IH='8c1987d9326d101db6262f89c1089e12c3f3dd610aea81a4f006a62ca14be671';let _src;

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
