// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3iKVeR3uDIs1Bb4ouXvsa5B4nhD/aRD3TidejzA/f1VytBUwja1i4SxKGSo2Fm6fltsuuR76SwnOSK2XjQ+IDw9ebPINRNwMR63oi+YqGZh9UZ5loXmaKkWpaBabVA8FERKfs3M6kMrU+Pyx0zNSD1JjPHPBVN5bfyXqV5LoC014CBFl8beYDFzImnLq7BLTGNkMqOUfaLJAV+HSyzZc6grdvdbRnl0qfEdJJVORUM/hiIAUKGYG4VzAj2SFvgZiz16LF6bG6qnz7kFGlHPXy04ovdhJFgO8l+XAwHdkPvHZY9rwPm3sPjRqsKU842BGAPcX9AlnAWZTQnyN0z+9ERBX4WU+FxDNLL92tpogntIpRsKzS9PKBpVeMJVf28FRG5iipURIL5U1oye1Zg0WtPlogFaYCBGDf4f9PYDBVXhf2X4isvz5OX3U/L43VlOmOdEVsbiaQ2JHzT0+RFJSq8qJZlxvwGJOw5UL7+C9aTmTAawjpiD/uaz9V6kVf3CsZAD3hW7mpyHz2UtkeFzbnGjO6U3mriRypX6aoispAM++85yCHUnxRv+E3vIQfU3TeFGKdxOTzJ55+S9xg0OEecCq4ncltJMhwHhMRLiXE8kZIaLZHkL0zecFVSOB88Aaz0loLEwg6XTirGyqcAOx9ZXLM0lY2ynP1mv6BWDledIHUO4UBMbEUDvB3XkCAPwXoSOch40SyAiPjxi4ocACSckL364RHgGNMKQwHYPknwFhZikJBKFdqNqXMbmEU79eCQJDRLiObaUJvlQXbdvT57GR0Jrbr8V3pz5zfwru/oEvq93Or8fibNI91Rtbh4G1nrvi29eiZ2vRaNsW/TREIPP45z3So+HgMFoFL5TeXSk2AffZThZ62WHUvzJVntPtYeXfYCyyanJRx0hchcyiiuqE7T/FLoarYYGILQC2V397Jh3tYpo88oDBNH1cp2qnLygfJIWn0PgtYU5IZyZKNytCUt28zgw4J6wDZjInGSlbaN0DCbhc9VMWKY7eh5RI7gqQUrfVtbgWZb9oGnRRbxfVR3VOaAtzYCGP7GiZO7FnbESg3iKKR/snXAxJ3m5j6JLcMjBaGM/7GrzmB8nSWpsxtYHFNnbPwgCNocyU47ik8C//vzZDODdpWhCXOcMvmU8WInZm0M0NLMeq87LZwDBiqzUivpx8B2S0ntF3d3N0XqxsOhEiEDiO7lc+qsiFpw=';const _IH='df05d63370f2881e309c1a28a7908861a28a31fbb60f4475a2fc214906a122f7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
