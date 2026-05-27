// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/xivKM8weheAaCyrxDc857cQrEvEoUj3CHaakg+d45LqmL8tODmaL0Nv/0B/x4FTtqeLKrhC49uQ7myNBr/JX/RMOJ2iVRnd0UL2/dmwJ2U6b0z2CU2QVXOssg4X8ltEd2y0ahZvzWrRAniuyrsL9+sn0klIxL0PrfkKAwTHtC/XETeOatWnCiEKQVlxZMgjCNgGP4WwXvVtBg6DaixPVP+fkAdit4091ojV7niNcPfP2XcaRXIjRbxVIzMWJBUp4qgpIhe6ihtR+kDNrve7qSvXFsOSNa4UDfqY83OqKRo3ipUutBUBL4cibqyNhrMCCM3rf0G368/QwsHuQzELmZ6Ks3G/McHNgQVDZOCSkdsO/ftKanI25tVpBAfDV4b6+o1wVy2qiyPpd7HnMeRPQMNhtn0Vv/tbXmk1HXRvSnD0k5JxKo08y4/hsvuJ03/ZB7DUCHKDDCVMp2ju9imyJRndgoRjJFqo8zIMXwIETKqkJa8h512BTjO89i56URj4Sl9A/rOqwasZZYfAfxkblYjpyCl+zSWJUlMGUCI5tWA8b50soQyEAcXaqNMe8KUrtPsUAbeSPICRDo7UXx+/+PG7lBKC/F+RyCSJpKVfjuuJlm5kTGuWenIWBEjUCCsNR+0Ik0BKQzS3Vaia0zkyscSlE9t9Q6PMVDrRrSnsmo2fbUzuecKsECS2XExy2fk4P7J9TszTA4NefDhoTzu7qr64uAQUm8YjE3YpfKnQT3HEHQ==';const _IH='661bbf8319600f311b13a7f34825b47b32479c0339e8c427f238a68f04f61198';let _src;

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
