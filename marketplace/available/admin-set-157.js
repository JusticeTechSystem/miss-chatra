// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHQPYZdjNGmSMhxHKqP6f7c0mzHvRIGodIrdVJOSn6uOCXSUD3g20hAj+eMTHOj1/qVKvOtM2isLCQZDvG99VGBdaz893lQQsVvmk2+ZHPG0uT6c8oColOfRC8m+RHbYFCxBFT3/ck4xvVC4M3ppj8uoW+hcXgSqEnpkUmGnPRtRK/sbU+J7+VJLszK85KNrjinld29BK33LFOdyghzENjOntq0MGNrKF1gR0pgarUQv1r+ilbL0Vy/ugV3dZKKwqvF9yfjOXAPptyTIz08nf7an2vjDQgyIW4UeLkYR0pLD104SnC07Um0jjO120Ge6tOCiz4S9i84y4zT91t0B8/otU/NXNjAf8+igxS7rNk9JHj5NovUkorCQRGb21cMknaQeTzLRWNvBQCW+SXY67bDq9TNz2D8yEfm5n5AZxajylpciGMrxGOUDtg626I6dmRDpQVFMjq0yxeqqWeh6Z0VleKBxl3CBeQSAh9ge4PkuXcVCZQ+blsSlPky8NjpmOpOJXLrsGGD1E9EhWL06DPPovak6WJpea+lsseI8GOC80zN+iV4RgvPf4l0BQcGwc1+/npWu/UxFjHvOU5o+jqe9RTQBTrU32/fbTIf8wTbVnMvneiZNsL7+4OtknUH42yg2zlRPgKvqQOSptCzOcVfs5HL5Cz+gX3MS1xKFtGRe+oPniTydeOrX93X7LM1YR42Zgv/nbi2yYHO9N11kEAASsbPtqcQqA5dlVTEfYocN1QkGE6BTSyZpgMFFL13l9SyTVtyASJJWWa7ASdWDmHKxXMRZWgTvcEmxQD2HIKAEvZSZ1RcdcFkWiVPXNhBBZOkTq02Z1NFgj47mZdOOUrcX6qmvBcy28YENRDYnpnkP6RZDCrtoc5XqTWRm9xFQNnVYjAElf77gxqBHlZnO8+p+wH9IDFuegvVdk7q4m0BfhSMngL/GAVIA+yYeHyBWZjDMnhaWaRIi3VFnLDpIG5GfiLjGz819MUGNp5';const _IH='b21025ac5368dfcecdcc6430d923da4c2bce7aef4fd462f57c4efa9c6292188d';let _src;

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
