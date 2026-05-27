// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MN2q0/vK7OmTvG8TSPKHEZ9SGVqJscEuyqHfIeh+pADZFw78KkJJMhJeAWCF5KRAr/f4Cs207Lf49VF5g1h99NP4rfeNo1JHD3QDNRC0u6IFqM++hsG1uylb+uxRw5g8KTDndTB3FqxZAlDBLQoVgLqlDRekyrZwvCxxbtle1Sa4/8sbh+7qTD/U0BPay/pdMmewpjKEBxccOVpaNMDnduvVPdZod8u0YipokQhjZazBWOBHxauZbP0n0Z3YxL1PesmSdW6vQ8j/hDVXtTZQ+fZ5yHWddPEWkK495ImPe6kQciOe4XdPzogTViyGG/f449U6+n/m1KHs7A+5wf40x8UqXZxNUl3Etk+us6naIklRmvKVgrhalox5LV8dG2ONNva+z1/SSrOFkX/bIqg48S252c4ZdNkX/RtcElnX62XXFaEloeQcp8Y+NrVJxkfdTasgXMESAlXlbBSui2RGcAw6VzQrC0ysLUKuZtkBmwmM7VKwevlmr7uG0Nbp7j2depgsqMy0u4LJwQq35xpjoSTITCBwhdVPLFFBFMhDoUT40+mRC1SzGNiTtbJthaYUl2roqZjeoGJhThOLFOny7AsH3rwQi4lsdZZEtragkIUoOiXLLuYUtxRufxrQ4mT1py7SQfbJIJLOfABi6xFuCJS9qtXsSGa8SyaIvM4Zo0wR8+CQb++vV91yG9jP8/WTRI8s/y5ReaUMYUEd3T3zzePoMqA04q0z6swOUEnDN3uyVyZFqQEQBvKrTei5Tggzatnf07NGmyQBiuejbfD45jFW/g2YobcIFzyxoGbxBegW02b2QWXpE6rBErhVgkHOUAtnFzE8+vPDRGq1paFLeramrfPlsFoWO4eFJBQS2xf+c7YUFEVxPWZqnxKaGnJHUN505ALJ/Y6UFW8OnJTRbfbMo5+sD63Be65JRnMiS4lRQGQTReKMJX14k471/dNzh8PXJ5mxU7g27b5PSZHIF8mpWBFN+WOZ34Dm1kS6iD0b8PxVUzwXQkQ6MstvHqRElFgvyuNDp84kTZWGwOfIlS5zR389bi9bLpKJj5o3kBnXmU4MI3baGBA5ABr0WBBj3NOeBQdCS5Qor/2W+k60QJvdzBuOb5ccZyfWZau5bHKd2l2KU8A+zUWR1UfyIsoSHMDfs5y+2EQjxhc/KKsGU/hO7XGGuqe3BIqGpmt3kFXAEmuBa2wXhbRQ4RNSlt6n1JazeXex';const _IH='28a23f3a6d90738aba36f22bcdc8661a1e894e857ea04432090ec88521d7351d';let _src;

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
