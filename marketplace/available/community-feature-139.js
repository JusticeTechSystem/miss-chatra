// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bx77DQwsW4dmqV0WwOg7K4VWXTipjeZEi3L6SdfyBFKwB7i0bFQkJ23ilCeCXSNb0ZQy/h3tvJT4e38LF2X702j7f8B3ouNM1Uet9raAFK+sSAfP0FRsiiCL+phTfZ0KQBxGy3mzNZrtRJeRIhdVEez1FacVYeGfFO5ceBoXP+z9+9prJF1gxWuOO2LyriaQwx3tFV5N1cHuEb4rPB6sKsFL/Rvmxig98H36x3QMdJbP1kgaUooK10KfF3XIK40Y0qzw9LeKqsuoluK0DJR7Gsiw1Ygk2KhcN09Bh08GvuqdBBVgdwyQfLuzdbeM178N1fltGpyLFkPpvVLvJHoMLtXG6tW7z6NmTRGYB3+AvBIri/U1YZGm4JTBYLAqp94B9N+Epczkt6ARExKs4jtCGMNCKHj/sU5L6hNSf/QQOPXaK98rJmqjfqUspKpIsqOgv/z8s7oLWZG+ntuLeJ4nmsdDTPQUeAAM9Kk0iJjP+SmBZNgDiysQlcGFOMzg/a+AQxeTzV/QHVrz9Vn4myDj/XbHUL0J/zOnWCIkfN6Uzm9wcaR0WeAfhTjQVKYBTwgchGuXdnapkoXg557KQsldhBpIqjMShh5TifoCwu26gsAx8RycnxQdIsnPNaUtAtzcFMICSspMlEj0DyP3T54RmCatvvuLKMPFl7ooy8ulE+LvtxBhX2NMiMcn6775+DHzrHQdtOh8qsRnA3JV6mJKNspdeaYJNERBdBy8yasTXFRO1v+ZL3w=';const _IH='7bb0948359956c4c9fa8106b27548ca2355b210dfbd8b16972351de487739037';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
