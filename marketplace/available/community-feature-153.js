// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Svx5ZATZ9AR01qoVJY9o3wQobQhxS0+CFDMHW7WH98OmiV1HCjlIX2oYBmTYa5J70G+7wUREbmVwwuTCfy9dhvrg/2CuOTGmK2tH3Rt0+UCISbr1/UoJx0AH891KQIpcneuOSlFdze6KJLJgIQC8EA7PKjEmicaBS4rpnVpQoioEBBAIVcJQsnjsHF8KzRasg87SvOVbhoyePfNgxoGfWqGpvsCQecqbihyuk8vZNoTk2vhk8fNUSWiyyvMPu34jg4g3+RbeQL0O0P30Jyj1qCecp9ocQGbmdWm0N2zzyg9C5UoB8lShmKWxYOuqDQichcBOspvn2N/DxX/RnNPOpN8hnlzz94HZROUo2289eVSnFJAyUeJ6PIEGxbWUsboQ1t2KP/uQYh42hMs5sliIaMJx7B9ovKTL3nW7SZskPOuqfsM8O8ypzuh1in4uffOzt49E6C0zTNMKDNgunqwilxko7saDJChbSzdTEBpqWnmQ6aBara/O0tV4OSBmfBevS2xIGk0ODJyDjQ5cgBS0T4SCQsXP2+50JALZiExRrGRbIf9On+CiciPR1XjbmW24rYtjYFmQJWamrIV2OAcRBP6JqexlvltEB8EXCsomFmUAZ4dxAOfipXVl9ZDchmDF7k1Wy02psn4MJIT+ytNcGech4DaMZ6whw5qVx6w3/vIcZQ5r3+fJvJSItsAPPG5e0gYPkYkCyzsSZrK/loMiHkOruRjOxfWAOoyuAg=';const _IH='ea7ceaf2720de91f5e1628b23fa48c994f1476f3b66b2a03789716deca0337fc';let _src;

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
