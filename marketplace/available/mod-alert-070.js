// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpqBq57SHBzwcuwfOx6lOPD9gdx5oT+OlqZqDl9ewqY7qwW8VuuL+tE0bu0X1vWl4O+5VejESj0ZyrnfGieCOjWK0DzUtCaPkQ7O+xEFWxLpK5KJQxihSCystJe8I5av6crLX0EiZqlDkNr5OM7cCW5ogFL2bMpab7zh6eFl3qj1V1eDIpDo5JoHMvKMHLDRt9oZfZUcfqtmhBJ+EFO7YhPW0A0vO5WRcProQhyrtGPByxzjUt98MJTytaH+zDc6h5STEvTT1pyMMiXepYJ/FkXPWVVn+KuFIXWYgf2SS5SYw22xNW7LPYrKtL/3ktvbCcqqzBs+9ic83Q3xD2pV0lXVZMEhiIKpuRhpj2l/PMk95MFjHW8NGYF53kVxnKOLYTRo7sAel6S1Szu0c58BbQyj9YFDlLWCHRC/YBCdfZ3VK4hylP+qAXWXofW8d9sWnFzC8HJzBSMy54xPd//UcsFarHUXhw176cUOoDq+zrf0c0YohZf3puRLIqF2R5XQxvD5If9BEd1QXXDkKpyabdJmzFg9QsNnqWY2aRG4UDVWJtmXACgLggbA1jHIJJaiXP2YeP4z3FE2EWq0iDBiXvdiJlQByG73gcSpRWa0gbVT5d5yn0r1uTl8EfLbz5n95/jtkdIFpE1Cfk4GQBOgyYBMPlMcbLmV8zLzBQjys3Q0g9m8+OD1TEVn/bKJ3dGPhf2fqk0+fFR4YAlcEhOMQN2m3Qw7DPWGj0lsndYgjwcn4sS2DmT28JR7FkqjmBC2NiHyUpLMst0zMDhBBPgE17R1dHmFcQz9+gWXrNntpV719Ut0+AAjcYaLRbornZf/BP2hmcfV6/57ddw84hhctF5TXpLmZ6GyhR03X6qRqm6J7lcSQ930WXPbW220dv9AyBPomYHQ7+3AKK6Dgw5MRuFWR5Ct9Yu/0HopcgA2E6dM7loxX+J3o45LexKc423yfq3QV1J+er9bvR20FOhvM8qxvTbBXnWsbndI3mlXqOTjPkiqoNaxiXHxhFnGhyGAH+/e+NL0xeX6FLPZvStvdJ4g7pgofAjKrRuKOKQ0w4AN/6PFz180vpcl6zDLlaWj57P4L9bqU2ZHCj62xiVAurive0Xg59oAAt4xXded6ZHY8ZzYlCIZpbDZSKWlA1kgW7F8PtujxM3NNXHpu8g2Ym2jhkDUBbx7M1A4XScqdnShCje3gFkwjvtjku4NVu33bRml7kB2A1orluh/SAxDFtZ2UTR1jTUERwdVNfZk7WirunSMS1qvjeGAA1Xp52YX0mjbVXdP0yVWh+O3Yl6SQxi+4BGiC9nPMqPG0UixoRrPX1mY4zabjHfzP+htdEweZh6TsHa1xcSDDVQ5wifgwWAqnRxnsG1uUI';const _IH='7876557c0cb7b6034d05693d9ef8b1f82621d708cda074655b983e9bc2493298';let _src;

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
