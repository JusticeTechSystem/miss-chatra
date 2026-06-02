// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dHZIaXZDgoA9+Y7qx61h6j/R5XgaMlqyR5Tj/8UZHGZjQhXj1DnkVEP2zN4S2+YK6KvCI0Oc1acNr/58HITeVuyWsKliJWsxV2UjQugf6zzdV/fa808b6SERdjqwMNaIEAWtP+0uT0XXvPCznKBgL/xmI1f/prKEblFmkNmlaoylxAtrOP96R3b4sEXXwhqc8pFK4Hvsl+Nz2FtmvsUeeXkBjPr/pxYXsYRtsx+xR/ZWuFIJVX46yMpzmhzgFK9+pQiwhRE+KzhFM3z6F7Wiu2La+IPuPz35V/KTlms55e4YQmjWPdD6WeCKyroPPWycCez5uyIMbVzyLHmm0e8ZIbi/5OPzREXXDPeIUzUNZGkj41rrhS79xLSHnunchhSbDJ4FRSFDxyN4oLvB5kc67bBsQwiSvJ4nhxuvPGlEbJiZQ8pItnavupH63a1uc4aTV97xCPc8xhEv/uri/nUSURo/Tnc2MFx1XayIP2BAlNYXPnNk4xZcA9qZlb8UOhemq5N6954JL6pphTyNF0U/5bTok+8De8AALU7ybrRtR3r3NgnvutEgzbJuiC6L6AB4i6+KSZwpzZPLuPFhvS+Kj0m3Xy7520/IghX4vHgMDicYZXITcKbUot0HeZ2p+bSJfmDruAP314zwizvmyVSjObjpuTQio7tflnR62VRGK2JQ0i4RhyyItr5X5iJolKTrvXktqPMJ2d1I/YvNqqJ353Vy6USsoL4swDm4Ey19pWJkielRB20YsGPBUT1k9sdzQCdXt8IZMVqT2ZEd/J9caUC/eyGVA9EFNJMVgx5w5XKDWEjyEbBZmQY76dGg+SrPdP12Cr7q45pAN+nXxfy2i35P6z5rb6vzan+kwur2mJvmDvaVu5bNlQprDGXTu+n8gfGKi0p+Kw53iFwKIGNebf0dHyiae5iqT8heZ4ezhss5JnYCLZBeZSTyrOAAhC6fMyMpYXQPjJXJAGPw3ROWrmFSaAB6+P84EjMuBKXZ4SJeq/xPpPz/oWoD/WQtd0Cue3JTS+wpxDyCVul77a6kFrHA1aYslHwrgQ8ZoAsa/b/lNg==';const _IH='c4c9a8ed9c6b355ad1a52765f2c909c29b6e578ca15b920eb4b08c3976075b12';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
