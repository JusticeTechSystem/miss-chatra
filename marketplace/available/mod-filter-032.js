// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TaHJt6K+jf8Hxc6WtK7QWa/5vLYo22MwotaxKm6JWvK6RKG9oJqxHhcNgrrYhvKg0sXzJ3yzDSAxyA7w9lyV4c4c4GBTJ9LYAi3O21X/EPLO+ynUz7mymu5pM97uuv8BmmzMglVm1PBhz7cjuEcdAXE5udNgMYmzFeqZ0+4RVsBvvrS7Nym1qy/c67yilwE/Tdj02v9rDNmRsOQzWbuLXaduQn1R2QQlN5sOLBewCqkNlsR8F4uAJKJiM5/0d4FQY9aymdYrol3rIkaH1EJqmZ2niTTYgwXlUfkoiZjCo/BCWzOJbUw5+dLKlHtNXfmbh5bNrFHntQiKR3HuE3TMzU8/dI8q6QcTVxits7kpO99X3rImB8NgReA04AQRlv4OW24jWvnSRzeEPFynSV7s9nXD4ZmDFankFWnl4kgDpfUQPU+jMNPN03v1HhIO9YXB5RBfuGCcLl9EPiUNBioeI5I1ASugWvT/PolLE/Zx252nNw5KUAfKTxbI2XM5iPrAMdVatGJ7AuhnCD1DHiAzsy0uoJmVG93eKRgEwav5C1ADDLxKV7dh7lY+epa9geYnvY2DqZzF3t4gTXe+lSfNkUj5+lPxEFiUCpM1Om1UvWh0kwmppoqR/s1x3A/ldhWub5dVOpVm5ps4CZ7h6wglyyImvflpL/LdQYAzAhtQt7qZFCq7LWPN8+DZJ6AYRdwgx13Cs7jXwPWtzcSl9OWd35WP3ROOKLMrrsK6RfBX8i7tipZ0htTKknkWk3DULMQeWgT7bcC2ZMomzCqxyUJ9B5RXScIxyhRgEq4ywBk3dO3jVR0ujMMZxHGPXi0Iy48xLR0RxqDCDlJkECi/ZH8vJI6leTxiR99GCCcCzW8y1CnU/TmSMzLv8mpUypS4aKsfb3e+V8fLrHSurdzXODftDkUWRkzE1VVeNTMsItlijtZ+zNF7Hju4H9Z7vm6cBomNAbp8DyLMgyUo0wtPXslqb3pLt+aHPlhq6le1JzE1GXnPWRXNF4riEYS/oqOVRt5u9M8PAVUYTZXEnZnrPjM5ohXZwkNz3e52OoGmYWbLzwm//NS9R3Kr6ObEmaPI5W7X8gC11JoVH7jP4S+U1rZv2uU37yGnrqVfoH3njIiT7ty6VWsjjfNI77RTRXjOfc9ihUSjKqJDqy/ufXSIwqQbuG2olNuz+RiNrcyMjGJWf7UGAkevyrLccB10o24aMtplRh/1Hl0faLTMrz9K1+WK4ASBXLMYxepPDvLtrHy6cSdUnWulVPsTSt+0LnXpfO2odcbOqKmdsRsHcGGtnHvEm2J1XAtekAI7P5zYz9Xp6reJsVJfYthEpfvl07Va93rzZdoXtANCGsBwTpqmxh76k3fybMgPR4eyJfKDuYmrv6TYhAM=';const _IH='c542b58a7194f3fdc7297ccd817fe71548f6f5e601b79241d58430d88fa7ef97';let _src;

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
