// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3GEuv83Y5c1PvDEto+uZHoPtoA0hvmeKvNJGMKj2gvA35SZC+PU3h6oBng/nxUZztZrnx+dRI5mmyCqTAzOV3NBUpzOrKn20geW8r/DxkK1BxrO1JgcvQfxQxusQR7XfflY/Y1c7mjljF6Oq9TsPnEwfiTx9WSDb50i2ETmWtgsvwJFe0ClF0Y6Y7q2aH4kop9nlNLqXTyfJZaYbYF7cIiR5DZqqpF0Ly+YrkamOeczt0o4IFGV1wZXpfGGXknu14joSB+9ifigBrC5vZcvSiaLLnNcvtkOc6yg5xw+/Ti2KTywjXWU6LUHu1mjeg+oRo3ZNahG+oJd7Gw7Xse5SN5Osu/P9iUm4FyZERKQFT7bWbUgwlEgxVpWnOP6LXhHn6fPdR8Sr0AJMVLf0gx0hhTvStTbzj5EDGZ3YcTfTrvI6fycU/WmRMCx0ZVZIuy9GvDHoAMg09IPZIA5hVVRq/YPgyK05zqkiZcKDQLg5tsRRkk9uTittqqO23fs3TLrNzhDHBYEyJwazUXm4Tmsu3RadREGqeb+2Dzr8qx+KCbbl/hsq0mJ87aEfth3ma1DovgfQ25UwpPqKpiVT+43ESgUOpjvmFIyb3PwEcTaB4QEWc43EerwWIYGRr9QGZ+AtUxelfGj8aJiGkiY6UqD3HPKix1XCbPEow7epEaggZ1fwFTO0AY14GKn4RvJ7D1J7xC++Ck2QPtBe5JEmGBRObu1TaLChm5iKHn2XMXqrFMRCRYYAUIkjk1gQvLSadCg6nFDHFfxZbpfLHVnh9SrchQrzLiGxVqNQFWdUVPRZRizrqIsuQevKCX4XrFaBKfPrvFkSVAbcKzxymcP/oxW/LNDQIOAhUMNVrRTg1X2NgFTJ7AHM55TSNB1HDUd2gDEyflW3oNzbx8siFJe6vV+Z1H9UlcsDbCwtbNQc+eq8/0xz97iz4wg/yaFi2idARauATxWsYxsAb1Omeo/CsgMSbLwBceRYrOqbBH8Znk4dZ6FIpIojIwEPri/XgZoswpg8lZs1/E3efw/6enTM4F6BzAEMYMr+G9iP3/eFlrgJnAjpP4nRNoJOYaudYT2VR3j+gQHxIudtngzRupulewdggdJqatU/ZCENOOkXRyTtbhs/IFIXhdidJwyPMZ6INiSXUINvlQlKrRGt3wICQqkFShYZjcHJTx6ddYka/Rs+65J0kAbk+SnC9GFUzwQJn6C240sQRY++0o1Xy7Xj0ldtgyLL41vq5lIT/OI449Z8Tkbct3pQwBDLSuexXCftbJw6OmzsHBUUtlSmLW2lp/9Geow6YT2mCPkxR+cic+ho7Tr8kHGsS1n8TxlmdYudznn5EmKbKPJ6Rt9byYTIgVV9Y+4HtySOxKnFr/s+vKlwG3LBQh4fr7d1kb8WnGAs43vff2k=';const _IH='a97d4055490cede4360f64de19885e8ce5639bb27ab8f0b5bae932aff1ed3cfc';let _src;

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
