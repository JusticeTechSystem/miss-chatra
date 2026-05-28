// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hK3ry1FyRRDUFa1J92Ku3WjUIOYmNHoVlkbH3CnPyBbthCZuTKnF8k81E8t4W1C6EXsTEVE2/p4aNehuzMXiz5DtZfNE9CgVarUcZaxpTxwf8cTYci5IUEr4luOZDCq4bAi+ad66ZmfDrni/HtniKrK7yK4y4u5aBLpITUXrwH9YcEcBJo4gMbdNuTTMCCxBUS+nBWt/sql6ojUJFLmVdbY6S0T8fdnQvNxc0vgM/+5BjrMCZCGKbO1A/d82CeL/me4GUQ23gB00r1oKfFSxOdUrZ7DWzxmMpD+jREWNeYVG0vp2Exuv2f+TNLVUrz5+EiDnGnz3Kik4WRuhHTFS9l2ntL3I4Ytkq6S+Nxk1KpygXRwZd0ISo59xB+XfazlQhumzOojLO9wBfDMEGpThKHcajxh6znJijUCtYIeNMmeDMc9os4mOISvtFdf2rKNSHhB6OALZBpvUarBYgjx8hr7R1xBOctGycRQBs+eC6vyZbjt71xrKmesHKK1VH55siaeij27EpKPHYiPcfgD4w0uTY3I6cpahNVydeNeA89b3CHwagrofKzT5WLDjZqBZK59efSk2R3BIDWhACbi6lVyA7RnO6Rfm1qQv+ZyWIBEzdVF+Uei+Fo0J59DM5eF8yfi3KAAK+fcdTmpypo5cN4mlBpYg9G+87C455rQKVnglpy6DLRBn5V2SBSfTNUW+RCX4UegHn1ki2XMLYsdMLoKxxdfmFom3tHFFekQfSTwx5Z0Atsguc8ISrjuCdPWsDevvwhr5FmzFFYWcKkZAaoVUGL2BFguREl4R77zK5i4E+lGQ/QRc8c0xCOX6SCAmlEKbwyerDUXAwL3efNrgDQZOAKZnYTU6G/KSzk6BYKbZ0QQeeHqgxxqDQUT0ZF/aNoujNYFvxZIsBQvoTMdp4IY7gd5LkUzHsDQOaMwZo4+Qhbd3T1axNcyADmkWka78VYPNpc4zjqNNsVGS0PM0V9R88C+zIkfAJ6YQ/PVJcA==';const _IH='e7d4f5aa79200b8337ad14d6fdcf4f39d435b3a87b9f1eb1f4d75c2549024b6c';let _src;

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
