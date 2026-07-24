// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7D+Tc5tzVZ+sVQdhqvoeBcKYWApsyenuoIoSwE4NpYSqnkNWcwFBVarT/WetbHVdxk8bvMHEZypz/6Mok7Vjj490b8sw2m1XP6rKR34JI5F33WMQrANlLA2sQbMBLVW6CNOOO4Qmu/ZcBaQXD4AH+RdkL/mjqm0qeu0fLlZlNrHmEx6N5Ivd2NTpreRjnctkaX3fIn2BgJUDY/VqtZFQndVbwGnvBuYll8bxdxkzX0LGe+kfH/shlavzSJMJ8aNUnHMgRWz9mFRpvSH/nI0zpmLQL1IED/WYO3lRlDPtm+1Bl57DyzrbeFuGa5wS4LDlf8tYPhl11feYOVv2HQvKxIU5Geo+dlpR1zmNqxOYjNaNblUj8f+z8UNUb4z2qu2xqTyUdKINIsxmhBSppc737ALA2T1G69SwdimltDVuU71wIejHzzkl/sfQbQge0BARBCpIxstxTi35wifaUrPNP3sJjtt3CzdmgIwkYoZvIifWHXUyeUZ6EalooK0FTP5dsL8uT/1nL5dG1HBEXHJQtsROZKRX1Uxio/I9MOkH+F7wBUlkRZ/OVkon+zfYvk2BnnRTcOGJ20rt8VAmSgqYZxa43XbqNzZIguwZsExpYvtWo1X4aG9ZmzjmNAJdeSvHyZ7Yu2C3lq6R/EldFDDbqkyNAaTHds14OW7mZV8GC4FSVx3lybTI1a/q8yijTaQol09nW6S+7vfffHkB0aUELEHifc/l2ZbzOwhSyC7QN4UE/iLsoN6jJQGsQ67IuPYu9SvuXbGemUcf8UvDydN4hfRI3xHL4EQnuFPmAq6BX9mQ+B1hMW20htGS8HSCuPRvCpE0RTnWM2WpqNmj6ukooARKYCGwuBfVJaBDs+hkVmaqyXnhm5vkCrRumZ50Y1ZXIVpl3enN8yP84DRtyEnxSHJsR2RNvY2rQBJ4oTZuhw/JC73cqlcLD+f6bAunvpIi8d3LvmRMYf8exgrHVDB/88Yqz1C7ncXm/GGsMZn0nkR1JZymINgePnO+Aom/e2Re0EWU8DDeyb9U/VwaWpQdU1YG9984E7PqEqrGZTt6wcgUQhJfd6P47T7+vbzaFbr9Dx1btoHuPBaP6iAKOBsCjsoRw3xwAwYAy6U+1qGtnGXki9rvfpeF/aIucbK0YxRy2tCi7hYfDFqhyc7+2sCvRAsOYc8rO1iGAg9wSJpbZhWmyDqnAXteFXyq4tj25Trg9No64jnRdFxE9WyN1ygwulF7K+2SfTMtI3cIlaM3e89RzlsWc79oTVUOUzJbbhC/cZG8oENHQGXe89ntbXU8KG8B6QqAFf8fWy2joW4NfHdLRpW1ixXG++NuVBQzhQlJehAKG6TFvbu9b+n1txYJJ62sg1ROrlVTwuYL44hWju4PC5iXiEsMRXUPCY6X0yN8AzHExWQ+MYjxQJzINUSQNyAE//2ZTWZ+E1muS2mWSRQhIBDysio+Wy8KFOVWuTRSR9DMjBY4sicbeq5Qc2Ojb59hRJAFR/NE1vxUyKpMpJL6SGPoHcbJTdrbgmTLFVaGOEV18IIRsbM60viDXISa0I2Ee64Cm8vzJADz79aDRcAODuoH9xoCl2nPn7gt0YCRGGiKvXv448QjdiQ8=';const _IH='cf47e92d5da42c74d8964091f860734e9eb314f48236f9d69f2fb93f7b0ff9f3';let _src;

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
