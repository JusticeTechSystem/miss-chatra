// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ18XB1c4HNjctvvswjdiQ0n6gByfdTmAIJ8EBdOzxy94pq4QIqxaBciYZkt/ref0ZqnRdUzjwA9Qs87IwSnu6WrfAytnvLwY3kl9JcUr8fUFmzPwVhAzeEObAvJ070+vX4JNlp4Ra/N7XImVB1rJg/Gxg/LXkQGZncWf1tlT8OFOPR/fKyPIrjhM/VBwGOXTIav5CciDThLq8ekPeRM7FUrbH0mSBxvE2iV9jU3ygZ1/vwBdinn4tkXQ7ICZqvapbtakx0RtTeasfG7t94F5upraDE6PHxKLCVo+gmO+ey1pvB+Q/8dkRUg9T6MnPZla8j/hc4CojbpganbEss7Nx9fgbt2FeJCZwGrRGm0H1x8Vxz3zs6zqiVCA1d0WzT1B9+49dPAl3Fdf0ywc7DIaCmgx/OG9/45qxsCS+YcNeOBgRW0WuGEb1EPW7r/vS324gQ2MREMdP1+5bfLJ/WAdU2gBilN6QqAjRqoILauRFV4lrvJ8Kw5gcYySLzkuEl5PYVBq4OEGU+kmR36X9QTaJyle3rDmKPIahPhAOKy9vU/czztS1rH2nD5EYC8RPe7BReEshXx6aGnwNeWTrVW9GgJwMZzCeF2qPgL3qewgP+kkHcvheoWr84WmFtqU6mc/5dwyhxoO83N+GboOL6KvuyK452ngompHmUbW1Bf/61AFlfNKZWfqbTLVe1/69gLgQ93tlJYriWYi6fgg5Bqxnj1aSc42o=';const _IH='82da62661f0f35b068302f9b61f4a3f803f6e65f44e5afdfce79e22247abff86';let _src;

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
