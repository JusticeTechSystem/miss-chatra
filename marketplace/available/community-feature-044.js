// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRm20geoO6+eTbfdczB2k/C11D6rXi34reKpvZLcSPS6k8yTIL/o5yduLSMRZo0Uoa2fiXnwovzCFG1/KjEUW4Eh1vA0hEfkChatrv7tbxpewvt5+9XcBTTOqMXrRVQfuVBbL+IQ6v5ez7aLODhYokVojE8SWjDaoF5NEDISMsSB2+7K21PuJI7QFT/fq4eeHnYNG+Pm/bWgwM3NywqgWmznJDVdyYrm/qjmbvDXMm09eB33wi/KwsKPXDOFxcO5FZk9iDtrYh8qQI3zQiYiF5qVxeBUw4WtdQNKmlwGc0ruOpdAHFkbEtT+BSfyzS3kexH9dd9ubQ1NLWgh9z+ACKRMQ3srMhmfFw7xI5n3l98wSd1LcudQE0WIN7xomt2qdX/9lbyzdxIB2B4E2Xh+MKv2QR8lggvulA9mdSO9OpL1lYN+0gh6V1p99Jss/Dw/fL2dFM7DT+IvD5pSeF+Z6oKmnKY3UTzFMibqFRlnzpbHdVq+NG03ILPplPivcrylsoefMzJoNg5AY37vVVwcQQAAjzTLCxwxtfpFivzpTsdXehleuHLgy53iwGS/WsZ4W4hU9eE+C6KN6msmz8DKuk2vuvCAHBiW7VXanY3sCiLli6b1/adHou7XQB1wrVn5g0n0yT4/f8NFsDWCdJ7LGp82rafirZ2SQOfkoW82KbvX7B0aKq2N5EsYp/ftUkQkfqegnLUidd38Ttm827RpDUar4MVBrh+5mypKyFA0BBKKW1s';const _IH='b09d400c4c377c8c6ce42d2df37ec9490901f4e6f2ca2a7b2ceb1d0f002d4f47';let _src;

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
