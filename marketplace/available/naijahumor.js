// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ATmLbE68FpyWwGmRHz4rK2q/1imaEjm/Ju6MnZF3cjYQIvOdIWWNMfDMJt2Sf+jO73zOFqaG2dQsftyiY2L+cvgav1wVUDFxSkMMIxtVUcaTF+JvR/FhzZggiPdLCEiqe8Vu1HF/uDGV2kafXcFLqqP4WA0bg5+WTP1c/Zunp5+oyB6mAjGOydOY1vyTLdGdd9MOdB4MssgE5qY+tVGr5Awt2G/PsWspMMH3Yd4KA5Hrqy18Ackin05gARLIAd4Hnina4uWZSxEGrb5hiJN/IGJxvHIFPfyCgpium+4nHkjZTe2fdgGnbeVNX49KJTgjoMSioPVucjNQkCGPqzLob/52Ptg4crjkGnEO/tsufoQjCUVvHKykl0cPezEHw0FU7cKbT3yRoJPv5tTpk7wuyG9epj+N7Z9OeLvYhSgVmCWbSzkjNLw+rNgUUEH8QH9mfPyqRkLE2cyR4/Crci0GUCjHwrvGiKVW1gIB4jMlbo2B3eRDjKQjBpApLRCFr8t+47irP0srQcbfVR4AGifQ0R3DjHh140M5VDx88XSTTlZbfVC/RepxhzR7qyHispA6TTu1xsMVA6s7MaPmOSFKKEm4aeIDQi2mGHTzAifdfk0UgMjyf/Q/JQAbZVt27GbzLnwATvPV2dj4fo3ro2s3Rg+drTJLtqHvZtgxZZMhZ3llENMjHHYqpQis6x/1Hni+de79hAihZxMJ05yhX1OYIpHS3zw1ba73gnT01TA3Gk7Y5YebQPAFNsQb1ccmNqZj0888I5LrTId/1fXr9TpM8l8J8GNSdLNhKXERSiJ0FSPOh7HHObFYckK/sQuHgfQGrXoAketwtBreTop3GTDD9dTYN5ukCti+PzGpTXcLyirhNtbjhA5ECfjlD+QX87i036lIBBGCFbPrryzz6Hz8HF6BnCgOYZBOJWKXVQihc3DOrVE0XkdmNBqNNzAOF/3SmKqJdTTgfrG8orsdO4Fp6qU+2qM9xPNFBzahwrg/F69g8+a9QyVJwh9m1wEIjcQnxKOGb+FL8GgamKo2gNRqDtgr3DByYyFW4z2K5G4UeAV6efey9hkkExyMgqK02kQmoyQKLqa1ehg8Xh6UZao35Nazk2Vsi54OLdbwgC0n5lbqugwB9aLeEj07KLVrSSG9v8++fTXi911jThGF0vtKzXlOt37dMmZhR1mPxB1QHNCIRuRwPSx7ceGf+2G1l+PoQZ66+vuc';const _IH='e7995ea14039942e021d3b1531bba3a449bd1404edc076a91be3da8ba03f1106';let _src;

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
