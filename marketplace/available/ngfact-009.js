// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5Nrq1fHQA/gPAvlZY1IKFsLBmPTXwwHd5zz53f2ZdMjXrW2lN7GsxJa4gJuLFWv8BEeWEWRsj2skcEZqbU3Vd2AeHS+Uj0XcVK8XmDv5AWCF1xCSiFJlnmGkZNrN9Hg8L4490F3vaqLDTEIBCXaYCq3p7Xz7G6MqzA/jQsTw5v4uOje/NRp/Mg77Rkup5Rl8McV/dvnGQmuyNkJwmmJMyGp/WvJlulajOZQC9T62FlzTb0reBbjWHoisrk2HW7NZQLyx74ICcS5Izb3ucOAAg6JUn4gre4Hmd6nFNJRzIXaWIHUjpCodz+DoBLpVOHG9esM6gUuSfByXMufjKtvUGNf0sjyvvyPP/jKYV1dZ673ovMOuFVWgiMKYVS2+ggj3uNxNqVKRgsD8bHfbUDn93ZC6p8q52UkpK0ncojsfB1gQEBfUOW5UXnsNxyoWAGEDdnCdZsQNtK0x3QPdE4+/umnOscl0zrQya2QRIwFqH4xcRz+vHO7M7qSH81k1K+4UkmIZ+zLj99b38MbzYHGVUCIYw3sjSKqHgGmg8DwqZVOBMi8PmXDJCPcjPWhg7fxFtnCaekFexQoiUtsg70ZmLe3/of/gBt+lJMXHjhDSxJwGsfyNgLHneJ3WMN22OdDQ4DdEJorS41QhFXyoD2ZsjToIEeP2mk14M/KfG/oFzkaYOEMvdqyp49nAeX1S/OqwFuiLj+Xs3JRzspQ==';const _IH='0cfd8597efacd4e387d30054cd60745df339dc41312c97f483e9006feae341fe';let _src;

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
