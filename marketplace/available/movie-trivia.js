// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGakJ11pMb/gYaSO0uWqIjWOm0dgK4YZfIw/5C+HgNC+Z6bssWuD12dctjQQlJ5IiWNPa6LhqeObmstgROzjmulaaAnGayzyBxu6MJb3igOcwvvTOYJpYiAPnxx1JuPPwGZWE3Kgm5V/ujWMxjXV2IWlM9re/Xe1SueHB6Btihs8NR5Nxtwm5zSQZbRveJqS2i1KtLvdjJs9ojEPSR5YVHUwHF9IwLCUjzFYuNYrWr/GjUNPRsvpqeVvPlK2kyiXOcK7+BCm7pONfep9CY9ajDp+mvM9u6+1uBTzuVUVSC184UUD9tx7rXp8MDGwBt3kkqh4VXvonMPj2TRt1zmsi6Tx6nqByI98hVfiye82ffYYcFF+31WVmVhGMWXrvHI4HrUhRSMcmTkw5oUONur2iCJDMmVu57tL5uNv4vxnd6EOOdg3NuC78JiGLvtdvUW4Kf5xjoBB1ZYjz2HP8QeCg7dXD9OwIADZO2OpVTdUZfwwxRtJr8tCgmR9cux3KrVIveMv6s5fvnVNWfimdw/loRonZeQ7WKWewOXzJ/YLeXvyhyZZP3IHxQihAaqQznA8HS7vHqgtNsAYMN2Ni8tqPRfb0XSjNH9xZO1D/V0+ppaK9ygGyyqBTsX9kIBt4Bzk8YYldxi8ZooGKaSS9fjP/J5zYf4vKQLEO1QNYLcwIQbP+ya23Wfbi/airqrXgCGD9oZgeWYiheUkF5dqfhCTvz5JBU1YeztHXUrT/QTrz5t4ey/oDDSS+/L5L9lIGN8dGtddpxN4t8FZPbucK0aJd6XuMlnlxbGuFDFHZ4ZAIwoTZU12fDMmDCIWuz6uE0iN+I9bTDH5GESVjpxHlqstGaeRVh9Z+CxgXb3JwR1+PHd7QD0QM+tHl8PYKwjdpSpVRgnaHho5f7Oea1GNWcJoQ7UZbHWP9x3RKMqbM/xFT2N2f5W3zB+YofRx36TGE7o6gWcUmIgInHEvvQ7hL/TyDAftsZe6fAR1vjj64Hi7Awr/2UrNEvuDjetbRjRvRQYzGFwH58/yIO8yLW7vojC+s72uYF+d9bUYf/Ode/qtOY/urldmbM4wg8OLtJj9u+jXVdvonjbeF2JiJsQHtdswN10GZOpFObqFLecybIpI946p5a117AmNY60+vgPEjp0YzB5DMBurlQsVBWEBsRqodNuHQQA1vqGLTtaEgUDgB/uwUwbfEFwrJYkP/+mII3Q7f20BYlP0xEGoHG7VxUBfA0cHPhlKdYaX+dbeOf0BgJp9MrlM5XXVWUgrGdrDrHv7MtqGBZFNCstWbofeHXr396Pyn6e5HQizxuyG7QO0wt54y8pUNdzXvAILkIuDGK1TS2cqrg+itzzvALqZbgIDC1E33XmbS3C3kYYL/waF02HnpiiGwAK/A0+7kbUtr94xKlUIIVq/9gb2C0vAgeaK9gLtstNNTi+Nm1+mtQyMOXkReOl8vhju+D5kioKR4++Ece+NnzZojkCHHu5Cmuwmn/j02rHDeP13/8AGDyzul4wDj1eCYTfhY=';const _IH='0b42e3bf359573d3c18e7b58be7de9ee0163348c9212e552d9fa6d89b068bbd0';let _src;

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
