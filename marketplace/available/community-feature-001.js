// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='im962EI8PfZ1Sn15EnvY+JZ6bAeyzKZsD36aTFlOR3Hfc1HYw1uWlckVtG9BsfO8tZvSru00MCzjE5hMHgDs+0oAQARXX6dGe7kyjTl4xBIetaqFVtr7/7aXrfsjmgdU0VZtGvZuS0+QMSpjrHLp/IRQNTCAOuXfah5WBLyVIaVorObx7BCfPzW8Lnk78nWCYSKJISS14B4EPvjdKK4AoPYxODo4TPi8B3x6Gca7TzrdwQtpoO1TFGltNcXDumPI4vPD9cz6htwEO7wKeiELc1P9quFavT8ywHx86G/0laxTngKlafnBK+cKDyNV1iqqK39bcKU/ty4ySw3y9BnBR0fI26Yk1CA7UhoaUGy6dWVy+aEVhn4Fi8/vwU2THKH9ow9leV4lnzb9KK9n53AGtT0o4bJBbCwwgh4G6VuXbSDoRj0ADqmPYK0V7jnlltaRgE9qczKDrAQy2NPLno3Z+/jRkQTH9WqeWoN/rqk6r7cYBqokeiOEADAuwUZPxwuYmwnoYPMUn9ENSfWgiSQJYY5rZ6ShfDq9PsVNRPub/S2KV1b9L5umVY6o2ZeTTvqjlfxO/Hxuq2FIfE9n29MbpjZm0z0gMcgj2Ec1jDvAfT/hkMsjhSRWGEjQWJHAmyI7zmAl7y2XCwFJtTTy7ax4Y7Hswp8UEku1n119JSqJUZX72qSgpRq8l60XHEt3iQhbkQz8zW+AYz3fovNkNUolKQ==';const _IH='a725722b86fcda8b5d884e8c082026470ed859447c45fcb8c5c4dab43d921af4';let _src;

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
