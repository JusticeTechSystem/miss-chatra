// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+X0jxqDqtqnxGBPRD0nA+8xvAdYjxR2ppUBZzH26/AgpuUMo+u7nGszxqgzM8VXlsqMwFdhC8b6SnuS/z25foMzS85SL/yP8lgJ4x+YXQrVe0W4Vcj+4lLDezqC5VqOs0rWN4TFBmzi66T2/Vb8JOAJl+o1ZlIomWaCKV3ytGPtGBN1s2EjlOv2EwjATtvcXuo0j1grBX9dk7qU+gwxkoOA+NvKdhnvAvAP0x65HU8psUwNOs+B2akqcQDj3KxB5NHloXTZoyc1mNG/n+FCoyH5BSKkRK0OwEmKyZ7IuIP9cH3CN2Gl8ND0zlQiJOLxPNekdDkNFiqf4CnDbkCXxwUBGnIzsQyGVn6qj+z41pysIYRha8CNB20kKRaSq7zph3FGTO1qYkekpwSGY6xIVqcXkVfWAe0ip3UkD0Hl2FN08j2XfPi5Dp5td/XwEzikZf+UaP94OyaMJfYO0GbCF+cIaQdot6TeM2QuADS4Lz4NyOA9ZCXrHnySlWXO/gRcB6hmbwF2iJ0uB1x5k48r6LrC4cxQWRhGexnnnRnslklhnMlXWE2ZSKo27FN2VQD8WKdIkeT9ZGIhOqZzgvHAQfkCMvSZa1OdbpVbgfVE5nVYa3yWpg0/wE6DMWSGRrIk/EmlTBrZ9yzEM4gDKFMHhyJXb4JuFEMKQz8QwQz6A2W65ZH542T9c5U=';const _IH='bc3ab0454696a04ba3a1fc125d598da946be27cf0787403762ca66683d3dcf55';let _src;

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
