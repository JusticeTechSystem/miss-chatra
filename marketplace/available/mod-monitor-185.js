// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaOyWDBhrUaK56dFvqxQ6/RJPBUqrO8BypxKgT+Bj49GvXjBodEfVdqVY8KWVdy28G8cSEdDGtLP0MdEaVGIDWyiq/bCc00PV/MaZgUcZZOpazMpvcOj0ibmm+YDV845W91Cqv2Te9R3TMSXroL4aScne2EUfezalAXRjEikaeymzzu/pbuldsCVu3K2Nqy4gK/yV76m6hSavpw4excGbs9GTIA6q/P43H7ZGcq8HxFeRUmxSF+3W4wO/m7gHAiYBiQjAvh+cRwYnwiDanUibikpMhzRKUVcJZJZWRenI4MhYOM6R4FGSoXwdRcFONqy6urEZhobGiBHR5paKpPmc9UCrUv8abFF/VOULrRVkI+KuRoSbapUTAwVdIG6aYdBiIbLNFcEnOP9xEwD3ytfLsobbj0DrnxhD9Ca59C8D1FBZn3n9h4ylIXivuXws39AtmbmwLPJy6osqMicgeVRAJhFKvlUpY7rb0hG1cEsYfv/KlXaegLJ3gTZ5o9q3L2sVish8OgsiTciVrCEmMEgaKpVH5+xLENACc4iTnO40hDwPbNNFD3qVtiBbqKyIYYmjubIdf4LjvUr68ZXdOSSeGpcGomgsxu4TF/1cJUJKUwSJBuYWoVIiHI+ZOHOiIF6l9ZfJHGGt+fJQ0dWzSE8Y/qQZiI9EDkgW3v3ttwSrQPd5y2ufE7Jrgsl5OWamLGTz0TTB+S+aUDy/9TvyQM3uOJGwO/dEeb2BD+kwEZF0vQYkoUJRO7zcoZGAxGH8Js6dUDNv9k9xwAP7XPIhkgVo/PREGTVNs6fK4bp6zDlaq9QZdLwRkHt5eWaxaSsd0bVczVi6/9kJXi5EE9rYjtiGqWxNqXltMWL8f/qDjoLG1yuQVuJ9yYTRuQdnm7KwlCSxjwmYUzW47LHSoovZY4q2RO/JL850OzX9w/5ZcEXhpOHYnpgqiDWuHe+ftx1a4i8+cSkRJrTxxsMoM+cOQDLneWb7yWMfli49JsQygXNltaWWxQ3uRVywdXZIdw96Xuhr2XHI2FZDnoNa02ukLtCxhxwtgSPNwVNSPHNfdvYNr7XXYO4mzcPeX+aZqu0l1b3R4KKPjQNR2Fl1wrt0V2jpcWqsZPQaQyzequu6JsoWwmna3Mti/xsta+TePPIPVqfV6cyLKnxSgPqJPbVqE5V9+7Z1d3QsG3PQGMfEAeQd3IRaVFKWb4E2ADQf4mQMkvMD5IZ3g6rDkn3BZhooPPOWxIRMSpFfbjVQKsyPWI0PyOLMKCMSPhPcmX8ziO/BLO7lar/xlXe0ekaqHrMy5GEVAGbbzJfuyCNbl0oICMDZEKv/RNPHccJC7ezpQiBWmh9SVtPb92F62AB4suOKxQBKmzkM+NW2SlfI6Cc8+CZU1tDTvZGzW77ghH8OXhEVoCN8RQw==';const _IH='ddb2f786ff6027974f4da2c9091b28534197dd262acc51b2b5b25d1d65ae5464';let _src;

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
