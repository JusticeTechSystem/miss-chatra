// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HIQKBYfstwOiKicy+w0kxxAyoJA4e4l4BKDNXcxD9Dn35W6kb9TjR6LkldxdsWvloPRH2FNuc3Qa6S09igdNkhwUetkL2M3h8g/87OQl+YQv1mdScoC/pjcbenfo+6HIznHj/wXJT1cf6HAtDFzZE2lnNbCwLdOlx79gbUvkXhwj122pkMsDHcxc/cezp56e5CFSYdaSAwA7H+v44u8PZQ8oJxGusji1g+DANDwXJuvLx6tUeiduMYWiSQXfZf7fxMg4rTggO1wZ/QP0M7TciP+TV9qnWmxOlBvkeSSUoeDGJFwkL92RlIki6xCpJctaz4V7rlQqgtHUFE261xSODWZfW97HOfz4tD0eB9yEGDxIn+QBEu4qJrDo9LVY7f160PTvNTIFEp/ID5HQkmfhczzBQQiUGNWQ7sgI+UZgR65ly5H/8wLn5J2rnLoZ4CTkPDVY82uwEyAYxMF1wa9dv3SGXv4zs94rDrxBA5XcGiaqhw6CzbQYoowVZYh1kiuTbhGioTVj+MWPOT0oof+H/3omVxi11pH0oKIXo39VuASygMhw54TptQvKB0umyzvGPWlj0DP+YLyb62SJTxYJIwbodilhKW2uqHwgV9CNglCzRSejd8Wd7XnFB5ixgTPloo79FXCHhUgHJK4a5y4Mtb7j3knBqD35KIxgnQWA6h418NfWf/ibBra4mwDu5lBPK99OPXoMwHhCueJXrG0sfhFPwoshZTUR8JsVzkYoQMsa4zfanZY=';const _IH='5fa5a9c87dd4c8ad1bf2b7654c0edc373c7030f285d02ec38308057bbb1d42b4';let _src;

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
