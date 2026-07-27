// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAfUGeyuIruYDF1OGhVkLpSLD/73CfX+8xkfDXX5ta+gVmLQAc2rGRVW3brfHGzE55vy/XCWV/zkevIwNf+I9+K9PGgRR87R6CXzxmJZA7+6RE16MMBNC+ihiQQzl6wZ9qp9WKEoaFiSGzhJSwFtlYVwCjd03udoJIEE7yS9zZrqDYZFkwg0aD3fDNM8FgQLN2EpCP9NvyPsx7my0GR2210F40m6BVn3TmbcZyN3wbQ/PQTPz9YfMw26E4OuO+32okXzMavJIzI0e5/1IUD3nXJXUV1dR9ev6VitSPP0okUATjKNFUFym9FSgCCTMwI8df3XtQULksvNNOhNr7jBvfr3qYujaOUwPU8EHhN637mT1E72GsLBIBeNTxZhsMr/Plte39Nzs8J1qZOBFG2hlHsXiZx0h0JhPi/KmJcASmsT/UrpCKtJPrzcxEjpxN2LKF+VNBYilMFVuwO9yR+qxznSFINKXR+9AB0ap17iWOG9QT3yN6xUR2ecj7Z7QAiewz7NKquPOBHUxA0e2NYhdK4z3MyEvGx7K8AQA9bB+Axyy/bH+/BWIblTWwH+7ZIgeSX1O3hLgc8nlXzOLrzIFKncpE0QUoIq49Pa+2abzGIzMyJCXZVle1vkjsyk8QSa4h79MY6qx11bTMQCwg5L0z1JID7db3kb6HxnerJdQy8omy0YRDJlGnI0DKsisbM7UorCWR/89km0wxc7rUIukTvj9Tr8ZO8o1X2ElBk+Oj01bYX3YEKySFaZRM+cWamkUcCAKGGrMbPFMvCxuRhVXPoGwH6pNDrQZUa5yZsh+dEMUpVzuqJVDDR/raj4ram8WJW8XQOCJ+gKM4Hve4+N+uHfOVPRgXBF+NZvO8vNAgdVEt9PZghhP1fwZB+jltLS0cbZBUOJ7HGIIGxdHBFMi07lVHG7aBAnrZ/NnCDuVXlu/rXfTCOOAirYoDc9Zj7HVN6CMNf+KAnS97Kz5htBQcxsn9aF2yJXvN62FPMDUz16nAIWpwn1djXvjyzkokaVpFF3OrKrZRqYdAyJx+8qALCeAjKW+NqeC1T5C715QoE+vbwrjdQJhlkF/FJfaU+VdCVRGvVIgnRB8RGPQsjv9VXx+OGJh/n0o5OGPHNvg8cH6MnPIWgf6sSDJNM/K2Wu/QyD4KCiU3zsGRbzS1/fWgjPJZRF9HuKOS7O/0pxkaS59X75f42SdHcRhM0BtN4JxJ/rBzN5oMKK6vpzaHyY0pydtRW//cHXK2e0QtYFFOOEITaYfulb8+nmK4Dvehal+vaRcWEQPHOy3e4QD62o1GYk1Wy65k6ybY1OVPuoqA3L2WnHlVv5sog/LM/ON5FXKwyA67TnbZl7RsQvWnX8nei7DdQZSOyiT0cFmwB62gHzcNWHOBHnvH';const _IH='39e37782a601aae14df82f62a221c5dccdad947c323956229694a25de881c096';let _src;

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
