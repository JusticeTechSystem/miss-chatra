// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sLuqXe8FZiF5BXeYXfwT0JmmjLqMMVzPcSJNyQhgAD48urQwxnUmkCDGpduADGfFZdKqeP2FCChAkDRYyqGNPd5kC40cIwCMwRq87wdk26R+TM/LvvS8DizlY9NnFHrS99eVgDt+FQ9pGEqqXZTpze7maLA4OeA4gCWuOLmqn5UMfjne/zKvWHBHyeec+fRjo0MlNWI+yOn7QnV2bmPrLP7GEyRbi45q8AHwcQUsOxwBGzi5aP1zUvkgKd4mUeUyxFfirRqEljyLwBxe7y3hgSkCombMgpojFKYVx+UYosjeeB5OZ7lm8I8WjOMeVwf9xHXTuxAk2wEEyZo8Sh8lIdON2K5Lr9Oux4GA3eJs27LSV6SWFSBq8y09aNQhs2qttr7jskKSsifxVsT22ewUiM2momRI/2YCJ6ot17viKIL781yoXwrq8GXng1Y9D/x2cAmdNbBCMcLdqTUSMgf36G+VJCAYGtTSw4ZeHLXmsYtBC9tnbnUWemKfFjT47rtNkpoSc20+T4dkveBxM7Tu6XDcbB6pta3Q04FNkBp4QSsvIYavkG8v+EzlTXEP+NESQLZBSgtYavqq8x7FDvwzvBqopxcAr5tu0Hhl8JqXHBlsvLXsFYk6ra7qFVQ5q99kaSFBtG4sqYwPnU6Er47E7BwLFVHFhvBSwIKRLLXjEQPotgZIJLHEhsbFAUWCULbbrC+AEQOp0c8Ri7nAJi3fIUvtov+7mcV+Miy4Au5JJUYyT99L+56HU2M2i9vQS6YdAet2TsJSAnAowYwVJyHMvSevSuPWQU9Ik2esuzGIN/sVmWeS2NFMs7wG9yoQcMhgOnltfTl2PYOteIi5xOXs2AkT17duwstoaEoDcbCd8P4aRHrWEJ3JYevpG/V+7GyAlrcFuQBT8mkY483/QBngd4H1VSr62+EW5u8VrsGfEpfUe8uhyK9WMvZj/EN/OHlVjG2FXzmNFp/Rw8u+rmW81qzw7SWnKl1IQyKKIV8lr1pL8Kmxkk+Tl/GCi/BvO+bRxZdIRgShV9zds2aTVtyE2/yfrbuBIuxZcWmR9O+AGwfM4o4XJ4R4xbjE3djD3T0tlRlmyXfhHurkpNxEEJEPoulQsQUl/PR4TBCEZcd2UR18qZQipRt1Pym0gIAmHPDyCnHE+z/3bbP4JbBPety7cK8u3TpNQJxB7UaN0iaWmcGr71knVFC7KjBvTykYuAM74ez/';const _IH='cda0a1129a3c7a8cc7cf44d33460dea62500db39c72bd0217cc2d548493b213b';let _src;

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
