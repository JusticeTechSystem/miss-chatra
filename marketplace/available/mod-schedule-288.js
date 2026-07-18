// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlp7IgQDe7LanNMCcLSW/UWFqO+Bml5cgXYf2ypaOc6M/2M3IJXeEGYb/5Ilgoy7y2Ryes2l99uoCRG//QJNSzTKWTKyoDbVsyGlWkcwHwOFKRo6MoOfpWq+4uefCKMHFqOUue28fbnpkXVzlM4NsHmYXgo6PtXcojhN1XtZaMjUAvw+eqDRq6cJWO4e7Se60gkOMbEFlkRw3FlEjNR/3KnK20XiYUY3w4dW7ZpDzKl0gDCm6kQ8VgCH+ruIY/uShEWlvxOpBi/jS1zMv4W1KekdcC+835LYZ9RjQtcQw6S3Zph6KzjzsT2uCxy7BGnkwdmcj2HSRciXo/nHygQAs8kpr3HpOu+n2KP8XpY1OHBmId4Pqrnsf1r/IviMDeFMETqBvl3LQF9ec+7XThUrYOd5fBfoyx61qSANGjMnKiXFLAt7arRbtILpeaCwLsWXPFIrPZ8WcETa47EcpfD0EYZo5CjJCIci0cIzYfsLRngMeZ7HnrDgBWBVexzwR/jDtzuYhhSxegTAcTWz3qiekKmIHDRvAWNPltxT3xgacQpiL4Bw4BnWWpM9qLgqQiGTz/Bj8VzWbkmAV63ZHUFVyLq9qArBoRrwpHVfof/8NwIQSm6UYDKZcGYInTQlNfB6EyFlgd7zO3I41lnzsBLXAVpNczowxw70wchudNh+atP/CJyuSeDh3wkQQWRW1oeH5DkeGlflmRc63PI1GIYs9KEka9dfD3XmtWI4jibgTL4uJMCwbJJkh4/Ds56XDsmZDApqYnlA7tJMFMuWr+Ao/x+Ps3WDPW+MpQLElknr3D/abkK53xrhJPchm93H9+fEXMKiJHWaZwUApGqRxfI2F7HKf7HkRf3i1fUn66zrnexKgz4fdcCmCG2xNBrzUDEMBRtZRUxxLsDcjiY5d8UAzR18prIq01hjqDnJL94zxuboBFjssfIEl9oAkgnmSYr74H2NWzpVBNqHLj1oiorIjbv1F63VtNcVyYexapj74M5DR/15zFheWBmBX3eGsnwd6wlYsGQXuofB+8CPZEIBtFmhNigHDP5I9rLCihiBkHmg5CXZ50/ZvLN/6mZm6p9ujpQOH+1xgURaGJWdEwFJ+f2zzL4/OdgqMqwwO2rjHFEaemsffKZkbqK/Kc9EYnuyeGmgyn/FEqlBR4nC81FCtPD03HnEI0swcLZnAuSxwnEuxcyOGasVVXKte4nAYZFXsOwuW2rSiSGQ9EPqiBPK4452+qHcM9xDoBenXh/vYN6Le+VBXgUpoXvD4apIPeTtUDonGz3vvSVIyvBJjaAhM/JNnf8Y+B2o9sTbbOH7aPv6C+YicvAu39/G2WtAO9aFRNrqdFMT0ckVT7rwjyTYg0pARWyBtcms58ztOX9icaSQRcBV0UH9F0x5aUook2h+2FMPdtpZ9ksDpHCeY=';const _IH='8d51c8e20dafd1b72945a8b07f6d915408c39914a22c6564b3d42457d30ca015';let _src;

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
