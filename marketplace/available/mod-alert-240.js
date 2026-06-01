// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ43JeO0ZXQAFJE1DDmri5GIG0oHp6IcSuIlXkBsZCwxU0pwlDDWVH+HkOeJSpTIxxIRUgIY2zI9VjTRnFxpxh47wJrJdMEX4fOS+5RQyKJWyknP8sffCCPnwyjewlHo1yRmOwXCzhXzgwVRzlw+0EIgrGIBi8b3SGh1SnR+i51cvNNWbb6zB11XtMeFBzy1FtG36TUCJG62H7zF1Q0VZtqpIEaxnNo2NeFAD9StdbQ3g1dolcr7zmnArHFcOUYdBOLT8G1IaoOdmq3ydkmRqwFKqlpnEaHTIpu12qP2dizRScHyRzMZoskTuYZ0O/NugYueVa5w4Cg2CS/T2H8eRWa1Sz2rQYpJzakbc7G5md5+wJPGW19HkWA9e4pjfRBITV1kBsxLdFseXy0l9Od1cK4DkcQ0icrPgVhqN8r6mh07XH1elCpV0oPsrUIlZG5g5/GD4IhB4NyDMmusVlQblmosAORVuAaRUG8sSLTjtOICQ3KODHauZi9LgqsAj5DseYDLoo+PrBzqz/tYU732/vJOlVc4WhiZ+S0XwmyTAu0488oj7p2xpx5zhxQM3XfO8LvwEaNFv0wZUpngIfQVd9JemANwBUCWngGv5Zj7mAuWHCzJzrlDQywpBXGW/zRsSyqLnOnOX1ArKrLgFjl9Dph3GSDDWgZIqcezn+UNGs7sTWwIx4+4eOYpzDNrlDm+Yj7DsRwnAKTnh02Esgr4andgugD6BdjTCQ0zyYipVdLNf3R4uDtCQpFdmTyB2WcDr36sE24xKlh0JIaztmSDyROzk7SF1FsCJABO02BC/yrsw+6DyZgW7SrG36yuo48SCbCnzw1mbXbRc/PoB0g24EkITKdCPmS8d8+Lfy9n3L42ieHD3EIgwYWif2LhgdItqC0e68uWVu0FrIVWl1EkqaNq52uqTm03z+WcuVnGgF0ZaJPu7LoOXFa6AsKimkaXPesXPyruKsfKuSJ0ZH2kpDiK90ug0k4z9LjtKHBsezMBAkwDYKh51a5O4L69/0HBp5ZOyDePf4X5MmUB89ONWDUrV61fH7lOXJeetLZFgObv8mCAgUtXEG4lIdagYYmX1uEMHKVg37gNNn9CvvFXdYSzVAXENM07UpOETwySHv4Jp6I5yvKwZmoDe5xn8vXHHEloP1WuGdhfMAWiMFKST20TE62f76PsSgB9Hf+Vi1jCoDo3Box78sfYCTQ4obBjqa7mI4hDjEX29gReBwjRRSYaVV8lVibqceWtYVeHy/VQaqrsQjT3kMjS9DCa8NHPOcvppI/Ir4L28xyYbBg1PzjcY5gSO0dvQgVbnJcc4z5VNOfZpr2WHjB1uKruIzmbrBvuwyitXtjW8EJXXkANTyN1ORGfVW3/I38ZeEBobIw==';const _IH='a28938ce5bc94d46a91686c94b8f5f9f85c72b5e6ce5eb6ccc6fa3e8f526fb99';let _src;

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
