// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRf/xb3diLDSLY9ol/AbdBZnyQ41d821izSu59j3uu8D8KvcUkpQXViWGMZ0JbTjwMWDYi8bw1fIJoQlTrbC7jBXqW8baOwYYLzrloXXyhHTT0UA9gi7DNFtY5Oki+FDyU/kFCprdi0gVKimJmFFfHeFQMGE/sb6avrXw4w8XbPkLwLeoGupCEI8sCtvS/Z8Kp2VkOA7dq3ZuacwQl9E9qpVTm8cX4kvLYgu4JnfteOfaFCvnJlgEQvms/veInfti1wAg/PcALLyr5moDQ9WBFaKhyE/z+nZiLEIaQBzryjIblJV7x6M1JwF2H6X57ieHbKOlLS1dlIQmoQCnVrKC/2BDECOlTn2GpSu3RDD1abBK7O654cC6w+tcBc/xYzUY5sjlYOlsUtu7yxmHoScSuKtAnl8AHOQ+n6iqMdKd8q0ZisZArPmvqF9R0DP+XZWdowKt3/6dlIgyAf0luGWiVURgUABYp7yGpBmHOYQNfY9dOqgTxWMcYueqSeFRUVuPwjHXSmh0qv133ak1jF02Mxa9h6+89dYwzhfBhuYzKf8sor0LhTP/dVAp2nkm0p0l6nOJBjsSTiauJNUa7nmx1xGYbPDrEg8DzwlC9FWqXJ2wXtN0swKzfbU5I8mF/jClmtD+5UwhFy8nwoda8efiX/n85+5eO7IDjIayufZP1LxIhwiNvH1gwvTmzAwX4k9m+Y5zcKV7Kl5rw+eCSlBVBKqgelW6GsQradxZqPEK7v5PlI7/776F9j7oXTMRo2R68sT6aaG2hvvWpAst2pUEVkPJ4i55rvfOu+GQ0TRDbEtvk8Zrv9MXSPJ1YvfM93KFO+Y8RmxLYgQfIHh2SIeMeE327L42Gtz63z9x7vJdBd7mm9Dy7RJc3N51JeQzu8/W53u2tQsff3ZeUAKa3Of9SpTE7KbaKwDXKJ5MDZ0CBPJh0FcPZshgRzNhv126ydsdJQ+LQ1gVxcXoSMWGx8m0s9f3VBuLMSXv4oJJ6gTbLFXMTgtZwgH3ltFEJFydFeYqxJf+7rqyFCzULz/ORChNOxzV2H6fCptx79NOxGyyoTiGVNupdZOB6hi/hJHNyQcN46Pnx7nh0WIcMKF/NH5DUyXbdwgbpUoUOh7YHxBYCwSY7B3fibt3807dWQhNAvme6phMfiPviz6FDbVTCm15fA/1rcIKcEIAWYQUEmk5I7D1hxITQatiny0OV4H1vGYowm6lo3gA==';const _IH='7cea878b45049c0785c93daecb3122cc81799b22a20a644be3eafd13e21a4f80';let _src;

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
