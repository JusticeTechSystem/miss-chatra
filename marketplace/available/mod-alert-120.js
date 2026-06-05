// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MnCCekl0hdE5z8AasWkBIor3uMY06TZPNhrbInXxkF+M1iakBNljqrdwWQnC8QoqfMYceM06KFHZPdPSxWUXU1LTE2KZYAsZ72Vj3cb0iKCE4daq0LMj8yoCYyZVpn+kLFTKZskXaZ1TpfsoorCE+MJN1JPDUCbmG8L1J+kN0q1yGiN0+kveRDGagsofuySye23fjgP3WJTftTUHHuMc1XP3S9VJuEGBesugQU/lRnEEybeu2o/25lmlPTwRBSSZF9vBD3lCPF7h4yhcSSuru40aVNwNlWvBLDXUphRghqgLFj6EBA8HLZNJEDtrajEH7sOvaIP+dkSM/vQ9YItj0Qt68Xm9VcEswZuonR3xow8G/s4hb/iVaiOWX+kazAiW5wwWWxj58BrVs4hVSceHRghE24pX1cISYKZ5HNC8126NdBOCuFgjpD0RYVV+C85JBcXyBkRqImRN+2lMZAQpDvtCVbMiGn777SGmbjoqHiKq4RtDQM275pGyfMKukSCy8bn/CkoZUP3PMuhBQBsVANQJlG3Xnk9+EvDtvor4qeltwLXg5g2S3JtHfVtdxo9OzBUsOiQ/8HFPRdH26G2D/5gYo9s4+b2Dqkv2xit1wr1GMdg/utWG2bS/bOERcVew7wI/uw+XnL4qBWN6ima0g3UMaccxnHWTqPt5FkfrYro044vmnz2SmQskkqKWmdPdKAjI8AYqhnpkIykN3eEkIMm7DRqFamd2eWkmHpcK/e70XE7BfsijPjVpZlNs3GY4B3NCGpScDOkkjavNS9TzxRva+y21eM8GeRYNeCK8+FmtEC/NLhKfsq32OqzHHZK75xkIRP/gBRi3beSoYjGF9lO+SFpZrOJFfOkYSmuq1MC9bs+KZA2xiPBXRHFPP5TtpP2VhuCQX+L9vNTMgB297Rbms08sH6yPMct1tbRiMx7hUHU8SeEf8ZNedyASUBNPkR/wZHmWNZBf4x7wKVyiG2Qa50IOccKJSU3RCZoTqaJ+T4mg8+XEt1OKlgODtM6l+e4V4VN7ksnJWDvuYZuTJadCMJ8kLlF+hRUOyeqceZvjMDoZC6c1qwt3Dzvco4yKJa9DSZ3LcDfNIZDxJ8xeMosf2V3tY4AtE3yQjP5gViqB5hSTnuI+koMjaa1dx2vAgYHoZ0YBXWfpgF3/L584wFeDqGEt2UV27+eHj8TkWhz09P44XykBc1fKn8odqVGT+OTDrsNUZpEILw0Sx/YkT6IqPXpZGsvgNdgGgn4YYuDBYXGDiqm1xiYG+4Nj5s3zWQkstbkf3xaYJVYIt23yQRvG+UdEx8hvwAmTsCsTZbijQN2UQLz+19kws9xfcfTPGyd+Qua/rQlwWbJwK8EcSUBedaLj0CZd54Uov9Ya';const _IH='65e0c9da76127e33609422b17256ba24c6c6d15c7acd137762e80ab9a127089a';let _src;

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
