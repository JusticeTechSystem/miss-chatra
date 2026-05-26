// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T1ec5px7h6+ngSZi7qZ+bEdCyB2Zoj65DvuRQb0snHLG80IpKMD39nIlW6DqdWRJ4yn4SpVEyNIzKeKv7wwqeOHbWXUHthn0cqwczuBs9K5Xqb5UYOwrkzWYLKiVmwxZnRTkwOh7NkGYEJbwN1vg/oahgIvOE8EjHDpRqiuWmicbmgodHBNk9tS18gAQbtoBOCn+uRMDCMuNO49mcSF3SlZp7glDY7u0XYkIe5/WUiYwwC06V+vwwk3nS1wx9Y+R8meIFjGDv++reubxHxOWHleyDAS2CFoXPWeuWjoFKeWH0djn66vh8nWXp20O8z/t/5y1FA+LG/anUgBlz8r8nvOvDXHcBi7IL50RfhEAJ+dxiHhsgbGxnxQC6RF8G3GoJlynP2IVkMyB8kAZC6cOrswEuIM8qbB+gcQBOqlGmICFLN1kqhoYPi5rYyUYJ5b9tWAP4VPPwVXQNepg7C7YEoH3zeNTRoHR4RNydbuLn4AuwOiZ2Jny2LtckmXMJ2mDUtUUhucrI6sxazl7ipXVojO4nhMrWunprlu9uNNJbxtliORAzz3tCCD4X9zXcf1X4GgJaexrtUStn/nh2Yx0lveY7kFZ3x5OLtqx3MU/LSJDezFpb3RRb+9rQ0E0YTk6QKiL5Y6Z/nrGc4PqeAAV3z7q4pqWCwxAt4F8ilKsgdSWDBsMn+ozRDJPBpzlOtEV7d2gpQaqO9F989gQpOqXSu3ZluNV2u87r6KAZEicmYzZ/WjyLfFns9pctJ6HoGREya5q1R+hOwY0iIJ2qYscIuyIQ0TxKmcHcAmVt7nG5hbRqeyyozryevzS2BOiGtVj3qv1rxrE2xbsbNDZcnQuqMzjsUK1Y5SmITbb+vlzy3h0tKW3F9ZVDpQvtqIr7ukScgcZ850i5vpW/RFgkx2MYqKwtVnWLovAyYezqnnCOlCLlfm3DXOOeQl2nKHzTkrCHsv6/G4k9pSWwHIsi5JYGUY18tdXp6Ksw6EeIgYgQDW6EsCDOm2lsx4028xnBsTgED54iwvGnIXKMhc/MLe7QPPkZjumURqoDdaaU5sfyo4tjwC9kLJfV4KaHQucLQjLWeYmCJHSoha6HSDdSU66aoWe+ye9PNZCcekIevgPsANqSLzHn7Idwc43ec7LvhRIJOLPCptjWmATRNRW1xF5WIoB3Fh+Aivv/wBmndp5ncmiZgXMbW+qESXWNk8Y8Lfqr38s0gOlzkP/4Z3NBiw/VnzK8MIGkD5hK6zjiv12rZ7XkOPLMMvbYHehF+od0AWgniFXfak7PE7ZcVQb3Lvtaknp7sfD2visCyzxhJm834BJDkzLk1P3nadZHgLV2i9PxpEQ+tp5+HMi2S1L26GiGJOPSEaR+IUbXA==';const _IH='c8606319e7720ceba008917ddb04e6ccde7123ec3dcbb8391df4cca15b990c8e';let _src;

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
