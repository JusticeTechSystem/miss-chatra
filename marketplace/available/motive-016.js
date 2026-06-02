// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+bNcadbQ0tHPrQ7s2WL5zuSQ1451k95f4owgqJloer5dkVgh8ytfKJgKYUNI7E4J0EE1pkBzeXdpSREREzzS+AAqi77nhkxCXatzK8dLVcMqobtBGVKvaFi8kJ1LvfUwGtSRHjdXu0yIqFDXUdjjrI+0moPyVnmth//B5MTlNUp5i/u3bRwaXq1QbeW0+zY9Vm/eKGNTwuHitAblv7nxF00fclQM2yOzcZp4CzbWIBOGjce46L/8wNMG5uHVXQqVS4nfIOicz3fn0FfW+9rP8gRHihwH33UtY5sgFo2S5MMUSgKLE7ZaIqtiXv7QRHGSrN/zLsnrX2h+o/Y9ZUsZfypWLGgG/UXhYWqFMUa0v+Aw99DCPOKpzxEJMT7u0qxmumZkv/GOCAoTwsLRkriTcZlbOmJ+bODZPrxHDBRQsEnKx4TzPfdtQ4KifVmqm9blv5LpTxqzEz4r4d4Z5j1aKTpbKFMv8G7YQQXeZEwKMYGFtKrZK/QpoU94MWF/NOTBW+burbNtE3VRm5VnASX2J3d01Q8KnOyGqffVzwmBh/TkRAJnMapajVOz5PQcdbq75AOQBv5wLB83VqYoLMmTO3O96OV9fv7rzGL2dwSRuCNPvhis3yTdl68VnNGJCw3qfZ7odmCfgn1BKTer7w8CkOEfeSD9Zy6pN5qLYrZ/wsb8K26W69zxOyLxeCU4z/UibBxvwnhkMdShqtzDpE74bC0RRWQj//m8+l3Ilws4IqQIES21u+AiaCQxxJzw2PeTssHe2NL7HGuZvyQdx8nafsyptEecT1I9VIY4NEU1TAhh+6ggyCr+MBE36xBqAiNTjXeHUDLBGSW74HQeFj7q9dNT2dLOP8kXtDjW7WKa71glONxDSrBGRCh4IJW3hd1YQUfnCYYGTH8Q5h2qdhtvGG1MXhsu6JEyboyW2Kz2TtJku/+JcysbT6Xj7YlmQNgDEFxjUXfwxkV6HBfHW78+VQiB+X9iCNWZHI89wgj6WxBfSDz70aqrnd1LW+/h+dEanuFv0ix/I1xC3toI0olpcCsE';const _IH='21860accaf7a948e12d5e7d7edd0d7a95d8745eb21b6dada3923cb1b9594bc12';let _src;

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
