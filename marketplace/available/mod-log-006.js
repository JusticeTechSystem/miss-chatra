// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rF3o6sPLCei+VJFmUdwdcWP/614gziQ4fOySq7crkPCPueppvOoo4IfFK+Dzmq9e5vdUTdc+rD6s7aW/NU/GGxh8qKAijVbBRU5hJq46otoTE4Ck2JpOd+oMVcM84LtztG5Xkv2xhjmhOD0A2CClqfeP+q9dsWmx2oNoX3Dq5YQhCHUlCYK2YyISLy2ABg0eKHr0eyuzqC0eyJxSfI1EQGZAY4bwEP/5B4miZ4Yr7HCisou5lQ4+waemfFi/r7UPg4xIHaXP9YCdMjg8Ff4cqZ53cBh9zm8A3KMVkglQ19JDKiQimNgupFbthfz2mIp47eAyk4I7H0hJUu+pkR5TZDIfpgynAEkVV+Y7ZeONB4oohy1DP1K4illKv8YI1xlr8lH//q4WK9+cj0qmLAuCerQezAPeGUoYIk/iLKzVvFdQ8VHU0Wk/SLRmrGNFC8ZsqbamYAho/uTr7PRZfmmrj1usT75oY6/6eYf4P39XMRdzWtGTQWPNAjfV8/g4aJT/1Z7sbOI/AE9hpdjaRqC/KDwwiKO39q8YkgKSmqOTw4PavH8s/Sl+DqYTgwnryiJoHeCqyNMCe8HFI3Qk0NPI1aPHtJPpmuTwnL9U2opNESyyKMBLRflRrXe2VpV403d6wfuoqd8qq72rL/jE43iCVT/e3yTtjRQaV+UJRvrX5Yg9GVbrpDQOEmDm1pw0kfGzpQvEToQg7rJ6Qh1rZjVSH4jbKD/dqPV7bl8vFKYI5JqV1pm2Bak12+qfZs+j0Keneij8dvuS5MpLZ2JLseJ0A52DoAU3yirOXRYHgRpch/wtY2q6Gs6B/Kosy8/hlevuY6NJdKoAYfyV/YTOv6jbnbVOHv02OdJtZ9owseIJc0Ytxren9E6yfRVhNpc+pdEoNaylwg9/3C3o2ycKBmA2REafB3vdxhvmOLS/gytRqFDwG0IeA8/bRauZyryYfUq45ClhmnWxKJ2ZAtD7ZS7Hkb8IxSPLeb/8XWdQLMn998Zx/+nzTNfC5zeUA057J2aE4Ghs9zLMQVKcblopgwumXL/vNdZZrWGpksMlMhIxgGm5y4FLN75yAEcUBDv/V3mWivYAvKx5liUDzf5x4EPP2vTRgGm0KuKWNf/EgCNHhmNxZ+dssmVe1l3pcgYJ0jVIFUbt9ZG/yBitQgBBwqkNlpssor2MTC9+BFFhMkZLzUM5vYgxyafTA+4X0upJMFAM+BjbDPwl9MmXxZ1PRscVwq+7FAytZekY3EIG1A3NPBuYDgK6ZZQE9djge1mOB8G1GYkfiIzROqakIQApWf4ih/FjPmo5OGV1AV6IH9YMpufLmIjszn2INtXIjoJGd/Zp';const _IH='833c667788fee989f9148e5c97f19c1f87d988d9314d2dd7023edfb435f528eb';let _src;

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
