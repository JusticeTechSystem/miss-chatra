// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvLmHnNTgKhJZb0hU8XpAjnKccabQ3VE87GbSonnV/o8665ElemcDCXARF6ZaX2EMs8r7WttDxBiykydCWZdQDM3ADBtdk8Q+zdoKomCXCdOJViR/O3w3kcRNZkTxu+75gdi7nUXlZ41yuaElaTLnsxZYEka7rhS2EpgRaGoo0Ek+M8ehhYd9ba8y2UE+jwmkAaoejgi2dhx3g/TJdWPY4GgOi3IcSpbnp4G31D7+J/6GoIFO+qbtSNZWgs9s8XN40t5SyTvXZqcGxEPqjfsdqPfYQ4ZQycrVAh0vW6b83Xeh+V3l2gzG5yAGWx8/aBiGpt4XOrAHB5uoDh2cUWEqE1pW33/rJ+FPTEJcCV8VwK+dYe54z2q+dhT1VS9gqtmI5ZxOHKGvivekTKSmhwDEcznxan8Q5wwt//NNRZZ91wv2dB/Xr5hFAlP2ittFUt70ImNliwDz6o+qycNcpzPhGQb65NlZMpX0TqIZ4AJvvKyEpjdH/DXK/18JwhUNTTXgi9TKDitrqZMxNgILnpXdAwh4ZkBewQWeSHtgRm1zdTLSTlvPanwm5IP8S3/HkUxwEn02lWC+Wm5Q9HFA89/lnIIZVeNdL5nRhxW9v0dcNNvHXTSOzHk4Es21PbbxikRjTUGp4iRXTArzG7/4/CsFa49Qu/ci314HAVcz2vbt/PyAvw3/Zc+caFHNMprV8WOnA9OSdiB9RFVMMs3BXYafrE5wEfM9GBJm1eoLteWAaTYQoVSzUpG7eWcFh7o+wDDacXelCMOxItEghBvKd8sSpz+aSTNL3c0azML2Lp1635k83aLWuqZWQErzW+0IWld8RewPd9X3qBtt3z6OjLwbcqyvvqNHV6HazPdFqcbcHaCm293Skw4ZCuG8NTaq5wAke25SW9otE7FsDPfPbWzSdkBx8x5f77/qy8oxnQjoduGZl13sLepYowUguUrcO2XxnojFkIyOEq4Zhwv5VcW6R3noL4Z0N/lu0fRajvE2XyQu2xZhGEsLM4DC15Mbyj+jCk4dmqSaq74fC8WaiTYsDY/TId6bepb7/ATChUIMzBfpqK+jzwVCMYqRDOXMFpEzBGK4dR/c6cxmg3gXiVg+tD/JuTaNivMtK4srtrPolFZ/9niWFMYG+E3Y3RV951CzrIfoBSga9FA6whju1MHpjXvCrdIBl53ODuBmpTNDkZrHX+7SerU1tiJbdeO/PEnoPG+Hn5dBhItQ/6x6WGXUswxbABncOW3BygQyloPCaOEP045sAxLXm9++Hu9aFrU+iePxHdoK7/JcClZ8ALJaQ4FrxERNiKqRiYOiVpiO2PbI8kt8xbB8d+/N4cUSU1lmXA2XnZMl6SCNQQrGdy2NfikcWb4xq+IMHxonbqiRDwWSIvKAa+59A6gevTbeqWX3wHw==';const _IH='5b554ad8ae675de673d26cc41af44181a4ad434fcf47c8a4b4cbba3e8415d236';let _src;

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
