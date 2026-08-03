// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREuYuQ0w+AZvpcM1uroEBJh8qYkAgtaDh9IoUxoD+vivwdG3RqLA3AP8yqy6kKDFglOkR1Tbl29OMiIQ3nv7dLlRpdb1Z0oiZWKOOFzjseepqGLmy7l9jDbNStoBRdCufQnVxW9XiBJUcA3/QU5+Uo58Cs7enj5pPqG7sI1qU0nZjQE045HysWcrTdlVNy/SeH0LY+Qbj8MaWnnyp4fmCHpKS6GcZPRqHdcANGKIZy2UMoBSHEwBSmc3dj0WSCpQTCeL7mKtXJPLsYSOJKV60CdLLOu8ROnq56UqYeJ3w+qii+kqfyeWcVWu+H5FocgQbi6s9kZtmZMzmjZnytcpHicrMhPjSiTzm8YN9w+LDjU3yZcucyEC3UJlBeKBbphNMI9CPBnxJWuQC6sndSyrwy3otfaR6sV1Vww80sKDH+IjwA1BIXbLY5JIrnVgfqdxXN8o3tpiKfRBUJV4LNk4Cda3vchmcvDccLOgZ3MKkGjbGNhoayJAdBANROSOD7o/RQH1XTj3wzIHHzuMrZN3HPNZvN4lmb3WtWqP+yPZrkOkRC7wXyI0KYyZ+QEKmbaAZ+pSqj4tBuBdm4umwBbzHkLviczPle4Vf7HJvWfGAaAVm7YqD/T+NwCf2Un8jtS1ZOGTa2uLn2vhAkGpa/1gg6ew1QqvoxQbRvW3hj84lkQ4vDI0odKug7oBhJV6FsRIoMJSpR55Q3eP2XwDY4Fg9fIGkF30Jq2I59nsTrNPwl1eZWTJpC9+OCmoWnfydRnNx2nn4WU1Y6644acm1ZYphQ7Z6VONIVWTbPUGWhwGwO7EH3JCoHAC8MkFDyvyX0v/uvxcjWOJUpLj0mZMdktMTg4i46KmwBZJFYnrHO1r/Flkm/gMvUCPhnRHgSldm1c9sRGMjI/mOkhCbRzuxGmw3LAhs6r6GHuujAFIe/zF/uhkonCc1WPmVpero070Ro/XEn4WZBmBwx7zmjvOEbLvMvy0nFp5A+zIz8Gn/lLoP/IA64Eeii4BWoTYJMYYYK6fA0G/NtHwVJ5jil//pOlGbpdsmSpEo7KNvpFVUjxaPB+oKaskhglbahfaPepueHkKF1Q0zsF8eBPGAzN6pVWcLyKDCBQ0NmwgeFha8meCkyYLPnBUbfS/xQ8eHsCwIzjA4cjV5igyPPkpdB7DXloc9NejlGEsslTyFYSMpifMh2pMUjE60J5MrK3eO3zU822tB2kGQLi78h';const _IH='f1268cd817f7e8e2a0269f0051a5a43361fe55480d4a157b66abae0452ea890e';let _src;

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
