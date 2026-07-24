// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1ZRM4WkTbZ3tkGEan9kiaupXHftQXkB6MIDHc1AlZl2F2yUEA/VMKdFKv5nd1Af7fSXU8NWAsP3axyH0Ea/FIy0HzBzI7t7/BsNylvo3ydI3KXHA9qbAf4FoSss1wQrV3Y+i7gWmGmRvDCrEjvohoJyhJZcgziLpaFBsbF1/NJVVCXxTlA4iEpFfeIW7QyEQQJyOPmPTaK/aMTEA0hrvZevgt/LGlrDdnlEyUy/hk7VgwTEHU2IeAp/1hMomxqvV9bTZe9rJtiEfPa/5AYaDYp3jL13yinWjc5wZk46sSHwTBsgDOk2hN9ZIMt2A6+yi6vGl4sFRPrVIfdFDMmJ4Lt6mAX/QrEbdPQq6k1bAh7/oiuae/2p/dHcJaPqYNcprNu3lqoRS2eBsgqhtLXysgfTUV35eYMojmZhh3xxHU26TFoAJZtaScW9l02+pT2My+RP4LrruM5mGI51PNBuBhsBMUZpI+pohK33MZsDqNhwJUlsOl91kDsucWKwAzTtEivF7bodpwLr19Kd3WpOR/crNbrJg6sMB7cCG1TZ+U9JYh//3n3QuY1Wqvb6gvaIy1eIN77w6Cf5Jq4aSjNyvBDDhhQno0SD2mU/sseJh24xFfWpFT65+j/JTPiYdY3inCra+EA+uXUeOwfvppd245f3LY3kTckaqopnp5/+En/9cgxBudsLx3EOidWxozdUzdmn2LDBU6qK0kHLGfUijtFBtwJOM2xoaSNCAHOEO54QX8H6wYVRsSSwu1Nu5PcXdU11cK+MZ9fZgeidOfxw5HfC4hyns4e5CkX7I/xE2KadfQecTwxLL1fEewgQfevtPWQ4xDeW89PEYduzfi+gajEwhnj2ecqGwyNs8ZHsQBOpGTmPqevkOzemMp3DykIAvzN3B7/yOXMH58ZK5zz1+CcIv/0q3JfQsbtgNueIhmX8SX+WdFARJ8I6fl92MaJ2R55pSjs48+NMGcQq+1ZdXUxtCjyyFnpQ+zbhqR9EHicu9scbEykztafcbeDxxNebDH8GJQOgXR3wM1pvMbS+j61CI7Pl9IPWLBfC5yqLrFnBgdBh4H34D9DBHHCLV88CL5kmnwmqUclONvoigxZ7ByO6haw9RDF5pEBkFonntv18mfr+pMl6M80uu+iz6j0W2sEPAvmnO2L8jv1zDRKIlO/o6tpqskBs0CE4mfbbINLbgd48dBFzZ/JBKR38uf47WuCljALRd2eQ==';const _IH='e505dcc2247397294dac6fa29fac7a221aac846c69f68613d3b9f92bae63bab5';let _src;

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
