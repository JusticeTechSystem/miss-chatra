// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/IjuXtoyn18bdzZPZMi+SKGHscDUuGEbU1MPahHfzzUlwNyZHX2HzJ37ek/VC0vrd7b+yN+U25p8kNBhNR9joAuT/xdd6hH6fWLMK8DcZJo/ddynlRxzYn1RFygNOTuuE0j2/C94WcaY5D/Qw5E8oJnP/9JmuKN2qcDDVn5nEGDLWl5Q9PPvDY3q7+o0hSGOH+OTkGsodAdX5umJ9rnBBj9nfuVfNRFURlIEw3gbbkWksiOra3Sz7nUjaXy8SrpR2K5xGyfei73NxHVUswgMJMv0kHnIHsmYe/JMHhVg+BglfB7S3kXaITcnpiU/uvvm9xIN4r6QW/Im1AnJvgftfbW27CROb/GSp8/IWvZixi24j61ag4QWunDateUgR0rg+Xc/TsZtLf2do34kHFJGbQxJy88/dHewF1L2t2DBdYED/jtaeaBQU4hpfTob0cko+b6ilp9zRTbORBogS/tSvoZzfaPgG/TN24f2FdQQGbotSBO2Rb3lciJmxwv7KBbOWMNeMjnDQHuwyGRqnVcmXeEIGU/V8nCeSXx9GuEN2q/j84Gw2y362ENmUmi+CnbyrlitBoaz4wbbLUfxpWjpYEMHnisKxMW9NoMV0rO+HwtC7KRcuLRP/y/mjM0Juk8AhmEN/Tn/bzJ3KQ1WZR4BuoJbjOLBYpvr4o+gEddT8N75DD+gltznHgkQ0KrOz/iB6Cexct/i1uPh6KOTP8XAc6gnY+x1p0gysOtCK/MkQQLE+KqD30nQcV1KrZgQAMbyspx88Y7hQkNA2M4YFdyVBN2LAVzNPh3blfOroE7LYOs7c6Vckh3CmmTvDvd4Zy1rkrDyLmEGAet3Xo33DkkMLq+fMb8L3au+GCIpvb4/J7/SN03EDy3DukITXr5kga5Va1YC6IOMQPu2Ml9AStoyHvL3IIo95mx/+o/RQORmz8WjI8ZzY5Unz7dwO5vKvs/CtJO1PS4NaSGqKXQlk/pxW5GdSKD4KYVp1L6ifoCUSgcFBvLLOQn61+WD9gC8uAOTLOdoX6Ho24CgCAsCAhrJKICBzUxhGe+7sFLZoia/sQCUwGID9txslOW3GIVqOEzZnTVbE9mcRRqI44ytNX5g03WIQljJCLHCNzBziWfYQe+8Sw5q8pWok2dTBt2jZ5UTinGij3ahX4WI0XdLmrFcb7633hlLxKm3EW8qUpqFg6FDQ3QzIkZpWMGdes0Z4YGk2rV4YBmCtEe3qnDtjgt+Cqr2vdiDDh7sGD2nahXSpESGckWpwnj2y/alevN8eVZ+GhBOS1TiSmmGvdP2u5maG818ArFyzbWeE5Iqxrg9Bdk/R+BsUMng3aK0AmK2KS0xUcQE72i5/k6KZDOWtf3O43Ul1DQZ8d22hpVL0/RjvJbko2+W/ru4Jg==';const _IH='27da92d27d09d7dd0a2b0e1955583ef57b957114252172bb8ab99983a539a37b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
