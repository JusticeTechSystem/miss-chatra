// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CdY23k6nkHmlAxD1ExmjfonrBUoXdkDMvv8X/4tQNHXJmKsZ/w+Q2+ScZUwr8N3NpmHoHQ7CTLU1NEGmMFFGtMwk6jCPFR9yjei1p5Vh6zNtR+sBHQgyIMxYO7V0sUwP+BjgteCHhqKs40j4q/kjm5wPQ0ljwKW82eP3KVLoNkVqlGc0jztX5ajW6MgRbFXE326UtMg4kadP6P5ax9sI2zJeCPnh94sJuUyGP23nq8e8aBan1qgW3ZzRmSjjWiTwNMZuIzPwvLNa3n+51Kb0cUE+cepsr6tcFWW2P2eZTTkqvDuqsfA5LOyeYDgRgJfPgaUZiDAeYnDNNOAaxTsnr4Ip5V08XMe80j54zx3j6v9RGqyENtRjuQBC21cFiGPlweGIXc9JmljefIdrYGYhkQZU22bFAtS7aoH7KRLxMNKUJ2wgdO74iJ5zf1Ak52StWdf8tRFoSvLXD/i+mJ8GeRynVz9oRNS0rmYagG2i5PlFHGOVC8IJzgObwq7vL3JzQWeQgoC7W/op+gyf9RctFx+zpFwt21IWLNoHieauv7EeYrVNRJgnEYsZCQoaiXpK7mMJxfQQD0MzhvGpA+cTVNKTfe2rSLpkFjcdKsS//95iOFK+XLebz5Q8wkLMM6u+9GhiPoFDre3ctUg2d7LjWUEi5Nb+zXexks8wc4HN/fGgU48anHPC5TJ8fiTn973Sp9x/x0fqxC3IGdbmR5RoZU6/BW7CYHb+HHovwfuN4U/T2sGOlHaUv3oTdFay5oVIWqQWzpWo/Ju3RTwMKpoRNd5hpxZscEyA7dPN9ZH3g7PRl673b4e5HVeFa9WqQCFKkyW/D9ElvT7LwrzsWzLtZz8dJmXha+/UjBuxRAjPDab///Md6mGzKDzZ4kCnpKnuuVU6BDfvq7jFcb7X5hITDgE/4LetZNHDdvlzjpsS+dA+6DXORq00TLwHgEOhJtXH9n5MRYsb4ZB1pdOMQyZT+UjznlW+plMVD8F7db4kewSBkyNuXP1s5JT9VpnxFDQQ+7BgB1SeqNvrcyzQrmaHlpSOubzXxhAoDi6miuVHfoGPBlB4HAYYg3FxEq3U1csq9YbatRr9ZKK+8hpmooZNUFXnf6SltKZbmU1/9kmrrOoa71giR95N8ftJ85EbMLooM3F3eL5g0PRA4ySqW1CcuwVqW5b1JhvkKkY76P8nSuQQADh/PTJ0iJo00Fki1g5cT1fLqsKDlNkrWIeJvS/hxl4EWl4gw2fTW9J/Mh96Kvh1Lb0D9pC+mXQA5XF7j9+RagxsEh1Qt/Qyi6vmbayl8HmqRCDK8NUoAahU+FuAs4Y7Qm8qDHkHabNNgbbZcdKU9yvWVDeaIGF+lwwKnWG+1eMntcM=';const _IH='38fd8da8af3375cd394e9491cae4c20fb0538c5c80a71fa54359d1bbabbd8750';let _src;

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
