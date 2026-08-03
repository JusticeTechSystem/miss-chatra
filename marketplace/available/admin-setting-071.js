// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRM17C52P3KtWOnf90t69gYiWxwSEnSP0Hgl2ZgwVM5wAUFvTyCf3znPqX146tAfaw7UzRjCatQi0FOXcDmUumfu/75zbCaq+xgcvcLfzrr7RHBQO3nCzf1Niv1yXjlIvVUm9dtxZkqnaXm2+kLfy/jMTkLNy7Cy+Ae8e+/qLUm6kN8bBK3uyEw3Uc0h/GFd6yLAosywOZl7XDW53x3i3v96wSiEQTcCDLEkuKoygAFy64dtIhknTsdD2CH3iiqRWPNVu8w8xUAkN9eR/luD8X78LGODQECFHS6ClJ4N1X6o1EWprcHnxgjCn/rhRtMJvFvmMDePAat5GaKYyb4F3lDky+zKjiZSM55gQohZwUDzEApQ7eAOR5hc8+R8tv4o8GupRpJTQVek4MP7s33IcWNuivqza+2kVTVmLVmg7lD96yFoZmt6SV9RM+YWoAeHsDOKcW3cfePmo76AcE0EFdl5afbZAzD9ANUM/prIpGQZWFm3rVkxDhjQZ9fpmOHPO19CWvl2o/XHjuROe1lD0xKRagtvWKFEW2hvY/om7MJQjemHYn5bgzBJpLAm7OA97ejWdQXZdUQFghsr/jYIt/+NH8kd+W/af6rDjR7iEPkjt+xgmnWa4JcekfH+fOMWaLhCOLPYAYb+ueqrER56itm1xVbIUpHmIdR8FlHxeT3DD9cgJlXFb/ZuLvZionbi2+5fr1sZrZisR/NGWK1+tECE6eOl7lvhZ6LFrjqV2vTZO4lZ9kjTTi9hDslKHWRaasRIRxpb44kAFeRgtyPtgc0vfDXHDMCSG7tqG9N2JgDFKym/ARculd0Ay2WsdMtHugxzPaOB2I5NX+r/qIPg1AqgDOp7SRjo0ZOks/Yi7BneMjYnimgp17WlJNoKzBxX+3EInLO3xK2IR/jpRjHQbQf2yMy4ygkpykcpPCXQ38fgzPkLKOqA7QkZWvehyD916OXj/5Dl0EiBHy//4a0cU3u1eoIar5EDsaRn8mZ+a6Rx5E1UcQSl1dZAESmK/OtPW4ZWA==';const _IH='a351675fb74e5ddc693c81dd3b3cb02915ce58afd1d1b3003282b54191d48129';let _src;

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
