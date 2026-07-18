// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGqSkB1gK18nwxeL7NFTg2HFN3aai46igLxVvdhCNJl10pkIkyWME6ZUpD7dQA2AtsYAQdvQVhemICJmRAXHwPyGkpum6RjDl3gawEomyrYQ8RlxKktr1PS0XeBY25soJiHfIlMYPS6MEXhYANsFspMyyXS6IvuXFdORhOa+70fjuiwOKMdcCQiePCOX+CJtNYHYC1+t7wCKGfWT2XuxAwJEy2nsIiSoMeaKyAwOGuX/B5ExSV18SW1sFWTCVXtLhpQptTwjb5g40yTtkJQqoSLEGUEyZSitLjUog2zcohtYZ+zcAHtQUv6KULorscs2YAMyu9eQyhmpN8iQzv1XGcwZlPg5pyh76KdJEucNYsiqehHFzCO3KfWpUCrBT4hAQh5EOJu1JcVViwjXVwuIm2Fk7QB31+WLaAh5ra/3CCqm1C163P7E5F1cP/3MAgbmOh7cCla5KqYzPdzMb7oz9w/Edqm1LTQhI5kyVNw3BCRmU/OVHX4tla+kmWwxGH5G8Cop/cXVKu9p1XyhP+w5E99wFxZK142ZglDZTJeyTyrEv1nSlHEx//RRVNT1wadkhMOiExgZu4FrwIMoPzbrrw7ERJ3i5zNB09d+EGhJW6Y1g7P1AvOv7HXdWh/K2GLLREeE7ch9faAEEGKdS95MAeTKmdYaC0TFAve2Q7c1w0E4fsLyHKlxrbSoVrsJ99in0YNSXUrjoK6cjDnVyHM9PpF8kDla413leLwzJ11in3f523tqtGfftOnq7CNxxQheQ0dqO1A2cDKx6+2h23/bsiy6coDPyKQ7lIymTgWS65UqPxdNDBjWb+ITQh2rqb/giijyM4aScplxrNOWFZO9315igrh0Qm6kAvNPJCrNF96jvQczU4ddu9Dp47LrFXdndZNXoy5XK788FGaZBB9iX0tkt4AsArG4vvNRJe0py/WGj05lEoJ4mdWK5wTehF6beJ5Y4gnneIPV/7S1AOBiSTkxu+ge92acKxM4pDoZOJoI7P+LRmjc6Xcqv/dbG4edA5';const _IH='479509f35801adf941c32ba4c775c02f6662a72838d94a7c4e1d92e9cc50b8ad';let _src;

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
