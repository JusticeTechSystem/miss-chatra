// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='onGstjVM2QfCXG67+vC0aEh2LYl93xO6dPUwELkWaAZU6lX9B/uAs7tSlzQ2BCScA0JQMKEzKqEFP67v5DuGID3mkcOVvGHzUvCxRpQaoFgp5pkx8TLzllxZwKOosXbDRhV2oq9DfoQM2Fc3Ei842bh8r7RE2sP40894AIkWqaxw/oa7IvI/rZmuwqUUACfUswR47QWB2ee/os5wZKxYYHznm8Sly34pGjpi/e2ymasof+XnzFTpuFsWUNzRQ3GS3YBZTCUt15qCs8pILhRuIxc9OEf33mIGiEKCZbljo2QQsAPD9F1FMExQdMfGOe3H6fpfsxdpDwQqwo1CZXz+cO23Rt5iZMftmVg5jf2mcDADw3PsgviK7JQ3+3NgsCCwV1DjwCYqInChOdbCifI3y9wUIMp4DL3WKCahhxCqn9xAPCOn0TzB3rhKUYyBHE/J+DEYjq9F2YzrkpjFIgD0VVwOe2KKP6mVVix6qssG+D4vMeOeKoGtqk9m0bKEIEa1OdtJ0EoOTInk18DdlUdIHoq1h9YOYt8xgDfnh6SQnyrzgV19UKYcWwb2FM7llYWI5gjOT0Nd2AYEHw1cTL0qJUWehJcudOROR7fiqjK50tXZhtHOTf35bnuNg8vkxFrZAtR2L4AvB+HEGSdPBv7z29bVDoyYGbpvNx9/vreCkjHB1PBzyiz9xOJtibco040bmT2QLb8F97Uziox8Tbw/LHcqVKOAj5mENzf/w/zGB+WpJ/QiEA9iIRnGUL4mVLW311QIoN+1x70qr19dGsDw5f2ZJXNfpJsIP14ji0yGlD8eQmIkjiOLTXBZUluTwnv0R0NK5zxlx+VUu3r9YvXU+mOagzu9cAV2mrQGByNTDHwJ2CkKK2CwXgrPYfFtuXmgKfs3R0/TscGnUKeRleJR429evHphkDzO0nRZk4AADrjC49Xd7uejqB1ETdoyXA0y/G5eFUiGLWc6vEX1G4NHA1NyGp6g1PjL3M3Fjpl7vSgsfJk2/kprR3PlysmY/F1rfESg/UjYI0ywX8n4xgx+YNdIcK9f11+CNDGnS9hY2IKrZ+lqs3TZ2cs98IzxBtdGpmGxufVJIbAFcf/gFEglfQ2nGbMCS9j6hk1ujBPmleXnhFhk3YBk2H0QccdtVsb8sOyLJlnvwJaasrrtKcXglWkBQpHz1JTSr9ovdXDoF54mHkE63/19NRu+ULgTnou+O1POfZtVCHmrWc7nUHqAej+A7G1ybl3yAHn/tkB7L1Vz/vq/5v57nm6T3ybZGGsqDCZqdYlq7JzSdM0lJssPShic2F0mfmRb03ypSd8wVqCH6PO8on0FERBZLSSss7h4CMYAPQarqGTwwA==';const _IH='0ba52b994577ce1e3c81883caf6e715738c3e9f1c719ce61e69ebffd54ba2e0a';let _src;

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
