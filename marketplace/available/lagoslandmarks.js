// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xt7rsVt+7I/Tm6Vgxev+kKYSj+soyhuJHtyTjr6qCBBTm+jG8ug+I8k1vvV8/KlHqL2KkZD4toIG52x12vrrKfeS38rzyTYgxLFkmBSe0jXycpDOxdB2tCW9ZBaNZPMs99XEU3lfpXdpciAcYp+4uqohGFJI89hTur2qlLTTtLgOmohV1j0ffNOUjnInRb3MGlAZyznaqOYXynwiJOUCdd28/q5FbcO3uu+4A357CIXeB1xd/Z5AfL7etZCkqjk6cqfwK6NdJUOCOMO0t5paQzCG1x15wr9dNSsNqarfaABQj6j0s/xjtRsjJLhR4GpJMKTjlJN1ksXT2RJih8iyKiOGBhFND5Q6cp+JEGTSqfOmQTGIdkJGIP0BcR/Xx2IAM+dQfzzQGxNSal9xmFiQy5dn+hYOFSMQ5fnu8rAQK2H+3sow7C1/cDXYYOUBF0aVjywCWAmqIagxR5I9YOXhdRiC3j7o4LP7A1vhPxx2BMghVXHflr5k7YYQikaCc85bqSSAhUpX1W5hAwyYXsckkFDapLITxF1Ebz5N+qoj45Q6SSIAmx5uYC9LUgD6gw1vyaOv/vU0pHPp9D4v6nirfrDTJBFYJ3WVaxzA4iXXT+B//nmKJTWqth5JKgoGKToC/VdA3bIEJSPQStTw4uhNmrz2dSvm+X2l4zT75CUeHMPaozajc7DsW+HCUX6SaZ5mjDoP1KYlkPPEtPM0UImigwItRQwUpvIYIunPYcbhINlrCNSiy893GBBh1uA8MyzIQMpZ8cpffbyI5dSyAGPt0tKIQ027omVwVfskkPaKov2lnsoJOnTakIsMpHFOERDvKmPOeIZXqYqNNSGTFy0SDfUBVLNUFzC6fC6YptHJk8bqD/TR5/tTapOwebF98cd3pS5MNl/oTZgSR9ok87r0HwJr2+1R3PdLstziczXFsOqUTikWUhiV51re41zrjMUt1m8uOatJGJSjs0bs5dpZIFoEvuQ8vfkLRZed/udchAN5mTOO5U8po757+7QjqYWIonLSdLK8iUNAwY0fwdDzdJnBElz4sqwTftOPKhk3JwDVzVXgVmgxdEXHWYhmTYRdm6oWOb3qI9acirC6EdR8P+24Cmu9myMY4YWvzAIYHWq6aFVf1PSz683gKHfDLHh68zhPD1dAjwqcgPhpz37c4L8O/V88tN0bcw4fIeWptl+JpFE34LSNR7FofSJP20rjrmQmHAZrao+IDMvcpQ==';const _IH='d5222276eeb703f22157fa530d1bb0adcfd267f28d5ca1adc9bf793adb55b0d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
