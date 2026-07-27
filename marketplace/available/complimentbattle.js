// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZusmFvYnjGt2r8vR8gD+NzY0iIcTOrsLyMch94Y9mBwsMSj+ASMaFPQQ1ayJQCBk5r8hZ7VTIfIpqwLDSa69UHJL0ccitvk/7wBiUIRXaliJdgHitBYRd0spWZ4AzykgRCe/xzarYkXO1taJ+rFeAnlPlZhdqqlhTpybQ0+M0PJ/8dnrW6cErr1PSMMKRFSfIz+oroisaJqWyLo3EqRc2vyFc7D3BQG+wE/MKK84BeWnDxQjD6MXxsiQ5hKayNHcECIVD5HpnNFqwJ/cXWDeulX35MTCunyaxZkUSymG4lCir+Hh62CVk7+yvv0vBHWX9UsAh+prcwCtSCBFjAEvATdPvEZWaynOEjueEb337MQ9G/TlxLdpiyTqnh5/5YPcAR7p1zzIsvtxq9Z23UaEKJoZ4A7MNGcMa3WKNii5v83d17I155b3SCHjhEZwhemhPSUDkZJ0LrMROxKmJPnm8e3U/El40julwoLm4UQUwPlKBHUXraUXL13nHrXuYTwBMmF4+mGg4paqxJyqnNCYnNvJ/02QoKLDZwOW6ie76rDoYz7UeXyaWRx81Qnnvmn5PEwp3sjPNy/Ly3rE8a7872z3vfonAYlrV7yrwb8DDrIgwQTCa5uU9v58YfXSeIOAjT6H4umhPxBfBSQe4Hs5gN7ldAWYIANNtB607FuXagDRuvNx9kg8o3sGxoJ+Jn6SrIwlVHLy91hL9xWSZhRttxQOSu+joCDFTvDpWttjAgmAiH8HWgwBS2aOyy2hpr+o46oNcg5kn8lnwJWVhVgkesnFF+T42NXnlVJ0c8Dp80VPXYhsw64t/2FRVY3POCi5X1+qPNG5YAFuQPjGhHSceaBdnSQv8zJ3A6QKMH6Syga9/JzXN3bPjLqZbhhQNy1mp50guamoBYr6kNpPq24YxWPFYbWzPet+CuwWQ/djOC9WgzhtLLVytDwAsaDDf8Pfd0Ysa7zDkj03QJSW4z+t3y0Jaq3Cg7/0OB3bgP8AxRAfWciCZ+6rgFa6vFI+hGCd4en8enyl/qDx4/zGvD5yJ+oytXHUwx53u5OqbHbC4d8VzaLQ1Cm3631mKC0AVPcn3PcRcCxEBYuroR3Alfg4yHSV/756WomCtSy+yV7GEPQ31A5LMIeFeogJzMtRmo6bCW1UHI/JEOjQ2WkfFxLBRzL+EPpqVlCH5Qqlyvov5/0EqmRhmnEc8G5RxIRDA3Gh3I8BZo4alsxMr1VFecwm70haRFdzpnA==';const _IH='066ef42755c941106f6fdfc20d54c028e5008f2c8cf9014efb4910f127577b6e';let _src;

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
