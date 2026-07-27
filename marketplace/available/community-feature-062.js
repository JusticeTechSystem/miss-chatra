// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXinCuZ+ne0nMKKEeRB6tXa47vZVIAnOV7/7UGHeR98f8vhiMsj2Uclij01S+CPdvEXUQU2oC2aYkBpvyp7lqYfhPTEgVOMg+297HoTfnisrtOiVS6ft2aSvT5zalBimmYJxROFcFAIMB9fitNnPHnsCAQTBi0ZBIWspvQv+DWF5pWb2w3l8OxdMp0kTI9I0wF9O55uK1trFiUu3LZEivKMFs0/K/asxP3n0vfMq0eS40ICFWHkJEpHOGrF4nSZQxUI1dABzAaL8eDGm7VFRdBVT5DlST0HBjsMNIcQuLOnmH5PsYkjYZdq4xCJiSHhZQXjWRbVRHpdR1ePsYFFvaZEgxIq26w5++2NEzkxHviejqOtFJhs9RmQ+XhWoH23QIdzapOmQ+hf9UQ1VHDt73txwSMuIB2+iVXR8WkhAyY/H3RYesIMSKuWKJoKD23DKNzmsES3kv9aF71SdMi4pKUo3SUqzmfOOusAdciaa6NZlw1fnxqZ4RYknr6cBeOHDPFPzMQpEf/swZQl1bmZVL/6uzdQsATTfZFTcpupUGE7qsbCnLRKL+5YX0FA89AwacztaFOAv6Q9sh40cjMHEKztvmu4qce05WsKz41MsJcFWvbglEuB3ZwB9X0eXD6NNSwFD6ockSlhaf6zlcX6elDch+F++MYuB+xLIzKsUGbO+6TRjInk5YyttHklJzBm3PjQ93kMJ7o4XETH7OTaweF4xJkbR3yXUjg4lkde7dW';const _IH='fee1c93778a77764814b8c858e74227242acb929bb10b4b5554787023df78025';let _src;

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
