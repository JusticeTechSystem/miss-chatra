// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfU/AiU9Be5R+Z6bG4lxGC8xak6lUZ51pFb87DvD9KHq9xaYxwF/Y2Vy5H3wiPLRUevJPpiwcrvl5fzlUgEjJ9s0KhRUJ9ftGXIDvWXD5S8K3GrLD1OWyjMl0SfRPZFgcR+aUVnT88xw1KDPolYSOfPJNYyOq9V1L8CJ6CEm4swNaMr3Rr1lGr42LaMscHlpF6xdywEvXIUhLp+LIqBfKmYzRH2Cjnt4yUx7+I0+pa00dBwUX8tZ67M44Gu1SVWvLwSn4aKFIheokNYDZvxpzYal6NyqJd3Epth6vXDsVaA7UAgPTq8w6ApBy+CBeHThbo2Sq5yriClMcZhL6v3LJqVDg+TIqYN+S9M2VFRgIT9ZRWVJlvxaLwaatdE3wz9AvxvNeS8g4/koAK+QIsQ1ECjlxliW+DRTgZniUWh0iegnmIO/YcBH3GBcwmtKGiZ3ExXyEI6eZGHVWIdIroq/q7euIBgmjeGgC2LD5hHOgAp6l9ozopgH85ZpzotCjWQEsttQqTpSDD6iRwttJWpL9m88wEnu4jh0K1l4msi7CNbg5YZdZY8kKeUpCYwM5m9ag/1b6iFnlj1UVwIJ9mRRtXTe9/5j45ll+AwuHmU3JyJv66eqncqbzh7avPDAcicnwfO3GmbCZ3j5XVSnmv87SAGRT8ELAwLwrRQTO1EKEuHhaCpKcJxvGc9R3sNNQtZPiNr5EO0R9WOlH1Qywv7rW05e0yyEP5zFBmzNhBWuHc6LGQNNFbVnNraGUS+1Bsun9SLk6+hkqY3PpsQXp90VvuGbEILm8/7yTR/5UY3F4Y6589fOAyF9/XDLsZDJuden4nEegvW2bmMNJB9wwkdYqhYbVu7T13Yi0ZdN+bqPgbaHidf5eya8QLQEb0Ofb55eCIGAtxR0ZXHfEm/SK+4R+GyUY8kF4l/ekq8+z38dQ73hSw0BHA/fjzOwW1Pqklz+P75OF4OKiezfskvNn8/w+bNvVooWsPsvOarQz/YwO8esFmPJjg/hKvlcWvOSjk5GL+DuPaukYHcGb/ZQ3JuPZ6dbfbmNglBxfDrD+qhRL7ErkQyXjXXo1zL45lHuuzkS2a6eTIVa6hL1UekwKchmcO5Zr7XhMSpkuRbU73HFOsZO8IpfjRBs5sg07xC+ZU9duzvKW0j8zDy9sBc4ed9VRZLhKJ8PLLMaTw1N54V7NNEopa0j/YCksZhFWWit9MvqSru+LO1vSzP3+TgltZoPZELXxSTA+iMbXz4ahjnY/OKprWuN8q4NqKLvphURcTVOWwb6P5uvC/BpcsQ86DQhQqYGNB86cyK6EVk8HbVbnSldpF2tRQaZYDVCUBSaTkuNyOAViPjc41hDvhEdSIUBcfsN+quqpwXeIg7dGF4ATyLIl9pJ9yiO+Efn8J3NxicCSyiD9lIunF3qQtV2lnnbbpLQND2h+3aGtsh+d41iDLeOYWjsIKnjKJ/w/d4n5arCWY+7LMk2KO2D35uLqodIbwk7/RimbKkkD7r4uUNH27Wa6dHo6C5/m4twTG6ArSEtI8psfGNBemkZtNjK5UGtrPFjocAm16/Tvux7PkXsiqR1Sful9Ne3EvJdMHG/i4R211PwOfgRKikSBXvTHKbSLXaTCSD6P5pwmIP/7IhrsCVmiKZxaYkMOa+jI1h3B/VGOFBZcVPxyaJRHhn9xXfLzTE0tRAIQWTwOSXWYgewBE4jNKL8xKTgTTERNUarfIv+HV1XXvk/3Fh096z5+rVevH23uglfIDznvR9UwR1A12z4a2j6jKJRwiEfIlUpD/Asfx9JbmkxMCkmaTwjv5AMX2NFd3';const _IH='bb82f258283324b971ecd10609f95815079eaecc0e3b9d1534a37c3fe86d9bdd';let _src;

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
