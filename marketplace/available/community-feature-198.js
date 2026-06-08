// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hWvpDl5mjs0MNOWgwmrcpwuJOcaSfdEBGycAcO/blxh3FBxMvBa8qNjrpdVBunBGnKgxUhCyI6dIOq8KoWIoujhRh01IT+6aEi7lR1wZ6JX9DgEUML9guoK/j/BcqwA6iILCjSOPb5HLqLdJ5EY5iEnykGnzSqNA5lJR7Rhw1AXIHzRwSS4g/NFhrWfqWWd4S7Ddet1NiBZjjczskSajrVq1vm9R6bIgnvRBQ0v0EA+but52e9HM0ynYv0mCuGF09Hy5vhtws12PxjharhR4FItGLcQV9gyjmHSfVo2hOJhEFfqTneRDVlJ7m9d86KWL3tHRToF7JQIVglKM1AOg9y0EEznCkieP6w95u7RFs8H3OQiVBml6DQF20NiQkspP6yMfr7WVE0OyLL/UgENuS9Wh2rHaiJkh+H07pz1cbecCXNQJ2uANjej/4cozgSx4VswhSWEMN1KOdz0ALzYnM7robgE1YZsJMTrcGEXnhM/ontW+sXoLNd8WWUyisu9HnHF22V/DP56NF5jwH0qWqPpzQss+olv4UNQV/yCKhvUwUCmk0BcqPgqRu9LlDNRaD6W37tSW2qsqavfJEYJkXHE/3VPtzyCv2ck8wiLwk/0sD0ggbBBtVuvQfgiaio6jyfJJ8/cmu5p1+BrSPjaIkMogB0m5Hk9Wrss3PE68mUNI+T76FeXRM9L6fxqly7ljLA/fEvjjkXhGlQLIaogE5xBMfFUfrUH3xxcEU6s=';const _IH='9d1d1d438e26d7f245e19ccc6f831d028795816004296f9eabb5a253aa0976a3';let _src;

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
