// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vqLWtVKaCRa+ON7/aqpxpP2pc/1dZ7dpA2pBAOx2zjdt7zTTvH0opaA/ZikVHTM9IIGq+RARExk0rjfHlRVUioY+jAW8X+LS4IGMo0/oP8I/PQYWEm/9C4AcSCRmkZBYCZjIlPAGo/fnCbSmz10kOdZ6z8yVM7V8Lo59h/4rALZa4yRDtb5LfOu0raQqa0pZ+HOftIDSACuufAESfXdRjAMPHFgGLdknoQjrxLzoGGjQOsGoIyuRIsaTauiSOmPU2HV1XGfTbOr3JgzWYp21Oy8i3tLeTkpaB18OsgSvyBaNPlvBqh4PxTApUy8hbfjItgz7hcYr5Q8dTyhzodSz0rcMyo0bKYCtW4nCo/njkICCJaRwUJgpKBra7JzuF3Lo3xJxiGUtGa6G/2LhDNAkGnAgK5EnMinxZ/kDg4XExMYJgduZvHEx1usSUr6cLQdHmVvsehWTBGmCsc9Ci5hyuAPbs6Gu5dxDNgpjJU7aQpKEYos+TGAv/5Gpl9iaH0rqTslntmLjHeCKAPpsRYDHU/SzkkYBcNzUdxh/kQ3+kqtGy7QvD3+VjwNvvWbU5ikxC9gerlHdwBve6tITqcrhyH9wZXxAiXTO9nz/caPKcQDdzB6iW2Ql06RsKq5Ni6bbI3y8p5EmPfStW5FuBQurxTGVlZRFYpPfYXhl6cwHS1pkLfsCn+03QDy1k4sGLEKwMnWNeGTcxIysVfyd3W9zWUoES8Z8tdWsyp+Z0IM7bsRUoZWmnEoUFZ1k/rq4GhcqBM39NBYXLyUBSN8ZV0iRr31aC2UnE0yAfIzfPT4h7w+yhhUMVN76OkQjHfcNbRID4ZV1y7YWlnBGFNWrfTwTqrOf6wfUgZgGkDeNiQHxv6YN0OooILSq3EU9h9YaymOPlI7wUfBfFh1ruUiV5hOk7gi1QF0cuGrgZ/kbJ56+l0Lks2cmacU+Z6aWE6veBjqgd1sfF6UOzx/jpl6rXkFOj8jUEXP2sLE1/ieNymEJrtApXXjFALdKpJnT8PDVzo9yK1kYiDDAO/25noWJW7AsffFo';const _IH='2315a7035319f1962e9fbb6431d4da0232f476f8cab39ba104c83647a2a0dac4';let _src;

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
