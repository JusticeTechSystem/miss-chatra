// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J5BsztWYI0rw8BdKxE3g5rG0ZIp4SK7yXbODkqTNIoq7ZkVZ6giIvQ7BKUtKeWfBjKAhThVEIHa030M/beIlpFVGHXlYclRgeKpbj1Xb8NgsF29dS+UuoHV+YpHNggE/Mx5GX11NLslS+R7BUr89B3jp2MDdOokchqvWp9mZ3yg1EP4BabrvF+hxgVN/mcCAuBk+QU0oQoCnohgQ54F2yh/faqyD7qTuNSxtlA+U9sIwRvjp8mMAvIyKeiT1NeaSEXq4Siul1FG2fuFlJeQZV6K9NwAqynatAYuI+EghHn/R3ZBah4WXuOnGX8cqTNxCK4Sq2jstCQQ7B/G8HZzmq21r+HsNW4eW3DBbYYYDtvQ36DpEn8yi6YttAx40iQvh/QU+A3E/pJ67pYXyPgJiwF6KlNdj/5NExO0o82KE3a3xoH1nPktF/3hyYSIrU243T26Ym/LjW6IOn61Fy2Dao0WWEydcg+RpJ6XzdtOGGW9iyEjliLH78zrLiNBobrrBIOQKGtcBQ0ApuZLz4grLwxje6BBUkcopYZRvw7X6Yy/JAb20Rt/dwVABDv8skRI8QjRKHdQewTMJV+fmO9fLt6bgyss+3JbHncmbKFfwJX9avDqlcRHL7QD93GuQSXyi7T33loZTH804nvyP8aYm3n9vWq5cERgfAw+m29E1hPAqcOHJZ4nf4pWH3IG7e9giVPsi1dXnkdCkSm3MTDXddPUXqGqeothVQf/S3mZNVObhZHKj7CcpfdVQIpaukhK76hYLduEFM7Aoq6jkFDUtnM4XYYyj0E3HOA9q884OUwS/acN26mBgK4PayNVY9SJdpth+TBQLhA2fY0jAKDWBFwulag+VXmKa2yl51LXziT5Nn1yW5iaDka5sBjqspMzyJ42Dus0VICwjob0lkIqYrFOvQqU8D5M4gJwAokyeBWygvCsM0LgO1wVGVBelQZWPH0lBmOVT1xn1HcMmQrzLpWLliDFxoPIBRY8MEBLQgQ==';const _IH='ba9be6790794329117cc265ac1b404597f23566048bdcdb9408a4c6c0c53fdd0';let _src;

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
