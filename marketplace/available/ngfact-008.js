// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5T+NhJJpt6EMeX8zPAr9EZms49r2+O+T+XmclfVPGbufa47dzJ72rARDBsDsyBOip5iSTrGL65hol8psEvuO07PYDOjeCKw+rZ5jiApNHBEQQ76kHyjhyuKa2NsqvrCfcz8nbK5I1qHDVYlJrJBILI36Mw4cfl9B9D68ArfhFWRmc32uBXl1DMKAVsFPg7remYV1zzB36CANBXMjIT7jNraVjsQqiR76lWSw4fqqG3tD/0MwUKoOgKJgn9ilT02flWjVCB4JzT3jf+AKCw/40l5Bo9SA7hfnCfrtkUvYKlTO88Dn/w6muypIeIfAVZNhr1O7/ldJX9WSWDb2NSfbHn9X0chH2VVsfdBAmn/mHZ2yRRSda3S3OAEAlOBfDAc8Aav/TWcKqkLQI13Wk/SN1N5GtiNg1/yiaUsAKUTmctzPCLnvhjVqrd9I2eSHiWoGJTJJQV0HXwXMuW/rMJpw51rWa+WLbwFV+Qcw0b3OmaSCXruwahkHN2U3OdEadF29YKq5c1qrId/7Hp7MT5FZnoRcEpTvip1Z/m+8ocexR5p8s+32K5d5kemhRIk/StVLUQVa/uqpyjO5itXJ5imXKYpmVm83CyL2JoHMmQX/+CUYa0U84XolQdJN+RqFEUIBlM06zO4J+X8bJrEVAGaEcJxHo+gRCkSJiGOyes0XDcAykvH+J1QT9J8wPTRR12sAxG2xvA8v1qsyQDA==';const _IH='843808f2ea9cfb35bad3c6669ebd46e92433317e0a4af8247a6eeee01f471597';let _src;

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
