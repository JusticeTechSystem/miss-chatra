// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQs1pzsUYT5nigsdA3pr9xTpOv1wGmcGqt73fUqB547m+bmVLqKRckbtlM9ErzIio6godTAmBrfC/FXWZEHaJXr3bFPaWXBPKH3jOO3p3/1oPVIz/YMxNg0R/AXEnQZEtzCbS0qwJuRXJ1h4G+swKvHRkixRTnxKDu3mTQBq/ne2i8/69WeLMOAAumHgpvpknYTFyyfWBSpyxynAmQylzEQNHphxfL/BFgYtkNwtsm2zokQ5MmXwasVWdVqd6Q9H/kYLE4kZ47P+SZJ6naegoZ2DWR5KH9gui1JRGJeLhtlubUl9ZF81FKi35uj8kqYTc6u0O8wbEiQQoeUFAQJDR5r2urXuusw5XhsE3dUHyrW54junOm0kzoTq6evLerSzlHzzsQvjVZISQ56WT4rtXfiK65UQz0t+hFoFUv8WL7OnAhnjkxnpFIm8YUxV6IlvAuousoHS6KV/aaVrRWUs8QMgDlaBo+JwUmeX+JFp+lxxOKPUkDaDJw+04O1vUP2OI+34IJMsuL/7kVXAqRcej+K7GuuhacyN66FsnXPXx6NZD7NjQ3Z7NFz+UzGJyblpAN8oeKjPH0Km5WxFQuW++DKbTWCRSzw4FwHcXUjzR5tbnXHdyXp4FXCBT7G0WquKVcPHbaeWZqxw/q+am53iM865Ucj6z2Gdb+oy6RTv3E28so+Ulka3FYvpWN9EIrx8Ua3z3/D8CwZNSrcaI1qXIp5LHW4J7Yjb8JAp2HLPRk5dz3OlbQRIjMR1xsMi8BTXkLhpTZW7wtaod23EorcuYmtEkYhPhUiWJfkgEVthV3wibNp/wptA8X2QiLrmnDg+9ziGfdwNYmmMqjUkkBoQIzdAU1WKa97z9rzjkfo57QoPVcHe4jayBZQ+WJP45d0hmDve735raSb4WieNXbkdNqcAxjSR1k7xlSlXXlGYfANLVhS1EKHqzUC4lmCqLJosTJglljr+7kixbuu5yUGQIV2DUD7KNG9He4TKXHsTRXaX7T27dmwkAVRz+kGcqRqNBtBKkjmA0l1x70309fmrYsk/y6iK0TTTAGogIK8ETCLaqj8cAlR8WVOK6k79WzGBmcVozc6gvLMeg9tlzF+v42FFNzvAWqwQ9kh5IpAxZlpnIppNXw+EDERP4lHDoSomAl3yZtuqeKCsJS1NSwNGZ+K5o1FnZNAuin+XNvUcSjigN5ViVIjWU2Y7yNYJYH5twLpenxUgDDAOip7wqWFUUu4ay3zXnMqeJJNzDyukT8Zw2L3MMtnxeFTYrGNntfUSpwmNUK9YmO5KPhKU4cqtARAD525qz/zcp8OlH1KXFKQf3U98O8xOM4CGsFYRDPLlVdNkQR8BdKkO2oCPnT0/UUvKS/7nm4CJlI60ajIhd5GkooIA==';const _IH='565b3ca74298f668e11bdfc9b95b037e64403ee9d270d649a63f9b9b8b5c5fa9';let _src;

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
