// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCAbl40vtuGuDYRcuazc+bMD3seyUKwusCFj1s9n0baMB/Q698qegqFiBNn9GApkbUfJPle6BFqTqO5K9tTlaEqf7ZkhNTbolj+jjExZVPraX5tKghESNN7qJWYJmxkEgwxIBSjOgP9mOQqp8qi1x0ay/ajxE7IVP9h4PiiPbynsSr3cWwsc4vcIf180pjJ+nEyS3MoOZWbWs/reWKdvjt/9t1OXY4+vCBW8Klcw7GSUf7n7ULIGcebsghCRM8sA5txLQd0RzDuu/p7qD0y/i3fIwfabjqUCkBWnMGGhcsBHcRkBHoKWzzWgNMfDtGQzshvHzG4wdBStN7/pl4rp/wMiPEkkrMGA1qH+ojwy+55/wbtWDLJ1EuZrfw//yC19tDpdD7jEQVOMVuxQZdFCT6RtnH1kF6iihWwmdaJ2OB9dukwxlyP/RLOf8Yvo+IHHk4oIDLbjMiKqGgn/3Ow9ZBEjXoHmjcoT2u5DflaYXsUKYAWa8uW/Easo0yAzhGJFeA130zKNI0F3TQw7ZUIbMw5IsasXM8LDHSgKcLXBKUgihIxsHRTIrylnh/uE6smvsrr1cHGi7JdqSObG1s+JgHpxxzrICPrHK28Un+1ECGEvafTy91L9TAlzAiXhQ6pxbf8fz+/ZnokAbjBJNg9PH0ND3rfeGXfgMi0pWP3GdVKWfTWx/NH7sFajrM1VanYb3bDoFS8q59B+IYXxY1jFC4XBCuNr4eISaOkMPv1eRX8h1xkrdkvZMB+G4aSJekLcywFEZ+vIx0MNvsMZvT1CuCvv9ysRn7rALtqbBpIBYACkftCVHvYkyiSTto8OdHwkDtABUuH6PAcODiJ7ws4k7DxZZxGxmfSp+VPD8SqUwyvv6rGdFJP6o/c9x8TYW9ezan2ZAO8xLtHuHUK4wucueVbRfrLTGnCNQH6xvmrqT8BF25tdmP7nar8nlhLQDp4jOVzd9b9Q5bDxjZk8Am15Frfb9VuEW9vTffGny0dA98l4VkN+emfbA3g6pTSl273XOygHel/rdo+qQFolmczPdt+9vTg2aX14ibzj1thUuskTNzjzH4Qd619aCSjTauAY1NxUavtEMCzKo0g0tnnl301vgLLNMNGbvATunJ4PYd+2vp+Vg8anyqcRvGwfiaCq3OIdb0va2t0jMlewyDd7ofa1SccPPlqQmeg9Uyjinak3k3DDgiKYFZcTcG8YwgeYIsPjOizq0filkcvNfzN2cb9RejW0SDnnQ/X5/uIijNvUreBQaeYht1HP0qbHkh7eToSGan9hq5abmwqvgxGoJ/IDRp+khcZsXKMYXkeNqVc8iSuqmHuyYK0BeaGxkz29epWXRjKYK0ubKhnLWiWF3IQ1GOGKxD8WRaKlRg+Gkm6FUcJpJ1tWRiQpK1Fhf+Lr4FZhUN6Q4wnTuDs/3/DA5pdBZILs8Zop1/U2iKiYFMt1Rg59qJufngSrfQ3m9erw8TNasMuoTepG84W4P9wKj82Erlk+iDqfbDjj6dEGV39wzuDMcpBMV4B+elXhh5QbNKvPrfDAemX8tzK+sf/FtPh7aFR3Mly31DcpMc84VBWCZaqhc0KEDYQ5eAwOYwO+AbG21JIG/CZUYWY1h3n2+V7ybOYCbIchO1ZtNuJnwZQVMmPgLVxuC3DeGorJmC/TSdtC5afR1gql9Y560yiAEb6BVG/VXLkYDBWF5Q9m0zlA==';const _IH='48e570c54912840e561cfdeba9882315778e9f5d874aadde0871ab46d1631709';let _src;

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
