// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6kNrSxbmLrmAFK/RePO6QrmhaCXUIGfHoPu6Qjf+rNrbg155vCwS6KPKLreFxRuKYMoItghcrQvoYDHynYIGdilEdF8jntMYlVCKH8NEyIvSf4V1vjDcIc134ovlnrLu6iKWcHcds8WtMkZeGRlk5PtpPaLkcHecljnhKOqRjCaU7nxNlR44pFU1CnDShoazqXXxImFN0sramUSvbqxQRe0vK81HAhc3mp8MUwvE08s4/QFVgRXCnTuPiq12AvCCfoi4vJW1Na3YtAOXmYYSpptMASRjKuWoM0mb3ZVWVuWLgw06IV0/x+6PyY1wjfgblfydxhp6+lPhhk303ti4xflLI4rWL8KaVBcZ3xRfBM+FSLsDY1910kgPvQHHVjQQN+MLC6NHeWi0T62HLmtf7Wo0wvrEwGXCi0B0BFxKKSgAolpQWpj+IB3ihq+6isWy0smfZyVG8xee+8OoIMCvZhSFxV7FBn2pregZfQLmg28d4b0z+A30eCXzNCsKxasQj+bDFnpjqdStCps5KoOHvxWjvqU4M2p8Xwv/E6zINb//Zh59x5HWn5/AfBSjRp/CiJr2FCv2MXwwxJolQOk1Dz9POg7IP41TRQMlp9whnU706cmHa7fCZY2XHgTHm9VApsRMjyU/m3ZgFcSPGZ/F9cNNV+ooqrohdwnel64uGWmIL+5lFTbhl4NYN81xSwkpUbm87s7024/cUrnkkotWdqMTMDu5BDD7Av2tl5oAEpw7Qa4FT07Ih6QPhQmZ9LDcZi56/5RI2iXE5sqLUbrJXEQ7ERNW4Z5O62h/CcKl7Lja8kZUQHVLCd7bsQfOqQH+NiVVOi0sphwkSwtjMGXI9rH3PPmh9yo90RX5tsB89TruZRA0DZmKISnTQ0pZAuyw5Ct9YYnJ/NSZz/VxsEZi4U7wHlJBAfD8bTlN6Z7zN5sqy/CHvcPG3hcMT2laQTe5ikfRwe/PLPKVU+iltUzS1zUi2tRsB1i2FJh3S0hoKNDZ/oftfgdxwlLV01grPRd83A02A9/1uijAmRP7kvV30pEbDbuPIY4iwN5ckz6dj4Fu';const _IH='422a66ed3f465c0e307f1c36ca1d8577d396b2fc79bdd3db3c3e69fbf706c48b';let _src;

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
