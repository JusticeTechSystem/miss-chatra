// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNcJPiIywKAbNYSPM0fALPbNcpMCnnZlVSDaHtrEaleQCqWuuXhMCQOTmglRY2ERbh8RQnAM4lc8SeI7NHNUYTuv/pBYbt0YKH/3RvX6MWzAm4Nyw1hb1mYHmATR+HVme4AGShmh4TVWGOGuyVNnjia7GZlhD/8TE9iHPMKsYFkdajSkeEXKKxzieRLQbb07jea0owCSCsnTZ2bIJGVlwdGs/BvzVIH0lducIX4pJfr2UzP1fDbJ5py1orLIdOEXNgOe2Zx58XFfZ7QtVBTOHx1jhM9rzTUZpQXUGzAZrUhdK1Zm82vq4im+FwFTKGehq0lPPIJCkBWJSNOgWrW+Gq+BAmCOV+YGtIkigyyJ46MMeTzgpxtMe1yd2HdnQlN6Ma8H+LxWQQpIw5R+NdMo9O2UiJZG/VWBQBk5boHLBwzSMXijIL+sRkJXMA+f2BxwfEiMTNA+zdQ0+nZoXmZPLhIdHPdqvtzQ24RB47LxPlIYPLSVakq24HQsx97ljo+2X3bFw2L5k7UERJmed2v2FO1Q+V/maRW+S6+QXGy8hjKPnF5yco++MkKuJWQWdsMWyn9ocb6Nbgop7w9cu/kC4AwPeE9hXbyG+qilY5X+xUgCHBueLXRDhzV/pI0Uq7+GEH8Hvo2vSqsUB90vBLkJZ+wON5srE40ItJthsZskiAs9HQ4T1SWteozK3ITxzjgCdgWuJnLxtxrjbmYKm8hYX6aalNq9RyCpGSrStXbEmt5yKvEPtq0McvgkxIlcCCqUsm81i8COW9EaPhBGd6QeWdjWWDGroCBN/gRFtKLpAXAqAzx0wXmtFV6MLqsFebo0lWs1GW07IHvPlShXuqDyG0/DKx0dAXH0mEE5fEWvtAIYTCAjgjGqd/NqFkwOc6KuVqZO8fy8bD3Fi2O5Lq5FB+KKmpo53ugYC/ekYxKc1DHi8y6I2wJZLOefNrDIvXMGAfRKd+8c3Ez84zIc10GU3dMMaMbOf/xYA8VTn1p5rL6DwIu6Wt8F0QaNLF2GrEi8VM';const _IH='e6d2814033055c80a4d0e99de7aa11c39f13d4f33de2f1ed003717c58c79b556';let _src;

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
