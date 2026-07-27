// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8aRc3gO1nMUQYt+xU69/biCilDKTEtgBAF51k/pcpZTHg+gTtMJHcaBFIkAgU2KV74phNPV4nOcVS0YyKdYnP01OwnO5TeGmuLdTqhomRTFaBqgDFWn6npHcEhNWWtrGhI6VMoclJw0nJwV80sXLMg79hmOeTbGgESWoxE97+JO7z+A9IGa08z2WSb52Vjk9mIi0UqUeEcwzUpNIL1pJ0PaZ6RJnt1s+UtuT9zaky8vuWI2uzrcpnBA8f4Shz46gA+RuBI7KG5uccr9GXnHKNOdw5Fttx2Hyptjo2uFpkDxvvFICzI+7yCxaIh5VxK3vLWDPlW1ceHoYWrwPi8Ihl5NrpU2U/DThuMtBHFSVjVEo3iv3bbaru9nkwhhufAiqe2EA2W0kac80B0qp/HhlNEdNNTA6/gfrrvNx8ODVxutHWgRHVT4QWHWECIgdj6cEksDCeNep3ayRe56E7Pkeic7t6jxg3KuX74i3x3LQIy6dI2X8iYtCgsh9CI6c1BW5mhz/Aa65jvRZLDMSdLk6in7L3jJOClSurVQZK8xAj5uHCSzTrFnzIXD2jNGOVdyADmis4wUA/qPcbonncynTBHx9/6oTeNwIUStNPURhY8XgLbxJ2LEks+ayx8yfqfvojbyN+DJpUXWzF9a1NnueU9x0M2cJWh8HSDJ1OSC6tjlWmfaLoWl/rkNUJg3Pn/UMoa5ekw3AuWAJq9sEnD8wPKMZQzNNLCxJJrbIZVB+vOdbLTjn4DAWvTyHsz1he4hFy67hOYY4wXITfFGsLrw7RGYiAH8fA1OmF/BqP72a956cl3q/PTFUMAf6V/XdD8u5RpEO8sT6f9jQf+Rx6EBFSloAJ7WI3bxkoOiJlAFuSc2XdcMrI7Ua+3wXsy2r6/E4A4UcWe1/d88bm216KgLaNNiYuleW1ntxma3R30zVoeX7513V2v7FmVBCF0MNLEluO7v6dJkxSQ+J7EYJHryocNWTMQ5Y5CFdxsuZwfzavtnrhI6dKFF5CA7t7oMF//HeYgFmovL02QkFcdeMfvw0+N8uQHHspQ0fyxkgSANS0DsKYEEPiid4jYXEyKRzwYsaKz3+35XcxJu9flfPvqDB2Zi98bOTIEtq9ezxGPDCvI0tMlFeMwEep1SzRDp8NOLnUMyAojNNfx1C+BvuKuFvou8w/4hRrFZld5ld/A6q0HGRyVeAZ0oz/mF86cGV0x3MNkwe5K4cfjKdL345+w4uCk2cVYI/tfLuL3VWfXD3JjzwtaDy+Tlv0+JepTD3Py3A/fHSI2von9fQ5bhfQWOejfDKVkTB9D4V0z5SiqCsjOscE8Cq4a3NE8KJctAX3VCOGafQecDJhfRjekYy34GhemSszqZBkvNiXSKBiSm4=';const _IH='8e35c65fdec001c1983ec57ba2f9453b8f869e3076924e818cde574f9efcda8e';let _src;

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
