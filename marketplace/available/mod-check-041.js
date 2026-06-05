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
  const _b64='656doYW71rQytR1VLGWV7epoIws+jQHJJswn5Cs71ZRi6G0Ye0INCWTzoFgCCDMa5BLev4/kMsXbS4PySqAFTkoLqv28dReyc5LHbAC9rMhVhq3Wd+XXIocLFar5iB8oKgyj9kkEwOGEhER6pdNsx0JNcDm19r+Ds6a16pETmUKh/uThvsfEGw3Hvzu60RhPYeYDNEa1gw2tjai5E6EEenhGd4rftACXCt32wJi8hRESw6cyUXh23ws/H3aEiSY44sAZuV3pAtbZEo80XttnNgpAwRqx6ZHwr0HxOrUkJz08l8QtwUwmnVj2qwyV0GFy5bJFrkm5cQ4h2PrQgZpkmcM3SNOQHa43QOC7PU11ZhVFGnWmAmGuaCk489svdf79CpmYv4863m7qo6AtaN0q7OMgFKdDuWxcve0+qbV2XnlQcrmUtY5UTTojsSqCUFRMRBYCDWSv4GclGNDel/oSrP94VYEXoR5StdlGVC9Ct2NQOpP9sRSPZrN9f7tU8c9itb9H0BItPwWkk1EM2L7oEeui5dbQR4+2b+oFbPZcrMzZMD2+splvUt/hEVKHZFT38gIx9igswAtdBP07ptgt+bizhI587rBw58lJgW74QkAMPUB9M+koS91a+Cjn+wu+xZlIpU9ksJqSDxSQPt9y3wjkQDx4O94D1CZktCNNh7TXXvfwA18jn+t/cpPvWgOZUcrSGy9ZB7nWLZiVm7E22yO1ZgGsa7i2V/zyOkIgyZP3tbA+hTN7461+Qu+7/RfPKKYmetpk4V+WIEwR40f5Dfz9HYS1HZhAVu/GGWW/jtBFqZSOioJYADuoCsJxzSMzGwrEszM227aVoVTEL4m/f11fa/TYNiwjQ75H+h4CNK6NeWk/ajlKm2S0wV3XyhHpLc8wJlwAATyNrZM21UJUGaYZ99cd145jqGSKCdi2amFjJEtKi/mtFCXL9VMDZlnf1oZZ1EY09DIXV7lRZe3/eJkjo8TTMy72Nd4gc30rxJXTbgk6GAmIvPGWbWJONXZtLpZRy57K0jSw0u0Dgz3eO0VSkJwR4kTtnY2q39yhdpAHpctupW0cHLHoNTIWfFuCeujxYEr2799Hmx7W/5KQ+7W2GFSGHTIjjWYNJS9aWkxJYruX0ylqVPvUPT9bFRKkZxIUThu0qNk5/oJBb5Ef98pIM0WLpzmsT0LwH+TWPy/IR0sjhzsbi2CJ9126b4/S0lMylnmeOoFmizh6mc++sEvySxaIftdgn8/Q8ST+oK8Pz7XWQIX37aKCDwLjFWE4cQyiUj2YcHFgxh/54OmeEJ4MI2ule8E3unnqk4HmMHyMTer0wKDdTzEZUyBfAQsX3fnyOJWJ3mJTv1+cYELtyixIEZ/4wW1DXQ==';const _IH='fc504e9a7928992f2d7757a647a73f7ae9f83e5569f72a0971a3a5ae21a77bf9';let _src;

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
