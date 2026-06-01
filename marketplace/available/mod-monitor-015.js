// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxACWvWjXvb/XdR6LPcaTX+34GJZgahTIWL4ban2YZQ1GlxMLftMrF5XWbNrKOW3Aosl7Hy1jbSQJdzufXeKrWImbAIpQVy4eqFuvAP19bLgwzQuSOyo1UN0baEPwyKY8X0/5sBVc1o9PHct6gRnotMZUWUzbfY2Oum3bb6ui+aSr7uKr6mZoHpC23qGXc5k+is4TTNiNs+NEqQskrL7vQ+k5dpSbLZRpTXR5vt9C8d7Vb2DhNtCglJ4MuLdDXZo2Q6vDovqC17oq36BrX3Hrb+0vsZZvQU6+kc2bURTwrbth+S9/+bBZY50BUPtRE1wuZ06CF96ypGY/Fto1AU3wdTm006eK7PshDF7kO2zS44m4LGwlDeiA9FgAuCF01iOGkWtHoHvqGdqGBfEhYs4xSMZJ1EBs/rgEABylxvGDSfRKsNqxeP6OHlgBqDM7lt+GRlo5QhIb1k/fDP13IhehJIV2JTiQteWQklpSmwiffqR5OObJJaMoNs75C3anMf5ftP6ELzCB6IVEl5eX/6HQMVF7nOnV7vweD+05CjW/a+Iw0TSyuLGmHQkwg6f8s4kJGOXORNtK7GLUrR/iycv665yo5bUi+sBOULvEH2DYSF37UBUqcfPx0fvC7UVnRfp2jUsfId2P0yv3R4Im5Vj9D9EQCh4w7qrz7hs7patwCr5cyOwvA5PquntGwq0e071q6FmfRuNQgB/X6GJcD5anUg5a1VKcfHovgv/pyXV4e0dQh21f4HsSqKhN8o5UGDteZQwBgbHy79X/4OT/K5irTJRNrgD54Hemkw7ifK/E8UxYpUOlZ20JmzhbqM0N4wBhr7GRpT2URTTgp7ZLey9daVPHrcQvpF2Y4iVBGeDcacH2HXet2cIRMJaRaxjN4goJ8bdjeSpmwMlYleRmfm9XWOf8NKOExjlxvxSgHxKe2ULoQwthzgmrbELjboBQSqStN5sdKwqPprqBbqAGF4bL54gma0GuogugjUdqtUH4lRXBQA8fPhI/MZE3p8e8yzUNpfZ7tMBSOPZFrrcFc+T070a2CXr6i+VCW0huybMex6a376j0fqTzjJvUpdIz4Pod9at8dveQpy4YCAb8tZcx2knCS/DIb+y83ETPQv3mVFzANGNbYE1F/yKVRnJOvlgEYHfliANonAnyvAowID9I4HdKUsVj9bCBC7u1mv4DJKQKMIkeOQRKzBCrWoKY0xFXxOQNLb2gw1tIxxb3rZ0Jm5Ei9EztpIkjP3OZpCtQ1jgIsKODBshg6JkXEH8RPTG+P1HwjNu790MF1uaubxOn0Rbrn0KSDcxQ33QksPQEHjl6wK6FWM3RuYpNMWZ+SncVwQgZpVDv9Tjn6DY9b+qHLgru2+nCXpliuaESFN3pV9rn+nVD0O0BDF8rvl5MQ==';const _IH='806210d170e6c028611a087a39eee41ca9c198cf4faba093c60874c89c68dd01';let _src;

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
