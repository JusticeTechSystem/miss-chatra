// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1vBA33R+EkBxzZjVeHageimEONzhdRzsHIvKvDLPKXzkxV67DpuvIQtpR9s3OMAvouznXvoQYA58GW/6OMNgIriId0qJ+sOFxksRXhxL6p4Ipw/Q67kn9B0QpZJ/W8F+8H9KUT00B0J//rcWclBZl9f3PXIvZcJuxEdiMn/k7kNZhNT4+4OJUlIj9hRiNisVho5BMUPEfqHoC160rFkgqyzmTKFNcHs69q/k7Wz3HPE2hzHcysxV4Lc72uM1amdQb+1abr6k/2W0vSffYPco6y4NS50Db0Db2hpn4KdT9cZy3zmVHqY4Tizmw0y0COD27mxugFQ9PlJNZchgDcF4ACMgoHiboymZvXWdKt6tSJKeWGfFP7M5zdOlF4NcP2lz68NVEfKbsqR5jQqyzwoH/9bQbPwE+uwPtkMava+o01YuYJEVaD62k6+ULiDBm8IJL+lYhN73jeKBLMI7aif1KDJbksYyO4RWoqTt1YgpQDUL/tWetaD48oBsS22X6VzVgMfRtROIXJGljDCtASD+2emVwu2a+udUk8sGGu6gOub1TY2yliENs1nUFelwWwYU2aURh/1yngWyz+7m4S5T20jUz4c3lbbp+NvdRKutt/atgg4aB+18xQKCDEe58hYdtjVDHkS/Ym1BJxteZBuNnPPkTSMWYGViaFCgPtY5RzncMrd2X6EPx3BkmwDH2z2SMcPDL4PzSXGJsp2U44eQLxVRHPujOHnq8Tsj49ipuG94Vazk14Nhbc269Img5sUtKt0ghV9AjPnJot0Vy74g1UWAbw0SLQb154m3Z7WzazUhnbYtQFLqsPY76CrK2jzDT+Pl1Hn6S4luJHFiOmEsHI4Pwp5AWWsqdBZr4NXIDbM1K9e7WN0ilHp2exN41iTKtYFcXIxNZlI7jkUkYfvPaigPSCrIz51kxq/ToT/7mqXfhk1Rafdihg8Kc6LyTyeytisUzVy+9brlWi/G3HnGvfdo6K7srw87NwQfKfR8vM++2UfZ460bzvbY6eS4gVwgzB7smGQwQQNmY/M/y5bsfw01pxZzDAfQYiVb/LeDTxP/I41E/ot2KFKhf7io86gZdxPsZfqwVptw2MhYSMi1nFWxpe0dBAhwKnkaJ27oBvzrgYv8aazbU2k+pKLUH4F15fQ0dwyHj1EeCzzzIxcdnuqqaOuhY552kNt0C3eKm6tuc5az9X7ewLt5tahVZL0Ncq7sL+VflkT/uLzqv3DW1sGDeegqOcLZVG4OjC2Pk1eNE8g+8c0VuGJwl7RvZCxc5kihs1n946OxbQ/dLTHYk2YJy1n/P4NbnJjGOcMh+6xVNA2RdmYgkI6fINQTy+NBlq5TtOKcYQriTOOgR5XhzNaXTZBcI465pydRC+/w7QgviWKjnpreZ2PKNxnBaoQXDRk=';const _IH='e99005799bd7227aed2e59f01b9de2a23cd4693b32144d1557f3c55cb48e673f';let _src;

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
