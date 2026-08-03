// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMcxT/6NLBH4GVutcvJuc1vnREnTqTtOYUOjUiwq8Yyzx5GIFR444YBV5uV2iLLqA7I4eOmNewHck51TN3lJENNmWZHCqsj6fBRqCqlcpEnFE4oCuFvl+gIKD3C1i4AGYzJzZPxh5WYxQzbK7oUmQbDLegauJ4iyf+3aqlxuJ05nIHWoblREoYoOAcN+MwVsqEzHBueXZgghFHMXVlRaBxhTmwjOzPyCMFG5sKIZRCTB+rkHBdg2E0ij0+w4R+I5Uku+ggNxdHSCTILDCNqKjU2F+1taoLOSjIjNCZadD6e6Xgw09jy6aZU7f8KeS8kXfjO2nqzksUzIY9ioVKjjcFeSQVvgHgZuvA3zvX+X2YMv4U3zMneguOb8TmljKSsLO9nCXuN6eCIz7tP4gR6neHELf419Tdq5uEBxe5v13Je/gnJEm5RNPwfhZoALDKePZ7RBAdKHDZuzt+Mp9Zo0SSLLw5OP2lnXcyTEa2JLZz5EMIKud/1tWeK9HJJxxsUoU1wH63U7veD7eQT5Ec4cQuUIZIIslbiLZymiQi+625l5UlVhA5UDw/QrmowFO5GJpv6TwznTI5VjM8oHCNmZipiOqPkU9u66F1Hsq+2Wojv16VePPC7StqJbKNwp9ANsF09YgZj6N0SEk9hlBJ+a/99SR4wkVDGmIduSyAwSmZeMimBrFMn+LLTBNAZGUC/K7Ta2mYzMC8OUcpORvXeHhZDT+9xAulG4HBI5ALYylj5d9DaG9+cX1m9rISh+AykhUMkBLHILR/2XAmTt8OM1sFIKQMbGZrTTiwcEjt1wFS7mvEbDvAFX/snwkgS+LoxXHTLbnAO3om7Zc+V3qtD91/CJCGnSMFnasGRyC+SKvF+g3Edb2AG0PzXJvtC+3qxJCmxc4uwnVg/eePaETp6AmW6yJBcFuMUJ36/2UYYF3iTPkcaAMN9Mhyxm90FdYX+M6FFcjvbE8XJEVoTxb8Kik4U+16348NPov6k6st1bY724XFq8/ZmhZFYNvxw8WiY5IxagOXbMCRy+dp6FUn0VA40nhHOgg2ZoZF4I9xTPc7PJiKdsrB/52h658e8qDi27QpQ7yWH5GpHSiW+czLKxomWBSHxg4mXCmAF4WIxtGzepnBZMqZPmwDj2Cop1/ScDp2fwl4M0wBkkc72dwRLfxNaQRn7W00iZQV4UnVlqRnFxJIPRQ+H1Qt0h7CYmgGaCKEOkfgVejuPU0U7cEBO7n3kqRh9HfKhb8gfl0sH9ely86rR0mv2RTtpPHkzE9RWkapastzBouvCtbSOFrMLN9UYo4fJV4sg3V27KweIyA/b4jJoEuzTITp5G/uA9jh2Fzfy7Af+Ipw/MUq6OE68DcaloGkXUodMoA/P8RNGABbHfA6Mh+UhoUq5s+sxqXeuIqoekLdkE+EgNo=';const _IH='6a598ab22704bd878c4a7db6c826fffa2deab256714cd677f4d97328c8891aff';let _src;

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
