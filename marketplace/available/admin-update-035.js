// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKLLvtchEHpfLXk7G9V1oTeBZVCQ1wcbC6J+LZ34XgA/ExUtl8svT28xCuL/huD8s0HXu1uTtoKZ2eDsSQ6CLpBTVMnWvvkTLDpVpoupYULsrs59tujn13FGewFdvbTvrGwNzfz/jPwAwUJYgOZq3lYWu89xqgliSh8eS67UmCFerna1Gk7RHQhE8M7NjMVRviwvT119t73wWRhHBGx7GuNSJxY7ui9VWl0HJOJsNUAS1kok5UwA5OwXOY6gnHP4NKEzYrETpu9xB+M0hi5HoVKWKFA1i66SJjk2w+GpRf9bQ4PQ4oWMM2SY/l5nRpQhV3VhShafhkWbaNkMvMGGfShez4RQpXEWW7tO3Wmr6knvbPSdad5daLH2/luT6WW9FoDLCCHADrVGTqAUtpazxU2Z0EOvW00v2FYgp/WfG6l5zeYckeCG2ZseJPHRx95f5pslFupIaPpXl9pIaZcFcU3VK6sjfp49VnAm7YzZWh3W037RJ9Ce8hSIlv2dhQpYTEp+xlJ7FyQAQTgrXy310UXL+3oxYIe9HXz/o3I8MQYVi3bHgXeZ79UtzIVdAveztLAd0YdOYK9CuxXeVZ9JAFD8O+lC/xghwNCft1X6xf8evcp9gSaVr6kdPO/ekHh67uLd+Dgig8cNdWDxXLwgpDZpVlsZvRTNU4ntTtzAdq1sNCeECJUY0K5duG9v9iNxPGPo2VFJqPjWPeLYfhGQVhMmUXPR1+5PIXenK9kOSw4clAG5LGuvw3aC8wcC7cDS9T9C+itqkObQdamOncxGBQUsCMVUmu1bYKokByj2brKjQ0nr+t8DKfzAn+ZzUI9WoOtC3iF7aQPRdnJnHRmqerNgSA0WaKg4LmNFYYOFkXO6Z2PiUiO5VFqpfLiQR9wQoq/wEX2kAKtFB/VaozHJoO8kvmCe8WnEhnX8Mh1hupAmsngtlcMFSJW+lFOjM4v/OyhUS0OU9wEdOoeaY1fw+Ziz0BzqL60kiLPpsYvgWvD7EdB1UWk/pj8XTPZnI=';const _IH='be13e492f51de497977c043ece231188f22e44d89734cf23d1c5407593f00531';let _src;

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
