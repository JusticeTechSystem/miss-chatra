// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TOad9GRCnjFjrVq4VUs+Ob1SnZYcfohF2WrSG8yL0i69WQOvjQt8t+9UoG7FjqCk/GU32/CK4duKWypnhX6RYJDKO1bWJfOU1IfoRn05iKrQ81WHpEqH9NjcV3sJYXNt1aiGtk3hhapIGoEhQvr1A3/D1O9INutZnZpStMTcdIyw9fDqXZCwOXlPVlU3PY9y/Wh96x5xf3FnfQy7TK2eu/tTvb0GK4djmEdmyjVnVODJMCYzKCPLTxppD7OTXIipQin+o3VvtQRbQXFaP+J/As4FsCUTyQgzVyddFnh7/pk+yPw4L6EkIL0ojf9XJ3Z/i1eFqsah1RonI62+u/UjLJCDGPVMBPxjScea8aupDLFhXAu654JR4BzGCxAvg40Xluwfh4pPzkHIA+s7yv7KlYDXec0dvpKaD4hJjfcPaAFD2DTTZe5UYUTzY80F4gomlaM7MpPWfX7CvJ965fX+FJIX7umPii7DU28GshpTTA75uIOqG9QFOhZF6wvMKWVEZT8OZckhjP0i/sfjj4bnbvIoCO0NfuEo6lPSPjlkYxM7cL3hbse5ocEsabg7TCoViE950yfPijRtUAYUSZog1R+NaTF4I0OHNyZSkRuprBzxyaTuty5O1EUYHG3KV98WF9n5VLTKkNgbYJUVeC9FKn6jXra7Z7RQZYwi7E7Fw3KG1squ6dwXvZmNq3JKEdBEYo1TeIIaL7PHjvGmYUDSvPCHImKtI1HasLFOyBgxXirR8mm2IYJT/liTXoARxN5vm9poxdn33Z9zVMN9e2eaoJi44aPB7zvq4gzdVbHcF9Dd6Tj0TNueh+tZh33Txb42cJVQUR7kHt+25AKDEYpNI/9gpst99C/Ao1sPZos40BXqSJegjDOYqeFS1qI7GGX5FqynSiXoAiJjs/BnDbxKo4tsigZEeD/cJgN4rd0=';const _IH='b8eb6c9c0fa9acac067aaea807a0a05bc8e255b0cd51194d0a70e7fb04d8043d';let _src;

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
