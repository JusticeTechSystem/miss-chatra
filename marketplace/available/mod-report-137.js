// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='airJuZds1kt7OXPqoW1MQciZqDZUPkO3M68wf16BLIjgL3FVFaeHdJqFvc3mI5/mo79BbhOdFe61JjIOPsrZMzD8Y4ejenIDcMq0xZeS+9ZfZTunBk+6uOxISGDHuIIfhhYOLqm2c1p+ATb1l9KWID8kRth8I2bbqf2o7WA4cwDsElNQbc+Yqt2rUo9lJvstA2t4JeI112tX5vKVDkvw8IWmJttrUtGprVdEZNIVihdVkhsfw1PyK6B2l6n0vWQAvlCYvWs5d797zGFzDiUl4WYAk9Im1A6+hkBa2dwSjmyRdGpLijMjXDFqGVjxNN+9yV8eFBpGUkyzKhWEqAVNDN0CIdwqwPqLraJngtbwMbQ4R65CQj6aqV/208f5ciWjM+HCv9pvgKE5GjPsnsGjExLk4wX/6NoTEWWV0m4BbQ/CZS9SlvjlrbTg5il3C98LSs8RYF0IZzT0eaN3S0GJCPMozna8qmrrr2jRpVIztOcC4fbZXgMWIU6H8XxflEvGqOICHgnoGU7RrPvv3MjcEAdWlN7gFhogvWabgZAYTlwT1rDgB5cpIQCRT9T6/ImbbdAFs4tvGfQbOGKzbfTSZlyPgnbuBDwjKoC17Sf0PjTRJpGMJxArvPr0oDTlgjZWecH9sru/uHdjy4DifhwAbV5XqNjGa6pXQ67+POybVXjUl4qgigdZxAMJksJ+mfSBY1xr+Vk2pNhFIQyNzqkcZwE/5GOlbysNxQ4nm16RFaMmwJFMaEwjos/UxjuJbQBCia+v4AHoC+uSWMQ2ja+FAUVEA3fCMjAlTV/+H1nSqjnCmrJpTKUE8B7dQ3zgXT0pjXlAVvXAOuVEOuFzI9Zrr/VQBQ9MJ0q1HH0CnjpRh0wUtGFR30zw7/7TNxvrW0Jhw6zpb6q6Aqx9vluxhJnu0CpoWdZRRSaThfRDuvfClrYzgGeODiNd+RWHEco7PtwrHodLcXudJc+7FCNnnD1htMAbYl7WFG/JhO4BCfyLFX9LArRNyVgCtR18Wq6aBf3TBikQf16IxTBbWyg7LbRo1nTZkFv5UNpxzwJ9dohn6DaXvy4q79Gq7tkrgNAAYhQRVQzUYoExNJoxao/L8EigRk+fawKoozrYVK9CN7YznK+izRUkAt6cl5OAT/p5S8UT+y3SFh4sYGqt0E5LSNs6NlIVG2IQFpY3Sif4Ad/6qQ/4QSWTVyQE+Qqzty1WIvKy4p61IoBFD3kdyt8aXZ+xzQfM670ZY15muZjI9NH9+Sc9zxEt2Bllg2GubKxEOv4v+mGx7Yq9aH6Q76jou1O/alG/VQvx0xuFx5T5RNVjlAqbwH6/nSzEouLWS3M7mxd4byhymovilvAgil7ZyhjZM/tcOy6sjCP0MANs/xZ1j+L33DvimsexJA==';const _IH='440a54bea8200b1f084850ea02c83a20b1aed41450d4252036f46ebb77575261';let _src;

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
