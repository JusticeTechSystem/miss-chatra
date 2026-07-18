// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRT3xVkkC3secQRmmxPmsddclFqzZITJzm1Z4AQn+y274FhFb9a4LI+pnIYwchhgabh9DUdC3UV7Txryo4iYDjGoDLoZW0jJ7qLtSfVv7tPFAsVlxsfZqOVUQNuMsCb3FxDyYL8aJZBjHv4rBx6Flh5Vx8LzsemIB0jsqWsisB9sus2caKwVx7dDBgZLS3zpf+rgQMtAas9fNGk+UH+pZo1/VJKQ4R21pVwhz+iV0qMXNJqIC0Euw10QEcyZGSmK6up5fyvpxtrExtDYZNraZhGCwpXzp8/Jt4xt89++Wp3wPomWuETPXLFfPX7TVWbTuhdRxwBnRrNeeXp1G6JtSKjgM2055DIW5+Qp2Gpw+RwWSW9YwNwBJTeaVoV+5zJwWtBMDVsallgkxHYayvVa40TFm6usZX8GSVqG6tk4Snkp+RAe87+b8fH1NjRissdyfHY5nt98Zkky7pwNtHtmgjVuoQUbBYWcIufiz9lBK1mUszCGUbQkzorJjVrqHgBhB/sgjIvMUhyQIGHzRzEORQFe3Lr8qjbmz6bClOIwiRu21kCoDfteER3fCbsLAU0uuhRnBit4Ez9xI++bUHg03tQfCY8Ih4bXoIpg+bHuzi31+jAoMZwdIOKgr7aTtlyMbVuwpaZF01Z12jOPI4Xf2eNkp/bCikYjeUqh4Qj1NqQJsd2zX/t2DcLPjiLPtTjC73YVs6qZmiKGruyFSK9vcjhoFuPBY0gDmqLHUcXMUgY/rgk+a5fGn2u4mW1y/JOK9NaiKF8BIykCv9fi84MsUBIrnLcn1QcmUNQcqpiwB87NxySzRw6L/j5Mfq7t0Du9lm7nkHHVWOm1cXMV0FZ9Sihksui4u6O+VvYuyXS6msg5KsLKtIElXOXUVpVkYdlvIGxkxIBkR5rtqsTxS4oInsr+vErHhO/vSDQ8RlImWz4KE9hrePrhlwNM4dzpWC9fcrYNgrCZYOeyI46LLX9kHXRVda+6+oohx/O85olPDPyUbm/V3BU9yb5iSmLyC49FZU3RUV8MgRp/82V0uSQLJ31yEdpRzbfCepGlFhjK8LwPB35ap4mVhKiEGqyzDEkLdnDbq+ttN+PyK/mjwTyn3EVxOwQ80eYMUxh2cljOmzU5bFsmpHhal0ITQCviGcpaiaNSeC81YYXZSIa8U8RZqcGdHwnFCmUh9AMOmwCMeSFrmJKPEq2Wa24F0TfK9XAPFf6tF9k+0iwXjy9ek7Mf2TOL53OdcUGnyWQoX3a7wLtvVC4aOICwXPG/Q8U/xURIo3Rtp5JAbbMSjO0yCiBxUJYFjGHc89TIErKVDli0iPw+BC5ng3RRYYe1a0m1omoFvhhiPxhNCmZAoGeqH+Z/zkfScWmZDr2OIaogT+HeeQRdeBGus68zPJJ';const _IH='83aa59addd6389db5cc54d2821b3bf8ed453b8192de172950c615b11d4969133';let _src;

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
