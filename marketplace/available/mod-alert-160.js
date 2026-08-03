// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAQVWg+2yYgzVGEPJg78abqUcln7WrZWk/8BeogLhBxR4Z4PVtb4AXsw7qvWU7iMaVRiPRhLPTGZzMhfBhi9Tee7KRGx9XDVaSWyGFZyLXq7eb+cjz3N92AtPbtW51rlyuOq6YFmCsuQjUlCORi62f+X68Dz7j7sMAtoOyD9w2fviOVpB3TG7boI3DyPMV5nY6pIQxKceHdrsrRDLe18JWrw1ATGvVnNTurr6+/g1hjboPjF5S+9FE6IL7uetuhdeAlUL/84pyeO1Zjl751xs7gb6x8gEOnN1LSAYeXOdvMA1vUNPS2WFeEczdfVmpwPLlYsXPt0PIvtqYlVZ4nTUqK/Ayxhv3FNZqvTNt9eWhQU43YtIRpEPr07BoLGW4ChEItwJHB9l4xcjnDPsz6XeApe7SpXN+1zBj80V2+C+urawlOOK52FWFpJXUbZG51gwiABgJb9Kv3FfVIEe7ZcKVcJCA5X00+LRBhbtRixU8B06pvG9r9HXevYhkhg7+60JjdAfQx57TWwhP3m7YI2XjooVJ/aQFz3X0XIoqnnU6kXr2BYyTKysEXPvTG5cGDM2jX/cjvIcgFWpJUASoyoQV4MqD1eMYo8hpun17bbxC5MUqMjsPmakEyN1tK9wBj+dDkiIwJh7A2WsPmsaLaPBW72M+hLczoC5ehnehHf4y/Bo1439emkC8UyCgItv0P1T5o0V6EtgmTgP0JrtEao1AxJqT4mOThSQYGLzdlCnI4CG/Jly6uuHJ6BlTs7bJ/Aciz+dGgeQaJYme2oaKAb+8g5TxXJufJKHcVL+Ri6Te3qdsZzvDPtEb3PPGxnf2LkAp+uSYvBHq1r0aPLdb4E7u3FTCMNmRLMTwroFjW66++uvvo/Kl4MacnSiqVXrRAp3WZk/wcXZyHdf8/DSEE03GER1J9Yqy5ZyVEJRlPjHssr+juCNoqAOeG4NY3ZtK66Cwb/3Fpy9dFHmEQGPYUCSFMAmA5Sx8DTDZyPLzsZkz1grIdpQyGvDj+E3F1HUF6NMuHl1dCnRqEM/KUPxBa8EQE16HpmyTFTjGB+O7Ya1I7rETEfwyFb7jCBa0/NuYhZ6mXNgaLtoiSXkONaCiAZqogFeV9+HyQu4atkZtjE2BX6+/sTXEJsTjvfgmVUUBAiDVIQyJnNuHJqXERm8Zg26l1WrqTn1SnIVw89iqEyuyCEVCWgYf9w3j4wOGNcuTRe2O4MeuKfl4eRCjfyfpqIus7/FqSs3GXcWS4NB8EJqPdwx101WP9w/LC/NRyLMzxbKEV8iwCXYs3sSy09uMF3o6aiiCCbe58XNQtUmIvKFa0SQWhA3hEDk1ZcsOrPViRciltvRFkmDKN/SFTspMIVPwW5P2Ffq6wkF5uRs=';const _IH='dfada15ae0fd6693a86867fc9b1e8ae20b1c959cbceaf5c27cb157bcc5808263';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
