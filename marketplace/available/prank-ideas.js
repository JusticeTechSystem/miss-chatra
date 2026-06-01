// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4AX7dRSSW4Tw0nbVpk/A4eIt2s2VsXxtoQjY27raLMXUkyAdm/IpOgXoUthWwBOkgtzbvTYG4DIRRwklDwcEKUrjDP4QqxuBeY38s7hKGU04EqDGooolwwYD1oyWw0Xt+D/74jozdv37IAiJedwqGpwGPE13PjiYecWZCdDabPRHjvzp+2+8LWxW83JlPJqM7DNRuqUXuLLnbuyYkSOAGlND9LkK1+JpzSEtwk9EAv+XtTPMrjOuRFp3Zwudi5goWIb7Hu29SRdR1196ftgTX5A9qVDkvb8RRwCm7nWXxdPB/vCYulhYA1loeB1ZjiLqyBvZRGwb4IELId8E0VIzoFu4BOE6Bl4ILVJyqWXxV2Kux0XPPYsUKxkqGzVLuhmW2rjWWIlmI74mWrac/1jdVFA0eHvQASrOQ8/FfB7wPXDOUKPs/y+T4Nto1qO8Ri6Lch9i1ZUiScvt1EsVWkuDlDsMGIHeWGmTylH4G+YdaMbC07tSeve8lebAKS5GNmxBQxZvjWrGwQHOdC1ZCe83YviT2NKfi6suTAf+SvIewv9wyeY9B6ePXFEGG2dNjo0IpBCe+O0DuUozaE5aNX0SmMC3jfT6WcnT5M4z7BiNFLifC2senydPC/ZVWa9M50gWUU0TYuZJmHkm8tOgfS4fweCfDVrWYl2vZIzjuODHLbxtZWgliPuG2+h8sVVtceqfrKqnBOzC/sFrJ3CVfIXKDDEsoHchd5U6lUkoPGgSvIT4CCb25pzvkY0qUkPbx9ZXm1RNbErCQnhcnhnSvUs4ra2zwT+luv8mTJgnrFmqqX0hlaRnLJ6ekep/mG2+RZp/T14lIKoQ+hZ6XXnEgHf5j5E7UT56237392LvVgG5WblalzCUqbVIdrHM4ZueMAs65kRNPql3fKnxJHzO89VM2Ji8vGJaaQdG8T6UIb28NMTM9gsN1SWHvPnFj+lLcYJUMZ9RMmvfyohoj+jO97bVVilthmES0HQYi4WaLFU6xzmWGvg0yM6L6mwPa/qetcwA4Ijq9LIOvu94PjlNBN4UVT3nDHnViDePa44avJuJYmnvX3MUBRkfRFRVhO4MtCcalYG5CzCWwYKs06dUoKVMqiyF+Tqqm2rc7IDtkqth7e59XJu+nhBPZEV0SjaCpmyw0vhRRoUCWnYiMjsRp42WSXsrLTXziBWACqmUFkyf8gII6iLFgDUhiDRQU1SCoh/XxttgjbgM166JWwrNkHxb3IquqQWHfOP2TFfMhwmTEQhAhEJViHpfMlAmJAUU5lUYUoRAlr3EfPWW5UBb2OoTszz+EHOyKSJ6CIv49u/MELYQfdTGFofWmLmNXpf4cwisfA5HCDJ44vIeq3oJIOAUVq7aFn0Qi5KeCjkX+vDBR/Ac3ou6r61lPGBHkCV9TUifaqysSyLX4X12HdLOv7/sBvVLKUuHls5d1ywvJpJJQVSsrvL3Smz1bXfToLF5s7WSFULbjQOwmYiNBveFcoucCA6Ohb3r9iPUW0ojJikF1Mb0RnkLTd99BPEzEifaGUWrz3YMmURbR6I';const _IH='4578092e7b0fbd5d5877f1803d2fd37c631718a335aa606dfd5c9d5fdd83f311';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
