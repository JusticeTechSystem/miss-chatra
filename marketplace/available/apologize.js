// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR62/fMDji2f9c9gUwOgp3uXRBO4BsJF9OHQ0RcYS92q9cfH6K1E4wPhonkOBsLdkpDeu0jE55CSYWn4MJ3V1M1/xrsonbLtQRHp73buO/jXv6VCz3OtUBivU58yIbtA1rVmf9/VtLcalZqPzSL8uSvVjbR7OwruAIYU+oEqs/cDPqtmZvQGMc3FN0J3bMeixg+qvfCnKdRslVdW9zB34AtskI3VQgAD8mavasyU+HMbqjv6Despx0fGNanuMhwXwkZ5lQvxrxYL7uv3d6UKSWxoyIQLUg15FgT1k3+Q8fw17crAYDy05ImjEtaQ7O/oCxPnjHWT+uINDwwGjy4ml1us0fX+yc/4i2cwAHQy7MdBVvI/DmLltUvTMks7i0WqOhQ7szKmOqmteFXBR4TIvBzMtLpi9sG1eCQ6o9sd/UXEPaDvnvAUUi0XJo8yvyNgzXaPE1unkDktz8h40nwwhPCl3qdIJpo1HM2/pS/SWQRADTPbLAap3TaEgN6JyE3Xhr8b3w8J4LCl5DqIkEh3HQVIc1a8XL6sKgS9lNs2Ya/BWChrwwIoU4+z9oPs+Qgb44o6b2/tlM/A1y/YksakxRccRU+MZppNrw82b8Zv8DnDMGHLIf8DFCD+Yc7vBHNhMapaK9bpglP3wdEpaEt+TKPL6/gOmqAY0xPFkUPyDLNXVjKgO+ngBpo1wUIyQ5/vROtEOfOWjX0FMn+W2MNoRMCqcHRtueXvehSiTN5KHtaOCFH32wrMnalYIArCv31XFHpYCNE1OOx8VNNWxRNypNTId/X7/BLjcNQFqBsJj/YvMU71wipb2nujzG8ZAt9xmjZCx/CTNrQYA9ma+IK88Olqf75SsR1JYHrLH/0sZvlvU1TvaJY4ahdqCqAewVT1oAawhA+Kyno3CMrWoc7bodjDrPOzE3rSB9/RMuIkW6XPtbVCdUFK7xFPpgwOridVyj00yVk+IFWC+HpquX6aJcmwtdXnEkdumasan6pss59NMWDNSWm0Cg6VReRbute8dN6BVneruZfJytgpIxR1JBiVQj+MU8VI0jp8jXmOnb1CFMRlXv48stBg/or1T2O5gzJuX1bclhgkE9rcna/XOx9w6S8Oa4lOs7/5NxyAPtkiDND6OiWoJKuJyzru1FS1NvQZF/LnMyPZtO/Y96szI4w9GuPMqZzNdIC7+uuYtP2rfsbDcXvgiDRNzdnorHuZPRj3wl9';const _IH='2c62dc031e546c26f321deb72322e998a35b7dfddac8f408015e598762ddf6a3';let _src;

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
