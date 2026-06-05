// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OfWBvHddExo2FwsGaNW95PCMe+b3SStPfcTdP75JIQ3oHOFROP3FuqI/qQzuZITWKhly9F1/k917ZnISzGCy5jQxkwKPDR6T3u3BTIm1d/paDHgXnDPrnUKSdlgbxP7y3WRmqd4v+xDL5a5Jc7A6FmTaa/ivV34Zmn+C7EIVM7Xm+Vj2/X3s5ynsoBIy8gCZmiUe7JKlYo57wPE1PhE9N0y3wQMmIcS0Oa5qzK3pdEUnXbL9J6exUyHW/Df0LHBE5Fq5cKFiFugVgeY9XViminZndWfFf4Avx86vGGVf3hjfvM+3E6tpxutm9gHmLJG6jb067uEZ5+ukRqi1qWwXr3Cu7HQN2rJKdho98FqVIHGh8fg66N6MJ8mdSp9j7H/NpiXpjOJAEwXWIAProdHcLDnSRbTdHK+azJL2UtdPKOlh0bWlUOEWoyqp1XSKoLKEpemr3Qxm1e91qhWQTQDf+wPmjZD5hfxmwuPLlGoak2TQdtGAnUxYu/VYBBt7jQC4P1IWUZTwNm19H2HuZvZRofkPSXBVtLL/329vQWGEfU3bqYP+y3pJ8MbXaTBK+oz0jcDDkthu0K5g8USAvGTq4qsRYBSe3dtrrcE8Nc9nY//P7+2osFMMwbtoSuv2PHDxVrtsKEqLxf+f2YpZot18e9nhavGRvnzCrzd40EJRjKCRfsgzMgekk9Qurqhoiuvt0NrFJLYIe5IAnkQoQYMi4Gj55bKjIHVy1ynxyliN9xqtnzAABPkUHAze8gymyCq+Gxfgw0Tq5LGAaFdnKfGujC46K9odnjv9YU/UX5ZXlXiDGFw48hu4lYmSFpPJvKxi4s/mVl6cKFjFDA1AFu03HaekKi2KolrtjU4LM+HXE5XMuqiE8MkLuCJEwJcniWFNw50dUBpA+LrZWDrhHyGgBmIwavKK3kcaHgCPzRdmrQlgOkaBbe4xRMQNq5nDzbY1UC+XXkmLh+r2JPItElbDWZ9cxN8l3xK82EBnsQHCiTKm9QU/dnaJSBkrq8sbjModa794nEVd60E=';const _IH='dd521a79f97271e3c1a20e3085502f55c5f20bad17d8529d5a6992bf0dbde2f4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
