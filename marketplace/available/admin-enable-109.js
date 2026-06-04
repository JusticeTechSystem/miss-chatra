// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sFIdWFEuEnKq9q1FcIvsIXS2xGFNCaUMFq0ucfMEZGHJkyBLUj6qBzdYnQ6QIWQVW02A+LXivaYpSPTcR3m0GZeIEsgpCiGCVLA+pjerN9ZdqtmD/6SdzGyQ/PrREJjgs6pCZfLZNPv9WUkWkKDKVZ/4aHmzs8dVrz5U+VkpuvFzipVgDDf4IplJlZvaPvsFJSZjLH8z2SfahMbThjvXmOlZyjLisWbqMUgbo/T1M9GakCZ6wHZLAoJnVWu4mQmWsuDoBkkpeOaUttOUWEv1u7NT4w0ZBsJuRG3CrxjmdLhZhbJ4lpILvWuvtosfOG6sNNuhvOjZBt/KPlSeAxwOuy/OxPVWR7Ul4JX5JZa7mfWU6xzH/xwYaxWXjLAtXqXagWIuR1F7ekOwKr/QxO6R6yQPcmdSrjgvfc00U5RDbLYMLsXHqKhrNXE/GXMQCfvWvMyT6G/0/0w+1JJrxoE9wEmxeK2XbNkf/vCWGjov1RsHBF2Nf87SIcZ0h1iBDTRJmJwt2ilt5/nLUfTjPIE/w4Dl+wQntF/OJMMAFJZ1CniSxsT1QKucqhqvmfnkjO4QxHwxiQqswPZPBLgkHE6UY9bhqqUZgQgVKtrW/oVpz7l0LBLDsF8OxYhVA0ggHGfzBcTt3c4aVywdAA/7AJSAo2yxn/TaJX3PVGSK18ULtlS7siwNZ2zLpnjdMdkJavVMQJWM/gSnjuJETQS5c6h8zf3pNG80QfifB1AaiM4U/UYwOhVvq8C2hFo+XJXupjax2Q5o0ZXtWiSH6V6vyrMRpglX18T3tQYJAaMjMxQ58nU+JIl2yz6XZ3DEqeGNdFj+5A/uI7xsabWsHDg358cmshcNZjTSZdy5EASuSPquVZfHEngoNTYW9mLrpeHA33ibl96oOr4HTjmen921tWOEMp7+WsZF/y+Q5T1FWxKBfjObDfXbTynTjuqmfxfT9DTN5AD6O5VOis6PGVe0R41eqjZXmg53P1Ddihh9ozsxxH/EZY8yBVi8R+tODhnew251OA==';const _IH='5370d09143916fd75af8dbbf8d0cbfbb39663afdc601c6887447fe43698247ca';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
