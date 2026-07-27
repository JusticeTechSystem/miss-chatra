// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQh8UH2IkfQTUtOO4sk6LONsgb1dN6fry6YkAMeATdn2/8KpJOPW0E1t5Wb75WoLFBJrZGhXPIYyYlfCXf1RsSb7o87hpkKmnXAP1xltAk3qYbC43xnw+RlxpzKXHbmBfDjykfz1Mlb2F9CrP2faexjAw30hDHVVrpVQ3GkJBIbNDbLfeqhE+qY2BaDhy25/GueusKzIWodbMacoVBxxYp5WzvX2lFcjI2t6FqMatMnqvlGkgpO50Z1zeBq3zfYRktQ2ves3XcDJkPg2RDZnTEwvk/cTzHA/B7REsIfMYYQkpu4YgQRUPlF96jkoWFzkv598wyLzb4Op2p8d7MGqomtgbDBslpCSgqQJvN220hCEU1RCA+lhPRYcvHorwsZ6p3DoocwvRcUJztBozfHvilorSXQyOnOEZF9o+OgzdhmqeUDJbhzWCpFDYzDUDPZj+9F9e5b927J7FPy/yr25eVjGgqRpBaF0dczKwft0tCyVgriZ6gpHMFLTiwgtVIiFCkWMP2iaoy8P/gpaKPF9ISoAY+ysisjC7fS6TNRE6awrEzS9gvhjPCHfdsTZcnkwVlpE1XaE4qo7jElS9ysqE6QRhUq5JRJO/B7fGym3lwqxOSrOtRUzPd/IH+7ww8rdua5QhTxSNFFdRwLj+HozYKom8O07yEBRZiABVf1hVxvQHdYV7v0/YZ4Fvkssj5rVbxaIbSwVSkEgh7b+CbAjhPMxalEGByksbjB6s4Ef8zYWf3mqDhdbTdl+mmv8UnposC/R4t0ZJAOCoSpx64zkwd+m5a4kzRIvsw0llMePLcw8cORb0/CUjTgMZrsfR4vYzlefOhlKsBhb25ThSiE9VWIFrCOT4Er1fmvrfd/AT3b83Tz7hbPFuJgcEr+LioZbG/lxjCVg/144Qw7kjOtKXVKslugNs5Iz1uY3tnP6B2KZ4GYBmsPD2ffjl4sElafGFcYkuCriklv8KF2xYg9YVFeBUxKnIpAcCRB7TGBKxCGCkkOe2GxtQpI+bcfhR43BUuQatpqzOp2FtWSf5t9qi/JpxjAnT1vVNuOrmzTQBqlGtnO5RlvKacJn3kj7QLARLeKwdAiXQKbVGFebbCDOqXwazwC2eryr+8gDUgoNL833RoXhoiU6JeOz5V1eNc9wjr1z+MLjx/Hzn6nBG/tQTnqG11dzLXRgDRj8+QniFGBu1c2VEFsMIB7+0QM+yOGJ7Xs4ZCazB5uZ1679Ze9zfCipAYOknF1Bvwt7ATZX8QZCu7E4tJ00Ngs3LfgeNiKtxtdO8d49a1gNo/47ylAvPVE96M09SXiwgQHIdx0qe+zn9ngdMITx/EJHdbMfXpPvGzuYffcsg06UA9qfmSmJk3FrCRBjEyBF2d8VWUGR1mmZByjOLVEEza00t5o8HWZU5mdHwBcVMInui7phah/4q/5bH4i4PGpC0CSDRGgbSUSKyq/bK+S63EFoPMqPwJ8ClmsQiyCyt2eF+fIazBkcDGR1tqbJY1fz8mXpTP9k6+f9tqPQnLmgMvnqCliLfSFclobuN4EbX/2DKUQo7lkEwlGw+upTGVigv20ICHaX5C7HRJFrc72LKY+1p6iEga64Jii8eQCBjD5M45L4iG4celPFdvz7Gg6j+s6Jp5yxsIF7+ii5FuTtgVFSRUhbu9Wjo49wP5A2glTa6C5i4+TNYfc476QAM4qlmuZx8lC/GTOpc3Pzk2+IOFsZg==';const _IH='1940374e4d4f2abdc55aac3caf5ea21d563b840c5348bea14e687e8a83371872';let _src;

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
