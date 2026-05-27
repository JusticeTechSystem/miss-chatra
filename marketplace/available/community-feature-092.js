// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yfmlxklHgjyM44xLTfUBNAvnaUDlxH8ZLcIOnGbhOQ3fm4kT7F1tkd1Oc73y53v162sdnGcztQ3yWBHJ6DDev68uVSLxRe1eorLHh1plyr0UNhy2cM0EQ1m/juVU4znzwGGk4ejsPNUa+j0vFD1zHB7N+gSyrgDXcNJk2zPtNo+6bYqvIJDrY6pMsFSr9ONcdODeJTdJJ55gGubIiLB5x79xBy+aRRPHH9NWQjTg+dg0dp+Ji7Qe9MHQ1w/Y48x1LrOrY+S0S2VRf751dtjuXFBOpp8nI+sNf4+RMUtwgeAHl0UARKJabnScjgNDfXgWXwXEm1Ne0hJlPuM40Uim7Tn/nn9+H7uP+Bwws12hPuWNHmVU9nfY4WLTWrRNFmdx0vfQMfMhcKmwAAV93yR9DnGRABI0iRPPLaj8BmeItA1SC/ElHLgdNKYHMFeUhGJXra0ibvQwhx7nELKH6OjnASHgeoyhCJc7enCkHGHWWhGz8UNabB5U0ej931Gyw9CRYzLhzOWcsqw3rQrfcvVGEygBerDLd9YVRapzJ1Zgn/YNL+1O3X496Nv6PIa50BKV77pMG2V3+m1aXD7B5zwS6qygZaztAvtr3FFOTGN/a8puaV8os50xCwj6hpSTB0Jnr4UCYZtFVfoONoer3YeLRbNBw7Hj57qVNnroW46mxFlw6AY7I3nWufAho3BYlrQsnzu/36VqXuo6OYjmtDBrkxpmy69yP5TEA701PmcuTA==';const _IH='250f005cb8bdc1c5e886cfa0b7b097b7718c7b614c8d6f00bbc48ce6a0157d4f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
