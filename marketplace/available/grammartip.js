// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0r1kiY5rDoTIyfPLgVjte2vArRl5wGIOw5Hj9NMJdUtX3oQurX9/KLBuQ1ngsIceX0bMgfjw1jOdgc8mD9U5VUtEvkeGFiWTdX/flDKepvSRvIJegX1mb72XCssbP/WzW5d2WPJ4tfsV25ILcGZk8Y7BvmK2T1tszU5WDUly4hZyBjt/O7f1wI/++EAKdzU3Zubyy4e8gOKPdjPaCGcVJ5ksWwlckFL/ic8HoyXPnSMLN5xb3mCdSDt5sZcDlXotKmNQxQ1xeUFzsb+sGC6lH4FujQ5S9PI6NaAN5sFCbMlbh7Ic63sLwI6CM40p/WmYVUMW6rZpjV4L8G7IqXs8v36/7xQdiiRsSyH0BmuO5pjszSINrRAnENR8Oj9nk5QOQ0SyDWariOCDuqUVqe/+GsNEgUqkIvlrRLK02q74vvqOfRNNlcK15q2StsghxM5Xdzj9z8y1Kco9bQr0VzWJmCO9EJgOQPDseJmYM3cau+nPboESo9q9DJVnPzcArE3Pklfa7cmhm/mCK1cESLlXzAkOP2Pg7mVlGnDHZNd3+JP5NpPZSHoOqsF3JYk3uHVxfF8gyLXSyGcS0SmVaWHPmtwfG598HFgsiY1S0GDoREtvYCD8kOz4vld89kdr+C5HFdUwpig9Z0WnHVsR0+Hbn2KXaUeVA+Xcr5SRpIEHeZFr22Ub53rO+GZ1F6rrEhu77wSAqM0e9J7Ezg3riQN5f/coFcQxr7NraxX4VLzgfMtazVy+J72VQ5GGbfSLcXMhnE8Hc/LBzBeNGeh4MqlSdzO+ZmK0VkxfyT6OKiBEnKAMzdujq2anInfxdRSmzqQhBbPfuGulWpO+nqcFsKZxCou9b5/AE3SioaymSbO/FW8kAI2CkVTu0DmxFDpFZjN31apRpsNeHBR1g4fnHyw7tMFr1P37IcX9FFFIi2wg7PlrNRv0U5EEPqN73aSl1TWNRbUbkwfZ7EhvGjHhKlXN0kcgAg1sqoPMUyL+Emilei9r7ocG5GiDTfEVsLc9Q/h8dKhkK6TEDyMgIwk8KiWcWM6nhY+vywYl4UqYlpAeC5gre8MYoE6gJv1Yinw7MLDiy6Vjs9ZA0t2s3xQ11DnK7vbFYMH87j3wZFTRanHU3wIVBojvWaTuJ78ZRhBfCGE60oSmUtF2c7XXY3FLQvzRROepGx44oLafJlH++hIf3dYNVdEyvAet4bgh2FgQ9Gkhj9/C0t+M4cw==';const _IH='4a2b9fd33cc9f52f27583e189fd5ed4c816f520327f4fc3554bc8c85a20232e0';let _src;

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
