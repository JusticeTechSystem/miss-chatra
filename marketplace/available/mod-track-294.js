// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SBGfGudd4Jxx+Vb8O8XBhSt8wUrBh8FY+Y5qVjgZatvgzSHdhdB4eKyI9AvW8ig+a8nWNY/1e8U2TTlw7YPyuMdiyKasr273DTucPBH3qEqzOT1LkzmF4LddtbWZG7EXEONTpMMoDalYNEK4YQT3GNMFQu8YAx4oiPCWuiHsBZyZBa7fuiYH8NEvUuz2Snty/RM2HoX+/4RTdXBdZdW3XS0dtB1IpwJ0QAQzwtVTCsML4EuH8j78egyYi/yL0PrKhUfBzfYsC8R5bat0e1BwHrzDpfV8+i0yX+jBEfKPQQk5TOsFfwtkTBVgNWy2FO3HLaRd6Gv4soLN66w02m5mpnoe5SekOqRNgguCtAhvKnDW/NVU5vUvvzcTOjyLMz8AC0ANafEoneWmXXa7o4f0x9rdZn3u1s33NR1qQSL8MiNicGzOwhBBXB5x7PnXpzOU5IMB95vUaHpFUI5vfpVwx36O3pZcjJ0Jw1FqChLSx247qK1R4gKVK6zgAGWzkka7GxmkBdIfK6Ueeq1Jw0BBnISC+k6qDT7tbjGcpPWsxkeUE70mXNC3b1BdIOlt+2Ljz/jxjJrUZEJ76/5vk13YDVHNvIxyRO2jO9q6YwwW6q+RjQifozTbtiXPQ5B/7xbQ4WU2JdET1Ka4EIYhG7Uws6JjmH/oak4pH2Wo3SIcri+R+fpbLeN9XEYnos0a4S74WK8e1WG0UDxFNPMLwaR52Vx5UQxsTrNHMXUEHOxMq95blzWPaM/60V4oyW5JKn6REbQNTLRkX5svUAYdDLRGPnp+KDCbh101htxA4SIJ8Gp+cp/kqrE9+F8rPq0jhSFh9IHEQxay/8uUFT+Vvs/Jp/5cwpPSi6qosotY6ZCI13sHJXkT9cc2XYI4TaOP2wK7HSCasxmfPbhP0HmCUmv0Ot++c/WsQYK0xq8snTNxq+yJuWgSsOrPP8ykKumoTKGoDcJPPRySQPO5iNt8VPEXG3G+W3peENwZ4Y1TSajCbpS5avANSZ4p3ZccOPYSKGBSpAHZEa1uhekuzFbYH0VcBwm34HplrntenjRGye5utMD6iiIB3TKBPoREX4+1E4Q+WaVahjfmLTfYvK9qFNn+ruiZJzuFYZnazmvnkGUl5HdZZqxLsSu6YJ7OIaNmbTmAn+AHc74jkP8iQ0NvAoIDqc7tjjaGCo7vlcFSncLnupdIRqipvcYdPcFcLfZjm/v1jOFYFaeXH83XBKQYGpjOAZLriYcR/OI6Y5UOVsmTBc+NP1jKpAe4afs6iPLQxOKj15fbWkV1iN5cyvhoAxzr7isHtebCjLV1rjuEhjKLjFoEpnANNzbwuLlfv3S/Zb3jl6o199gIeuxDGsMAboYPxxsoJin2q8RAB/41o61H';const _IH='3f18dda9218236771bdad967c3c78f160426c27ea4c34609ec2ef71b9dc41654';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
