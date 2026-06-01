// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwAddoWtk1ho0cRONd5N5I/SDdRVV7lOKjCL5dPKEwsiAUt85wkpATuZiOpLJdvJMw/KnqZV6zBI+fHg18NPT6sydNU+IviqFOiO6PUF7zSb4PhrBE93qbkJcpF7ccoZMxrOoDHfWixz0Stv1dhcWY0fXuSQLeEedah8sJhjRJ1/6Ymajp8qEpBOGBdeKKHYiaf4cvr6N37fzX+1HaKFM4jiWEDcxDeeQkUaV7EZLqBx1mLQFjXAtk2tpam4rZgcZC2rV3VRCJKC3nIVgpFPVaptO6ChDBmb5EwmXI0CyazTbj+ZFHXMHgqpPUb6N0nouuP7wT29Io1L0PLBecj+ImQvLob3QSVQEdaMPSltVy5b+Lc6CsMtREb8exNS1LtTjZ6orIO+drokiLCTqtL/9BbDr+ku2SoYDywEyuPfvma02G1Q0Z7qOO7AWX3HaPuxt4KzIP4yTGB39QUfVhzngk9I4snD9VdftQ8z5vGtMN7kCm8Ugjl2XlofFDDFa5lVQUzZNl9eErZttXLv5ple1Qat1I/LPv/NAbs12ShJ9PkjPtzmxzUCmYkoZUuNQKf7DSw+2O0D3UCgc65xPCVmMsBMETZZ8GnbZ8h93UNWcsSfxkTq94zmHxWwbB5K7F+cGr0REIetfb440SCPo+fDlvLSlmFotoA4E8YxWEbABFgn4ZqLTCI0ukK0VkzmwUpY7ihuah8ugc4IaiSvpn5j4PK2MpxxJ+Lwd/GTzNK1g5px/lTcyAfJ+neZsh+2kMyBYhCHKghghhCJMrsakGRTN1LLuSCLJMKe9rkfDDDKbZ96rK6OQnGXbto6H6p5YN/yTuoKIP8XD5qtNW8a3F63ChA8UHTuvruLZy7mlM5SMpQHsysLbIfFNMVbpQwh0NIxMUexDERTPcDViBkFeuApf0cPEg38bkvM35axQhEBIMtxNpFhL2Q1j1IDO4XeJbWL9pxF8Q3O4fkti+pRKP892nnYvyKQwe1eGZRRh/sW0dLnEReewKtbjsZbc/gS143CBhagH3UZ7VbPFxF3lmiNEBlU1b7TiyKnnNCDVbfazTGosYhLCTduUhEieT05MRZ8jBC3a96qvwoKAJKiq04AuJQrpbJpiBSnrrUK4B1M7tlAgkX7RKbKqqiYtBlz/L/01ykM9sUkEU/FyccfSunNRp3eDKg8Ii6C38LWJ3dOF/llwbMeBJQVFccQs/L0RV/aFRx+hHZbxQ4Dv58ze+QLfjUViq7wnnmur8ErUYTdllimY4bwRNaBgoOg57JsJpggrC+T7XiDkSunciDvJz3EnZCOFK5pXJOhSSoY/Xiv1qdVgJFsSwgqSUdoTr4xPEStRWox1uQQvQ/cimLv3P31gLodXbwJ5Hgv6DxDYz62JZSJpC0Hjw+/1/j6Q9Nnv1L3CgoSeweub0dKNg2ShVEZa9PlgsE/2zft75bXRKpWGBPPOnZ6+D+3nOMNt/tr5uG7v+PZyqgSDw==';const _IH='30bc6182d614dfc921ffc7c01d14e07f3b540a62d7ae317d9b77f04f5bcce589';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
