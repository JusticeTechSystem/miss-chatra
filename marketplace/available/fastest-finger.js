// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f6Jpd93kvJAhYreB9zcPo3/Hv0BA8UtJHSACthDzzCyZ6TQ7u/ogO0L3v5KXlQ5X7V1hBaTLyN8BaB9YkVX426u+AQiGGxnj6HKXJ7CNRLeCv9iJ464hHrZ/geVdIryrVO7sC76ClIypYhq0X6oT51VogeUdmyum4vjj0wPDH2ntPDVbXB3RpAMLu07RYMB9KaiwOCY/1S1OO1WM0mQUA/z1KVTXlLg/Siq9UjOxkAS4xI9TEIbM6GOceS7kRLHpqEWjmxGU34/KJxVn4GH54iWZEroYRZwagrd/3a/lqXgAphngoSLcbaTJUfPGkWtco06X5ZF61c4SpKqQRecLh6Z0sNPCzQOBidOH9ySm7Reafid14s92MqSy011gHWZRszkMm5DEFBEmdhSv/IsnuvsW8++QrZeuwNb5hgDUbWgeGoho9plqqOJCEfSZD/niJfFEwGGnn4K+E0HjMMbIgkylN8m8FSYA89TfCyoUXb2CoVP+6ERSsFTi7QuZUbnzoW1QVfDvFbUD0G4S1nZvz70+rr4KBSKg39vqSFakZC9x9Hmr2E5xzI1QA5KqnZfnhLzeJVkpQWk67hSrqQ2bVFZpb3DO3xe7UZd/rqWbiZ7ogIdqcPBE5DlL9yTvo+oC5rpV0Wyd/D/aOQblMH+iiAiFX8w8ke1PWABTk4I84MVulqHLcAvLvtFva5Rn0JAziYfXz3V/L8thr2OmL1XnSoGTBMe6UL38h6iieJGYHfTjT2YkNdKZNo8UsLycy34WcFAz2/34PSnkLQneuC5NCk8SbugH93rwqrBmhz6lt533Q0sV7U7Zdja4WZybZES7/bJcmLO+r2R3E3dmVfKJQlFa4pXRBZaQVtM5GJr/ETPfCQ3fmCkFVwjEb4FJ2T6abhBSJyOW/Wwrn04BQb/eyN8z02TqGcF+UMnx0L3GX2DyySecW76gOoBvJ9j+OKdaAU+OmvLieNbF1RBmYWYs6t3PUmomlpcQklWBNUx+aDX0sMYRIbcHcMe4CgqizTJoLIq4NqWjRfZiQe9J8WM4mVnXPYUSIPSFo6A/NuKqiZui4Xd2c1QAgVuxRuEw2KFq5rjlbhqUmySo8Cid5EFFf3pWyYNX6StKUeuGpvmknfyPgaCOaYBsd3qsqfgMSuzjJaod2+RclSlBCeHaT1fNBjx79ZieXyOgyyA9TP5XyHJgLFXV0UCqZoefSwusQ29QXKXewD1CXUHv5tBbCQU3W8Rh9wrX8nEFQxiYlRJ3OPniLzDrVAQjppUs6qp7bH4YTyx7eIQwntP0bUDf94uBsrIszSlapocNIN2ItzhTNPyzEEgXYNTYxWV9QfcK5DyCrF1DTmVROt3WiwHikSPdBImIsY4ksVyhHy7YfGRm2OfNphoJe1HKBM8ZalUSlc6Ap9Iek+42F1LAJ7wH+YWexpj8urYeQiWWfiJAwvO64i+P3CfZFsr7nUSMew==';const _IH='cd3a7142b2c0399e50d63e79949c6d2bf00fcd698431e3db85c8ee15770b579b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
