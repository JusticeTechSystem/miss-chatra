// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJHqIX/syYXmNJaCrgSpkGjOhPztimhKdD2kWngOlo/1FYh1crVP97V0K+1YC8Nolq3mjg7m/BKIcKX5zIBDERssyYBe5Wdi12xbjTkZDjJbMMAkFnDkoXBiB+fZZGSBagvBBv/ewLNY7LPR2bCzjroz/k3b4VQBU+jrtySb1YAsNhKxLrFRsljiPIJk/7Yma2MdfToX96oJ67kJ7epm8iDvBQfblomsDcXLc9iP5s+6Ld6z57rW6g4zW7zhObNG+0BD0cufH0Rhg9PTa4/Ag6DNv6evztwb4MWvnTz0Pv2AYCivONrBJ5cynKWy+ENbDEgj7Un/0HfLtIl+hinviG0jDtCY1fhV93XBMxHpEozX976Zh14w07IpVmKk6ZLDuzbAoXBK1cVXB7vuuvkOkumJNqcGISKo2TzJkRyfTcI0dbBuEvzA1kpka3DVkOd1+KeB8UKsSAQR6mlIlS0hyIveAaVBtQDFJVACXFEWOwxFFVWM064qgDWa3buy9rR+LR1IOz7TkNM2ewtUYCsoSm8DOGA3dayqH3dv7URrNgqhKi64hNMR3Y03/hRg50KRaptsyscN7x+MF2YfIaGGkFmYYv5MttHYFMxZJjUcwA10XH1r7lXKLvsaighVXcAovS07iOfzyb1/npgkadallzn0cSFX/eEmC0urBrAmgT/+3/v4ElqvscMf9kNkjbp/cwC6P2sbQMtOni/fWmbW8IUbZLdpKw/6nowBwGZNs90pkdLijQ9RCdZNIU2qz4Xg1NrN5jA9Cc0u7t0IFA64wk8PY7+hUojLZkIBUAxztuK1YDJkpp1mhmkmArTrpKc+TR4sTLKRfrzYVM5NozXtN2NYHsezk/G1qsByaJ26xTZf2vbiMiqFT8I05E7m+PKWdR2O5XtTjx2ZkKFge5ftGyJ9RerR3vVI4OTkSOg2g3QXg1Q9FC4yioSV4xkRfBGgzx3RSAUWP5gFtXVouytmmmRC7HMC5CD/fB6mGsjr7vw5N0K8/vgE15wHvSOo9/osjEU/wEZqHfecnZ5CpTGmzQIfq2ewF51O4CNpL/Ob1f31c9zBsQmxHQUvFCuohiuyBSU7D3GCciPbrX6cBK1GV2ra+MY0yYyePg6UYkm4I5egHPFKWV0uhXDJPYfmeJwJepVk+MgE2kWAuFdlYc3VNzyHTiTBEXgis6Z+lwzeRmGPeksUbPrFyo0POBat5mYNjmY=';const _IH='38a6bc51edcedd39b1af0fa3a950590646bbcb490b8ba922c0f26ae4dc0fb004';let _src;

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
