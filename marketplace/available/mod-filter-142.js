// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+ELvdzO2AVeqQLz7YTHV+25d9i2ZzK2ga5KFv3gTMcn0aenGCBNrUoidlXxTt6ORKoUfF2r5zU61ztSTzu1ULBNXWHc3Hda8LN4Pj8eSm++bBcwHJ6Dbhnb83RThE7jBelryrKN1ioSahfCL6IeaTAU7W3f+fP2c4lHiXUTZN1WlGk+pxQgIUPEKBmcuAjS/GYswG5lZHjs8H7OwBKgYxYhP86qLeH4VJGppOb2kjZCyILV/1ilcn2GG4kJv6K298CU4cgGSaIctlrnVbiutYFZ7qHsuz6fP9E7Y3D8dNBPzvFDLJq3fcvI83NhwoejOvtX/i/K+GyIfPWO9mERQkJqd11BCUzFToO0qAJgF/ZMcH63H4F/TVTdPS6coqvNlbRKk9denMM0AINFbEGEnnXj3so3uj3VleHHf4Vx0X5r9LlIbCyE0AtBWXt33nQur/Zc/WawAgDrx9XK+tNEh6V79adMDXFzJdfeUjdi1c23iNtPY1EQyopmSsoyIh0O6TuNRT2oxHwy7IMdz/vAV18ULSNnG1s/4GhG2eRipCSQJQs1ByAdwjTla+KhPXwHGNngpyd17y66TQLLMbVPF+Ll3xEL27Y5TNq7m6VUPUb+ODXSUlHAwuacaG1eBSVshP7pHhbspJLP3tTkH0C2B0cPEwVBuyj4EGVX9VpwRaFFddHs/H/ZeCWCocBd7ip1daem+gb+PrJ6+1YxKjYPTKKlsTLO7Ty7784SGP8Q4Ct9PQr9a39ifI1Vp7oHZQGDWPC9izd/3OghkS65YPp1Io+q+GwfQpKRpiyAEPfX9+yCUt0sc+mRM5nCnXoy06odYxtd5SlXag8W/eGNP7h9SDXR+xGBdvERAfRgqHJFo1x7vLVkmh0IuZwUM6fqxZEkmKeaYHyCVAiG7K6rlxXm/YqiYaQ1smdVgaPpXNIvMaipFq2BmzjfMmpsrTHsdZ2gpZ2aGZfzpkL155QVRm5woodEog5WtMjyDb6yhTwwmZ0BVqcShuTGlCmAmAwYJjbhGWMHQJkTuRZX5ZXmax2MvKeFG0Tv1AeESFgZvsBV/pV3GSnIKixWlTWRs71+48yQep/1EAQTCfRfjDDxNnpiUMq33ckuqoHesXRnQ7bXcCx5Kd4ENWP2PzHps0CnSFtPTZVM5l8ubKefh8ljuzRLvYB8e6JidktATan9gVG+jeV7O+xvDuxyTKf/kwkA/qZFQVUtDVRHXOOyA+sWUo9aLyqzO8BLYfbSdx8sADa+msTjJbYQF3k4YdK+XvAa7GvI6GzN+YIIc9+T6Vz4BeZCRL84pLo8M4hd7bQxjXLKn2NRU7kBJ7gl9DX2DceSjtcAVBl3tT0vq7Ku03WTRBgpQzFCuwu5GyMDDw/L/bYH1mAynztcWJvYCw==';const _IH='2658b3ac34c1676bed88c6545282ace4472d79e59e919e1bdacb954b73dbf4f9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
