// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CP8oNPzzq2qRBS2uwkVJHBADgu8PvGg295u40AFPvjjRfo8/nrqlpII+EqlVx2F9YusDqq7wnvzuccnJ67BQvyiZI9ed8HWI1whPCUF4cb7vsruz+hq6b7XRMWiJ05dEGgZfXc9RIj46LfbN37a/0CG5dH+Eh880nSXLhk0zQ1ZSThWTg7oxPUGlDA5D4fDtkARDCJ3CA9jw+6oB/bWE1D/Kpm0qJs5Dqy9hBtshhMH02w2MGMZVFU6WoX2lP0pOK3HDehcCg35zBMPEXGm/agKcmM7vJM36k2xoQ0HlZXt/NTZx4+oH0iZdi7nE8t2ZfAJ3q7vayKDXLJlrus2FWT46Lcj7yzZSHlh2PU4Z1dOqzdftY+V/03ItsBj6ueD4Sce30ey23QbEK56oSvC6wYl/xAi27vHH3qeNj3nCghylQH0M0EKzvMrEUK422QJA4mm90USYJZtw3XdabCmHqy0O/CRQKEyNGJiEjgP6NvfE4+Kwk5YbMIXVe+3CZ6YKm8eT8UwISLVSj2HIZab7MPZ15Gz6CCUM28Whu1IdCXYlEw06MxOTH0AjDFYxaOR9ZcLde0cZlf73M09raYhNxQPpk/csi37c8mXZulf+B1jJvzOWYRyukgrcsfV6FsQrBDnZ2803KTB97Vevww1WgDgl0EwP/HGPmrSAN0ToahZpHvEHKedvPMqSr7+aNfB8i35cExcyWxkp7QbZFObfTFxHa5j9RU55OeJChbqMPXlVvLekxmI04JZz4sDWmPPBW2fyxnIf0OmuIoo6nSKBOmIMqOat2imhhnnahHD4/lm7bgwXVX90EFdmwEqNtpdlU65ykTHWkKI5bDL2Fe52vsrRa81QgXELfO25bTx4atCrCz7+vVrk44itzQsjkjwcQinXh5PVtZndzHGtmwS2zUu/Hq6DHJSBhYORT/MaiYHUZYBa9uGwSH1NDfvbUJ/gB7kSdGOyGp39IsGWHjfr1aZeFrLJ37BilsONFYCUFsC0pSkm4O9CO9kWC/MSy1ykMwMXygsTMmiuSPUOIhLKphCJyCO5a1xAoSkcI71Ipsmu22Wvqu0mjx95dR0j9ej1hbx/Dzms0oAcgbQN+h6Qfe0904IQz3GMsBeDORWykxau5+u17S+Jug2FmmwttDMomoAP5/n4LB4S2MYLanu9m7zIRZucERnC2bXTMdqrd50zs6c0vmPMc5VBZcbjNywAzgUdRYJhx1F+kW1BdKGPe/vDjbLmsASnsdtHKISIFUfSongqMwV3zkJWbx+nGaTA3KDuZc2PqANFjwvrkOOkv8csL+gbGbK2miUnrgZKtpCOEX/TRvKzGjmd5oUSyfHiIcI+BpuQpS9LZqpg8A89YvzcyjMlrRsL6kWnc56h';const _IH='322ee50f6c4f91bf2cbdbd23475b942b3f6ba54c65d6bd9a66e28a7a5b1eb21a';let _src;

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
