// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1wRwWreWFbr02p0sq/8t9WVJC8A1BstLQwWNiGSMs7J0waI7DGNOLPqltHuk4RmilgETCzyHRQq+q1Dvf4op60fj19AihcxPL7Im6OSDpkgWGYW7MqJfBQg+I6fr2ofPW/YnG4+kH0VuZT4GZAjNNkmpHlFYxX9dhZDKqdkUJRTkiQLA5Eu1ma6eSi6cvYNNdjbyU4u6LkEtjNpzI39tP+FCLlkwpGeRQ3s8bFGIw6qQ9QDB3BLeIF+mdsV+X1/H3W0k8/xDsEhQityq2rprgXX6yB/E5EQKF2YG9JeNxGSw7ldZjEce7U6EB6FrJ9Lsk+lHhU+LRECuTZNVYsY/NCTclBou0nHQJ9Hy91Hgkd++95YTjxHpRb0f4zNKzPpHUB5QF3XCw/r8AmBiQV5JGHnXcXvyler9P3b4Is+wwVXNhbA/Dl5xR2QGma7FZxXWDzXdE9RYwNdRpW8G0GYKiUy1vmlJKlR6SlTqRFThuJQcsLLwHwDgl3p8onEtLzQ3J/VWK7CvJ+LxgdVZdVPUmW7RQXcgH88Wj6+XzvMPI2IUAJxxoBoWfLzZLbxuUY+dmSmclCm9kRaW/Ta1irCz810Y/ABmpfIUEUts9jqE5fR0sdhbHEZZ5abCPJy6omm4aqV2hzOvANTQrl8sJi8KMUlHIng1MYxqZq09f5T6pQryldNF1gmPIg08ay1QOMS2+mrpNg9KVb6UpY+/vGWkb2ZRYP3ATxZlp2pzbZm2QZ50PPfxJEcu96aAe1eMNO+dwc99yf2UZe5NUwK+qqDem2IStv3IrP34RE0wWaKVk7unRmYh6BHwTyawI5C4L8v2CYhpuO3qI+tq40NaujaDd5OpoymZgWatJaYlzW8squzjmjiX3VshN2eGgou8z/ov7xbeyTbZsP8wmNXptYpV6f4Q8k9ITscwFB4Qp/KJCCoVr0YsA873KPEq7u5uDj1h4vz3LhKgSXPcgf36Ah9OiIkv5Yfa5a1OYmdT8RSs05hUZ95cWhvfxH3nvqIf5l/MSFK2tOY25RnzcHJ+1sXbAoDulhyBpSvG0HPjZD92DVDNVJ8y7ZMgujHXZx97qLUSmeuQklAShz5yvPNSoWuxStIdwcxrjDAH3BnFtZ+aoGXb+Fz0Rd2VmUIyoeS0U8dh6DWoncrFPsz3IWrPGM4nbJaUV4GcA1zHLxZazA102cW8Wuo0mhpaD1uP7gn7kmi0EWPH';const _IH='d4809656c2b87fb8ec9d4c8b8e1a31370b6b6c8226f2aa2ca055570d28ddd386';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
