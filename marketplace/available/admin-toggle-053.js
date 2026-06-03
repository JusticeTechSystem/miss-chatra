// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fGWAaOrn4KAF0G8ggmP5m7tW3U+ELJX8esvhaofUaRNyQYaEzUYoCgetAGOk14hp7ciEKR+TF9bch8AeGIG4Ju5vuFI7ns67Pim7HgR8D/Xh+lW3Iacut9fy0IDbe1CYYapCAV4DMyKvqvqU+QxTimMH1PUYmNEeBs6J5Y6K8r1gcKc3LwiyUpJt6pLZeYuJTt0z+lAVcfXRY2NiaOVyTApmqbUNRQU+YUFGrdLWZea5txvxh7wn/BTQoX4ixPo0dhAwANc+4bnbvPva4TF1rWVk4fuw6wOuTpDxaXu0JFszlYxCyYfrSu+wPTvddgEK6krMsHHsT00Vm6Ot3q61ojJHeBLR3Gs8CMXmoAJPIphIClgAcv5BtFci0vdVcwTqlGL5Aw+wspssj/yFe6KZs2MKasXHVz++Cs1NOqoN4j1Lv859f+Oc4QV1y+7Vp2SHatkWtA6RWu99yiuEOZ44w2qrtD6n0n/ULohSsxZOBR6UJVfRg4XRwqqQZGq3eOzP+ZxEF0DbNsN29aASwYx3N2ukeQd4uIvSeVLxLrTR3IoDd4kIBndEKdYVatC2+0iEvSQVTOIesL8i2Bhn4jq+lsALcN7yn2FghHKp6BvnLyoJuwcUJFme01FIQ+akmC1xnTFXoWDP+z7YfXo8ZWHa188U0e9IpcVCfDbPy0allC9eJ8VkmrkSZvjcZPKvz3Drf8iH8JJI8ol0xcFbVdpvaiU/XKZCvESA6Mx+DY8whRsHkq2OtXHORzNCAXOX4Cs60ECU27lf7vvAZr4lbAtTrye58Hh3OXF/8KcECA5cZbNlRxqzDZmeUB8iOj+8qF6efS6sB6N3qZEU+ApLEyoLnBHLoPOdLK8jrkkKwd8w4MgBFFhpK5K/QqiRF75JZY/Ka5cSKWrqBdhZY5aXm6KdMwTt8SLAXNKXnnVe2wZJhFFjzJzPdeFglO9WeGzE1nrwD7pg9CKL3Q5n7SHg1k/oOp17nhgYS92WcCdLjq0qADP/hbef7BaXPVkq7WwT';const _IH='4487157669e2adcf1dda748e7675b2e7dad7a5ec5500fb3c14df982986fe066c';let _src;

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
