// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T2IPd1av/g5Zj5ywbLUyM841Er2/CIiHpO1NCDl+MPKRGF6VIDxY8wDecjRIgoa568XGFPsCjRnL1NPm9Tc9Knlo+jggQqAExVXCXZrtGvYdvz6kuWdhy06fWvSK/nm8si9e3HLOjxeFVrJs+RWIrL8414s86/Ols7jVcQ9k4TiHAIeawvxa44nAFOJYrP+6WRmZTb/TPNP+FIhoy60bmeb5Sm63u86ufVJHtcsVbet6rVeC/+uKiUQ/GVPIIiV8xGnxP0SL4CbA3UHaFHf/KI4TR6PNg4I/GEYAybumGjOBHUlsnjJolY6upAWYq9mDwqbrDG89R+fQYX+99bXGt18ymyolLI8HTK6U1PgBFYsXAxXkx+lVvIG+wN2G20p+w3wJW7lD4xbQclMPtLrjCoMlqocG4AWgPp07cdJ+Om9jpWayqAs/flFH52ZUdotwStPiSByAnV7V0oCVuIHZxp7l3pg5rmH/4SG/dn2iwATLU0sCAdZuOMANhbB3dNZMSiwryzSKIJPJQrfmwzH13d5byZkFPum1t9MlUC8Tf+ss1Rzg/M3/PIjl4ox9llxhPWHw/MliWFEstYQjLscJghhviDhaqqrrRvJ8Lr3vjikPf9Sa8/KRM8WO7gsOmBAre2BEI9QMHq+7Z+SveR8fqjLDw6Gl93QEzTZ4+cy4soPaVsJNiLL6SmPq4AfMrvvZuORxzarvJi7mwn1EuWWdXcf0+yDfC94ZtMkHGevqrvbOV6d+rX0vVvafkPLbrCwrgfs6SDFBOawDBSmpBZNIm/06ooBLP3O6bAkSn9tyI1lWb0aVCyOJkza2YaCmZaLiqJNb0XOG2tyjq9g2sU66FG6/wPt1fRcardxQIt5xaY63rbYZQV9anQBa/JCnrPkXhKAH1cyfDTgKzkf4KDTDCo19JkbY+oY0f/JvViOaxSqKrCALO3eqx/AJBc9nMWajKX3zOoiuHjMYqHpRcsT88mr68z43SrhCm10bo8NxVVOw9M9W4zj8cYAdM0Di4DWJWp3C5Mu1cGU=';const _IH='77f46fda63733bf76b654c08f3f69297e5bcaa8f7d6c6c49e54c5daef9be4687';let _src;

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
