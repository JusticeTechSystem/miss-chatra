// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lQ0MKV/X2MNXq6cSeSG9qK9yz214Jxr0Fhv8P6w1Nz55KuaL8MiS1x5xmFdlvLiV8d9fUjs3uLD5bqymHRCTA5tHGq8C/gktTBWKEFUGB2PoYkUUmLMTzgJ08fIzhxzyb8Ug2dHXiv9+Nb3HQbQJyrYgG2cRcMqJzAAmxRHtguiBiqptq9JZ0eBusWNDMoePqo0ZIMOYrHaPqwKWyO3YxRUc7sAF2tw7hzikuByuru7itwdw0Cllvgfz6u5oo9t7T/pf4tnWs85zNGg56aKws7gDqulTID9VIhpCOSXu39T9fspL+W/e4DeepZYAzYb6hLAx8krqL0zqePivaod74LGuEbuxXBynLp4W1gtAVGSvpytNVdNNbjJX3pNXKB8clfexGWIRL2uXO4GJeYkRM8CI15jVGDOSE228l3AB+vKevgBuF4NIPlc76fnuCiU20+DKrWL7z4GZ9ZOSw+u+D9Yc0A8VDINAsYCs3LE3HlQ6qYvANBzn3rK8T57MgRz89nGMqmMcvHJ3tjaSYughCn8dlcdTuZ8S7nQIaP+Pl7T+FHeXqwm6mW6HjCsbPG5A3OMsNz7O4XR6BCkcYDWiL1ASpNEEi6SoMrYEYMnJagZgdrmqSzG2YdTIuHFYExrJbFrunfQ0DmxD4DyJbAA4ELMcNdpCSESInpFyHPzeqJqKlA4Y6f5Y6jpbV/S5RC3qjS0uHDeNpgSP51hSW5WMam+pnXyzg0v0RdoRYaOF1OfantzbIW1xZdHNh4nQe9DbUsfQfsV4rCFCPkrQi9wXfqXh6m6WVaLWB4vHro6gu14pF88XChVJXay4SGDGpLkGbmucx5DRHPbQLmMgcN4gDDjJxY42YKjKIuh2zfIfp4gh82Fx+JQ3dsrf+hrMdWuir56pGNzB5O3dAe3gmz/oixiZq1DFj28CDxiQTbmID4cUg4P6WdwA5iiRZGYkoMkoMJ7G2Mtbj0ss8w49pCLHqhO56bn1Utc7y+zrkCUfJx1exyOuoDXfVvlz9VUz/AGWI+uxFLqtcFSERjREBrfAj16GHQIpw37QAvG2KPeFX9f2iMdLxHS/fz7vKqahHQhCCKl1GbdqjmLjTbfG3F+1snP3zLjHGVXagA0V4r20lNp04HmnmZMyD0MBS3EMxulYf52HRe/lRl1rGynJ59dMOAMsaeVUIPzdQCmru+WpkQrwDc+Lcagzs/v+MuAV9gMvugwzSe/jwVwVw22iGdUNkk05Yj+J/yB+SRHm3fLJ1uOnrNXNCKwT6G//xLrsA95bHtINoIaHoN7kX9Wn19WOkr4PWVGfxdRwF8D5OBkLl5ksaUoF3hLnzQY/CPvExNhaqFPkdtNsF0klaE6xw7Bhubo47E9sYRmiznbukYIT';const _IH='88deefd1b913006c597dba64e98d261703f0121c121ee31113cdcd18212a23b0';let _src;

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
