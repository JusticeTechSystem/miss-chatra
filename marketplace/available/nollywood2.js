// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQY4FeVALfi4mVZyXw1VcqeHWDmvjMZyIga6DGXZVW1hCL0b6L1/yxaygkH4SxCQJ0GpcDk3WwDbVQkkBmyjSPWZLet8426v95O2waMiJSvyf7XPEnFDfvU4rIfrwRrs91HQBOuygbyryDTXc1JOjynGu+/+0Dcc3grpXl1Sw9rTIcmKqaaW/VZDKZlT8R10/KHa+LYG652SNFxsQ3LgrWTuzCtgsWMxzUmngMdHahPHJacwfkBwpFBpPJEdAnfZx2GWde3lDQscKy+Gz3Bw60eRHavyEWqRVtCuqegYFuXPihu4CQjMlwBjqEYbhqomWHIoUghCmIm6a0DC1jA8ji0m9L2/lfKQ3t6JzB2lPvuhcU/dcjAXX5051wAwZQjTjtAAFgMjq0jSC4rY7TNd4dF69hDZ8O1DT0g6QE/nGHDubBhJHms8o4nA3A6Swg+YP7sqbEEvSct4Hs5DQPQtMG/wHWBw4Prj1cs6iSvDy548Vs6DGod1oo3RNVRkYUmPf0xW005FDH4BdalYkWk8CX8uskQZ/oYgGPuvXXOH1pH0Y/s1eol9TPjSV/e2R/T/7eE0EuQZbQjK6fWENQ5dUzfnhfGbbjJEhzSul6O4eOTqEi//GzkZsu5RlBKJoo/8H81KhXtQzqMBuxf3gvJv+Wil/D89ACnQ1WBvqQHQ3Hsgxoz/qdaQFb1OMFZb+Zo/YjFd7t/RzkPlIdpifzAi3oLgFgUqdMyY1Q/PmZM7Exboja40n7OoxtNK5YB94YqqsYZuUVNerR4atcj7UnlxVbsDOK5lpvOGMGKtoJZaH1VQVSq3dLoILDETW7jB/tp27ukwE1w4Yc4Hsi4zhUsudyS5pcQOMiZWvJUR2elKb1QAph+Gsig5mDZDGI1lfR/Lpu+QVhU88mpboqERgM7cqmneC8Wd03MS5a73aNDJGUBElC5EvSuRsv5psKxXMP7aqhd3fvEzD9I4ctLmaYfisfseyBYuUnauYdDkCEm+wH+W3zELO2jYpBKLsiZsSHrqAPn9SoPxzUF1GL3OjMdjp4dA0pyzeKz23+DGzeF8gJyw+XMrNNf9QluN6kAg4hJ9DrSefqdWjcU7EM1ifkxGgjGZjMLkYpfDq5uluwYLgxrRVLcF7PSRukZhmR62GVLUsidOaPqx0l7P5leTBENxkQuLCTT233ohzpjs9k0MwKjpXj0LVqAE3X7Nm4yuYz74amjAcnsSRJI31ehRRMEcw==';const _IH='134e389b04066612950e2e81a88954aa7655d47f971dff6b09f8b64e7b5b97dd';let _src;

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
