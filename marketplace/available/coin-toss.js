// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lgva+6h8jZOQMXiQO0UdNXBgpa7F7S+Mif+oUWPDf3Uxw/QiEt/PlHi/C1LmXaprWDjxc8pUaRJbY9yXPonVlmIbwq5go0EJxNPfMEMcSi/rcxjVWUeJm87oz+dT85upPrAgaS2DU0aCyA25+kDAMIHs4cgduUnSKKYgUiZ3ZoGanQq/Xdg+0GMOoHmha3X7y6VQ3gJlrwnGUeN/4iCwMOZpxPWwDsyXCGJsA0Tk3le14SGCXgtUj8LQ3dIL+25bvfm2zLkmTLeGO17D3X1G7b1qz5qcIweHzB6MW/SsM6m3CfAwfNRzgpglHunBdlR/lFbMPUSNbE+Y8xIzq/d8Ip8HumKl6AOHlhrIkVCcoBSfc9TlKm0vEFadtBkgtBNSqAPXsJ50zAszntzq3sCyc9RZ6vzRwSn8+fSX6H6/YmAbWitYQcJIi5Eupn0Rgm+BS8EnVsvDJXC70KkDKj6uOJ0klujJhd6uCT5eGb0ResCIK2UGdL5O7ycMBoCXu6vM7TWY1jnkfYBDXLdRPcEqO6BWDgKFxC9E0+d/6adzOD4LIjhn6lf53ND/Q/KsdzAg6HjAOHSyHZvSWKjzQFZFzmj8RcacRA6KsuDadoat71ygKcY2az077QLJW0z1tPVkKLljHpY78CAQGx+X0XHFRfBLEprEHit4DRtU3xhlD/VQxwgu/UoSXuAZtnQsp0P2tRhzBOSF70ewlYv5ZGvck4XzpeMOMqhXPyFQxqyyYPqkNhFmkpVn2vKUKnS4rh1GznH6keoZGjiviWoEuT+e5ndcNJHrIGbRIQ==';const _IH='c44b53de8a66c127629f9cad0d355cf7f75ba2c392670ebc0fd7c3ce1cc77233';let _src;

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
