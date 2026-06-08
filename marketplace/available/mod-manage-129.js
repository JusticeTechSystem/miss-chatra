// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7vyTTHe+2kvtGVXaaNJe2PxTqAhXVs/3CPORyftyBR9AiMOnSPyI8dgaykmzt01qC3rJ6CsT21eEQ11wU+tbm/RVIsnJMzwXemd8ooHsrigEhF1rL9S/5quYhy7QcdzGcfVUHami+6Z1UlflVhl8CsV5uKpcoPFQiVN6ekoXlGJFDNoedgFZURKotaAZDwpfQA/+8JIk5rUVV2aHpgSnr5jPczxHihKcWl/VFj9SR0YNfBMsPHKUFix3u/ShDLG/EL/H3vpFH15t3Rzv0bsuHeNDgYRlbi5tg5qaT02J/29mP/EZDFiHoiS4RAg6ysTDoDbE3lLpFRTDC1cN5XtSBS/+02cmzIIoF7qIWV41e/rmhqR3P+QieaSAtIk2vApAIAVwy/KcOYhH5SN91RAggYSffqJnHu4aNq+3f4dsxuCw7+WQT1cZZ0322humCXEA7DA/xrtcnPn6rtE/adZCIKvh0fDtBlmWmgLD7vOPPLJa3aZr+iHOOC7z92tHgRqNm5iqOocLltqFOmVnypEPB0quyA1sbqGguHUwBBnMKNCI+6YdtNOuc4dpnclodXIQaqa7KA3LFhY+om4ojwUDZeyyHrM2V0303WAeEBEd382Ky/c6KUV9LyYJkK9mk0PlMCNo75BlSqVx2m5YG73N/Hoh5Ho0mslhtSooWLNm9+aTh/xmZQJeJs9eIHPLM7FdUbsbRI/Al01KadVBweLAB1r5cer2D2EzqQvmovwQeT0bNl/FT/I4GJYOyiwPXCoEvx01dT3xWgbmSh7zxtQmroFVUTTc3I7CuWuM6rybSG3xGai02Btdt3PpgiqsQLPX2H9JQPefScte4y8/ERttgazanYEo43ahFmKrX8eX8DzAsNP2pRPDjB0RZWSrVm/r/1/uvuvzYtYo3qgyI9IxBxgSel+FM/Q9vnBRu6aDpGgjok6G6VqOduQFDXZfSvUzpJQvMIuBMQxGJfDUSDnyv1LO3kc4fOBwUJF4zyNBRLVhkPPuwYg2z9U/Hyx8jIZQtNQGHlHCbnCfPIH6mjFimgL+XD3eF3yMaFLF6n7OsdBdv1yfbHd+8vuvaXcamjfhNuCSYTJrmCoD1TDyDso5Vz5fyBfg/HvNUeLUXIg1e26HHofK0FRdyhXgedNyoFMfILhhnp87ezZage7ZlA9aYy6tOqGDV0K/O3ZE/Zf+lkfaVJrh43vXUiOW8t0QnIoSsKqKmOcDnXfjkERAMu0XOZo/ZJLvyDAA7lkVDyP9QkgN4OAV6XmugSIOWYcx4l342zHJOduJVRxAj8g4awydwl08j/WpZb7/+QdCsiLnyfB5zePUqjdiCmQbFzzkJ1Ukon+AZ2DO0mWcUcimXO+y6jaHeBobussG1sVqNJn2wGpG/R2A6DFWOw==';const _IH='8aad101f8b57718201458786dfe68d3975a68a0d66868a3b49b316448ba31ffa';let _src;

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
