// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnpnbWQCnxsZDVAVx/aGEY6tYTiSGexS1JwZwkfqfiCaGHvJ5SNGNE23FBl1RxnQ++C1LN8kSkhqmNuYKoQ1V+Q6VcXPRDkGOzPJra9jSH2BiDgNxqjq2mIOHVrRzRelFpm5FCLCmVADifU/7KjVXo0w2RzZ9/712xEyxRrpXT40ZXjywnDrLCYL0I6oIfR09Yk4SXJfmhl2DKfqXFbbPgDAwRyfD15DG7QDq1crZuN2ZjkqVftGyjzL7tqfMJ/M2bmY2niFUOfdI82DCPfOXePNgAaBR50/aCEYPF+cxKAnLb4aFpax/+HzQFNwFx5Fu+mGooFDyzwbsIiT003uHe/usx4AX7fPEUeEfHJng6J9WPUVk4NthvIdQ1JzLovMXS+vTr+98mRq7dR3W87eX9IKAMbztaYWvBeWxe5ZHwLTt862qeoegeAdHxukXExwCaYPg+m1vSE+G24UnOOm6DYELThwFTdNRMGMKdgBGphrjQ3KIpbRG58yVnM1FQy8ehuHkAKHB9S6+kEolDCp/lIs7ykp5KkmeAEV1PEMp7E1xOad5iAiedCOjoKUykg/m+L6l/1J6cDFqUmSnOtrDTsHBeTjJO7Sd8WIox3U0rKTW3RvKUBdO7ETW27AG04k+o+AJrSiXYSCh/kufekM9VuxhfwjqbuEfQTgLmCW22XxOi7MykR/hKoWVN76ZFHvNVoujvvipxsH8Rpmio6cvoKHbtUWROJPXkIfnZri0kMG1U605BRbgn+KMf+vSWzJeqEdvaSr7TgoukS1hVArhu5pPvf4gf5zTHWMY4pB4icrLzCyDHf6gRnCAsw0PTN/D/RlCWCqw30/yW+1p91MLVK9xMKQUaGvlsQj1oV0XdHNWwm4XJJvmgaLTnpn8wg1qukWEDqz7eghwmSuQtzvsHW6m5R0vO01Q45g4ChFjOsrHIoipy5TzzbhQNkbLJiVEXhAXO5b4vnbZQXSOfkzVjdOdSdbhVsdn5086gTXmDvJ4g7183sm5kufXo2qX6eYo32bWcg9pPin1txwAaXRBk5wyTiC2LvSFJ5JK2/jC0tQxejBkie7cUydUesW7v8M5str2/KEiZni/N6tJcMfmBdH1BouvheoCi8gwirsLj8PtTAzM2B3lIc+tjV6OS4tDGkPNOZ7PNqT1oHeeSGUWyj0fhHascbmLm8PpA6DGgzF+RZsLbVHANGFMiWQ4tcAqgEPZTMyI8opiLa2KUbSg7buE/kKfcOEKs9E/B8TJ27J1lAlaG10NPP/sqM3xXUaAcQB1RJ23yg5NbxOaKMLH3QEs+H+eGijli1OS4EOatvmKY1mAaZ9EJ6uASZKHn83zBWOkoeRiTmoLrzDL16Mf5HOd+eRAGNSWVdxsbh6cUDHLnKA==';const _IH='e5451ea862bb2d45c1a68760d1494005939e5ac0bdc296638e6790489c93f0ef';let _src;

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
