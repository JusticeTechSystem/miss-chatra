// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xtPm4omyVfa5K1+jB4hPI9y9/f/6bJfQiWVxK+UGZKKvXzbTSGQG9ti+keZt12p9VuT53au3N5mcZBYadzHU3LGoe64v2leR3VhRXDf1r+hc/pIItR9TiQ0PcA/feA7BH/cvKHwePAINKleOSSXwYUyAAu7sA2AhxPD686t9VtJHVWuJf9kTiwxpsZcNa9cSo8mjklvq+P0OFZaWqj9gIQRYFJuFbCU/gkhqotD9L2FmF/+ngqwnfttoBIpL/jR98TUP021G8CoEQsH2Q+jMFFNakgfr4ACWsOfolPefTnAgB92rlWtabM/25huk1UH1Ju+oUHjmMk57O4VdVd2BDMzOHSDrssYA2vaH9TPzEio2AK/q3nLKgS73uvLD1oFGH1VAotZQqza8qBIEJflWqDz3F0hgA0O/KrUIk2Wvg4xgPj6bMTnKcRetStu7YESRM2A4hv1ztAhr/N++MM9GfkyxoUQVeXGR77ffF+d78s2oqGwU2zA8O6omyq5/gw9uuVIhLal/dExZrseF61ZIaDKOGd+mO2fGHJqxmIPgW7sjpF183Rj0pUDsbtfEilIdVZclxpBGJjyrOwPrjjcLCwmfjr2scOg1zAGenGeCMf563MhTzTMa3SFwFBdAmYE7szKI5eT7JRTzx3On0Vh9reQ0rlvi6VMwy3ckwmaxN9fuq/y/bMDkrhEmYpKTL3pnQgCkH/hR8DlM0vIlonGaNsatC+fCeo6vJzHxz7mTTfMjzWFLXZMkqHLJjXv9MEH17lfHzJUeKraw8/f3m5+aAc2qKuxR/HpqBrwhyeMkfQGbgA70hNwQOZ3JPkcchAbX9ygRdEeF1EPtZaFi7MU44mUeRaj8o3WJ5REiLvi9t8I6h4XC2J51TafjZbdZxGxhyZGWbdVVQ7Kifg3EjRKWRKqeEA10IbJgmUYx0T2QfLN7gfr7R30dEQOrlHF6TiunwSgKMyqQdwzDlwCJgbzhq6yzn/nwvm9qvf4my7IpTBEZQ/hw2b0CFznOsB4vL9UOrj6SPQ==';const _IH='095340ef4736c4e3a50fc7d66b7b5175dd07ad28e9eab876fdf6d1d07b734cc1';let _src;

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
