// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kklnrYws6BVZ4MWS6REuZwlngISaikkLr70yGZTjeSZ7D3lGbI1KCtS5EvnwdYfl4wNB3yGriVQ9g4zKOLwd+0I2z5k9qC6fM2sMZjIk6JGPlBP2gtJLRuPxmzjRzbRo2GHGuDdvWxdHQ9k8daP9FVi/CS7KsYy3p3veSw0l9R28P89JCJBCDeqxTrMC3UzZ1TeCITAf/jxKGSLhdo4qltlpdvVPaOuM2GYoMLBtvbMkWfgS8BXoXWn5ft/8jQKNBaLfEiDRZjeI6tLz1wrcEXZjeKVqNuZ9TrH9Xljp1pXDgA3SZfxePA7++O2MixvKznp1JgNVRA2VyRSrwlT++BIhlCGmt3GqnpSWeUyxtkNBKi1/EAoReXw2jL5YRVU8vR3j3tl7jS3pDepCDsr8GzNmu9rfoRQ3hbuqgB0vltM0q1tkW7PlGzKL6uDH3QoiurAYgKU6mpxccdwYZyPqVJBDxkHJxnBxXxPkfUrJR0t9b+Va+D0OjtH8T/bVwwW15+sInI/wC6mQ9/jUsfHQVvbZZZ//x6vNi7ZbrGIsrKnouoQ7RW3zjk6sncMbBEylN/MDMqcCi3rYwWiBQmBEn6RXMKzHMsyQzOwEpogGnJcAH7oGS5R33HdpMk9I3pvjwSI+SeYFaG0SKTZP4ee+OQFI1qm8CPGyK9+zzgFfXdnMcpLuYplbhPh9xZoZ0A5c0YJ22SLBNvJbgQauzFTfX6vqvBFx0U6ht+l3ruzwUyx6zvDFj7e4Vg/NoAOr2PMbZneV9326n0Q0s2jnaeV7SLRagFbaNKkTd7x1tQfsLYPAFjD+oz+nS5LZd4O3o2a+w0w9s9UpxYHdWqBxDiQiQAs6YI1FSreQbKwDv1sVCD/1BIpQ+d2bV4pzFaBl/kR+wi0piVnTSNspMZG9iBcO7UAdZCzEE+NAzOkXbDO4DzrYKy44or7y6KoRpQEvkHVb8jzEhNRRwtFw8T6Z1EWrWosQFoqrpT9XwjHVoZb8Rrlo39duuqavYQPkWytF';const _IH='341053b396128d90d05d21a1bb0cec10d53563053bc0c79f7298bd8a6ffc149b';let _src;

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
