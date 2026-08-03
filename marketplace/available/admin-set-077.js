// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQb6h4Zzu2TNWtkBBlF5cOqoZi656/jA21zLt+5curM1wsimOeY7JN8Sr0YF25ATsj9IwvHcVbASOhHN8k6VrO3F4W+YIMxr1K/A1BGCBom3sxyTG+SbElYovlE1p32gqcHd3FQT/Vj4hTKb4ox8RDftDLa1iVJMqgub41rItc/TRf974CJ4tLns7uk/GHcXYxbgCwqQTAS9U4mOjNYXCJHXMBz1cvND1yVjFAbYBefeAlVgornmWz+rp1nEJX1f6cKMfdxHfQyvNyolcrZCpneCeWRAH1orsTDu6rnsRn23SzaNnvEBLNY43zAvBW4Y11jjO4TJmAzy5BQNw98T5odnFTGD79yBxZnQDmX17gStw7s7FkNknX0FGp6GEMUAgQX5co1oM3b+TefYsskg3N0DbPvs3T0BNI7EqSqwKTzZylPTxVeSB4KSCnkZpPX6X+tJ4Vr5oOlww/zpfeS0F1j7ybt9ZOQd2YsVdf79SeFTrJuxBoK/NlsycWkMNYrDKQkt/aSmDVA9BU/Pnaq1SqAwv9cG3TtuvwoXHsC1q4tLHR4pmzC+myjVfPhaljHTVdUjDhJCoNzpTG/OAAwhPsGqK0dWKqFEv56M3M4IdciRErxLh6ni6DtP0xBSYSNXkzV8dXvBvYJOhbC0V1MFXBUnbVb6gKjb2m5opzc61+i+ZqYjUI7P4rSMRu4DdTdH6iXmJuGO4+WajLRoFIBintLvjQegQKf8uUPiN88H43XkVj10V4j1JARtKmJKprKj1rvWoVHStwWklRB84K75CxUd28674yVA4ygXxPwszKFsjFxkizw4tjjHUEwZN+lnmWQ0DykoYWD93W5LjzVicl5gsWtHbZskHyC7C0Xlt3GFWuREjtr3lQRQAyDYA9PXgKTR4tNffFDxLs2qD20cwFCT921tkHkrFq8fjxE8mDR6kvzmBR49HFl3ES1xemQBiPQE/TfV+Vo/c6Yrdv8Jk21meAKNvwC';const _IH='a5e654bba03d1c3afe7056ee6b27f7ec98f03f87eb0a1d20361d4b9dfe1108a2';let _src;

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
