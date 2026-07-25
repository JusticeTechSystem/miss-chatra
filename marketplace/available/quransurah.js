// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROlPTbqnU53aCu5xbrCu/R8i+XSMaEldtgz4UUFvrlfx5//tFD4mG5omIQpigt+j+E53TnOFzCwEvmSGeDiSgL343VNXPoUAi+Uj9rN6gs21j5DFktiVBTZuSWcgxfxIPGybjN4O4e6C3ReI9T3VljaxJmulXiTRGz8It8n2klHCWoDZ+snI8qyP0hjsM5f06TgLEvRU+vu0mJXsNu+7Hc21Bc70aRoBF6XwebpNAIOtQ/K1jy62aJW0FYwtKkQoC4IqYw66AEnM6j5P0qiNzClgNjAJRF9mqHKE0m1SZMMmq6fBQETRkkcfA3geGUsfAy0xkH64S+Hu3VlbFfnjJx1zick82tOod56BcP9RnHfRjB2MqhWoInr+rJOBE0/W0Arp3i8ICX9Hm2vkGVs5BXE19hDsLPvPoW0QmUeBncyN2FUgUi5OhIgns1+AyxNSiTvI8uqd0tq/vIOJ/V3opaepeD3TcnPkemjcZi+Ec1EiRYHdZa54DEKcCELqcATGVla1XYBKBImJSs0B/UwFKQ551zbhiKAaX3v1d0m/gnoO6YVAXzWhojkiQPqWi9wLIhibb0kMH4GL6JPttBPf8XGYFiZVHYlvYB5r7Itc/rVFISAT+OGSqmAzNCa6jKiFUotQGEUU626M5/8uWub+63xS0UEnGxMgSbp5w5KVoLp0e7XUuzb6qj1dAlswbTQ2Hhrnt2FqEJ/vZJq6TD0o86fAmSOgyGiuQXeEz0+KHSH0sMqmebaT9io5xkXUFLcHUfANuljoIT4MTc1G9SSgBvu5exFLzRAySIg/6cGWGcsVG+Mom+TuzeqpxYauV4E1sSGbUG6yabvOlL70bhVtxeVQiInSzEMoDLMbJ6IDnTypJbmb3TYrVLP40scWDkLpEYoU1te0K5e/rhB/0ORfBEnbUWB+7yW+TWlsGa1U3CSg7HnFRj2mAMABtPiTfFd58mGvRQliGxCSTMD3GD4iFAX0oXhsL+l44NV6k5fKz61DFx4Lknd3qcScE8iOxYUJAC8MAU+o7oeUEhT+vDFnqWv9k0MXf33NyuGRT/sK9zuKVKPSoF5aCZma/pOgUHpfvzUN17jH0DrQPRpl7NXFFXuyqfc3vMQm3PUMnJn0JixN8ZCoLpIjUp8WhxzcHHfYPNJ6UG9DTwfzonGcftLCopWgYASLKJQS3Z0Ct7mVEKyj5j+lS18brYLthe2ibpobnfZlSSf0w=';const _IH='0de0d4f331386ad85859e46d069514df1e6644d5e9439eff6cdb12b1ce2e31cd';let _src;

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
