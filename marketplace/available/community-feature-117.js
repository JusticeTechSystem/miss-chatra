// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTETanLE7E50ByMTc/rDRxyLG8TC6xTQZLQrTnpShW6mZ+B66kVo6YxwdbSTtJHA8x0QsQRMnsM2PLAkq5UqJ5da672NMSVsauaO/ytBtfacoeh55B8YIBo15nkdrxSI6F9LepNsnV5fF2P7wv11U8yPVakaeENty/VM/yEa7UlggkX853yqc6ePmujzRzWoilWrTraG7cdVbr1+xaqpACCupenx9JJEMFGV5uxlbaLuSrLZks+91Y9eVvL8Pa4TY10WEjgUb2DP/L90JkgOaw3Rfas7mFHDZiRYsvNYs5A2XB8vMDCPpJQMALvYcJ1ta5djulKeP9pRGkbiwJx/0xub7Nr+xLH4RuJ8eucedqt7SE0oApT66XPd4I5XMeiGBFNDI2hjSLJwnwfxPaSVnrkkkQXSiCkGS87Fl1RA5fHfvl0atyHLX3F8WDBrClpQHYl5LiqirIUNkKTVQd+TSqzeP0dV3GufdceHb+zTrcsrXxPId/vH2ppWYHx0z+NbCgkFsxXnxhH2iA/UwJ9e9T9vdZqYKVh+rTlH5zdFnWFkicO5JqZCtDy0VIX0S6nGAbA6eX/iWRcVQvghXaCR7FrMnGhbzYMgE6aLvLqE/RPLIm0zviMylLXrVvtTVQF4Zxtxtvw+r5LKz+Hu1We+KoI4H1bIPC+TkFp7yACTWPkhsYxEGCMihw+afk55RVE/5OdwHLzBZwYkiqlbnLitOErlsvCFrUVH8qjwrqVwep';const _IH='598ba2c34ceed82bb526b8940d9a3f286a3fb859cef6204b4c85ada223241cae';let _src;

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
