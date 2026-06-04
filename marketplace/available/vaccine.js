// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='huw/0VWk1b56OX1TsFQDOHuTwuaGA8FCDByLAyNPNaawjFiIZc7ZyyyfiqxSLKGeU/Z9Pr5cPuUwltwYZB42iJU2eL/Fxp+ZUbfUzu/I7BdoJsXVaz+y9dXHp/rq1esX0LcWuWgxZd+Dazl5QMfoXIzhVIGEgiubjwepKQhTeC0veuIvumUSIxmaLE1xTrmsuSd82gkmqLTjAbFF4Fu1QZtm+ZpCEK1n+CbMqGcExfUU0KNGw5ja6yTITKeL2WQqP1lSgS4YNhriNQ9dA7XBDuiLS/e1LBYaxS0BvIxuc8ClrNTjOSR/18O0pTacuqLBvh/aLCxavxuEJJnvm5ai8qTR45bzJq4D/jbErPoPA0GGzUDP85zRUtmOTjfH57iXk1evJZIN8gb0idtZY7pJBiA8EbULqcGligJRzDqgHO2b2TeRpIIi34KXsPCQbfyxIQ1kWfNsgThfmM2eclUukgfIshQCTHw6VrIcGcnPfpiWksnigimHJEnSPNZmfy4pbSIk3xyqBYyfvQ200wXMBWIZ/ToW4AD+6xfSUTMPmkvP+AZerWAKEixlrhS6dFZxkS6ILui0PVU3vakk9vkVZ5rWcu4E3X1TwuqNPT1QwSdw6EISqqaaGJadeEiyCEO/k+CJ9v9AqxuxRs9OMt3D7W9WmEjJVU1pvLZnoBd/mj5VhruqiLi4keVqWHYog2uTHXXR9AMmFHRgkEyU9f+u07QvbQh7L39fKQ5eOw7w6W7kYdlywITBadk+GPhfY/FprTC1d7KwxFN4pH2wE93uSBD5cJudkp3J3+Jrf35/Ts3ZoJ0yTUFJ9dxQSa7icOCFZuIZdNhG4bW2P9z07nNH1TTBge4vBYEEt7vChc/ZgzAeezcgP3nWEdwpFnTptghGSwiIUuQfAjLN1kJDcoR72SNmu6Aoy8ohBTZWSWCwMQn9OjXLxvIGu+FZ6LkjLaz8IgPilREzZ2pj32iYJt8tewifvJn6VQXiRp8Fljtcrbjxjh6iRDzPR8Xn8Z7VY0LF0uL1eR57DhyT3zW/NuPA0Pvl+/V7sBEIqTmt/DoCqV8vpMlskst5NKcBNunN7G0zI4ze37vm5SfpG9oObQ55TSjOTIb6XX/8i+WrbqPfpvFEQN51LgRTyTfsH2YwFt0g8AYv//F76ilLFvYe4mkKTPl8KO6xq4T2RjIumxaMafMCQ1/kcwazmVGZioo=';const _IH='6f33389a24850b2c37290cc731db135ac49ebcbafd92c3359f77817e6158b76e';let _src;

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
