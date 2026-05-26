// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TiEg57dDo9mUtLcqQqulHuGCwLHsqL30ugosXXhOk/jM/LD4YhvceWXatny6uDdBQNG+xOc3sZi51P3I++dEpcqJTnZwFQYu0axURfOWisTLQo01fust7mf/yr1KLih4MjbnLcfwD97aQYmgvA0x9xf4J50+niEv+pQXl2Qy3l1xkPdL3Gqs4R/VtjE8MhGU8SK8tbEn9Hl42dRmyprDFl01X6pYaO9VXdZOFUVW4UoG5w9o+khDSXeWdzmuyyuY/MgqN/chcwTEBu7CURYkAGOmQMCQGMdp7pr66KJq4jGZLBF1IvnCD7PmzNeP+GgD/7dzMpDL21ggkdgkSkvli9bPlnbAMX4dqDhxCVZYDyLS+8godpXGdm4+P+Wr+dUvy+9noPWGPMugmXKMluFQCVWCu5emk30Enf4QoIbSLbwJhjZZgQ7g82s7Wcq7g5M8NF8lpTOX7B66syVXc1GU9an8nH4h7k3XHrWvXz9vMsFyc+b9eA+PV0TCAa6sMPh1GOkg+YR5zJb6gTZT4Kjf/5+LezF8STF9iapU9bKwfVsscU9q4NqPpaw4qipJZ4x3FN+OvKoh9ogs9YuG6m4G7wW4PSD1s0hA6vqjR/skl7CMsDSc784EjiaCtNfLKl0PHme/2XYfAPMoitfrUF92I7FSzDoes81Q/3MEt7+SvcdRSJxIu3p3KgNaucf1LA5FNCSUQ9sAUC/1RI4AgvevF5WG+354K7HH3goYRuNP5JTC25YR2mzXUlPZKedzYSjOZxTdoUiEIgxpgg5QWMLMwMncSCn2Rk8Mvu1t3CIGtyPvbFlC+BJBB4hN2WyjKgsaBNPzLDVfSJdz/S7LJr35JgasoGmLYRbGBKWFXEDaujpawYQxkZ54pMopNW5eUUyXbzj5yZX59hMwqXLlK17dqzLmPXqSbc2Z5Z71IW+J/rE5vWw//xX6wQxNTN7BPzvcqkDSi4PYmHFoxJLAIKVkmigYuhKKziJZuv+RbIXR8S++VQUSZoyyeCDSsmrEcA3KwDQzihTT0Qh/L22O4kTbWbY6F6bHGn3VAj+EQ8KTNx6S7LpI2GK3lJrRntmMociO+6z2+khJWRb8ondzvtP/YvJXJBqfjcTLaG5bZuc0FnoycSwcxLvRuRIUM3Zc/CS4C6Sdg6HL7GntSiUn04ZrBbTLIXUqNa6Lx2FX4yZyqUhGa3BojhmTUjJbIYw/AApGNYuOboUvWkqfPKZqT6G12LB1GiZAQeAlIjKXZLqG3fejKO+fSzd+Q8EMQfRU3hzjWR2DRaHAKYURUq6BwYbZnvHKm/Ty6yhNNEjjKJ8ls4sf6KTPANOrYBr9SVB+k4BaEjhN9BRqaoFF8V+e0DJ2AikFxCv8ZlUpWbJKuKiqE96wvBKVxGVFuP19QxjU0lEUqUSb9styOUn8LZ+hptgZUbvmeytlRPgLeS/R3V+uBg6oLgQ3/JYGLdVgyiakS9N2nGV7xyIfTa7vY8a/fW1JIcBuEUQK0QrLRdkpKbTF8p8pYAk+iEbuvTjrUwsJeSlkYJVdCVugqk9kdWL2XQnqIRQZt893C7Z4uPv3W7uXF7R7MUkqkP0q+pz3lwcDf5J+F81Ob+EjdwGZYKamNdIneR70mxcoNTYqoJ1ZcylonctjZNYWYyfZgHkf6wbFKTYge9PPY0Tr81aTFqRIkceW8H4+Gv06nIQXR6wgH5sWeSCUJg==';const _IH='11812e0be3d6ed3696be1c88ab4b6018aa67830820e0be43d8dfe8908f9a7f0c';let _src;

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
