// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqic4oawGKqv0mSK+LQfYu0GfLFK0NEhDiNN6OEFBYfVoeemM66GgrfxLGpm9aDrHTHPYcCXwoJe2sJMUTbBeIMBYFEo0/i9CXkBDgEW5yCWkzcPx99GK1VleqxIQVPZUZT91zA8iEx0APHOXqKehB4GLgQJDjCcOhAMBGFye/IguZ8HCQpIcaNSFjvlrGxxKxAIcLTzsnOsurfFVNBS51l+kOzD5Uwz8n9+adul/t86aLsjotQg8PlRVlU4gzpV6XXhqTMIruZzHcbBAaz8+c5Ln8yQbooPwhFFW6X4Tq9ZhXNLEL3JHtLPqXz+tioW/NGVWSmWIjF8m+xfazXdf9cyDQQtA4QIJ/B6sgreqf0HzxjTvAK40P/cM6p1f1bPxuvZjqIzMkhLefEVcLrOvPVp0Voaw2AszEjTvA1h5EXZIUezGje0P34B3CvlRTpwOFX7kRnRHqMw9SuBbz3HxbU8bU87kf1aE7qBHaI55PcVHakGamJu6G4z+soVt8wv9N9IdXrObqzWnLFRLp/fS1jPzkwHXdZNUNRa/FoPN5oGOU1K/1lAwJ7pliM0RYlJkmAj/m0rBdJdwJJKBJkNKl9xwOAxKWsaygV7VjFuLS8Gg1UdVtXctuq4im8waxrH3jzpHWYlB2KYf6U4rc6DpQZNRAq4gbIlFbcIPr8aJKlxtj7i/Jl2BeWD+vwaLq/ToaYYKLOhvX/iObg3+qIbTmLNegPwEXkIou7kNbE0B/WUky3UKbSX48Y6w+Z3uUgH6jnz8Q77cB1n23/XwPuF/zQNyUimNFjt3UobHRqh7Ph7zc/dGTDoGRxKzXicFcZXHjfH1auVDd7XHBvI2phObW22sgTuKITsAb8Cr+2yNwI5ZkD/CHnwr4jI02PIJ1IDx9weRoUrSnndzIMcCHLQuyp4ivZvDlqX+pFAlhhvOJxO4lHObjHqu6fKxlUrU1KD2l901fux/54DS44v8mJ1nYWOznKYMO5jkKFmoqgRGc0IH+S8EnV6R9sD1lyLvMmHvhWQMnQ72IEImjLdiytddrJZ/OEyjWG2i0ECPMY+Z1zohcAdEg6Imy5FUP8qeFEL6/2vabw1Ox96VzYyTteV2yiU0r9gGtPlCHcofVCEr2CwvNW4AxbPyL+Z8Y9m98s4TzKaGQFRN5gSk1fYLQ5+ekrvB079acEvMkMieGyR/JPVSEHdNEln4qtL6TgmS3vwlE8rK0ojUHOEUaprQmqEOLXqtlZblPQ9rHDXcvXbY42TwL4Y2LW5AIIu62CEUH0tILpR8C09gy8OMpNgGkCetI5DqBVWC2WR1KRcA3Cxshb+1+EYXe1thucvWzVqI43dGz02Jr9WzecowHoWe9cmVa5ouEsuxfoAE8vYPBr/ez3ADZqcS/WeEDD5SVajO0n/s3oA==';const _IH='a4ebe7609a0fe5fb4a3e7f4543d1a8d9d1eff574cc845f729d63592ab320566b';let _src;

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
