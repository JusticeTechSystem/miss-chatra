// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isHDapw6lLPgZhwaJnMa4+tAMijagSmwO5eoycTilw+j0ZUV0Q8fFE/MM17hPiV2Y8zH1mW7UJCac/HSGuQlBhSTwlGdvlxH5Hs68zgz1tx8NN0MEffWeXOcAZqD520lSI70MqtJE3nZ38H5HrqsKZoCS8fwvNmknr5MDd/Vux+upe34DaazJyytp38F7dJQ5QHpaY0jRr4OLTahiOd/q0nj548dRmNoS0qYx0Z/IL1IIcxB05c7pIZUsLghWokn0S+R40SZBXE/O77HfnYeYRGgt0a/L0L0iCiAxOvHfuR8Qdryl5vwRQb2jXwqzcbBy7zw6TeW/7K+JKnA6E50qR/YpzRSeB0f37dHL5tYviPPbepavokbOFkbHuRZjDzLx/Siv7E55sJkgd2V1wyh5IjXk7XMLgV1lwLAgQA/mj+zoauq3p6m1K8aN1UYAsBNbYOk2Gvylzsv0TCPnHWPgyT41VmD6y9cu3MTjZdC+EzSBJUXn9cPFDaw5/SXhzsHTAL0dkzWjZkg68fa7SZG8N0mwyVF5XN5noHZwWvHNe35JmbnUFRaobxPgsCiokQDmi5fNN5dHhyMFZ4d9Dd/xl14hTTFpG947uq477ONbAu1nIE+Y90AXL1fMk08SEwjivxFNwFRGOgPtpxBgVKV5jPXTAkjIzuXZhguS1ol12uL33VFxz9O61IPSiYLQU14RDtNCfvZb66NuSphNGU7xFr7A7Z0aHuc8ownA+ylITWIGp5qmVc=';const _IH='886f01d8d89fbf1c3b67123f48c210af5d7f1308e23f744d9836271b53a96446';let _src;

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
