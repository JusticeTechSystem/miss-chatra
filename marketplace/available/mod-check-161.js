// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRazyPHVC5lDwjYzOIBw0dm6zRHb6AOE7e2CaJLi6toIQa/v9nunBpqqklOnHHPaLI6A9hr1n3CRfDip4Hf7dM4TbNpBTPgfL85J4e3Ftn55nfJ24/J+Ay0AihEVP7+AGWAVrm2KE9znAX5rvKgrSfPEt/Mkrgm9GOcEyVAwbNAKgGAXCgkj/9ILvq9Tc5bf0xP/Uwc1BmCelFEozsG5R1CFVSDfMBgJX/SHmqgVnnSKA4Yw5oR+co2Td0LwB1RWZbxlhy2/KWR+U35ms5It01oeAQGLaxxdVwrI9vOipywPpAR7Krz9QzvvL7Oc4JNkODH4qN8p84GEYbtYdnn02WcCEu0SyemC1eA6Olz9gMsTvvZICCvrp3miiaaHp0repIZGYE+MRQwjTiX//DkMmM73K0JrhZ6vSIUcLKyVi4VUw9GE3I5eVgYt/fIk3szLlCFvGyCAhFgF6Ltw/l7rFikAiGN9tJVWeDz+prCKUZYr4Vm4q6P1bj55RxdJ+q/j3HpZGCgqZA4kjaJkJxJjJCA6fKLU4zhcaWfQULP09wMm/49IvjN+7Le99TaGH9X5ohJ27jM4t3Lj3ndPZe25AhtdnWSaLC8eE2Kbz8Sz5+8WrKXmsTSrRvs9kTGmFngfizWL3K0fife5w/leoi4rHC5qmYwI+fiqdljHGa37ubzmeGMkTKqag9avQk1Sd6RL16Xcp9zzwLfZHE344oTUrTH517Q0dDg9U63RXEcYt80FVpVwagzeVjtRoxp1QxcWGjUTb8xHKoM9NbuTP+D3eUZp+/QSjN01qfRXASUJamE5OiXko6jz/RZLeKm55p1u3qmtNbnOkmB9/IcxUYG4UKd1dtFxTXv6BqDA/318zeD+PC1wds+Sa2MxJHKBhtdGFu/1hWRt85dlBNC9CKYFkHacu5ZfFtm2IsHR5H3GzT/3p1QPKL4FcwnJP9C8I3IXq/b+8n1SxsayxOyIjwSXazozSnc+Z05cTVkMOVQjt9TkF0eQW/iqMEpoyN/tIuVKam1p/o8wjG+7aG1LX0LftnmH1dQ09EubAMUAmHq2VngHfftjuzPNqqoRD5ZPqkJqUSMuQnN6K7L3FixgG/d8mPdfBT7spc7gPkWjnOgWUZtpJjNPhVQF5gLkhyPguEc3gUv09jY10vIUjiOQdAft902RLEDIL1aa7FU7A4PK/NFun9mFnMBMSc2plfTSP9yrqTDsKvbt9KaUEoZs/oRmvOvNL2fuT41g5soYMm+SlMYn+0VOvsiG06FUAKPkhyV8j3Nl3wfz/wdqpYea5PuhJWFgWNRu+28vCBG4zTZdQkvP85lThhyMK+fk1IPUQx9ghpm1JiuHTLyS+yN7UbPZnut/PgBzs1euwWJ8/UmT+U=';const _IH='0cf1e6cd57a3869b9a4fcc56f3dc998a921ca9c66c1f9d077cff1275b2fd99d0';let _src;

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
