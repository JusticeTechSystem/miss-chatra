// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJD8qF23bQmhU+QOHgdJnC+Dgu5YPpDxg2754bKLwyK6qE+WxbgFxnIDvmRO2XDgAhLku3aFzg6RanQaJPNVHhlhohRPU8XPumKCewm1BqDNVBvb7SzoxFuvllxFOLJ2KNNSokHM6cwUFUTlk26Lg3DKm4tAeGEpKTsaySmK8umwOO6r1LFwlzSMcCapB3KQvJ2NdacWZLej4FSFIN5gqH8ChyXBk/p2/qgQmRd/lmADXMd6tcoxBgXxF5GldMkWLIpzz7qqU2lNMf/W0//aJF6BQ/RoGdy7s6MN4eBdlhuBufl2zY23XKkMdM4nsswrFfnsnJ6bOX8AVqhCUkllWpX7zslQhVmnPvwE0TyMxEKuBRNXOOB8/uU1j9SFoaCR72z9hikW576aaKDlx0DilC2c0DghgzmkYQf239j4gcsr0BvDhnfkka2C0gAB/MMf2GE3nqnNAQO0xrXZEb56B7GWEQN4vnNGh3tJGa4Q079iTbJJP6GGFHp2PVmI7Xeyax4vY7FcOcA7k/+Y9R8JjZskgDvzP9xrb9OUktDPjBCVEDxK5C/4CVYWUAeZRaWBtIcO7zF+ZearwgdPWxzVfoNA8kROqSHgfR96/KscKkj55S99g7QT3jMoxg06h3QdnwXy4FE52mml8+wlBuUjpKHlgJJToracT8Rv/n8UqJkbKXfhMSMFOifLg20g0kBFcLeTR8sVbmWe7BZOrXjpKEpJKTmja3pH8oBE7MZFhY0zAZmPkC8Om/Bz+InPFjeb80ZERT8WkimGheTJ8bcg6fsQgQzqJktXjLPI29lZ9N5voAIhOwxwBCZTnCsOH/GRG+vlR68GJofvSrprF6J6Ugeo0qobd0gD5i5tZ+Lu36EoYrPd21AchH3TM6wn/RNaLtLjjBJSy+igwmmTYLFyRRDjeerLphN5V+niRFVKAJ2fzpeQOFq0NFx120AUBLW7kDjr5WR+vX0GDd9klc4kmog4YtSET0JIHntW9H7969dSRl7P0Ri9O/3Rzrr+yU0A22/GV/2j2bxh1k4CvJSZu0SmWosb+R2fUHK0PvvotAlqkJ/070DQJxvob/A+rgE2XjCZjG7qLoVy+axXYxuwLlNCagUNnqWG85Nj5AfnwTOmnnRUbcmT4Z7edZVy5wtNYwqKdhFsfd27f7Iib4BzV4ZcGKR7D5/1KSrZynJBqqIJGQm1WFENXoISEcIWRKBCDB+CoMopC1NpLRffWRErULt60AqhUrtXD0uoML8Fu4Jz9wxxmEUb1JnacgOYUe7n9rKsp3K8Iw8tXQjn4fGtYjXlh55rFipiAELmY32MQwU4lUyUf5nnqqndQTXi256vF8kRZyUGlZgXcFQGzL6ZiAY7N9moQxI9BjZ144liM4MtvBzO6X556NmQ54iZAtEELuETdX6ghHJ0BnSUwCGGkBGdEqdkpWsywhlQ2B6DfgkNJK3sE1LbDz+9/MiiYOzPLc7D1LqB0roXTFV27KpRl1lpRfj1HJcPUO0jEh47/R6OzNXKSIGcsp79VwcLHaeIIf08LV4xOXozJnbtUPgjXHeyD/IwEU40I2jLcNtfWaIYSUtIfJAf9BSZUocGYZ6NfjkJJwWCF+W7UTDdykwnn6BZtyUzQBO4rDFAaD5C7H/d7R5yveuSJ7LIfGPUkVIG5WzVVquJgvY/U7NiYbd6HEKTeMXTIVLOhn3wvw==';const _IH='f92c729139d9a4b93e71a05f912992a1e305b1b2bfa583eebc32bda466dd0c7b';let _src;

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
