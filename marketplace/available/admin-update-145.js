// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UBY3Se0hldjoAq039M+di0mRhTRdk01e0D2iko876UQaSMWjt4dh7vZkDliNlY5eaY77cwPM1rFkHAkbBrPZ+dzAUkHJIW7Rq/ys6kOaFrevRcko7sfV7Ov4FcyP8EnnF3JLurC7xBA9dJ8/0+wtP1K4a+ZOuyS06UORs/JlnlRlUs7Y8dPvMoKmz8jZ+0jaqrpZJQdAjQd0hR+6eiINdPj/NpkfgmS3I6hEC22o4UOPWrzAeOdaaA5LWCCsGZEzaN+OOFw4RgB9jTvNohIcz/dwwKd2L8o8lIxCGYK9u+FIkvD7moUE2KBr03r0WHHurf45l3HWCl2DqIMdZ2E/m0C3WBgqQ0W8zr+D+5yT+P+NojttDWto3ccPDuQ2QSMJkhtFkA3PZWb2oOWGC1j2xh0if3pYbZiFHcKIV9uAw9J69vSazERKzvJvFJ2nOD7piBBdKnB1llhjrW0i1Gb3GY5mYEmAjA6wagF7MLm8PLhEka2ZMx7cjQKAWqdbSqXKP2kZcC3CABAg8LfrsqYyFRhjQhNW5b3WHK8mznaEy4i2v5lLX2qmcKvKbRpra5kkEinxUKd510mWaIPxoMapFO42K+kedWcY42HNAgTTZxbY3aw6NymHVBLni9WKYUTB/E0OK7oPAxNB6uPlRYPE7GMiqgub0YBxvU7DdYDfHmPQ/dWuTUbTj9bqrXfSENAeflR3UDJGKBrZ/E6I4oU7dZv2t+jBZzR2A2o18asFN6b4M+ceFFCj88Vt4Z67c6pEnvkdAR5qk9r27w53GMdQEbPNJBcm+5iOadCLVh5afpGvft66HzDA8nsNYyFxffBb44jIIHXyc7LZCYiZZrmsuno+TaZznPFYAsco9JYt+AIkji8cQjP+Br+LZLoc6V7v1U4XQkre2rimaXHDFqDS78jwMMFITu2VlmeIC97KMqYXID1STMYshgd80MUpJzT2kziTnKlB7KUFRoQpOVcdMo4w+2Uj70b+Z9/DJeGl7KZq7CmJE/pcVFVTiyUFeD76CQ==';const _IH='9d0c172b0a01070c29956f758d64e31b9c9f90a8abda0caa8f5c8a525f882065';let _src;

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
