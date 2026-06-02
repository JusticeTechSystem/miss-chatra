// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wy7gY/4cNTKSj45VeE3vVCFl0Q4e9ihEgn/MEp+vCfBsab/TiYb1bRpEGfRacmom4Hr4ilDD3+MI4onK4BZry6tcsPD3JyeLqP2VU/nQ0/btSB1ZKsoSR6o8x03Klt5GWyJ/0Q08BoozwWBILr++Nc3ZGybbPskHV1kZ7ZQHTdhIgh0Q+crUOKyDqg6ImJq2Ni23pLSRoZhuUN4FBDiCrH74BL0sK8O6tT+PrJ51TgrK8NA1jysexplArV4OmPz9vHvnlSINOlXmwh3pELoSPup8xZRIbDN5qPtwPePK2QgaRAEmd2R3fhTpovn7HzSt0Yz9MvxU2Ngs79pfG2tgFdglAOtKGUlZ3gt0yf/HjfZfvmeOuA0LJYfjO2m4X2u0gQY0v+K5UuoGUe39CsS9CU7BXGmlLTPhDShK/YSXQfYsccEoMqXpMsqBwaNcQvjfPn40sqtEpCummTB0lQF7fTwZtdB0oLaGpmLXylR2Cbapm4jzxjZB+ikjXTxBh1o3F+1XYvMrVxYBqJEl2MQp85O+6JxTXI7aJ+mLvxcCigB7fsieFOVjJ+sfI2TUHc2vsNVkjS81rcOPmNRMSqtnZVVwUI51u9V1VZH97XwrnGH8fZdX8tS4R0LP7gMMro6Ug2yIxU5vjFZ89Ao3dR45NDJ6HZyC3CRvN3IBXn7kvLk/ZF4Uyn27DdATcvih1tzJ3HqVYgZSMM4vlFkbRTy9zYLSSPuBvmFtolTJp36+6FgDhVDmpl54Kjw63xPhBmm01gkVEvz9+Az2qZOnoC7Jm5tCtnFbpVSE4R1/TgQ2yJX3CUy6HFs3uu1QT+5wKleU3LNc9BW5E51PfN0VmMe5SN4QmtC6yxYtp9paJ446SRgjx9Xv4w5CBtT4d9erXQTlJKgAl5FMjdQfEhrI9i+5IjejWMvROZfqhD3p8BhLoWSfNL5iIJP0t5IKSK1zquUZRnWD7XUS5E856+Nm48tTijegntVXf4pB9jPYJ/fwGQmLouU1Sqyu1ghU8c6poHa4vMe3fXg4gldSW8hs1O2J6bPtrhr8PXnoEchkjys9QI8i6elj5LYkFFPCEpqHteJGCzdpNTTuqCAFt/3RyR9RZrFLcH0VCbg4ncxK/N4Zed9VTGBrsyWKfxYsKOMUTEfsqGeLnZOmwMoRYgo9r7wfOkuxnbsqbzp8R4+ZPE3e4HgZSy6ij9+Zg5A94sjoySLGkQV8s7QRW8EJrHWf7jSxSDhUHkVUUYhvSH7X/MOujW7RWBLM8/5jSh6uBTiWiTiifycswUdMYWSuiqSTGD1EyJuqNi6ZfOTKNuKhNOZMfJM4/ya8fVBiiyBtyEn0MwJ84vH9h+7FxXyi5D8Kz33RFsoVvZqPSU0jWSbN+iQkSAfzB845DvObWQ==';const _IH='8317fe3660038a5ce6c95ce5520f2ce28aa89c1cbf29a76fd1450127db190293';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
