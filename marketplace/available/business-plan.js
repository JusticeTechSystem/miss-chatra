// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qQgUrkHz/d24RgbVuyocxuggBtLEOxAyMnXOb0PhMeM+CwYgs7fwCnTb2U8F2mtLwFFKzAOizVDhGFCV5TkIsT4N9mlcNsFsU5sqt1eDVsUpGd6W63+dLp5GzVohZeaKRjtXA64yP02Y9zp5107iG/4+q4abuHLhYGMxlPsrBq/8/bsE+uLIb0zDPCDmYY57EJx6UDL5p8rF7GC6KizB8XhIKyvYO3nFGMMf7dnI2NqfOlpd9dtUS9gjgCnP5T1EbozANkWMI36WO86cCs8C9x0wtsIgjmwgj2rnYHY9NtXCalWWd6rospI+B7a55Ieqh0K9PtnvCvtmZbkvdeZgV6b3KJKbH41AlfqpDeeoJ+2kPNW9c4E4wHn21ui+cWt0FsrE07ZsC0WkQ4wlEU8KR581d8a5LLvkzRR+dGKdcH2piyXpfHEQYOXkTBaXmy5VrhRza3OK8xhRQNqu6xynjVr3oQE2rm9ESm+e5E9YDuKs23GY0gr1qH3gSOoQO0uqifr+Jr5mNP2P3NfRjITTrIJRhBXP+2z72tGWTvoL5CiPMlqvMkSmw49P62UScloig4kuk+BsoxEnun/kJw8hVpnHiA0o+rbEilU6WqeZ5lMbjkV4OBM5+FuOmD2TAZtCmURCbw/Avf01nQzgRK99ITNZKi+Ej3V04TB6vr0gqzytQVvjCSpabtCmGmurg1ooiYy1IS1revg0Plctg+xh7LtXuhnfOFn4NvMGWhlXPYcdXCZkQ9JEsKY1+LpG0Qx7pBKk+fdaai74KJh7/DDLDVaVxteqruNNAkNVtvTsdiWRUpQJdWJptfJ0NZuVqQdvlozg3CdH6tW/v/SSacYITYlOHo/O4B47gXf8vhM18dQ/dYH1Hyoo0QZwE37JtX/AWbymGX7pnoHaESQECCSyVz2gvVxKAuPnlnLEY0Flcx1aY9MSXeZUCzYt+JJErKxoPUneP+T8YWGZS3kXV14Z6+ywB056BwxOGLfyt8tXHtmGbCIVHldMQbf6K7PGeKWs3luxosCnm0iJRQWC5y2MyVeahDz3H4+x0o5ccMg3btuQTtWn5BaS3wUeq7/o/pDF8t0/53bgz6m31IG3orAHIzvnvZnVgT9NXb+sH4LC2y/NpBaPSLlR6PW7J1gL4o3wL7L5fD8wXvjjIhOzni9VufOVIPitdaIQ9cP0AqgU0wO171nvPK7+4HRrsUEkSnDIi7xkCJc3A9x4Zve+oxZ7IGcorOo+oUDAYHlUffHXVjLt/xYSFXMraBXT/tXSzk6zT24l5/HRUMRPrG+MRw91p47DVahw/seBk00+4Z1sFpNu414vAnRR0zbL6lGtm7npEkVrn+0L7Rw760ByJCRq5O6tzHqp2z4WanbiwpAbA390VQOFzlS58KuL005kOGWlvM4ojhxIpuQkU/xPc8EO9ME/rDKop0PGDHMcq33GhXOTKWhrQOPHzur5WQW3AxZUcoicjsXJ39CRLTFrwshHYg0iKyOuaJqHLAn6hrcdVgmhRZV2PBTZCFObouM+drGlALXQV/4Pc/SLImqEtQ8Lrv3INbM8aDdY8I8ApBmsRs4nkMuTGbV3xX6bixST02ELeAo+jM77DUL3+NwStRZ5+HNyCLI8iGSFpbJo/8cOSSOWRWJ3wxjIzEwJtSspXXBPIRfL6w6O/9OWtiLe3OW4Hzs/nf5GfoFs1oyhnWYSUPzSOUv+GVn5Zv4Wa+q3MuurWwSICvBY3t0H0/1Xtp/x3U0PPOZT2+0ehE8Ncrac/38+ZmUnAVABRb74Aq/rrI4=';const _IH='76047eba0578d2c1043483574c4be44046a68bf352eac55cc4837da35956dd37';let _src;

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
