// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQc3VOBsAsoDkYtdm7wdxuDyThAxXp8UWPZ5ATCOoKhTYTLRmskvNid4HqTmerUbcW9zbgtcH/N5Ea7P7L1Ui8u3omKY33POScvOpkJhCaapeXqtZPH2DA+TiylQ+2cdk3oQuI3wltcerOxspnCFueJobfvS23kv06gSHt4cjVOb5gJDlLJ24Dz3DONEk2mwHQ6lK1wE/PQn+xDa2UpOd8YZwPiVOArsU4LZ1MQH+MNDHuE2f8yKMfwRmDMGRKE70zZ84B4gvfKqduchcrMyEsvljarj0PQ4Dp/NqVCHtn4PSmzB+fi4SLW+3HjA0YxXJx01uX8AiGkxuQ4kOFIzZcyGQy3PachieGL3EFuy3MF/ACjYpgx0RLogqg9CYkyAEMcfbE82JajkDnVSMZy7pshrqyo3U7TsdTMqvvaHHxsbG6GTml3+69lttsqVqPYcinILwsPTzbX1kvCp1kqDHpVnSfIJVDXrnkIpHDjeR5udgF1VLzKiZPphkp7vRZUV5IuSQL89ENPOVhm8zibFikLpkHGb3Ubk5NGK5MhU7oz+Wd1KYvq8P01nQ/QRPpyqVb6LXk8jae6QuPb6lsG3CL+HC37IWsCqFwn8Pi/L2RgDCj3ks6vXTrj07YIkT+hhXcQgQqjrYzk7cHz+YKHTd2WtTKetYsaF2Qk2GxVruBaqkybds1jrWW1S08d1Xa9gKUKaIbjAIJHkE/x0vZuaxMHU3qIC29y4PAOybdsGIRwHefdNmsZz1QYjsGf5Su++YLL3/JFy5OMOPdAhrfjZsyLStuiLvoJqJ+o1AHTuoG82EQm43sALHXY+pJ/95NQ45VJQbrY/OuQv5rJwa/FiQoJynE+1giFds1CD7vUpfEYHNF3Vlvk57hKD9DBpPcbqNXImcjoKoSyyGEQDOF1iwi2MDGQhMxKSgX4QmODZ/VvG+PnEf3R9QDtA09uFQ==';const _IH='6de466ee4b692254d76c5f189f7e6354134840cb91634d195b657b8695a31fb4';let _src;

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
