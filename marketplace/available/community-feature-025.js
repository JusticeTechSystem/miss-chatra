// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D8hyA6DTOrLdCqpt0eQPkZdswE6bRpldLx+BLtGxCsZgM0d9PbFY1d8osSgrBGRAWCItJHXHZDJ/WK7OxvWbAK+cu50Eh0pv17CVx4I4gCiegCyonoTypoR7RKfwSbXboidgHw+VNqlEMP9y+rm/pW5hlgCr7PPwbz91ASwGJWDy8lmgzyOqwvodTB2BNGuz4oqIwNmXAc23znPPAKI+eowk2fsZhaWSZ+C5x2BnjoiC8UGx5BiBEbwb5JX4AqRdYEdjGnU47ImhsuGCWotrUj0IBpekQapZhgPle33H8Rq8WEQhNFQ3RjTnrz4YcT92igMZf9ClREzDn59wbrZ9eu6FbeVIu4BU/nKLgJcO/SPRTLXpsh3B0GZ8rX3kNlKzRGxzofsBS9x26pmxE5zOTjiQxtALOcRpcWkQLpPsuKLSQDitwMD5G23Xruwpw4psRqatwu80EzzqD+khXa7pH8OtZBMsDEomzgMZTMhdB51S1eVfEf6YH1wFLjDYefoQqAsLh9EP32HUxj50Etip8iNJ1iYY4vkhOK6laURZCj1DWwT08nbApm8rsmNjcWxR7OUaLHS637/SEw8nvxfOXtY00vbwoI59kbf8wWDzSgprzHNELhbTiuedDdoo3PbCzea/kYZXDyOoG0mzeRPpFvgFkl/G0Y3i/L/AOtIIKqc8/Dn/V6X4ABO3NNdxAYwaXmKY+Jc8tuvBfWF6WHP3K5fWgo/iaXrVR7nJaCc2rh8GxwyVpvU=';const _IH='67412483687e98f6dffb0705d7a8a57d53a20185a5cd1200bdafe3115c5f2c2f';let _src;

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
