// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQHriL+EoEsBNqhk2FRNKRjWYHWvXr0DSHxJ3qzGDKk61UH+Ym4XkA2ox6HnphLcD+z3teI8Q4vagourUGTiTUo9WBhdj9ljAAFabN1aBCydafPu8T17HmRuHeYqt3dpsYub4fU6kYpHQrVotftH4bOgo09SsvDwTE5HF84yFkGfHWM539YcAQmMoum+tRMcPlrdnfbIM67021OS/940ldVQou063H+hWOJC65y3nd5dKYAxoXbIrcheerOhaUUDci6YRoKuXVjZrUdRRqEcJjMk4f7jRSWlAOcjQakwdU/hT87ATm4KjoLpsThTEVOdNFlaNTsLKNdK/qs1zPTy2tDusTimzO6ubJTkdK38qZSlF7buRnoPyrQ8EgKI/yAt5uAS537yferd52XNwGAF0g9S9tGcv29fRNDtWc9KxrA4JTyUbGYKlqL4IHwrpsXMLcNB3WzFMNteeoR9J7bvna2t4utY10uNZKOt2X0I83SFsqM2UpK9trkjqBxjet/KoZZIiWcnmNTeSLnLR+CE74eeSVS+pi8sZkZYx+dgHhn4CuLNRoFeio888mRALvqPutiXgazNi6Xqahvd1JpAsNZIckhJ3IOrzED5qmMA8zWm4rOBrsQDLecd2HS4G+EOja1lVTVNPGwLHEvUtQ+UF0qdazNx+jeGXuOgml6Sa1B9WzPEebB01j379/FkzXqxaHYjBHCvAPx9NQyXJY5L9bckwWvZ/xbl6CUjt86HR9AUQQbF/idqECHhS94zsSzlJ84W1udxabW/yBDlV5KKJKRne6p5E2LmS6+kF1eJwyw1EezrvCkdexX+L9qj9V3uJyZfGISuXvWvIHvX5FZSzkn2swVPCu1dq0lLTyhqeo4ITeyBPlEzO81kajzLbHZTFn8jOydX+V4BeXxJMfQqVNXGbv688Tf2BplOJkMo12p08B9GxpVGF7hEwvNgYe16kQsTbWP5XjqchbfKuqJ5ZzDKwSB1iOikIrK1asXL0uJ5rJwiCTBDQ4TiEYhIx5uebR';const _IH='745cad8fbacdb120270d60baf7c8f786bc8b22ba19f82ee9f792a961e0fabda9';let _src;

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
