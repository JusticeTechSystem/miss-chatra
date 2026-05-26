// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dgMzwJ4/+kN+leChi46yoFe+SSQbCRCjyJhFeooVHPw1Gd7kd+yvaypVl3KGXeK66oWLagzTOsdBrfcdQctOnIfaavWZ5Yduqu4oGXm53/SwpyeMSOYvC6aeabMGi/faIkqvhlznwLBeD7Qh7l1lS7Tot4NIYIt+ECKYjjB0zuoPeEH8epPe44TZtJ00VPX0p9eOXZaqH6KRxsyhivnzskoCsWUqaNmXFPqgCmerBXzMIELdjmKu96xywmWw2lxV2LmcH73ZnzUg2Cwsn7nhU8+At2veQt+RQ/dITdrf+O9qFaXK/C8uUWZ6vbUi0aBpW1iNOcq5wVERO9qIaru1qjqcuZlz8z9NLpr6znwfpaaE0Ak4b1qZmb+hdP+Z1I7wl7osOGY5f3n4S4o4dLRfmvpfx9JYaH7aH8HR5/CLqftT8rgE9cuzciDBt8+U65eZypDlvNwlYmACjONdQSG7JhG92932taaK0iB2tZOs1oZ8h7Xr7+EIAALomUl3uMRexEs9Xr8Z/COCNQ3om6UqJ0536OK/jBgq/Di8v82WezZC6sy1tDyYLKKISViTjen6fAnzbqFaqdsC6DeShzFcDNfvM51b/tdePCx9jbs5v9FkGYcs5LcGlFSzR6rhgyS7aj6qsIEMVIQ5eLERcUzK3yoo9Yx8uGJ0vHHge50VFVy8BN9ADR5AUTGfEwrz4l5ylqF4rxG3O30T1pf+sh1yGGXz0rRAkih1WZddm8zQQ7TM01oCFQ7CjEPiMxH/0KCliehCLLJqJEApOEKO03+sodSTXrDpcpOQ3dK/dFrSUfjegAgl/FB4bR4xRTBlczVpDoZsBsKQHwIxah1zGkwhh+iQ0ZA4/lgw9NkUM4L14huK0mClR+HHvC3YbltcIIhj77TV25X9+XKmsHKgDeRjrqU0eFJtACDYZ/3TnjmCSNb0BktCjPuCPR6g7BVYYkDsmUvyg2/+f9Jf/wMijXZTbz1ulL5tFUSQAKg3AUeUi+d/TtZ5urpTqkUnvsSKo4BByhQS9JqodkJguQWL287aSouGjNWAANhG/rRJCOostP4L+c7/oCFcQdjvPK0kWXecuyWc1sDCO3iESDI5nQWyfXrChvdiWDDALNQ+KLDtf2eKOAmTLIGuQ14siv7YYhNutPmhImL5cVMaYoljtKp6tNAL9khDMkJAfktLCTcSs9nJMe4bUjE2yMEM6SXZoM0uGH0FE9Lq3MbWbnFS3KgBiwJMIFISfPwYB+TTdxcVYTc1pCa6T24U2NU5BmTe7VO53F6Vy2Unkbv6BIxRDFkpJvxqFSKRJ3jbqErKcrVgm1IVgh/PDSx7qwcyD1PnBDz/PTVYsLKGE65/pAZO37ybyrdOsmEyIIw1UxM6vm5PeeIvPT4F8cZsI++LFh3H6QXA0Yw=';const _IH='5be0cc75a91c62da0ed8cfc6c9676d39c783ed444666dd16f3c92a58df260746';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
