// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkpbEUAcHeiyLgEhQXFz1ur/qtBT6Znj5sOXlCw/F97maBr6eRKstLtlmywE5KAVDAEPxAyuiJJt2Hvy5aLN4KUxXH0taNp/mSs0riE+yDo2f1bPREBK3tCg0gQn/YA3hEOzyE+i6itiLoBlx50HsfANaVHLySexYSzcyZXF7LQ49jj++4f2VRpiWGlR9eO35w29LV93nv0rsjaeOzJNWbrHfcfTxzcYl4+cUSPnM8+8nlJou1uUWc8gdBSnGgpFRgHCubr8bCoiz4f5yHa81j+tI6uyBNnHa2AIjZH1H/XeAKqyKj0q/6C0Ub6U/By9HVyz48O06VXrlDWFODhkiePThZN2eWSrxsLTqkHNTIDXMuui66501dr6Lzhptff5r4Wstr5VLOgKNsyGqNp9JXBwavwwGWFxySdz4HneA4QhgS7F//YBIUXPd19mum3XzuaGp38lseTFDjALBzOcVVgIVzZgjVsEcH8ZeO2UCzi/mBLjZqfNR5QYKLkX4CBUqVBbGjxKMudMFIyMukg1XTwfkrFG776dYasxex2yqMuLt62U40bU5XsuqcMACvg6NEX6gd/KLVixb2o9Im0VjHpEiolJGKaHGt7e3l+mN9WUBZmfY47Ot7uyuYZid/hkwmfRPatjxTz9rsV6bvoFRWvizP5+WjL1NXyUyJczgPa+qutaTcl1ZObc9uAvCxhkka8UHrEEsSjmt9IEtWYXquWN0Syz1rvF70jxE0V9XGr0eSoL83KA==';const _IH='53be7eee784935b1f3e84960d6e70a7d643d61a0ceedb83dbffe9fb49a7ed91c';let _src;

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
