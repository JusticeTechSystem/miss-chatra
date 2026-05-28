// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MIzyCm5zKubeIAIDPaPZFWEUkcfe37VsrJG8KKDvFpwlZPAixM5QrIDygni4NAM4SBJSCAkX9EplRRZlSOR0gnVDa+MMTHvwO1TeN6tgOYeezVMQWrOvb11UYwCXxuojD2rabcT35cDKsfvHdUahRQy76nl73AAXESPE9m4E+L30rCjcR63+yIs0npuaJW0fe2orrYJIafSDjqYCWEjWUYMf2YikZKArV/0czr0Tiu8IkY4oWYUitS6ziMLVZFTkmzGjfaxkPpAlNFbNs2qbMW67UhrENBi/aDUCt2ZpfsVP1jmehox0D19rSdAAxlIzgTFPgDI7v5YIs+5LD59p33dlOxHOVPXd6EqzS9bDMoZazci+5ogrO9HpnRwBVOSXFk9ZxSYQdvhCK3jh1ay9gShNa5GmMHEn9HqkY9ZcyctC/trIcZZih29tYBATPfr8Nd8IhTmHvgg5SgRKrZN1a92Dlg6cp8I6OAXd13axpdpf/nh1BCqMKTQEi8CyMZ/qbLH4Q/0fTzeRo9BGgYA2XBxmGuiiBHK7T08Lp3QE/Xw7M8RagUMoGIyKvN8qumoCqQTnI4yyNfrsqX5FXBOExznLB/Q5JFh1DW3ky7MCZDMPACha2lLHw8zNudnzp1VXKBA+ho54vKKWY6pnij7uBxRO04pzE3nfxydhYIIVf8o1RalJfbgc3tMWhA0NEts9JJXs5GioFk2l/dtsDqkQqYu8HE17CwXE+RUSAi/cq9rAYvXk9gLGjdKAbuHAorwvaMZX//r73nqMqFTLizavj3kGCbJHJfroFZWtJrdd0IJhV1a+UgXwLwiFxMuqA34u0+ofYlttY2L2vtQjgpP7tumzknzobXHG5KJreMU9OtaA/ITIbvOAV1i+BKpw7X4p3Zl1AMVf9uKrspj5DfKgRBitxYY4uytjP9Te7dO+jlFTQ4AQ2uNts1UwnMJQXeAb2qEOrErBd+FedRXLoT+ggK+b6EGOUVxZhel9aplfILfAuHojlo8hrE2Bob8W+urYhj3t+DSu+MA0ubra8GkpWVno8WLmXPl1AUSVtwHoEN1R9BfsVrfZr6JrpMLtLndZsIZ8xwJN0OWaNZ7UDr5ObfLxeGg54Hs3yR/qyEiMk+AJOL0eEejeWMlVV1l5RM3zwuQHt6kvfR944mYZs6jS+rCLNEgVhaKEqerSjQ4sTP+rxaqkrHIb180QyMuZTdwyFwzHOt2kxu+EytBsQrsu+fcUtaHCVbp2iYVcQmp47AXcFouXnyl9QZeeL7ra1ILnYgoj3V4Zs+9TbNgeBKok1fm5rVTRD2YsU2rrHUV4ZPAz+9IHVzFnYHbbepMsJ2s/qpzSaJvFhMJdOUjk/OhgVosWI4QvQXmEtr+II8txjUalgR8=';const _IH='481c075caea25143cce91c74e55f612ab4c6d6dcecf4c0326946e50c4a9228f6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
