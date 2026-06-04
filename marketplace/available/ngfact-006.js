// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nfmgO98m5pR7EAKdqZmQrQazG3FL8vQjvRJ0hfluB+TEy2OitAhFgZpmxpXWOw+jCSJ0d/jfLJ+d5ikBCsPF9EzlNkUknZbmeTRhFemxqBdLRR8p9T//WnNcjcLwd5H2osycEKd1ZDVBeUTycaLbyXWqH+yxhc7k0ntFoDyHzLYjcawryWHjNEH2I4NkVYHuir2plMxViISbInMz3jxWFYcuDV+O1iEiLRW9VuuNWXlCphk021gonMQET1ca14dxWSOmnCFczsZ2QCamDpcnbxospn6TnoAMYW+EJyW8OW9dZcoAEwZeqhSnPTcumil1lVdj0tYMdI/jUlzbCui1uo2uwl3wCqKcCI6hOWIOcg3nvCzLtv3XjPKtxQtHrpI3Qkx9yLioFrhW1cPZFrKOhVEDp02SesQ+xYQP6rXFp04w8JF21gqmi+zfm7CTt7ptnjORqzZ1XnSUciUis3jAWnwsGeY8NuscS0GI0UKWZzhhLvuDzpRwtgMKDf+VdbWKlSS5Um5TkuKf/ehClJSob1EtvvSH0mDjHYOeCYtAR9xCAV7u7SRvPk7P5IyMNDGneRU3hLxEDqrEffAR1LuVcoWHVlhjJqHtk8Ccz2lXWETL9BDwACIgrOMCWuHiiFy3gLismaOHqIR+58Ss/oUJGgKr7CbREqHz30XM2es2VbnWi5WsSZoMQC54ckNozTtSdj0QG3oNHlDEbPd24SNalj8HmmrwEzE=';const _IH='161a72164cd73ce92533620e05c918a2b6c7432641e11995e4576df015761c93';let _src;

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
