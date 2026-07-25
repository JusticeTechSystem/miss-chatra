// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRL0fyVayh91S0uqnjOHOmZlg1yZ51zqHtpVFVgrstadoZ4qS60mU0T2/HkF3IZQCnCRmeKXJVMP/tuaO6dhCJSHPbwCFzMiXpx3RpShZuWOxeqWUZlm5ggiU/gb7Re+E/2C9Z+h25GtMlITxT6S6Z/1mtdvYzGKqYifeg3ko6G2RrJ059uxcBXIhzkOnXFw0l13tGsT27//XWjESrWaGGarSYl533NxutIAjVkMvxOCM6PLBGTVlscc9RqC/FvB4RE/Nvv8OtAnjWPF69gFR3vxvME6fgd1jMyuTAtXW91t+dfoR2iYOgXukcFdMrRxrAOvzRGYR96xVwBYzZgzACVHpTK3UHCmR4Qsgg4Pi/Qu43hgSPEgLxd8gHnYgAin15DET3a4NVFbwXhQ9YdlpKwdx5cd40T+tinf2IlFipR5VoF87jPS65LxpyjYG1CiFUvCUEV152yaL+v4uybQdP5g650XWjXrPs15epTn18vDAwSkBIIesyzAotbgSVNvGSjKuR7ezF0KfdqNKI9Hn8At8twJR+cFGW/xxXUKhZLBvwIOhxjeKd0cs5C5UGfErDk7fWhSg3b7Hy/iucgz0d5k163fZS1Yslim+EuS1wq9xgLfIjTfKOuR1d/aRCuB4DyRUTh65qkH4J94en/s1lfX5LYo42zx/vscEzEBSHB/Vqw60HA79zw29wVomk+WEdXGdbbySVOuhnrjRTeGmDNDTtGboh9N9PaS4E/En0fwgPG';const _IH='4f199a4721a749f59c33de1d1f185a247ceb3f87430d9b70e404587558c98f0a';let _src;

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
