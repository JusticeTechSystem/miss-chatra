// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TMqN/7UtAIjFoPv11z8JPsp7goK42wioxa8czqokFIKOqU+N9AGkQ5DQq4jD5SM/ft/fJCuyNIoxHgkB/QlEjxLk7gXHj73CdhnzfySNSQBYqa54VlqwGB9NeqmwfXdtl7O2bR7AXXMmIWCAlvBC3v4kAQCjcxVV885HC6aLiYhgUR/8ZArISo2jiW9/L8qciONz1YC5YV+iAhgAJpV8MrmvSdPCdYZFAdKWKYHTvr1GlU8xe8L7x0CL2C2GoJcIJBR5oCdGkmE1IsJhIZIy/6KxSQ9oUNAIPDA5gaSGaOQbK6Q1hoxJgiXbf6mdyovWEFgPifKQaKHf444EPPr/EAvKnt4plmLjQ4Go6tTyzP0CIQF5V4CV7cv4MKM/kBptjoOVex8UT5FzqEoUKzzv3GNXTWZC1eXnI5Imf39eyy3nJWG5w3I6X51U41X6n//N3zep3SvvZlSFwJQviPuS/u4PpbahXwpW1h2qmEPj7vDW/OCD+DAFBq///BtI9xCH5KYP75bp69PILAxEmGkRLtVhLcZpH6Nl6zffyGzCwzUN+I2hRhDfDFa4ZJLXCl/DJbB+OwVT9DaHfnjWMs0s416qaHnLbRWwGU7LUXP5aFfyhpTfMG2bCtDYe0yRP2LGii4RC+5JGQHR3p961eVgtRTDNSo2mpKernnggHrXT3+IA4wZA7idBhU1t5lRzUghzvvF6gLaZoWyF9Ar59lajm0rGy6imzGzl4JI4z7UUK4tVQWL7LOiafW9NQzycc5eNBCnHHIfLYFVXqI9nj3CfbaoJLV+Dovb8iIV4YCfZgAUh4CLPp9lVNcgXlPuIHLDhdZEUlWRYbiTPI9vyI0OF/ABT2VuPbDgbbvhzDtAKnwmE5XXXs8A/fn9y5xXaVp7K0L62G5VIOcUWGkAk3DNCW+gzLY0SJ+pLGLPDvJ/IvNjRnvlVFZPFqnbD9eIfj+UqnaQFKUa6ng6JG4iw25z86QoagUnwyWFWhzmgRB2SgW6VEOBWlyxHkrQqrM0fgmoPIWZuS8EtURXiheTm6aPguD044I6O+mpzlD9FTsQH7Bd8QjQ3sdr0GQFNqa2dIIbq6IKg6WZbSfrnFT6Ez8FICIlvvkx+080TVLFQqGIMFc6b/A4xmBflSnOAJnaZjHCBzrXJjPs05YudrPuF84kh6l1z+SWMfcGvXELEbw0NrBuTJCAq5UQuT89iIrKAV/KJOvOdbSXfWnRvMuNclXaV1akmQa++a3SDZxUSDQ0Jj/HLlSYbyp38LTKqA3w1YnVih6XpB1nuZya/PGjEKXeDyVNxOcik+4tW9HQQcQZcpGa/mXnBq3rWscyZmAjrivmfYW8+Tu/nuadO06rIivkjWxmX9cgg8j1/uAGQX0T';const _IH='ba6df61715c13d88126496351e6abe7d87dfe475f85a78c5b1265b1bfb884208';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
