// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRChJhUsw6WGS/tyXQtTGwbHz4JuZLIYA3ev5RZqkKYF1O4NhA6nV0paMoHrGIToLM/wxFS+6ZlBmKiulnKjr3ippF1ztXIg08sSk2jIn1ptOMOlSAhA7EhURDU34vTBv4os9SANXUiBNzkx+qWVZDmitAl5m8pvWMOchdIoeB5/0/2Y67E0zJQByUNTMWD7omoiO1nEpN2EnDOBVqdwJOzSvGvgD/nJInBcJwgaXSRGWubdCHHRRAbSGTW7eQQf78PTg2XZfvKur85BMM8ikpNM2Q6+x+PL8s8GibvmKW/1jirMsQ5enBJctX4nwufFrl6/U5nxSL1UHco8Nuuo44xYoOSbEYBSAk4aBEangXwmXd66gi6yDk5tuPdNKVfnNYRoYjbDXQG52Hwu3gcVw8aFljGPsu5FiFM674oG2xAoetcVdgo60GnnZApmHR1tyrtJvdV0qAlwxkCXibI0FUMoeNi2YqatANS1hODsh+PBoG2ztrvPG84IubOEL25937Rp0ObplBdv5YUFOrNvZkySboSSscwfP1yX2KNCH5JgwS1IBAgcLb08/6zFlR6CXYpRBWccxXNyx15qrPf8N9DgiOvO6bzy29BIIebG37V77dSxQoYN11Z0EgJwfDAc4eMZ2aKzOnVgB+6zOoohIiAGO3ixcKlsVYeYcRbKBFPztbKUlcMv1oq18QjLusqEIffbyRxurYbumD0uUSZcF6VLFSSUNlaP9nCxizJWsgANAWaOUN25KZlRApl/g3BH7nw1G3/VyqPPtc+KMdjzojoVj8MXMy6tslMIo3cdVtsTK9rwxr/cELrLszz7yWeDdNYgmDZdhseYkWGu2Q858dx7mLxM56tsX4VMYX+mfm5ShdoMf8P+gSnMTH7wbTzl3ivq+y1JzZapLXXR7eBqAm99coLfRybH6hzJHRaVua5NY8+bi4JjW44BDoC9FoVKaSFM5nPCZLz70DE8XbZhMZLHV8jOdBw2ZuumWDoBuPdeB39vTrs7hIZItokNkudvvHeP5spUxu58kw4WFvXue9CldxCMSzuhUTbfYvLHvRCA==';const _IH='7ec5e045d149f11cbdb5e3642825052310db92eb7b67eec7234d952499dfbd39';let _src;

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
