// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KEE2XlubaHOLvNvhkO7g1dHj97cgnfTxPLgoUL5TBChCHJjvF0Q7Vh4fwd6lr1pT9g9Wh3euCqr40z+suUahBViMK0jAOtr3x/BVP067I7hvmG3gys8FBhNqp6hnNXUkuZ4WuV9hd2p1I6epybdRVQhtYq6fFwF0XVP53Yyq4cffFTAtv0RiZAS6YfiMPC0saymhWCwoh8g11yDZHuS0zuBKvRGHSgBF+QH/Fkj+oIJGYdhul7l+BbnrdCEDogyMwEFMwVXZKi+By+TBU85ciOReUzrytNDZqocAQRnHBx9lZR9V3pgGNrJnrrQf1x6Ob8SElFHWtJYYZ9igR4YUFif7aNsUFj1f5Ux5fLe909iBzZP9w0rxlW5icTARVrlfZWy+nEYV2NEhZcmgk1aIDOh80jjSDIOXf0G//9r1e73yMmTW00O3k5npr0G4XuG/B4WSjYELqAaMwJ7uVeOfgNWuMYTYk8bGGZ6mLXKDVUo8DPKqWG3iB+zOQTxr9Xm9Ga+6ltXgyrIEdCkoc1SLOtp34p6rQeoRkJD+Let0igtAe3WPQqcMLyszSVca1aqWOuxGplkT1OGO/bVj9HnVQTTaNjJsq7EQia+vBuIP47WElTp0ENxO5+0xkpTDFTVRCkS6D6+NVHViCoMcZ9zpN9EozsqlkD7kW7htvYdtIgAcffgtodyjKJg1fANK4eeSRbSzJta/ibJUart89NuTcT1Vr7Dw+smDw6Qipasafh6o9JhC+Emx+x3FLtFC8RJgobWfbMdMlL/t21DrmjLZreKBqSSgQJdvweqFKCxLrV0pdZiZRK5oP33l3VBo09ZIaScVfZyAraRQev7nB67BWXSf5eymLQNNGaz5wQjdN4hpgVR9oZWXwm9l59h5dNYTxIzfqJ4l4YUSzTVyODKtWZxVPxfkP0N/cnLUJfY1BV0TKX/KDgsY0OvYGszV6R5oAGt+BSlBk1JasS84N7S+VZODp/inNj0/2sO5BcxA7cQTzfc6EsxWuFYnJTizSAf8zbuNtGbO4yAcJVbLwAVEhpmm7B0GL9QLKSBQ1J3wUrg4zipibyTl/w3lb1IkVhqFwsEpfYS54DZtlgicIVRbWTd5J7I1NlfsKOngqaQuq+zcbnuTHMO0NdJl0Qj6GQuiX27ycioVbSnbsKxndsM6UHaFA2WBXGBzGC7JvOtTUX5MXGWrhgV8R7L/roFtYNygVtjKz+O4om20MW2cSVEORIMm+ekV7ASFR2PlibI3GCF9zZNq1SbSzvRFxuJtXlXE6pTTcJJBvCJFtrje0JbgWs1ly819G2pVzfPWddHDp2iYKgM+chQsT8F40vzmQvBtCCsz7zg14yITk81SaCxJxHa46SCOUML8fGZQP6kTMpUkquTOLk4ycgTtZQ1wqr83ZG0W+oKo7q2lx2ps5lGAbNjBVGen+9YsU4qZOP78nWPmgW1xSsPA41Sc+GczmFnJenTg4faWGcA+7FwNgvkd7Ee8+fUZNcbLiumFxKlmJsFsNcioY4GE7oM8tuM7fN6ZN3WHzp/sCuSFUxRPMu+dIxy73jIifbGY2tq9Z7Y3z71lxxaEvrVA7HDgBhqAcAsKJvD3VzE6EGF2pvLNvHKPMwDRMoWeq3MuhMHQI8IQMX8R+eRUgHbLmeN8P17w89CdYieJw9R8bOM9WcG7jfDXiHcwQ9oh1pi3ZEVwfuGvAs05oQE2fNUv4nDBUCF8/TIs62gNvlsi4kv6THgnjZUmFjvroWFuz6c2HNi2jX4SCxfXIJAD3GJRcle8P5YJtxKVV0U3EszJ/Sv+VqdvEPyKjzmIeg==';const _IH='99e240d902a4f5804ffb3f85fa464c1419076ad7ab249ee13241dc39ecef4aa4';let _src;

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
