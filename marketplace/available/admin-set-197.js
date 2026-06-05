// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PpK2wyNeCMTl3WNfFdMWXxqhOUHmVcLnsM2VjMU0pXPpfyS3ZxyAgBgnrOXB9/9iWFyBoyvDrRrWB/qxEYtdu8uTWxS+aqD60xF0ZXtrSUSJWFkkh8Ce9sBV+6bR3hyHy297VHR8J6I9NsG4ZpP4u+SO3SkW8L+6l5Ml9wTKtu5N3xFI+p+YT1wAaF+vAJO9v4FIpTrI3ssPRjXETy++ZdfQpKh552J48kDlSn3CK0iljumJfKvcm9nl4QK0xqbKEMm7ivavM4nhMbU7SawXcoYhpH3rCJSV6vH0XHDBveSucj/U8j4HEIXIU/lmEmjP4dt5Ku1LIFaI/aD+pd2O5V/mhSrbW052yNfDyFT6RqteWvGHZpLW69P+i8yQog37nYVhGfPP2YTKRsoWu6e5jhSY6ZpaleEyzlNCyi+WWY7LS1lhmNxiFdhrNGguknCzipsaMfNnzLvqsmSUyy8Dcd77AB66Z/syqIGNoBOFmZRyDxzqnHeFbkwsYksCxYk4Tkj+MY0Qj/yopJXHVMZd1QK2cKpQxQ4oPbsr5wAcoO3FPpEyxRI2TxdvGTrcEq20cqPWgOCM7rEFMNbKgyJxBOixjJHe0U0okAYvw+EK5RVVnVtcPMjCHien06+5rjFNWsg4AYC/JK19ad4swvw9WXN0BJsrzwsNWxluNT3HL+Z19qcoicI3HArjOJkc2OKxOMhIKOe7f/pM8/dmRoziPF54H55j18Zm3ZGlyPYi26uxdCuQ1ZWNvfvU0GtOtd1xc0pQeXQ45YjpACGaPETuAluEeuCdcg8yns3VmedXUm1QRGQzORfa2d8l0mTogE6vXyrq7C1No1BQN07iKLdTbQks6b7QmjKC0Qbb4bc70AStsOAX5xmtySCBqqzMvLpEdHTGAJAv16OvTckOsfRGPayCyrBxRyVMaKpydZ2t5a4DPXzM6KoRUm8fTd/d8Spq1+r/w0fdG5xgA4PQM6i9rVuYLvk2NoVH6OMl4Q==';const _IH='9fb23379aa4b75dcfdc133b4e6c4fa0c488822bac4de79e36bbdabb0c420eaf1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
