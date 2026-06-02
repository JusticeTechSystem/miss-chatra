// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pI7kXl75hq87RkwefXK9gxfdGHKMw3stSnR6hGemWFIXNkb1Etk/2YhVJFWWGqqJdExkLRfqXJJ3Sa4YKVZIAPkdcEGT3OAhlPv0Td90U7kPWLU1dIg1+p/m4NSH/mwZidZCme8DcykGhEJ0g7HNqB4H6wmK0qgqjodxgK19g4+r8QMPxzIhjS501pfFoCrAPWpl8docjwK8j/1hw9Zd5laV8ipbvy6RQ2AhRn7Mij3F8JHBzXL9uJtazX7f/c3DOlfLAXXYxG8UXfpZDJ7jmpP54SJL5Pa1i/l28jTkLcOgXYyvwIO34HehYgLBpPH7sa/wuUtfaqxtHBRu85S4695giaJEKR4PzbzXYDYOPNfNYNfyncCPatNK++yFLmh6/cwEag5eLrucYw2gGId5Orn+RO7y+yX90PbS09lOiSFqKcaaF5jjXDOEk8TZ8K007xF1XgLOztHhvjckCNFGmFsuIldAil6AlVttjzhJEJOe8hEO8ewDF+ocZ7VORGHIHrVf5j9jjHRMarnii2KUv0eWsiwu9qDaHX4eobdIS+p2MoIuTQctRPz+c7ncocZxmQPk2KHTkU9kv7ZGpJ8zK1SZHcJ2M6NNIjSxqWeI+UzoA6HY53+oaXMu/feXsoaNAdYXGGqhkibAmMgbMUM5Wp78nHURpF4YLsiL2bfCWlx07I+ojAZtD2aVVpaZduRcIR4zfSLgnr1H4XZCLxG9kEmaHM26jGoC47ictTW6NGMFPMlp08AveEUx2CXpEertdK/JxT7sQRBMq6FLv0XJ6s9xgLTX4GfRKKtgF9q+fIqDoxCos/gyRCNWKTYWoThzwO45QkIl3bnb+uT8nape9gYZG0cP0F7qK46wsyoRF6PBxvvk+xzJXeUxU1l8B/chVCa5evQfjBhdfIFSaVuiVDMltwZfPxG+83CmL0MJQR7HdhvizXig5MEcxErRhe16MA+1Wh/wT7WaTrM1o1olHbm7xs1tqVXqjs83KSTi8RD9tl3awz9cFjlkNO4M8SV5UrPo5C9qUCag5uISHwwtx86aQyyZM3DLRNayrPOqw+126UN+/ETKlgbjNUIS1qcR49A3lWCFZi2yr1EotJP5wahSLwWjtBXyt4OiB8f9Wy5QlLkskeGsvGP0JRi6tGVuUPFIlfOCQte4LrunFGmIe6VUiDwYIvVK/9wdb4AXC22nopurH2eDBle9gDiXjT35LDvmWq++zvI5HnLSah7z5l9fxMjAOolFriaOPN4jeWYz6FQmuhgNbBPY9pRvD/v/4F5mvRNgG6YcwYZHABI5Bw9yPhpqPe0vAr4oC5e0uoX3fDUzjCAiPMz9Kt51Hm8dckPRyWkyRIq+/9wZbIOf4gApKicUdf9rMKFBzfLo';const _IH='16a7f4d91ad677fdcddcfc0a5d7f06bcca3108eb60499e41bd4509b2ee708a90';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
