// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYXPBS+dIJM0ta0pUdxgXGCN0p2qLGxdNO4uUP1x3QcrjTqfvo9/b5EfP+ftgdVKNQLqmJUK+Pa5day+xum+S6vAyEHJc6oUj8zhL0Wtakk+3CtZvieIr98Lps3Y5n6xMIauu5B4ckHZVH+/2eDisgdWHThRSBFM7+0DcA+HACLs7IcHydO2lUzR4WVY67TMs3xufrXA+m4xa2ag/wH1sN2gSwhIt5oeftD2XJ+Pks7oDR1bzR5gccDd4lSmaN0kXznFNGL35Pvgg2e/6I6IeHzzlwG9NKJMFpQjZUOe7sw+ne8XSaoioXuPs6DqiZ2AqkTYod71e0fYobcy7xoozxE4CY5/vZW59hihEBRiIZoV17qDgMPrhMIgb3bCQoox7oFIr6qRf8xjwHinr6sR9SYD23d/0xmveGuJjz6oC0Ve1tiF+d2oZa0QBdCecgtC9bOd8rebudEtGerLxynY+dTHT+HJl82e7UP8dhy9WJIgpy7pA31AtBtZSdKq4R3wW5Yu34ZoW9YHk37b68VtPAkzRce22wk1oYPK70VwV0d2r5YX/4gDsQA0jo9A07Jx/ZjQ6grsxAxX27FUjqbQsziAL2QtefqmVoavipOKMIAg8HJPTICqnzMr2YLrA7DmFpSwsenY6sY7PqGYleCEjjdCU9qvxgH/LIRD9tb2p2lgMzGViaF96uvSL/lXFRkeG51tCklppUFVkONThT8KUOx1Z5+3BTimprCSnZ78nKD6Y3s+ynHJWGckrXAHm90IZSPHIf3QRp7vrpmAWl/bkWkzC6lkAZWYQ0otkoCNAtBza4ZaHZfn06H9oxPFs7gyDzjynVMWpZelhXd2alPCx4oSBTZlJC9+51BMLNFzrPt112e4UU4ahabsZ5FOecl10xt93KOA7DE6Tgku1Cc3MdS0MlMQRQRrdFj5l/5RrYvtqE4SwMJdpdAmk7Qu/xgtk09ac7q3XLbp3v/UrC0O3eQYIfcgroP3uzB+3mvXWQ2pO9/PChHJDwRl1VkeHO73mpycZoiry3I1BjrPHYZtPoY+cZS2/n0fyRz8ZqGsJqule0NTsLZ/8puedWpa8DbStygafWMm/akwmPvo9cwvglZ3TneFJUN5ZDiFh5W/c48UGlEAGVL23uzsktuao97UFUAC4k/JiTj0fVJfUj1cc+ID8kbo3DIStL6Lfp5hpJsW6KGdzYOaI9MGW9SkpzQQxfHc4+ip0jeJpriaXtAzNsQFc/PstZa+T+lKXtFZBZetpEoT9+62ra3+Z2FtR3x56gjDPkoIs0p7ul87lQft0hLYQNnmHYcx860bRlS4IHhbbu3C/yU+V/gjQ5VaExktaHEQlKM=';const _IH='6fbdb1751be11da9868cc40d2e24dd0d4fa9d00069cd57bdcb00da2e054781a7';let _src;

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
