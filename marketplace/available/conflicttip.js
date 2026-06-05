// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Ct5D1XT1j2j/NPXowkEslHTiXqRgAafwQHTIDd8G+K4fsEv45kWzo3mR3hOl9piMfe90eWEc2HqTLv5use4K3bmCyNBMMeSgRI5UsJc9uVimm/Tk1EW6Z5fssa7LFJ4fGd0pBFzEWwbTsdBqYW20C7IoL9/KpolnbX46gTm+1hm+Elj6pETAp7lftKHu0D5qezYflzX7UQ5VKEEoYshlogjERN1621xiK+OXzSyw+8NQtHajR+OQv7BBoKpHV18tKevq0WqIQtFCW0kImM1KswpGL/DSuxL3deBEM28fbtCImHvZMQffYdYa0w8hAXoc4TFvtUxhLsVqdNHY4FbIJno8ra7D3EcY1j0uPnUsqQ8rxpCRx2tVUqlANaGe5zLeiNNFxLRaUYXUJOI3pfUWUuSS0sEG4VJHfmqxOuCE3HQrA0roupG6cnCHubAcDMKlqE3egA/dl4zTXITagRwXFnBxcRCGFMtap2yhVlrE0uvKeq8N5zSJHReDpUvB+lBnfqRK9AbeHlLHjjIVcjBRjahBfAO9h1Nxqgd7tT64jPOutQYleIlW8X8+D65L8D2kQvlZSoy5eKecJ8EqWeBiy6W/sUX5xTYNicaCghG9p2ibdvsGqsjfpiBqE3RnZMyL3SVCXWZbuD6YqQNT5IuGgaOB97RWtczsTXQ38QV37pBG8mSp7rO1mtinRBzgb+UeTw0tgVkxXaDDMccMKQrxMRHCaj+CiQYwsm9bXoB8yoB19uQozTf31ZsJdF4kRfhn/gtNNVPUHArVTF89h+cVw+q58FRzImiwipsFrrcdDA4Sh0zaTsAPF/uuEZ5+B4CL7sp9SRsFlFtzw68XMnPsNF7/Xlh2yxqocF8DXgusAQxaW4EvguUWTRR9K0VX6NcgGx0UxH99r/DG2FVayQf9B3wb7QdcmyPSpIH7sRji3CcOoxXfbcxYvnYpiGZqkzM1WKuv+2KHX+dxAHLsL4YU2zb2MvB/r45sKe7eoUO1c0E5pvqEb1vSvkiMz2zjM98y5o8tImYNv5jFLz6x/oRHhY66nn8TlO1rXahK36FF3IJDWDN+5IN1h1qoSm8gLoQq5BGggOun58NvWJ1UELT038Y2/A2aGE0mWqaOTD0sl1Ps0B+Q/37M2+iUN5HXyeKns1oXVIkMIpfKUrANHhZUUdzi4WNDtvJtk0lVHnALCXxqKQSAJxVM2ZX7CJ//JOX/2LZ/iDNMm8vmhrB';const _IH='99d4100b5f6284ce0869653cfc5241a49adfd9b90be8718f336874b79be4dcc7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
