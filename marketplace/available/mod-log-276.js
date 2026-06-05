// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Q8m7RRL7ZGw7ME8PIhzLg2jaQnjSIe/Y1+W1Yn7Ov55C7dE0rH6bBsjyI155mvhIHw2KlhvZ1J6AylPWRBAC3gIGgkhCqIN73t+akG9w06Dd37u1q7CA1JrV2t/DCrbHVu6snKmU5HV7/nMj/VtNBnxX/bLldzyITuDRZIjnHM7xhUlT+Ki231mP03C2a0VPmyUXpNn8GvMLY99IwtIBo0ekV3SGeUntn8M7R/NvC5SlW8JT7Dx0xT/Litsknt+sJ/+fXAMR9619o6qAu0R6DzDtyPsuouMLiG489NL/1deB6scCdg72rvGmuX1Axo2Ys7T61S0UrgjaTr932ajnn9+e89nTJLA5jEIuhQks/SlvyH+6uwmOv1iJuOgZjMgdVkgA559X47z7FnQPIgjIO5W3iC4P/bVyuROlC3Buek+JsgXwP4Ppi07TmNHiLyEAmK4WUDjWW6X5jZG9ljxVyR18DDRym2NRSEofGKKOOO+P8Sml0crM/JkF7FiiK472FHpnmZ9vcX4inS9zy/uos7iTSnGiAiy5TwiqEmu9VbSlHnfRBuORalHRpAvj2Nq9zk8jKHzOcsuLdlKTqyuCBKz9/zLr/UzTroSTRi6zGFoI5gVl+d/sH+cfueaiPH0jYmFzcVrFerrokxGyvfKQitMY4Yl0AhkVrmEcbP+kBJG3DsXWi89yr+sJC8AId4xbKBPuF2IdtNXoZ4dSE7PiYl2ocMx/44BDJvh4hg29BHIOxq3c22lnwGegRNNfZdJGtTUHuhaIyFIzXLgo63PajCPA91iYr+BI0k1fZiecll+YU0ET1/6pd2aAoorBTDEWNIlOqyf8ikKTR2rcOZIOL986eOjVtfEugox3BKUdUN5J0EbSd4lrCpyLca15MhM1d0KqzY3VAf1lWUlhnQSooCwBtCdqKZ4GmTeK3j8Yn3DbLXsdnPs5xtcZkDlooLH0SgTdNBeEJARBBC+XLy8ugjW0PNpdJIZt4FNoi8NHTT71ehMP06Vusiq+g2JdbrvG33aV7Ojfy9i/+laNjagne2Tmm3tGCZCep/Mea9KtAX8IAiHIaGPV4b7IP1tcralmOWlvAQmepRybXL8jGFHVOIKiWNOpNFCPjREbDliEEQ4CjjVp2Sn1V0HpUstr+r1VtbCPwpmmwkiyn431pWBmFCK2GvrhH4uy3WNfe0xqN2dlGQKKTft15tyCGWYgi9pO+j7zhWBr5YeTGp2YuyMayU8YpPbEoZPMC0yp6IeKV46UJUM0Sz0qkcZuZ0eyZ7CujQJulNHWxFwMk09p2TFszTc1xJmkvbQJf/g2UH9OPtAmg0v6/S0tWOWmjbR0qWt5uuQcEtzH+eMPg==';const _IH='bd8a29dfbb65c02a9488a88c638df6ea17e4b98371605b5db2629af13c03fc09';let _src;

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
