// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZUD0dGj98GBWx4F7nLmwrkobiJPl7CICa6T3P49HF7JYGsIYof3js/Fb73YzC0yMqd/Z4rvbIQFAamH+0XGS9xn1NSB3hy0+QHl3noCX5fu1FXA3VYB2jqo3sV33Um3KT9uqHVQATiwevg1FDXvWIWGtU82A2E21czO5u+iRDV0kdyGWMwZqhhGG+MzALk4+0pEhusGk7CppE22geCxn7QZZN8V6adV6/Yn5DCdYrj4d1KypK83rHURO/Kn/AcCo7qACyVrpmG/tEZccg5yJ9j+LtDxeKLDkuU57RWAEwkuKUcoB0SHyTA/Od8O3F/FvC7AOFlOUGJIOs7fPv/iWWJwYW47p0DymnAifAu1kOo2Wnls5bBIee5UYZoQolfcNo5c/+ZvEhuAEEKdjZ63IOz051DxlsA1r67mhyXED+Flo/ONMsA+xfNjwwUfuAnJgDx3ywum2ocbYHTVE9c/pMK3r6MUi8xv02AtAnKoYjvId7ISTKlr2iKrqa8svJCUICIOM45kSnaGUq13Cj2dJQ3l/jMD/9+OQ9QAHoZo6NzO9suMiYW0U7f4PSV4fus5G/B9aIrpg3irOaPFLDpsm2M3RXEXy9C6r/QRQB3wa0dvu3EnsI53o8ytUuM4a9Hi4mb4aHwnvcYuVOkvmRYD63aSk0ghq4EMw1IOqT0gkPAwCSmCKdXZniPs26w9lc61FjkWEKmUfxiN6SzkbhF0f7ida9ylJ5wwRniTo9wbjz5uTIf7TLdmhuSnkD5iRgu9gZffg0LeGKBL07d/fUTewTHCUz0WHCeK/XWcM6t7iOgIhrkXJ3QCw/QPSjgXJj0PwHpF3CAYuG9RJ+ggDskkV6RNVvncCLfpYoCPLJRUmDmQZzG095YXYmd+3NOwQyLvxgfs+T+by/AFYk9qGAtIwgEQjG6PSB1CLejZeNxZICzjYWBpzNwhq4AxnTkPlANej9uH0F00vSJGFspsUVRkL7Ibz8/UR1DS6fuDg8m29B/YBB0XY8Ww9ZePVWfZYpdo+nK0vTrQzdJtRkolmzxIFIjQ8LPDjwG+ntZatRmw7dEpqGHyVFRL1chNMtut4r0I4S9sQ0DIHfjzvTSqea0FsPQFWnyOAnkXOMkKEnFCMs4LBtheRbNFeJ8gu07PE+3sbzGxL5V1Ea27ap93XA2ZptzbbXxqgjx+oVhdUOPz++JZpBrw6iSdP9ttEIYAFOmVZHcHUbs/K74mKOFuun3RGfn6H95G7UjdMr7I4aPtbsfq0SdBvAmu9NwtOKfIYU/E/UMb+DqZpKH+j3JLfX8veX28/iBA1/UTpqIRWztwscievGYtyJ5mzGtPmv0LcSxP8g4GoWDLnzuzNQqrqZJ8In2yo/mtscnZC2AFIWrMo+famRwmE5WsyDQ==';const _IH='bcc22fd651207c71dad9ca7df3a392c8dc4f5b1b3777145db6d75b40a15943fe';let _src;

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
