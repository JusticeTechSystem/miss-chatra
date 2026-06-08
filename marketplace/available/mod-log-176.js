// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sg3FOJZYtL7pCwgQkP1M4Y7nB7VXu1k8mWwteDF4epkA9FlY8XyUL+geVwWbSsS+Wt+c6rtDpnUhY4aGuUYiZZpW3w8WBzgl6NlFWLA7ZGop82luG4Ss4C4KVAo3Ut0pVw+r3tVriqVF4CePGMFJd92wLKxH35v3BXtSXGbk+E5AlD+XPzZphAyldY0wjTXz9CidSL/MpMQhuOU1Knlo/5/Bea+kVQOsLG9XcbfOPyonP+skSRP2Y+8GX5PNyONJnaUirKj86co+LlLV7/3o3IAuJE8KqE1f5XgNLBTiQcf/s/wDcxwcDBKVow8RkTeo+s+QNMKcCHa+8XKRji81mLZ74vqNCuEUbatgEOQzTh3aMDzss/N7FVnJPiz9slQJHDdkKzewrrBCGMljJxuaUIyyj+n8As23vNXNpCC2kFMkRQ8sf2LvQWL1ELXR1A8Fe6nkVgh0svhNa7h2XLhAOihvg+hBT/2VNP2oj95Xp2s5O0S0y5sArn2jPMOsaxDQ7L7bBVKb0Ghn41k/4nlO7OGarYJexGeIsvElTj2ZgvD4eyZ4CMvynM5jY7QfEQw0j72SHKBs0PGGXY1Qkhi1UrJ2/+pMFgCdMJOhovFIeVtjkUjpWVNZ3Mim1B2WgzMBCR99FgcuJD6e49Xx65SveJRqtFJpSYcBYPKDMKnRE6MSh5O5c87IsXYjnm6ONA3iIsCuFHkM8rRMY067JpQsuGchiWGglQGPNyy52YHCJOTtAIdYupmcO7eZcUQ8Ao4Ai2SrUhqJ3Oq/Dnzi8xnFrL89yb7cMCtYIpwjsobat/QgnCzc+gsO6BhOMw1341OP1FUvpELzbBgGCkLZyDny9t/2Pu//MOQBcYvXGz4sIU/Rtj2PbkKLV1AnFrGYfPWH5mLa/kWNA1QN+cbjnpGqjffdD+M0J6hB/PZE0+4qtEGHK+XrVoP7e5A5OTq5ARF2CUYoj9i6j3eXgPTObANDR4/xJ2kHY+CpLeh/We7osyLkc+jpbaea8r3PY9wkKEwtgj0XjuNNIv8U+e7DRPMOwnCI0WJnQj0p7a0sk/FjPdnMcUyIFtMs/4Uk5SS+qI3I5IMPSyMrx1o90I1cGSXP4zJrjASaESqQJBQE9ByoIbDuyujneINPcMFuPIU7DxUBM5ROx5z5VX/wAtMBDJ7wt8uHu1cTuQr5efVvTzLQsyuoIqjgopd3eX10J6QDlvEHx+VQ7Fx2Jha+2QGfyiKdUxFF1A2l5zgVVSGqHpzPX5IuJa6ncS7IO14I37ZM2xQi30PPygEWdpIwvQcP7jBe3jE0x63YHMwDSTZe3kYHWp11d/dwPajZW4kvMOAdMHVH1lPdj5OLL7HUqw==';const _IH='3ac927ee7affb3091ff77624eb7b4d558fa216b0958db13296d3d3343a7c837b';let _src;

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
