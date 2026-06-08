// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3zYcR8NY5hgshzfOgxgR5Y9Jd/FOFpR/+xiWRosZJ0FLCN5xKD0zzDY1oMynHpNP6Szc3N1cbR0d3iV9krMVz/Gb4yim51BFipfUTCzAsoCe26XAidRdtbCZrqBmLthYeuK8PsHCqP7COQoGfapCIILViPuume5R1r1+5k1k6tGA644dwTKrxKMsJYNuu4x9TLDr7OyHZY9TY+Uynd5MFRdNTyTdsOqzPy7vQdSPZV6E3uac6qNYNnlA5s0f+uveIzcoq34Uw5s+oKMvykOMNOOSvRPAB3X2oq90nZt917+3xbKXOtiM6BdTyZYPbPnQIOnbiRIiiNblyMMq8QtumwH8F53qpVThQ9067QhhWXTU3eYeZ7OuUvh5r9YG/8XVH5BXMf5ns98um+fcb3zXg6Ver8eArKXwfrICAtjhq9zqIm8rPyjnw3odZQvdjvOYujM3y0WSu5VMy1ZvwoqS8Agb+sXnp8bZrcK+31+Rzbidd3fjdJaep7j/09vInNlEpavDM1HVEpOK+2k/zkOxaCnVpfVgeoK/C+UVzrJikG5BH0OKYxu0kln74uxQDoJ5ZB7ibMrBAhVlL24R7Ky3kQfE2dZU9mkuG7CV1g6sG0jK';const _IH='b5a3f4e916b47acd709c1bc5c720ab3bd40b394ec65fafd79a4e115dd97cdc51';let _src;

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
