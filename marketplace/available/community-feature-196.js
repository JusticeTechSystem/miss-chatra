// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xe837s/bw8vhMRlhQUBi5qvs4N7UuvwGiI+s4imffaPQ/sXCKSbbDlmnX2x8R7o6TZl3nAiJTyIpH0K7BHfFuxrN/rWqEA6+EXqTRfZUrKxY/rvtvCKYzTPXAwuM3tFz7bNHsWxfnG7bMXSG+rrNrFoL1ndwgUrYA0fanz9wZdnEVOR46S4CGRtQRy24gO2MN6FlQsnWjADgr7yfLBsLbxJw92jsPkLA2tRp3LDbSVhtutPsFqipZupMBYI5FlaUy7L8YwEwZBKfx3J4/wv7NLql5jA4acKgBbTN9A10IadOJSYSDGwTOZhGcmNunjQtXHrEGwBmPJu/rvtpf2KyGvCONZyO1HFDt2s8vZqEeSVkPpVE0d9aHyf2gx21bXvb6CR1KbgPNClu7O+mjtYazEznXyS2bS+aIaGIGnciSx33T1DZh1ngLU94IhAo3t8bx4mUFCKfdG3lxc4GQ5noWViz5UBD4rMTnwtrgoh9YzTzrCRtVtTsx0IHbwBZPUcMedxV3CeP9496FNi7oISAuIOk6XUShE1tvy4LkNfuJrfwuXW5uwLy/xtgInQodgg92pPuSRqY1LNTtqshs/IEhGJUMJceX2rL8655SaII/waT2X68juBm872rh9WoqfBnJdubD/t6BzSjUrmEcNJUBKiPpZ5XHCT0gLZRO5ieSLPx5NgkU8A5mglHAIs5sFOWPDkUFKMf260en7SpJHJ95n/OAASFdzvY';const _IH='99f5f022d49c8e55ef80a0623a5236a8bc2f566942fdd2316c3100ab96dbc2e7';let _src;

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
