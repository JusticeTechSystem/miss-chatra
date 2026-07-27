// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTS2Kw7GSjcOX4rjstLxSlIhOS14zJttzh3s4CmpGxSxsbkG9AIZRInnFDb2Utib01OiQsl5QHVSdq2xpTR7F3QNm362cHuJV6dKb7hz+KoRndhtr2hUFD4SugzO2wRLsRo4EvL6SjCC7UV8TxojX/KRvmBJA4mGBrZp2mnwsjBUkgTBLIim+M/7OMEaY90X+QnzHKf21LUSOOVrE28gyajPknNTcytwc2I7xORtau8zSMQVb7WNAkccT4E7CQtlDvSZ3E8GhzwtSIjtFnTJtU46Yldko2yI9IdGSq706FXbqwe1zZtMtfQEG9BU1rdYwvTCAxPo4s4S75GH65sCA3niGsnnQ3dSAlWBTolAA5Nrps3qPGCKKpkg6kGWev6FQoH3mQex8qj4GlsdjqUnx3Sk8IrKmpXYcZLN9mVCL1MwFDLSUJJNspzXg8Koxlvs5GQxabHSHbwmQGvAhGcxHpx/lyE4vuaX8U09K67pNGPe/X71GlgpXXwwpzusG9ZBcK4xlUhmQdt1WtEOw4JXDaME+WEHoLotpkntLOPQVY+I3jkSizN5H3cz3i0oMC5pKflM8Fcve4VRP9fOFNfCsHdEMzcKDZk4WEtOr+8ws3opgWdAJbekIPSQXU00VTGspyCy25SDWodyNR8NrJ9vEDay1MJh57+G0vt5ngbRSZOtF7MuryIy4Tz8791LMC9bJDSCsztoE4VPuClzAVRJV4py6gbrFjK0AalEGSFu8jUogb+M6purLr484GjSj1hhksvfxKQRQrYKkjw6sqvmWOYOdY2z0PY+MCECtgJMGjUY9P1km+LbcDijVnOxSyhCGEpE19+66Vuu617Yy22bfOFlJm1r7AmO0/4a8BJ8M2TGdxWx8eukMHlVslyiuuV0iF5enKQCqVKrs/fIVx8TpL4C0fSpai2y+COY6EcaUw3yPrUztoTCaXt3NpzfbN50XFlzwGo3udvURoPjnc8RY1LhmRUcJkdfG7cBsLvaHdZKmzXiydt6nu/NIzf2Ux22I2pSa2ndjhcQF69VeazRTTZnSAcvb395E7NoyiJsCpftklW03jpXsdyv/i9R82D2SN8L3tnFstbrbGnZ1ZPexGq9NakWniEoY88EJePqmXAwpdQRoc9JdO/yLgvZf18FEqxl3xAMJY/TgXlrRmXmhLPkQvgEFEAaMNTzEPKTGm/NRWD8ptb9qzpMCzT8XHRYMhSLMb3edSKkPZYwUQrYL+c2GoQqMV7duCt1Gfewq9QOh/rPO8fRLxJC/nigLDm7phHVY6mdHmpEBUrcmX8BcZJaEQeGCwlrnD5CyHx1UoGq8NNTsTIB5AWt4Q31sR9QTItdRMfhSCRXKEckVfNXRl2lLARi9gY9F+a55dTPjN2xcRMKqFYMJSs';const _IH='106634334418bb8f745176acf75110c3eff0c7446720cbc638b12131b0cb6e0d';let _src;

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
