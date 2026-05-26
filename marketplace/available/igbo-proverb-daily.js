// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WhHFHkreBiw3mxsPu112pwFP1BagIEgulRiUNQ5ZqNkuKZpRUxicFb0GiF/tcQmGxVWiXuTA/GyvcrzwjS7GDvymRFqsZVzhex+NNPtBP1fUjwWYRN2XsXEpdf0WYbNHuspWC6pTRaf6UP+nxC/GnIJW1mekx+fOU7fe0Q53AhK+bJpmheljX0jwp428EUpug8fc5Wz92QR6dEjUnn+VxUH4gy9e0Y2YZ761VzK+1DQINe4wE3VoP2c13AsrONAJooad8OF29viHGW+prIOReMs0AtYtALFNTxSXylG+xBWAKzpNc1hVMT56Bww5fZbF9BV8O3pG+Ia7znrih0HrVUYGGkWOI/yS9H+DXyY6lB7R4qdV/TF6daJEVWuPx1TrtOC4r5zN0HSEvBdh349dsGZ7l66Sf3pfLUkHGeerkzULya1DN/oJK+DWSLdfnH9tRZu8An/X17kSbsb8S1h9Y+AMW3LZr9y7XfKDFY/hoovCEAuJ8lHbsL4mfjLQ66wHSVqsIZOT6hrf8A7kKN4IHyG3Nhb5o/p+BHq6DOIepBDmsL2rUKEI3eDro9+/Hsb0nijtXNtuzYHVGolxy6Yv4GYz1/LsMgrTVpNn4kwAoKlr+FlUzu8vOmFexqO4ITlXleZBtyk0KTj7btoHK5OK3PoLSLpc+6rb45SquYCBgtwrztfEPzP2yhz2OmdpQF34nrZVsu28HVK0i3Bd22DVl14Qm60BhXoZyXQJZ9T9zuDvDtsbM+MhfZ6ClPRWeC796XTdK3Ztk+UCq+iEz7E1B8IcrfCEs5eP+8WJoAl1OFWpXwTLP1P68BALg2VpAnJE7GtX0YMOX7GeGStqBt4IKBIxP9/2hDvyY3nbENqLX6UFmo9GX6JZOpMbOH1S295ddZJcK+7TcHjXnccOE2W57f1CaqyxfZNg4TXf56nFa5UwtvBOT4RYJ2S96Ua2yN+KCKz7Z5GzkURo5EvkFljN+OXwXowoskoMgCDJDefljkgm3CYw4zkOuY3jS+TRSRspirlsefYf/AlbHnBfCIPMDgnB13fvhhjwBMdmWAqAGwhnfKzfiCU+uBUtbUmU+KwgSFX4uNQC8jKKrdhl2dkTOBQCw2/eVBIFhDbpU/YjqF9KxKtC1CPmX63WTbJiVy9paqHVCfXj8wBIEJ5snKk99xUGIocEXdmxEDuz70IcrKMA+hh2BEwoFGy3pldBaznNoHLJBBatbWmX98yPofc259TDxXrRX9s3jqTx92IqeiJ17tSFfuzjnER2bUXTPKg11U/qVZ3dQMboCgLq/4wJE/UkNgbn3BoFQekIPlq3A9i7lacCk0AYsrORHHy/pxVVLYAyieIvZ+Jj/iF3UJAqOmhS75kfdyaWJ2Uq508CfyQ4IUKJKlM96xvGhhNY/b90gbWXaiZQfoGMouZ148ald5twK+AFb4vomvUAP0vzidS3mhIjdmOro/Aw/7UaV0B9sqGDZVkjnCDRHeriIB21aVUlGnTy9cE9Ov46bbR2kDrLku8kbNez38hNfEqNO2YkAaZWjgaxxGApeEq7Lf66yaUkMwtalrZMiS+Sdncyw6ZG9xDg2DLlaefuPrTW9xkdnveYZJTTEzoS/W0oiZnfVUrHyZNk6A/+mPwr7wErM5I/840xyl6UgJEg4N3veCwUJmhybE2Hs7LVU1EMmAkGGf8VuD2S40Exs89pE/kNKVGySuW5pTtMjiVVNky8LdfTaRYOhFf8CGeIkO1nocNAD3/p6+kSE3eMbh+7UU8o7IyzgrKhYTw1AqS7kNekighjZLu4Z4V5iz5ZDRtBBNy8903L/Pr6zE5kel4iSSFOEJJ9DAtFKekFmSw=';const _IH='dac44e3c930583d39dcd4c0dd4850a35adaeacc377d1821939ba93e812a6df63';let _src;

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
