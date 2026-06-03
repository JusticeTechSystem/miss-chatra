// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sdgpDemVCUhGHWY8fK0XJFusjbZvuXXtY9dYQx2z6F/E9qzqPe2+DOobsWmgojvQaVe1WfEAEo5MAZW5ffqfG1knWUHjgM2b4fsGoBDaBWMzPKnmeihpBHZbsUZhV8cbYBvTDk18kqVmLOrIvEyAUOsTdS4IoVC1DtoTlonTIqCOY6dGwhZJLSV3bt4ItGKOaWmfEM37bKciviQ1tCN2YmGW/XmxoplbjDyfuynv9w0p1fXSsIE+O4aks7IlJUdnf8fx3sC7GtRYO7Oe+EnbvISFf6ZoXFrkJyES5b4k6hjuz/eQVnKGOvd+E9l+yt5WG5HcWIzVQOdqABSJg4EgndhIjdiOTC8yqh8URbe8qbWMLobRD3o3VsXiaf6gC0MKBJJuMfWQdnG0OGpPfE7KF1/2NbILKfIYf3w6IwigI6Fz014SCvWD9qxdvvotT6v/51VHHO7WYEKfVfeUrRtiwCB/T7BAqeFmJwV4EDWOWC5deePYBxyIoo9JE08N1+22bT8o6fmLFxZzzEjM9FtjpBJfTaKKeDRgWAXQ90UFITtOMDU9d7dlSwJIychFXORVveRn3KpB2KHxJwHVqaEih5C1SkpDRbpF3Idh/EhqRJlWgno9lCCLBHeOp0o8O/e2gg6ncnbiQvnP2VHrtuFhC9hOx4iJYAIRFHDCMDd+L+AnVuhEKAyohjZCgtpgDXSxKxcTim2+ZtUOnU5lHvHb2sk0s/U0m1xSkNS6NZM=';const _IH='28de9f667a525b55a9730f92c95a4e762f7d0f6cb70f0edf4707ffdd7444826a';let _src;

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
