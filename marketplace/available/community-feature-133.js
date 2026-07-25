// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjEAjStA2iQslPw7xMkymJbLZdp08y7FyybdUsSYtL5pm/+ZlVW/+JRVEs/MNqh9x7zGv/88FM51ydhljb5Nq1gNJWEAqFahxSg09EHtkDZN60vGcOHJZFAgavMBFrL5+erK/GskofD04Fo2F2NlhmiS2FAPqaq2zuNBxbOTAOzjHkkRqSY+WiZLTdE3z3sG1XWjCiIrs+audpx2rpoULHHXbVFqOwupkfU+07gEnTkJtg1XERKrcih/Ss4Y7p35LxgpRGI5dWMPJs7dLDinJ6EEJbbf2VAi2wwLxHZi1lTFLfuECWRY87Q0Ap8p9cNxDfoPyEU+I+cWKWfCJnHSkGfEXiEpE2fgscu+1t99uhAf2DGqam14hueDUwdpuqzveLHQPFCA2hRdZ7nZmUum7GSmwcVkJGNGAE3+uAHz14Zcp5/gId8fMEV0QuEqJUnZLW1dNWa5SYDpD4R1wrnFahIRk+0eHkjKE3uP7aarC1rM4AmERvF5cgM1gAxF9dmxSdVw/y+ETHYkYJLYv3vhj8PiloGT+/fz/i2HU/mFyD6y8nllwCqUUFrW/D692Nw/v7vV1dTI0P22medT6uH5XDbNUp3pls9uBt+F7v7BqfgPTFbuqycekjjSKc14hispoIzFQ2mA/1Rd2W5Nn25NpnnuggWZxQNFkZh68nvIb3aZ64FT9Noqwm+N4jFuEC4eCbMIbJvd+CDaIwfpxsweSzSjAVZodVBiLj54SrIw==';const _IH='a528b982e5ca66740dc7b5e1931be22687bed72b67a88bfff2fba1254a103bfa';let _src;

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
