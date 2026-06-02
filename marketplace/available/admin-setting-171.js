// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NIR/eg9Vb/yyWsjrX5k13PoQh9cHw7CeYc225kSGnYx4c/90wH/zncpXwRL+eAnLEB2+BHBmho9wXfINwOf4bbVrIXFQj54UAqECe5a3iEhDBn+9q0uGdPGgXeLprZHtI/adKrNkqe5o6++LIFvbMBli9Ses7Z8L16xbc0g34C48mcqzu53pGODJ4MbQPeE1/Ayz7ZTMSTa2QSta/YSJ45vcaPZtugwPHFVyZkKGfaX7UCy+2/iCQd8hd+k8kI0QduHYMdcqkwtwZrwuVxbaidMo8lHOi9P+anbuiAEj88ZrUhFoUIRF1RKe9llanS/GJ5q60UrmeUwOC+IlwHAIfVJzKDso9V6jeGiR7cqxfRv5S6B5A/v7xbDTMZyHToKpUM2K5O7Lg486RlKwTXB3rJHfe+aPbv95Yr3tdyo1geiYBwYAET1XdQJNxd3XN5tHuDbm/Sv29ljP2KgJkLO1NI5kYE3SK5o5VDaXVIr9gzkIpwMfFnAJUvlC1JrF8jBjYuPLHXBiZosMvziHJPU9Y6NDHyJ2pZ2bAbyfVO1A3SceySgYjI+q5g/PdJhZj/6gk6kGCbmxe6rC5kxEddmk8iHcqlnUCxDvwYLUDlOL/8z6cyHZtqFny2/4pcT6EjVX79zOa6vVs/Wx9UF91EQ9d7aitv5zTQ8hqO440BmCHmDYgyuH4uoYBfzMIe7dMu+MtHVHeNbVBKKNFzaAG6WBbc83halBHIEIAO2qJc7EGQ76tZng6UKlKrXUQQC8QpgEUFFz9e1R7Q/c6OsWGaJCzEQvMynvICnw9hrh2qHte5mL48vcbYzhytx2JIzHo7yGSacw2zHL7uMf4cr8WjO9KsC2cUydF7jdx+CC//Oc1D4unASltawSxkUIBvxyQYc8q4Nzyz5hUFMA1ylGly+mE4qfDxMmIroBA3ZSTNNrWDYmgUCqPws5zLcy6mdT91RVYgVoeE8I4VawI/+iaxdv9SXw+dBpa+ifeQ5cYVkuy7qL+FJ/JycN+qTcsvkh2Pk/7ixEaRFd8RU=';const _IH='77a34b3a31f2b472b30c876f311eb22fc9d1417f6d4c31c940013c00537584f8';let _src;

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
