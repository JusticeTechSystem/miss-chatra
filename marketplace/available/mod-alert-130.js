// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Atkg5GzlEnjahXhTRva7CRamdH8lRMffV9eY9fFGRQ61QEjOLncWqUZh2CwKJTEdRxImHNejMmFdeWQd6lwKLS8msETiQiOUuEnqjufPb1VJx3lQNSNqWpHqQ4KHA+j59iPKjKw0WA1ul9teF8PoQggKcvfpUH6ue8JILAX5plj1US6qPmfYErg4aAzCPDyx1/TtTtMw8STs2vkec4XlJ5qoxD9Nh1kp/NoH1qfUSLMRSqJN9wsAjYPmIicnNJQZFybWqAs8lUYV0Hw3O9ZDdUCqldRMpKooKK5KIaIMvUBsR+VPLFrweFitOMEqSms2XyL9eUwuqh6FK8TXUjm8IYYpVmcJ3HEDIIbnnaHUIG253owgJ3YVlIOLAJdIM33b4FuZXxiNT8Rrn5cmcfjDL/ySOW8w0zFmmQAPNvQnpmT3mEC7DfPahDPx+KnmEXmuZ78ZHrSqYzwjBHuj9U4X049DDRp+Z2726dAivNhrpxdDKvpf3QoKyOvhzG4cW4PsnDmV2HYL1QE61yW7ig5GkP9GylAsG9lefw9bMNgqDpgRTjuHYaJCCVsb6aM98MQlwBa1oAGs7hHjlsINHSzw9e5vfsz1/1Bqf237jkngW5QHv+0AzMXfzrfKxAwJE538H/tAfIpRjgyYYSY48dsRwjgQYJi2Hp77JddgQ7N3QeQJl8BBKUKDTZ1ZRGhFGaxQaQQcSGT+lU6qgsZKtWbG5crWhQKKk+UdZmVqiZXxf6R5NXXxGt6sOAMYBFL1E43nq8/07v6wbA6CH6e909YZkGu3Yc/sJWM8tFUjzWjJfC1uvUog+wDil0OYAMPfUiWzPjerNfSzCey5OKjdrF09W020OlA04EEnOk4K4nxGbemZ0eudx85c0XT7RCH5aKu7UwXSoGwm2kCvH3fFZlqPfKcv93+25ANQq4KP9IZgUNQ+HhxQJcrLBy2X1BXyu7HMPdgklpm/EvBjTrbcMFhMtHh73OTFEbHVBQ0NTkiFw3v33cSfR7P5psl+gAYtCempFWDoK3xD97q30ZKRbvI0ZVOrNktrwBqnrORhYzc06EmpmRH+cEhRH29odrS2nx/vlVg+oEJRWqUztBCowLOvvtfN4hN2BOMmsoOEtuXXDcxTwTT3eHwE+5bmFGTkctxwm/bT1ueTPCTKMub2XLnNbOCk5BLeTerCfHjeCWrbUDomGQ25TrWFh4seoby7KAv/gc1yysiTRxf0wN/xqP5CkzFip3WxDRMEbPG6ijtXAeyW//jraJMovlY6ig8nQcckxM5vq3z0zcrSKR1xfSOkMCnmBixnlO5qGzA8D+lWNUxDPMzC6cQxvHlyDTl6jkd1R5xDMaX2rr+Gk1olkPcCRH0bU/4hyfJZMPGyphx';const _IH='64f041f87eb122fa5c9baf7029be31325e0907e3e81196a2adfa46de53c4662b';let _src;

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
