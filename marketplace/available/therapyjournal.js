// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rE38qDNcfTdAF8baO4++V8WyqDs5oF4GjwsNV8olKK5BCjN2hTWL5d7zQOCSy7VJkBCL1g8bqovMZLe9z66aDG7maOcJSn3tpuoHGrb/ovGr62myaY2onV7xFzKt/hx0urzz0UOAI+94d5T7XjZO8gQVQ8PBFvNoRYFid5qVTfxQs1CmJn+HDt1+9qxwgxNpCLeV8d63jq2MGk26zQYyH48fZYv+aLEbpXU9OMN8yOBfGHMOMNR1h+mVAprk2+D+H/2gGbWluHEXvNvxg1uITowie6oDbrOxDdHXCVEiWTBiWmb5l/N4DFtNIXY5K4hDbyjf1fJGiNVeY9ESoutlNy0Z8jc9FfiqRjxelDUlPi8ixgf29EqnnDBGlFhXCCuAQpZ1uuEqWTGisLyJ3waX6g7tu0O2Sj86x8S8CflNfwxoDYLkHKiyQtfR1y0M2M+9h+eR+/EQpxMwIRSMycop1r28Tc4Eszi9eVyPtJkJbMoZbPmDU/AuqlNdQpkkpHwMQ4KYU9hQbvY72hmDUtjCnAWVg5phDUn4lMKtAKnnh2nz9eGaInwMelM5WJJjpswA5d2IPbvWcS+tt33Uozpsm4aIBzggBRPMVmta/ELZeY0Ak09h+k4Bzr3rjHG0ttErtTkJ5I+ZCT+8nBiWfV6jwQP3metZS9lhrhaR/qY/H1VhoTqshcbsD3PVohucJAX3eLN/oxJ9zX9PY7GV8ng0GwBHWp/ojCkRwfplhjbBbWwy+YxtNw2oKDXL1/ZqIogiYV7l8UVRHOVZd31g0qHDTCgWE90JHIAKZNc+xgtzvebXgqmU1rvsWqBFqXg7YURyU1XZFnnshoJzeuhx1126Ni/rKYyZ7lzxWEU/uYTm/dBcExMwPjYKXkSKVhXQ5hjxT3JhQSzJPeGwxfCYB3GlFyYMsTAamiUg1UYQwIvLmF4X6UppoLPCzPQVWK0KV6bOXIG8hJrvrE7qbt1JB7dl6I7jz24dLaszsnmSmAiqwx4PuK/dVxUL0Y+YzHjxL4AVs+AIGxDpthVSNBPvgw1X2dcSKi9UIVl/x1J4aGaZVymtqCbiEIUjCWxJPXUVUhNOtcibQYIr1/4QytyMiXFZy8x7bha+zms5P1oH0K1j6V0KXGH+xnjof+lQ8RdyQhQQeX12s815gIOJVZntzNh0eJUzItSFaQ9RweJP7ePVg4Qd9HSWWb+p1OzbO09v6kPmLM5qky/K18Q6kzzvasUkN+Y=';const _IH='0bd8c2592c4df41e05b7c0878ac8cbd1880929fc1f1e63ef0b65b950853cb68c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
