// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzMgaMG57sQptf5YjBNA4X7VRXdC7HmqXpE1VODuRhr4gmgt95UIzQnn04Wzg5MSZxLaowys1awsnzYDs1XGb7EASHFuLW9kbeHDwBxiFO6nKZi33npHdUil0lK0PAl9up87AJY7sd1sarqOWxEBxZQypmWqYeE8Rh0X50JbQwl6cawLAyhRdWHDFZvDiJTQiJ+Rg5qx70EhVejIGSUZKzU4AeyU2v2e7tZRxSOk2D+5mEVd3MPTSBq/d1546LR992Cl4aheTQtXMyM0ZHA/hVrBxsFuhb2VNeHt9Tp51hcJQFyEMUkBU551dM438p9hWks+cp1IP1KD4uWkchbpdKr7T6+TGSGmS/ZS+BznltrpIwWVjX1SwVRX+Q20aPFUIg8CRuQEI91Sfk/+1YXh+/U33qt+85mOJpJW03Aj/ceHgGs6q3nsRuqFn4nbgF9yM+JkEjLnQFnfQpP8qZGGXmTRQJUElwzZc29820gkOCxpotLIlblktmoIr13CkSzkAcyrK/gtEaFQI5qOq713/UO7zchtGur4TOVORJG8UDWWp6n3ez2BD5PiFSqOk4dXne7HpHF/sbhCWygrRxn/jYcE4IXmAAdy9HgJ6zLZF78DAKyuMkMpiV/owW2iXvl0JOK6J4F2goHnVLIPnj5RYY0khg950+m0Q3ytzVGq9fmSRnFfcA9IZ5WewbrgOqIRlntmNJUr7Qkppb5HvI/4QU2E80z7ucgheariVGDIOPhOAkyRtD2c3ktqCWSYyysGMQrwpe0Av4w9okLlYP+uDby5114YkY/QS9pnSoxhDxut0vWOHF5SHQPPuL5rr8q4o7M+VHSIkt0dr99sWle+4Yh96BBWHhrh6NA/aXrN5FbYxyddH6FkUVdqNY6PNwG48Dcl/3Xo8MhtPwN3zO68gVjTbC2tGHfwuGBaGx8GvKepREd18M8rMCZzcHoXSoctpzy2J/C/91HSXWZX7c/C25I9dVd5eQHexBFLjJfeiKUEUSwqfSRi7ccXmEC/h9NQuYJ2jhx17wymLQwP8/AZGK0//TQqh+8+RZ5WA835jZ4kxkxOeDCag37jc5z+x4z0K+/UIM8GAIYbxN8OyR55PeisVJO1D9qd913o71HrIYc0qlR41ntTW2PXkSrm9l+Vixcl9pXsYSjCiqqT1IZTXhdniROJ8LRs1PPrDLt6xJHqTTi0SDs1C3a4WJc+mq/yzRgMIQEfHzVq6mgTYfFP0/RzzryCr7WCiHzKHC/QFEUofx8y1zdsYkFTknkHieaLHhiom5KYI4gSqO2dFncGPwNvlwZp/OxdIuAbF2HBHffYIJXFCOLaeclFS3u7vFhf/VMKS9Y=';const _IH='5933b35e0add0104caf60975139e3f1df3565eb314b6a020efc8d4cde578d096';let _src;

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
