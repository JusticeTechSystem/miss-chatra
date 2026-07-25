// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ9Y5PGwDIKIALVvXa7o+TNCVJEAPc/G1+sJaIQRUE1oc8tSciZ+R5iszUVKUiXrtUcr9KE+W9LF1JOQoMI4Rwb1gUuvjFTjW+RNo6vqzxlto+XQf50BaBHxemwnYaX+Bvalri8XA3pBdo7v+JdfNhYNpXForsfC47k0Uq7LcVpSaqxBgmwSaLdr1MtfBdz9e/IwFkGl6E8uwsqCsBoJEsKtUg1EcA/rzG568d6okqHE9Fv5TfqBpZDSXVVAoqqFZtIUZbhAT7YSmWnP073aWjLTHb00McnNT8hxOU+URpl4tG+TLewcxW5XRzS5ZklBUi67kc7r7ptXSIkLMBwk5c9bCnp1P9/BjneiFMq2u1Hie2RtHtmZWmoCA145FJI/n6/SWlUNfaE6UkbXwbDHC5UUfOZXHHg20o2KvklUDGsjCUyLVjHzM8RxlW99Wqf5HdEGAhHdig6Dg5WBv8SMrm5C2YvAf+NlzMbFumfSYj7Pwpe8Ahqb+73w5NtaY8RO1kcT+FCG538m9PkdRB5qzEo87M1CSLplkovkQjU/4GRsvyWNISdoGjCP7EwnlSZvrn2s1F5yphpPm4EZ2PLAB0OSltKIFzG64tmya5RTzXRgUm1Q0jJwWZjtUy4+YpGEZ8A01fFL8059G3vbhobyAmJnvUmxFc1W4JNWfMISz9HWbrfO7kintbhNgk7ICSUm6vsfACZYsFqPYx4DlnyLXPqDWqzFIhI2Wa6uugcyBI5FFV5oZmFGJFIUyY15cdo3CxPsLs9fO50w55Fukk614Dg295zJ6EGHVosuyj2/yVX8HrtLFIFY6mO+mHFkuVhGYuigopY7osi/ImMTCtgE+65wREnO1t723bzDoovKvirdkz8jCpu/5V5uFnMuTinfBGEI1byZL192jEO/Jq5roAwa7osOFrsUC0Isq0D6XnPYpCvmW6GApsucsEWLh7wDVqZh21TLkauqhlbgZu7UpOzRXS1JEn4qHgOnKGeWpBw4semie2Mhl0wEEfIv0XhhrTg2nChF5CoXjObebvn8PEmPil3HcYxIBoZn16XcK0g8JgrHay8zoVb1Lonzo2OoXPGYAWdC+ZefGJ8MrVNhhyfNUpYGwGuoL3gEgjpl7t85PEA/UK/vrdsj98jIXcwdSOC8/Se2FIPnGasrzYj54VXoON/BW5xwyTx9nKqrCNoBl9oI+lNxiz2IcsswAiY9mokogCWowuB0vaSK+XTReKyC0=';const _IH='85b19e8056aa13e22d6937cfaf8ebcddc2a387814c33b3a1257a3bb1cadb62bd';let _src;

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
