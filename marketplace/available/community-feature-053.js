// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Thi1hR0mUNCu03dtHenaAQAgJpsq4KoD8FsaoUE4jesxzr4VGdMaWMY3ec2/2RxNbpS9K4SMezeqRN/oMldD37S2Hyq5gZDNK+3/bHmeaM59Uq2O1EkMcVS/vW+CTj12t4F8tPu1J88oND5NsZi8f0F6+ZJFsAW2BjfAJCU2hCkFuq1gz73AodgwIm6yslLJLK0JoWRMCttZpFP0EFKZoBzeEGb9B7c5vTAayC+dRGL2GQAX7wJd45lvXTks/wDmHH7guxE3Qy80pydiwRzs66UYnfD45R9SuEiPCMjhny2OGApxtzDMlak+V3ravORll1Cx9NYnnrwtOiHjlJ9Y3nd4vLo5jwpBdNxkuKr4zah+I9LrH8aDGsfMuY5Qti4a5Nb9eTP/PEx/hh/UIUc2ul8DjE0zimPcBBzxQw/i9ReAPVZNOmGbnrRaiqkCPg0bcbY7oBIH+CwApZ+uLQfy5Ss1xw+0DmZXEIyTBPPGBz056ERl4UHpZKndOYtdUbbmlX1xDpT5MHxFJwYKpy6byAEwOtgN/PQmPQDbZSfwOI9B5ZMkpWZrV3Fmv3bzD+p1VAQl2TzGhoREUF5waFB1Zi2eqyXHJhcprVNqNSDeH8SOEupPuWYdkcVuCFFSctyUoRgzf5lW8SJyqrRky0tJvwJCA67cV81EGSSWKCwvz+tv504B6viUpqgTItpo5zOsHhy81QEpQ7KaIxMT4wpvzUlCYqd77hOb1A==';const _IH='7c487d15150948bf9872abdd9b919a1f12c9a433a6f7e9d2e913b64dc80f0f23';let _src;

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
