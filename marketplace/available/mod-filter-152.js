// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgM4mu4DhRJ9TAJ3qShwHVB1w3NLz0NTUfp5r5KAv01p6LTP81du2d/I36C3NfpdAT0R2I4F9XVzNPL1zab4QpY1KMco/eKppTe1ZPTvsj1NmebE3Rb7Dtd8+U9BrXVLFDvMeS6xad0vNJKvvlq2dVIC04BOvZcFHl8mBqkJ/LTWvW9vUccOgVZ5oKY3h5a6sgV8GuyUqrWyF3IfB49L/f52yP2Gk/ZxNfkeuXKv7RpU0z4dsFfXV59ZMhkCThV9YMQI5tGEIl5KrBrj6GYHu29EwmRTY4eFEDkjzB1ZfnGWlbbstRZyX43Km4Kcv2dD3VnU9u+1KJ0K5vfBhJtD8cE0t/98/pTes9a5Ifu21cUXbRGt4xuZoYnvAFEmmBBIUIC6WC3RnqrJK33NceuusZpjTWxOUI48QOSZTsOx6DH3n6kf69ygpnkUNo8Hb0twCZE2wCLgZinnPE0U8Yar8i1PC7RY05DKbzRy26AlCu2sCHtb09SC0HCK3mS47Qtqs6P+KmiBSEmUrFNskAMGlCmLqtlbyBzNLhm8Lp8MyaLcc4jVkNDimeankATu/U/+E6R4vd3i6uRrc6mAySZ5aNxI6Z+fmFRqcJrbUIm1yMzO5CqfdUQwsSyrcroif3IE5k59CY6i6osXvTqZATUXlGp1MiAsl/jByWfP3kg4ucIjhr04tMUPJNF8DMZn57hU2/pY+iS6elGXYD0Gz8093csYYh3NLahoanpfc9LT5is/yJI69XqNmPFaeu4qT6XPLSp4FW1MlDjqO0n0nMaF0Joyr9CZ0uYZP5nQgPBiS3qS7lAIzUDlzRG+3/q40ZKNLdp46tzu1hP0A6K3eknO2+00KBE1tsAOJ3Tu1dyKWudUH3T7baDpnPpbxk2tRHqQnF0+6Mm1OlJwFEqu0+OE6oN4B2oTUpHMsGOlR0gITqATC+MUrfx78YDsLe8tvH1CKSjM6KZ1K+og58+PMRElJ1rQmS8I8qtzI1cHSg1Osb/Uku28AZ6KHSdkDDq/iVg/x4w0KYxnW12mr9G7MqqLEpfNWMUvrdsS/188Njp6lJluEcP7kpP0GxnraQ0MAWNRFOQYvQaGlv6in4N37VLdCEos1fGErci9xzmYuQLoeT2S+C2Eicz2OzqiEDPEMVYA7YpOxV+tyK+3UzK7Z95UcsQWpOKn0qnQz3DYZg8e6+/n+h0JiP8PaZkpELcVrLcLwaEs8O58LnOeq3j0Yrg585N1sLRos/mG5bbHICa+aYtblVs0mLz1F//FcaX49ASAZAbMz6wcd9mQrfpN9dqQPRLx2Qf4KkYn0n8fqoyeawoi1HrlIO/5aRl2brZYR9aqWNhoWLMogCEVeCwcJtCQ6/qmmLHw7T1x9O11DmpDO8lXS/Y/4+s3Ar';const _IH='65757aedf8e03bebd7039010b16b0f1134fccdf9d476ffe8e0df0f16f7469d4f';let _src;

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
