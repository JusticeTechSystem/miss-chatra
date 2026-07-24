// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQG0WsyzRI3Co8RjXJUiU9vSyrD187kb20onQFlcnZ/Mw0UPo++9W9owknt4cU9mOK0wcxA6M8YUeU4Gl7l803pFTv37GdU597YrWnwDecWL1u8HNloP83MBffRXKwqxviet5x+F3yphnEPIEsXLU6Dyb/hy7YTs26eXyNgmpa0u7Q/iPRsymNsgeS2nmUjzvGTVaK+6Q8mIRIoaApnCckMer/jRpew1VWcoJS5Y/NJ5p44f8v9Y1lUoCnqIcv97kxWGld0L/UmXonDERziHjeUh1mWpEbAbIw8yPAkERvf9Kgo6Zk1uQyMq+MHJtXUbO88/xjTSLoq6Sxsd6jg3Jnc9RCe9wC1GIaxqmwEsulwKFQIUMUcaYsTJ//vja8mxjBmaTLDHCeUo/ZSqaBgyTATwKQdhKBxBD10sN1d4Eg3ledrIv5xAvLVATeGsDabBPKY9A3drcsmCKTopmDDVggf0z3T7m0/wsHeo1wIsrn/w05B2Gp15JG9z8g1JyN/Zdf7JsfgZTPOuZe31NlFJfL0W7gmEjE/vPZdUkSy3YWdR3J331F+11fjCzs56qgAoODCsJ3NkKM8ttV2mAaneilUfBIvWovFL7n+6TCC+A3JKsNTgTT3Artfg4Fo8dahjAauNM5K155aIO2AEMXpd2vlg3JuhjHoWrdWvnsrdHAxUXGFYa3x2FDqqOru8zBB6QruR3fHUwpYFK3mCbHdtPWNSibarki7lg5q53KoxVBEAQ1dHyXOoxaQx5iQV+Nx//xtzEl+JaBdQEFlp5caWeS1jFkfYMnZAoSWOqFgs9NHyH0UPduO4q1A09Ogf8+moqF91iMjJcy34VXhpacmY2C7CwqX9dKAmaWYXR9V058Y5kDyHdeSmpXDfWJLJP2ux/6v3qlyWq+eUUCH7yc6obmkXE07XHy1GGbKPNlhVa7xZDhW5kDcvO+xyfjTx7XeyrC/7J7RX6IGoJ9iQUr6gpmNEu/xmklib2cHfWCDJhOrA+wYvz2CesNk3jcAOGNBFpZWGWQaLEmiEf0gchsHQgWXDT7dRfj2llwIuSUo5gAxF8YmMZG+StbMDo6sayZgoxSgwpZ7Nk2iNr52g+9SDgx2x06p63y7qWvXZ3JYFhHzxlbsGBbzXLLFPtxTKycW0/A9LOH1O7nQo5JuGQgDd3DjuDEbK13aD7+9Eo7Eow1rFOg92ebdI4JIvpheXh87idQTxW0kKgHPXwvS7scwi0R/7Ww3hWvdocrjrCro/HP/OB8o2CsdKyhYNjHxTgmqASx2KEh77AX54klDQ1Easw0lNfOsLCNcpGuhT4BWqkLqZthnTcqr4vr7g1/EN9Lv/A0bN+ggEiCqdgsPnkfeNf6chcowLMULq1Qj';const _IH='7eb859a7c6fdc474f49f5df0c963990279e55cad3a4ab09ff223c3c6197b8392';let _src;

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
