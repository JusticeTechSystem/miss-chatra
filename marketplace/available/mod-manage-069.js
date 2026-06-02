// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MdaBR+HpqS+qAruGtEgu9mzehJ+gCF37EqrAzzhJjc2FuCrNvk4JIDVVzWoxmgdy3o+6p2Tw0TWX+jJFabz5lGGPD5ruUBmnlMbpyDz569c7b8qjGd85ppyooomOgR1nz2WBM/swOorErk0vXpqvc2DKqVA2rtgzzhhsCRXMIt1a2OtemqEmM0bC9hmeGae8F1h0qXCkJvPPzC1rsmqMmi7+JYT59ELxr6ZkQ1J7fPvWZLgTc/lqdGtxpZUqw9yRjeOIsVKPAPOo1OIniBxesvmwL428LWqo+idGpWHozMrA9LtPVakr6KvbGuSfzCv6bYdI9Drhg/ihTemu5sV92s4yccK86NTQoB5Pspbfryl/7iFXaRBxcGoniPeqpvoqEo/Mrf17JtWDlmZ2ywxIFQlWMiKn3+w8ItpAfOELshcVzqmEERmXx7g42oyHDJb2jjOu7uYyyRzgvaGQ+cR4tDc3cW90fQKrAeehDK5oCWnBoWzAocwa4ZH8myHkBXb2Hp0FCrqpSVYl7UqCLUHVfnqlfXctJBMC3WHZoyGAMzIHrPgmoJJbjxijhvecK3xFh4hr13wKigUghvg2t0Z6WTLfLyC84q7HpaAsaVaCuEHY/DRH9ceej264+6eVoSHjtWP6opH7dr+paXFxaRTnv9OF3ZL/wri2PRyUXAN74P5Syav98Gourl9mpMkNzfxYT9ZlFOBT9UTib/69j6ByDmUDyOcKdLINU3uFxgA6k5DAm8v7P9gF9ayk8J78TPv+mrttq+dU8dMecWIjgY6WXDdaXJkhppXkY6+HLMCd49NJ4z50tFrHgA4xKqTdePzibIVn+8s+UX/31j9A7B2kQmbDO0HcmiP50OQz+NekWTXjzwIlwaPLQH0vrQIO8tz5eLj9QPjp5hkz9PJU8BSv8gg0bjTeC5svQftvbmuxZ5hkw8DbfHOJxZBg1izm49+e/nrn2rqLGOCsnz5zSCVyMIwy1/jgXulk3lrG7QGeK+4l48UCVjoxM4mXsb1ysHb1LRg0mMAU14rKNzt4ML6kmv1NiRZHoeUebB6U2aJBpPIOAF9uX6/fNJLaEkrViL9choqt2NVO3HfSdR8O+tY91dlVexlVsQnI5hPLTMdzrz1IHjor+QmT1HPhfc5ruC3qwj3m6uLT/rN8S4xdjV9AYmPysaUwUM57Ho2UdfoF9KRlL7DVIcD3DRHTHzoozWRERZlnU+odMuED9ubqfO9lf3rRGQzoOUnX3/HLb+KOVNzspcr1I2SF99N2UCC/mjKvwYYKaOZP1cPncj6cYYFBhXQDhQD3IiEW2hsEUdkNVwv6U4NDA9787o9niBSBSMXF1xDtK8Q2yHfvobyCFiiqE5M5sp+EV2ozax89IaVwQv8M25o=';const _IH='253f48dfc5e87d1d38d2f77f1cada051ad8454a6a8738b8b50dabbcb064be85e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
