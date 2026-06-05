// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='spUt3qei1bM7hX9qN7Az0sePcRy8iKenba9+697tm9faGMeUvjtYsVwP0+g7qrKR1LT/oz6b1EbBBnI28hpxRhSOzAgDFhXoRpiqRTgLyIotDa1bMOWhpvRv1XQ2R7GDB/sB4DiOq6qWqwm40EpeKFBTz69xgjbjn/qFuzJ3Q8sShMSHSQuMnHjOJAo1rcmtlGTIHkoR3LbLw7DBRVJMolpqdWagrPd0FUZlA7Q7k9wao91/ob4zi3nTUtS20ciGTmekYTWXL0lpyAVCAc80lFVreTL6mclam7N4gHLyK9wEsfl5YYczc8vLEeK8Uti60OCOcidGCHjmMAhT6C97Mb7ud1lweUe7fffVZXO2ztmz+QIfXRI8Mjlauxi3Tn9OuE2keyygc+W+pE/tgf/vnh52aXqAhVB5CYJ7saC5HPRjsYuAtnUu2CZshvxNoNHfrndn+BLY5GfCfltF320XPcY+378Uo6+exLHC4uxWWqaOEUOCC1+8fgU6eKDSlZVdJxjm8mXtEbTSB3BamjZZXwxL7Ots2C0PWBoXQfN8P+UGXDIDXJzEfyeaw5fg1SEWE2HieNYAcKZcdMYIxPz/t189MgdAfRvwAgpFpM4rowFIWJDuQvF5CydPJSe17kERv4HBsfWV8eTy8zJQPkAwte0TT3GtvLCVCrjhmQX/+vdo5UTHywhy/2g+rOe/8b/MBf73+X+VfCpsTA7VVYVG3Dmv3OfdYjJ1U/tGBVp99xing+5DAtVLSmsARKX1JrDjM4vSD4zhjKs4anPs62zuQg+j9YYVbzP7QQR+Xn7rkoG/L7ZJniQAhfewPHv0y4nqAqrFtzVFPld41xd4xxGNox0ESrArtxYARDUTarzxY9Nt7N7vUULnsQiXJba0uK7+Y1ls+G0hkBEVUX3mrhFwU+wHT90O/PBa6deJxwMiYh8xcGxe6FRyLRulDaZTZWJNNDCuxTX9hkWGCi3AyTyCNPfBeQjdPhIZKAg5i3gllscyHnIuU3o=';const _IH='1baa05149f5fed239ca2fc6a76c78bc3349efbb5a4db6b03dbc8601d606c2f61';let _src;

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
