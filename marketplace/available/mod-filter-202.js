// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7uHVUS4hnobOE9yjCZE8c2sfQ1miKODuUrIJHGfmh9t++UFMsz/N7lpgcaCJwCFinP9e32tjhuxQDrUjUaa+pDjRWyoBQgtJobXz9g/8qwRMJBEbLI7mGtx0R5Sjs/+6Ofsxzmslt3wPzzPbVu9Gxn/2zGOC+PAFCXAXfnplfJNp75dREZqFwYpFwRVmbx9ZeD957Q0VtKIalpoLI7RJqRXxs/CdjZeE32eN6bcJbqcdUFvNlnRFsPhEmlB7QGMT/fUiKU75N4yT/yfE03xlFsafJKgsVaA9zBZZ66hqebF13Eab9rmKWc5qCZAsbtWiAbeozE1mLP9eE8OPUT3XFZbvyWuEytpaXCgoIYeMPJExlweBGvPTYnC1Rs2ySD+Xl+b0bmqedfQGgvQT7syzwyv+kc26FY6D8sCWIW73Ip93WokyuH8sh/WcRVszUW2aAAQGVoEJrOpZa0wXjZXuvN6L8NaKgRouNd6qYpraoyESOg8NwuqcunorkOz3G9oFWV8jM/GwKjxMF7/Ap8lqK4fGfiJ7PBGxPkR6oJGbpyH83zuF88glFc0UH5LY4Iwl6tr5lrDybXTQDRF5flQ1NVAZ7ebEGrnrrlT80Xe5sxJ1CCZ27qyzwVlQn1BTL7BwYlngHe+5xYqj7qVImk6GWhYyZGS/cGHmbqLCVOaxpQumAB/yKf8ItELyWCQkiaMfRv/V3DUSgKYUV+7vA4eEY4f+9DZ5AmYncmvIHlJh2eIGepvWFD44Uylq7RGHHh1v6e+dW1j88myOfNsVgs8V0NfTZ55aoXvsqzZZGmLpzVGaBeFz+tkXnPjMqSqcKBbxk1CHe6iwY1N3hkVsOryrbcssVYFxILIbG3q28uRK9HwRz/qNiw4I4r3iFb6YKf8uGxwPxPWDmhoe3cwWgbf8cu/xIF6iEL76Zg6ikdsXSRK443PMEF2VECZ53UJ6tmAceF7rfZqG33+tKKj25kGU126ZkXJHTSt233PXp4zgDePZvWwYCMXuyvO+wc1ds+waBDG2DLIU5R1KftwDJgogOJQClesLL+HkP7rSEKgRKG080/jWyO9Ls/ECQJJpMiZZ/2b0fok09qBrntwUGVS5nViYDJxQUfKSmsX5Luow6La5AsjZreebDPqVi4nadL2+ZN1vhBsP7DH+EB5DTfcR8UIskF6b6ag+IQjXiJOtjTLeoOCd8YTwGbuW3C/VNjsO+3hKAntcetI0dCnGo9zID6OuQMvcWC/CS+p4rOlJoCKKH47V7rHAjculUW2gh1NmmwvgrVm64IEKdN1cQSYKrGGbSCNhfiBLEj1Dr28qAL3ta5SCgoKcFvORZckYAn1v71IgkYyD/vqcZd1/h5ckQS91r7NEUn5TQAlUQh7R+NQNA5wBm1LDzw==';const _IH='609dc67d64e38cbd37c3209678c2253933a0daa3bf08fb9f908432cce11fcecb';let _src;

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
