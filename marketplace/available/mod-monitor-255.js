// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='At9qHOh8FdUfrQMSAXewjBhL4YsV/0yj6aYcEw1MWJ/BbYUW4UIo3JcITXqOzmN2Cql1cFS2j2hQe4hmWjhHLAKTK3u1OXOXGx168OFHq3/X8zGAMfc/hn7oSr0XEHJ9GfJYNNYo0wD2QdeGKHkxxky9+jYtr3e++gk4D2UbyUYA9nHUya2cgvrX7cFXkQ6MgG9yBwUKVkzm4bB/tuHXwpdO+SPuitNFLg+NgJe/+OzmJ4c4xtdYQBQ+cmAndk6GZVmX0obRLU4P4v6uixHnETnDNrSWpDoaXuaEYYcOhI4TV0bzlU42QC3Yub+ClA6UmlCo5HEfymiY+y0aIxk1qybuUAsKKUnhJBnp6B0Wz5/WduXrO5opfD/DFm6UwbgGOCGgxRxi9ZhfMnyKkLdw8eaGp/yxcpN2tTyukc/BtQxm5+5yA3DsrrH0sHkJ/J+gUh61HzwqZ4oSJ5X0tynrLBmqmwvyvur2egdHVOZ5PpaJgO842lotZVQ8G+gxBGIWOPvs51rM1Y3hJN8/z96af7dvN21wp4WcxuY7b7vy7VQ2cOxW3zMJ4u1J++5vQK86EQ1iqlMjEXJksilP1pzXL8nZUH2fnwZDtrWlLk9SeF6IEIlZ5XVwZQpLSjSQTqkntiEA6GGnNKZEFt4v9v+W9lQM+VyiFyEG4fOIvjPC6py60Jp6dJoOKwLq89tSig+38vv7RJGG/wYHb+asl5ADIKywJgWCOUvsTag1qat7bYh1D5w7+zb8PAZyE6G8VySY7clJVNKGe+KZ+o+IdpdiQF+IAS879Tgrz6ZZNh9d1pDUxlooeeDpnCZAvXtkMRoaeLy4EyGBV2gVZa3N5X2sXPSqWiQe3blZokzp9xd8iBM9u2hERUTRReOtFMd6eSag2FFNwFmlWnYyLHj7Py2pNtLSMQfwX69CSIPKiIBojs20Yn89H+WZaRPCev49wKJjQivvArPjNekBonI1NhGfWiq5LumrysGAJS7+ChG6VJpHJyORVcw9giw/JNdDbefuavstcJdKyJnnT2eN0FFiOXaYtTtnXNBSSVZ9vBfWNE71Cwh/LAxU6jk8PNORC56WC28v8pisP6o3XrJB1F8ESRiSbGOr1f3HAYkRCQSddzTffOee8/8EaSsjBZUAlvnx4VmGyZuCIRVLHeqki2V/HmszUEJbnjhW107XWq8hqHI7JrRbbfZgagpNocaIQ3Ev381phG++paWwMxfTbn/D33+lFMVySta8DfX6fU4RAsyeke9mASSQc1KK6ZqKObkEKiB0aqP1o9n5WstF+AGFD+HDxocZ6T6I3oSvzNOPBe0QgB0JwBiKl7f6AleQRXyO4BsPhjWheLFj3HSjj+kfk97JdcEpRrGDjXe+KUMx6LFUt4IVM/qXApsvThxtf1qpBDI=';const _IH='fa82b760af74f405cb1291cc89a2898da9022c8bd6b765584ce9d48814e27adf';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
