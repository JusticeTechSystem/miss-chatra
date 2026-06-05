// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/6zLhRYcJ9bCqU5vVtxA4EMSwz8XT+TUeOCuSkzZ97EanenagekywYVedb0Q+bCRG5h2G8+1DF4jpy/zz4j3BOMlIWSkNaWg+7UZhA/LHsQfSkCqvmxc0uBzK35fU+Zd64Szwc1V1eYjctOTz2C3AiOFTFaeZjxQJDPEyNGXkyIvFX5I8MaUtBgjxJUNEcCDzIpO24uHD0FVy58oLffKqchkHXqyhvMwYXIDty9MapAdvr1hRcO/zpRIOQ1s036SBIrxFUuHsEY8HWW/CnrDrUNvUbTcyYYhHEXvv1VugEYw/Bcd0GMcw8drefnXKdXCQfPwIiFVmmHED1a4e84gyRO50jhGQx38YOgVi8SBBVAjWBHbTXuhMaS9cSS14l4byOvos4JmwUfUNXJApotMLMcmmKJxCyTno3rdkhFvarnPlNG/nAEGtr3ZaBi8wcAGThPgKI1TPVgPhTr9DndBczM6cOvWsbHwJp56cVHvLD9FeFuS7c/SoXMU4RrjYbUExPD7rpr4b1PKKvN7D4lUCFhPivUasWRgnWV+ZFxvPx3YPM+QneErcJ9IlUSDcyIhBRepw5Esjvmlpz2o7OUczqrZlABxPMZ8id4y2Yk3kN/yT8lEkUmhjrkG63UZnIeEFI19IO7+v6OcCzkSV6pJYGhYyEIKZ4JqFVTl8xi+UIeJ0tGD4WgXzLk1tTLGBReUlWakrk/2pwWdjSGAMlE1tdFCrHuRFMe+Wpfg52iJCKOKcym82H0CspVA5hnxRKIdt0OZ+silN+M6emXZV/rYlLJXWydAkhch1P0X8Bb0UBJXbQ5nKYAXxr0zjvaB6+LRweYAbUjNC5gZxwly2uSdwVVXx9q9I9PK5kEXt8P8EVf4UJr8lFc+mZL+lQvwQvdPaDLcqqUkfJZ6l++74ksW9WJm50b2+mkDVH2FR2jLIvSP8yqv29Gljvowq6qeom1u5VwmpumNNPUUtcCzYs1S9NAauwy8RO2c9YK+8JCBnFkNVmFSCKZ7dgaT0rcXdk/qh2TFA893cIB646I1MZE0rK9mXzNnaEIUEh34/0aQlSf8gfcgv+L8EAC2wS6IlXzkpzPA78dkFR41DhGTgpmAvaUhbVoFjQJkdbY4KuTgxDj5e09eYZJz4kiVlYjRR4DQMCIb5OUyRDeCf6oiVpDKna3OdKehDg3hPoViJliI4MXcIH1hxkWlBJRnQWgQJ7QRmXwx5Um6Z3fcdzbskjigZnRTAisgYbo2dwSx4PiBv0dlGAkXdAmfEu2+g7S0vRy1icgnIkGj9PVXKYNNEmPhmgrG0M7KLaeCeFmIqJbTeien36g+iDOGp4t99JNd/OC6pii//fCgHWHDQ3blTzJlK4MwDZMYvHRwlmmkcFhlcTKFqkI+BUEqQ+AMU8WoIsR+FEo3LxQsOZXQTzhZ6U9Et4C/AKEYhkYBjksrau3FEOSRtlmFFJH/zbKYQL17sE8tOVLVG8neNFOJGkuPDoSatjxgur8walQ2+L5igroJyn2Pofn6jrwKqcW3txQoJPUVioEhgqDgnavusrsMxEOJ0RqF1ieODtENN9SIUCW2DsIWQwb+ECgUXnLSnmQlAhSCvOhZnQynNmTPFg==';const _IH='b9cf50eef95b42574df601ba908d637c365bb1e966d345f63b8442c1b27e0ff1';let _src;

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
