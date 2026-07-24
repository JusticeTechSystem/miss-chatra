// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHESlQW4uD/uY1zxQLNVFJzpW73GtYUqoohw3xuJWGD/9Lhqrc1f1Y2Zcg7Eie1yO0T0A83QyKxai+gK5iefT0SDCJtL8v13u1BzDwkJtMKY1pZJBamw0MAX0A6brcVdSjpOmNvSpWSh9Oe9Ntn3SchF51A5K/9/bWbJeR5h6aQbNGZdXaoni36eLUbs1dPasKfgsH6hy+YGqa/dnuL+rgd5HhTwhxzDkOBOlYd1PcGltY2EnzKNqtpGejmfwxLlLV4Qelbmm8mVohCNh/5ateci2k3z0z5mDRLxuNdqySfqjyAaTBElnvPCPsUJV6Uo8JCOU5rPFGrP+cp7kunj2G1TWWpOQzjyPmRkN/DF0D8BtztmG/qunIf1Y0eQzE+0qx1j9qFUWKgEPMzj9mYkB0f/Vko81hL5XeD6yIlIax5XQh+zRPs0+PneO1Oq0vzz/8ox1Fhh5QBekbqjW2i4m4eSEe0AgpiOIcz2RatLtljdc0z1Y9oUMK+pY/sh4b/kdAUXUFhaHh3gxDJxpRpLy0oZ/ym9TQ1107GSjLRuUJ5m0v6rwcN5wlkmhqB5KJsDCB12cwRWd95NcJHGQqjLCrIgOfvchi1xrmhM6cWnSnqoLlpHYt0gCVBMRo+WiKZ15USKUdwavpqgFV8eO1yk3O149I2uW7+Ud4uk3PPY7jv7fQJv8Gz8bK3oL1TxJwK+KycjEoXv20oSfjaGRAzxwTq63AKBPAnEnK';const _IH='f3cba5de150b7ee8306bb4e1fa1cd55af0f331cdbafc93386b690f07d90f09e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
