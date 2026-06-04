// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='88IBaF6v/Ry7BBdZVfw1qeCORF94CMzpcA2DCFfg0f7+tj4MU0LDXSwZu2Uht1AlYFwB3DsP0FC6ggkY5fEv8XwEXABK68yE/foFqvYYPQNsOEcsmamHjlPhs4U7XFYascM5cLADtpVjz8rz7QsU3rP14UzbDFtzehgo4e7v1q/JD3vOmcgLGZwkQKwz9oy5dMfWeMlYyipzVcir+6Sa/PbCtpfu98EChTxqpzgV0hel8wDYThgYOb3XUqUfgRmqsu2Ds1b93BD8iZZBstqZwMtxJes6hveJPs48AV4RanFPEqsGWbKNcUNINNYp6zQyRkm2KXa9PnD8polYonAwf3s5fr9srJlEcueEsfYifO/oM8qeJcz2M3kV9uIZ+8z4fVNEKScSGpwDBZ0Ftt6JXgHhf/9PEEBnJ8M8Gby9a33rUzR/WqCdrWI3+zzof+DXeA5hOVd9EZhISBhzBkJVA55JtweJjue06XuPMxt0KYyY9LBMwtDmRDDlFq35D/RGGtPiXmvGBuf2Zo0TBHi2XjLwskiUliyEvPVsQXJv/sSZ0g6v/PzzMhZENt3HM79HK2rvRGrDxYTfxZrfqLCM1efjwR6G5Qy/TB+kYlIS/FQmb2CI4JVUFSV42K6HiUcNph7gLMYStBmJNHxC8nIBscruxglSvGCgIXtGt5fyv56cQaBXer1Cow0iPRksj4F/RviAVkk94obyU/+S6Fi5i8bN0TNYhXHT';const _IH='a7c4cbecae40fa2a38da9c635695226ef457d612febf35830985a49930f3a962';let _src;

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
