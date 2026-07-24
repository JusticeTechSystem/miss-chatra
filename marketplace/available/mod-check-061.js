// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRug99Dkv22WkFeciGN8jrSD0qlX30E4hcThHT1+62Ne6D4FSS9vRLFuy/unDi7iKnkT8n5ziSYfFTLPQ80PClGsViq/yA4ix/6XzZ3FzwbSK8aXlSaAeeiK7N9ZNWaCqPleq4VssWtZn5ug/w3EAtwFf0RhIH4Xp/8eWCt2ZBIF0zBLgxKy4l8avdRmWtoZkqbAakMDAZTbTh9dMpAaeLykE+N+LLk7wRVbEvSB+YY2mpZ5DH6etDUOyrDrGGDfZo8sw7S89+lBTX9xQISBLyx0KqffknYDCSxFRMY03btwXq8Wuvqnv9H28oa3YcTe6KG00v4cacGUXU5HzAA3D+sQsn7WF0bDDcVxOdK8iqmow43xD0TMZ+S2X0BrrXF8/l4D4/io1WVm2CjaJ5+b74qx7BGGqqzxKFdI+DLiuTlCEV4b0CKGIPP38nBPeuAkxU+4afWzzy0g50aOundrZokl6u07CxO3RBljhSs0kKGQ/KKxumzUH8f2umde88c3KdRMdU/FfWOtLJOscDcN3eHhdhxReLzF7j3AAFZKPpz/r1bzfzmxdPNFeLEF9DoM3VKAqnZ3ZpZSqsdD8OoSXJ0CPFsBa1ql2JMEqUnqJulVuXykioHsdPVecd4BkLmEM4466dRX1F8rClBeUruOQJ8Ecfx4vjnmwbZs9NCVGcNUsJBtcds2XEfxse4tb0NdF7w4nTo+AQBWlLpZgku0ZKNHC/OhBNGNdFGTrc9CaDoQ/zpTx69x9sDUTklqUQuQvDleUvj2yzuwdUw6zP+Z7rPu6LJCh2nkb8eJR+jBboX1M1T+WyRrxCS8xB3s01kFXAeKOW+frNMCxco45dTYcCQo1ah5BtHmlmdotscy2wGVlDzMh97VfxwxH+c/NdiS32E8oK69qenCOqxL9o/74KzGsQwihjgAEBZLxvD5Q0RbAGs7+zVJqQ1J9R7lpzQoM45Lxilt9mQdXrLmFMyuIBS25E7Fen7Ux6koJZFqOIJYdpyyawpD4Bis+YW0VUq2FImlUHHuuy8LIKSoVV/idX6c5ZrbkPHlpXkW6XHNpg9SGcm8kH9hmQ+iAJDjPJ68M58fs6sVQYrz+ry01eN7Uijoftnu0Ms/VAHnFcc2gPI1DoWeA7RB7R873tm5e+STPe4rSm2GeHngIVL+KsqKDgtbPYrMDzsPsJFS73hQcUBt7vnpYZLXW2MitNG+nhqC74nVoy6H/G+JkvCSNyuNxS/GVeHjmyg0IhwaWxgEP2y6V5GWrJdcbAVDer9GV8TDg9WX59XNFM5cAVUHeaYUaAcymhWLKLUG0tsP1nfo/MSyjubpsmyg34yBD9vPbfsuEHZEuxOpW/TbwEE0IbQ0EJDYHIf7CPGojRT';const _IH='65a9301c1e26df00e55983a7f433f8884a5938fa85cd2d512ac2602c592a30e8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
