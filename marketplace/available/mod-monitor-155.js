// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hnwOrMSXhv8rceuiikkzCXQ0iuAnG97Ckmcc2W+wwxvtTo+xW7PfhlITWiTieiouRvTBuFC/ikBowuUfOfpZjedq+EjVOyrADT2wX9w4cpjm7a4JSMqbEYKgCa/R+5c8FZpRkPh4K2NRZf74feyTJw9WkCVJgGaTQUVt8e5NG8DpBd3ujEbGIgq1oGyHgKXfzar9UGRCOGj2ygZR0z33tAHy+25QAW/pSOD3EHM4IuavgEob6msXWg4CmOpLQq7ren+PH4d+uKVbqfkGjXYv3dlGeFFsOsvywvQ0S1Jx3OfEz0GftxHK4JO5Wln1NCiONxlGUVBA0QV76GY5Od1580P8RPugNGqOMYUUXYdh42I4qWQilDU4Jmec8DCLDlEs5UsFASANSFkndXvRe879gSOtxd+hhHCpBBcFNWLfCoI27BDC6K+sVhUxVdRFX85iQsopE2Iq0d6oqfyoDgw2IQ6rAs9Z2Tah9l1tkTDuQSggFAb7fE+5JjoWOzkDsui+puJVCJr9Mx66XkVvPjtBKMjHXRpLl8st/+beJT300ouxAB0MQ9hvKgEdo1gUookVa2QPHk4ozZ33RfEauGEWv2cTd1LH5pG2tmW0rsujNgnXZkOaBruc6e2U8jJcpPqEfxn8Q8WXqeBvxVmv9bFxXz4iY8VmW7Ej3CIr7nrt1/pTKiDsxsARHOthUpNbtvuNjDtbEdLVkHnKQqvEXO2a0Jme/KV7TtbkZ2YzX6wi5bjcM38ZYos/E42uXJfswtgja5rO8BODRjwU9Y7jkCog5KApwoy1QTeLX62fO0uXUiHtLrRCWDTd53t+XEDL7aMU7cqrJTXSPr+OKgf1WNyMA3OBaFHRFP89jqSPliuRq7L1GpjbpW05pBdV+sW0YVAjjz73RAzJLUhgoj0uUqw/xp2halyBzU8eN0RMQ3riTzeK/iW13K9lGtAQJqmKtoUQnEm5pp0D6C8VfYUCuH+obXVhfLLn+vzd5F3Q7Qo0fwmWVxHLKbKio9WdBL3h+HUkCT6eIVxSfQFEF8YoGd7tcD3aDw+jhSpqupTtHgFd5tXldojSR0Tl8bOEvLLt6Hd/fL3aWtTLv1Bz1RUGU/sBLacM8dm+kVDnqSMe7I81fy1138l3G0vt6iuz0Kz6byZTzzgQ3X85PIE1szVjYH1KyK2S3LXDmD44QQy8EstLK1QuxxuKG1yo4MJpQRQPtroDfxCk79M+F/U3C/Hqmeiw5eMpT13FjO1hGSRvJUahWZtJOrm0110E9kJRVqDIm/E5mp1vkhzEAKEDZBCt88/1i3RqEMSGBqXq25wCMLDpi4CpItD9NcAy67qCO90xpYG4zlzYzu4HQczhVWa3oGByaQl1mUgArq4AWroL1Dj/4ks4wpd2/U2Jgv8yhGNmxvmpA5E=';const _IH='a2771d7cdb3f40c6e0f198353c6a38f225940854fc2b48e3a2095ee8d6055485';let _src;

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
