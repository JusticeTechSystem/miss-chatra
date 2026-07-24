// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNKuCZsanvj5cUWq0eVlJkUOgpLNc0DAiMl8j7YQgLRhGPrWFMvwnTQC4qyEMTKBvKy+6lgIO8E5lMKUe7gDl4R0efJ/IEa1mu7igc48S7bbI6Cp6GshnGHwUmhzy+nfR3YYNZYFpfiqc/G+/5bImhNkiN1W62+//IQzuXnQVm9CskFfiOO07TcDuI3uMwsoOwQ1GdrSTkQ0XlhP53FVsFtIKwER2/38xzTanvwkkUGC/VozysKnfOLh7hWQy9kZQCreYOshcOwRKcz+urOdQ7Dmtcb8kt3QceFb+iXtAQA89qr9Mfad92Fcj9Tr/8D+QwuzHJZHA0BGdmXSGoPTliZx7dVxBL3b4xO/qAr+8RWB3NSrNRIK3BJNtHoLIcOQq7OhS1yvomADZN6Oy8IKRRaeKq2JnDv8oNnTZggIoY367Z/j8946VooGX4x39c2AkIeBD1MP3jHrDEhrj0PcL86EXuOIlCNZJoXueB6qiLwHEpR6lCj/eMA36JOe06fBYE6l89dExw7oZgIXrH+eE+C0b8yD0d67grS2zmCXdrBuA6F9V1d+/Vhq+qV2tAMEHrt+tsIq8kGyO0dgdJQF/9RNFU88ZbYyJNZU6FvR1a67Ydjp09LW7VzywX0HgLZHKF+bZ4vXX9NO1/N0vNy0QdCcHjNIggs/I43b9AdMNyw4/UY/Rr2eRcJwVGF53C3M3zxQ/TdIM4f/F3COtc6g22KoYY+oLUiJPySeeWaXmnIAJBdUeNSGlII2l3czLYSfiAO3iQhFtqIw70w7W3fcv6B2D+OUqk44JGvVXigqvo8lXW27ApdKmbisH0XWHU8BjnuZNjcLpJHbcuXuBcSQ87lmZXeZXOSHhpAjzU3q+GObNSemlnbi21Rd3AImbNbSYTkvBsDW/yFj0bcY+3RFxC2eauYLE6W8khGPtJSR1poBngdCcXwWMoH0c3+X3QS9hH+7TRp4ZQpPKQZ4O+WcbB4+AoIf0iXMRD42DpLmu9Ave7S/HHApm0YeFI28MqpNLZ7W4z4FGC0wtOUuIMl5g5u/FBmwmo7iG4ssEnsFsh2D5GiP/4WuR5mKojNcKlurKdaY7DRsi6r4mhV4AK75y4KbylCNefWfyFidFNltZjLP049YRpC1rKNWn/eYcvE+DeUWBiS+0HfH5lpQC3JS6O3tXwVHqHVmeKE954dFlBcnVTsomkUwOAANnVnClPxLT8JVPcK+axo3NOtfLXvw3T4x5K6nj4o0wiLu0QHjLpiqnXZvifl8a7Ked6Yi4T7XIMGMf+x9gis9X9riwK6YAYvTzmlNKR/QuYAMm8RWZ9h+OZqpDF8gkyuptfoBfhoM9Ls13Srhj7pBecTTn168UAHIcEYBJoowUSdLnOJ7A=';const _IH='32c02bf207b9353153a6c2acf9e71d7c291b41be34b01a514e451ac59fdd2459';let _src;

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
