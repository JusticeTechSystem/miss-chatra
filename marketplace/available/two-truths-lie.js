// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpTyaH1+qEgU9e/npvzJ8lzcqmFuM4dUOo5YexktJymcgOZZpJfxTJF3GvSsJnM7XZrAUUOq/dyHF4JVhleiVmqgi/1tlI4xmlFAKG02v8AFCcAm5TmiaBHkIHD32/vgWmvzOfNkkXeNURvLNS57vMUQ8PvPDwGpcxpU5Pgw5SPqdMmY+imEfO56IvuTgGuR/LjSgF0KEEBwAoikXHbBTJ7zTQPjrSy8kWWi5UqmlvrQGIXW3hy47QhgUUOqk2pnVzP5Vr2JEX4Z+6vC0BHe5QZIZU7iNY1pbjYVuxYVhI9ZE/7aeHYIWk6LZ3w31EzcnXlKC3yhGY+A6Ve74ilpvXKG/GpPVf+ElgoBlXfF3xLOSVdf/8+dJ0BU1DB+SFvWir2iKgqwqxNooFqA6Jgfwu0fpsuchmk9h+np4kU3VyNe5FDcDqd2XuNE7vuU4FSsVaS1XU1U42MsY/NuCJLzWnTA4GeKrmtpwvL67a/yNwgV1+N3Zz9J33ehycjGf7FuQcQFW6dQKyzvX3yj+f9uJTrc+5RtR9t5LDIupH4rSBz1bHQ+4fi91STH0tbMnSWrnQOOT2uOl+XHG+Eb0+MApwkwulML5rcZsst0b1VUI5gf58OXgPsva6CR4QWR7Kp2Fk/dF+Mgnn8zXUz8R8a73UyV6tXz9/ouDjb3RsWEEUw+20btAa9SBtznywz8eR/6hLyyA1YzOuZPlUuQVgAnGl92ggyGclk6UUM/3o9LW77HLhBLHLCfvXWNhSLD+N/r7VR41jgPJUkciz4IHill3HIo9sJT3J95mtOnNUN+9KzGzGtDyWVy4SqbMQa2PzpW7dAAUSMi8yteTMmJJu1lLhuJgfT2Qc6V10+7/jbv4skavo0fLRQ2+LKZx5khH7krD/bQQuQYtrKCvyigvJce/ku35g1FBqQnPrh5HR1BnKm6YRddxWLbOO9bdiVKSKEtVeDF7qPpoICoD1MjVrSo5IfCh48aNnODD7HmKzG107NdROL7vq33a1NVi1IdwvBQ21No0YLZYRF3GjwpvrPSuqUsk/72aoeL74yAX3MlIo8tRes/hB4RhCkXbSg9bFwoOGieEbxoEw3bgHJEwb3SLvYos393ozufeo5zlfz/AnE7CID9Vn9OuneaI3z7L1/gIl21vaw54iU0PtuLBRd9xsyAm2syzjn10QR16qL/6rUZmx0EAwlRG4tZpROyv77b8EeHK36zJ0nOPBKOqf3P6xGYq4epMJOukdzOWV5bviLe5IjAznSVJh2uTp4/QcSpInrDB+gtCvUK/oCMEelqnI9SSwNfgMJdrmBcqONUgXnD/5UFwB34pKkbEVV0s3FiH23qY0c+K3+ZeeqAw3gpHWZzL4ldRPFQnDJ2ukMsVftMF5b6YVElsm5nBHadqYwJGN+8uXgazvS9V8FOttSHNp/Uu3vegdAobIKp1ZLklB3UA23FgB1uxkt4c/vSE7TFmQgc/t';const _IH='fb87042e98893d142e8417b167c9ba0b5c375a8c560b3fe703ce20061fe2e9a7';let _src;

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
