// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K9REwXsN7mIAzV6z+QDxLwkJpcs32sijocIs+t3L6iiQBn3EM3KMt6rdRxAtsIAPAnOWGD7FnmwIAF1r6WbWbMldcT+l4NpbcbVsRUWr1FlVxfNWEnXAH+3CdkLAxpHPYsE7kNO7pyyOECEXshGCBaaiqfB3xrWkkTjXYYn1gkOySAj1z/91hqXS0zAHet0P0zov9bAwSnE+j1ycvkfJbaP+k3XbCYf/TVmGkJBoIbaBu8UqxJXwVaxOO5AH7oEQfla2nI5bpZBQa89ASOixHbcvggf/ANu0ZOhZM8rz/7gG/HIa/O8w18smKDVusZv/gA3oyRAMt15LmSvqtLprLJeHT5A1Mm7zI3xx9dtc31fWR+PrdQcqdTwtXF0MMNU6fcAnyMtn1JX0ONwICtxBITEAnERFC7+JVRCayPl7ayhgxiez9H9bLh913Yr2IkFAu5Z0QeZEe8ljS15OfW+euoLeOMEr9PN41v2ZR6LONl8V6NqlV0DHjuQYdffUDEj5ihf9A9mLsZearTQWPDNTDriaub0P5ErKo117QqR7DHvdB6W5QGxqn18sJ1TYKcGDZJt9wShi1qwx2Wdz1zsveOIXMsEvih4M4aBuQxky49JiCCOLPkFQL8WqX9MY8O67TPXLYJFvcget1IRe2Sn0fbg5ynicE81BPTv/v2q0LP80DbNjb8z8VrV97ag25vyDoLSY5k8w1KJoNYW9E05WOk1QepQJAn4aoekKmcnaFprNbVAI+7a9DLr1VP3BoKi1iq6Bmakl8VeBbGN7jV6JAqvJZV5StxciaQA9N3Gn93uyFZEMcqwUPARMBgoe44q9Z+XiXVraBsQ/8w7uuEPeZYHTMzX/wC9Ncn1XD8MGHTng7WUkrOOHZz9vAE+3jqVXiXUhSUXQeC1/lYL0fBuw5QGzAngHAcRfj/WxpeqJMyssOuE/2Rl5QyjOIysGnO9DS15EL5IMb/iM9vW97j2YAMlytJmrJVf8M8ZkPlvCn3aneRRBOKECVApRCjGTvqUmdefTf8Lfn2sb8NWfD+4AGAloYzqlRetkqhi9GpdOCnpVfRJrVkuOl1maSbtZU14yMs9p19NiDF/IZpaF8Vq8jwnRgqgGrmt9URGGhE0VIrMtUlWqvR9cii+UyK04PMEn7I7egF1QNiUUlZl3g9jgcYt+rdclytPIaHxzI7Y+pQnivmmfcuXah7y32KLUGZ1MX/lTas4e2zeD0eYgrJu7oGSiBTYFr7Y7HmhNi2751b5qWIvXAH6UL5XDYtsA4tc06kFEySHtdHtkb+t9Lowlz2EF4zHJVprvNEuIh8yzt+RUqLeykgTHowP82CQoJZaQNZh3AzegRtJt+xgNt6ng/ZgTDhzROdBo77yx2jZqHIVL3M0K90s5/qq5SWeJDsxsF3g=';const _IH='5fed38387d84a2e7ac20d8d7cccebe7d049ad5dea406eb68e696326474739afd';let _src;

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
